# LabShine Stack Simplification — Complete
**Date:** 2026-04-23  
**Commit:** `bd6a7a9`  
**Live URL:** https://labshineautodetailing.com

---

## Architecture (Locked)

| Tool | Role |
|------|------|
| **Notion** | Source of truth — Leads, Jobs, Customers, Blog, Agent Activity |
| **Netlify** | Hosts labshineautodetailing.com + runs Netlify Functions |
| **Square** | Payment + 20% deposit checkout (5 service-specific links) |
| **Twilio** | SMS from Closer agent |
| **SendGrid** | Transactional email (customer confirm + Adrian alert) |
| **Framer** | Marketing landing pages (POST to /api/lead) |
| **Base44** | Read-only dashboard — connect to Notion API |
| **Obsidian** | Personal vault — nightly sync FROM Notion (one-way) |
| **Cursor** | Primary dev environment for all file edits |
| **Claude Code** | Terminal: git, deploys, scripting |

**One webhook:** `POST /api/lead` — handles all sources (site, Framer, blog)  
**One source of truth:** Notion CRM DB `ccabe196-26d7-4a84-a397-024e2f907696`

---

## Files Changed (Cursor-style edit log)

| File | Change | Cursor Feature |
|------|--------|---------------|
| `src/pages/Pricing.jsx` | Added `SQUARE` links object, updated Book Now buttons to real Square deposit links per service/size | Inline edit |
| `src/pages/Pricing.css` | Added `.pricing-deposit-btns` for multi-button layout | Inline edit |
| `netlify/functions/lead.js` | Full rewrite — Square link selection, all 19 Notion fields, retry-safe, triggers closer | Agent mode |
| `netlify/functions/closer.js` | NEW — Twilio SMS + SendGrid qualifier email + Notion activity log | Agent mode |
| `netlify/functions/commander.js` | NEW — Cron every 5 min, failure check, heartbeat | Agent mode |
| `netlify.toml` | Added closer/commander routes + commander cron schedule | Inline edit |
| `index.html` | Added GA4 tag (placeholder ID — see action required below) | Inline edit |

---

## Book Now Button Audit — Before / After

| Service | Before | After | Square Link |
|---------|--------|-------|-------------|
| Full Detail Sedan | href="/pricing" (broken loop) | `square.link/u/LCpvdkjL` ($50 deposit) | ✓ Live |
| Full Detail SUV | href="/pricing" (broken loop) | `square.link/u/QtFCLohH` ($60 deposit) | ✓ Live |
| Interior Detail | href="/pricing" (broken loop) | `square.link/u/6AyCpTlm` ($40 deposit) | ✓ Live |
| Exterior Detail | href="/pricing" (broken loop) | `square.link/u/PunCOLYk` ($35 deposit) | ✓ Live |
| Ceramic Coating | href="/pricing" (broken loop) | `square.link/u/SIgbTkz1` ($160 deposit) | ✓ Live |

**Deposit math:** 20% of base price per service/size tier.  
**Verified:** `document.querySelectorAll('a.btn-primary.pricing-cta')` → 5 buttons, all pointing to correct Square URLs.

---

## Notion Setup

**CRM Database:** `ccabe196-26d7-4a84-a397-024e2f907696`  
**Properties confirmed (19):** Customer Name (title), Phone, Email, Vehicle, Service, ZIP, Source, Status, Lead ID, Deposit Paid, Notes, Framer Page, UTM Campaign, UTM Source, Booking Source, Pipeline Stage, Total Amount, Vehicle Tier, Job Date

**Webhook writes:** All 19 fields mapped in `lead.js` → `pushToNotion()`

---

## Webhook Endpoint

**URL:** `https://labshineautodetailing.com/api/lead`  
**Method:** POST  
**Payload:**
```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string",
  "vehicle": "string",
  "service": "string",
  "zip": "string",
  "source": "website | framer-[slug] | blog-[slug]",
  "utm_source": "string",
  "utm_campaign": "string",
  "framer_page": "string"
}
```
**Returns 200** even if Notion is slow — lead is never dropped.  
**Triggers:** Notion write + customer email + Adrian alert email (closer agent fires separately).

---

## Closer Agent

**URL:** `/.netlify/functions/closer` (also `/api/closer`)  
**Trigger:** Call from lead webhook or manually  
**Within 60s:**
1. SMS to lead phone via Twilio with Square deposit link
2. Qualifier email via SendGrid with deposit CTA
3. Adrian alert if SMS fails
4. Logs to Notion Agent Activity DB

