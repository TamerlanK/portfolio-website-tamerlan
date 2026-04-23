import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

import profileImage from "@/assets/me.jpg"
import { PERSON } from "@/constants/portfolio-data"
import { wiki } from "@/styles/wiki"

import { CvActions } from "./CvActions"

type InfoRowProps = {
  label: string
  value: ReactNode
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <tr>
      <th className={wiki.infoboxLabel}>{label}</th>
      <td className={wiki.infoboxData}>{value}</td>
    </tr>
  )
}

function HireMeDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className={wiki.hireDropdown} ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        className={wiki.hireSummary}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        Hire me
      </button>
      {isOpen && (
        <div className={wiki.hireMenu}>
          <a
            href={`https://${PERSON.linkedin}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href={`mailto:${PERSON.email}`}>Email</a>
        </div>
      )}
    </div>
  )
}

export function Infobox() {
  return (
    <table className={wiki.infobox}>
      <thead>
        <tr>
          <th className={wiki.infoboxHeader} colSpan={2}>
            {PERSON.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={wiki.infoboxImage} colSpan={2}>
            <img alt={PERSON.name} className={wiki.avatar} src={profileImage} />
            <div className={wiki.infoboxCaption}>{PERSON.name}, 2025</div>
          </td>
        </tr>
        <InfoRow
          label="Born"
          value={
            <>
              {PERSON.born.date}
              <br />
              {PERSON.born.location}
            </>
          }
        />
        <InfoRow label="Nationality" value={PERSON.nationality} />
        <InfoRow label="Occupation" value={PERSON.occupation} />
        <InfoRow label="Title" value={PERSON.title} />
        <InfoRow
          label="Availability"
          value={PERSON.isOpenToWork ? <HireMeDropdown /> : PERSON.employer}
        />
        <InfoRow label="Known for" value={PERSON.knownFor} />
        <InfoRow label="Years active" value={PERSON.yearsActive} />
        <InfoRow label="CV" value={<CvActions compact />} />
        <InfoRow
          label="Alma mater"
          value={PERSON.almaMater.map((school, index) => (
            <span key={school}>
              {index > 0 && <br />}
              {school}
            </span>
          ))}
        />
        <InfoRow
          label="GitHub"
          value={
            <a
              href={`https://${PERSON.github}`}
              rel="noopener noreferrer"
              target="_blank"
              className={wiki.link}
            >
              {PERSON.github}
            </a>
          }
        />
      </tbody>
    </table>
  )
}
