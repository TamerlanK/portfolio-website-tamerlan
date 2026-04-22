import { useEffect, useId, useState } from "react"

import cvUrl from "@/assets/TamerlanKangarliCV.pdf?url"
import { wiki } from "@/styles/wiki"

import { PdfDocumentViewer } from "./PdfDocumentViewer"

type CvActionsProps = {
  compact?: boolean
}

export function CvActions({ compact = false }: CvActionsProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!isViewerOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsViewerOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isViewerOpen])

  return (
    <>
      <div className={wiki.cvActions}>
        <button
          className={wiki.cvActionLink}
          onClick={() => setIsViewerOpen(true)}
          type="button"
        >
          Review CV
        </button>
        <a
          className={wiki.cvActionLink}
          download="TamerlanKangarliCV.pdf"
          href={cvUrl}
        >
          {compact ? "Download" : "Download CV"}
        </a>
      </div>

      {isViewerOpen && (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className={wiki.cvViewerBackdrop}
          onClick={() => setIsViewerOpen(false)}
          role="dialog"
        >
          <div className={wiki.cvViewerDialog} onClick={(event) => event.stopPropagation()}>
            <div className={wiki.cvViewerHeader}>
              <div className={wiki.cvViewerTitle} id={titleId}>
                Tamerlan Kangarli CV
              </div>
              <button
                className={wiki.cvViewerClose}
                onClick={() => setIsViewerOpen(false)}
                type="button"
              >
                Close
              </button>
            </div>
            <PdfDocumentViewer src={cvUrl} />
          </div>
        </div>
      )}
    </>
  )
}
