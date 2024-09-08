"use client";

import React, { useState } from "react";
import { TransitionPanel } from "./transition-panel";
import { cn } from "../lib/utils";

const ITEM_CONTENT: Array<[string, string, Array<string>]> = [
  [
    "Principles",
    "I believe in...",
    [
      "Explicitly legible systems that capture, guide, and inform intent.",
      "Idealistically-guided, recursive, top-down thinking.",
      "Design as the embodiment of your highly personal truth.",
    ],
  ],
  [
    "About",
    "Hi. I'm Daniel Wei.",
    [
      `I'm a design engineer. I do everything from first principles:`,
      `  1. UX Research to discover latent need`,
      `  2. UI Design to capture that intent.`,
      `  3. Functional, expressive code to realize that design.`,
      `I'm currently working as a Founding Engineer at Shmood. We're a venture-backed design start-up based out of Soho, NYC.`,
      `I'm on leave from school, but when I return, I'll be finishing my senior year studying Computer Science, UX Design, and East Asian Studies at Cornell University.`,
      `On campus, I've led design consulting and software development teams in various project management roles.`,
      `I've been programming for about 8 years. I've worked at Google, and with Neo and YC-backed start-ups of all sizes.`,
    ],
  ],
  [
    "Work",
    "Some places I've worked (or things I've built):",
    [
      `Shmood.io - Client Experience (CX) Management for Designers`,
      `Google Docs - Email Notification Infrastructure`,
      `Instapath - YC-backed AI for Pathology`,
      `Yoomi.health - PT patient management, backed by Mark Cuban`,
      `TextQL - UX/UI consulting for Neo-backed data platform`,
    ],
  ],
];

export function Content() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-[440px] max-w-screen">
      <div className="mb-2 flex divide-x divide-solid divide-stone-800/20 border border-stone-800/20 w-fit shadow-sm">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${cn(
              "bg-stone-200 px-3 py-1",
              activeIndex === index
                ? "text-stone-500 bg-stone-300 shadow-inner"
                : "text-stone-600 hover:text-stone-800 hover:mix-blend-multiply",
            )}`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <TransitionPanel
        activeIndex={activeIndex}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        variants={{
          enter: { opacity: 0, y: 0, x: -24, filter: "blur(4px)" },
          center: { opacity: 1, y: 0, x: 0, filter: "blur(0px)" },
          exit: { opacity: 0, y: 0, x: 24, filter: "blur(4px)" },
        }}
      >
        {ITEMS.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </TransitionPanel>
    </div>
  );
}

const ITEMS = ITEM_CONTENT.map(([title, header, content]) => ({
  title,
  content: (
    <table className="table-auto w-full border-collapse border border-stone-200 shadow-sm">
      <thead className="bg-stone-300/50 shadow-inner select-none">
        <td className="translate-x-1 py-1">{header}</td>
      </thead>
      <tbody className="divide-y">
        {content.map((item, index) => (
          <tr
            key={index}
            className="translate-x-1 hover:translate-x-3 transition-all select-none"
          >
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
}));
