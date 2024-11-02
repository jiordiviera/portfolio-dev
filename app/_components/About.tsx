"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typerwriter-effect";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {motion, MotionProps} from "framer-motion";
import { Button } from "@/components/ui/moving-border";


export const MotionDiv: React.FC<MotionProps & React.HTMLProps<HTMLDivElement>> = motion.div;
export function About() {
    const words = [
        {
            text: `Hi I'm`,
            className: "text-foreground/60",
        },
        {
            text: "Jiordi Viera",
            className: "text-primary",
        },
    ];



    return (
        <AuroraBackground>
            <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-6 justify-center px-6 md:px-20 lg:px-36 pt-24 w-full max-w-5xl mx-auto"
            >
                {/* Introduction avec effet de typewriter */}
                <div className="text-4xl font-bold md:text-5xl lg:text-7xl text-center md:text-start">
                    <TypewriterEffectSmooth
                        className={"flex items-center"}
                        words={words}
                    />
                </div>

                {/* Description du profil */}
                <p className="text-lg md:text-2xl lg:text-3xl text-center md:text-start mt-6 text-foreground/80 font-medium leading-relaxed">
                    {`A fullstack Laravel developer with a passion for programming, web development, and a strong interest in databases.`}
                </p>

                {/* Bouton Télécharger CV */}
                <div className="flex justify-center md:justify-start mt-10">
                    <Button
                        linkDownload="/download/CV.pdf"
                        borderRadius="1.75rem"
                        className="px-8 py-3 font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-nowrap"
                    >
                        {`Download My CV`}
                    </Button>
                </div>
            </MotionDiv>
        </AuroraBackground>
    );
}
