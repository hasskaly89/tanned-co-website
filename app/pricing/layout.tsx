import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing at Tanned Co. Casual sessions from $35. Save more with 5-pack ($160) or 10-pack ($300) options. No hidden fees, no awkward upsells.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
