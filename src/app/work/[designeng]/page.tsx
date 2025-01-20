import { promises as fs } from "fs";
import Client from "./client";
import { DATA } from "./data";

export default async function Page({
  params,
}: {
  params: Promise<{ designeng: string }>;
}) {
  const state = (await params).designeng as any;
  const relevantExperiences = DATA.experiences.filter(
    (exp) => exp.category === state,
  );
  return <Client experiences={relevantExperiences} state={state} />;
}
