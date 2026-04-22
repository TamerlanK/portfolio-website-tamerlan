import type { ReactNode } from "react"

export type Person = {
  name: string
  birthName: string
  born: {
    date: string
    location: string
  }
  nationality: string
  occupation: string
  title: string
  employer: string
  almaMater: string[]
  email: string
  telegram: string
  phone: string
  github: string
  linkedin: string
  knownFor: string
  yearsActive: string
  avatarEmoji: string
}

export type ExperienceItem = {
  year: string
  role: string
  company: string
  bullets: string[]
}

export type EducationItem = {
  degree: string
  school: string
  note: string
}

export type NotableWorkItem = {
  name: string
  desc: string
  company: string
  tech: string
}

export type HobbyItem = {
  name: string
  desc: string
}

export type LanguageItem = {
  lang: string
  level: string
}

export type ReferenceItem = {
  id: number
  text: string
}

export type TocItem = {
  id: string
  label: string
  num: string
  sub?: boolean
}

export type ContactItem = {
  label: string
  value: ReactNode
}

export type SkillsMap = Record<string, string[]>
