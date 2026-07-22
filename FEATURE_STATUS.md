# TemplateFlow Feature Status Tracker

Last updated: 2026-07-22

## Version snapshot

- App version (UI): `v1.0100`
- Package version (`package.json`): `0.1.0`
- Track status with:
  - `Done` = working in current app
  - `Partial` = some parts exist, not complete
  - `Not Yet` = not implemented

## Feature version roadmap (one feature per version)

| Version | Feature area |
|---|---|
| v1.0100 | Universal template sources |
| v1.0200 | Blank Canvas |
| v1.0300 | Image support |
| v1.0400 | Drawing tools / objects |
| v1.0500 | Typography |
| v1.0600 | Variable binding |
| v1.0700 | Template package (.printtpl) |
| v1.0800 | Template gallery |
| v1.0900 | Clipboard and history |
| v1.1000 | Layer panel (Figma/Canva style) |
| v1.1100 | AI-ready architecture |
| v1.1200 | Local OCR preparation |
| v1.1300 | Smart mapping |
| v1.1400 | UX flow (Wizard) |
| v1.1500 | Performance and deployment |
| v1.1600 | Code quality / architecture |

## 1) Universal template sources (Target version: v1.0100)

| Feature | Status | Notes |
|---|---|---|
| PDF source | Done | Existing core flow is PDF-based. |
| JPG source | Done | Upload and crop flow now supported as template source. |
| PNG source | Done | Upload and crop flow now supported as template source. |
| SVG source | Done | Upload and crop flow now supported as template source. |
| Blank canvas source | Not Yet | No create-from-scratch canvas flow yet. |
| Common source interface (PDF/Image/Blank) | Partial | PDF and image now share crop flow path; blank source not added yet. |

## 2) Blank Canvas (Target version: v1.0200)

| Feature | Status | Notes |
|---|---|---|
| Preset sizes (A3, A4, A5, Letter, Legal, Business Card) | Partial | A3/A4 only in print layout, not blank editor source. |
| Custom width/height | Not Yet | No custom canvas source size UI. |
| Background color | Partial | Variable box background exists, canvas background does not. |
| Background image | Partial | Crop preview image exists from PDF crop, not blank canvas bg control. |
| Zoom | Partial | PDF designer zoom exists. |
| Pan | Not Yet | No pan tool for editor/canvas. |
| Rulers | Not Yet | Not implemented. |
| Guides | Not Yet | Not implemented. |
| Grid | Not Yet | Not implemented. |
| Snap to grid | Not Yet | Not implemented. |

## 3) Image support (Target version: v1.0300)

| Feature | Status | Notes |
|---|---|---|
| Upload image (JPG/PNG/SVG/WebP) | Done | Uploader accepts JPG/PNG/SVG/WebP as template sources. |
| Drag and drop image | Not Yet | No drop-zone image import flow. |
| Paste image from clipboard (Ctrl+V) | Not Yet | No clipboard image paste handler. |
| Set image as background | Partial | Image source is rendered as crop canvas background. |
| Set image as editable object | Not Yet | No image object type in object model. |

## 4) Drawing tools / objects (Target version: v1.0400)

| Feature | Status | Notes |
|---|---|---|
| Text object | Partial | Variable text boxes act like text fields. |
| Rectangle object | Not Yet | No standalone rectangle object type. |
| Circle object | Not Yet | Not implemented. |
| Line object | Not Yet | Not implemented. |
| Image object | Not Yet | Not implemented. |
| QR code object | Not Yet | Not implemented. |
| Barcode object | Not Yet | Not implemented. |
| Variable text object | Done | Core feature in designer + mapping + export. |
| Move object | Partial | Variable boxes can move. |
| Resize object | Partial | Variable boxes can resize (`se` handle). |
| Rotate object | Not Yet | Not implemented. |
| Duplicate object | Partial | Variable duplicate exists. |
| Delete object | Partial | Variable delete exists. |
| Lock object | Not Yet | Not implemented. |
| Layer order per object | Not Yet | Not implemented. |

## 5) Typography (Target version: v1.0500)

| Feature | Status | Notes |
|---|---|---|
| Local system fonts | Not Yet | Export currently uses bundled Noto fonts. |
| Upload TTF | Not Yet | Not implemented. |
| Upload OTF | Not Yet | Not implemented. |
| Google Fonts ready contract | Not Yet | No font provider interface yet. |
| Font family | Partial | `fontFamily` exists in style model but no UI and export uses fixed fonts. |
| Font size | Done | Editable and rendered. |
| Bold | Done | Editable and rendered. |
| Italic | Not Yet | Not implemented. |
| Underline | Not Yet | Not implemented. |
| Color | Done | Editable and rendered. |
| Opacity | Not Yet | Not implemented. |
| Alignment | Done | Horizontal + vertical align exists. |
| Letter spacing | Not Yet | Not implemented. |
| Line spacing | Not Yet | Not implemented. |

## 6) Variable binding (Target version: v1.0600)

| Feature | Status | Notes |
|---|---|---|
| CSV datasource | Done | Upload + parse + mapping + export. |
| Excel datasource | Not Yet | Not implemented. |
| JSON datasource | Not Yet | Not implemented. |
| API datasource | Not Yet | Not implemented. |
| Manual input datasource | Not Yet | Not implemented as datasource mode. |
| Date format transform | Partial | Built-in date mapping functions exist. |
| Currency format transform | Not Yet | Not implemented. |
| Uppercase/lowercase transform | Not Yet | Not implemented. |
| Prefix/suffix transform | Not Yet | Not implemented. |

## 7) Template package (.printtpl) (Target version: v1.0700)

