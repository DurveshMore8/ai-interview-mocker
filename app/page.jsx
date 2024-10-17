import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex justify-center items-center gap-6 flex-col">
      <h2 className="font-bold text-3xl">Welcome to AI Interview Bot</h2>
      <Link href={"/dashboard"}>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
