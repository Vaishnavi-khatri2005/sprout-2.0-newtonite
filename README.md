# Sprout 2.0 — Small Steps. Big Futures.

**Sprout 2.0** is a beginner-friendly Indian mutual fund investing web application and interactive 5-step onboarding prototype designed around an approachable **₹100** starting amount, created for the **Newtonite UI/UX Design Assignment**.

### Quick Submission Links
- **Case Study PDF (in Repo):** https://github.com/Vaishnavi-khatri2005/sprout-2.0-newtonite/blob/main/docs/sprout-2.0-case-study.pdf (and local copy at [`docs/sprout-2.0-case-study.pdf`](docs/sprout-2.0-case-study.pdf))
- **Case Study Markdown Source:** [`docs/sprout-2.0-case-study.md`](docs/sprout-2.0-case-study.md)
- **Figma Design File *(link to verify)*:** https://www.figma.com/design/67FVguQmfCpgOL2XGjKZge/Sprout-2.0-%E2%80%94-Newtonite-UI-UX-Assignment
- **Figma Interactive Prototype *(link to verify)*:** https://www.figma.com/proto/67FVguQmfCpgOL2XGjKZge/Sprout-2.0-%E2%80%94-Newtonite-UI-UX-Assignment?node-id=0-1&t=5Vwakxuj7i3Iecnq-1 *(Onboarding Flow: [node-id=1-652](https://www.figma.com/proto/67FVguQmfCpgOL2XGjKZge/Sprout-2.0-%E2%80%94-Newtonite-UI-UX-Assignment?node-id=1-652&t=cLwORpH5vwAoZTcK-1))*
- **GitHub Repository:** https://github.com/Vaishnavi-khatri2005/sprout-2.0-newtonite

> **Mandatory Market-Risk Disclaimer:** Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.

---

## Project Overview & Features

- **Editorial Warm Cream & Forest Green Visual System:** Built with custom design tokens (`#0F5132` Forest Green, `#E6F4EA` Mint Green, `#CFEFD6` Light Green, `#FFF9F4` Warm Cream, `#1F2937` Charcoal) verified for **WCAG 2.1 AA** contrast compliance.
- **Responsive Public Homepage (`/`):**
  - Sticky navigation bar with custom geometric Sprout wordmark, section anchors, and accessible mobile drawer (`Escape` close, scroll lock, and `≥ 44px` touch targets).
  - Hero section highlighting the **₹100** entry point, consistent geometric **Sprout mascot** (`src/assets/sprout-mascot.webp`), and an **above-the-fold market-risk disclosure card**.
  - *How It Works* (3-step overview), *Why Sprout* (4 numbered editorial principles), *Getting Ready* upfront document checklist (PAN, Aadhaar, Aadhaar-linked mobile), accessible *FAQ* accordion, and high-contrast *Footer*.
- **Progressive 5-Step Onboarding Flow (`/onboarding/1` – `/onboarding/5`):**
  - **Step 1 — Welcome:** Mascot greeting, segmented **English / हिंदी** language selector, and prototype translation notice.
  - **Step 2 — Get Ready:** Interactive, non-blocking 3-item readiness checklist (`0 of 3 ready` → `3 of 3 ready`) for PAN card, Aadhaar card, and Aadhaar-linked mobile number.
  - **Step 3 — Mobile Verification:** Three sub-states (`+91` 10-digit mobile number input → 6-box demo OTP input with clipboard paste & arrow-key support → read-only verified confirmation).
  - **Step 4 — KYC Details:** Plain-language regulatory explanation, uppercase PAN format validator (`^[A-Z]{5}[0-9]{4}[A-Z]$`), one-tap **Use sample PAN** (`ABCDE1234F`) helper, and Aadhaar readiness confirmation checkboxes.
  - **Step 5 — Verification Pending:** Confirmation screen with Sprout mascot and a dynamic **What you practised** summary card, plus actions to review details or return to the homepage.
- **Bilingual (`English` & `हिंदी`) Prototype Support:** Selecting **हिंदी** updates `<html lang="hi">`, switches all onboarding copy (`src/onboarding/i18n.ts`), and lazy-loads `@fontsource-variable/noto-sans-devanagari` on demand.
- **Accessibility & Reduced Motion:** Visible `3px solid #0F5132` keyboard `:focus-visible` outlines, programmatic heading focus on step transitions, `aria-invalid` / `aria-describedby` field error wiring, and full `@media (prefers-reduced-motion: reduce)` support.

---

## Important Prototype & Privacy Notice (OTP & KYC Are Prototype-Only)

- **No Real SMS or Live KYC Verification:** All mobile number, 6-digit OTP, and PAN/Aadhaar interactions in this application are **client-side prototype simulations only**. No SMS is sent, and no external identity or KRA/UIDAI verification takes place.
- **Zero Data Persistence or Transmission:** Nothing entered in the onboarding forms is saved to `localStorage`, `sessionStorage`, cookies, URL parameters, or any server.
- **Ephemeral In-Memory PAN Check:** In [`src/pages/onboarding/Step4Kyc.tsx`](src/pages/onboarding/Step4Kyc.tsx), the PAN input string is held exclusively in component-local React memory (`useState('')`) for regex format checking (`ABCDE1234F`) and is discarded immediately upon leaving the screen. We never ask for a user's Aadhaar number.

