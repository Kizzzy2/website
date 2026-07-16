/**
 * Prerender.io edge function for Netlify
 * Intercepts bot/crawler requests and returns pre-rendered HTML
 * so Google, Bing, etc. get full content instead of an empty React shell.
 */

import type { Config, Context } from "https://edge.netlify.com/";

// Crawlers and bots that should receive pre-rendered HTML
const BOT_PATTERN =
  /googlebot|google-inspectiontool|bingbot|yandex|baiduspider|duckduckbot|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|showyoubot|outbrain|pinterestbot|slackbot|vkshare|w3c_validator|redditbot|applebot|whatsapp|flipboard|discordbot|google page speed|qwantify|heritrix|seznambot|crawler|spider|ia_archiver|archive\.org_bot/i;

// Static asset extensions — never prerender these
const ASSET_EXT = /\.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|otf|eot|xml|txt|map)$/i;

export default async function handler(req: Request, context: Context) {
  const ua = req.headers.get("user-agent") ?? "";
  const url = new URL(req.url);

  // Pass through if not a bot
  if (!BOT_PATTERN.test(ua)) {
    return context.next();
  }

  // Pass through static assets
  if (ASSET_EXT.test(url.pathname)) {
    return context.next();
  }

  // Pass through Netlify internals and API routes
  if (url.pathname.startsWith("/.netlify") || url.pathname.startsWith("/api/")) {
    return context.next();
  }

  const token = Netlify.env.get("PRERENDER_TOKEN");
  if (!token) {
    console.warn("PRERENDER_TOKEN not set — passing through");
    return context.next();
  }

  const prerenderUrl = `https://service.prerender.io/${url.href}`;

  try {
    const res = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": token,
        "Accept-Encoding": "gzip",
        "User-Agent": ua,
      },
    });

    return new Response(res.body, {
      status: res.status,
      headers: {
        "content-type": res.headers.get("content-type") ?? "text/html",
        "x-prerendered": "1",
      },
    });
  } catch (err) {
    // If Prerender is down, fall back to normal SPA response
    console.error("Prerender.io error:", err);
    return context.next();
  }
}

export const config: Config = {
  path: "/*",
  excludedPath: ["/api/*", "/.netlify/*"],
};
