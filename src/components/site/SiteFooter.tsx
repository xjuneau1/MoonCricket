import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white/55">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
        <div>
          <div className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
            <Image
              src="/assets/mooncricket/logo.png"
              alt="The MoonCricket Grille"
              width={180}
              height={56}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-black/70">14 W Plant Street, Winter Garden, FL</p>
          <p className="text-sm text-black/70">407-905-5325</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-black/75">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-black/70">
            <li>Sun: 11:30 AM - 4:00 PM</li>
            <li>Mon: Closed</li>
            <li>Tue-Wed: 11:30 AM - 8:00 PM</li>
            <li>Thu-Sat: 11:30 AM - 9:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-black/75">Explore</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/menu" className="rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white">
              Menu
            </Link>
            <Link href="/beer" className="rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white">
              Beer
            </Link>
            <Link href="/faqs" className="rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white">
              FAQs
            </Link>
            <Link href="/events" className="rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white">
              Events
            </Link>
            <Link href="/contact" className="rounded-full bg-[var(--brand)] px-3 py-1.5 text-xs font-semibold text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
