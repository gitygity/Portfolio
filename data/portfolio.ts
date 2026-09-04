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
    title: "AI Workspace",
    eyebrow: "Next.js · Product architecture",
    description:
      "A modern AI workspace built with Next.js 16 and React 19, featuring credentials-based authentication, role-aware flows, Prisma-backed data and Zustand state.",
    details: ["Next.js 16", "React 19", "TypeScript", "Prisma", "NextAuth", "Zustand"]
  },
  {
    title: "Crypto Dashboard",
    eyebrow: "Real-time data · Next.js",
    description:
      "A cryptocurrency dashboard with live WebSocket prices, server-side data fetching, ISR, dynamic routes, metadata generation, watchlists and favorites.",
    details: ["Next.js", "TypeScript", "Server Actions", "ISR", "WebSocket", "Caching"]
  },
  {
    title: "AI Article Summarizer",
    eyebrow: "AI integration · Async state",
    description:
      "A responsive summarization experience using Next.js and TanStack Query, with API integration, local history, hydration-safe client behavior and thoughtful loading/error states.",
    details: ["Next.js", "React", "TanStack Query", "Tailwind CSS", "API integration"]
  },
  {
    title: "Task Manager",
    eyebrow: "Complex UI state · Testing",
    description:
      "A React task management app with optimistic updates, Supabase integration, drag-and-drop interactions, form validation, component primitives and automated testing.",
    details: ["React", "TypeScript", "React Query", "Zustand", "Supabase", "Vitest"]
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
