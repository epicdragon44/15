"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { Logo } from "./logo";
import { Loading } from "./loading";
import { Back } from "./back";

export const TreeContent: FC = () => {
  const [state, setState] = useState<"loading" | "engineering" | "design">(
    "loading",
  );
  const randomLoadTime = useMemo(
    () =>
      state === "loading" ? Math.random() * 600 + 600 : Math.random() * 20,
    [state],
  );

  // change from 'loading' to 'design' after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setState("design");
    }, randomLoadTime);
    return () => clearTimeout(timer);
  }, []);

  if (state === "loading") {
    return <Loading />;
  }

  return (
    <div
      id="primary-content"
      className="font-mono text-sm tracking-tight relative px-4 md:px-12 py-4 md:py-12 flex flex-col h-full md:h-4/5 w-full"
    >
      <Back />
      <table className="table-auto align-top border-separate border-b-2 border-r-2 border-white pb-2 pr-2">
        <colgroup className="">
          <col className="bg-zinc-100/15" />
          <col className="" />
          <col className="bg-zinc-100/15" />
          <col className="" />
          <col className="bg-zinc-100/15" />
        </colgroup>
        <thead>
          <tr className="text-left bg-zinc-100/15">
            <th>LINK</th>
            <th>PROJECT NAME</th>
            <th>AFFILIATION</th>
            <th>BRIEF</th>
            <th>YEAR</th>
          </tr>
        </thead>
        {state === "engineering" ? ENGINEERING : DESIGN}
      </table>
      <div className="w-full h-fit flex flex-row px-1 justify-between">
        <span className="text-white/30">
          Ping {Math.floor(randomLoadTime)}ms
        </span>
        <div className="w-fit h-full flex flex-row gap-1 justify-end">
          <button
            onMouseDown={() => setState("engineering")}
            className={
              state === "engineering"
                ? "bg-white text-black"
                : "bg-white/30 text-white"
            }
          >
            ENGINEERING
          </button>
          <button
            onMouseDown={() => setState("design")}
            className={
              state === "design"
                ? "bg-white text-black"
                : "bg-white/30 text-white"
            }
          >
            DESIGN
          </button>
        </div>
      </div>
    </div>
  );
};

const ENGINEERING = (
  <tbody>
    <tr>
      <td>
        <a href="https://www.shmood.io/">LINK</a>
      </td>
      <td>Shmood</td>
      <td>Shmood, Inc.</td>
      <td>
        Full-stack data platform and automation tool for design agencies and
        their clients. Next.js and Supabase.
      </td>
      <td>2023 - 25</td>
    </tr>
    <tr>
      <td>N/A</td>
      <td>Luciviewer</td>
      <td>Instapath, Inc.</td>
      <td>
        Product frontend featuring deep-zoom capabilities, AI-powered
        recommendation systems, and advanced search expressions.
      </td>
      <td>2021</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/cornell-dti/trends-autograder/tree/main">
          LINK
        </a>
      </td>
      <td>Trends Autograder</td>
      <td>Design & Technology Initiative @ Cornell</td>
      <td>
        Highly-concurrent, functionally-pure Bun + TypeScript autograder for
        class assignments.
      </td>
      <td>2024</td>
    </tr>
    <tr>
      <td>
        <a href="https://gitsynth.com">COMING SOON</a>
      </td>
      <td>GitSynth</td>
      <td>Independent</td>
      <td>
        Resolve Git merge conflicts and perform large refactors intelligently
        with graph-wide intent + context. Golang, HTMX, OCaml.
      </td>
      <td>2024</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/cornell-dti/hyperdti-cu">LINK</a>
      </td>
      <td>HyperDTI - Link Shortener</td>
      <td>Design & Technology Initiative @ Cornell</td>
      <td>
        Dead-simple URL shortener built in 24 hours with Firebase and Svelte.
      </td>
      <td>2024</td>
    </tr>
  </tbody>
);

const DESIGN = (
  <tbody>
    <tr>
      <td>
        <a href="/files/instapath.pdf">LINK</a>
      </td>
      <td>Designing for Instapath</td>
      <td>Instapath, Inc.</td>
      <td>
        Deep-dive design case study into the redesign of a frontend in the
        biotechnology space.
      </td>
      <td>2023</td>
    </tr>
    <tr>
      <td>
        <a href="https://medium.com/design-bootcamp/mixing-up-apple-music-ccd070cc0cd5">
          LINK
        </a>
      </td>
      <td>Mixes - An Apple Music Case Study</td>
      <td>Independent</td>
      <td>
        Secondary design case study into how Apple could better capture user
        intent if they really tried.
      </td>
      <td>2021</td>
    </tr>
    <tr>
      <td>
        <a href="https://www.behance.net/gallery/189157169/Upreach">LINK</a>
      </td>
      <td>Upreach - AI-powered outbound</td>
      <td>Design Consulting @ Cornell</td>
      <td>
        Design consulting work for Upreach.ai, an AI-powered outbound sales
        platform.
      </td>
      <td>2024</td>
    </tr>
    <tr>
      <td>
        <a href="/files/textql.png">LINK</a>
      </td>
      <td>TextQL - Data Platform</td>
      <td>Design Consulting @ Cornell</td>
      <td>
        Project Management and Design Lead for a Neo-backed, LLM-powered data
        platform.
      </td>
      <td>2024</td>
    </tr>
  </tbody>
);
