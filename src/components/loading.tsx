import { FC } from "react";
import Image from "next/image";

export const Loading: FC = () => {
  return (
    <div
      id="primary-content"
      className="font-mono text-white/70 h-screen w-screen flex flex-col items-center justify-center gap-12"
    >
      Loading Work Terminal...
      <Image
        className="animate-pulse"
        src="/assets/ascii-art.png"
        alt="loading"
        width={500}
        height={500}
      />
    </div>
  );
};
