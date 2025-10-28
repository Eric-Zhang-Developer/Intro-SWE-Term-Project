import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackToDashBoardLink() {
  return (
    <Link
      href="/dashboard"
      className="mb-4 inline-block text-indigo-600 hover:text-indigo-800 transition hover:scale-105 group"
    >
      <ArrowLeft className="inline-block w-5 h-5 mr-1" />
      <span className="text-sm font-medium">Back to Dashboard</span>
    </Link>
  );
}
