import React from "react";

export default function Headings({ title, children }) {
  return (
    <div className="flex items-center justify-between m-2 sm:m-4">
      <div className="flex items-center gap-2">
        <div className="p-[3px] rounded-full bg-slate-500 dark:bg-white/20"></div>
        <h2 className="font-medium capitalize text-slate-700 dark:text-white/40">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
