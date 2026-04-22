import type { ReactNode } from "react"

import { wiki } from "@/styles/wiki"

type HatnoteProps = {
  children: ReactNode
}

export function Hatnote({ children }: HatnoteProps) {
  return <div className={wiki.hatnote}>{children}</div>
}
