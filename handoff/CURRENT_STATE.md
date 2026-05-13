# CURRENT_STATE.md

> Přesný snapshot stavu projektu k 13. května 2026.

---

## TL;DR

- **Hlavní výstup:** `Libra - Brand Exploration.html` — interaktivní design canvas
  s artboardy ve 5 sekcích.
- **Stav:** Webové portfolio je v podobě **hi-fi designové předlohy**.
  Není to produkční web — je to vzor, podle kterého Kateřina sama
  postaví reálný web přes Claude Code (GitHub Pages, statické HTML/CSS).
- **CV a motivační dopis:** nezačaly se.

---

## Co aktuálně funguje

### Design canvas (`Libra - Brand Exploration.html`)

Otevřením HTML v prohlížeči se zobrazí **pan/zoom canvas** s 5 sekcemi:

1. **01 · Brand Foundation**
   - `Palette & tokens` — 5 barevných swatchů, ukázka kontrastu, monogram blok
   - `Typography specimen` — kompletní typografická škála (H1 72px → caption 13px)

2. **02 · Hero — varianty**
   - `A · Right motif` ✅ **SCHVÁLENO**
   - `B · Watermark`
   - `C · Editorial split` (s placeholder fotkou)
   - `D · Dark inverse`

3. **03 · Mobile hero**
   - `Hero · 390×844` — mobile-first ohled

4. **04 · Vnitřní sekce**
   - `§ Tři světy` (sekce 02 homepage)
   - `§ Dráha · Timeline` (sekce 03)
   - `§ AI Projekty` (sekce 04)
   - `§ Proč Libra` (sekce 05)
   - `§ Kontakt · Footer` (sekce 06)

5. **05 · Homepage — plná délka**
   - `Homepage · CS` — všech 6 sekcí stacknutých do 1440×5800 px artboardu.
     **Toto je hlavní reference pro implementaci.**

### Tweaks panel

V toolbaru (vpravo dole, zapnout přes přepínač) lze měnit napříč všemi artboardy:

- **Schéma palety** — Modern Czech (default) / Editorial Trust / Duotone / Obsidian
- **Intenzita akcentu** — slider 20–100 %
- **Pár písem** — Caslon · Jakarta · JetBrains (default) / Newsreader · Inter · JetBrains / Source · Source · Plex
- **Motiv tří pilířů** — Trojúhelník (default) / Páteř / Hub & spoke / Most-příhradovina
- **Hustota** — sparse / regular (default) / dense
- **Jazyk** — CS (default) / EN

Stav Tweaks se persistně ukládá do souboru — restart neresetuje.

---

## Co je hotové

- ✅ Brand foundation (paleta, typografie, monogram)
- ✅ 4 varianty hero (A schválena, B/C/D jako alternativy v záloze)
- ✅ Mobile hero
- ✅ Vnitřní sekce: Tři světy, Timeline, AI Projekty, Proč Libra, Kontakt
- ✅ Full-length homepage kompozice
- ✅ Tweaks panel se 6 ovladači
- ✅ CS/EN přepínač s plnou lokalizací obsahu
- ✅ Linkový diagram motiv ve 4 variantách
- ✅ Konzistentní vizuální systém napříč všemi artboardy

## Co je rozpracované

- 🟡 **AI Projekty** — vizuálně hotové, ale popisky projektů (`COPY.cs.projects` a `COPY.en.projects`) jsou **pravděpodobné, ne ověřené**. Kateřina musí zkontrolovat a doplnit reálné URL a popisy.

## Co je pouze navržené, ale ještě neprovedené

- 🔲 **PDF CV** — komponenty ani layout neexistují
- 🔲 **PDF motivační dopis** — komponenty ani layout neexistují
- 🔲 **Style guide jako samostatný artboard** — tokeny jsou definované v kódu, ale není je vidět jako exportovatelnou specifikaci
- 🔲 **og:image** pro LinkedIn sdílení
- 🔲 **Favicon / monogram jako .ico/.svg**
- 🔲 **Reálná foto Kateřiny** — všude placeholder

---

## Co je potřeba zkontrolovat / opravit

| Co                                                | Kde                              | Priorita |
|---------------------------------------------------|----------------------------------|----------|
| Popisky 5 AI projektů + reálné URL                | `artboards.jsx` → `COPY.cs.projects` / `COPY.en.projects` | Vysoká   |
| Telefon `+420 ··· ··· ···`                         | `COPY.cs.contactItems[1]` (a `.en`) | Vysoká   |
| LinkedIn slug `/in/katerina-mlsnova`              | `COPY.cs.contactItems[2]`        | Vysoká   |
| GitHub username `@kmlsnova`                        | `COPY.cs.contactItems[3]`        | Vysoká   |
| Email `katerina@mlsnova.cz`                        | `COPY.cs.contactItems[0]`        | Vysoká   |
| Datum dostupnosti „K dispozici od června 2026"    | `COPY.cs.available`              | Střední  |
| Roky v Timeline (přesné rozpětí 2007–2016?)       | `COPY.cs.timeline[1].year`       | Střední  |
| EN copy (gramatika, idiomy) — projít rodilý mluvčí | `COPY.en.*`                      | Nízká    |

