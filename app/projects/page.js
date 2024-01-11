import React from "react";
import Headings from "../components/headings";
import HireMe from "../components/hireMe";
import Projects from "../components/projects";

export default async function ProjectsPages() {
  return (
    <>
      <Headings title={"Projects"} />
      <div className="m-2 sm:m-4">
        <h2 className="text-3xl font-medium sm:text-4xl text-slate-900 dark:text-gray-100">
          My Works
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-white/60">
          Discover my portfolio, where purposeful interfaces meet captivating
          design. My work strives to enhance experiences and inspire.
        </p>
      </div>
      <div className="px-4 pt-4 pb-8 mt-4 bg-gray-100 dark:bg-white/10 rounded-xl">
        <Projects />
      </div>
      <HireMe />
    </>
  );
}
