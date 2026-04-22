import { scrollToPageTop } from "@/lib/scroll"
import { wiki } from "@/styles/wiki"

type ScrollTopButtonProps = {
  visible: boolean
}

export function ScrollTopButton({ visible }: ScrollTopButtonProps) {
  return (
    <button
      className={`${wiki.scrollTop} ${visible ? wiki.scrollTopVisible : ""}`}
      onClick={scrollToPageTop}
      title="Back to top"
      type="button"
    >
      ▲
    </button>
  )
}
