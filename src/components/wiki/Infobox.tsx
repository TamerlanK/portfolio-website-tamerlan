import type { ReactNode } from "react"

import { WikiLink } from "@/components/common/WikiLink"
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
            <div className={wiki.avatar}>{PERSON.avatarEmoji}</div>
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
          label={PERSON.isOpenToWork ? "Availability" : "Employer"}
          value={
            PERSON.isOpenToWork ? (
              <WikiLink href={PERSON.hireMeHref}>Hire me</WikiLink>
            ) : (
              PERSON.employer
            )
          }
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
          value={<WikiLink href={`https://${PERSON.github}`}>{PERSON.github}</WikiLink>}
        />
      </tbody>
    </table>
  )
}
