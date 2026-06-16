"use client";

import { useState, useRef, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [gdprConsent, setGdprConsent] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const canSubmit =
    !!recaptchaToken &&
    gdprConsent &&
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken, gdprConsent }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
      setGdprConsent(false);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-deepgreen/10 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-deepgreen" />
        <h3 className="font-heading text-xl font-bold text-deepgreen">
          Thank you for getting in touch!
        </h3>
        <p className="text-sm text-muted-foreground">
          Your message has been received. A member of the BJAI team will get
          back to you soon.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="mt-2"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={update("name")}
            required
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Contact Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+353 ..."
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={form.address}
            onChange={update("address")}
            placeholder="Your address"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          value={form.subject}
          onChange={update("subject")}
          required
          placeholder="What is this about?"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          required
          rows={5}
          placeholder="Write your message here..."
        />
      </div>

      <div className="space-y-3 rounded-xl bg-muted/50 p-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
          onChange={(token) => setRecaptchaToken(token)}
          onExpired={() => setRecaptchaToken(null)}
        />
        <div className="flex items-start gap-2.5">
          <Checkbox
            id="gdprConsent"
            checked={gdprConsent}
            onCheckedChange={(checked) => setGdprConsent(checked === true)}
            className="mt-0.5"
          />
          <Label htmlFor="gdprConsent" className="text-sm font-normal text-foreground">
            I consent to BJAI collecting and processing my personal data for
            the purpose of responding to my enquiry. I understand that my
            details will not be shared with third parties without my consent.
          </Label>
        </div>
      </div>

      {status === "error" && error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={!canSubmit || status === "loading"}
        className="w-full bg-saffron text-white hover:bg-saffron/90 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
