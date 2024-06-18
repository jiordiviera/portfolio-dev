"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "next-themes";

export const WavyBackground = ({
                                   children,
                                   className,
                                   containerClassName,
                                   colors,
                                   waveWidth,
                                   blur = 10,
                                   speed = "fast",
                                   waveOpacity = 0.5,
                                   ...props
                               }: {
    children?: any;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    [key: string]: any;
}) => {
    const { theme } = useTheme();
    const noise = createNoise3D();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];
    const drawWave = (ctx: CanvasRenderingContext2D, w: number, h: number, n: number) => {
        let nt = 0;
        let i: number, x: number;
        const animate = () => {
            nt += getSpeed();
            for (i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth || 50;
                ctx.strokeStyle = waveColors[i % waveColors.length];
                for (x = 0; x < w; x += 5) {
                    const y = noise(x / 800, 0.3 * i, nt) * 100;
                    ctx.lineTo(x, y + h * 0.5);
                }
                ctx.stroke();
                ctx.closePath();
            }
            requestAnimationFrame(animate);
        };
        animate();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                const w = canvas.width = window.innerWidth;
                const h = canvas.height = window.innerHeight;
                ctx.filter = `blur(${blur}px)`;
                window.onresize = () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    ctx.filter = `blur(${blur}px)`;
                };

                const render = () => {
                    const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
                    ctx.fillStyle = backgroundColor;
                    ctx.globalAlpha = waveOpacity || 0.5;
                    ctx.fillRect(0, 0, w, h);
                    drawWave(ctx, w, h, 5);
                };

                render();
            }
        }
    }, [theme, blur, waveOpacity]);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={cn(
                "w-screen flex flex-col items-start justify-start",
                containerClassName
            )}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};