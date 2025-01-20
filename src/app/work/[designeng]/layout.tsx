import Link from "next/link";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ designeng: string }>;
  children: React.ReactNode;
}) {
  const state = (await params).designeng as "design" | "engineering";
  return (
    <>
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
        {children}
      </table>
      <div className="w-full h-fit flex flex-row px-1 justify-between">
        <span className="text-white/30">
          All systems operational. Last health check: 1.19.25
        </span>
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
    </>
  );
}
