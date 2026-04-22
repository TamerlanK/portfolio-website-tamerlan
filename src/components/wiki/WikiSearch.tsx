import { useState } from "react"

import { TOC_ITEMS } from "@/constants/portfolio-navigation"
import { scrollToElement } from "@/lib/scroll"
import { wiki } from "@/styles/wiki"

export function WikiSearch() {
  const [query, setQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  const filteredSections = query.trim()
    ? TOC_ITEMS.filter((item) => !item.sub).filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()),
      )
    : []

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
