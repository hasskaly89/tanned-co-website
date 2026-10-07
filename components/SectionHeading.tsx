export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  as?: "h2" | "h3";
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-2xl mb-12 md:mb-16`}>
      {eyebrow && <p className={`${dark ? "eyebrow-light" : "eyebrow"} mb-4`}>{eyebrow}</p>}
      <Tag className={`display-lg ${dark ? "text-white" : "text-ink"}`}>{title}</Tag>
      {intro && (
        <p className={`text-lg leading-relaxed mt-5 ${dark ? "text-on-dark" : "text-body"}`}>{intro}</p>
      )}
    </div>
  );
}
