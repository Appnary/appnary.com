"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}
      className="mt-4 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-aqua/50"
      />
      <button
        type="submit"
        className="rounded-lg bg-aqua px-6 py-2.5 text-sm font-semibold text-white hover:bg-aqua/90 transition-colors"
      >
        Notify Me
      </button>
    </form>
  );
}
