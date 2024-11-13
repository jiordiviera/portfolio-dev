'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Home, Briefcase, Newspaper, Mail, Menu, Settings, User, Coffee, Package } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

type NavItem = {
  name: string
  href: string
  icon: React.ReactNode
}

type MenuOption = {
  name: string
  href: string
  icon: React.ReactNode
}

export const MobHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems: NavItem[] = [
        { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
        { name: 'Work', href: '/work', icon: <Briefcase className="w-5 h-5" /> },
        { name: 'Blog', href: '/blog', icon: <Newspaper className="w-5 h-5" /> },
        { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
    ]

    const menuOptions: MenuOption[] = [
        { name: 'Skills', href: '/skills', icon: <Coffee className="w-5 h-5" /> },
        { name: 'Packages', href: '/packages', icon: <Package className="w-5 h-5" /> },
    ]

    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full p-2 backdrop-blur-md bg-background/80 border-t border-border md:hidden">
            <div className="flex justify-between items-center">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                            pathname === item.href
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground/60 hover:text-primary hover:bg-primary/5'
                        }`}
                    >
                        {item.icon}
                        <span className="text-xs mt-1">{item.name}</span>
                    </Link>
                ))}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options" className="rounded-lg">
                            <Menu className="!size-6" />
                        </Button>
                    </SheetTrigger>
                    <AnimatePresence>
                        {isOpen && (
                            <SheetContent side="bottom" className="h-[50vh] rounded-t-3xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col"
                                >
                                    <SheetHeader className="text-left pb-4 border-b border-border">
                                        <SheetTitle className="text-2xl font-bold">More Options</SheetTitle>
                                    </SheetHeader>
                                    <nav className="flex-grow py-6">
                                        {menuOptions.map((option, index) => (
                                            <motion.div
                                                key={option.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={option.href}
                                                    className={`flex items-center py-3 px-6 text-lg transition-colors duration-200 hover:bg-primary/10 ${
                                                        pathname === option.href ? 'text-primary font-medium' : 'text-foreground/80'
                                                    }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {option.icon}
                                                    <span className="ml-3">{option.name}</span>
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
