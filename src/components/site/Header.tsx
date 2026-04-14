import Link from "next/link";

type HeaderProps = {
  siteName: string;
  navItems: {
    label: string;
    href: string;
  }[];
};

export function Header({ siteName, navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--paper)]/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--ink)] md:text-xl">
          {siteName}
        </Link>
        <nav className="flex w-full gap-5 overflow-x-auto pb-1 md:w-auto md:gap-6 md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="shrink-0 text-sm font-semibold uppercase tracking-[0.08em] text-black/70 hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
