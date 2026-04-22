import { TOC_ITEMS } from "@/constants/portfolio-navigation"
import { scrollToElement } from "@/lib/scroll"
import { wiki } from "@/styles/wiki"

type TableOfContentsProps = {
  visible: boolean
  onToggle: () => void
}

export function TableOfContents({ visible, onToggle }: TableOfContentsProps) {
  return (
    <div className={wiki.toc}>
      <div className={wiki.tocTitle}>
        <span>Contents</span>
        <button className={wiki.tocToggle} onClick={onToggle} type="button">
          [{visible ? "hide" : "show"}]
        </button>
      </div>
      {visible && (
        <ul className={wiki.tocList}>
          {TOC_ITEMS.map((item) => (
            <li className={`${wiki.tocListItem} ${item.sub ? wiki.tocSubItem : ""}`} key={item.id}>
              <a
                className={wiki.tocAnchor}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToElement(item.id)
                }}
              >
                <span className={wiki.tocNumber}>{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
