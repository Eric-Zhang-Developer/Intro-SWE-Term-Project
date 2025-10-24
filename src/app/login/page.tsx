"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error; 
      }
      router.push("/dashboard");
    } catch (e: any) {
      setErr(e?.message ?? "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-dvh flex items-center justify-center p-6 bg-gray-900">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Tabs */}
          <div className="join w-full mb-4">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`join-item btn w-1/2 ${mode === "login" ? "btn-primary" : "btn-ghost"}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`join-item btn w-1/2 ${mode === "signup" ? "btn-primary" : "btn-ghost"}`}
            >
              Sign up
            </button>
        </div>

          {/* Optional info for signup */}
          {mode === "signup" && (
            <div role="alert" className="alert alert-soft mb-2">
              <span>
                Create an account with email & password.
              </span>
            </div>
          )}

          {/* Error alert */}
          {err && (
            <div role="alert" className="alert alert-error mb-2">
              <span>{err}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input input-bordered w-full"
                autoComplete="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input input-bordered w-full"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
              />
            </div>

            <div className="card-actions mt-4">
              <button
                type="submit"
                disabled={busy}
                className={`btn btn-primary w-full ${busy ? "loading" : ""}`}
              >
                {mode === "login" ? "Log in" : "Create account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
