import { auth } from "@/auth";
import Navbar from "./Navbar";

// reads the session cookie, so it has to render behind <Suspense> with cacheComponents on
export default async function NavbarWithSession() {
  const session = await auth();
  return <Navbar user={session?.user} />;
}
