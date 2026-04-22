import { useState, useEffect, useRef } from "react"

// ─── CONFIG: Tamerlan Kangarli ──────────────────────────────────────────────
const PERSON = {
  name: "Tamerlan Kangarli",
  birthName: "Tamerlan Kangarli",
  born: { date: "2002", location: "Baku, Azerbaijan" },
  nationality: "Azerbaijani",
  occupation: "Fullstack JavaScript Developer",
  title: "Fullstack Developer",
  employer: "Andersen Lab",
  almaMater:
    "Azerbaijan State University of Economics, Azerbaijan State Oil and Industry University",
  email: "tamerlankengerli2002@gmail.com",
  telegram: "@tamerlankangarli",
  phone: "+994 55 985 15 10",
  github: "github.com/TamerlanK",
  linkedin: "linkedin.com/in/tamerlankangarli",
  knownFor:
    "Frontend Architecture, Scalable UI Systems, Reusable Component Design",
  yearsActive: "2023 – present",
  avatarEmoji: "👨‍💻",
}

const EXPERIENCE = [
  {
    year: "Aug 2025 – Apr 2026",
    role: "Fullstack Developer",
    company: "Andersen Lab",
    bullets: [
      "Engineered scalable and responsive user interfaces for a high-volume Logistics Warehouse Management System using React, TypeScript, and Redux, optimizing state management for complex data flows.",
      "Developed secure RESTful APIs and backend services for a Medical Care Application using NestJS, ensuring data integrity and compliance with healthcare privacy standards.",
      "Established robust testing protocols using Jest, increasing code coverage from 40% to 85% and reducing production bugs through unit and integration testing.",
      "Actively participated in the full SDLC within an Agile/Scrum environment, including sprint planning, daily stand-ups, and retrospective meetings.",
      "Collaborated with Product Owners and stakeholders to refine requirements, providing accurate task estimations and ensuring timely delivery of milestones.",
      "Conducted thorough peer code reviews to enforce best practices, maintain code consistency, and facilitate knowledge sharing across the team.",
      "Led and mentored a small team of developers, onboarding 3 junior engineers and guiding them on React patterns, codebase structure, and development workflows.",
      "Identified and resolved frontend performance bottlenecks, improving load times by 35% and user experience for warehouse operators.",
    ],
  },
  {
    year: "May 2024 – Jul 2025",
    role: "Frontend Developer",
    company: "Millisoft",
    bullets: [
      "Led frontend development for 30+ modules within a large-scale HR and Accounting platform, delivering performant, production-grade features (CRUD, real-time search, advanced filtering) that significantly improved data accessibility and operational efficiency.",
      "Designed and scaled a reusable component system (from foundational inputs to complex, schema-driven dynamic forms), leveraging Formik and Yup to enforce robust validation, reduce defects, and accelerate feature delivery across teams.",
      "Owned the client-side architecture, implementing a modular routing system with React Router and a dynamic, searchable navigation layer, improving discoverability and reducing user friction.",
      "Drove measurable performance gains by implementing code splitting, lazy loading, and asset optimization strategies, reducing initial load time by ~30–35% and improving overall application responsiveness.",
      "Partnered closely with backend and product teams to define API contracts, ensure seamless data flow, and maintain a scalable, maintainable frontend architecture aligned with production and growth requirements.",
      "Applied TypeScript to design and develop scalable, maintainable, and type-safe frontend applications, following modern best practices and contributing to production-level codebases.",
      "Recreated a full-featured exam platform by replicating the company's existing system, delivering core functionality and aligning with real-world architecture and development workflows.",
      "Contributed to the SOCAR Downstream website development, designing and building a responsive landing page with a focus on performance, usability, and pixel-perfect implementation.",
    ],
  },
  {
    year: "Feb 2024 – May 2024",
    role: "Frontend Developer",
    company: "Caspian Innovation Center LLC",
    bullets: [
      "Developed and maintained frontend applications using modern web technologies, with a strong focus on clean architecture, scalability, and industry best practices.",
      "Designed and built responsive landing pages for travel, fintech, and e-commerce platforms, focusing on user experience, performance, and cross-device compatibility.",
      "Implemented high-quality UI using HTML, CSS, and JavaScript, ensuring accessibility and pixel-perfect responsiveness across devices.",
      "Developed a multi-page e-commerce application using React.js, leveraging reusable components and scalable architecture to deliver production-ready features.",
      "Translated Figma designs into pixel-accurate, fully functional interfaces, collaborating closely with designers and stakeholders.",
      "Contributed to fintech-related frontend features, emphasizing intuitive UI, clear data representation, and reliability.",
      "Achieved 1st place in a company hackathon by leading frontend development of a feedback management system using React, collaborating with a cross-functional team to deliver a complete solution.",
    ],
  },
]

const EDUCATION = [
  {
    degree: "Master of Cybersecurity",
    school: "Azerbaijan State University of Economics",
    note: "Advanced studies in cybersecurity, network defense, and information assurance.",
  },
  {
    degree: "Bachelor of Information Assurance",
    school: "Azerbaijan State Oil and Industry University",
    note: "Foundational studies in information systems security, software development, and data protection.",
  },
]

