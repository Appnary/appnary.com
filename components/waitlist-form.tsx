"use client";

import { useState, FormEvent } from "react";

const WAITLIST_API = process.env.NEXT_PUBLIC_WAITLIST_API || "/api/waitlist";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(WAITLIST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={status === "loading"}
          className="flex-1 rounded-lg border border-input-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-input-placeholder focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/30 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-aqua px-6 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-aqua/90 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Join the Waitlist"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-aqua" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <p className="mt-1 text-xs text-muted-foreground-faint">
        No spam.
      </p>
    </form>
  );
}
