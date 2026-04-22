import { useEffect, useState } from "react"

export function useScrollTopVisibility(threshold = 600) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > threshold)

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isVisible
}
