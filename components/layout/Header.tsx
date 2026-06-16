"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, moreNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-saffron/20 bg-cream/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/images/bjai-logo.avif"
              alt="BJAI logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-extrabold tracking-tight text-maroon sm:text-2xl">
              BJAI
            </span>
            <span className="hidden text-[11px] font-medium text-deepgreen sm:block sm:text-xs">
              Bihar Jharkhand Association of Ireland
            </span>
            <span className="text-[11px] italic text-gold sm:text-xs">
              Aapka Apna Parivar
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-saffron/10 hover:text-maroon",
                isActive(item.href) && "bg-saffron/10 text-maroon"
              )}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  className="gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 hover:bg-saffron/10 hover:text-maroon"
                />
              }
            >
              More
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {moreNav.map((item) => (
                <DropdownMenuItem key={item.href} render={<Link href={item.href} />}>
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* CTA + Mobile menu trigger */}
        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/membership" />}
            className="hidden bg-saffron text-white hover:bg-saffron/90 sm:inline-flex"
          >
            Join BJAI
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-maroon">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-saffron/10 hover:text-maroon",
                      isActive(item.href) && "bg-saffron/10 text-maroon"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-border" />
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  More
                </p>
                {moreNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-saffron/10 hover:text-maroon"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