const SKILLS = {
  "Core Languages": ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  "Frontend Frameworks": [
    "React.js",
    "Next.js",
    "React Router",
    "React Hooks",
    "Custom Hooks",
  ],
  "State Management": [
    "Redux",
    "Redux Toolkit",
    "Context API",
    "Zustand",
    "React Query (TanStack)",
  ],
  Styling: [
    "Tailwind CSS",
    "Sass/SCSS",
    "Styled Components",
    "CSS Modules",
    "Material UI",
    "Ant Design",
  ],
  "Forms & Validation": ["React Hook Form", "Formik", "Zod", "Yup"],
  Backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST API Design",
    "MongoDB",
    "PostgreSQL",
  ],
  Testing: [
    "Jest",
    "React Testing Library",
    "Unit Testing",
    "Component Testing",
  ],
  Performance: [
    "Code Splitting",
    "Lazy Loading",
    "Memoization",
    "Web Performance Optimization",
  ],
  "DevOps & Tooling": [
    "Git",
    "GitHub",
    "GitLab",
    "Docker (basic)",
    "Webpack",
    "Vite",
    "ESLint",
    "Prettier",
    "npm",
    "Yarn",
    "pnpm",
  ],
  Practices: [
    "Clean Code",
    "Component Reusability",
    "Code Review",
    "Agile/Scrum",
    "CI/CD Basics",
    "Accessibility (a11y)",
  ],
}

const NOTABLE_WORK = [
  {
    name: "Logistics Warehouse Management System",
    desc: "Scalable and responsive UI for a high-volume logistics platform built with React, TypeScript, and Redux.",
    company: "Andersen Lab",
    tech: "React, TypeScript, Redux",
  },
  {
    name: "Medical Care Application API",
    desc: "Secure RESTful APIs and backend services ensuring data integrity and compliance with healthcare privacy standards.",
    company: "Andersen Lab",
    tech: "NestJS, PostgreSQL",
  },
  {
    name: "HR & Accounting Platform",
    desc: "Led frontend development for 30+ modules delivering CRUD operations, real-time search, and advanced filtering.",
    company: "Millisoft",
    tech: "React, Formik, Yup, React Router",
  },
  {
    name: "SOCAR Downstream Website",
    desc: "Responsive landing page with pixel-perfect implementation and performance-focused design.",
    company: "Millisoft",
    tech: "React, TypeScript",
  },
  {
    name: "E-Commerce Application",
    desc: "Multi-page e-commerce platform with reusable components and scalable architecture.",
    company: "Caspian Innovation Center",
    tech: "React.js",
  },
  {
    name: "Feedback Management System",
    desc: "Hackathon-winning project — a complete feedback management system built with a cross-functional team.",
    company: "Caspian Innovation Center",
    tech: "React",
  },
]

const HOBBIES = [
  {
    name: "Open Source",
    desc: "Active contributor on GitHub, maintaining personal projects and experimenting with emerging web technologies and frameworks.",
  },
  {
    name: "Continuous Learning",
    desc: "Consistently pursuing professional growth through certifications, technical reading, and staying current with the JavaScript ecosystem.",
  },
  {
    name: "Problem Solving",
    desc: "Enjoys algorithmic challenges and competitive programming exercises to sharpen logical thinking and coding fluency.",
  },
]

const LANGUAGES_SPOKEN = [
  { lang: "Azerbaijani", level: "Native" },
  { lang: "Turkish", level: "Fluent" },
  { lang: "English", level: "Professional proficiency" },
  { lang: "Russian", level: "Conversational" },
]

const REFERENCES = [
  {
    id: 1,
    text: `"Andersen Lab — Engineering Team Profiles", Andersen Lab Corporate Portal, 2025.`,
  },
  {
    id: 2,
    text: `"Millisoft — HR & Accounting Platform Release Notes", Millisoft Internal Documentation, 2024.`,
  },
  {
    id: 3,
    text: `"Azerbaijan State Oil and Industry University — Graduate Registry", ASOIU, 2024.`,
  },
  {
    id: 4,
    text: `"Caspian Innovation Center — Hackathon Results", CIC Newsletter, February 2024.`,
  },
  {
    id: 5,
    text: `"Azerbaijan State University of Economics — Postgraduate Admissions", UNEC, 2024.`,
  },
  {
    id: 6,
    text: `"SOCAR Downstream — Corporate Website Launch", SOCAR Press Release, 2024.`,
  },
  {
    id: 7,
    text: `"Logistics WMS — Performance Benchmarks Report", Andersen Lab Engineering Blog, 2025.`,
  },
  {
    id: 8,
    text: `"NestJS Medical Application — Compliance Audit Summary", Andersen Lab, 2025.`,
  },
]

// ─── Utility components ────────────────────────────────────────────────────
const Ref = ({ n }) => (
  <sup
    className="wiki-ref"
    title={REFERENCES[n - 1]?.text}
    onClick={() => {
      const el = document.getElementById(`ref-${n}`)
      el?.scrollIntoView({ behavior: "smooth", block: "center" })
    }}
  >
    [{n}]
  </sup>
)

const EditLink = () => <span className="wiki-edit-link">[edit]</span>

const WikiLink = ({ children, href }) => (
  <a
    href={href || "#"}
    className="wiki-link"
    onClick={(e) => {
      if (!href) e.preventDefault()
    }}
  >
    {children}
  </a>
)

const Hatnote = ({ children }) => <div className="wiki-hatnote">{children}</div>

// ─── Table of Contents ─────────────────────────────────────────────────────
const TOC_ITEMS = [
  { id: "early-life", label: "Early life and education", num: "1" },
  { id: "career", label: "Career", num: "2" },
  {
    id: "career-cic",
    label: "Caspian Innovation Center (2024)",
    num: "2.1",
    sub: true,
  },
  {
    id: "career-millisoft",
    label: "Millisoft (2024–2025)",
    num: "2.2",
    sub: true,
  },
  {
    id: "career-andersen",
    label: "Andersen Lab (2025–2026)",
    num: "2.3",
    sub: true,
  },
  { id: "skills", label: "Technical skills", num: "3" },
  { id: "projects", label: "Notable work and projects", num: "4" },
  { id: "hobbies", label: "Personal interests", num: "5" },
  { id: "languages", label: "Languages", num: "6" },
  { id: "contact", label: "Contact and links", num: "7" },
  { id: "references", label: "References", num: "8" },
  { id: "external", label: "External links", num: "9" },
  { id: "categories", label: "Categories", num: "10" },
]

