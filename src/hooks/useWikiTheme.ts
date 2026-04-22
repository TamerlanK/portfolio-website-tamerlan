import { useEffect, useMemo, useState } from "react"

export type WikiTheme = "light" | "dark"

const STORAGE_KEY = "wiki-portfolio-theme"

function isWikiTheme(value: string | null): value is WikiTheme {
  return value === "light" || value === "dark"
}

function getInitialTheme(): WikiTheme {
  if (typeof window === "undefined") {
    return "light"
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)

  if (isWikiTheme(storedTheme)) {
    return storedTheme
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function useWikiTheme() {
  const [theme, setTheme] = useState<WikiTheme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return useMemo(
    () => ({
      isDark: theme === "dark",
      setTheme,
      theme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark")),
    }),
    [theme],
  )
}
