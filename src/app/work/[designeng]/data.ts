export const DATA: {
  experiences: Array<{
    category: string;
    link?: string;
    name: string;
    organization: string;
    description: string;
    period: string;
    tags?: Array<string>;
    image?: string;
    brief: Array<string>;
  }>;
} = {
  experiences: [
    {
      category: "engineering",
      link: "https://www.shmood.io/",
      name: "Shmood",
      organization: "Shmood, Inc.",
      description:
        "Full-stack data platform and automation tool for design agencies and their clients. Next.js and Supabase.",
      period: "2023 - 25",
      image: "/assets/ascii-art-shmood.png",
      tags: [
        "Next.js",
        "Supabase",
        "TypeScript",
        "MobX",
        "Tailwind CSS",
        "Redis",
        "Postgres",
        "Playwright",
        "OpenTelemetry",
      ],
      brief: [
        "Shmood is a full-stack data platform that both ingests and sends communications between design agencies and their clients in order to tighten the asynchronous design feedback loop.",
        "To deliver the experience our user wanted, we needed the best of all worlds. The basics are simple: server-side rendering with Next.js for static shells, and a custom component library built atop our Tailwind CSS tokens and a heavily forked shadcn/ui variant. To get better at animations, I took Emil Kowalski's incredible course on it. Observability via OpenTelemetry and Playwright for end-to-end tests.",
        "But that's not enough. We had to zero our load times for the lazy-loaded editor web-app. This involved building a local-first sync engine, Linear-style, from scratch, with MobX. We also built a generalized, app-wide ingest and out-gest queue-based API to reliably normalize all inbound and outbound data at scale, no matter the shape, using chain-of-reasoning LLMs.",
        "All this, and a lot more. I'm proud of the work we've done, and I'm excited to see what the product grows into in the future.",
      ],
    },
    {
      category: "engineering",
      name: "Luciviewer",
      organization: "Instapath, Inc.",
      description:
        "Product frontend featuring deep-zoom capabilities, AI-powered recommendation systems, and advanced search expressions.",
      period: "2021",
      image: "/assets/ascii-art-instapath.png",
      tags: [
        "Figma",
        "React",
        "Redux",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "Turborepo",
      ],
      brief: [
        "The Luciviewer is a deep-zoom image viewer for medical histologies, designed to process scans from Instapath's proprietary instant histology hardware (YC-backed and patented). It supports massive images up to tens of gigabytes in size, by slicing and compressing them into a pyramidal format and then rendering only the tiles you are looking at in three-dimensional zoom space.",
        "It also supports HSL recoloring, region comments, AI-suggested similar image recommendation systems, and a powerful and expressive search and filtering system for large hospitals to use across their entire team.",
        "I designed and built the entirety of the Luciviewer frontend, from the initial Figma mockups to the final React components, over two and a half months in Austin, Texas, in the summer of 2023. I also built the Dockerized build pipeline and the Turborepo monorepo structure that the project is built on.",
        "It is currently in use by several hospitals in the Texas Medical Center.",
      ],
    },
    {
      category: "engineering",
      name: "Google Docs",
      organization: "Google",
      description:
        "Email notifications for long-running bulk document processes.",
      period: "2024",
      image: "/assets/ascii-art-google.png",
      tags: ["spanner", "soy templates", "guice", "idk other internal tools"],
      brief: ["Further Details Under NDA."],
    },
    {
      category: "engineering",
      link: "https://github.com/cornell-dti/trends-autograder/tree/main",
      name: "Trends Autograder",
      organization: "Design & Technology Initiative @ Cornell",
      description:
        "Highly-concurrent, functionally-pure Bun + TypeScript autograder for class assignments.",
      period: "2024",
      image: "/assets/ascii-art-dti.png",
      tags: ["bun", "effect-ts", "functional"],
      brief: [
        "Effect is a Functional Programming standard library for TypeScript that allows us to create monadic, type-safe, side-effect-less code in TypeScript with dependency injection, concurrency, and reliability built in.",
        "Instead of taking five hours to grade some 50 students' homework every week for a semester, I wasted probably about the same amount of time writing this autograder instead.",
      ],
    },
    {
      category: "engineering",
      link: "https://gitsynth.com",
      name: "GitSynth",
      organization: "Independent",
      description:
        "Resolve Git merge conflicts and perform large refactors intelligently with graph-wide intent + context. Golang, HTMX, OCaml.",
      tags: ["golang", "htmx", "ocaml", "functional"],
      period: "COMING SOON",
      image: "/assets/ascii-art.png",
      brief: [
        "Building a tool to help developers resolve merge conflicts intelligently.",
        "Thesis: we should be able to index a code-base -- not just as it is, but as it was, by maximally squashing the history tree until the graph of commits converges on the graph of branches then. We should then be able to embed the intentionality behind any branch into a vector database, so that future comparisons of changes can be made efficiently at relatively constant speeds.",
        "If true, this would allow us to resolve merge conflicts and perform large refactors intelligently, by comparing the intent of the code, not just the code itself. This would be a game-changer for large codebases, and I'm excited to see where it goes.",
        "It would change how we collaborate on code, and how we think about code itself. Small teams would ship faster; large teams would no longer be held back by their lowest common denominator of wide-ranging changes all connected to the same underlying issue.",
      ],
    },
    {
      category: "engineering",
      link: "https://github.com/epicdragon44/scout",
      name: "Scout",
      organization: "Independent",
      description: "Actually hands-free browser for the visually impaired.",
      period: "COMING SOON",
      tags: ["nestjs", "browser extensions", "accessibility", "react"],
      image: "/assets/ascii-art-scout.png",
      brief: [
        "Building a tool to help the visually impaired navigate the web with just their voice",
        "Thesis: in the traditional hypermedia object representation model, one should be able to visit all nodes in an API from the first node visited. In other words, REST means self-documenting.",
        "If true, there is no reason HTML has to be the medium of exchange. We propose building an auditory layer entirely atop of, and interpreting of, existing HTML on any webpage. It should convey just two things: the content on the webpage in natural language, and the set of next possible actions to take.",
        "Accelerated at the a16z Consumer Hackathon in NYC, hosted at the Elevenlabs offices.",
      ],
    },
    {
      category: "design",
      link: "/files/instapath.pdf",
      name: "Designing for Instapath",
      organization: "Instapath, Inc.",
      description:
        "Deep-dive design case study into the redesign of a frontend in the biotechnology space.",
      period: "2023",
      image: "/assets/ascii-art-instapath.png",
      tags: ["Design Engineering", "Figma", "Case Study"],
      brief: [
        "The Luciviewer is a deep-zoom image viewer for medical histologies, designed to process scans from Instapath's proprietary instant histology hardware (YC-backed and patented).",
        "It also supports HSL recoloring, region comments, AI-suggested similar image recommendation systems, and a powerful and expressive search and filtering system for large hospitals to use across their entire team.",
        "I designed and built the entirety of the Luciviewer frontend, from the initial Figma mockups to the final React components, over two and a half months in Austin, Texas, in the summer of 2023.",
        "Over the course of that first summer, as I did my initial UX/UI research, I wrote my thoughts down in a brief. You may access it at the respective link in the table above.",
      ],
    },
    {
      category: "design",
      link: "https://medium.com/design-bootcamp/mixing-up-apple-music-ccd070cc0cd5",
      name: "Mixes - An Apple Music Case Study",
      organization: "Independent",
      description:
        "Secondary design case study into how Apple could better capture user intent if they really tried.",
      period: "2021",
      image: "/assets/ascii-art-apple.png",
      tags: ["Figma", "Case Study"],
      brief: [
        "My first-ever design case study. Published on Bootcamp, on Medium.",
        "A scientifically-grounded approach to delivering music according to user intention, materialized in visual form.",
      ],
    },
    {
      category: "design",
      link: "https://www.behance.net/gallery/189157169/Upreach",
      name: "Upreach - AI-powered outbound",
      organization: "Design Consulting @ Cornell",
      description:
        "Design consulting work for Upreach.ai, an AI-powered outbound sales platform.",
      period: "2024",
      image: "/assets/ascii-art-dcc.png",
      tags: ["Consulting", "Figma"],
      brief: [
        "Upreach.ai is an AI-powered outbound sales platform. I worked as a design consultant on the team, and quickly realized I would be relied on for the bulk of the design of the user flows throughout the hierarchy of the app.",
        "During this time, I began to formalize my axioms of designing for LLMs. They are as follows:",
        "1) Always show the result of an action an AI is about to take to the user, and get their approval about the end state of the process -- not the action. 2) Prefer small, frequent, and structured AI actions that can be aggressively queued up -- ideally, as soon as the total number of possible permutations of relevant application state is known. 3) Only use AI to do things that were computationally impossible prior. 4) Never tell the user it's AI.",
      ],
    },
    {
      category: "design",
      link: "/files/textql.png",
      name: "TextQL - Data Platform",
      organization: "Design Consulting @ Cornell",
      description:
        "Project Management and Design Lead for a Neo-backed, LLM-powered data platform.",
      period: "2024",
      image: "/assets/ascii-art-dcc.png",
      tags: ["Consulting", "Figma"],
      brief: [
        "TextQL is a Neo-backed data platform working with clients like the NBA to help employees self-serve the data analytics they need to go on about their day.",
        "I served as Project Manager for a redesign in which they moved away from running pure LLM outputs towards an approach grounded in the ontology (nouns and verbs) of the business whose data they operate on.",
        "Putting my axioms from Upreach into practice, we designed a system of guardrails to transparently construct a correct working mental model of the system for the user as quickly as possible -- an experience that spans enterprise onboarding and day-to-day usage.",
      ],
    },
  ],
};
