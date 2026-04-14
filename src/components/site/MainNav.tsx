"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Beer", href: "/beer" },
  { label: "FAQs", href: "/faqs" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand)]/18 bg-[var(--surface-strong)]/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="group inline-flex items-center">
          <Image
            src="/assets/mooncricket/MClogo_upscale_nobg.png"
            alt="The MoonCricket Grille"
            width={220}
            height={70}
            className="h-11 w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)] md:h-12"
            priority
          />
        </Link>

        <nav className="flex items-center gap-2 overflow-x-auto rounded-full border border-[var(--brand)]/20 bg-[var(--accent-soft)]/85 p-1 shadow-[0_8px_20px_rgba(43,67,102,0.18)]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--brand)] text-white shadow-[0_4px_12px_rgba(58,86,128,0.3)]"
                    : "text-[var(--ink)]/78 hover:bg-white/80 hover:text-[var(--brand-strong)]"
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
