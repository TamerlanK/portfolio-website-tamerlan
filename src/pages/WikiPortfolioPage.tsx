import { useState } from "react"

import { ExternalIcon } from "@/components/common/ExternalIcon"
import { Hatnote } from "@/components/common/Hatnote"
import { ReferenceLink } from "@/components/common/ReferenceLink"
import { SectionHeading } from "@/components/common/SectionHeading"
import { WikiLink } from "@/components/common/WikiLink"
import { ScrollTopButton } from "@/components/layout/ScrollTopButton"
import { WikiFooter } from "@/components/layout/WikiFooter"
import { WikiHeader } from "@/components/layout/WikiHeader"
import { CvActions } from "@/components/wiki/CvActions"
import { ExperienceBullets } from "@/components/wiki/ExperienceBullets"
import { Infobox } from "@/components/wiki/Infobox"
import { LastModified } from "@/components/wiki/LastModified"
import { TableOfContents } from "@/components/wiki/TableOfContents"
import { WikiTabs } from "@/components/wiki/WikiTabs"
import {
  EDUCATION,
  EXPERIENCE,
  HOBBIES,
  LANGUAGES_SPOKEN,
  NOTABLE_WORK,
  PERSON,
  REFERENCES,
  SKILLS,
} from "@/constants/portfolio-data"
import type { WikiTab } from "@/constants/portfolio-navigation"
import { useScrollTopVisibility } from "@/hooks/useScrollTopVisibility"
import { wiki } from "@/styles/wiki"

const CATEGORIES = [
  "Living people",
  "2002 births",
  "Azerbaijani software developers",
  "People from Baku",
  "Fullstack developers",
  "JavaScript developers",
  "React developers",
  "ASOIU alumni",
  "UNEC alumni",
  "Open to work",
]

function ContactLinks() {
  return (
    <div className={wiki.contactGrid}>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>Email</div>
        <div className={wiki.contactValue}>
          <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
        </div>
      </div>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>Telegram</div>
        <div className={wiki.contactValue}>
          <a href="https://t.me/tamerlankangarli">{PERSON.telegram}</a>
        </div>
      </div>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>GitHub</div>
        <div className={wiki.contactValue}>
          <a href={`https://${PERSON.github}`}>{PERSON.github}</a>
        </div>
      </div>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>LinkedIn</div>
        <div className={wiki.contactValue}>
          <a href={`https://${PERSON.linkedin}`}>{PERSON.linkedin}</a>
        </div>
      </div>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>Hire me</div>
        <div className={wiki.contactValue}>
          <a href={PERSON.hireMeHref}>Open to opportunities</a>
        </div>
      </div>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>CV</div>
        <CvActions />
      </div>
      <div className={wiki.contactItem}>
        <div className={wiki.contactLabel}>Phone</div>
        <div className={wiki.contactValue}>
          <a href={`tel:${PERSON.phone}`}>{PERSON.phone}</a>
        </div>
      </div>
    </div>
  )
}

