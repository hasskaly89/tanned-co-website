"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { IS_PREVIEW } from "@/lib/preview";


/** Option A (default): the group photo. */
const OPTION_A = {
  src: "/images/hero-group-five-white.jpg",
  alt: "Five women with even spray tans at a Tanned Co. studio",
  position: "50% 0%",
};

/** Option B (design preview only, ?hero=b): an existing photo with no bodies, the Caringbah shopfront. */
const OPTION_B = {
  src: "/images/caringbah-shopfront.jpg",
  alt: "The Tanned Co. Caringbah shopfront with its neon Here we glow sign",
  position: "62% 22%",
};

/**
 * Hero photo and gradient. Phones: the photo fills the whole hero (faces and
 * shoulders in the top third) with headline and subline over a dark gradient on
 * its lower part. Desktop: the photo stays fully visible with a soft dark
 * gradient on the text side only.
 * Production always renders option A; ?hero=b only works on Vercel previews.
 */
const noop = () => () => {};

export default function HeroBackdrop() {
  const optionB = useSyncExternalStore(
    noop,
    () => IS_PREVIEW && new URLSearchParams(window.location.search).get("hero") === "b",
    () => false
  );
  const img = optionB ? OPTION_B : OPTION_A;

  return (
    <>
      {/* Full-height photo on phones and desktop */}
      <div className="absolute inset-0">
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: img.position }}
        />
      </div>
      {/* Phones: gradient from the bottom so headline and subline read on the photo */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-t from-espresso via-espresso/75 via-30% to-transparent to-60%" />
      {/* Desktop: photo fully visible, with a soft dark gradient on the text side only (bottom left,
          45% at most, no solid colour). The text also has a subtle shadow; see the hero in app/page.tsx. */}
      <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_top_right,rgba(26,18,12,0.45)_0%,rgba(26,18,12,0.45)_40%,rgba(26,18,12,0.38)_55%,rgba(26,18,12,0)_80%)]" />
    </>
  );
}
