import "./globals.css";
import { Github, Linkedin, Twitter, Send } from "lucide-react";

export const metadata = {
  title: "Hamid Ostadi — Policy, Data & AI",
  description:
    "Digital economy, labour markets, AI governance, and applied tools for decision-makers. Selected work in policy analysis, research design, automation, and data products.",
  metadataBase: new URL("https://personal-site-ochre-three.vercel.app"),
  openGraph: {
    title: "Hamid Ostadi — Policy, Data & AI",
    description:
      "AI, labour markets, digital economy, and practical tooling for decision-makers.",
    url: "https://personal-site-ochre-three.vercel.app",
    siteName: "Hamid Ostadi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hamid Ostadi — Policy, Data & AI",
    description:
      "AI, labour markets, digital economy, and practical tooling for decision-makers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <body className="min-h-screen antialiased flex flex-col">
        {/* HEADER / NAVBAR */}
        <header className="w-full border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-900/80 backdrop-blur py-4">
          <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-4">
            {/* Left side: name / logo */}
            <a href="/" className="font-semibold text-sm">
              Hamid Ostadi
            </a>

            {/* Right side: links */}
            <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="/">
                Home
              </a>
              <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="/about">
                About
              </a>
              <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="/projects">
                Projects
              </a>
              <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="/blog">
                Blog
              </a>
              <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="/contact">
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-16">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="w-full border-t border-zinc-200/60 dark:border-zinc-800/60 py-8 text-sm text-zinc-500 dark:text-zinc-600">
  <div className="flex flex-col items-center gap-4 px-4 text-center">
    {/* Top row: name and year */}
    <div className="text-xs text-zinc-500 dark:text-zinc-600">
      © 2025 Hamid Ostadi
    </div>

    {/* Social row */}
    <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-600 dark:text-zinc-400">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/hamidostadi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Linkedin className="h-4 w-4" />
        <span className="text-xs font-medium">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/hamidostadi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Github className="h-4 w-4" />
        <span className="text-xs font-medium">GitHub</span>
      </a>

      {/* X / Twitter */}
      <a
        href="https://twitter.com/hamidostadi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Twitter className="h-4 w-4" />
        <span className="text-xs font-medium">X / Twitter</span>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/hamidostadi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Send className="h-4 w-4" />
        <span className="text-xs font-medium">Telegram</span>
      </a>
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
