export const profile = {
  name: "Gity (Monireh) Ghasemi",
  role: "Frontend Engineer",
  location: "Open to relocation",
  email: "gity.ghasemi@gmail.com",
  linkedin: "https://www.linkedin.com/in/gity-ghasemi",
  intro:
    "Frontend Engineer with around seven years of experience building and improving production web applications across fintech and B2B products. I specialize in React, TypeScript and modern frontend architecture, with hands-on experience in large-scale rewrites, design systems, automated testing and complex user flows. I care deeply about product quality and user experience, and I approach frontend work with strong ownership, attention to detail and a focus on building reliable, maintainable solutions that are genuinely useful to users.",
};

export const experience = [
  {
    company: "FarabiTech",
    role: "Frontend Engineer (Software Engineer III / L4)",
    period: "Jul 2023 — Present",
    summary:
      "Worked on customer-facing financial products, including investment and neobank features.",
    highlights: [
      "Rewrote a production Vue application in React with React Router and MUI in about two months. I used AI-assisted development to move faster, while still reviewing the implementation carefully and keeping the code maintainable.",
      "Worked closely with design and product to make the new version easier to use, improve the visual design and fix weak points in important user flows. We improved what we could on the frontend without creating unnecessary backend work.",
      "While rewriting the product, I pointed out existing UX and product problems that could affect the new design, so the team could decide which ones should be fixed instead of carrying them into the new version.",
      "Refactored sensitive, state-heavy parts of the frontend and added automated tests so we could catch problems earlier and rely less on slow manual regression testing.",
      "Helped with delivery estimates, release planning, documentation, onboarding and day-to-day coordination when the team was working under tight deadlines."
    ],
    stack: ["React", "React Router", "TypeScript", "MUI", "Vue.js", "TanStack Query", "Testing"]
  },
  {
    company: "Espad Pouyesh Mandegar",
    role: "Frontend Developer",
    period: "Mar 2021 — Jun 2023",
    summary:
      "Built reusable frontend components and shared UI foundations for B2B procurement and supply-chain products.",
    highlights: [
      "Built a shared design system with React and Svelte to keep UI components consistent across products.",
      "Added Storybook for component documentation and Playwright for automated UI testing.",
      "Built a dynamic form generator in React for configurable business workflows.",
      "Refactored Svelte micro-apps in a Single-SPA setup to make the code easier to maintain and extend."
    ],
    stack: ["React", "Svelte", "TypeScript", "Storybook", "Playwright", "Single-SPA"]
  },
  {
    company: "CashCool",
    role: "Frontend Developer",
    period: "Sep 2019 — Feb 2021",
    summary:
      "Worked on a React PWA wallet and customer application, with a focus on reliable user flows and maintainable code.",
    highlights: [
      "Worked on a React PWA wallet and customer app using Redux for state management.",
      "Added Cypress end-to-end coverage for critical user journeys.",
      "Worked in an Nx monorepo to organize shared frontend code and dependencies."
    ],
    stack: ["React", "Redux", "PWA", "Cypress", "Nx"]
  }
];

export const projects = [
  {
    title: "Vue → React Production Migration",
    eyebrow: "Production rewrite · FarabiTech",
    description:
      "Rebuilt a production financial application from Vue to React with React Router and MUI in about two months. During the rewrite, we improved the design, made key flows easier for users and fixed frontend issues without adding unnecessary backend changes.",
    details: ["React", "React Router", "TypeScript", "MUI", "Migration", "Product UX"]
  },
  {
    title: "Design System & Shared UI Architecture",
    eyebrow: "Reusable UI foundations · Espad",
    description:
      "Built a reusable design system with React and Svelte using atomic design principles. Storybook and Playwright helped the team keep UI components consistent, documented and easier to test.",
    details: ["React", "Svelte", "Storybook", "Playwright", "Design Systems", "Atomic Design"]
  },
  {
    title: "Testing Complex Frontend Flows",
    eyebrow: "Reliability · Production quality",
    description:
      "Improved difficult, state-heavy frontend areas by refactoring sensitive components and adding more automated tests. This made problems easier to catch before release and reduced repeated manual testing.",
    details: ["Unit Testing", "E2E Testing", "Cypress", "Playwright", "Refactoring", "Regression Safety"]
  },
  {
    title: "PWA Financial Product Architecture",
    eyebrow: "State-heavy frontend · CashCool",
    description:
      "Worked on a React PWA wallet and customer application using Redux, Cypress and Nx. The focus was on predictable state, reliable critical flows and a frontend structure that was easier to maintain.",
    details: ["React", "Redux", "PWA", "Cypress", "Nx", "Frontend Architecture"]
  }
];

export const strengths = [
  "React & TypeScript",
  "Frontend architecture",
  "Vue → React migrations",
  "Design systems",
  "Automated testing",
  "Product-minded UI",
  "Performance & maintainability",
  "Cross-functional delivery"
];
