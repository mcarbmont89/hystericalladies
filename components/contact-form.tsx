"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormStrings = {
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  sentNote: string;
  subjectPrefix: string;
  fromLabel: string;
};

export default function ContactForm({ form, email }: { form: FormStrings; email: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const name = String(data.get("name") || "");
    const senderEmail = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // Default behaviour: open the user's mail client.
    // Replace this with a POST to /api/contact (Resend, Formspree, etc.) when ready.
    setStatus("sending");
    const subject = encodeURIComponent(`${form.subjectPrefix} ${name}`);
    const body = encodeURIComponent(`${form.fromLabel} ${name} <${senderEmail}>\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    formEl.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-xs uppercase tracking-catalog text-ink-soft">
          {form.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="border-b border-ink/30 bg-transparent py-2.5 text-base text-ink outline-none placeholder:text-ink-soft/40 focus:border-carmine"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-xs uppercase tracking-catalog text-ink-soft">
          {form.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="border-b border-ink/30 bg-transparent py-2.5 text-base text-ink outline-none placeholder:text-ink-soft/40 focus:border-carmine"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-catalog text-ink-soft">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-y border-b border-ink/30 bg-transparent py-2.5 text-base text-ink outline-none placeholder:text-ink-soft/40 focus:border-carmine"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? form.sending : form.send}
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {status === "sent" && <p className="text-sm text-ink-soft">{form.sentNote}</p>}
    </form>
  );
}
