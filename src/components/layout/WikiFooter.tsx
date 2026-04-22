import { WikiLink } from "@/components/common/WikiLink"
import { wiki } from "@/styles/wiki"

export function WikiFooter() {
  return (
    <footer className={wiki.footer}>
      Content is available under <WikiLink>Creative Commons Attribution-ShareAlike 4.0</WikiLink>{" "}
      unless otherwise noted.
      <br />
      WikiPortfolio® is a registered trademark of the WikiPortfolio Foundation, Inc., a non-profit
      organization.
      <br />
      <br />
      <WikiLink>Privacy policy</WikiLink> · <WikiLink>About WikiPortfolio</WikiLink> ·{" "}
      <WikiLink>Disclaimers</WikiLink> · <WikiLink>Contact WikiPortfolio</WikiLink> ·{" "}
      <WikiLink>Code of Conduct</WikiLink>
    </footer>
  )
}
