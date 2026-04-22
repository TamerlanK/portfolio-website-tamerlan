import type {
  EducationItem,
  ExperienceItem,
  HobbyItem,
  LanguageItem,
  NotableWorkItem,
  Person,
  ReferenceItem,
  SkillsMap,
} from "@/types/portfolio"

export const PERSON: Person = {
  name: "Tamerlan Kangarli",
  birthName: "Tamerlan Kangarli",
  born: { date: "2002", location: "Baku, Azerbaijan" },
  nationality: "Azerbaijani",
  occupation: "Fullstack JavaScript Developer",
  title: "Fullstack Developer",
  isOpenToWork: true,
  almaMater: [
    "Azerbaijan State University of Economics",
    "Azerbaijan State Oil and Industry University",
  ],
  email: "tamerlankengerli2002@gmail.com",
  telegram: "@tamerlankangarli",
  github: "github.com/TamerlanK",
  linkedin: "linkedin.com/in/tamerlankangarli",
  knownFor:
    "Frontend Architecture, Scalable UI Systems, Reusable Component Design",
  yearsActive: "2023 - present",
  avatarEmoji: "👨‍💻",
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "Aug 2025 - Apr 2026",
    role: "Fullstack Developer",
    company: "Andersen Lab",
    bullets: [
      "Tasked with scaling the frontend of a high-volume Logistics Warehouse Management System, architected responsive interfaces using React, TypeScript, and Redux, designing state management patterns that sustained performance under heavy real-time data flows across multiple modules.",
      "Inherited a frontend codebase with only 40% test coverage and recurring production regressions; introduced disciplined Jest-based unit and integration testing practices, raising coverage to 85% and significantly reducing post-release defects.",
      "Diagnosed critical rendering and bundle-size bottlenecks degrading warehouse operator workflows; applied React performance optimizations, code splitting, and lazy loading, cutting load times by 35% and measurably improving daily operational throughput.",
      "Assigned to support team expansion, onboarded and mentored 3 junior engineers, guiding them through React patterns, component architecture, and development workflows to accelerate their time-to-productivity.",
      "Collaborated with Product Owners and cross-functional stakeholders within an Agile/Scrum environment, translating ambiguous requirements into clear technical tasks, providing accurate estimations, and consistently meeting sprint milestones.",
      "Led peer code reviews to uphold coding standards, catch regressions early, and promote shared ownership and knowledge transfer across the engineering team.",
    ],
  },
  {
    year: "May 2024 - Jul 2025",
    role: "Frontend Developer",
    company: "Millisoft LLC",
    bullets: [
      "Owned the development and continuous enhancement of 30+ modules within an enterprise HR and Accounting management system, delivering full CRUD functionality, real-time search, and advanced filtering that improved data accessibility and user efficiency at scale.",
      "Responding to recurring inconsistencies across form-heavy modules, architected a scalable library of reusable, type-safe UI components - from atomic inputs to complex dynamic forms with multi-row tables and configurable fields - using Formik and Yup, improving reliability and accelerating team-wide delivery velocity.",
      "Confronted with slow initial load times degrading user experience, implemented code splitting, lazy loading, and React performance best practices, achieving a 30-35% improvement in first-load performance.",
      "Designed and implemented client-side routing with React Router, including a dynamic, searchable sidebar that streamlined navigation across a rapidly growing module tree and reduced user friction.",
      "Partnered daily with backend engineers to define and integrate REST APIs, proactively surfacing edge cases during integration and maintaining a clean, scalable frontend architecture.",
    ],
  },
  {
    year: "Feb 2024 - May 2024",
    role: "Frontend Developer",
    company: "Caspian Innovation Center LLC",
    bullets: [
      "Built scalable, maintainable, and type-safe frontend applications with TypeScript under senior engineering mentorship, rapidly adopting modern best practices and clean-code principles expected in production environments.",
      "Reverse-engineered and rebuilt the company's exam platform end-to-end, successfully replicating core functionality while absorbing real-world patterns in component design, state management, and API integration.",
      "Delivered multiple personal React projects from concept through deployment, independently handling problem-solving, debugging, and shipping clean, production-ready code with minimal supervision.",
    ],
  },
  {
    year: "May 2023 - Feb 2024",
    role: "Frontend Developer (Intern)",
    company: "JET Academy",
    bullets: [
      "Designed and built a fully responsive travel landing page with HTML, CSS, and JavaScript, prioritizing user experience and cross-device compatibility.",
      "Developed a multi-page e-commerce interface in React.js, leveraging reusable components and scalable architecture to mirror production-level engineering standards.",
      "Translated Figma design specifications into pixel-accurate, fully functional interfaces, building strong habits in UI implementation precision and designer-developer collaboration.",
      "Secured 1st place in a company-wide hackathon by leading frontend development of a feedback management system in React, collaborating within a cross-functional team to ship a complete full-stack solution under tight deadlines.",
    ],
  },
]

export const EDUCATION: EducationItem[] = [
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

export const SKILLS: SkillsMap = {
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

export const NOTABLE_WORK: NotableWorkItem[] = [
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
    desc: "Hackathon-winning project - a complete feedback management system built with a cross-functional team.",
    company: "Caspian Innovation Center",
    tech: "React",
  },
]

export const HOBBIES: HobbyItem[] = [
  {
    name: "Playing piano",
    desc: "Has played piano for about five years and enjoys the discipline, expression, and detail of classical music, with particular interest in composers such as Chopin and Rachmaninoff, among many others.",
  },
  {
    name: "Speedcubing",
    desc: "Has a strong interest in speedcubing and regularly solves the 3x3 cube, with an overall personal record of about 14 seconds.",
  },
  {
    name: "Playing chess",
    desc: "Enjoys playing chess and following recent games, tournaments, and developments in the chess world.",
  },
  {
    name: "Fitness",
    desc: "Maintains a consistent fitness routine for energy, resilience, and long-term personal discipline.",
  },
]

export const LANGUAGES_SPOKEN: LanguageItem[] = [
  { lang: "Azerbaijani", level: "Native" },
  { lang: "English", level: "Professional proficiency" },
]

export const REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    text: '"Andersen Lab - Engineering Team Profiles", Andersen Lab Corporate Portal, 2025.',
  },
  {
    id: 2,
    text: '"Millisoft - HR & Accounting Platform Release Notes", Millisoft Internal Documentation, 2024.',
  },
  {
    id: 3,
    text: '"Azerbaijan State Oil and Industry University - Graduate Registry", ASOIU, 2024.',
  },
  {
    id: 4,
    text: '"Caspian Innovation Center - Hackathon Results", CIC Newsletter, February 2024.',
  },
  {
    id: 5,
    text: '"Azerbaijan State University of Economics - Postgraduate Admissions", UNEC, 2024.',
  },
  {
    id: 6,
    text: '"SOCAR Downstream - Corporate Website Launch", SOCAR Press Release, 2024.',
  },
  {
    id: 7,
    text: '"Logistics WMS - Performance Benchmarks Report", Andersen Lab Engineering Blog, 2025.',
  },
  {
    id: 8,
    text: '"NestJS Medical Application - Compliance Audit Summary", Andersen Lab, 2025.',
  },
]
