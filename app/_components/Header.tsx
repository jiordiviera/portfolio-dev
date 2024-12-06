"use client"

import React from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Moon, Sun, Twitter, Home, Briefcase, Newspaper, Mail, Coffee, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { LinkPreview } from "@/components/ui/link-preview"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavLink = {
  href: string
  label: string
  icon: React.ReactNode
}

type SocialLink = {
  url: string
  icon: React.ReactNode
  imageSrc: string
  label: string
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "/work", label: "Work", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/blog", label: "Blog", icon: <Newspaper className="w-5 h-5" /> },
  { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  { href: "/packages", label: "Packages", icon: <Package className="w-5 h-5" /> },
]

const socialLinks: SocialLink[] = [
  { url: "https://github.com/jiordiviera", icon: <Github className="w-5 h-5" />, imageSrc: "/images/github.png", label: "GitHub" },
  { url: "https://www.linkedin.com/in/jiordi-viera/", icon: <Linkedin className="w-5 h-5" />, imageSrc: "/images/linkedin.png", label: "LinkedIn" },
  { url: "https://x.com/jiordi_kengne", icon: <Twitter className="w-5 h-5" />, imageSrc: "/images/twitter.png", label: "Twitter" },
]

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
      <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full py-4 lg:py-6 px-4 lg:px-8 fixed top-0 left-0 right-0 z-[100] text-foreground"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center backdrop-blur-md bg-background/80 rounded-lg border border-border py-3 px-4 shadow-lg">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                  src="https://avatars.githubusercontent.com/u/157500676?v=4&size=64"
                  alt="Jiordi Viera"
                  width={40}
                  height={40}
                  className="rounded-full"
              />
              <span className="text-xl font-bold">Jiordi Viera</span>
            </Link>

            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                  <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                          "px-3 py-2 rounded-md font-medium transition-colors flex items-center",
                          pathname === link.href
                              ? "text-primary bg-primary/10"
                              : "hover:text-primary hover:bg-primary/5"
                      )}
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-2 lg:space-x-3 text-2xl border-r border-border pr-4">
                {socialLinks.map((link) => (
                    <LinkPreview key={link.url} isStatic url={link.url} imageSrc={link.imageSrc}>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" aria-label={link.label}>
                        {link.icon}
                      </Button>
                    </LinkPreview>
                ))}
              </div>

              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full hover:bg-primary/10"
                  aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>
  )
}
