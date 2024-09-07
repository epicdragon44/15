import { Link } from "waku";
import { Content } from "../ui/content";
import Balancer from "react-wrap-balancer";

export default async function HomePage() {
  return (
    <div className="max-w-sm text-black/50 flex flex-col">
      <h1 className="text-4xl font-bold flex flex-row">
        <span className="text-black/20 mr-[2px]">W3I</span>
        <span className="text-black/80">DANIEL</span>
        <span className="text-black/20 text-lg -translate-x-2">15</span>
      </h1>
      <p className="mt-1 mb-9 text-nowrap">
        I design and build functional, honest, beautiful
        <br className="block lg:hidden" /> infrastructure for humans.
      </p>
      <Content />
    </div>
  );
}
