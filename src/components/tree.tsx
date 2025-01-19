import { FC } from "react";
import { Logo } from "./logo";

export const TreeContent: FC = () => {
  return (
    <div
      id="primary-content"
      className="relative px-4 pb-24 flex flex-row h-full md:h-4/5 w-full"
    >
      <div className="hidden md:block invisible w-20" />
      <pre className="hidden md:block ibm-plex-mono">{DESKTOP_TEXT}</pre>
      <pre className="block md:hidden ibm-plex-mono">{MOBILE_TEXT}</pre>
      <pre
        suppressHydrationWarning
        className="absolute top-4 right-12 hidden md:block text-right ibm-plex-mono text-black/20 dark:text-white/20"
      >
        {generateSystemInfo()}
      </pre>
    </div>
  );
};

const generateSystemInfo = () => {
  return `
  All Systems Operational
  Rendered on the edge on ${new Date().toUTCString()}
  with Vercel, Next.js`;
};

const DESKTOP_TEXT = `  │
  ├── Intro
  │   ├── ⦿ Daniel Wei / designs & builds digital infrastructure for humans
  │   └── ⦿ Beliefs
  │       ├── ⦾ honesty comes unadorned
  │       ├── ⦾ form is a function of function
  │       ├── ⦾ elegance is hierarchical and recursive
  │       └── ⦾ our tools must be legible top-down
  ├── Present
  │   ├── ⦿ Work
  │   │   ├── ⦾ Currently: at Shmood (EF W23)
  │   │   ├── ⦾ Previously: Google Docs (Internship Summer 2024)
  │   │   └── ⦾ Previously: Instapath (YC W19)
  │   └── ⦿ Education / at Cornell University
  │       ├── ⦾ Major: Computer Science
  │       ├── ⦾ Minor: UX Design
  │       ├── ⦾ Minor: East Asian Studies
  │       └── ⦾ Led teams on Cornell DTI and DCC
  ├── Past
  │   ├── ⦿ Formerly
  │   │   ├── ⦾ Houston
  │   │   └── ⦾ Shanghai
  │   └── ⦿ Currently
  │       ├── ⦾ The Residency, in New York City, NY
  │       └── ⦾ Ithaca, NY
  └── Presence
      ├── ⦾ Github
      └── ⦾ LinkedIn
      ├── ⦾ Are.na
      └── ⦾ Photography`;

const MOBILE_TEXT = `│
├── Intro
│   ├── ⦿ Daniel Wei
│   └── ⦿ Beliefs
│       ├── ⦾ honesty (brutalism)
│       ├── ⦾ form = fxnality |> fxn
│       ├── ⦾ fractals
│       └── ⦾ top-down legibility
├── Present
│   ├── ⦿ Work
│   │   ├── ⦾ @ Shmood (EF W23)
│   │   ├── ⦾ Prev Google Docs (S24)
│   │   └── ⦾ Prev: Instapath (YC W19)
│   └── ⦿ Education @ Cornell Univ.
│       ├── ⦾ Major: Computer Science
│       ├── ⦾ Minor: UX Design
│       └── ⦾ Minor: East Asian Studies
├── Past
│   ├── ⦿ Formerly
│   │   ├── ⦾ Houston
│   │   └── ⦾ 上海
│   └── ⦿ Currently
│       ├── ⦾ The Residency, NYC
│       └── ⦾ Ithaca, NY
└── Presence
    ├── ⦾ Github
    └── ⦾ LinkedIn
    ├── ⦾ Are.na
    └── ⦾ Photography`;
