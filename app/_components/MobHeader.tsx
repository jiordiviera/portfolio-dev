'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { House, Linkedin, LucideGitlab, Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'

export const MobHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    type SocialLink = {
  url: string
  icon: React.ReactNode
}
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]
    const socialLinks: SocialLink[] = [
  { url: "https://www.linkedin.com/in/jiordi-viera/", icon: <Linkedin />},
  { url: "https://x.com/jiordi_kengne", icon: <X />},
  { url: "https://gitlab.com/jiordikengne", icon: <LucideGitlab />},
]

    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[500px] p-4 backdrop-blur bg-background/80 rounded-lg shadow-lg md:hidden">
            <div className="flex justify-between items-center text-foreground text-2xl">
                {/* Home Icon Link */}
                <Link href="/" aria-label="Home" className="hover:text-primary transition-colors">
                    <House />
                </Link>
                {socialLinks.map((social, index) => {
                    return (
                        <Link key={index} href={social.url}>
                        {social.icon}
                        </Link>
                    )
                })}

                {/* Menu Button and Drawer */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <AnimatePresence>
                        {isOpen && (
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4 z-[101] ">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Header and Close Button */}
                                    <SheetHeader className="flex justify-between items-center mb-6">
                                        <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>

                                    </SheetHeader>

                                    {/* Navigation Links */}
                                    <nav className="flex flex-col space-y-4">
                                        {menuItems.map((item, index) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="block py-2 px-4 text-lg rounded-md transition-colors duration-200 hover:bg-primary/10"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </motion.div>
                            </SheetContent>
                        )}
                    </AnimatePresence>
                </Sheet>
            </div>
        </nav>
    )
}
