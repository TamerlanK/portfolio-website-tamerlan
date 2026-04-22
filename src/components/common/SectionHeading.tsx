import type { ReactNode } from "react"

import { EditLink } from "@/components/common/EditLink"
import { wiki } from "@/styles/wiki"

type SectionHeadingProps = {
  id: string
  children: ReactNode
  level?: 2 | 3
}

export function SectionHeading({ id, children, level = 2 }: SectionHeadingProps) {
  const HeadingTag = level === 2 ? "h2" : "h3"

  return (
    <HeadingTag className={`${level === 2 ? wiki.h2 : wiki.h3} ${wiki.anchorTarget}`} id={id}>
      {children} <EditLink />
    </HeadingTag>
  )
}
