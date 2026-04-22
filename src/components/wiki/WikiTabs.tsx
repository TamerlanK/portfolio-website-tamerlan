import { WIKI_TABS, type WikiTab } from "@/constants/portfolio-navigation"
import { wiki } from "@/styles/wiki"

import { WikiSearch } from "./WikiSearch"

type WikiTabsProps = {
  active: WikiTab
  onChange: (tab: WikiTab) => void
}

export function WikiTabs({ active, onChange }: WikiTabsProps) {
  return (
    <div className={wiki.tabsRow}>
      <div className={wiki.tabs}>
        {WIKI_TABS.map((tab) => (
          <button
            className={`${wiki.tab} ${active === tab ? wiki.activeTab : ""}`}
            key={tab}
            onClick={() => onChange(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      <WikiSearch />
    </div>
  )
}
