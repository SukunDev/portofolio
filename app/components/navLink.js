"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ title, href, mouseHover, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={
        (pathname === href
          ? mouseHover
            ? mouseHover === title
              ? `bg-gray-200 text-gray-900 dark:text-gray-100 dark:bg-white/10`
              : ``
            : `bg-gray-200 text-gray-900 dark:text-gray-100 dark:bg-white/10`
          : ` hover:bg-gray-200 hover:text-gray-900 hover:dark:text-gray-100 hover:dark:bg-white/10`) +
        " block px-1.5 py-1.5 mx-2 text-gray-500 dark:text-gray-300 transition duration-500 rounded-full relative group"
      }
      href={href}
      title={title}
    >
      {children}
      <div className="absolute inset-x-0 mx-auto transition duration-500 -translate-y-10 opacity-0 w-fit group-hover:opacity-100 group-hover:-translate-y-14">
        <span className="text-xs bg-black dark:bg-[#1e1e1e] rounded-lg px-1 py-0.5 text-white">
          {title}
        </span>
      </div>
    </Link>
  );
}
