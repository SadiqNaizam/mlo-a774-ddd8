"use client"

// A lot of this is inspired by how shadcn-ui handles theme toggling.
// https://ui.shadcn.com/docs/dark-mode/vite

// You should probably move this to a new file, e.g. src/components/theme-provider.tsx
// and import it in your root layout.

import { createContext, useContext, useEffect, useState } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: "system" | "light" | "dark"
  storageKey?: string
}

type ThemeProviderState = {
  theme: "system" | "light" | "dark"
  setTheme: (theme: "system" | "light" | "dark") => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<"system" | "light" | "dark">(() => {
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: "system" | "light" | "dark") => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}