---

## Co NESMÍ být změněno bez výslovného souhlasu

Detailně viz `DO_NOT_CHANGE.md`. Zkráceně:

- Paleta Modern Czech (zelená/malinová/bílá/světle šedá/šedá)
- Pár písem Caslon / Jakarta / JetBrains
- Motiv Trojúhelník · centroid, hustota regular
- Hero varianta A
- Claim „Most mezi právem, jazykem a technologií. Tam, kde se právník potkává s AI."
- Tři pilíře (Právo / Jazyk / Technologie) jako názvy a pořadí
- Číslo 71 vydaných knih (ověřený fakt z briefu)
- 9 let v advokacii / 7 let v redakci

---

## Struktura složek

```
Libra/
├── Libra - Brand Exploration.html      ← HLAVNÍ soubor (otevřít v prohlížeči)
├── app.jsx                              ← Hlavní React komponenta + Tweaks
├── artboards.jsx                        ← Foundation, Hero A/B/C/D, Mobile, Tři Světy + COPY
├── sections.jsx                         ← Timeline, Projekty, Proč Libra, Kontakt, Homepage
├── motifs.jsx                           ← 4 SVG varianty linkového diagramu
├── design-canvas.jsx                    ← Starter component (NEUPRAVOVAT BEZ DŮVODU)
├── tweaks-panel.jsx                     ← Starter component (NEUPRAVOVAT BEZ DŮVODU)
└── handoff/                             ← Tato handoff dokumentace
    ├── PROJECT_CONTEXT.md
    ├── SESSION_SUMMARY.md
    ├── CURRENT_STATE.md
    ├── NEXT_STEPS.md
    ├── FILES_AND_MATERIALS.md
    ├── PROMPT_FOR_NEXT_MODEL.md
    └── DO_NOT_CHANGE.md
```

### Vazby mezi soubory

```
Libra - Brand Exploration.html
  ├─ načte React 18.3.1, ReactDOM, Babel standalone z unpkg.com
  ├─ načte Google Fonts (Caslon, Jakarta, JetBrains + Newsreader, Inter, Source, Plex)
  └─ načte v pořadí:
       design-canvas.jsx   → exportuje window.DesignCanvas, DCSection, DCArtboard
       tweaks-panel.jsx    → exportuje window.TweaksPanel, TweakSelect, atd.
       motifs.jsx          → exportuje window.Motif, MotifTriangle, …
       artboards.jsx       → exportuje window.ArtFoundation, ArtHeroA…D, ArtHeroMobile, ArtThreeWorlds, COPY
       sections.jsx        → exportuje window.ArtTimeline, ArtProjects, ArtWhyLibra, ArtContact, ArtHomepage
       app.jsx             → mountuje <App/> do #root
```

**DŮLEŽITÉ:** `artboards.jsx` se musí načíst **PŘED** `sections.jsx`, protože
`sections.jsx` používá globální `COPY` objekt definovaný v `artboards.jsx`
a komponentu `Nav` / `CTA` ze sdílených helperů.

---

## Známé chyby a slabá místa

| Co                                                            | Závažnost | Poznámka |
|---------------------------------------------------------------|-----------|----------|
| Babel in-browser transformer (warn v console)                 | Nízká     | Očekávané; pro design exploration je to OK, produkční implementace půjde přes Claude Code v reálném buildu. |
| Při switchnutí palety na Obsidian se Hero A statistiky stávají špatně čitelné | Nízká | Obsidian = záložní paleta, není to default. Hero A je optimalizovaná pro Modern Czech. |
| Plnostránkový homepage artboard je 5800 px vysoký — fokus mode v Design Canvas ho neukáže celý | Nízká | Záměrné — slouží jako reference, ne k focus-viewu. Vidět ho lze scrolováním v canvase. |
| AI Projekty „náhledy" jsou abstraktní SVG, ne reálné screenshoty | Záměrné | Brief explicitně zakazuje stock obrázky. Až budou projekty live, lze nahradit screenshoty. |

---

## Persistence stavu

- **Tweaks panel** ukládá svůj stav přes `__edit_mode_set_keys` zprávu →
  `TWEAK_DEFAULTS` v `app.jsx` se přepíše při změně.
- **Design Canvas** persistuje pořadí artboardů, smazané artboardy
  a labely do sidecar souboru.
