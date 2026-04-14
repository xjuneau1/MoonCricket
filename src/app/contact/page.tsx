import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoonCricket Contact",
  description: "Contact details and employment info for The MoonCricket Grille",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <section className="rounded-3xl border border-black/10 bg-white/80 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Contact</p>
        <h1 className="mt-2 text-4xl font-semibold text-[var(--ink)] md:text-5xl">Visit and Get in Touch</h1>
        <div className="mt-6 space-y-2 text-black/80">
          <p>14 W Plant Street, Winter Garden, FL</p>
          <p>Phone: 407-905-5325</p>
          <p>Sun: 11:30 AM - 4:00 PM</p>
          <p>Mon: Closed</p>
          <p>Tue-Wed: 11:30 AM - 8:00 PM</p>
          <p>Thu-Sat: 11:30 AM - 9:00 PM</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.mooncricketgrille.com/mooncricket-grille-contact"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white"
          >
            Source Contact Page
          </a>
          <a
            href="https://www.mooncricketgrille.com/_files/ugd/f836bc_15d17b32013942968e663cb354497fb4.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white"
          >
            Employment Application PDF
          </a>
        </div>
      </section>
    </main>
  );
}
