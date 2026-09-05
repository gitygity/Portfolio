export const profile = {
  name: "Gity (Monireh) Ghasemi",
  role: "Frontend Engineer",
  location: "Based in Iran · Open to remote roles across Europe and relocation",
  email: "gity.ghasemi@gmail.com",
  linkedin: "https://www.linkedin.com/in/gity-ghasemi",
  github: "https://github.com/gitygity",
  intro:
    "Frontend Engineer with 7+ years of experience building production web applications across fintech and B2B products. I specialize in React, TypeScript and modern frontend development, with hands-on experience in framework migrations, frontend architecture, design systems, automated testing and AI-assisted development. I care about reliable user experiences, maintainable code and understanding the product logic behind the UI.",
};

export const experience = [
  {
    company: "FarabiTech",
    role: "Frontend Engineer",
    period: "Jul 2023 — Present",
    summary:
      "Building and modernizing customer-facing financial products across investment funds, neobank, brokerage and customer services.",
    highlights: [
      "Migrated a legacy Angular application covering investment funds, neobank and customer-club flows to Vue.js, improving modularity and maintainability.",
      "Later contributed to a production rewrite from Vue to React using React Router and MUI in about two months, using AI-assisted development workflows to accelerate implementation and iteration.",
      "Used deep product and business-logic knowledge from the previous migration to identify missing rules, edge cases and flow details that could have been overlooked in new designs.",
      "Refactored a highly complex multi-variant order-details flow by introducing a dedicated Strategy per detail type, supported by Factory and Builder patterns.",
      "Owned an automated testing initiative for high-risk, state-heavy frontend flows, adding unit, integration and component tests and improving testability through refactoring.",
      "Built an internal mock-state preview tool for order-detail flows that could otherwise take 1–3 days to reach different states, significantly shortening validation cycles.",
      "Worked closely with UI/UX, QA, Product and Engineering during implementation and validation, improved Confluence documentation and supported onboarding."
    ],
    stack: ["React", "React Router", "TypeScript", "MUI", "Vue.js", "TanStack Query", "Automated Testing", "AI-Assisted Development"]
  },
  {
    company: "Espad Pouyesh Mandegar",
    role: "Frontend Developer",
    period: "Mar 2021 — Jun 2023",
    summary:
      "Built reusable frontend foundations for configurable B2B procurement and supply-chain products.",
    highlights: [
      "Built and evolved a reusable design system in React and Svelte using Atomic Design principles, improving UI consistency and component reuse across multiple products.",
      "Integrated Storybook for component documentation and Playwright for automated testing, making shared UI components easier to validate and maintain.",
      "Played a key role in designing and implementing a JSON-driven dynamic form system, defining a shared frontend-backend schema and building a recursive renderer.",
      "Migrated tender, auction, call-for-proposal and related workflow forms to the JSON-driven model while preserving existing behavior.",
      "Refactored Svelte micro-apps within a Single-SPA architecture, improving separation of concerns, modularity and maintainability."
    ],
    stack: ["React", "Svelte", "TypeScript", "Storybook", "Playwright", "Single-SPA", "Design Systems"]
  },
  {
    company: "CashCool",
    role: "Frontend Developer",
    period: "Sep 2019 — Feb 2021",
    summary:
      "Worked on a React PWA wallet and customer application with a focus on reliable user flows and maintainable frontend code.",
    highlights: [
      "Contributed to a React-based PWA wallet and customer application, using Redux for predictable state management across core user flows.",
      "Implemented Cypress end-to-end tests for critical user journeys, improving regression coverage and reliability.",
      "Improved frontend project structure using an Nx monorepo, simplifying dependency management and shared-code maintenance."
    ],
    stack: ["React", "Redux", "PWA", "Cypress", "Nx"]
  }
];

export const projects = [
  {
    title: "Production Frontend Rewrite: Vue → React",
    eyebrow: "FarabiTech · Production migration",
    description:
      "A production rewrite completed in about two months. I contributed to implementation, complex product flows and continuous design collaboration while using prior product knowledge to catch business rules and edge cases that were missing or at risk in the new designs.",
    outcome:
      "The new React implementation preserved business-critical behavior while improving usability, visual consistency and the frontend foundation for ongoing development.",
    details: ["React", "React Router", "TypeScript", "MUI", "AI-Assisted Development"]
  },
  {
    title: "Order Details Architecture",
    eyebrow: "FarabiTech · Architecture & reliability",
    description:
      "Refactored a multi-variant order-details flow where business orchestration lived heavily on the frontend. I moved from broad shared strategies to a dedicated Strategy per detail type, selected by a Factory and normalized by a Builder.",
    outcome:
      "Improved isolation, testability and confidence in change, while a mock-state preview tool made long-lived order states faster to validate.",
    details: ["Strategy", "Factory", "Builder", "Automated Testing", "Mock States"]
  },
  {
    title: "Automated Testing for Complex Frontend Flows",
    eyebrow: "FarabiTech · Testing strategy",
    description:
      "Owned an automated testing initiative for high-risk, state-heavy flows. I prioritized recurring problem areas, protected existing behavior before refactoring and added unit, integration and component coverage.",
    outcome:
      "Reduced reliance on lengthy manual validation, made risky changes safer and helped more team members work confidently in complex product areas.",
    details: ["Unit Testing", "Integration Testing", "Component Testing", "Refactoring"]
  },
  {
    title: "JSON-Driven Dynamic Form System",
    eyebrow: "Espad · Configurable B2B workflows",
    description:
      "Helped design the first phase of a configurable form platform by defining a shared frontend-backend JSON schema and implementing a recursive React renderer that generated forms from configuration instead of hard-coded UI.",
    outcome:
      "Existing tender, auction and call-for-proposal forms were migrated to the new model while preserving behavior and creating a more extensible foundation for configurable workflows.",
    details: ["React", "JSON Schema", "Recursive Rendering", "B2B Workflows"]
  }
];

export const strengths = [
  "React & TypeScript",
  "Frontend architecture",
  "Production migrations",
  "Design systems",
  "Automated testing",
  "Complex product logic",
  "Product & UX collaboration",
  "AI-assisted development"
];

export const education = [
  {
    degree: "M.Sc. in Information Technology",
    school: "University of Birjand",
    period: "2014 — 2017",
    detail:
      "Thesis: IRSTI — an intelligent tourism recommendation system using geotagged image metadata, collaborative filtering and automatic clustering."
  },
  {
    degree: "B.Sc. in Information Technology",
    school: "Payame Noor University, Najafabad",
    period: "2008 — 2012",
    detail: "Academic background in software, data and information technology."
  }
];

export const publication = {
  title:
    "Application of Perceptron Neural Network in Predicting Students’ Average by Comparing Different Network Training Methods",
  venue:
    "First National Conference on Information Technology and Computer Networks, Payame Noor University · 2012",
  url: "https://civilica.com/doc/196053/",
};
