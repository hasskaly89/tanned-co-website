import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Got questions about spray tanning? Find answers about how automated booths work, how long to leave your tan on, what to wear, safety, aftercare and more.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
