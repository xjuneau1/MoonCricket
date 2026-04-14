import Link from "next/link";

import { ButtonLink } from "@/types/site";

type SiteButtonProps = {
  action: ButtonLink;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";

const variantClassName: Record<NonNullable<ButtonLink["variant"]>, string> = {
  primary:
    "bg-[var(--brand)] text-white shadow-[0_8px_22px_rgba(179,109,95,0.38)] hover:bg-[var(--brand-strong)] hover:shadow-[0_10px_24px_rgba(145,82,69,0.42)]",
  secondary:
    "bg-white/75 text-[var(--ink)] ring-1 ring-[var(--ink)]/22 hover:bg-white",
  ghost: "bg-[var(--sand)]/22 text-[var(--ink)] ring-1 ring-[var(--sand)]/45 hover:bg-[var(--sand)]/35",
};

export function SiteButton({ action }: SiteButtonProps) {
  const variant = action.variant ?? "primary";

  return (
    <Link href={action.href} className={`${baseClassName} ${variantClassName[variant]}`}>
      {action.label}
    </Link>
  );
}
