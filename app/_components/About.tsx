"use client";
import React from "react";
import {WavyBackground} from "@/components/ui/wavy-background";
import {useTheme} from "next-themes"
import {TypewriterEffectSmooth} from "@/components/ui/typerwriter-effect";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import {AuroraBackground} from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import {Button} from "@/components/ui/moving-border";

export function About() {
    const {theme, setTheme} = useTheme();
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
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 justify-center lg:px-56 px-12 pt-20 w-full max-h-24"
            >
            <div className="text-3xl  font-bold md:text-4xl lg:text-7xl">
                <TypewriterEffectSmooth className={"flex items-center"} words={words}/>
            </div>
            <p className="text-xl text-center md:text-start sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 text-foreground font-normal">
                {`A fullstack laravel developer with a passion for programming,\n especially web development, and a strong interest in databases.`}
            </p>
                <div className="flex my-10">
                    <Button linkDownload={"/download/CV.pdf"}
                        borderRadius="1.75rem"
                        className="bg-background text-foreground font-medium border-neutral-200 dark:border-slate-800"
                    >
                        {`Download My CV`}
                    </Button>
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
