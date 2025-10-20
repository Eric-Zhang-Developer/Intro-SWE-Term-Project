import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function LandingPage() {
  return (
    <main className="min-h-dvh bg-white flex flex-col items-center justify-center pt-2 pb-8 px-8">
      <div className="max-w-xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-[500px] h-[100px] overflow-hidden rounded-lg">
            <Image
              src="/Cq_logo.png"
              alt="CodeQuest Logo"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-600">Welcome to CodeQuest</h1>
        <p className="mt-3 text-neutral-600">
          Simple flow: Landing → Login/Signup → Dashboard
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">

          <Link
            href="/dashboard"
            className="btn btn-sof"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
