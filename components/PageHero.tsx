import Image from "next/image";

/** Shared hero for inner pages: photo, left-weighted overlay, eyebrow, serif title, intro and optional CTAs. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "50% 30%",
  tall = false,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  tall?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`relative flex items-end bg-espresso pt-[68px] ${
        tall ? "min-h-[600px] h-[88vh] max-h-[820px]" : "min-h-[460px] h-[62vh] max-h-[620px]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a120c]/85 via-[#1a120c]/35 to-[#1a120c]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a120c]/60 via-[#1a120c]/15 to-transparent" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-12 md:pb-20">
        <p className="eyebrow-light mb-4">{eyebrow}</p>
        <h1 className="display-xl text-white max-w-3xl">{title}</h1>
        {intro && (
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl mt-5">{intro}</p>
        )}
        {children && <div className="flex flex-wrap items-center gap-3 mt-8">{children}</div>}
      </div>
    </section>
  );
}
