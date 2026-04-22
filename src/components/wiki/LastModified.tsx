import { useEffect, useState } from "react"

import { wiki } from "@/styles/wiki"

export function LastModified() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000)

    return () => window.clearInterval(timer)
  }, [])

  const date = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return <div className={wiki.lastModified}>This page was last edited on {date}, at {time}.</div>
}
