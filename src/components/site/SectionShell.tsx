import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-16 md:px-10 ${className ?? ""}`}>
      {children}
    </section>
  );
}
