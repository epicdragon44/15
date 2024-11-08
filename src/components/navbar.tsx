import { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className="border-t-2 border-b-2 border-black dark:border-white flex flex-row gap-4 py-2 px-4 md:px-12">
      <Link href="/">TEXT</Link>
      <Link href="/tree">TREE</Link>
    </div>
  );
};
