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
  position: "50% 38%",
};

/**
 * Hero photo with the dark band the text sits on. The photo fills the top of
 * the hero (faces and shoulders in the top third) and fades into solid
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
      {/* Photo fills the top of the hero (faces and shoulders in the top third) */}
      <div className="absolute inset-x-0 top-0 h-[56%] md:h-[68%]">
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
      {/* ...and fades into solid espresso, so the text in the bottom third never sits across bodies */}
      <div className="absolute inset-x-0 top-[28%] h-[29%] md:top-[36%] md:h-[33%] bg-gradient-to-b from-transparent to-espresso" />
    </>
  );
}
