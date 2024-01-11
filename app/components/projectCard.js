import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCaretRight } from "react-icons/pi";

export default function ProjectCard({ title, description, href, src }) {
  return (
    <div className="relative z-0 group">
      <Link
        href={href}
        className="flex items-center gap-1 px-2 py-1 bg-white xs:gap-4 xs:px-4 dark:bg-white/5 rounded-xl group"
      >
        <div className="w-16 h-16 xs:h-20 xs:w-20">
          <Image
            className="object-cover"
            src={src}
            width={80}
            height={80}
            alt={title}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-base xs:text-xl xs:font-normal text-slate-700 dark:text-gray-200">
            {title}
          </h3>
          <p className="mt-0 text-xs xs:text-base xs:mt-1 text-slate-500 dark:text-white/50">
            {description}
          </p>
        </div>
        <div className="hidden text-lg text-gray-400 transition duration-500 -translate-x-2 xs:block group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-white">
          <PiCaretRight />
        </div>
      </Link>
      <div className="absolute inset-0 transition-all duration-300 bg-gray-200 dark:bg-white/5 group-hover:-inset-1 -z-10 rounded-xl"></div>
    </div>
  );
}
