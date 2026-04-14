"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Beer", href: "/beer" },
  { label: "FAQs", href: "/faqs" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--paper)]/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="group inline-flex items-center">
          <Image
            src="/assets/mooncricket/logo.png"
            alt="The MoonCricket Grille"
            width={220}
            height={70}
            className="h-11 w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)] md:h-12"
            priority
          />
        </Link>

        <nav className="flex items-center gap-2 overflow-x-auto rounded-full border border-[var(--brand)]/30 bg-[var(--accent-soft)]/65 p-1 shadow-[0_6px_22px_rgba(58,50,49,0.12)]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--ink)] text-white shadow-[0_4px_14px_rgba(58,50,49,0.25)]"
                    : "text-black/70 hover:bg-white/90 hover:text-[var(--brand)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
