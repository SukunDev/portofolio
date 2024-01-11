import Link from "next/link";
import React from "react";

export default function SocialButton({ href, children }) {
  return (
    <div className="relative z-0 group">
      <Link
        className="block p-2 xs:p-3 rounded-full bg-white dark:bg-white/10 text-slate-900 dark:text-gray-200"
        href={href}
      >
        {children}
      </Link>
      <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-white/10 group-hover:-inset-1 -z-10 transition-all duration-300"></div>
    </div>
  );
}
