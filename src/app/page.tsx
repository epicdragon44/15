import { Cover } from "@/components/cover";
import { Navbar } from "@/components/navbar";
import { TextContent } from "@/components/about";
import { FC } from "react";

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
