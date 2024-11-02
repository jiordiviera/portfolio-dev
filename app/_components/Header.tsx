"use client"

import React from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaGitlab } from "react-icons/fa"
import { RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri"
import { Button } from "@/components/ui/button"
import { LinkPreview } from "@/components/ui/link-preview"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavLink = {
  href: string
  label: string
}

type SocialLink = {
  url: string
  icon: React.ReactNode
  imageSrc: string
}

const navLinks: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]


const socialLinks: SocialLink[] = [
  { url: "https://www.linkedin.com/in/jiordi-viera/", icon: <RiLinkedinBoxFill />, imageSrc: "/images/linkedin.png" },
  { url: "https://x.com/jiordi_kengne", icon: <RiTwitterXFill />, imageSrc: "/images/twitter.png" },
  { url: "https://gitlab.com/jiordikengne", icon: <FaGitlab />, imageSrc: "/images/gitlab.png" },
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
        <div className="flex justify-between items-center backdrop-blur bg-background/80 rounded-lg border border-border py-3 px-4">
          <Link href="/" className={cn("text-lg font-bold")}>
            Dev Jiordi
          </Link>

          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn("font-medium hover:text-primary transition-colors",pathname==link.href && "text-primary")}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4 lg:space-x-6 text-2xl border-r border-border pr-4">
              {socialLinks.map((link) => (
                <LinkPreview key={link.url} isStatic url={link.url} imageSrc={link.imageSrc}>
                  {link.icon}
                </LinkPreview>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full bg-background/90 shadow-lg shadow-foreground/5 ring-1 ring-border backdrop-blur transition"
            >
              <LightLogo />
              <DarkLogo />
              <span className="sr-only">Toggle theme</span>
            </Button>

          </div>
        </div>
      </div>
    </motion.header>
  )
}

const LightLogo = () => (
  <svg
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 fill-primary/10 stroke-primary transition group-hover:fill-primary/20 group-hover:stroke-primary dark:hidden"
  >
    <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
    <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none" />
  </svg>
)

const DarkLogo = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="hidden h-6 w-6 fill-primary/10 stroke-primary transition group-hover:fill-primary/20 group-hover:stroke-primary dark:block"
  >
    <path
      d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
