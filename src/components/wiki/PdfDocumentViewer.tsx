import { useEffect, useRef, useState } from "react"
import * as pdfjs from "pdfjs-dist"
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url"

import { wiki } from "@/styles/wiki"

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl

type PdfDocumentViewerProps = {
  src: string
}

export function PdfDocumentViewer({ src }: PdfDocumentViewerProps) {
  const pagesRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState("Loading CV...")

  useEffect(() => {
    let cancelled = false
    const container = pagesRef.current

    if (!container) {
      return
    }

    const pagesContainer: HTMLDivElement = container

    pagesContainer.replaceChildren()

    const loadingTask = pdfjs.getDocument(src)

    async function renderPdf() {
      try {
        const pdf = await loadingTask.promise

        if (cancelled) {
          return
        }

        setStatus(`Rendering ${pdf.numPages} page${pdf.numPages === 1 ? "" : "s"}...`)

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (cancelled) {
            return
          }

          const page = await pdf.getPage(pageNumber)
          const viewport = page.getViewport({ scale: 1 })
          const availableWidth = Math.max(pagesContainer.clientWidth - 24, 320)
          const scale = Math.min(availableWidth / viewport.width, 1.7)
          const scaledViewport = page.getViewport({ scale })
          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d")

          if (!context) {
            continue
          }

          canvas.width = Math.floor(scaledViewport.width)
          canvas.height = Math.floor(scaledViewport.height)
          canvas.style.width = `${Math.floor(scaledViewport.width)}px`
          canvas.style.height = `${Math.floor(scaledViewport.height)}px`
          canvas.className = wiki.cvViewerCanvas

          const pageWrapper = document.createElement("div")
          pageWrapper.className = wiki.cvViewerPage
          pageWrapper.append(canvas)
          pagesContainer.append(pageWrapper)

          await page.render({
            canvas,
            canvasContext: context,
            viewport: scaledViewport,
          }).promise
        }

        if (!cancelled) {
          setStatus("")
        }
      } catch {
        if (!cancelled) {
          setStatus("CV preview could not be loaded. Please use Download CV.")
        }
      }
    }

    void renderPdf()

    return () => {
      cancelled = true
      pagesContainer.replaceChildren()
      void loadingTask.destroy()
    }
  }, [src])

  return (
    <div className={wiki.cvViewerBody}>
      {status && <div className={wiki.cvViewerStatus}>{status}</div>}
      <div className={wiki.cvViewerPages} ref={pagesRef} />
    </div>
  )
}
