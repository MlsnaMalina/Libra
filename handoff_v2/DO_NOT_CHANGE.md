# DO_NOT_CHANGE.md

> Seznam prvků, které byly schváleny klientkou nebo plynou z briefu.
> **Neměnit bez výslovného souhlasu Kateřiny.**

---

## SCHVÁLENÉ — neměnit

### Vizuální systém

| Prvek | Hodnota |
|-------|---------|
| Paleta | Modern Czech |
| `--ink` | `#2D5F4F` (zelená) |
| `--accent` | `#8B2C44` (malinová) |
| `--surface` | `#FFFFFF` (bílá) |
| `--paper` | `#F4F4F2` (neutrální off-white, **NIKDY béžová**) |
| `--mute` | `#5A5A5A` |
| Pár písem | Libre Caslon Text · Plus Jakarta Sans · JetBrains Mono |
| Motiv | Trojúhelník · centroid (`PRÁVO` / `JAZYK` / `TECHNOLOGIE`) |
| Hustota motivu | regular (3 hlavní uzly + 1 centroid) |
| Hero varianta | A (motif vpravo, ne foto) |
| Default jazyk | CS |
| Max šířka obsahu | 1180 px |
| Breakpoint mobile | 768 px |

### Obsah a formulace

| Prvek | Hodnota |
|-------|---------|
| Hlavní claim | „Most mezi právem, jazykem a *technologií*. Tam, kde se právník potkává s AI." |
| Tři pilíře (CS) | Právo · Jazyk · Technologie (v tomto pořadí) |
| Tři pilíře (EN) | Law · Language · Technology |
| Hero kicker | „Legal Engineer · Kandidatura" |
| Číslo vydaných knih | **71** |
| Délka v advokacii | **9 let** |
| Počet advokátních kanceláří | **5** |
| Délka v redakci WK | **7 let zaměstnání + 2 roky externí = 9 let s WK celkem** (2017–dosud) |
| Specializace v redakci | IT právo, finanční právo, právo duševního a průmyslového vlastnictví, civilní proces |
| Rok získání Mgr. titulu | 2013 (ZČU) |
| Studium v Izraeli | Global Economy & Law Program, University of Haifa (2013) |
| Jméno | Kateřina Mlsnová |
| Monogram | KM |
| Doména | katerinamlsnova.cz |
| Dostupnost | **K dispozici od července 2026** (NE června) |

### Reálné kontaktní hodnoty

**Tyto hodnoty MUSÍ být všude konzistentní (web, CV, motivační dopis):**

- E-mail: `k.mlsnova@seznam.cz`
- Telefon: `+420 728 069 926`
- LinkedIn: `linkedin.com/in/katerinamlsnova` → `https://www.linkedin.com/in/katerinamlsnova`
- GitHub: `@MlsnaMalina` → `https://github.com/MlsnaMalina`
- Lokalita: Průhonice, Praha-západ
- Adresa (CV): U Parku 280, 252 43 Průhonice
- Git author email pro commity: `k.schmiedtova@seznam.cz`

### Strukturální rozhodnutí webu

- **6 sekcí v pořadí:** Hero · Tři Světy · Dráha · Aktuální projekty · Proč Libra · Kontakt
- **Statický web** (čistý HTML/CSS/vanilla JS) — žádný framework, žádný build step
- **Mobile-first responsivita**
- **CS texty inline v HTML, EN slovník v `main.js`**
- **CS/EN toggle** se ukládá do `localStorage`
- **Bez backend / cookies / trackingu**
- **Bez JS pro základní obsah** (web musí fungovat i s vypnutým JS)
- **Sekce Dráha na bílém pozadí** (NE paper)
- **Vertikální timeline** (rail + kruhové body) v sekci Dráha
- **3 reason-boxy se šipkami →** v sekci Proč Libra (mobil ↓)
- **Sticky header** s monogramem KM + nav + CS/EN toggle
- **Kontakt sekce s dark inverse** (ink background, white text, obří KM Caslon 280 px)

### Iterované texty z této session (neměnit, klientka je dodala)

#### Hero lede
> Tam, kde se právník potkává s AI. Devět let v advokacii, sedm let jako knižní redaktorka ve Wolters Kluwer, dva roky stavění s AI. Ideální propojení pro pozici Legal Engineer.

#### Stat lišta
- 71 vydaných knih
- 09 let v advokacii
- 05 advokátních kanceláří
- 09 let s Wolters Kluwer

#### Tři světy karty (CS)

**01 Právo:** „Mgr. práv (ZČU 2013). Devět let v advokacii. Editorka 71 odborných právních knih — zejména z oblastí: IT právo, finanční právo, právo duševního a průmyslového vlastnictví a civilní proces."

**02 Jazyk:** „Sedm let v redakci Wolters Kluwer ČR jako knižní redaktorka, dva další roky spolupráce s WK jako externí redaktorka. Vidět, kde věta nesedí, kde autoři odkazují na zrušený zákon. Přeložit zákon do něčeho srozumitelného. 71 vydaných odborných knih v právní redakci."

**03 Technologie:** „Neutuchající zájem o technologie, vibe coding. Vlastní web, výukové hry, právní checklisty, kalkulačky. Builder mindset, nejen zájem o AI."

