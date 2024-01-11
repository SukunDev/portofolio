import React from "react";
import DefaultButton from "./DefaultButton";
import { PiPlusCircle } from "react-icons/pi";

export default function HireMe() {
  return (
    <div className="my-16 text-center">
      <h2 className="text-3xl font-medium sm:text-4xl text-slate-900 dark:text-gray-100">
        Let&apos;s work together.
      </h2>
      <p className="text-base sm:text-lg text-slate-500 dark:text-white/60">
        Creating user experience and visual appealing design
      </p>
      <div className="flex items-center gap-4 mt-4 justify-center">
        <DefaultButton title={"Hire Me"} href={"/contact"}>
          <PiPlusCircle />
        </DefaultButton>
      </div>
    </div>
  );
}
