import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="w-full py-6 px-4 bg-background/80 backdrop-blur-sm border-t border-border md:block hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-foreground/60 mb-4 md:mb-0">
                    © {new Date().getFullYear()} Jiordi Viera. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <Link href="https://github.com/jiordiviera" className="text-foreground/60 hover:text-primary transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/jiordi-viera" className="text-foreground/60 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://twitter.com/jiordi_kengne" className="text-foreground/60 hover:text-primary transition-colors">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
