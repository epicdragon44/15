import { TextContent } from "@/app/(about)/_ui/about";
import { FC } from "react";
import { Cover } from "./_ui/cover";
import { Navbar } from "./_ui/navbar";

const Page: FC = () => {
  return (
    <>
      <Cover />
      <Navbar />
      <TextContent />
    </>
  );
};

export default Page;
