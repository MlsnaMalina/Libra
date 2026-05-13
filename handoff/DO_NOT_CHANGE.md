# DO_NOT_CHANGE.md

> Seznam prvků, které byly **výslovně schváleny** Kateřinou nebo vyplývají
> z briefu. Neměnit bez výslovného svolení klienta.

---

## SCHVÁLENÉ — neměnit

### Vizuální systém

| Prvek                       | Hodnota                                                |
|-----------------------------|--------------------------------------------------------|
| **Paleta**                  | Modern Czech (zelená/malinová/bílá/světle šedá/šedá)   |
| `ink`                       | `#2D5F4F`                                              |
| `accent`                    | `#8B2C44`                                              |
| `surface`                   | `#FFFFFF`                                              |
| `paper`                     | `#F4F4F2` (neutrální off-white, **ne béžová**)         |
| `mute`                      | `#5A5A5A`                                              |
| **Pár písem**               | Libre Caslon Text · Plus Jakarta Sans · JetBrains Mono |
| **Motiv tří pilířů**        | Trojúhelník · centroid (`MotifTriangle`)                |
| **Hustota motivu**          | regular                                                 |
| **Intenzita akcentu**       | 100 %                                                   |
| **Hero varianta**           | A (right-aligned motif, motiv vpravo)                   |
| **Default jazyk**           | CS                                                      |

### Obsah & formulace

| Prvek                                    | Hodnota                                                              |
|------------------------------------------|----------------------------------------------------------------------|
| **Hlavní claim**                         | „Most mezi právem, jazykem a technologií. Tam, kde se právník potkává s AI." |
| **Tři pilíře — názvy**                   | Právo · Jazyk · Technologie (CS) / Law · Language · Technology (EN)  |
| **Pořadí pilířů**                        | Právo → Jazyk → Technologie (v tomto pořadí)                         |
| **Profesní role**                        | „Legal Engineer · Kandidatura" (CS) / „Legal Engineer · Application" (EN) |
| **Číslo vydaných knih**                  | **71** (ověřený fakt z briefu)                                       |
| **Délka praxe v advokacii**              | **9 let**                                                            |
| **Délka v redakci Wolters Kluwer**       | **7 let** (2017–2024)                                                |
| **Specializace v redakci**               | IT právo, finanční právo, právo duševního vlastnictví, civilní proces |
| **Rok získání titulu**                   | 2013 (Mgr. práv, ZČU)                                                |
| **Jméno**                                | Kateřina Mlsnová                                                     |
| **Monogram**                             | KM                                                                   |
| **Doména**                               | katerinamlsnova.cz                                                   |

### Strukturální rozhodnutí

- **6 sekcí homepage:** Hero · Tři Světy · Dráha (Timeline) · AI Projekty · Proč Libra · Kontakt
- **Pořadí sekcí** musí být zachováno
- **Mobile-first responsivita** — recruiter může koukat na telefonu
- **Statický web na GitHub Pages** — žádný backend, žádné cookie, žádný framework
- **Web musí fungovat bez JavaScriptu pro základní obsah** (přístupnost + SEO)
- **Maximální šířka obsahu 1100–1200 px** (editorial čtení)
- **Tweaks panel jako kontrolní mechanismus** — paleta, fonty, motiv, intenzita, jazyk

### Tonalita & copy

- **Bez prázdných korporátních frází** — Kateřina je „builder, ne prázdná řeč"
- **Bez emoji**, bez marketingových bonmotů
- **Editorská preciznost** — typografie, čistá mřížka, dobrý rytmus
- **Kurzíva v akcentu** se používá maximálně 1× v headline (slovo „technologií" / „technology")

---

## EXPLICITNĚ ODMÍTNUTÉ — nepoužívat

