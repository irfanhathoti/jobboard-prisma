import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";

export const metadata: Metadata = {
  title: "Sign In",
};

// session read is per-request, so it sits behind Suspense instead of blocking the page
async function RedirectIfSignedIn() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  return null;
}

export default function SignInPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <Suspense fallback={null}>
        <RedirectIfSignedIn />
      </Suspense>
      <div className="w-full max-w-sm rounded-lg border border-black/10 p-6 dark:border-white/10">
        <h1 className="text-xl font-semibold tracking-tight">Sign In</h1>
        <p className="mt-1 text-sm text-foreground/60">
          Sign in to post and apply for jobs.
        </p>

        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-85"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Sign in with GitHub
          </button>
        </form>
      </div>
    </main>
  );
}
