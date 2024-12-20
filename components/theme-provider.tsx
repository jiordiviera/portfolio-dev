"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/reactQuery"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return ( <QueryClientProvider client={queryClient}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
        </QueryClientProvider>)
}