❌ **Béžová / krémová pozadí** (klientka tento odstín explicitně odmítla)
❌ **AI-generated stock obrázky** (brief odmítá)
❌ **Křiklavé barvy, gradienty, neonové akcenty**
❌ **Zaoblené ikony, ilustrace lidiček** (pseudo-startupový vizuál)
❌ **Ruční SVG ilustrace složitější než geometrické tvary**
❌ **Animace pro animace** — jen smysluplné hover stavy a fade-iny při scrollu
❌ **Kruhové foto** — vždy pravoúhlé (4:5 nebo 3:4)
❌ **Recreating Wolters Kluwer brand UI** — žádné kopírování chráněných prvků,
   pouze „vědomý dialog" přes podobný editorial cit
❌ **Rok narození** v jakémkoli materiálu (Kateřina je 40 let, ale nechce uvádět)
❌ **Frameworky a build steps** v produkčním webu (React je jen v design canvas)
❌ **Zvyšování verzí React / Babel** bez aktualizace integrity hashů
   (způsobí silent crash)

---

## VYŽADUJE POTVRZENÍ PŘED ZMĚNOU

Tyto věci by **mohly** být přiměřeně upraveny, ale jen po krátké konzultaci:

- **Drobné typografické úpravy** (font-size scale, line-height)
- **Mezery a paddings** v sekcích
- **Status pill „K dispozici od června 2026"** — datum k ověření
- **Stat řádek pod Hero** — 4 čísla (71 / 9 / 4 / 2) by se daly přerovnat
- **AI projekty 1–5** — pokud má Kateřina lepší / aktuálnější projekty,
  je vhodné je vyměnit (ale jen po ověření)
- **Pořadí milníků v Timeline** — vázáno na životopis, ale formulace
  jednotlivých textů lze upravit
- **Hover stavy a mikro-interakce** — ve finálním webu, pokud jsou jemné a smysluplné
- **Foto Kateřiny** — placeholder se MUSÍ nahradit, otázka je jen jakou fotkou
- **Alternativní hero varianty (B, C, D)** — jsou v záloze, ale schválená je A;
  pokud se klientka rozhodne vyzkoušet jinou, je to možné

---

## ALTERNATIVY ZACHOVAT JAKO ZÁLOHU

Tyto varianty **NEsmazat**, mohou se hodit:

- Hero varianty **B, C, D** v `artboards.jsx`
- Palety **Editorial Trust**, **Duotone**, **Obsidian** v `app.jsx`
- Páry písem **Newsreader / Inter / JetBrains** a **Source / Source / Plex**
- Motivy **Spine**, **Hub & Spoke**, **Bridge** v `motifs.jsx`

Důvod: pokud se Kateřina rozhodne směr otočit, je rychlejší to přepnout
v Tweaks, než znovu navrhovat.

---

## TECHNICKÉ NEMĚNNÉ

- **Pořadí načítání skriptů** v HTML:
  ```
  design-canvas → tweaks-panel → motifs → artboards → sections → app
  ```
  `sections.jsx` závisí na `COPY` z `artboards.jsx`. Změna pořadí → crash.

- **Marker bloku `TWEAK_DEFAULTS`:**
  ```javascript
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{ … }/*EDITMODE-END*/;
  ```
  Tyto komentáře jsou nutné pro persistenci Tweaks stavu. Nemazat.

- **`Object.assign(window, { … })`** na konci každého JSX souboru —
  bez něj komponenty nebudou viditelné mezi soubory (Babel scope isolation).

- **Style objekty s unikátními názvy** v komponentech — nikdy nepojmenovávat
  `const styles = { … }`, vždy specifický název (např. `terminalStyles`).
  Tohle už je dodrženo, ale při přidávání nových komponent na to dávat pozor.

---

## SOUHRN: před každou změnou si polož otázku

1. Je to v sekci „SCHVÁLENÉ"? → **NE**.
2. Je to v sekci „EXPLICITNĚ ODMÍTNUTÉ"? → **NE**.
3. Je to v sekci „VYŽADUJE POTVRZENÍ"? → **Zeptej se klientky.**
4. Je to z „TECHNICKÉ NEMĚNNÉ"? → **NE**, nebo s velkou opatrností.

Jinak: ano, můžeš to upravit.
