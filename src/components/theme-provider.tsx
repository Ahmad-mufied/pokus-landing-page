"use client"

import * as React from "react"
import {ThemeProvider as NextThemesProvider, type ThemeProviderProps} from "next-themes"

export function ThemeProvider({children, ...props}: Omit<ThemeProviderProps, "children"> & {
  children?: React.ReactNode
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}