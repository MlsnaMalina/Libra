# FILES_AND_MATERIALS.md

> Kde najít všechny soubory, k čemu slouží a kam zasahovat / nezasahovat.

---

## Seznam souborů v projektu

| Soubor                            | Typ        | Účel                                                                   |
|-----------------------------------|------------|------------------------------------------------------------------------|
| `Libra - Brand Exploration.html`  | **Hlavní** | Vstupní HTML — otevřít v prohlížeči k zobrazení canvasu                |
| `app.jsx`                         | **Hlavní** | Hlavní React komponenta + Tweaks panel + definice palet & font párů    |
| `artboards.jsx`                   | **Hlavní** | Foundation, Hero A/B/C/D, Mobile, Tři Světy + sdílený `COPY` objekt    |
| `sections.jsx`                    | **Hlavní** | Timeline, AI Projekty, Proč Libra, Kontakt, plnostránková Homepage     |
| `motifs.jsx`                      | **Hlavní** | 4 SVG varianty linkového diagramu (Triangle, Spine, Hub, Bridge)       |
| `design-canvas.jsx`               | **Starter** | Pan/zoom canvas wrapper — **nezasahovat** bez velmi dobrého důvodu     |
| `tweaks-panel.jsx`                | **Starter** | Tweaks UI shell — **nezasahovat** bez velmi dobrého důvodu             |
| `.design-canvas.state.json`       | **Stav**   | Pozice artboardů, smazané, přejmenované — autogenerované               |
| `handoff/PROJECT_CONTEXT.md`      | **Doc**    | Orientační dokument projektu (TEN čti první)                           |
| `handoff/SESSION_SUMMARY.md`      | **Doc**    | Shrnutí pracovní session 12.–13. května 2026                            |
| `handoff/CURRENT_STATE.md`        | **Doc**    | Snapshot stavu k 13. května 2026                                       |
| `handoff/NEXT_STEPS.md`           | **Doc**    | Prioritizovaný plán pokračování                                        |
| `handoff/FILES_AND_MATERIALS.md`  | **Doc**    | Tento dokument                                                          |
| `handoff/PROMPT_FOR_NEXT_MODEL.md` | **Doc**   | Hotový prompt pro novou AI session                                     |
| `handoff/DO_NOT_CHANGE.md`        | **Doc**    | Seznam neměnných prvků                                                  |

---

## Co je v každém souboru

### `Libra - Brand Exploration.html`

Tenký HTML wrapper:
- `<link>` na Google Fonts (Caslon, Jakarta, JetBrains, Newsreader, Inter, Source, Plex)
- `<script>` na React 18.3.1 + Babel 7.29.0 z unpkg (s integrity hashes — **neměnit verze**)
- `<script type="text/babel">` na všechny JSX soubory v pořadí:
  ```
  design-canvas.jsx → tweaks-panel.jsx → motifs.jsx → artboards.jsx → sections.jsx → app.jsx
  ```

**Co tu měnit:** prakticky nic, leda doplnit metatagy (`og:image`, `description`).

### `app.jsx`

Obsahuje:
- `TWEAK_DEFAULTS` (mezi `/*EDITMODE-BEGIN*/` a `/*EDITMODE-END*/` markery)
- `PALETTES` — definice 4 palet (Modern Czech default + Editorial / Duotone / Obsidian)
- `FONT_PAIRS` — 3 páry písem
- Pomocnou funkci `mix()` pro damping akcentu
- `App` komponentu — sestaví DesignCanvas se 5 sekcemi + Tweaks panel

**Co tu měnit:**
- Hodnoty v `TWEAK_DEFAULTS` (přes Tweaks panel se aktualizují automaticky)
- Hex hodnoty v `PALETTES.modernCzech` jen po souhlasu Kateřiny
- Strukturu canvasu (přidat / odebrat sekce)

### `artboards.jsx`

Obsahuje:
- **`COPY`** — slovník všech textů ve struktuře `{ cs: {…}, en: {…} }`.
  **TOTO je nejdůležitější datový soubor pro obsahové úpravy.**
- `Chrome`, `Nav`, `CTA`, `PhotoSlot` — sdílené UI helpery
- `ArtFoundation` — paleta + tokeny
- `ArtTypography` — typografický specimen
- `ArtHeroA` — schválená hero varianta
- `ArtHeroB` / `ArtHeroC` / `ArtHeroD` — alternativy v záloze
- `ArtHeroMobile` — mobile hero
- `ArtThreeWorlds` — sekce 02 (Tři Světy)

**Co tu měnit:**
- Texty v `COPY` (jakékoli, pokud nemění schválený claim)
- Foto placeholder na reálnou fotku (komponenta `PhotoSlot`)
- Drobné typografické úpravy

**Co tu NEMĚNIT:**
- Strukturu Hero A — je schválená
- Pořadí pilířů (Právo → Jazyk → Technologie)
- Claim text (viz `DO_NOT_CHANGE.md`)

### `sections.jsx`

Obsahuje:
- `SectionHead` — sdílený header pro kicker + title
- `ArtTimeline` — vertikální časová osa (sekce 03)
- `ArtProjects` — grid 3+2 AI projektů (sekce 04)
  - Vnitřní `ProjectPreview` — 5 abstraktních SVG variant
  - Vnitřní `StatusDot` — barevný indikátor live/beta/wip