| Feature | Status | Notes |
|---|---|---|
| Export/import `.printtpl` | Done | JSON v1 package works today. |
| `manifest.json` in package | Not Yet | No multi-file package structure yet. |
| `canvas.json` | Not Yet | Not implemented. |
| `datasources.json` | Not Yet | Not implemented. |
| `metadata.json` | Not Yet | Not implemented. |
| `preview.png` | Not Yet | Not implemented. |
| `fonts/` | Not Yet | Not implemented. |
| `images/` | Not Yet | Not implemented. |
| `settings` bundle | Not Yet | Not implemented. |
| Cross-browser/device portability spec for v2 | Partial | JSON structure is portable, but no formal v2 asset package yet. |

## 8) Template gallery (Target version: v1.0800)

| Feature | Status | Notes |
|---|---|---|
| Local gallery page | Partial | Template library list exists. |
| Thumbnail | Not Yet | No thumbnail generation/display. |
| Title | Done | Template names present/editable. |
| Last modified | Not Yet | Not shown in gallery UI. |
| Tags | Not Yet | Not implemented. |
| Favorite | Not Yet | Not implemented. |
| Search | Not Yet | Not implemented. |
| Sorting | Not Yet | Not implemented. |

## 9) Clipboard and history (Target version: v1.0900)

| Feature | Status | Notes |
|---|---|---|
| Ctrl+C | Not Yet | Not implemented. |
| Ctrl+V | Not Yet | Not implemented. |
| Ctrl+D | Not Yet | Not implemented as keyboard shortcut. |
| Delete key | Not Yet | Button-based delete exists; keyboard delete not wired. |
| Undo | Not Yet | Not implemented. |
| Redo | Not Yet | Not implemented. |

## 10) Layer panel (Figma/Canva style) (Target version: v1.1000)

| Feature | Status | Notes |
|---|---|---|
| Layer panel UI | Not Yet | Variable list is not a layer panel. |
| Hide layer | Not Yet | Not implemented. |
| Lock layer | Not Yet | Not implemented. |
| Rename layer | Partial | Variable display name editable. |
| Drag reorder layers | Not Yet | Not implemented. |

## 11) AI-ready architecture (Target version: v1.1100)

| Feature | Status | Notes |
|---|---|---|
| OCR service interface | Not Yet | Not implemented. |
| Auto mapping interface abstraction | Partial | Has `autoMapping()` but not pluggable interface yet. |
| Auto alignment interface | Not Yet | Not implemented. |
| Layout suggestion interface | Not Yet | Not implemented. |
| Translation service interface | Not Yet | Not implemented (UI i18n exists, not AI service contract). |
| Cloud AI disabled / offline-first | Done | Current app is browser-only and local. |

## 12) Local OCR preparation (Target version: v1.1200)

| Feature | Status | Notes |
|---|---|---|
| OCR-ready module boundary | Not Yet | Not implemented. |
| Worker-ready OCR pipeline placeholders | Not Yet | Not implemented. |
| Image -> OCR -> editable text workflow shell | Not Yet | Not implemented. |

## 13) Smart mapping (Target version: v1.1300)

| Feature | Status | Notes |
|---|---|---|
| Exact match | Done | Existing auto mapping matches exact variable key to header. |
| Ignore case | Not Yet | Not implemented. |
| Ignore spaces | Not Yet | Not implemented. |
| Ignore underscore | Not Yet | Not implemented. |
| Fuzzy similarity | Not Yet | Not implemented. |
| Shared interface for future AI mapping | Not Yet | Not implemented. |

## 14) UX flow (Wizard) (Target version: v1.1400)

| Feature | Status | Notes |
|---|---|---|
| Step 1 Choose template source | Partial | Setup and flow bar exist but PDF-only source. |
| Step 2 Import data | Done | CSV upload + selection implemented. |
| Step 3 Auto mapping | Partial | Basic auto mapping exists, no advanced rule strategy yet. |
| Step 4 Preview | Done | Mapping and print previews exist. |
| Step 5 Generate | Done | Generate PDF and open/download supported. |
| Full wizard UX replacement | Partial | Flow UI exists, not yet full guided wizard for multi-source. |

## 15) Performance and deployment (Target version: v1.1500)

| Feature | Status | Notes |
|---|---|---|
| Offline-first | Done | Local browser processing and storage. |
| No backend | Done | Static frontend app. |
| No user data upload | Done | No remote API calls for user template/data. |
| Lazy-load heavy modules | Not Yet | PDF libs loaded in main bundle currently. |
| Web Worker prep for OCR | Not Yet | Not implemented. |
| GitHub Pages compatibility | Done | Vite static build + pages workflow documented. |

## 16) Code quality / architecture (Target version: v1.1600)

| Feature | Status | Notes |
|---|---|---|
| Canvas engine separated | Not Yet | Logic mostly in `src/main.jsx`. |
| Object model separated | Not Yet | Variable model embedded in page logic. |
| Template engine separated | Partial | Export generation exists but not modularized as an engine layer. |
| Data binding separated | Partial | Mapping helpers exist but not layered as module contracts. |
| Importers/exporters separated | Partial | Import/export functions exist, but in monolithic file. |
| Future AI services separated | Not Yet | Not implemented. |
| Source-agnostic editor interface | Not Yet | Current model is tightly PDF-centric. |

## Notes for next version planning

- Keep this file updated each release.
- One feature area is assigned to one base version, starting at v1.0100.
- Patch versions within the same feature track use the same hundred bucket.
- Example: Universal template sources uses v1.0101, v1.0102, v1.0103 for fixes/improvements.
- Current active target: v1.0100 (Universal template sources).
- v1.0100 progress update: PDF + image (JPG/PNG/SVG/WebP) source upload and crop are implemented.
