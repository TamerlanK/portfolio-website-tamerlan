import type { AnchorHTMLAttributes, ReactNode } from "react"

import { wiki } from "@/styles/wiki"

type WikiLinkProps = {
  children: ReactNode
  href?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

export function WikiLink({ children, href, className = "", ...props }: WikiLinkProps) {
  if (!href) {
    return <strong className={`${wiki.textHighlight} ${className}`}>{children}</strong>
  }

  return (
    <a href={href} className={`${wiki.link} ${className}`} {...props}>
      {children}
    </a>
  )
}
