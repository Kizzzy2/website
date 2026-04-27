# Framer Webhook Integration — LabShine

Add this to **every Framer page** that has a lead capture form.

## In Framer: Code Embed or Custom Component

Paste this into a **Code** component on each page:

```html
<script>
// LabShine Webhook — paste into Framer Code embed
// Change PAGE_SLUG to match this page, e.g. "full-detail-cypress"
const PAGE_SLUG = "YOUR_PAGE_SLUG_HERE";

document.addEventListener("DOMContentLoaded", function() {
  // Find Framer's form submit button
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    // Grab UTM params from URL
    const params = new URLSearchParams(window.location.search);
    const payload = {
      name:         form.querySelector('[name="name"], [placeholder*="Name"]')?.value || "",
      phone:        form.querySelector('[name="phone"], [placeholder*="Phone"]')?.value || "",
      email:        form.querySelector('[name="email"], [placeholder*="Email"]')?.value || "",
      vehicle:      form.querySelector('[name="vehicle"], [placeholder*="Vehicle"]')?.value || "",
      service:      form.querySelector('[name="service"]')?.value || PAGE_SLUG,
      zip:          form.querySelector('[name="zip"], [placeholder*="ZIP"]')?.value || "",
      source:       "framer-" + PAGE_SLUG,
      framer_page:  PAGE_SLUG,
      utm_source:   params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };

    try {
      const res = await fetch("https://labshineautodetailing.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        // Show success state — customize to match your Framer design
        form.innerHTML = '<div style="color:#00c8f0;font-size:1.2rem;font-weight:700;text-align:center;padding:32px">✓ Got it! We\'ll reach out within minutes.<br><br><a href="https://square.link/u/LCpvdkjL" style="color:#fff;background:#00c8f0;padding:12px 24px;text-decoration:none;font-size:0.9rem">PAY DEPOSIT →</a></div>';
      }
    } catch (err) {
      console.error("LabShine webhook error:", err);
    }
  });
});
</script>
```

## Page Slugs (use exactly these)

| Framer Page | PAGE_SLUG |
|-------------|-----------|
| Full Detail Promo — Cypress | `full-detail-cypress` |
| Paint Correction — Memorial | `paint-correction-memorial` |
| Ceramic Coating — River Oaks | `ceramic-river-oaks` |
| Ceramic Coating — The Woodlands | `ceramic-woodlands` |
| Fleet Detail — Houston Commercial | `fleet-houston` |

## Square Deposit Links per Page

| Service | Deposit Link |
|---------|-------------|
| Full Detail (Sedan) | https://square.link/u/LCpvdkjL |
| Full Detail (SUV) | https://square.link/u/QtFCLohH |
| Interior Only | https://square.link/u/6AyCpTlm |
| Exterior Only | https://square.link/u/PunCOLYk |
| Ceramic Coating | https://square.link/u/SIgbTkz1 |

## Webhook Payload (auto-captured)
- `source`: `framer-[slug]` — shows in Notion under Source field
- `framer_page`: slug — shows in Notion under Framer Page field  
- `utm_source`, `utm_campaign`: auto-pulled from URL params (e.g. `?utm_source=facebook`)
