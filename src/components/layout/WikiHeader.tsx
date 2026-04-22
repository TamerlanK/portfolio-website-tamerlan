import { WikiLink } from "@/components/common/WikiLink"
import { wiki } from "@/styles/wiki"

export function WikiHeader() {
  return (
    <header className={wiki.header}>
      <div className={wiki.logoSection}>
        <div className={wiki.logo}>
          <span className={wiki.logoGlobe}>🌐</span>
        </div>
        <div className={wiki.wordmark}>
          <span className={wiki.wordmarkTitle}>WikiPortfolio</span>
          <span className={wiki.wordmarkTagline}>The Free Personal Encyclopedia</span>
        </div>
      </div>
      <div className={wiki.headerLinks}>
        <WikiLink>Create account</WikiLink>
        <WikiLink>Log in</WikiLink>
      </div>
    </header>
  )
}
