"use client"
import {useTheme} from "next-themes";
import {FaGitlab} from "react-icons/fa";
import Link from "next/link";
import {RiLinkedinBoxFill, RiTwitterXFill} from "react-icons/ri";
import {Button} from "@/ui/button";
import {LinkPreview} from "@/components/ui/link-preview";
import React from "react";

export const Header = () => {
    const {theme, setTheme } = useTheme()
    return (
        <div className="w-screen py-10 lg:px-56 max-[1200px]:px-25 px-20 fixed flex items-center z-[100] text-foreground">
            <div className="min-[900px]:flex hidden justify-between items-center w-full backdrop-blur bg-transparent rounded-lg border border-border py-5 px-4">
                <div className="flex justify-between items-center space-x-5">
                    <Link href={"/"} className="">Dev Jiordi</Link>
                    <div className="lg:space-x-8 space-x-2">
                        <Link className="font-medium" href="#about">About</Link>
                        <Link className="font-medium" href="#work">Work</Link>
                        <Link className="font-medium" href="">Contact</Link>
                    </div>
                </div>

                <div className="flex items-center  flex-row lg:space-x-5 space-x-2 text-2xl">
                    <div className="flex flex-row lg:space-x-8 space-x-4 border-r border-black pr-2">
                        <LinkPreview isStatic url="https://www.linkedin.com/in/jiordi-viera/" imageSrc="/images/linkedin.png"><RiLinkedinBoxFill/></LinkPreview>
                        <LinkPreview isStatic url="https://x.com/jiordi_kengne" imageSrc="/images/twitter.png"><RiTwitterXFill /></LinkPreview>
                        <LinkPreview url="https://gitlab.com/jiordikengne" isStatic imageSrc="/images/gitlab.png"><FaGitlab/></LinkPreview>
                    </div>
                    <div>
                        <Button onClick={()=>setTheme(theme ==="dark" ?"light": "dark")}
                            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                            <LightLogo/>
                            <DarkLogo/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex min-[900px]:hidden text-foreground justify-center w-full">
                <div className="text-center">Dev jiordi</div>
            </div>
        </div>
    )
}
const LightLogo = () => {
    return (
        <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
             className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-cyan-50 [@media(prefers-color-scheme:dark)]:stroke-cyan-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-cyan-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-cyan-600">
            <path
                d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"></path>
        </svg>
    )
}
const DarkLogo = () => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true"
             className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-cyan-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-cyan-500">
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}