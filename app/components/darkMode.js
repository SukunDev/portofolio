"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { PiMoonStars, PiMoonStarsDuotone, PiSun } from "react-icons/pi";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="block px-1.5 py-1.5 hover:bg-gray-200  hover:dark:bg-white/5 rounded-full transition duration-500"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setTheme(theme === "dark" ? "ligth" : "dark")}
    >
      {theme === "dark" ? (
        <PiSun className="text-2xl" />
      ) : isHover ? (
        <PiMoonStarsDuotone className="text-2xl" />
      ) : (
        <PiMoonStars className="text-2xl" />
      )}
    </button>
  );
}
