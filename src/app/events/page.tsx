import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoonCricket Events",
  description: "Downtown and local events around The MoonCricket Grille",
};

export default function EventsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <section className="rounded-3xl border border-black/10 bg-white/80 p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Events</p>
        <h1 className="mt-2 text-4xl font-semibold text-[var(--ink)] md:text-5xl">Downtown Events</h1>
        <div className="mt-6 space-y-3 text-black/80">
          <p>Winter Garden Farmers Market: Saturdays 9:00 AM - 2:00 PM</p>
          <p>Friday&apos;s on the Plaza (Downtown Winter Garden): 7:00 PM - 9:00 PM</p>
        </div>
        <a
          href="https://www.mooncricketgrille.com/mooncricket-grille-events"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white"
        >
          View Source Events Page
        </a>
      </section>
    </main>
  );
}
