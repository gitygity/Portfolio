export const profile = {
  name: "Gity (Monireh) Ghasemi",
  role: "Frontend Engineer",
  location: "Open to relocation",
  email: "gity.ghasemi@gmail.com",
  linkedin: "https://www.linkedin.com/in/gity-ghasemi",
  intro:
    "I build dependable, user-friendly frontend products with React, TypeScript and modern web architecture. My work spans fintech platforms, large-scale rewrites, design systems, testing strategy and product-focused UI improvements.",
};

export const experience = [
  {
    company: "FarabiTech",
    role: "Frontend Engineer (Software Engineer III / L4)",
    period: "Jul 2023 — Present",
    summary:
      "Frontend engineering for financial products across investments, neobank experiences and customer-facing services.",
    highlights: [
      "Rewrote a production Vue application in React with React Router and MUI in about two months, using AI-assisted development workflows to accelerate delivery while keeping implementation decisions reviewable and maintainable.",
      "Worked closely with product and design to significantly improve visual consistency, usability and key user flows, while resolving frontend-side issues without introducing unnecessary backend changes.",
      "Surfaced unresolved product and UX constraints during the redesign so they could be addressed deliberately instead of being carried into the new experience.",
      "Improved testability in state-heavy areas by refactoring sensitive components and adding automated coverage, reducing reliance on slow manual regression cycles.",
      "Contributed to delivery estimation, release planning, cross-team coordination, documentation and onboarding during critical phases of the product."
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
      "Developed a design system with React and Svelte using atomic design principles to improve consistency across products.",
      "Integrated Storybook and Playwright to make UI documentation and automated verification part of the development workflow.",
      "Built a dynamic React form generator for configurable business workflows.",
      "Refactored Svelte micro-apps within a Single-SPA architecture to improve modularity and maintainability."
    ],
    stack: ["React", "Svelte", "TypeScript", "Storybook", "Playwright", "Single-SPA"]
  },
  {
    company: "CashCool",
    role: "Frontend Developer",
    period: "Sep 2019 — Feb 2021",
    summary:
      "Worked on a PWA wallet and customer application with a focus on maintainable React architecture and reliable flows.",
    highlights: [
      "Contributed to a React PWA wallet and customer app using Redux for predictable state management.",
      "Added Cypress end-to-end coverage for critical user journeys.",
      "Worked with an Nx monorepo structure to streamline shared dependencies and frontend build organization."
    ],
    stack: ["React", "Redux", "PWA", "Cypress", "Nx"]
  }
];

export const projects = [
  {
    title: "Vue → React Production Migration",
    eyebrow: "Production rewrite · FarabiTech",
    description:
      "Rebuilt a production financial application from Vue to React with React Router and MUI in roughly two months, while improving visual consistency, usability and key user flows without introducing unnecessary backend changes.",
    details: ["React", "React Router", "TypeScript", "MUI", "Migration", "Product UX"]
  },
  {
    title: "Design System & Shared UI Architecture",
    eyebrow: "Reusable UI foundations · Espad",
    description:
      "Developed a reusable design system with React and Svelte using atomic design principles, supported by Storybook and Playwright to improve consistency, documentation and confidence across product teams.",
    details: ["React", "Svelte", "Storybook", "Playwright", "Design Systems", "Atomic Design"]
  },
  {
    title: "Testing Complex Frontend Flows",
    eyebrow: "Reliability · Production quality",
    description:
      "Improved testability in state-heavy product areas by refactoring sensitive components and expanding automated coverage, reducing dependence on slow manual regression cycles and making releases safer.",
    details: ["Unit Testing", "E2E Testing", "Cypress", "Playwright", "Refactoring", "Regression Safety"]
  },
  {
    title: "PWA Financial Product Architecture",
    eyebrow: "State-heavy frontend · CashCool",
    description:
      "Contributed to a React PWA wallet and customer application with Redux, Cypress and an Nx monorepo structure, focusing on predictable state, reliable critical flows and maintainable shared frontend foundations.",
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
