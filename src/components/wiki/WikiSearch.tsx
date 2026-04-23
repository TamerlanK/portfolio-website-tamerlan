import { useState } from "react"

import { TOC_ITEMS } from "@/constants/portfolio-navigation"
import { scrollToElement } from "@/lib/scroll"
import { wiki } from "@/styles/wiki"

const HR_SUGGESTION_IDS = ["career", "skills", "projects"]
const HR_SUGGESTIONS = TOC_ITEMS.filter((item) => HR_SUGGESTION_IDS.includes(item.id))

export function WikiSearch() {
  const [query, setQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  const hasQuery = Boolean(query.trim())
  const filteredSections = hasQuery
    ? TOC_ITEMS.filter((item) => !item.sub).filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()),
      )
    : HR_SUGGESTIONS

  return (
    <div className={wiki.searchContainer}>
      <input
        className={wiki.searchInput}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        onChange={(event) => {
          setQuery(event.target.value)
          setShowDropdown(true)
        }}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search this article..."
        type="text"
        value={query}
      />
      <button className={wiki.searchButton} title="Search" type="button">
        🔍
      </button>
      {showDropdown && filteredSections.length > 0 && (
        <div className={wiki.searchDropdown}>
          {!hasQuery && <div className={wiki.searchGroupLabel}>HRs may be interested in</div>}
          {filteredSections.map((section) => (
            <button
              className={`${wiki.searchItem} block w-full text-left`}
              key={section.id}
              onMouseDown={() => {
                scrollToElement(section.id)
                setQuery("")
                setShowDropdown(false)
              }}
              type="button"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
