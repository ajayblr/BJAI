import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { mainNav, moreNav, socialLinks, contactInfo } from "@/data/navigation";
import { FacebookIcon, InstagramIcon, XTwitterIcon, YoutubeIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-deepgreen to-[#0a3322] text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0">
                <Image
                  src="/images/bjai-logo.avif"
                  alt="BJAI logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-extrabold">BJAI</span>
                <span className="text-xs italic text-gold">Aapka Apna Parivar</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-cream/80">
              Bihar Jharkhand Association of Ireland — a family away from home,
              celebrating culture, supporting charity, and connecting our
              community across Ireland.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon href={socialLinks.facebook} label="Facebook">
                <FacebookIcon className="h-4.5 w-4.5" />
              </SocialIcon>
              <SocialIcon href={socialLinks.instagram} label="Instagram">
                <InstagramIcon className="h-4.5 w-4.5" />
              </SocialIcon>
              <SocialIcon href={socialLinks.twitter} label="X / Twitter">
                <XTwitterIcon className="h-4.5 w-4.5" />
              </SocialIcon>
              <SocialIcon href={socialLinks.youtube} label="YouTube">
                <YoutubeIcon className="h-4.5 w-4.5" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {moreNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} BJAI — Bihar Jharkhand Association of
            Ireland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-saffron hover:text-white"
    >
      {children}
    </a>
  );
}
