"use client";

export function Tag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
      {children}
    </span>
  );
}
