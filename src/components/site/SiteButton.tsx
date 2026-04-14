import Link from "next/link";

import { ButtonLink } from "@/types/site";

type SiteButtonProps = {
  action: ButtonLink;
};

const baseClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";

const variantClassName: Record<NonNullable<ButtonLink["variant"]>, string> = {
  primary:
    "bg-[var(--brand)] text-white shadow-[0_8px_22px_rgba(37,45,82,0.5)] hover:bg-[var(--brand-strong)] hover:shadow-[0_10px_24px_rgba(33,40,72,0.58)]",
  secondary:
    "bg-[var(--surface-soft)] text-[var(--ink)] ring-1 ring-[var(--brand)]/24 hover:bg-[var(--surface)]",
  ghost: "bg-[var(--sand)]/25 text-[var(--ink)] ring-1 ring-[var(--sand)]/50 hover:bg-[var(--sand)]/38",
};

export function SiteButton({ action }: SiteButtonProps) {
  const variant = action.variant ?? "primary";

  return (
    <Link href={action.href} className={`${baseClassName} ${variantClassName[variant]}`}>
      {action.label}
    </Link>
  );
}
