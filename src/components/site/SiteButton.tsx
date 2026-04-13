import Link from "next/link";

import { ButtonLink } from "@/types/site";

type SiteButtonProps = {
  action: ButtonLink;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5";

const variantClassName: Record<NonNullable<ButtonLink["variant"]>, string> = {
  primary: "bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)]",
  secondary:
    "bg-transparent text-[var(--ink)] ring-1 ring-black/20 hover:bg-black/5",
  ghost: "bg-white/70 text-[var(--ink)] hover:bg-white",
};

export function SiteButton({ action }: SiteButtonProps) {
  const variant = action.variant ?? "primary";

  return (
    <Link href={action.href} className={`${baseClassName} ${variantClassName[variant]}`}>
      {action.label}
    </Link>
  );
}
