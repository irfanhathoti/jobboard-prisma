import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a Job",
};

const inputClass =
  "mt-1 w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground dark:border-white/15";

export default function PostJobPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Post a Job</h1>
      <p className="mt-1 text-sm text-foreground/60">
        Fill in the details below.
      </p>

      {/* not wired up yet — needs a server action or API route to save the job */}
      <form className="mt-8 space-y-5">
        <label className="block text-sm font-medium">
          Job title
          <input name="title" type="text" required className={inputClass} />
        </label>

        <label className="block text-sm font-medium">
          Company
          <input name="company" type="text" required className={inputClass} />
        </label>

        <label className="block text-sm font-medium">
          Location
          <input name="location" type="text" className={inputClass} />
        </label>

        <label className="block text-sm font-medium">
          Description
          <textarea name="description" rows={6} className={inputClass} />
        </label>

        <button
          type="submit"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-85"
        >
          Post Job
        </button>
      </form>
    </main>
  );
}