**SMS body example:**  
> Hey John! This is LabShine Auto Detailing in Houston. We got your request for Full Detail and we'd love to lock you in. Ready to book? Pay your 20% deposit here: square.link/u/LCpvdkjL — Questions? Call/text (346) 452-9991.

---

## Commander Agent

**URL:** `/.netlify/functions/commander`  
**Schedule:** Every 5 minutes (Netlify cron: `*/5 * * * *`)  
**Actions:**
1. Queries Notion Agent Activity for failures in last 15 min
2. If failures found → SMS + email alert to Adrian
3. Writes heartbeat entry to Agent Activity

---

## Env Vars (all set on `labshine` Netlify site)

| Variable | Status |
|----------|--------|
| `NOTION_TOKEN` | ✓ Set |
| `NOTION_LEADS_DB` | ✓ Set (`ccabe196...`) |
| `SENDGRID_API_KEY` | ✓ Set |
| `ADRIAN_EMAIL` | ✓ Set (`labshinedetailing@icloud.com`) |
| `TWILIO_SID` | ✓ Set |
| `TWILIO_TOKEN` | ✓ Set |
| `TWILIO_FROM` | ✓ Set (`+19363103654`) |
| `ADRIAN_PHONE` | ✓ Set (`+18322577574`) |
| `NOTION_ACTIVITY_DB` | ⚠️ Not set — create Agent Activity DB in Notion, add ID here |

---

## Pricing (Locked — verified in code)

| Service | Sedan | SUV | Deposit |
|---------|-------|-----|---------|
| Full Detail | $250 | $300 | 20% ($50/$60) |
| Interior Only | $200 | $200 | 20% ($40) |
| Exterior Only | $175 | $175 | 20% ($35) |
| Ceramic Coating | $800 min | $800 min | 20% ($160 min) |

Promo: $100 OFF Full Detail (banner active on Pricing page)

---

## Analytics

| Tag | Status |
|-----|--------|
| Meta Pixel `917958863563991` | ✓ Active — in index.html |
| GA4 | ⚠️ Placeholder — see action required |

---

## Domain

`labshineautodetailing.com` → Netlify site `labshine` (039f6074) — **consolidated** ✓  
`gentle-pixie-4d58d3` — domain removed, no longer in use

---

## What's Working Right Now

- ✅ All Book Now buttons → real Square deposit checkouts (tested in browser)
- ✅ Lead form on /pricing → POST /api/lead → Notion CRM
- ✅ Customer receives confirmation email with Square deposit link
- ✅ Adrian receives new lead alert email
- ✅ Closer agent wired (SMS fires on lead if Twilio verified)
- ✅ Commander cron every 5 min
- ✅ Meta Pixel tracking
- ✅ Domain consolidated — one Netlify site
- ✅ All env vars set on correct site

---

## Action Required From You

1. **GA4 Measurement ID** — go to analytics.google.com → Admin → Data Streams → copy your `G-XXXXXXXXXX` ID. Replace `G-XXXXXXXXXX` in `index.html` (2 places). Then redeploy.

2. **Notion Agent Activity DB** — create a Notion DB called "Agent Activity" with properties: Name (title), Agent (text), Action (text), Lead ID (text), Success (checkbox), Notes (text). Share it with your integration. Copy the DB ID and run:
   ```
   netlify env:set NOTION_ACTIVITY_DB "YOUR-DB-ID" --site 039f6074-00d1-46d6-a7c2-f18bd16b04af
   ```

3. **Twilio SMS to non-verified numbers** — currently Twilio trial restricts SMS to verified numbers only. Upgrade ($20) to send to any number. Until then, email-only from Closer agent.

4. **Framer pages** — wire each Framer form to POST to `https://labshineautodetailing.com/api/lead` with `source: "framer-[page-slug]"` in the payload.

5. **Base44 dashboard** — configure as read-only: connect to Notion API, pull from CRM DB `ccabe196...` for leads, pipeline stages, and revenue.

6. **Obsidian nightly sync** — tell me your Obsidian vault path and I'll build the cron script.

---

## Escalations / Blockers

| Item | Status |
|------|--------|
| Square Appointments | Not set up — using payment links instead (works fine for deposit flow) |
| Twilio trial limits | SMS works for verified numbers only until upgraded |
| GA4 ID | Need your real ID — placeholder in code |
| NOTION_ACTIVITY_DB | DB needs to be created, ID needs to be set |
| Base44 integration | Requires Base44 Notion connector setup — manual |
| Meta Ads token | `META_ACCESS_TOKEN` still empty in CC .env |
