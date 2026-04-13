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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--paper)]/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteName}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-black/75 hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
