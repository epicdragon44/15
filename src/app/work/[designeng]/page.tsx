export default async function Page({
  params,
}: {
  params: Promise<{ designeng: string }>;
}) {
  const state = (await params).designeng as "design" | "engineering";
  if (state === "design") return DESIGN;
  if (state === "engineering") return ENGINEERING;
  return <></>;
}

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
