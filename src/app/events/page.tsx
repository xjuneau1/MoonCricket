import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoonCricket Events",
  description: "Downtown and local events around The MoonCricket Grille",
};

export default function EventsPage() {
  return (
    <main className="relative w-full overflow-hidden py-10">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <section className="rounded-3xl border border-[var(--brand)]/18 bg-[var(--surface)] p-8 shadow-[0_12px_34px_rgba(43,67,102,0.17)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">Events</p>
          <h1 className="mt-2 text-4xl font-semibold text-[var(--ink)] md:text-5xl">Downtown Rhythm</h1>
          <p className="mt-4 max-w-3xl text-base text-[var(--text-muted)]">
            Plan your stop around Winter Garden&apos;s weekly staples and make MoonCricket your pre-show, post-market, or
            Friday-night gathering point.
          </p>
          <div className="mt-6 space-y-3 text-[var(--ink)]/90">
            <p>Winter Garden Farmers Market: Saturdays 9:00 AM - 2:00 PM</p>
            <p>Friday&apos;s on the Plaza (Downtown Winter Garden): 7:00 PM - 9:00 PM</p>
          </div>
          <a
            href="https://www.mooncricketgrille.com/mooncricket-grille-events"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white"
          >
            See Full Events Details
          </a>
        </section>
      </div>
    </main>
  );
}
