"use client";

import Image from "next/image";

export function ProjectHero({
  title,
  subtitle,
  imgSrc,
  alt = "",
}: {
  title: string;
  subtitle?: string;
  imgSrc?: string;
  alt?: string;
}) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">{subtitle}</p>
      )}

      {imgSrc && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
          <Image
            src={imgSrc}
            alt={alt}
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </div>
      )}
    </header>
  );
}
