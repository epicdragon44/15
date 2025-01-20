import { FC } from "react";
import { Logo } from "./logo";

export const Cover: FC = (props) => {
  return (
    <div className="h-fit w-full px-4 md:px-8">
      <Logo />
    </div>
  );
};
