"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // Default behaviour: open the user's mail client.
    // Replace this with a POST to /api/contact (Resend, Formspree, etc.) when ready.
    setStatus("sending");
    const subject = encodeURIComponent(`Contact site — ${name}`);
    const body = encodeURIComponent(`De : ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-xs uppercase tracking-catalog text-ink-soft">
          Votre nom
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
          Votre e-mail
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
          Votre message
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
          {status === "sending" ? "Envoi…" : "Envoyer votre message"}
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-ink-soft">
          Merci ! Votre client mail va s'ouvrir pour finaliser l'envoi.
        </p>
      )}
    </form>
  );
}
