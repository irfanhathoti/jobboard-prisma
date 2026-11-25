import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browse Jobs",
};

export default function JobsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Browse Jobs</h1>
          <p className="mt-1 text-sm text-foreground/60">
            Find your next role.
          </p>
        </div>
        <Link
          href="/jobs/post"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-85"
        >
          Post a Job
        </Link>
      </div>

      <div className="mt-8 rounded-lg border border-dashed border-black/15 p-10 text-center text-sm text-foreground/60 dark:border-white/15">
        No jobs posted yet.
      </div>
    </main>
  );
}