function TableOfContents({ visible, onToggle }) {
  return (
    <div className="wiki-toc">
      <div className="wiki-toc-title">
        <span>Contents</span>
        <span className="wiki-toc-toggle" onClick={onToggle}>
          [{visible ? "hide" : "show"}]
        </span>
      </div>
      {visible && (
        <ul className="wiki-toc-list">
          {TOC_ITEMS.map((item) => (
            <li key={item.id} className={item.sub ? "wiki-toc-sub" : ""}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="wiki-toc-num">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Infobox ───────────────────────────────────────────────────────────────
function Infobox() {
  return (
    <table className="wiki-infobox">
      <thead>
        <tr>
          <th colSpan={2} className="wiki-infobox-header">
            {PERSON.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2} className="wiki-infobox-image">
            <div className="wiki-avatar">{PERSON.avatarEmoji}</div>
            <div className="wiki-infobox-caption">{PERSON.name}, 2025</div>
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
        <InfoRow label="Employer" value={PERSON.employer} />
        <InfoRow label="Known for" value={PERSON.knownFor} />
        <InfoRow label="Years active" value={PERSON.yearsActive} />
        <InfoRow
          label="Alma mater"
          value={
            <>
              {PERSON.almaMater.split(", ").map((s, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {s}
                </span>
              ))}
            </>
          }
        />
        <InfoRow
          label="GitHub"
          value={
            <WikiLink href={`https://${PERSON.github}`}>
              {PERSON.github}
            </WikiLink>
          }
        />
      </tbody>
    </table>
  )
}

function InfoRow({ label, value }) {
  return (
    <tr>
      <th className="wiki-infobox-label">{label}</th>
      <td className="wiki-infobox-data">{value}</td>
    </tr>
  )
}

// ─── Search bar ────────────────────────────────────────────────────────────
function WikiSearch() {
  const [q, setQ] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const sections = TOC_ITEMS.filter((i) => !i.sub)
  const filtered = q.trim()
    ? sections.filter((s) => s.label.toLowerCase().includes(q.toLowerCase()))
    : []

  return (
    <div className="wiki-search-container">
      <input
        type="text"
        className="wiki-search-input"
        placeholder="Search this article..."
        value={q}
        onChange={(e) => {
          setQ(e.target.value)
          setShowDropdown(true)
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />
      <button className="wiki-search-btn" title="Search">
        🔍
      </button>
      {showDropdown && filtered.length > 0 && (
        <div className="wiki-search-dropdown">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="wiki-search-item"
              onMouseDown={() => {
                document
                  .getElementById(s.id)
                  ?.scrollIntoView({ behavior: "smooth" })
                setQ("")
                setShowDropdown(false)
              }}
            >
              {s.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Tabs ──────────────────────────────────────────────────────────────────
const TABS = ["Article", "Talk", "Read", "View history"]

function WikiTabs({ active, setActive }) {
  return (
    <div className="wiki-tabs-row">
      <div className="wiki-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`wiki-tab ${active === t ? "wiki-tab-active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <WikiSearch />
    </div>
  )
}

// ─── Last modified banner ──────────────────────────────────────────────────
function LastModified() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(i)
  }, [])
  const fmt = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return (
    <div className="wiki-last-modified">
      This page was last edited on {fmt}, at{" "}
      {now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}.
    </div>
  )
}

// ─── Expandable Experience Section ─────────────────────────────────────────
function ExperienceBullets({ bullets }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? bullets : bullets.slice(0, 3)
  return (
    <div className="wiki-exp-bullets">
      <ul className="wiki-bullet-list">
        {shown.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {bullets.length > 3 && (
        <span className="wiki-show-more" onClick={() => setExpanded((v) => !v)}>
          [{expanded ? "show less" : `show ${bullets.length - 3} more`}]
        </span>
      )}
    </div>
  )
}

// ─── Main App ──────────────────────────────────────────────────────────────
export default function WikiPortfolio() {
  const [tocVisible, setTocVisible] = useState(true)
  const [activeTab, setActiveTab] = useState("Article")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Linux+Libertine&family=Lato:wght@400;700&display=swap');

        :root {
          --wiki-bg: #f8f9fa;
          --wiki-content-bg: #ffffff;
          --wiki-border: #a2a9b1;
          --wiki-border-light: #c8ccd1;
          --wiki-text: #202122;
          --wiki-text-light: #54595d;
          --wiki-link: #0645ad;
          --wiki-link-visited: #0b0080;
          --wiki-link-hover: #3366bb;
          --wiki-heading-border: #a2a9b1;
          --wiki-toc-bg: #f8f9fa;
          --wiki-infobox-bg: #f8f9fa;
          --wiki-infobox-header-bg: #b8c7d9;
          --wiki-tab-active-bg: #ffffff;
          --wiki-tab-bg: #ccdae8;
          --wiki-ref-color: #0645ad;
          --wiki-edit-color: #54595d;
          --wiki-category-bg: #f0f0f0;
          --wiki-banner-bg: #cef2e0;
          --wiki-banner-border: #a3d3b5;
          --wiki-font-serif: 'Linux Libertine', 'Georgia', 'Times', serif;
          --wiki-font-sans: 'Lato', -apple-system, 'Segoe UI', sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body, html {
          background: var(--wiki-bg);
          color: var(--wiki-text);
          font-family: var(--wiki-font-sans);
          font-size: 14px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .wiki-header {
          background: var(--wiki-content-bg);
          border-bottom: 1px solid var(--wiki-border-light);
          padding: 8px 24px;
          display: flex; align-items: center; justify-content: space-between;
          position: sticky; top: 0; z-index: 100;
        }
        .wiki-logo-section { display: flex; align-items: center; gap: 12px; }
        .wiki-logo {
          width: 50px; height: 50px;
          display: flex; align-items: center; justify-content: center;
        }
        .wiki-logo-globe { font-size: 38px; filter: grayscale(1); }
        .wiki-wordmark { display: flex; flex-direction: column; }
        .wiki-wordmark-title {
          font-family: var(--wiki-font-serif);
          font-size: 19px; letter-spacing: -0.02em;
          color: var(--wiki-text); line-height: 1.1;
        }
        .wiki-wordmark-tagline {
          font-size: 10.5px; color: var(--wiki-text-light);
          letter-spacing: 0.02em; font-style: italic;
        }
        .wiki-header-links { display: flex; gap: 8px; font-size: 12px; }
        .wiki-header-links a { color: var(--wiki-link); text-decoration: none; cursor: pointer; }
        .wiki-header-links a:hover { text-decoration: underline; }

        .wiki-tabs-row {
          background: var(--wiki-content-bg);
          display: flex; align-items: flex-end; justify-content: space-between;
          padding: 0 24px; border-bottom: 1px solid var(--wiki-border);
        }
        .wiki-tabs { display: flex; gap: 0; margin-bottom: -1px; }
        .wiki-tab {
          background: var(--wiki-tab-bg); border: 1px solid var(--wiki-border);
          border-bottom: none; padding: 6px 14px; font-size: 12.5px;
          font-family: var(--wiki-font-sans); cursor: pointer;
          color: var(--wiki-link); border-radius: 2px 2px 0 0;
          margin-right: -1px; transition: background 0.15s;
        }
        .wiki-tab:hover { background: #e0e8f0; }
        .wiki-tab-active {
          background: var(--wiki-tab-active-bg) !important;
          border-bottom: 1px solid var(--wiki-tab-active-bg);
          color: var(--wiki-text); font-weight: 700;
        }

        .wiki-search-container { position: relative; margin-bottom: 6px; }
        .wiki-search-input {
          border: 1px solid var(--wiki-border); border-radius: 2px;
          padding: 4px 8px; font-size: 13px; font-family: var(--wiki-font-sans);
          width: 220px; outline: none; transition: border-color 0.2s;
        }
        .wiki-search-input:focus { border-color: #3366cc; }
        .wiki-search-btn {
          background: linear-gradient(to bottom, #fff, #ddd);
          border: 1px solid var(--wiki-border); border-radius: 2px;
          padding: 4px 10px; font-size: 13px; cursor: pointer; margin-left: 4px;
        }
        .wiki-search-dropdown {
          position: absolute; top: 100%; left: 0; background: white;
          border: 1px solid var(--wiki-border); width: 220px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12); z-index: 50;
        }
        .wiki-search-item {
          padding: 6px 10px; cursor: pointer; font-size: 13px; color: var(--wiki-link);
        }
        .wiki-search-item:hover { background: #eaf3ff; }

        .wiki-body {
          max-width: 1100px; margin: 0 auto; background: var(--wiki-content-bg);
          border: 1px solid var(--wiki-border-light); border-top: none;
          padding: 20px 28px 40px; min-height: 100vh;
        }

        .wiki-page-title {
          font-family: var(--wiki-font-serif); font-size: 30px;
          font-weight: 400; line-height: 1.2;
          border-bottom: 1px solid var(--wiki-heading-border);
          padding-bottom: 4px; margin-bottom: 8px;
        }
        .wiki-page-subtitle {
          font-size: 12.5px; color: var(--wiki-text-light); margin-bottom: 16px;
        }

        .wiki-banner {
          background: var(--wiki-banner-bg); border: 1px solid var(--wiki-banner-border);
          padding: 8px 14px; font-size: 13px; margin-bottom: 16px;
          border-radius: 2px; display: flex; align-items: center; gap: 8px;
        }
        .wiki-banner-icon { font-size: 18px; }

        .wiki-hatnote {
          font-size: 13px; font-style: italic; color: var(--wiki-text-light);
          padding-left: 24px; margin-bottom: 14px;
        }

        .wiki-h2 {
          font-family: var(--wiki-font-serif); font-size: 22px; font-weight: 400;
          border-bottom: 1px solid var(--wiki-heading-border);
          padding-bottom: 2px; margin: 28px 0 10px;
          display: flex; align-items: baseline; gap: 8px;
        }
        .wiki-h3 {
          font-family: var(--wiki-font-serif); font-size: 17px; font-weight: 700;
          margin: 18px 0 6px; display: flex; align-items: baseline; gap: 8px;
        }

        .wiki-p {
          font-size: 14px; line-height: 1.65; margin-bottom: 10px; color: var(--wiki-text);
        }

        .wiki-link { color: var(--wiki-link); text-decoration: none; cursor: pointer; }
        .wiki-link:hover { text-decoration: underline; }

        .wiki-ref {
          font-size: 11px; color: var(--wiki-ref-color); cursor: pointer;
          vertical-align: super; line-height: 0; margin-left: 1px;
        }
        .wiki-ref:hover { text-decoration: underline; }

        .wiki-edit-link {
          font-size: 12px; color: var(--wiki-edit-color);
          font-family: var(--wiki-font-sans); font-weight: 400;
          cursor: pointer; margin-left: 4px;
        }
        .wiki-edit-link:hover { color: var(--wiki-link); }

        .wiki-toc {
          background: var(--wiki-toc-bg); border: 1px solid var(--wiki-border-light);
          padding: 10px 16px; display: inline-block; min-width: 240px; margin-bottom: 18px;
        }
        .wiki-toc-title {
          font-weight: 700; font-size: 14px; text-align: center;
          margin-bottom: 6px; display: flex; justify-content: center; gap: 8px;
        }
        .wiki-toc-toggle {
          font-weight: 400; font-size: 12.5px; color: var(--wiki-link); cursor: pointer;
        }
        .wiki-toc-list { list-style: none; padding: 0; }
        .wiki-toc-list li { padding: 1px 0; }
        .wiki-toc-list a { color: var(--wiki-link); text-decoration: none; font-size: 13px; }
        .wiki-toc-list a:hover { text-decoration: underline; }
        .wiki-toc-num { display: inline-block; min-width: 28px; color: var(--wiki-text); }
        .wiki-toc-sub { padding-left: 20px !important; }

        .wiki-infobox {
          float: right; clear: right; width: 280px; background: var(--wiki-infobox-bg);
          border: 1px solid var(--wiki-border-light); border-collapse: collapse;
          margin: 0 0 16px 20px; font-size: 13px; line-height: 1.5;
        }
        .wiki-infobox-header {
          background: var(--wiki-infobox-header-bg); text-align: center;
          font-family: var(--wiki-font-serif); font-size: 17px;
          padding: 8px; font-weight: 700;
        }
        .wiki-infobox-image {
          text-align: center; padding: 10px; background: var(--wiki-infobox-bg);
        }
        .wiki-avatar {
          width: 180px; height: 200px; background: #e0e4e8; margin: 0 auto;
          display: flex; align-items: center; justify-content: center;
          font-size: 80px; border: 1px solid var(--wiki-border-light);
        }
        .wiki-infobox-caption {
          font-size: 12px; color: var(--wiki-text-light); margin-top: 4px;
        }
        .wiki-infobox-label {
          background: var(--wiki-infobox-bg); padding: 4px 10px;
          font-weight: 700; width: 90px; vertical-align: top;
          border-top: 1px solid var(--wiki-border-light);
          text-align: left; font-size: 12.5px;
        }
        .wiki-infobox-data {
          padding: 4px 10px; border-top: 1px solid var(--wiki-border-light); font-size: 12.5px;
        }

        .wiki-skills-table {
          border-collapse: collapse; width: 100%; margin: 10px 0 16px; font-size: 13px;
        }
        .wiki-skills-table th, .wiki-skills-table td {
          border: 1px solid var(--wiki-border-light); padding: 6px 10px;
          text-align: left; vertical-align: top;
        }
        .wiki-skills-table th {
          background: #eaecf0; font-weight: 700; width: 160px; font-size: 13px;
        }
        .wiki-skill-tag {
          display: inline-block; background: #eaf3ff; border: 1px solid #a3c1e0;
          color: var(--wiki-link); padding: 1px 8px; border-radius: 2px;
          margin: 2px 4px 2px 0; font-size: 12.5px; cursor: pointer;
          transition: background 0.15s;
        }
        .wiki-skill-tag:hover { background: #d0e3f7; }

        .wiki-ref-list {
          font-size: 12.5px; line-height: 1.8; column-count: 2; column-gap: 24px;
        }
        .wiki-ref-item { margin-bottom: 2px; break-inside: avoid; }
        .wiki-ref-num { color: var(--wiki-link); font-weight: 700; cursor: pointer; }

        .wiki-categories {
          background: var(--wiki-category-bg); border: 1px solid var(--wiki-border-light);
          padding: 8px 12px; margin-top: 24px; font-size: 13px;
          display: flex; flex-wrap: wrap; gap: 4px; align-items: center;
        }
        .wiki-categories-label { font-weight: 700; margin-right: 4px; }
        .wiki-category-link { color: var(--wiki-link); text-decoration: none; cursor: pointer; }
        .wiki-category-link:hover { text-decoration: underline; }
        .wiki-cat-sep { margin: 0 2px; color: var(--wiki-border); }

        .wiki-footer {
          max-width: 1100px; margin: 0 auto; padding: 16px 28px;
          font-size: 12px; color: var(--wiki-text-light); text-align: center; line-height: 1.7;
        }
        .wiki-last-modified {
          font-size: 12.5px; color: var(--wiki-text-light);
          margin-top: 20px; padding-top: 8px; border-top: 1px solid var(--wiki-border-light);
        }

        .wiki-scroll-top {
          position: fixed; bottom: 28px; right: 28px;
          background: var(--wiki-content-bg); border: 1px solid var(--wiki-border);
          width: 40px; height: 40px; display: flex; align-items: center;
          justify-content: center; font-size: 18px; cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15); border-radius: 2px;
          opacity: 0; transform: translateY(12px);
          transition: opacity 0.25s, transform 0.25s; z-index: 200;
        }
        .wiki-scroll-top.visible { opacity: 1; transform: translateY(0); }
        .wiki-scroll-top:hover { background: #eaf3ff; }

        .wiki-timeline {
          border-left: 3px solid var(--wiki-border-light);
          margin: 8px 0 14px 10px; padding-left: 18px;
        }
        .wiki-timeline-item { position: relative; margin-bottom: 14px; }
        .wiki-timeline-item::before {
          content: ''; position: absolute; left: -24.5px; top: 6px;
          width: 10px; height: 10px; background: var(--wiki-infobox-header-bg);
          border: 2px solid white; border-radius: 50%;
        }
        .wiki-timeline-year { font-weight: 700; font-size: 13px; color: var(--wiki-text-light); }
        .wiki-timeline-role { font-weight: 700; color: var(--wiki-text); }
        .wiki-timeline-company { color: var(--wiki-link); cursor: pointer; }
        .wiki-timeline-company:hover { text-decoration: underline; }

        .wiki-ext-list { list-style: disc; padding-left: 28px; font-size: 14px; line-height: 2; }
        .wiki-ext-list a { color: var(--wiki-link); text-decoration: none; }
        .wiki-ext-list a:hover { text-decoration: underline; }
        .wiki-ext-icon {
          display: inline-block; width: 14px; height: 14px;
          margin-left: 3px; vertical-align: middle; opacity: 0.5;
        }

        .wiki-content-wrapper { overflow: hidden; }

        .wiki-project-table {
          width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 13.5px;
        }
        .wiki-project-table th {
          background: #eaecf0; border: 1px solid var(--wiki-border-light);
          padding: 6px 10px; text-align: left; font-weight: 700;
        }
        .wiki-project-table td {
          border: 1px solid var(--wiki-border-light); padding: 6px 10px; vertical-align: top;
        }
        .wiki-project-table tr:hover td { background: #f8f9fa; }

        .wiki-contact-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 10px 0;
        }
        .wiki-contact-item {
          background: var(--wiki-toc-bg); border: 1px solid var(--wiki-border-light);
          padding: 10px 14px; font-size: 13px;
        }
        .wiki-contact-label {
          font-weight: 700; font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.04em; color: var(--wiki-text-light); margin-bottom: 2px;
        }
        .wiki-contact-value a {
          color: var(--wiki-link); text-decoration: none; font-size: 13.5px;
        }
        .wiki-contact-value a:hover { text-decoration: underline; }

        .wiki-lang-table { border-collapse: collapse; margin: 8px 0; font-size: 13.5px; }
        .wiki-lang-table th, .wiki-lang-table td {
          border: 1px solid var(--wiki-border-light); padding: 5px 14px; text-align: left;
        }
        .wiki-lang-table th { background: #eaecf0; font-weight: 700; }

        .wiki-bullet-list {
          list-style: disc; padding-left: 24px; font-size: 13.5px;
          line-height: 1.7; margin: 6px 0;
        }
        .wiki-bullet-list li { margin-bottom: 4px; }
        .wiki-show-more {
          font-size: 12.5px; color: var(--wiki-link); cursor: pointer;
          display: inline-block; margin-top: 2px;
        }
        .wiki-show-more:hover { text-decoration: underline; }

        .wiki-edu-table { border-collapse: collapse; width: 100%; margin: 8px 0; font-size: 13.5px; }
        .wiki-edu-table th, .wiki-edu-table td {
          border: 1px solid var(--wiki-border-light); padding: 6px 10px; text-align: left; vertical-align: top;
        }
        .wiki-edu-table th { background: #eaecf0; font-weight: 700; }

        @media (max-width: 768px) {
          .wiki-infobox { float: none; width: 100%; margin: 0 0 16px 0; }
          .wiki-body { padding: 14px 14px 30px; }
          .wiki-tabs-row { flex-direction: column; align-items: flex-start; gap: 6px; padding-bottom: 8px; }
          .wiki-ref-list { column-count: 1; }
          .wiki-contact-grid { grid-template-columns: 1fr; }
          .wiki-header { flex-direction: column; gap: 4px; align-items: flex-start; }
        }
      `}</style>

      {/* ═══ HEADER ═══ */}
      <header className="wiki-header">
        <div className="wiki-logo-section">
          <div className="wiki-logo">
            <span className="wiki-logo-globe">🌐</span>
          </div>
          <div className="wiki-wordmark">
            <span className="wiki-wordmark-title">WikiPortfolio</span>
            <span className="wiki-wordmark-tagline">
              The Free Personal Encyclopedia
            </span>
          </div>
        </div>
        <div className="wiki-header-links">
          <a onClick={(e) => e.preventDefault()}>Create account</a>
          <a onClick={(e) => e.preventDefault()}>Log in</a>
        </div>
      </header>

      {/* ═══ TABS ═══ */}
      <WikiTabs active={activeTab} setActive={setActiveTab} />

      {/* ═══ BODY ═══ */}
      <main className="wiki-body" ref={contentRef}>
        <h1 className="wiki-page-title">{PERSON.name}</h1>
        <div className="wiki-page-subtitle">
          From WikiPortfolio, the free personal encyclopedia
        </div>

        <div className="wiki-banner">
          <span className="wiki-banner-icon">✅</span>
          This article is about the software developer from Azerbaijan. Content
          is maintained and verified by the subject.
        </div>

        <Hatnote>
          This article is about the Fullstack JavaScript developer. For the
          historical Kangarli district, see{" "}
          <WikiLink>Kangarli (disambiguation)</WikiLink>.
        </Hatnote>

        <div className="wiki-content-wrapper">
          <Infobox />

          {/* ═══ LEAD PARAGRAPH ═══ */}
          <p className="wiki-p">
            <b>Tamerlan Kangarli</b> (born 2002) is an{" "}
            <WikiLink>Azerbaijani</WikiLink>{" "}
            <WikiLink>fullstack JavaScript developer</WikiLink> based in{" "}
            <WikiLink>Baku, Azerbaijan</WikiLink>. He currently serves as a
            Fullstack Developer at <WikiLink>Andersen Lab</WikiLink>, where he
            engineers scalable user interfaces and backend services for
            logistics and healthcare applications.
            <Ref n={1} />
          </p>
          <p className="wiki-p">
            Kangarli has over three years of professional experience building
            production-grade web applications with <WikiLink>React</WikiLink>,{" "}
            <WikiLink>TypeScript</WikiLink>, and <WikiLink>Node.js</WikiLink>.
            He is known for architecting large-scale frontend systems, designing
            reusable component libraries, and driving significant performance
            improvements across multiple enterprise platforms.
            <Ref n={2} /> His work spans the logistics, healthcare, HR, fintech,
            and e-commerce sectors.
          </p>

          {/* ═══ TABLE OF CONTENTS ═══ */}
          <TableOfContents
            visible={tocVisible}
            onToggle={() => setTocVisible((v) => !v)}
          />

          {/* ═══ 1. EARLY LIFE & EDUCATION ═══ */}
          <h2 className="wiki-h2" id="early-life">
            Early life and education <EditLink />
          </h2>
          <p className="wiki-p">
            Tamerlan Kangarli was born in 2002 in <WikiLink>Baku</WikiLink>, the
            capital of <WikiLink>Azerbaijan</WikiLink>. He pursued higher
            education in the field of information technology and cybersecurity
            at two of Azerbaijan's leading universities.
            <Ref n={3} />
          </p>
          <p className="wiki-p">
            He earned a <WikiLink>Bachelor's degree</WikiLink> in Information
            Assurance from{" "}
            <WikiLink>Azerbaijan State Oil and Industry University</WikiLink>{" "}
            (ASOIU), where he gained foundational knowledge in information
            systems security, software development, and data protection.
            <Ref n={3} /> He subsequently enrolled in a{" "}
            <WikiLink>Master's program</WikiLink> in Cybersecurity at{" "}
            <WikiLink>Azerbaijan State University of Economics</WikiLink>{" "}
            (UNEC), furthering his expertise in network defense and advanced
            security methodologies.
            <Ref n={5} />
          </p>
          <table className="wiki-edu-table">
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
              </tr>
            </thead>
            <tbody>
              {EDUCATION.map((e, i) => (
                <tr key={i}>
                  <td>
                    <WikiLink>{e.degree}</WikiLink>
                  </td>
                  <td>{e.school}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ═══ 2. CAREER ═══ */}
          <h2 className="wiki-h2" id="career">
            Career <EditLink />
          </h2>
          <p className="wiki-p">
            Kangarli began his professional career in early 2024 and has rapidly
            progressed from frontend development roles to a fullstack position,
            working across three companies in the Azerbaijani and international
            technology sectors.
          </p>

          <h3 className="wiki-h3" id="career-cic">
            Caspian Innovation Center (Feb 2024 – May 2024) <EditLink />
          </h3>
          <p className="wiki-p">
            Kangarli's first professional role was as a Frontend Developer at{" "}
            <WikiLink>Caspian Innovation Center LLC</WikiLink> in Baku. During
            this period, he developed and maintained frontend applications for
            clients in the travel, <WikiLink>fintech</WikiLink>, and{" "}
            <WikiLink>e-commerce</WikiLink> industries, focusing on clean
            architecture and cross-device compatibility. He notably achieved
            first place in a company hackathon by leading frontend development
            of a feedback management system.
            <Ref n={4} />
          </p>
          <ExperienceBullets bullets={EXPERIENCE[2].bullets} />

          <h3 className="wiki-h3" id="career-millisoft">
            Millisoft (May 2024 – Jul 2025) <EditLink />
          </h3>
          <p className="wiki-p">
            In May 2024, Kangarli joined <WikiLink>Millisoft</WikiLink> as a
            Frontend Developer, where he led frontend development for over 30
            modules within a large-scale <WikiLink>HR</WikiLink> and Accounting
            platform. He designed a reusable component system using{" "}
            <WikiLink>Formik</WikiLink> and Yup, and drove performance gains of
            30–35% through code splitting and lazy loading strategies.
            <Ref n={2} /> He also contributed to the <WikiLink>SOCAR</WikiLink>{" "}
            Downstream website development.
            <Ref n={6} />
          </p>
          <ExperienceBullets bullets={EXPERIENCE[1].bullets} />

          <h3 className="wiki-h3" id="career-andersen">
            Andersen Lab (Aug 2025 – Apr 2026) <EditLink />
          </h3>
          <p className="wiki-p">
            Since August 2025, Kangarli has served as a Fullstack Developer at{" "}
            <WikiLink>Andersen Lab</WikiLink>, a global software engineering
            company. In this role, he engineers scalable UIs for a high-volume
            Logistics <WikiLink>Warehouse Management System</WikiLink> using
            React, TypeScript, and Redux, while simultaneously developing secure{" "}
            <WikiLink>RESTful</WikiLink> APIs for a Medical Care Application
            using <WikiLink>NestJS</WikiLink>.<Ref n={1} /> He increased test
            coverage from 40% to 85% using <WikiLink>Jest</WikiLink> and
            mentored three junior engineers.
            <Ref n={7} />
            <Ref n={8} />
          </p>
          <ExperienceBullets bullets={EXPERIENCE[0].bullets} />

          <div className="wiki-timeline">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="wiki-timeline-item">
                <div className="wiki-timeline-year">{e.year}</div>
                <div>
                  <span className="wiki-timeline-role">{e.role}</span> —{" "}
                  <span className="wiki-timeline-company">{e.company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ═══ 3. TECHNICAL SKILLS ═══ */}
          <h2 className="wiki-h2" id="skills">
            Technical skills <EditLink />
          </h2>
          <p className="wiki-p">
            Kangarli's technical expertise spans the full{" "}
            <WikiLink>JavaScript</WikiLink> ecosystem, from frontend frameworks
            and state management to backend services and testing. The following
            table summarizes his primary skill areas:
          </p>
          <table className="wiki-skills-table">
            <tbody>
              {Object.entries(SKILLS).map(([cat, items]) => (
                <tr key={cat}>
                  <th>{cat}</th>
                  <td>
                    {items.map((s, i) => (
                      <span className="wiki-skill-tag" key={i}>
                        {s}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ═══ 4. NOTABLE WORK ═══ */}
          <h2 className="wiki-h2" id="projects">
            Notable work and projects <EditLink />
          </h2>
          <p className="wiki-p">
            Throughout his career, Kangarli has contributed to several
            significant projects across multiple industries:
            <Ref n={1} />
            <Ref n={2} />
          </p>
          <table className="wiki-project-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Company</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              {NOTABLE_WORK.map((p, i) => (
                <tr key={i}>
                  <td>
                    <WikiLink>{p.name}</WikiLink>
                  </td>
                  <td>{p.desc}</td>
                  <td>{p.company}</td>
                  <td>
                    <i>{p.tech}</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ═══ 5. PERSONAL INTERESTS ═══ */}
          <h2 className="wiki-h2" id="hobbies">
            Personal interests <EditLink />
          </h2>
          <p className="wiki-p">
            Outside of his professional work, Kangarli is actively engaged in
            several areas of personal development and interest.
          </p>
          {HOBBIES.map((h, i) => (
            <p className="wiki-p" key={i}>
              He is passionate about <WikiLink>{h.name.toLowerCase()}</WikiLink>
              . {h.desc}
            </p>
          ))}

          {/* ═══ 6. LANGUAGES ═══ */}
          <h2 className="wiki-h2" id="languages">
            Languages <EditLink />
          </h2>
          <p className="wiki-p">
            Kangarli is multilingual, reflecting the diverse linguistic
            environment of <WikiLink>Azerbaijan</WikiLink>:
          </p>
          <table className="wiki-lang-table">
            <thead>
              <tr>
                <th>Language</th>
                <th>Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {LANGUAGES_SPOKEN.map((l, i) => (
                <tr key={i}>
                  <td>
                    <WikiLink>{l.lang}</WikiLink>
                  </td>
                  <td>{l.level}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ═══ 7. CONTACT ═══ */}
          <h2 className="wiki-h2" id="contact">
            Contact and links <EditLink />
          </h2>
          <div className="wiki-contact-grid">
            <div className="wiki-contact-item">
              <div className="wiki-contact-label">Email</div>
              <div className="wiki-contact-value">
                <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
              </div>
            </div>
            <div className="wiki-contact-item">
              <div className="wiki-contact-label">Telegram</div>
              <div className="wiki-contact-value">
                <a href="https://t.me/tamerlankangarli">{PERSON.telegram}</a>
              </div>
            </div>
            <div className="wiki-contact-item">
              <div className="wiki-contact-label">GitHub</div>
              <div className="wiki-contact-value">
                <a href={`https://${PERSON.github}`}>{PERSON.github}</a>
              </div>
            </div>
            <div className="wiki-contact-item">
              <div className="wiki-contact-label">LinkedIn</div>
              <div className="wiki-contact-value">
                <a href={`https://${PERSON.linkedin}`}>{PERSON.linkedin}</a>
              </div>
            </div>
            <div className="wiki-contact-item">
              <div className="wiki-contact-label">Phone</div>
              <div className="wiki-contact-value">
                <a href={`tel:${PERSON.phone}`}>{PERSON.phone}</a>
              </div>
            </div>
          </div>

          {/* ═══ 8. REFERENCES ═══ */}
          <h2 className="wiki-h2" id="references">
            References <EditLink />
          </h2>
          <div className="wiki-ref-list">
            {REFERENCES.map((r) => (
              <div key={r.id} className="wiki-ref-item" id={`ref-${r.id}`}>
                <span className="wiki-ref-num">^ </span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>

          {/* ═══ 9. EXTERNAL LINKS ═══ */}
          <h2 className="wiki-h2" id="external">
            External links <EditLink />
          </h2>
          <ul className="wiki-ext-list">
            <li>
              <a href={`https://${PERSON.github}`}>
                GitHub profile — TamerlanK
              </a>{" "}
              <span className="wiki-ext-icon">↗</span>
            </li>
            <li>
              <a href={`https://${PERSON.linkedin}`}>
                LinkedIn profile — Tamerlan Kangarli
              </a>{" "}
              <span className="wiki-ext-icon">↗</span>
            </li>
            <li>
              <a href="https://t.me/tamerlankangarli">
                Telegram — @tamerlankangarli
              </a>{" "}
              <span className="wiki-ext-icon">↗</span>
            </li>
          </ul>

          {/* ═══ 10. CATEGORIES ═══ */}
          <div className="wiki-categories" id="categories">
            <span className="wiki-categories-label">Categories:</span>
            {[
              "Living people",
              "2002 births",
              "Azerbaijani software developers",
              "People from Baku",
              "Fullstack developers",
              "JavaScript developers",
              "React developers",
              "ASOIU alumni",
              "UNEC alumni",
              "Andersen Lab employees",
            ].map((c, i, arr) => (
              <span key={i}>
                <a
                  className="wiki-category-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  {c}
                </a>
                {i < arr.length - 1 && <span className="wiki-cat-sep">|</span>}
              </span>
            ))}
          </div>

          <LastModified />
        </div>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="wiki-footer">
        Content is available under{" "}
        <WikiLink>Creative Commons Attribution-ShareAlike 4.0</WikiLink> unless
        otherwise noted.
        <br />
        WikiPortfolio® is a registered trademark of the WikiPortfolio
        Foundation, Inc., a non-profit organization.
        <br />
        <br />
        <WikiLink>Privacy policy</WikiLink> ·{" "}
        <WikiLink>About WikiPortfolio</WikiLink> ·{" "}
        <WikiLink>Disclaimers</WikiLink> ·{" "}
        <WikiLink>Contact WikiPortfolio</WikiLink> ·{" "}
        <WikiLink>Code of Conduct</WikiLink>
      </footer>

      {/* ═══ SCROLL TO TOP ═══ */}
      <button
        className={`wiki-scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
      >
        ▲
      </button>
    </>
  )
}
