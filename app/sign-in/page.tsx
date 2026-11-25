import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const inputClass =
  "mt-1 w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground dark:border-white/15";

export default function SignInPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-lg border border-black/10 p-6 dark:border-white/10">
        <h1 className="text-xl font-semibold tracking-tight">Sign In</h1>
        <p className="mt-1 text-sm text-foreground/60">
          Welcome back.
        </p>

        {/* not wired up yet — connect to your auth provider */}
        <form className="mt-6 space-y-4">
          <label className="block text-sm font-medium">
            Email
            <input name="email" type="email" required className={inputClass} />
          </label>

          <label className="block text-sm font-medium">
            Password
            <input
              name="password"
              type="password"
              required
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-85"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