---

## Technology Stack

- **Framework:** [React 19](https://react.dev/) (`^19.2.8`) + [TypeScript](https://www.typescriptlang.org/) (`~6.0.2`)
- **Build Tool:** [Vite 8](https://vite.dev/) (`^8.3.0`)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (`^4.3.3` via `@tailwindcss/vite`)
- **Typography:** Self-hosted `@fontsource-variable/inter` (Latin) and on-demand `@fontsource-variable/noto-sans-devanagari` (Devanagari)
- **Linting:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`^1.81.0`)

---

## Local Setup, Development, Build & Lint Commands

### Prerequisites
- **Node.js** `v20+` (tested with `v24.19.0`) and **npm** `v10+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```

### 3. Run Production Typecheck & Build
```bash
npm run build
```

### 4. Run the Linter
```bash
npm run lint
```

### 5. Preview the Production Build Locally
```bash
npm run preview
```

---

## Application Routes

The application uses a lightweight History API router ([`src/router.ts`](src/router.ts)) supporting direct navigation and browser Back/Forward actions across the following routes:

| Route | Screen / Component | Description |
|---|---|---|
| `/` | [`src/pages/Home.tsx`](src/pages/Home.tsx) | Responsive Desktop (`1440px`) & Mobile (`360px–430px`) Homepage |
| `/onboarding/1` | [`src/pages/onboarding/Step1Welcome.tsx`](src/pages/onboarding/Step1Welcome.tsx) | **Step 1 of 5 — Welcome:** Mascot greeting & `English` / `हिंदी` language selector |
| `/onboarding/2` | [`src/pages/onboarding/Step2Ready.tsx`](src/pages/onboarding/Step2Ready.tsx) | **Step 2 of 5 — Get Ready:** Interactive 3-item document readiness checklist |
| `/onboarding/3` | [`src/pages/onboarding/Step3Mobile.tsx`](src/pages/onboarding/Step3Mobile.tsx) | **Step 3 of 5 — Mobile Verification:** `+91` mobile entry, 6-digit demo OTP, and verified state |
| `/onboarding/4` | [`src/pages/onboarding/Step4Kyc.tsx`](src/pages/onboarding/Step4Kyc.tsx) | **Step 4 of 5 — KYC Details:** Sample PAN format check (`ABCDE1234F`) & Aadhaar readiness |
| `/onboarding/5` | [`src/pages/onboarding/Step5Pending.tsx`](src/pages/onboarding/Step5Pending.tsx) | **Step 5 of 5 — Verification Pending:** Prototype confirmation & *What you practised* summary |

---

## Figma Design, Interactive Prototype & Case Study Documentation

### Figma Links *(Links to Verify Before Final Submission)*
> **Verification Reminder:** Please open both links below in an incognito/private browser window before submitting to confirm that **Anyone with the link → can view** sharing permissions remain active.

- **Figma Design File (Editable Frames, Design System & Assets — *Link to Verify*):**  
  https://www.figma.com/design/67FVguQmfCpgOL2XGjKZge/Sprout-2.0-%E2%80%94-Newtonite-UI-UX-Assignment
- **Figma Interactive Prototype (Onboarding Click-Through Flow — *Link to Verify*):**  
  https://www.figma.com/proto/67FVguQmfCpgOL2XGjKZge/Sprout-2.0-%E2%80%94-Newtonite-UI-UX-Assignment?node-id=0-1&t=5Vwakxuj7i3Iecnq-1 *(Onboarding Flow: [node-id=1-652](https://www.figma.com/proto/67FVguQmfCpgOL2XGjKZge/Sprout-2.0-%E2%80%94-Newtonite-UI-UX-Assignment?node-id=1-652&t=cLwORpH5vwAoZTcK-1))*

### Repository Design & Case Study Files
- **Final Case Study PDF (10 Pages):** [`docs/sprout-2.0-case-study.pdf`](docs/sprout-2.0-case-study.pdf)
- **Case Study Source Document:** [`docs/sprout-2.0-case-study.md`](docs/sprout-2.0-case-study.md) *(10-page case study covering funnel math, research limitations, UX strategy, design system, homepage, onboarding, performance, and 3-week launch plan)*
- **Figma Design & Handoff Specification:** [`docs/figma-handoff.md`](docs/figma-handoff.md)
- **Step-by-Step Figma Assembly Guide:** [`docs/figma-beginner-guide.md`](docs/figma-beginner-guide.md)
- **Exported Brand & UI Assets:** [`design/figma-assets/`](design/figma-assets/) *(14 SVG/PNG/WebP brand, mascot, and icon files)*
- **Import-Ready Editable SVG Boards:** [`design/figma-import-svgs/`](design/figma-import-svgs/) *(6 multi-layer editable SVG boards)*
- **Reference Screenshots (`@2x`):** [`design/screenshots/`](design/screenshots/) *(12 mobile `390×844` and desktop `1440×900` captures)*
