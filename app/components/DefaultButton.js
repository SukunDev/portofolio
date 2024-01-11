import Link from "next/link";

export default function DefaultButton({ title, href, type = 1, children }) {
  return (
    <div className="relative z-0 group">
      <Link
        className={`relative flex items-center gap-1.5 px-3 py-1.5 font-normal rounded-md ${
          type === 1
            ? "bg-slate-900 dark:bg-white/10 text-white dark:text-gray-200  flex-row"
            : "bg-white dark:bg-white/10 text-slate-700 dark:text-gray-200 flex-row-reverse"
        }`}
        href={href}
      >
        {children}
        {title}
      </Link>
      <div className="absolute inset-0 transition-all duration-300 bg-gray-300 dark:bg-white/5 rounded-md group-hover:-inset-[3px] -z-10"></div>
    </div>
  );
}
