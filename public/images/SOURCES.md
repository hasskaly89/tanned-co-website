# Photos copied from the old Squarespace CDN on 12 October 2026

Full-resolution originals (JPEG and PNG, not the WebP copies Squarespace serves to browsers). The live site still loads these from Squarespace; switching every reference to these local files is fix 3 in the post-launch list. Base path for every source: `https://images.squarespace-cdn.com/content/v1/65cec61119c06337bea7a946/`

| Local file | Squarespace source (after the base path) | Used in |
|---|---|---|
| hero-group-five-white.jpg | b1474ec4-23ae-4f11-9e38-66d88c73ace9/DSCF3371.jpg | app/layout.tsx (social share image), app/locations/page.tsx, components/HeroBackdrop.tsx, lib/locations.ts, lib/schema.ts |
| caringbah-shopfront.jpg | 6ca1781a-e596-4b4b-ba4b-125cf568e0b8/DSCF2180.jpg | app/contact/ContactClient.tsx, app/contact/layout.tsx, app/franchise/page.tsx, app/locations/page.tsx, components/HeroBackdrop.tsx (preview option B), components/InstagramFeed.tsx, lib/locations.ts |
| two-women-white-swimwear.jpg | 68dfbc5a-7570-4655-8931-499fc2d58a0b/DSCF3334-HIGHRES-2.jpg and 6e0af7d9-de31-4d94-a420-faafd0084f70/DSCF3334-HIGHRES-2.jpg (same photo uploaded twice) | app/book-now/layout.tsx, app/book-now/page.tsx, app/glow-club/layout.tsx, app/glow-club/page.tsx, app/pricing/layout.tsx, app/pricing/page.tsx, lib/locations.ts, components/InstagramFeed.tsx |
| tan-close-up-torso.jpg | c9ff8e92-b68d-4078-8398-61dd12ded903/DSCF3278.jpg | app/about/page.tsx, app/page.tsx, lib/locations.ts |
| tan-close-up-legs.jpg | 2b8046e0-e9f5-424e-9f55-58d06dc9689f/DSCF3275.jpg | app/faq/FAQClient.tsx, app/faq/layout.tsx, components/InstagramFeed.tsx |
| group-five-blue-swimwear.jpg | f7fcbfad-4a79-4e5e-b6e1-0ea0acdc15e1/DSCF3643.jpg | app/how-it-works/page.tsx, lib/locations.ts |
| group-three-black-swimwear.jpg | 3be460b8-ced1-4e5d-b1b7-91af7a52d9a2/DSCF2919-HIGHRES-2.jpg | components/InstagramFeed.tsx |
| studio-door-back-view.jpg | 90818258-d4ad-4495-8609-69069d53a69c/DSCF2505.jpg | app/how-it-works/page.tsx, lib/site.ts |
| studio-door-side-view.jpg | fa36c942-482e-468e-b580-694d88148ed1/DSCF2508.jpg | app/about/page.tsx, app/how-it-works/page.tsx, lib/locations.ts |
| prep-sticky-feet-shelf.jpg | 96d6e447-3940-40dd-9241-c884ba173900/DSCF2437.jpg | app/how-it-works/page.tsx |
| prep-hair-net-dispenser.jpg | 66cba3e8-b0f9-4756-859a-70bf1be4aa45/DSCF2443.jpg | app/how-it-works/page.tsx |
| prep-opening-pack.jpg | f38ee636-add7-48ad-a970-c4e1438e0971/DSCF2447.jpg | app/how-it-works/page.tsx |
| app-steps-sign-up.png | 6933d56e-70e2-44c5-8fbe-dde2aac05421/1.png | app/how-it-works/page.tsx |
| app-steps-book-session.png | c3e14383-d601-4ac6-b8b2-02393874f08a/2.png | app/how-it-works/page.tsx |
| app-steps-check-in.png | 6d1c8f20-ab3e-4eae-adf5-62c594a286df/3.png | app/how-it-works/page.tsx |

Note on the three `app-steps-*.png` graphics: they are old Squarespace artwork with the old serif font and baked-in text, including "ensure a flawless and safe experience" and "Select 'Join Club'". That wording was removed from the site copy in the audit, but it is still visible inside these images on How it works. The owner should decide whether to re-make them.

## public/images/app/ (added 13 October 2026)

Phone screens cropped out of the three old `app-steps-*.png` graphics (2024 screenshots of the Tanned Co. app in a phone frame, white background). Interim images for the rebuilt "Book online, unlock with the app" cards on How it works; the owner will supply fresh screenshots later, so keep the same file names when replacing them.

| File | Shows | Cropped from |
|---|---|---|
| app-login.png | Login screen (email, password, Join Club) | app-steps-sign-up.png |
| app-home-book.png | Home screen with My Upcoming Bookings and the Book a Tanning Session button | app-steps-check-in.png (left phone) |
| app-check-in.png | Check In screen, "Scanning for door reader" | app-steps-check-in.png (right phone) |

The old `app-steps-book-session.png` is not reused anywhere: its screenshot lists sessions at $29.95, which is an old price.
