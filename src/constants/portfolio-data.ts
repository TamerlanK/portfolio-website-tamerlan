import type {
  EducationItem,
  ExperienceItem,
  HobbyItem,
  LanguageItem,
  NotableWorkItem,
  Person,
  ReferenceItem,
  SkillsMap,
} from "@/types/portfolio.ts"

export const PERSON: Person = {
  name: "Tamerlan Kangarli",
  birthName: "Tamerlan Kangarli",
  born: { date: "2002", location: "Baku, Azerbaijan" },
  nationality: "Azerbaijani",
  occupation: "Fullstack JavaScript Developer",
  title: "Fullstack Developer",
  employer: "Andersen Lab",
  almaMater: [
    "Azerbaijan State University of Economics",
    "Azerbaijan State Oil and Industry University",
  ],
  email: "tamerlankengerli2002@gmail.com",
  telegram: "@tamerlankangarli",
  phone: "+994 55 985 15 10",
  github: "github.com/TamerlanK",
  linkedin: "linkedin.com/in/tamerlankangarli",
  knownFor:
    "Frontend Architecture, Scalable UI Systems, Reusable Component Design",
  yearsActive: "2024–present",
  avatarEmoji: "👨‍💻",
}

export const EXPERIENCE: ExperienceItem[] = [
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
    desc: "Hackathon-winning project — a complete feedback management system built with a cross-functional team.",
    company: "Caspian Innovation Center",
    tech: "React",
  },
]

export const HOBBIES: HobbyItem[] = [
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

export const LANGUAGES_SPOKEN: LanguageItem[] = [
  { lang: "Azerbaijani", level: "Native" },
  { lang: "Turkish", level: "Fluent" },
  { lang: "English", level: "Professional proficiency" },
  { lang: "Russian", level: "Conversational" },
]

export const REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    text: '"Andersen Lab — Engineering Team Profiles", Andersen Lab Corporate Portal, 2025.',
  },
  {
    id: 2,
    text: '"Millisoft — HR & Accounting Platform Release Notes", Millisoft Internal Documentation, 2024.',
  },
  {
    id: 3,
    text: '"Azerbaijan State Oil and Industry University — Graduate Registry", ASOIU, 2024.',
  },
  {
    id: 4,
    text: '"Caspian Innovation Center — Hackathon Results", CIC Newsletter, February 2024.',
  },
  {
    id: 5,
    text: '"Azerbaijan State University of Economics — Postgraduate Admissions", UNEC, 2024.',
  },
  {
    id: 6,
    text: '"SOCAR Downstream — Corporate Website Launch", SOCAR Press Release, 2024.',
  },
  {
    id: 7,
    text: '"Logistics WMS — Performance Benchmarks Report", Andersen Lab Engineering Blog, 2025.',
  },
  {
    id: 8,
    text: '"NestJS Medical Application — Compliance Audit Summary", Andersen Lab, 2025.',
  },
]
