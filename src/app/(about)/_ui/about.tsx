import { FC } from "react";

export const TextContent: FC = () => {
  return (
    <div id="primary-content" className="p-4 md:p-12 pb-24 h-full w-full">
      <p className="block md:hidden helvetica text-justify pr-4 pb-8">
        <IntroBlock />
        <br />
        <br />
        <WorkBlock />
        <br />
        <br />
        <PlaceBlock />
        <br />
        <br />
        <PresenceBlock />
      </p>
      <div className="hidden md:flex flex-row gap-4 md:gap-12">
        <p className="flex-1 helvetica text-justify h-full max-w-96">
          <IntroBlock />
          <br />
          <br />
          <PlaceBlock />
        </p>
        <p className="flex-1 helvetica text-justify h-full max-w-96">
          <WorkBlock />
          <br />
          <br />
          <PresenceBlock />
        </p>
      </div>
    </div>
  );
};

const IntroBlock = () => (
  <>
    Daniel Wei designs & builds digital infrastructure for humans ⦿ He believes
    that honesty comes unadorned ⦾ that form is a function of function ⦾ that
    elegance is hierarchical and recursive ⦾ and that our tools must be legible
    top-down.
  </>
);

const PlaceBlock = () => (
  <>
    He is inspired by a childhood steeped in architecture and civil engineering
    in Houston ⦾ and Shanghai ⦿ and is currently based out of a small studio in
    Roosevelt Island, New York City.
  </>
);

const WorkBlock = () => (
  <>
    He is currently an Engineer at{" "}
    <a href="https://elevenlabs.io/" className="hover:text-zinc-600">
      Elevenlabs
    </a>{" "}
    ⦾ was previously Founding Engineer at{" "}
    <a href="https://shmood.io/" className="hover:text-red-600">
      Shmood
    </a>{" "}
    <a href="https://www.joinef.com/" className="hover:text-purple-600">
      (EF W23)
    </a>{" "}
    ⦾ and has also worked at{" "}
    <a
      href="https://workspace.google.com/products/docs/"
      className="hover:text-blue-600"
    >
      Google
    </a>{" "}
    ⦾ and{" "}
    <a href="https://instapathbio.com/" className="hover:text-sky-600">
      Instapath
    </a>{" "}
    <a href="https://www.ycombinator.com/" className="hover:text-orange-600">
      (YC W19)
    </a>{" "}
    ⦿ He obtained his Bachelor’s of Arts at Cornell University in Computer
    Science, minoring in ⦾ East Asian Studies ⦾ and previously led teams on
    Cornell{" "}
    <a href="https://www.cornelldti.org/" className="hover:text-rose-600">
      DTI
    </a>{" "}
    and{" "}
    <a
      href="https://www.designconsultingcornell.com/"
      className="hover:text-teal-600"
    >
      DCC
    </a>
    .
  </>
);

const PresenceBlock = () => (
  <>
    You can find his{" "}
    <a href="https://x.com/fromdanielwei15" className="hover:text-zinc-600">
      X
    </a>{" "}
    ⦾{" "}
    <a href="https://github.com/epicdragon44" className="hover:text-stone-600">
      Github
    </a>{" "}
    ⦾{" "}
    <a href="https://github.com/epicdragon44" className="hover:text-indigo-600">
      LinkedIn
    </a>{" "}
    ⦾{" "}
    <a href="https://www.are.na/daniel-wei/" className="hover:text-slate-600">
      Are.na
    </a>{" "}
    ⦾{" "}
    <a
      href="https://www.playbook.com/s/danielwei15/canon-eos-m50-mark-ii-23-25"
      className="hover:text-neutral-600"
    >
      Photos
    </a>{" "}
    ⦾{" "}
    <a href="https://dub.sh/w3i-resume" className="hover:text-neutral-600">
      Resume
    </a>
    .
  </>
);
