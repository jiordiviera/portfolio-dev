'use client'

import React from "react"
import { motion } from "framer-motion"
import { TypewriterEffect } from "@/components/ui/typerwriter-effect"
import { Button } from "@/components/ui/button"
import { FaLaravel, FaDatabase, FaGit, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
    interface WordsInterface{
        text: string,
        className?: string
    }
    const words: WordsInterface[] = [
        {
            text: "Hi, I'm",
            className: "text-foreground/80",
        },
        {
            text: "Jiordi Viera",
            className: "text-primary font-bold",
        },
    ]
interface SkillInterface{
    name: string,
    icon: React.ReactNode,
    color: string
}
    const skills: SkillInterface[] = [
        { name: "Laravel", icon: <FaLaravel />, color: "text-red-600" },
        { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "MySQL", icon: <FaDatabase />, color: "text-blue-500" },
        { name: "Git", icon: <FaGit />, color: "text-orange-500" },
    ]

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
            >
                <div className="mb-8">
                    <TypewriterEffect words={words} />
                </div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-foreground/90"
                >
                    Fullstack Laravel & React Developer
                </motion.h2>

                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <p className="text-lg text-foreground/70 mb-4">
                            Passionate about creating robust web applications with a focus on clean code and optimal database design. Experienced in building scalable solutions and continuously learning new technologies.
                        </p>
                        <Button
                            asChild
                            className="w-full sm:w-auto px-6 py-2 text-lg font-semibold"
                        >
                            <Link href={"/download/CV-KENGNE-TCHINDA-JIORDI-VIERA-DEVELOPPEUR-FULLSTACK.pdf"} download={true}>Download My CV</Link>
                        </Button>
                    </CardContent>
                </Card>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm ${skill.color}`}
                        >
                            {skill.icon}
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        asChild
                        variant="outline"
                        className="px-6 py-2 text-lg font-semibold"
                    >
                        <Link href="/work">View My Projects</Link>
                    </Button>
                    <Button
                        asChild
                        className="px-6 py-2 text-lg font-semibold"
                    >
                        <Link href="/contact">Contact Me</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </main>
    )
}