- `ArtWhyLibra` — 3 důvody se sériovými čísly v akcentu (sekce 05)
- `ArtContact` — dark inverse kontakt + obří monogram (sekce 06)
- `ArtHomepage` — kompozice všech sekcí v 1440×5800
  - Vnitřní `HeroFlow` — flow-layout verze Hero A
  - Vnitřní `ThreeWorldsFlow` — flow-layout verze Tří světů

**Co tu měnit:**
- Změny obsahu pochází z `COPY` v `artboards.jsx`, ne odtud
- Layout / mezery podle potřeby

**Co tu NEMĚNIT:**
- `ProjectPreview` SVG patterny — jsou součástí brand systému

### `motifs.jsx`

Obsahuje 4 SVG komponenty:
- `MotifTriangle` — **schválená výchozí** varianta (3 vrcholy + centroid + subuzly)
- `MotifSpine` — horizontální páteř s pilíři
- `MotifHub` — hub & spoke s monogramem ve středu
- `MotifBridge` — fyzický most s pilíři a příhradovou střechou
- `Motif` — picker komponenta (rozhoduje podle `name` prop)
- `PILLARS` — texty pilířů v CS / EN

**Co tu měnit:**
- Hodnoty barev se předávají z props (neměnit přímo)
- Geometrii Triangle motivu jen po konzultaci

### `design-canvas.jsx` (starter)

967 řádků kódu canvasu. **Neměnit** bez velmi dobrého důvodu — je to
opensource starter component s dotaženými UX detaily (pan, zoom, drag,
focus mode, persistence).

### `tweaks-panel.jsx` (starter)

569 řádků kódu Tweaks UI. **Neměnit** — stejně jako výše.

---

## Externí zdroje (CDN)

| Co               | URL                                                   | Pinned verze | Integrity |
|------------------|-------------------------------------------------------|--------------|-----------|
| React            | `unpkg.com/react@18.3.1/umd/react.development.js`     | 18.3.1       | ✓         |
| ReactDOM         | `unpkg.com/react-dom@18.3.1/umd/react-dom.development.js` | 18.3.1   | ✓         |
| Babel standalone | `unpkg.com/@babel/standalone@7.29.0/babel.min.js`     | 7.29.0       | ✓         |
| Google Fonts     | `fonts.googleapis.com/css2?family=…`                  | — (latest)   | n/a       |

**Pravidlo:** **nikdy** nezvyšovat verze React/Babel bez aktualizace integrity
hashů — způsobí to crash bez chybové hlášky v console.

---

## Materiály, které ještě chybí

Označeno jako **CHYBÍ — DOPLNIT** všude, kde je placeholder:

| Materiál                            | Stav         | Kde doplnit                                    |
|-------------------------------------|--------------|------------------------------------------------|
| Reálné foto Kateřiny                | Chybí        | `PhotoSlot` v `artboards.jsx`                  |
| URL 5 AI projektů                   | Chybí        | `COPY.cs.projects[i]` / `COPY.en.projects[i]`  |
| Telefon                             | Chybí        | `COPY.cs.contactItems[1].v`                    |
| Reálný LinkedIn slug                | Pravděpodobný| Ověřit `COPY.cs.contactItems[2].v`             |
| Reálný GitHub username              | Pravděpodobný| Ověřit `COPY.cs.contactItems[3].v`             |
| og:image (1200×630 PNG)             | Chybí        | Vyrobit po implementaci webu                   |
| Favicon (.svg + .ico)               | Chybí        | Vyrobit z monogramu KM                          |
| Domain `katerinamlsnova.cz`         | Neznámý stav | Ověřit, zda je zaregistrovaná                  |
| GitHub Pages repo                   | Neexistuje   | Založit při implementaci                       |
| Reálný EN překlad (rodilý mluvčí)   | Hrubý        | Po finalizaci CS verze projít s native speaker |

---

## Pravidlo „kam zasahovat"

```
TEXTOVÉ ÚPRAVY      → artboards.jsx (COPY objekt)
BAREVNÉ ÚPRAVY      → app.jsx (PALETTES)
TYPOGRAFICKÉ        → app.jsx (FONT_PAIRS) + Libra - Brand Exploration.html (Google Fonts)
NOVÝ ARTBOARD       → sections.jsx (komponenta) + app.jsx (DCArtboard registrace)
NOVÝ MOTIV          → motifs.jsx (komponenta) + app.jsx (TweakSelect options)
NOVÝ TWEAK          → app.jsx (TWEAK_DEFAULTS + TweaksPanel)
ASSETS              → vytvořit `assets/` složku v root
```

---

## Co existuje pouze v rámci tohoto projektu

⚠️ **Žádný backend, žádná databáze, žádné API.**

⚠️ **Žádné externí závislosti** kromě CDN React/Babel a Google Fonts.

⚠️ **Žádný build step** — vše běží jako in-browser Babel transpilace.
To je úmyslné — usnadňuje to direkt-edit přes Claude Code,
ale pro produkční web by se mělo zkompilovat.
