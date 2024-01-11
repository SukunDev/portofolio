import React from "react";
import Headings from "./components/headings";
import DefaultButton from "./components/DefaultButton";

export default function NotFound() {
  return (
    <>
      <Headings title={"Oops! 404"} />
      <div className="absolute inset-x-0 -top-[12rem] m-auto bottom-0 w-fit h-fit">
        <div className="flex flex-col text-center">
          <h2 className="text-3xl font-normal text-slate-900 dark:text-gray-200">
            Page not found.
          </h2>
          <p className="mt-2 text-gray-500 dark:text-white/50">
            The page is does not exist.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <DefaultButton title={"Back to Home"} href={"/"}></DefaultButton>
          </div>
        </div>
      </div>
    </>
  );
}
