# Security Best Practices Report

## Executive Summary
This review covers the React/Vite frontend. No critical vulnerabilities were found in the codebase. The main risks are (1) a public webhook endpoint being called directly from the browser, which can be spammed or abused, and (2) a dangerouslySetInnerHTML usage that is safe only if its inputs are fully trusted. Security headers and CSP are not visible in repo code and should be verified at the hosting or edge layer.

---

## Medium Severity

### SEC-001: A public webhook endpoint is called directly from client code
- Rule ID: REACT-CONFIG-001 / REACT-NET-001
- Location:
  - src/pages/ContactPage.tsx:9-11, 178-186
- Evidence:
  - const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://.../webhook/...';
  - await fetch(N8N_WEBHOOK_URL, { method: 'POST', ... })
- Impact: Anyone can post directly to this endpoint, enabling spam, automation abuse, and data poisoning. If the workflow triggers downstream actions (notifications, CRM updates), this can create operational or cost impact.
- Fix (preferred): Move webhook submission to a server-side endpoint (API route/serverless/BFF) and keep the webhook URL and any signing keys server-only. Add verification (HMAC signature), rate limits, and bot protection (CAPTCHA).
- Mitigation: Add WAF or rate-limiting at the webhook provider; validate Origin or Referer and require a secret token in the request body or header (validated server-side).
- False positive notes: If the webhook endpoint already enforces its own auth, rate limits, and filtering, then risk is reduced. Verify in n8n or hosting settings.

---

## Low Severity

### SEC-002: dangerouslySetInnerHTML used to inject dynamic style
- Rule ID: REACT-XSS-001 / REACT-DOM-001
- Location: src/components/ui/chart.tsx:83-98
- Evidence:
  - <style dangerouslySetInnerHTML={{ __html: ... }} />
- Impact: If any part of config or id becomes attacker-controlled, this could open DOM XSS or CSS injection. Currently it appears to be internal-only, which is safer.
- Fix: Keep config and id strictly internal. If future data can be user-controlled, sanitize or switch to a safer CSSOM API to avoid raw HTML injection.
- Mitigation: Add a strict CSP and consider Trusted Types to reduce the impact of any DOM injection.
- False positive notes: If config values are compile-time constants, the risk is minimal.

### SEC-003: Security headers and CSP not visible in repo (verify at edge)
- Rule ID: REACT-HEADERS-001 / REACT-CSP-001
- Location: No CSP or security headers are defined in repo-visible server or edge configuration. Vite config does not set headers.
- Impact: Missing CSP and related headers reduces defense-in-depth against XSS and clickjacking.
- Fix: Add CSP, X-Content-Type-Options, Referrer-Policy, and frame-ancestors at the CDN or edge or server.
- False positive notes: If these headers are already set at your hosting provider or CDN, then this is satisfied. Verify via response headers in production.

---

## Notes
- VITE_* variables are always embedded in the client bundle and should never contain secrets.
