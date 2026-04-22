import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"

import { wiki } from "@/styles/wiki"

type WikiLinkProps = {
  children: ReactNode
  href?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

export function WikiLink({ children, href, onClick, className = "", ...props }: WikiLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      event.preventDefault()
    }

    onClick?.(event)
  }

  return (
    <a href={href ?? "#"} className={`${wiki.link} ${className}`} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
