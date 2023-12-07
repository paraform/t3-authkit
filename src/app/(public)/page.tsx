import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from trpc without auth" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <p className="mb-8 text-2xl text-white">
        {hello ? hello.greeting : "Loading tRPC query..."}
      </p>
      <Link href="/protected" className="underline">
        Protected Route{" "}
      </Link>
    </main>
  );
}
