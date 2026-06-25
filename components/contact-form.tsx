"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/xeozjywz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(
          body?.error ||
            "Something went wrong. Please email hello@appnary.com instead.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Network error. Please email hello@appnary.com instead.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-aqua/30 bg-aqua/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-aqua" />
        <p className="mt-3 text-base font-semibold text-foreground">
          Message sent
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Thanks, we&apos;ll get back to you within two business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-aqua hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-input-border bg-surface px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-aqua focus:ring-2 focus:ring-aqua/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-input-border bg-surface px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-aqua focus:ring-2 focus:ring-aqua/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-sm font-medium text-foreground"
        >
          What&apos;s this about?
        </label>
        <select
          id="contact-topic"
          name="topic"
          className="mt-1.5 w-full rounded-lg border border-input-border bg-surface px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-aqua focus:ring-2 focus:ring-aqua/20"
          defaultValue="support"
        >
          <option value="support">App support</option>
          <option value="sales">Pre-sales question</option>
          <option value="partnership">Partnership or business inquiry</option>
          <option value="press">Press</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-input-border bg-surface px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-aqua focus:ring-2 focus:ring-aqua/20"
          placeholder="Tell us what you need..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-aqua px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>

      {status === "error" && (
        <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {errorMsg}
        </p>
      )}

      <p className="text-xs text-muted-foreground-faint">
        We&apos;ll never share your details. By submitting you agree to our{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

export function ContactMailto() {
  return (
    <a
      href="mailto:hello@appnary.com"
      className="inline-flex items-center gap-2 text-sm font-medium text-aqua hover:underline"
    >
      <Mail className="h-4 w-4" /> hello@appnary.com
    </a>
  );
}