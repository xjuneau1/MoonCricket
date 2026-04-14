import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoonCricket Contact",
  description: "Contact details and employment info for The MoonCricket Grille",
};

export default function ContactPage() {
  return (
    <main className="relative w-full overflow-hidden py-10">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <section className="rounded-3xl border border-[var(--brand)]/18 bg-[var(--surface)] p-8 shadow-[0_12px_34px_rgba(43,67,102,0.17)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold text-[var(--ink)] md:text-5xl">Visit and Get in Touch</h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--text-muted)]">
            Located on Plant Street in historic downtown Winter Garden, MoonCricket is easy to find and always worth
            the stop.
          </p>
          <div className="mt-6 space-y-2 text-[var(--ink)]/90">
            <p>14 W Plant Street, Winter Garden, FL</p>
            <p>Phone: 407-905-5325</p>
            <p>Sun: 11:30 AM - 4:00 PM</p>
            <p>Mon: Closed</p>
            <p>Tue-Wed: 11:30 AM - 8:00 PM</p>
            <p>Thu-Sat: 11:30 AM - 9:00 PM</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:4079055325"
              className="inline-flex rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white"
            >
              Call 407-905-5325
            </a>
            <a
              href="/events"
              className="inline-flex rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white"
            >
              Upcoming Events
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
