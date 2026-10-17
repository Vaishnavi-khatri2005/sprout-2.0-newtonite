# Sprout 2.0 — Step-by-Step Beginner Guide to Building Your Editable Figma File

> [!IMPORTANT]
> **Transparency Note:** Because this coding assistant runs locally and does not have direct API access to your personal Figma account, **no cloud Figma file or URL has been created automatically**. Instead, we have generated **6 full-page, multi-layer editable SVG boards** inside `design/figma-import-svgs/` so that when you drag or place them into Figma, **Figma automatically creates editable frames, rectangles, rounded cards, text layers, and your custom Sprout mascot**—saving you hours of drawing from scratch.

---

## 1. What Has Been Prepared for You Locally

1. **`design/figma-import-svgs/` (NEW — 6 Editable Full-Page SVG Boards):**
   - `01-cover-and-overview.svg` (`1600 × 960`) → Maps to Page `01 — Cover & Overview`
   - `02-design-system.svg` (`1600 × 1320`) → Maps to Page `02 — Design System`
   - `03-homepage-desktop-1440.svg` (`1440 × 2660`) → Maps to Page `03 — Homepage Desktop`
   - `04-homepage-mobile-390.svg` (`390 × 2640`) → Maps to Page `04 — Homepage Mobile`
   - `05-onboarding-all-screens.svg` (`3090 × 920`) → Maps to Page `05 — Onboarding` (contains 7 side-by-side `390 × 844` mobile frames: Welcome, Get Ready, Mobile Entry, OTP Entry, Verified Demo State, KYC Details, and Verification Pending)
   - `06-hindi-onboarding.svg` (`840 × 880`) → Maps to Page `06 — Hindi Onboarding` (contains 2 side-by-side `390 × 844` Hindi mobile frames: Welcome Hindi + Get Ready Hindi)
2. **`design/figma-assets/` (14 Individual Vector & Brand Assets):**
   - `sprout-mascot.png`, `sprout-mascot.webp`, `sprout-logo-mark.svg`, `sprout-wordmark.svg`, `sprout-wordmark-compact.svg`, and 9 crisp `24×24` / `20×20` UI icons.
3. **`design/screenshots/` (12 High-DPI `@2x` Reference Screenshots):**
   - Pixel-accurate captures from the live React implementation at `390 × 844` and `1440 × 900` to place alongside your editable frames as visual references.
4. **`docs/figma-handoff.md`:**
   - Complete design token reference, typography table, component specs, and prototype connection table.

---

## 2. Your First Concrete Action in Figma

