import { useSession } from "next-auth/react";
import Image from "next/image";

export default function AppContent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-bold">Home</h4>
      <p>Hey! {session?.user?.name}</p>
      <div className="flex items-center gap-2">
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
          <Image
            src={session!.user!.image ?? ""}
            alt="User avatar"
            layout="fill"
            className="object-cover"
          />
        </div>
        <input
          type="text"
          className="flex-1 border-b-2 border-gray-100 p-4 outline-none focus:border-b-2 focus:border-purple-700 active:border-b-2 active:border-purple-700"
          placeholder="What's happening?"
        />
      </div>
    </div>
  );
}
