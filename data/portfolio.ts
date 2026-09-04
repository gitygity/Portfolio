export const profile = {
  name: "Gity (Monireh) Ghasemi",
  role: "Frontend Engineer",
  location: "Based in Iran · Open to relocation",
  email: "gity.ghasemi@gmail.com",
  linkedin: "https://www.linkedin.com/in/gity-ghasemi",
  intro:
    "Frontend Engineer with 7 years of experience building and improving production web applications across fintech and B2B products. My strongest areas are React, TypeScript, frontend architecture, large-scale migrations, design systems and automated testing. I care about reliable user experiences, maintainable code and taking ownership of work from implementation through release.",
};

export const experience = [
  {
    company: "FarabiTech",
    role: "Frontend Engineer · Software Engineer III (L4)",
    period: "Jul 2023 — Present",
    summary:
      "Building and modernizing customer-facing financial products across investment and neobank experiences.",
    highlights: [
      "Rewrote a production Vue application in React with React Router and MUI in about two months, helping the team move to a stack that is easier to extend and maintain.",
      "Worked closely with design and product during the rewrite to improve visual consistency, simplify important user flows and fix frontend issues that were affecting the experience.",
      "Identified existing UX and product problems during the migration so they could be addressed instead of being carried into the new version.",
      "Refactored sensitive, state-heavy frontend areas and added automated tests to catch regressions earlier and reduce repeated manual testing.",
      "Contributed to delivery estimates, release planning, documentation, onboarding and coordination during high-pressure delivery periods."
    ],
    stack: ["React", "React Router", "TypeScript", "MUI", "Vue.js", "TanStack Query", "Testing"]
  },
  {
    company: "Espad Pouyesh Mandegar",
    role: "Frontend Developer",
    period: "Mar 2021 — Jun 2023",
    summary:
      "Built reusable frontend foundations for B2B procurement and supply-chain products.",
    highlights: [
      "Built a shared design system with React and Svelte to improve consistency across products.",
      "Introduced Storybook for component documentation and Playwright for automated UI testing.",
      "Built a dynamic React form generator for configurable business workflows.",
      "Refactored Svelte micro-apps in a Single-SPA setup to make the code easier to maintain and extend."
    ],
    stack: ["React", "Svelte", "TypeScript", "Storybook", "Playwright", "Single-SPA"]
  },
  {
    company: "CashCool",
    role: "Frontend Developer",
    period: "Sep 2019 — Feb 2021",
    summary:
      "Worked on a React PWA wallet and customer application with a focus on reliable user flows and maintainable frontend code.",
    highlights: [
      "Built product features in React and Redux for a customer-facing PWA wallet.",
      "Added Cypress end-to-end tests for critical user journeys.",
      "Worked in an Nx monorepo to organize shared frontend code and dependencies."
    ],
    stack: ["React", "Redux", "PWA", "Cypress", "Nx"]
  }
];

export const projects = [
  {
    title: "Vue → React Production Migration",
    eyebrow: "FarabiTech · Production rewrite",
    description:
      "A full rewrite of a live financial product from Vue to React. I worked across implementation, UI quality and user flows, while helping identify problems that should be fixed during the migration rather than copied into the new version.",
    outcome:
      "Delivered the rewrite in about two months using React, React Router and MUI, with a cleaner UI and a frontend foundation that is easier for the team to continue developing.",
    details: ["React", "React Router", "TypeScript", "MUI", "Migration"]
  },
  {
    title: "Design System & Shared UI",
    eyebrow: "Espad · Reusable frontend foundations",
    description:
      "Built reusable UI foundations for multiple products with React and Svelte, using a shared design system to reduce inconsistency and make common components easier to reuse.",
    outcome:
      "Added Storybook for documentation and Playwright for automated verification, making shared components easier to understand, test and maintain.",
    details: ["React", "Svelte", "Storybook", "Playwright", "Design Systems"]
  },
  {
    title: "Testing Complex Frontend Flows",
    eyebrow: "Production quality · Reliability",
    description:
      "Worked on state-heavy frontend areas where small changes could easily cause regressions. I refactored sensitive parts of the UI and added automated coverage around important behavior.",
    outcome:
      "Made issues easier to catch before release and reduced the amount of repeated manual regression testing needed for risky flows.",
    details: ["Unit Testing", "E2E Testing", "Cypress", "Playwright", "Refactoring"]
  }
];

export const strengths = [
  "React & TypeScript",
  "Frontend architecture",
  "Production migrations",
  "Design systems",
  "Automated testing",
  "Product & UX collaboration",
  "Delivery ownership",
  "Agile teamwork"
];
