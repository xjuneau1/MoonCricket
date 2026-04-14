import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--brand)]/18 bg-[var(--surface-strong)]/92">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
        <div>
          <div className="inline-flex items-center justify-center rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface)] px-4 py-3 shadow-[0_8px_20px_rgba(43,67,102,0.16)]">
            <Image
              src="/assets/mooncricket/MClogo_upscale_nobg.png"
              alt="The MoonCricket Grille"
              width={180}
              height={56}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--text-muted)]">14 W Plant Street, Winter Garden, FL</p>
          <p className="text-sm text-[var(--text-muted)]">407-905-5325</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
            <li>Sun: 11:30 AM - 4:00 PM</li>
            <li>Mon: Closed</li>
            <li>Tue-Wed: 11:30 AM - 8:00 PM</li>
            <li>Thu-Sat: 11:30 AM - 9:00 PM</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">Explore</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/menu" className="inline-flex min-h-10 items-center rounded-full bg-[var(--brand-strong)] px-4 py-2 text-sm font-semibold text-white">
              Menu
            </Link>
            <Link href="/beer" className="inline-flex min-h-10 items-center rounded-full bg-[var(--brand-strong)] px-4 py-2 text-sm font-semibold text-white">
              Beer
            </Link>
            <Link href="/faqs" className="inline-flex min-h-10 items-center rounded-full bg-[var(--brand-strong)] px-4 py-2 text-sm font-semibold text-white">
              FAQs
            </Link>
            <Link href="/events" className="inline-flex min-h-10 items-center rounded-full bg-[var(--brand-strong)] px-4 py-2 text-sm font-semibold text-white">
              Events
            </Link>
            <Link href="/contact" className="inline-flex min-h-10 items-center rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
