"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { IS_PREVIEW } from "@/lib/preview";

const IMG = "https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946";

/** Option A (default): the group photo. */
const OPTION_A = {
  src: `${IMG}/b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg`,
  alt: "Five women with even, natural spray tans at a Tanned Co. studio",
  position: "50% 0%",
};

/** Option B (design preview only, ?hero=b): an existing photo with no bodies, the Caringbah shopfront. */
const OPTION_B = {
  src: `${IMG}/6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg`,
  alt: "The Tanned Co. Caringbah shopfront with its neon Here we glow sign",
  position: "62% 22%",
};

/**
 * Hero photo and gradient. Phones: the photo fills the whole hero (faces and
 * shoulders in the top third) with headline and subline over a dark gradient on
 * its lower part. Desktop: the photo fills the top and fades into solid
 * espresso, so the headline and button never sit across bodies.
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
      {/* Phones: full-height photo with the text over its lower part. Desktop: photo in the top of the hero. */}
      <div className="absolute inset-0 md:bottom-auto md:h-[68%]">
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
      {/* Desktop: photo fades into solid espresso, so the text never sits across bodies */}
      <div className="hidden md:block absolute inset-x-0 top-[36%] h-[33%] bg-gradient-to-b from-transparent to-espresso" />
    </>
  );
}
