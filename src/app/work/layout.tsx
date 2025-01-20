import Link from "next/link";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  await new Promise((f) => setTimeout(f, Math.random() * 400 + 600));
  return (
    <div
      id="primary-content"
      className="font-mono text-xs tracking-tight relative px-4 md:px-12 py-4 md:py-12 flex flex-col h-full md:h-4/5 w-full"
    >
      <div className="h-fit border-b border-white/15 px-2 pb-10 flex flex-row gap-2 items-center">
        <Link
          className="text-white/30 hover:text-white transition-colors duration-150 ease-out"
          href="/"
        >
          W3I.SPACE
        </Link>{" "}
        /{" "}
        <Link
          className="hover:bg-white/30 transition-colors duration-150 ease-out flex flex-row items-center gap-1"
          href="/work/engineering"
        >
          WORK TERMINAL
          <div className="w-[1ch] animate-pulse bg-white/80 h-[2ex]" />
        </Link>
      </div>
      {children}
    </div>
  );
}
