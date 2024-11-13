'use client'

import React from "react"
import { motion } from "framer-motion"
import { TypewriterEffectSmooth } from "@/components/ui/typerwriter-effect"
import { Button } from "@/components/ui/button"
import {FaLaravel,FaDatabase,FaGit,FaReact} from "react-icons/fa"

export function About() {
    const words = [
        {
            text: "Hi, I'm",
            className: "text-foreground/80",
        },
        {
            text: "Jiordi Viera",
            className: "text-primary font-bold",
        },
    ]

    const skills = [
        { name: "Laravel", icon: <FaLaravel />, color: "text-red-600" },
        { name: "React.js", icon: <FaReact />, color: "text-green-500" },
        { name: "MySQL", icon: <FaDatabase />, color: "text-blue-500" },
        // { name: "RESTful APIs", icon: <Api />, color: "text-purple-500" },
        { name: "Git", icon: <FaGit />, color: "text-orange-500" },
    ]

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
            >
                <div className="mb-8">
                    <TypewriterEffectSmooth words={words} />
                </div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90"
                >
                    Fullstack Laravel Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg md:text-xl text-foreground/70 mb-8"
                >
                    Passionate about creating robust web applications with a focus on clean code and optimal database design. Experienced in building scalable solutions and continuously learning new technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-8"
                >
                    {skills.map((skill, index) => (
                        <div key={index} className={`flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm ${skill.color}`}>
                            {skill.icon}
                            {skill.name}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <Button
                        asChild
                        className="px-6 py-2 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                        <a href="/download/CV.pdf" download>Download My CV</a>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    )
}
