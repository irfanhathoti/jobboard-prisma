"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Session } from "next-auth";
import { signOutAction } from "@/app/actions/auth";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/jobs/post", label: "Post a Job" },
  { href: "/jobs", label: "Browse Jobs" },
];

export default function Navbar({
  user,
  loading = false,
}: {
  user?: Session["user"];
  loading?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // exact match, so /jobs isn't highlighted while on /jobs/post
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          MyApp
        </Link>

        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive(link.href)
                    ? "font-medium text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {loading ? (
            <li
              aria-hidden="true"
              className="h-9 w-20 animate-pulse rounded-md bg-black/5 dark:bg-white/10"
            />
          ) : user ? (
            <li className="flex items-center gap-3">
              <span className="text-sm text-foreground/70">
                {user.name ?? user.email}
              </span>
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="rounded-md border border-black/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                >
                  Sign Out
                </button>
              </form>
            </li>
          ) : (
            <li>
              <Link
                href="/sign-in"
                className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/10 px-4 py-3 sm:hidden dark:border-white/10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2 text-sm ${
                  isActive(link.href)
                    ? "bg-black/5 font-medium dark:bg-white/10"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            {loading ? null : user ? (
              <form action={signOutAction}>
                <p className="px-2 pb-2 text-sm text-foreground/70">
                  Signed in as {user.name ?? user.email}
                </p>
                <button
                  type="submit"
                  className="block w-full rounded-md border border-black/15 px-2 py-2 text-center text-sm font-medium dark:border-white/15"
                >
                  Sign Out
                </button>
              </form>
            ) : (
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-foreground px-2 py-2 text-center text-sm font-medium text-background"
              >
                Sign In
              </Link>
            )}
          </li>
        </ul>
      )}
    </header>
  );
}
