import { REFERENCES } from "@/constants/portfolio-data"
import { scrollToElement } from "@/lib/scroll"
import { wiki } from "@/styles/wiki"

type ReferenceLinkProps = {
  n: number
}

export function ReferenceLink({ n }: ReferenceLinkProps) {
  return (
    <sup
      className={wiki.ref}
      title={REFERENCES[n - 1]?.text}
      onClick={() => scrollToElement(`ref-${n}`, "center")}
    >
      [{n}]
    </sup>
  )
}
