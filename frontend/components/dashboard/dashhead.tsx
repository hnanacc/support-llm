import { IconArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DashHead() {
  return (
    <div className="flex flex-row justify-space-between pb-4 px-8">
      <span className="text-5xl font-black py-2"> Rotary Indexing Table </span>
      <span className="flex-1 flex flex-row-reverse py-2 ">
        <Button className="text-xl py-6 font-light">
          <Link href="/chat"> Chat with Machine</Link>
          <IconArrowRight className="ml-4"></IconArrowRight>
        </Button>
      </span>
    </div>
  );
}
