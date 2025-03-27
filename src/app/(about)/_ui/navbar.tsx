import { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className="border-t-2 border-b-2 border-white flex flex-row gap-4 py-2 px-4 md:px-[50px]">
      <Link className="translate-y-[2px]" href="/">
        ABOUT
      </Link>
      <Link className="translate-y-[2px]" href="/work/engineering">
        WORK
      </Link>
    </div>
  );
};
