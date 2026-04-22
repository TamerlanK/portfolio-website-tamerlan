import { useState } from "react"

import { wiki } from "@/styles/wiki"

type ExperienceBulletsProps = {
  bullets: string[]
}

export function ExperienceBullets({ bullets }: ExperienceBulletsProps) {
  const [expanded, setExpanded] = useState(false)
  const visibleBullets = expanded ? bullets : bullets.slice(0, 3)

  return (
    <div>
      <ul className={wiki.bulletList}>
        {visibleBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {bullets.length > 3 && (
        <button className={wiki.showMore} onClick={() => setExpanded((value) => !value)} type="button">
          [{expanded ? "show less" : `show ${bullets.length - 3} more`}]
        </button>
      )}
    </div>
  )
}
