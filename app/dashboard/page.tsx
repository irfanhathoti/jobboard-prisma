import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const stats = [
  { label: "Jobs posted", value: 0 },
  { label: "Applications", value: 0 },
  { label: "Saved jobs", value: 0 },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-1 text-sm text-foreground/60">
        Overview of your jobs and applications.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-black/10 p-5 dark:border-white/10"
          >
            <p className="text-sm text-foreground/60">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
