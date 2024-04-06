import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center top-[50%]">
      <div>home page</div>
      <Link href={"dashboard"} className="bg-black text-white px-3 py-2 mt-4 rounded-md">go to dashboard</Link>
    </div>
  );
}
