import { promises as fs } from "fs";
import Client from "./client";

export default async function Page({
  params,
}: {
  params: Promise<{ designeng: string }>;
}) {
  const state = (await params).designeng as any;
  const file = await fs.readFile(process.cwd() + "/src/app/work.json", "utf8");
  const { experiences } = JSON.parse(file);
  return <Client experiences={experiences} state={state} />;
}