#### Dráha (5 milníků v pořadí)
1. **2005–2008** · Bakalář · Vysoká škola aplikovaného práva
2. **2009–2013** · Magistr · Právnická fakulta ZČU (+ Univ. of Haifa semestr)
3. **2008–2017** · 9 let · Advokacie (5 kanceláří)
4. **2017–2024** · 7 let · Wolters Kluwer ČR
5. **2024–** · OSVČ + AI builder

Texty každého milníku přesně tak, jak jsou v `web/index.html` (`data-i18n="path.m1.desc"` až `path.m5.desc`).

#### Aktuální projekty (5 karet)
1. Osobní web · Portfolio · live
2. Checklisty pro redaktory · Interaktivní tool · live
3. Výukové hry pro děti · Edu · beta
4. Kalkulačka ceny nabízených služeb · Tool · live
5. Prompt knihovna pro právníky · Resource · wip *(titulek vs. popis: nesoulad — nutno potvrdit klientkou, viz NEXT_STEPS N4)*

#### Proč Libra (3 boxy se šipkami)
1. **Znám DNA produktu zevnitř** — 9 let s WK, ASPI zevnitř
2. **Propojení s právem** — 9 let v advokacii, různé pozice a kanceláře
3. **Technologie** — early adopter (Kindle, Google Home, O2 smart hodinky, LLM školení)

### Technické nutnosti

- Google Fonts načítané přes `<link>` v `<head>` (Libre Caslon Text + Plus Jakarta Sans + JetBrains Mono)
- `font-display: swap` pro Google Fonts
- IntersectionObserver threshold 0.15 pro `.fade-in`
- `prefers-reduced-motion` respektován (`.fade-in` má `transition: none` v media query)
- CSS proměnné v `:root` (NEinlinovat hex hodnoty mimo `:root`)

---

## EXPLICITNĚ ODMÍTNUTÉ — nepoužívat

- ❌ Béžová / krémová pozadí (klientka explicitně odmítla)
- ❌ AI-generated stock fotky
- ❌ Křiklavé barvy, gradienty, neonové akcenty
- ❌ Zaoblené ikony, ilustrace lidiček
- ❌ Animace pro animace (jen fade-in při scrollu + jemné hover stavy)
- ❌ Kruhové foto (vždy pravoúhlé)
- ❌ Rok narození (klientce je 40, ale neuvádí)
- ❌ Frameworky a build steps (React/Vue/Next zakázány)
- ❌ Externí JS knihovny (žádné jQuery, žádné GSAP, …)
- ❌ Cookies, tracking, analytics
- ❌ Recreating Wolters Kluwer brand UI
- ❌ Backend / API / databáze (statický web only)
- ❌ Emoji v textu
- ❌ Marketingové bonmoty, prázdné korporátní fráze
- ❌ Datum „K dispozici od června 2026" (správně **července**)
- ❌ E-mail `katerina@mlsnova.cz` (placeholder z ref designu — správně `k.mlsnova@seznam.cz`)
- ❌ LinkedIn `/in/katerina-mlsnova` (placeholder — správně `katerinamlsnova`)
- ❌ GitHub `@kmlsnova` (placeholder — správně `@MlsnaMalina`)

---

## VYŽADUJE POTVRZENÍ PŘED ZMĚNOU

Tyto věci by se měly upravit, ale jen po krátké konzultaci:

- **Titul sekce Dráha** — aktuálně „Třináct let, čtyři kapitoly", ale je 5 milníků od 2005 → návrh „Devatenáct let, *pět kapitol*"
- **Titulek projektu 5** — „Prompt knihovna pro právníky" vs. popis o hře pro Legal Innovation Day. Nesoulad. Nutno potvrdit, co je správně.
- **Outro sekce Proč Libra** — titulek říká „Wolters Kluwer", outro říká „Libra". Drobný nesoulad.
- **Foto v hero** — design ji nepoužívá; pokud má být vidět, kde?
- **OG image kompozice** — jak má vypadat 1200×630 px obrázek pro sdílení?
- **EN překlad** — funkční, ale neprošel rodilým mluvčím
- **Hover stavy** — drobnější mikro-interakce by se hodily
- **Reálná URL projektů** — zatím `href="#"` u všech 5

---

## TECHNICKÉ NEMĚNNÉ

- **Pořadí 6 sekcí** v `index.html` (Hero → Tři Světy → Dráha → Projekty → Proč Libra → Kontakt)
- **CSS custom properties v `:root`** — nepřesouvat na konkrétní selektory
- **`data-i18n` klíče** v HTML — musí odpovídat klíčům v `EN` objektu v `main.js`. Když přidáváš nový `data-i18n`, přidej i odpovídající EN překlad.
- **Funkce `snapshotCS()`** v `main.js` — chytá výchozí CS texty z DOM při loadu. Pokud byste přepisovali CS texty z JS, tahle logika se rozbije.
- **`localStorage` klíč `lang`** — neměnit název, jinak ztratíme persistenci
- **Načítání skriptu `<script src="main.js" defer></script>`** — `defer` je důležitý, jinak se IO observer připojí dřív než DOM ready

---

## SOUHRN: před každou změnou si polož otázku

1. Je to v sekci „SCHVÁLENÉ"? → **NE**.
2. Je to v sekci „EXPLICITNĚ ODMÍTNUTÉ"? → **NE**.
3. Je to v sekci „VYŽADUJE POTVRZENÍ"? → **Zeptej se klientky.**
4. Je to z „TECHNICKÉ NEMĚNNÉ"? → **NE**, nebo jen s velkou opatrností.

Jinak: ano, můžeš.
