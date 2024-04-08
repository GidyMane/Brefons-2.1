import { BackgroundBeams } from "@/components/Aceternity/background-beams";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="mt-10 container w-full">
        <BackgroundBeams className="w-full  bg-gray-700 h-full">
          <div className="flex flex-col gap-3">
            <div className="text-2xl text-white my-4">Coming soon</div>
            <Link href={"dashboard"} className="bg-black text-white px-3 py-2 mt-4 rounded-md">go to dashboard</Link>
          </div>
        </BackgroundBeams>
      </div>
    </div>
  );
}
