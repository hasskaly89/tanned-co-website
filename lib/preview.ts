// Vercel preview deployments (shared with partners for design review) must not
// create real leads: forms are switched off in the browser and refused on the
// server. Production and local development are unaffected.
export const IS_PREVIEW = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

/** Server-side check for API routes (VERCEL_ENV is set on every Vercel deployment). */
export const isPreviewRequest = () => process.env.VERCEL_ENV === "preview";

export const PREVIEW_FORM_MESSAGE =
  "Forms are switched off on this design preview. On the live site this sends your details to our team.";
