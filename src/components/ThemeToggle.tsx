"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // "system" = not chosen yet, follow user's OS preference
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount, read preferred theme:
  useEffect(() => {
    // 1. Check if we've saved a preference before
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        setTheme(stored);
        document.documentElement.classList.toggle("dark", stored === "dark");
        return;
    }

    // 2. Otherwise check OS preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // When theme changes (via click), apply it to <html> and store it
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 bg-white/80 dark:bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:shadow-sm transition-shadow"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? (
        <>
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </>
      )}
    </button>
  );
}
