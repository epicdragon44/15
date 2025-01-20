"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Client({
  experiences,
  state,
}: {
  state: "design" | "engineering";
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
}) {
  const relevantExperiences = experiences.filter(
    (exp) => exp.category === state,
  );
  const [currentExperience, setCurrentExperience] = useState<number>(0);
  const currentImage = relevantExperiences[currentExperience].image;

  return (
    <>
      <table className="table-auto !align-top border-separate border-b-2 border-r-2 border-white pb-2 pr-2">
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
        <tbody>
          {relevantExperiences.map((exp, i) => (
            <tr key={exp.name} onMouseOver={() => setCurrentExperience(i)}>
              <td>
                <a href={exp.link}>{exp.link ? "LINK" : "N/A"}</a>
              </td>
              <td>{exp.name}</td>
              <td>{exp.organization}</td>
              <td>{exp.description}</td>
              <td>{exp.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-fit flex flex-row px-1 justify-between">
        <span className="text-white/30"></span>
        <div className="w-fit h-full flex flex-row gap-1 justify-end">
          <Link
            href="/work/design"
            className={
              state === "design"
                ? "bg-white text-black"
                : "bg-white/30 text-white"
            }
          >
            DESIGN
          </Link>
          <Link
            href="/work/engineering"
            className={
              state === "engineering"
                ? "bg-white text-black"
                : "bg-white/30 text-white"
            }
          >
            ENGINEERING
          </Link>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col-reverse lg:flex-row gap-4">
        {currentImage && (
          <div className="w-fit h-fit flex flex-col">
            <div className="border-r-2 border-b-2 border-white w-fit h-fit pr-2 pb-2">
              <Image
                className="border-t border-l border-white/20"
                src={currentImage}
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div className="w-[400px] h-fit flex flex-row gap-1 justify-between">
              <span />
              <div className="w-fit h-full flex flex-row gap-1 justify-end">
                <span className="bg-white/30 text-white px-1">LOGO</span>
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-full flex flex-col gap-2 px-2">
          <div className="flex flex-row gap-2 h-fit w-fit">
            {relevantExperiences[currentExperience].tags?.map((tag) => (
              <span key={tag} className="bg-white/30 text-white">
                {tag}
              </span>
            ))}
          </div>
          <div className="w-full h-full flex flex-row gap-4 flex-wrap">
            {relevantExperiences[currentExperience].brief.map((paragraph) => (
              <p key={paragraph} className="text-white/30 w-48">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