1. Open **[figma.com](https://www.figma.com)** in your browser (or launch the Figma Desktop App) and log in.
2. In the top-right corner of the Figma file browser, click the blue **`+ Design file`** button (or **`New design file`**).
3. Click **`Untitled`** at the top-center of the window and rename the file to:
   **`Sprout 2.0 — Newtonite UI/UX Assignment`**
4. Look at the **Left Sidebar** under the **Pages** section:
   - Double-click **`Page 1`** and rename it to:
     `01 — Cover & Overview`
5. Now perform your **first import**:
   - In the top-left menu bar, click the **Figma menu icon (`☰`) → `File` → `Place image...`** (or press **`Ctrl + Shift + K`** on Windows).
   - Navigate to this exact file path on your computer:
     `design\figma-import-svgs\01-cover-and-overview.svg`
   - Click **`Open`**, then click **once anywhere on the canvas**.
   - Figma immediately places `01-cover-and-overview.svg` as an **editable `1600 × 960` Frame** with editable text layers, colour chips, page index cards, and your Sprout mascot!

---

## 3. Step-by-Step Instructions for All 6 Pages

### Step A — Create the Remaining 5 Pages in the Left Sidebar
In the **Left Sidebar**, click the **`+`** icon next to **Pages** five times so your page list matches this exact order:
1. `01 — Cover & Overview`
2. `02 — Design System`
3. `03 — Homepage Desktop`
4. `04 — Homepage Mobile`
5. `05 — Onboarding`
6. `06 — Hindi Onboarding`

*(Optional Tip: Right-click `01 — Cover & Overview` frame on the canvas and select **`Set as thumbnail`** so your Figma file has a branded cover card in your dashboard.)*

---

### Step B — Populate Page `02 — Design System`
1. Click **`02 — Design System`** in the Pages list on the left sidebar.
2. Press **`Ctrl + Shift + K`** (`File → Place image...`) and select:
   `design\figma-import-svgs\02-design-system.svg`
3. Click once on the canvas to place the `1600 × 1320` Design System board.
4. **Save Local Colour Styles (2 minutes):**
   - Click empty space on the canvas → in the Right Sidebar under **Local styles**, click **`+` → `Color style`**.
   - Add the 5 core palette colours from the swatches on the board:
     - `Brand / Forest Green` (`#0F5132`)
     - `Brand / Mint Green` (`#E6F4EA`)
     - `Brand / Light Green` (`#CFEFD6`)
     - `Surface / Warm Cream` (`#FFF9F4`)
     - `Text / Charcoal` (`#1F2937`)
5. **Convert Key Elements into Reusable Figma Components (2 minutes):**
   - Expand the placed `02-design-system` frame in the Left Layers panel.
   - Select the group **`Component / Button Primary`** and press **`Ctrl + Alt + K`** (or click the **4-diamond Create Component icon** in the top toolbar).
   - Repeat **`Ctrl + Alt + K`** for:
     - `Component / Button Secondary`
     - `Component / Button Disabled`
     - `Component / CheckRow Checked`
     - `Component / CheckRow Unchecked`
   - You can also drag any individual SVG icons from `design\figma-assets\` onto this page and press **`Ctrl + Alt + K`** on each one.

---

### Step C — Populate Page `03 — Homepage Desktop`
1. Click **`03 — Homepage Desktop`** in the Left Sidebar.
2. Press **`Ctrl + Shift + K`** and select:
   `design\figma-import-svgs\03-homepage-desktop-1440.svg`
3. Click on the canvas to place the editable `1440 × 2660` Desktop Homepage frame.
4. Double-click its top frame title in the Left Layers panel and rename it to **`Homepage — Desktop (1440px)`**.
5. **Place the Reference Screenshot Alongside (Optional Visual Verification):**
   - Press **`Ctrl + Shift + K`** and select:
     `design\screenshots\02-homepage-desktop-1440-full.png`
   - Place it to the **right** of your editable frame (set its `W` width to `1440` in the Right Sidebar) and rename the image layer to `Reference Screenshot — Desktop (1440px)`.

---

### Step D — Populate Page `04 — Homepage Mobile`
1. Click **`04 — Homepage Mobile`** in the Left Sidebar.
2. Press **`Ctrl + Shift + K`** and select:
   `design\figma-import-svgs\04-homepage-mobile-390.svg`
3. Click on the canvas to place the editable `390 × 2640` Mobile Homepage frame, and rename the frame to **`Homepage — Mobile (390px)`**.
4. **Place the Mobile Reference Screenshot Alongside:**
   - Press **`Ctrl + Shift + K`** and select:
     `design\screenshots\01-homepage-mobile-390-full.png`
   - Place it `80px` to the right of your editable frame and set its width `W` to `390` in the Right Sidebar.

---

### Step E — Populate Page `05 — Onboarding` & Promote Screens to Top-Level Frames
1. Click **`05 — Onboarding`** in the Left Sidebar.
2. Press **`Ctrl + Shift + K`** and select:
   `design\figma-import-svgs\05-onboarding-all-screens.svg`
3. Click on the canvas to place the board containing all **7 English Onboarding screens (`390 × 844` each)**.
4. **Important Step for Prototyping — Ungroup the Outer Wrapper so Each Screen Is a Top-Level Frame:**
   - Select the outer imported frame `05-onboarding-all-screens` in the Left Layers panel.
   - Press **`Ctrl + Shift + G`** (**Ungroup**) once so the 7 screen groups sit directly on the canvas.
   - Select each of the 7 screen groups (`Frame / Onboarding 1 — Welcome (EN)` through `Frame / Onboarding 5 — Verification Pending`) one by one and press **`Ctrl + Alt + G`** (**Frame Selection**) if Figma imported them as Groups (`dashed icon`) rather than Frames (`# icon`).
   - Verify each of the 7 frames has dimensions **`W: 390`**, **`H: 844`**, and Corner Radius `0` (or `24` for presentation).
5. *(Optional)* Place the matching screenshots from `design/screenshots/03-onboarding-1-welcome-390x844.png` through `07-onboarding-5-pending-390x844.png` below each editable frame as visual reference.

---

### Step F — Populate Page `06 — Hindi Onboarding`
1. Click **`06 — Hindi Onboarding`** in the Left Sidebar.
2. Press **`Ctrl + Shift + K`** and select:
   `design\figma-import-svgs\06-hindi-onboarding.svg`
3. Click on the canvas to place the board containing:
   - `Frame / Onboarding 1 — Welcome (Hindi)` (`390 × 844`)
   - `Frame / Onboarding 2 — Get Ready (Hindi)` (`390 × 844`)
4. Select the outer wrapper and press **`Ctrl + Shift + G`** (**Ungroup**), then ensure both Hindi screens are top-level Frames (`390 × 844`).
5. *(Note on Hindi Font in Figma)*: If any Devanagari characters show a missing font banner (`[?]`), click the banner at the top of Figma and replace the font on those text layers with **`Noto Sans Devanagari`** (built into Google Fonts inside Figma).

---

## 4. What Remains Manual (Prototype Connections & Polish)

Because SVG files cannot store Figma's proprietary interactive prototype links, **wiring the Prototype noodles must be done manually inside Figma** (takes ~3 minutes):

### How to Wire Prototype Connections on `05 — Onboarding`
1. Go to page **`05 — Onboarding`**.
2. In the **Right Sidebar**, switch from the **`Design`** tab to the **`Prototype`** tab at the top.
3. Hover over the source button inside a screen until a small **blue `+` circle** appears on its edge, then drag the blue arrow ("noodle") to the target frame:

| # | Source Screen (`390 × 844`) | Click Target Layer | Drag Arrow To Destination Frame | Interaction Settings |
|---|---|---|---|---|
| 1 | `Onboarding 1 — Welcome (EN)` | `Button / Continue` (`#0F5132` pill) | `Onboarding 2 — Get Ready` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 2 | `Onboarding 2 — Get Ready` | `Button / Continue` | `Onboarding 3A — Mobile Entry` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 3 | `Onboarding 2 — Get Ready` | `Button / Back` | `Onboarding 1 — Welcome (EN)` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 4 | `Onboarding 3A — Mobile Entry` | `Button / Send OTP` | `Onboarding 3B — OTP Entry` | **On click → Navigate to → Instant** (or Smart animate `150ms`) |
| 5 | `Onboarding 3B — OTP Entry` | `Button / Use demo OTP` | `Onboarding 3C — Verified Demo State` | **On click → Navigate to → Instant** |
| 6 | `Onboarding 3B — OTP Entry` | `Button / Continue` | `Onboarding 4 — KYC Details` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 7 | `Onboarding 3C — Verified Demo State` | `Button / Continue` | `Onboarding 4 — KYC Details` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 8 | `Onboarding 3A / 3B / 3C` | `Button / Back` | `Onboarding 2 — Get Ready` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 9 | `Onboarding 4 — KYC Details` | `Button / Submit for verification` | `Onboarding 5 — Verification Pending` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 10 | `Onboarding 4 — KYC Details` | `Button / Back` | `Onboarding 3C — Verified Demo State` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 11 | `Onboarding 5 — Verification Pending` | `Button / Review submitted details` | `Onboarding 4 — KYC Details` | **On click → Navigate to → Smart animate (`200ms`, Ease out)** |
| 12 | `Onboarding 5 — Verification Pending` | `Button / Return to homepage` | `Onboarding 1 — Welcome (EN)` | **On click → Navigate to → Dissolve (`200ms`)** |

---

## 5. How to Verify Your Figma File Is Ready to Share

Before copying your Figma link into your assignment submission, run through this 6-point verification checklist:

1. **Page Names Match Exactly:** Confirm the Left Sidebar shows all 6 pages:
   - `01 — Cover & Overview`
   - `02 — Design System`
   - `03 — Homepage Desktop`
   - `04 — Homepage Mobile`
   - `05 — Onboarding`
   - `06 — Hindi Onboarding`
2. **Layers Are Editable (Not Just Flat PNGs):** Double-click any heading (e.g., *"Invest in your future, starting with ₹100."* or *"Your investing journey starts here."*) to confirm the text cursor appears and the font is `Inter` (or `Noto Sans Devanagari` on Page 06).
3. **Mascot Image Renders Cleanly:** Zoom in to `200%` on the Hero card and Onboarding Screen 1/2/5 to confirm the geometric Sprout mascot renders with crisp edges on `#E6F4EA` / `#FFF9F4`.
4. **Test the Interactive Prototype:**
   - Go to **`05 — Onboarding`**, select `Onboarding 1 — Welcome (EN)`, and click the **Present (`▶`)** button in the top-right corner.
   - Click through **Continue → Continue → Send OTP → Use demo OTP → Continue → Submit for verification → Review submitted details** to confirm every transition works smoothly.
5. **Set Public View Permissions (Critical for Evaluators):**
   - Click the blue **`Share`** button in the top-right corner of Figma.
   - Change **Anyone with the link** from *No access / Only invited people* to **`can view`**.
   - Click **`Copy link`**.
6. **Incognito Window Test:**
   - Open a **Private / Incognito browser window** (`Ctrl + Shift + N`), paste your copied Figma URL, and verify that the file opens immediately to `01 — Cover & Overview` without asking the reviewer to request access.
