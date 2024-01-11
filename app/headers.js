"use client";

import {
  PiHouseSimple,
  PiPhone,
  PiPlusCircle,
  PiStack,
  PiUserCircle,
} from "react-icons/pi";
import NavLink from "./components/navLink";
import { useState } from "react";
import DarkMode from "./components/darkMode";
import DefaultButton from "./components/DefaultButton";

export default function Headers() {
  const [onMouseHover, setOnMouseHover] = useState(null);

  return (
    <header className="sticky inset-x-0 top-4 z-50">
      <nav className="flex items-center justify-between px-2 py-2 bg-white border dark:bg-[#1e1e1e] rounded-xl dark:border-white/10">
        <ul className="flex items-center">
          <li
            onMouseEnter={() => setOnMouseHover("Home")}
            onMouseLeave={() => setOnMouseHover(null)}
          >
            <NavLink mouseHover={onMouseHover} href={"/"} title="Home">
              <PiHouseSimple className="text-2xl" />
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setOnMouseHover("About")}
            onMouseLeave={() => setOnMouseHover(null)}
          >
            <NavLink mouseHover={onMouseHover} href={"/about"} title="About">
              <PiUserCircle className="text-2xl" />
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setOnMouseHover("Contact")}
            onMouseLeave={() => setOnMouseHover(null)}
          >
            <NavLink
              mouseHover={onMouseHover}
              href={"/contact"}
              title="Contact"
            >
              <PiPhone className="text-2xl" />
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setOnMouseHover("Project")}
            onMouseLeave={() => setOnMouseHover(null)}
          >
            <NavLink
              mouseHover={onMouseHover}
              href={"/projects"}
              title="Project"
            >
              <PiStack className="text-2xl" />
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-4 mr-2">
          <li>
            <DarkMode />
          </li>
          <li className="hidden xs:block">
            <DefaultButton title={"Hire Me"} href={"/contact"}>
              <PiPlusCircle />
            </DefaultButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
