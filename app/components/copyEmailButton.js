"use client";

import { useEffect, useState } from "react";
import { PiCopySimple } from "react-icons/pi";

export default function CopyEmailButton() {
  const [onCopy, setOnCopy] = useState(false);

  const handleClick = async () => {
    setOnCopy(true);
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_APP_EMAIL);
    setTimeout(() => {
      setOnCopy(false);
    }, 1000);
  };

  return (
    <div className="relative z-0 group">
      <button
        onClick={handleClick}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 font-normal rounded-md bg-white ring-[2px] ring-gray-100 dark:ring-white/10 dark:bg-white/10 text-slate-700 dark:text-gray-200`}
      >
        <PiCopySimple />
        {onCopy ? "Copied" : "Copy Email"}
      </button>
      <div className="absolute inset-0 transition-all duration-300 bg-gray-300 dark:bg-white/5 rounded-md group-hover:-inset-[3px] -z-10"></div>
    </div>
  );
}
