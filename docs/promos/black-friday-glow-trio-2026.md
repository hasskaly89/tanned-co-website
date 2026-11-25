# Black Friday Glow Trio 2026: how it was built (runbook for future promos)

Offer: 3 tans for $79 (valued at $117), valid 6 months. Live 25 Nov 2026 to Mon 30 Nov 2026 23:59 Sydney.
Commit: `22ee912` on `main` (branch `promo/bf-glow-trio-2026`).

Use this as the template for the next timed offer (pop-up + banner + SMS reminders + purchase tracking).

---

## 1. Website (Next.js, this repo)

| File | What it does |
|---|---|
| `lib/promos/black-friday-glow-trio.ts` | **Single config**: `enabled`, `promoEnd`, buy URL, storage keys, GA helper, head script. Change dates/links here only. |
| `components/AnnouncementBar.tsx` | Renders both strips (franchise + promo). CSS on `<html>` (`promo-on` / `announce-off`) picks one. Promo strip: "Buy now" + countdown. |
| `components/PromoModal.tsx` | The pop-up (dark "option B" design). First name + mobile, posts to `/api/claim` with `offer: "bf_glowtrio"`, then redirects to checkout. Opens once after 3.5s or first scroll, never on `/franchise*`, `/privacy-policy`, `/terms`, never over another dialog. |
| `components/ExitIntent.tsx` | 10% pop-up: `autoBlocked()` stops it auto-opening while the promo shows (its buttons still work). |
| `app/api/claim/route.ts` | `offer` field routes the lead: `bf_glowtrio` goes to its **own** PD Wise webhook + tag `BF Glow Trio Lead`; anything else stays the 10% flow (unchanged). |
| `lib/submit-lead.ts` | Adds optional `offer` to `submitClaim`. |
| `app/layout.tsx` | Head script (pre-paint, no flash) + mounts `<PromoModal />`. |
| `app/globals.css` | `.announce-promo` / `html.promo-on` (40px strip), pop-up fade/rise animation (reduced-motion safe), `.bf-value-amt` strike-through. |

**Auto switch-back:** everything checks `promoEnd` in the browser. After it passes, the franchise strip returns, the pop-up stops and the 10% pop-up auto-opens again. No redeploy needed.

**Lead location:** `"Black Friday Glow Trio"`. The website sheet script writes leads to the tab with that exact name.

## 2. GymMaster

- Buy link (quick sign-up, 6 fields): `https://tannedco.gymmasteronline.com/portal/quick/signup/de9d37256ec469bd7370407fa5c8ea57` (membership type 194963).
- Settings > Member Portal > Customise Forms > **Quick Sign-Up**: Mobile Phone set to **Required** (keep on; needed to match buyers).
- Sales show in report **14 "All Sales"** as `Membership :: BLACK FRIDAY GLOW TRIO - 3 TANS FOR $79` (+ a `Signup ::` row). Columns: Member ID, Sale Date, Sale Type, Sale Description. Mobile comes from report 101 by Member ID.

## 3. PD Wise (white-label GoHighLevel, location `aZwzIqXfd3kp2OCmsGiu`)

Existing workflows were **not** changed (WEBSITE/META LEAD/LANDING PAGE -> 10SAVE, When Lead is 10SAVE, CONTACT CREATED -> INTERNAL NOTIFICATION).

1. **Trigger link** "Tanned Co - Black Friday Glow Trio checkout" (short tracked link to the GymMaster URL).
2. **WEBSITE -> BLACK FRIDAY GLOW TRIO Workflow** (webhook `.../webhook-trigger/0055dcad-5069-467e-81f9-1e20636ac285`):
   Create contact (first, last, phone) > tag `bf glow trio lead` > Wait 3h (window 9am-8pm, all days) > If tag `glow trio purchased` OR current month = December > END, else **Text 1** > Wait 1 day > same check > **Text 2**.
   - Text 1: "Hey {first name}, it's Tanned Co. Your Black Friday deal is still waiting: 3 tans for just $79 (valued at $117), valid for 6 months. Ends Monday midnight: {link} / Reply STOP to opt out."
   - Text 2: "Last reminder from Tanned Co., {first name}. 3 tans for $79 disappears Monday at midnight and won't be back. Grab yours now: {link} / Reply STOP to opt out."
3. **BF GLOW TRIO PURCHASED -> Add tag (stops reminders)** (webhook `.../webhook-trigger/47e171bf-1223-4609-8d02-2e599fae7995`): Find contact by phone > Contact found > add tag `glow trio purchased`.

Gotchas: a new inbound webhook needs one sample POST before the trigger saves (send fake data with curl, then "Fetch sample requests"). In If/else and tag pickers, mouse clicks often don't select. Type, then press Enter.

## 4. Google (Lead Captures sheet + Apps Script, account edensorpark@)

- Sheet tab **"Black Friday Glow Trio"**: copy of "Exit Intent Popup" (same columns A-K), plus L "PD Wise tagged".
- Apps Script "Tanned Co Lead Value (GymMaster)": appended `syncGlowTrio()` + `installGlowTrioSync()` at the end (existing code untouched). Hourly trigger for `syncGlowTrio` added via the **Triggers page** (Add Trigger > function > Time-driven > Hour timer > Every hour).
  - It reads report 14, matches buyers by mobile (last 9 digits) to the BF tab, sets Purchased / Black Friday Glow Trio / $79, and POSTs the phone once to the PURCHASED webhook.
- **Never run `lockSheet` or `setupSheet`** from the editor. The function picker defaults to `doPost` and is fiddly; use the arrow keys and check the name before pressing Run.

## 5. Consent

The pop-up line says: "By continuing you agree to texts about this offer and our Privacy Policy. Reply STOP to opt out." Every reminder text ends with "Reply STOP to opt out."

## 6. When the promo ends (Tue 1 Dec 2026)

- [ ] Website: nothing (auto). Optionally set `enabled: false` later and remove the code.
- [ ] PD Wise: switch both Black Friday workflows back to Draft.
- [ ] Apps Script: delete the `syncGlowTrio` trigger (Triggers page).
- [ ] Leave GymMaster mobile-required ON.

## 7. Reusing for the next offer

1. Copy `lib/promos/black-friday-glow-trio.ts` and set the new id, `promoEnd`, buy URL and copy.
2. New GymMaster membership + quick sign-up link.
3. Duplicate both PD Wise workflows (new webhooks), new trigger link, new tags, update texts and the "promo over" condition.
4. New sheet tab named exactly like the pop-up's `LEAD_LOCATION`; point `BF_TAB` / `BF_MATCH` / webhook constants at the new offer.
5. Build locally, screenshot 375px + 1280px, get approval, then merge to `main` (Vercel deploys).
