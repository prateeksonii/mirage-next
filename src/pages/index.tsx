import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    return router.push("/app");
  }

  return (
    <>
      <Head>
        <title>Mirage</title>
      </Head>

      <main
        className="flex h-screen cursor-pointer flex-col items-center justify-center gap-8 active:animate-ping active:bg-purple-700 active:text-white"
        onClick={() => signIn()}
      >
        <h1 className="text-6xl font-black">
          Share your experience with the world
        </h1>
        <p className="text-2xl">Click anywhere to get started</p>
      </main>
    </>
  );
}
