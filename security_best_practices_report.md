# Security Best Practices Report

## Executive Summary
I ran a focused React/TypeScript frontend security review. The biggest risk is a publicly exposed contact-form webhook URL in the client bundle, which can be abused for spam or data injection. I also noted a third-party script without SRI and a `dangerouslySetInnerHTML` usage that is safe only if its inputs stay developer-controlled. Finally, security headers/CSP are not configured in-repo and should be verified at the edge.

## Critical
None found.

## High
### FIND-001
- Rule ID: REACT-CONFIG-001
- Severity: High
- Location: `src/pages/ContactPage.tsx` (lines 9-11, 177-197)
- Evidence:
  - `const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n-.../webhook/...';`
  - `fetch(N8N_WEBHOOK_URL, { method: 'POST', ... })`
- Impact: The webhook URL is shipped to all users and can be abused by attackers to submit arbitrary payloads, spam the endpoint, or attempt injection into downstream automation.
- Fix: Move the webhook invocation server-side (BFF/serverless), or require an authenticated token from a backend endpoint. Add rate limits and bot protection (e.g., CAPTCHA) at the edge or webhook layer.
- Mitigation: If you must keep a public webhook, rate-limit at the provider, add allowlisted origins, and implement a shared secret that is not embedded in the client.
- False positive notes: If the webhook is already protected by a server-side secret, auth, or strict rate limits, reduce severity accordingly.

## Medium
### FIND-002
- Rule ID: REACT-SRI-001
- Severity: Medium
- Location: `index.html` (lines 48-57)
- Evidence:
  - `<script type="module"> import { embedWidget } from "https://cdn.jsdelivr.net/npm/agent-embed-widget/dist/agent-embed-widget.es.js"; ... </script>`
- Impact: Loading third-party JS without SRI lets a compromised CDN or package supply-chain push arbitrary code into your origin.
- Fix: Self-host the widget or pin a specific version and add `integrity` + `crossorigin` attributes. Consider a CSP that limits `script-src` to known sources.
- Mitigation: If the vendor provides a recommended integrity hash or a hosted bundle with integrity metadata, use it.
- False positive notes: If the script is already self-hosted or integrity-checked via a different mechanism, adjust severity.

### FIND-003
- Rule ID: REACT-HEADERS-001 / REACT-CSP-001
- Severity: Medium
- Location: `vercel.json` (no headers configured)
- Evidence:
  - No CSP or security headers visible in repo config.
- Impact: Without CSP and security headers, the app has less defense-in-depth against XSS, clickjacking, and MIME sniffing.
- Fix: Set headers at the edge (Vercel, Cloudflare, etc.) for:
  - `Content-Security-Policy` (report-only first)
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy`
  - `Permissions-Policy`
  - `frame-ancestors` (or `X-Frame-Options`)
- Mitigation: If headers are already set at the CDN/host, document where and confirm via runtime header checks.
- False positive notes: Headers may be configured outside the repo; verify in production.

## Low
### FIND-004
- Rule ID: REACT-XSS-001
- Severity: Low
- Location: `src/components/ui/chart.tsx` (lines 82-90)
- Evidence:
  - `<style dangerouslySetInnerHTML={{ __html: ... }} />`
- Impact: If any of the chart config or theme values become attacker-controlled, this becomes an XSS vector. Currently it appears developer-controlled.
- Fix: Ensure `config` values are strictly internal and never accept user input. Consider generating CSS variables via inline styles or a CSS-in-JS approach that avoids raw HTML insertion.
- Mitigation: Add TypeScript constraints / validation for the config source to prevent untrusted input from reaching this component.
- False positive notes: If `config` is always static and authored in code, this is low risk.

## Notes
- No evidence of secrets in `.env`; note that any `VITE_*` variables are public by design.

---
Report generated: 2026-03-17