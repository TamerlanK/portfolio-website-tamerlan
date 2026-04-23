import type { WikiTheme } from "@/hooks/useWikiTheme"
import { wiki } from "@/styles/wiki"

import { WikiSearch } from "../wiki/WikiSearch"

type WikiHeaderProps = {
  onThemeChange: (theme: WikiTheme) => void
  theme: WikiTheme
}

export function WikiHeader({ onThemeChange, theme }: WikiHeaderProps) {
  return (
    <header className={wiki.header}>
      <div className={wiki.logoSection}>
        <div className={wiki.logo}>
          <span className={wiki.logoGlobe}>🌐</span>
        </div>
        <div className={wiki.wordmark}>
          <span className={wiki.wordmarkTitle}>Middle Frontend Developer</span>
          <span className={wiki.wordmarkTagline}>Building clean systems</span>
        </div>
      </div>
      <WikiSearch />
      <div className={wiki.headerActions}>
        <div aria-label="Appearance" className={wiki.themeControl} role="group">
          {(["light", "dark"] as const).map((themeOption) => (
            <button
              aria-pressed={theme === themeOption}
              className={`${wiki.themeOption} ${
                theme === themeOption ? wiki.themeOptionActive : ""
              }`}
              key={themeOption}
              onClick={() => onThemeChange(themeOption)}
              type="button"
            >
              {themeOption === "light" ? "Light" : "Dark"}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