export function WikiPortfolioPage() {
  const [tocVisible, setTocVisible] = useState(true)
  const [activeTab, setActiveTab] = useState<WikiTab>("Article")
  const showScrollTop = useScrollTopVisibility()

  return (
    <div className={wiki.app}>
      <WikiHeader />
      <WikiTabs active={activeTab} onChange={setActiveTab} />

      <main className={wiki.body}>
        <h1 className={wiki.pageTitle}>{PERSON.name}</h1>
        <div className={wiki.pageSubtitle}>From WikiPortfolio, the free personal encyclopedia</div>

        <div className={wiki.banner}>
          <span className={wiki.bannerIcon}>✅</span>
          This article is about the software developer from Azerbaijan. Content is maintained and
          verified by the subject.
        </div>

        <Hatnote>
          This article is about the Fullstack JavaScript developer. For the historical Kangarli
          district, see <WikiLink>Kangarli (disambiguation)</WikiLink>.
        </Hatnote>

        <div className={wiki.contentWrapper}>
          <Infobox />

          <p className={wiki.paragraph}>
            <b>Tamerlan Kangarli</b> (born 2002) is an <WikiLink>Azerbaijani</WikiLink>{" "}
            <WikiLink>fullstack JavaScript developer</WikiLink> based in{" "}
            <WikiLink>Baku, Azerbaijan</WikiLink>. He is currently open to fullstack developer
            opportunities and has recently worked at <WikiLink>Andersen Lab</WikiLink>, where he
            engineered scalable user interfaces and backend services for logistics and healthcare
            applications.
            <ReferenceLink n={1} />
          </p>
          <p className={wiki.paragraph}>
            Kangarli has over three years of professional experience building production-grade web
            applications with <WikiLink>React</WikiLink>, <WikiLink>TypeScript</WikiLink>, and{" "}
            <WikiLink>Node.js</WikiLink>. He is known for architecting large-scale frontend systems,
            designing reusable component libraries, and driving significant performance improvements
            across multiple enterprise platforms.
            <ReferenceLink n={2} /> His work spans the logistics, healthcare, HR, fintech, and
            e-commerce sectors.
          </p>

          <TableOfContents visible={tocVisible} onToggle={() => setTocVisible((visible) => !visible)} />

          <SectionHeading id="early-life">Early life and education</SectionHeading>
          <p className={wiki.paragraph}>
            Tamerlan Kangarli was born in 2002 in <WikiLink>Baku</WikiLink>, the capital of{" "}
            <WikiLink>Azerbaijan</WikiLink>. He pursued higher education in the field of information
            technology and cybersecurity at two of Azerbaijan's leading universities.
            <ReferenceLink n={3} />
          </p>
          <p className={wiki.paragraph}>
            He earned a <WikiLink>Bachelor's degree</WikiLink> in Information Assurance from{" "}
            <WikiLink>Azerbaijan State Oil and Industry University</WikiLink> (ASOIU), where he gained
            foundational knowledge in information systems security, software development, and data
            protection.
            <ReferenceLink n={3} /> He subsequently enrolled in a{" "}
            <WikiLink>Master's program</WikiLink> in Cybersecurity at{" "}
            <WikiLink>Azerbaijan State University of Economics</WikiLink> (UNEC), furthering his
            expertise in network defense and advanced security methodologies.
            <ReferenceLink n={5} />
          </p>
          <table className={wiki.educationTable}>
            <thead>
              <tr>
                <th className={wiki.tableHeadCell}>Degree</th>
                <th className={wiki.tableHeadCell}>Institution</th>
              </tr>
            </thead>
            <tbody>
              {EDUCATION.map((education) => (
                <tr key={education.degree}>
                  <td className={wiki.tableCell}>
                    <WikiLink>{education.degree}</WikiLink>
                  </td>
                  <td className={wiki.tableCell}>{education.school}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <SectionHeading id="career">Career</SectionHeading>
          <p className={wiki.paragraph}>
            Kangarli began his professional career in May 2023 and progressed from a frontend
            internship to production frontend roles and fullstack development, working across four
            organizations in the Azerbaijani and international technology sectors.
          </p>

          <SectionHeading id="career-andersen" level={3}>
            Andersen Lab (Aug 2025 – Apr 2026)
          </SectionHeading>
          <p className={wiki.paragraph}>
            From August 2025 to April 2026, Kangarli served as a Fullstack Developer at{" "}
            <WikiLink>Andersen Lab</WikiLink>, a global software engineering company. In this role,
            he engineered scalable UIs for a high-volume Logistics{" "}
            <WikiLink>Warehouse Management System</WikiLink> using React, TypeScript, and Redux, while
            simultaneously developing secure <WikiLink>RESTful</WikiLink> APIs for a Medical Care
            Application using <WikiLink>NestJS</WikiLink>.<ReferenceLink n={1} /> He increased test
            coverage from 40% to 85% using <WikiLink>Jest</WikiLink> and mentored three junior
            engineers.
            <ReferenceLink n={7} />
            <ReferenceLink n={8} />
          </p>
          <ExperienceBullets bullets={EXPERIENCE[0].bullets} />

          <SectionHeading id="career-millisoft" level={3}>
            Millisoft LLC (May 2024 – Jul 2025)
          </SectionHeading>
          <p className={wiki.paragraph}>
            In May 2024, Kangarli joined <WikiLink>Millisoft LLC</WikiLink> as a Frontend Developer,
            where he owned the development and continuous enhancement of modules within an enterprise{" "}
            <WikiLink>HR</WikiLink> and Accounting management system. His work included CRUD
            functionality, real-time search, advanced filtering, reusable type-safe UI components,
            dynamic forms, React Router navigation, and REST API integration.
            <ReferenceLink n={2} /> He also contributed to the <WikiLink>SOCAR</WikiLink> Downstream
            website development.
            <ReferenceLink n={6} />
          </p>
          <ExperienceBullets bullets={EXPERIENCE[1].bullets} />

          <SectionHeading id="career-cic" level={3}>
            Caspian Innovation Center LLC (Feb 2024 – May 2024)
          </SectionHeading>
          <p className={wiki.paragraph}>
            Kangarli worked as a Frontend Developer at{" "}
            <WikiLink>Caspian Innovation Center LLC</WikiLink> in Baku. During this period, he built
            type-safe frontend applications with TypeScript under senior engineering mentorship,
            rebuilt an exam platform end-to-end, and delivered personal React projects from concept
            through deployment.
            <ReferenceLink n={4} />
          </p>
          <ExperienceBullets bullets={EXPERIENCE[2].bullets} />

          <SectionHeading id="career-jet" level={3}>
            JET Academy (May 2023 – Feb 2024)
          </SectionHeading>
          <p className={wiki.paragraph}>
            Kangarli completed his first frontend development internship at{" "}
            <WikiLink>JET Academy</WikiLink>, building responsive interfaces, React-based projects,
            and Figma-driven UI implementations while also contributing to a hackathon-winning
            feedback management system.
          </p>
          <ExperienceBullets bullets={EXPERIENCE[3].bullets} />

          <div className={wiki.timeline}>
            {EXPERIENCE.map((experience) => (
              <div className={wiki.timelineItem} key={`${experience.company}-${experience.year}`}>
                <div className={wiki.timelineYear}>{experience.year}</div>
                <div>
                  <span className={wiki.timelineRole}>{experience.role}</span> —{" "}
                  <span className={wiki.timelineCompany}>{experience.company}</span>
                </div>
              </div>
            ))}
          </div>

          <SectionHeading id="skills">Technical skills</SectionHeading>
          <p className={wiki.paragraph}>
            Kangarli's technical expertise spans the full <WikiLink>JavaScript</WikiLink> ecosystem,
            from frontend frameworks and state management to backend services and testing. The
            following table summarizes his primary skill areas:
          </p>
          <table className={wiki.skillsTable}>
            <tbody>
              {Object.entries(SKILLS).map(([category, items]) => (
                <tr key={category}>
                  <th className={wiki.skillsHeadCell}>{category}</th>
                  <td className={wiki.tableCell}>
                    {items.map((skill) => (
                      <span className={wiki.skillTag} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <SectionHeading id="projects">Notable work and projects</SectionHeading>
          <p className={wiki.paragraph}>
            Throughout his career, Kangarli has contributed to several significant projects across
            multiple industries:
            <ReferenceLink n={1} />
            <ReferenceLink n={2} />
          </p>
          <table className={wiki.projectTable}>
            <thead>
              <tr>
                <th className={wiki.tableHeadCell}>Project</th>
                <th className={wiki.tableHeadCell}>Description</th>
                <th className={wiki.tableHeadCell}>Company</th>
                <th className={wiki.tableHeadCell}>Technologies</th>
              </tr>
            </thead>
            <tbody>
              {NOTABLE_WORK.map((project) => (
                <tr className={wiki.projectRow} key={project.name}>
                  <td className={wiki.tableCell}>
                    <WikiLink>{project.name}</WikiLink>
                  </td>
                  <td className={wiki.tableCell}>{project.desc}</td>
                  <td className={wiki.tableCell}>{project.company}</td>
                  <td className={wiki.tableCell}>
                    <i>{project.tech}</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <SectionHeading id="hobbies">Personal interests</SectionHeading>
          <p className={wiki.paragraph}>
            Outside of his professional work, Kangarli is actively engaged in several areas of
            personal development and interest.
          </p>
          {HOBBIES.map((hobby) => (
            <p className={wiki.paragraph} key={hobby.name}>
              He is passionate about <WikiLink>{hobby.name.toLowerCase()}</WikiLink>. {hobby.desc}
            </p>
          ))}

          <SectionHeading id="languages">Languages</SectionHeading>
          <p className={wiki.paragraph}>
            Kangarli is multilingual, reflecting the diverse linguistic environment of{" "}
            <WikiLink>Azerbaijan</WikiLink>:
          </p>
          <table className={wiki.compactTable}>
            <thead>
              <tr>
                <th className={`${wiki.langCell} bg-[#eaecf0] font-bold`}>Language</th>
                <th className={`${wiki.langCell} bg-[#eaecf0] font-bold`}>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {LANGUAGES_SPOKEN.map((language) => (
                <tr key={language.lang}>
                  <td className={wiki.langCell}>
                    <WikiLink>{language.lang}</WikiLink>
                  </td>
                  <td className={wiki.langCell}>{language.level}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <SectionHeading id="contact">Contact and links</SectionHeading>
          <ContactLinks />

          <SectionHeading id="references">References</SectionHeading>
          <div className={wiki.referencesList}>
            {REFERENCES.map((reference) => (
              <div className={wiki.referenceItem} id={`ref-${reference.id}`} key={reference.id}>
                <span className={wiki.referenceNumber}>^ </span>
                <span>{reference.text}</span>
              </div>
            ))}
          </div>

          <SectionHeading id="external">External links</SectionHeading>
          <ul className={wiki.externalList}>
            <li>
              <a href={`https://${PERSON.github}`}>GitHub profile — TamerlanK</a> <ExternalIcon />
            </li>
            <li>
              <a href={`https://${PERSON.linkedin}`}>LinkedIn profile — Tamerlan Kangarli</a>{" "}
              <ExternalIcon />
            </li>
            <li>
              <a href="https://t.me/tamerlankangarli">Telegram — @tamerlankangarli</a>{" "}
              <ExternalIcon />
            </li>
          </ul>

          <div className={wiki.categories} id="categories">
            <span className={wiki.categoriesLabel}>Categories:</span>
            {CATEGORIES.map((category, index) => (
              <span key={category}>
                <WikiLink className={wiki.categoryLink}>{category}</WikiLink>
                {index < CATEGORIES.length - 1 && (
                  <span className={wiki.categorySeparator}>|</span>
                )}
              </span>
            ))}
          </div>

          <LastModified />
        </div>
      </main>

      <WikiFooter />
      <ScrollTopButton visible={showScrollTop} />
    </div>
  )
}
