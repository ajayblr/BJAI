import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import ContactForm from "@/components/shared/ContactForm";
import { FacebookIcon, InstagramIcon, XTwitterIcon, YoutubeIcon } from "@/components/shared/SocialIcons";
import { socialLinks, contactInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BJAI — Bihar Jharkhand Association of Ireland. Send us a message, find our contact details, and connect on social media.",
};

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: socialLinks.facebook },
  { icon: InstagramIcon, label: "Instagram", href: socialLinks.instagram },
  { icon: XTwitterIcon, label: "X / Twitter", href: socialLinks.twitter },
  { icon: YoutubeIcon, label: "YouTube", href: socialLinks.youtube },
  { icon: MessageCircle, label: "WhatsApp", href: socialLinks.whatsapp },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question, want to volunteer, or just want to say hello? We'd love to hear from you."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Contact info */}
            <Reveal>
              <div className="space-y-6">
                <div>
                  <SectionHeading
                    eyebrow="Get in Touch"
                    title="We're Here to Help"
                    align="left"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl bg-cream p-5 shadow-sm ring-1 ring-foreground/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm text-royalblue hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-cream p-5 shadow-sm ring-1 ring-foreground/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-festive text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-heading text-sm font-bold text-foreground">
                    Follow Us
                  </p>
                  <div className="mt-3 flex gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon ring-1 ring-foreground/5 transition-colors hover:bg-saffron hover:text-white"
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-foreground/5 sm:p-10">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form below and a member of the BJAI team will
                  get back to you soon.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
