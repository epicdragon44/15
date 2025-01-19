import Link from "next/link";
import { FC } from "react";

export const Back: FC = () => {
  return (
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
        href="/work"
      >
        WORK TERMINAL
        <div className="w-[1ch] animate-pulse bg-white/80 h-[2ex]" />
      </Link>
    </div>
  );
};
