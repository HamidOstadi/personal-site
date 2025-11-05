"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  blurb: string;
  status: "Design" | "Prototype" | "Live";
  tags: string[];
  image?: string; // e.g. "/projects/x-farsi-analyzer/thumb.jpg"
};

export function ProjectCard({ title, href, blurb, status, tags, image }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:hover:shadow-zinc-900/40"
      aria-label={title}
    >
      {/* Thumbnail (16:9) */}
      <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
        {image ? (
          <Image
            src={image}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : null}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-zinc-900 group-hover:underline dark:text-zinc-100">
            {title}
          </h3>
          <span className="shrink-0 rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            {status}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{blurb}</p>
        <div className="mt-auto flex flex-wrap gap-1">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
