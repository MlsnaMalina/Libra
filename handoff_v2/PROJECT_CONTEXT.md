# PROJECT_CONTEXT.md

> Hlavní orientační dokument pro nový model / člověka, který přebírá projekt.
> Cíl: za 5 minut pochopit, o co jde.

---

## Název projektu

**Libra — osobní brand pro pozici Legal Engineer**
Klientka: Kateřina Mlsnová · deadline 17. května 2026.

## O co jde

Vícevrstvá profesní přihláška na pozici **Legal Engineer** ve firmě
**Wolters Kluwer / Libra** (evropská legal-tech firma, AI platforma pro právníky).

Tři výstupy musí ladit dohromady:

1. **Statický web `katerinamlsnova.cz`** — hlavní diferenciátor, „důkaz konceptu" sám o sobě
2. **PDF CV** — povinné minimum
3. **PDF motivační dopis** — most mezi webem a CV

V této i předchozích sessions se pracovalo **primárně na webu**. CV a motivační dopis zatím **neexistují** (kromě staré verze v `Old_kontext/`).

## Cílová skupina

- **Iulia Craciun** — HR recruiterka Wolters Kluwer (nadnárodní prostředí, čte CS i EN)
- **Vedoucí Legal Engineering týmu** — technicky orientovaný právník
- Sekundárně: PM Libry, budoucí klienti z advokacie / in-house

## Hlavní myšlenka (claim)

> **„Most mezi právem, jazykem a technologií. Tam, kde se právník potkává s AI."**

Tři pilíře = vizuální i obsahový základ celého systému:

1. **PRÁVO** — tradice, hloubka, struktura
2. **JAZYK** — preciznost, srozumitelnost
3. **TECHNOLOGIE** — modernost, builder mindset

## Profil autorky (důležité pro tón)

- Mgr. práv (Západočeská univerzita, 2013) + Bc. z VŠ aplikovaného práva
- 9 let v advokacii (2008–2017), celkem 5 advokátních kanceláří
- 7 let knižní redaktorka ve Wolters Kluwer ČR (2017–2024), nyní spolupráce dál — celkem **9 let s WK**
- 71 vydaných odborných právních knih, 4 rukopisy v práci
- Specializace: IT právo, finanční právo, právo duševního a průmyslového vlastnictví, civilní proces
- Od 2024 OSVČ + aktivní AI builder (Claude Code, vibe coding, prompt engineering)
- Early adopter technologií (Kindle, Google Home přes zahraniční adresy, testování smart hodinek pro O2)

**Osobnost:** introvertka, systematická, pečlivá, vizuální typ, cit pro jazyk. Hodnoty: čestnost, slušnost, praktičnost. Nesnáší prázdnou korporátní řeč.

## Schválený vizuální systém (FINAL — neměnit bez souhlasu)

### Paleta — Modern Czech

| Token     | Hex       | Použití                                              |
|-----------|-----------|------------------------------------------------------|
| `--ink`   | `#2D5F4F` | Hlavní text, tlačítko primary, čáry                  |
| `--accent`| `#8B2C44` | Akcent (malinová), kurzíva, čísla, šipky, status     |
| `--surface`| `#FFFFFF`| Hlavní pozadí                                         |
| `--paper` | `#F4F4F2` | Neutrální off-white pro vizuální rozbití (NE béžová) |
| `--mute`  | `#5A5A5A` | Sekundární text, popisky                              |

### Typografie — Caslon · Jakarta · JetBrains

- **Libre Caslon Text** — display, headings, čísla, kontaktní hodnoty (serif)
- **Plus Jakarta Sans** — body, UI, captions (sans-serif)
- **JetBrains Mono** — kickery, metadata, čipy, status, taglines (mono)

Princip: serif = redakční řemeslo, sans = technologická čistota, mono = builder vrstva.

### Vizuální motiv — Trojúhelník · centroid

Linkový diagram se třemi vrcholy (Právo / Jazyk / Technologie) spojenými přes centrální uzel. Hustota „regular" (3 hlavní uzly + 1 centroid). Renderovaný jako inline SVG.

### Layout

- Max šířka obsahu **1180 px**, centrovaná
- Velké editorial nadpisy (H1 ~84 px na desktopu, H2 ~54 px)
- Mobile-first responsivita, breakpoint **768 px**
- Editorial cit — hodně bílého prostoru, jeden akcent na sekci

### Tonalita

Profesionální, ne korporátní. Editorská preciznost, modernost s respektem k tradici. Bez prázdných frází, bez emoji, bez marketingových bonmotů. Kurzíva v accentu se používá max 1× na sekci v emfázi (např. „technologií", „jeden překlad", „čtyři kapitoly").

## Co je výslovně odmítnuto

❌ Béžová / krémová pozadí (paper je neutrální off-white)
❌ AI-generated stock obrázky / ilustrace lidiček
❌ Křiklavé barvy, gradienty, neonové akcenty
❌ Animace pro animace (jen fade-in při scrollu + jemné hover stavy)
❌ Kruhové foto (vždy pravoúhlé)
❌ Frameworky a build steps (žádný React/Vue/Next — čistý statický web)
❌ Rok narození kdekoli v materiálech
❌ Recreating Wolters Kluwer brand UI (žádné kopírování chráněných prvků)

## Klíčové preference uživatele (zachytit pro budoucí sessions)

- Texty v CS, EN jako záloha (CS má vždy prioritu)
- Reálné kontakty: `k.mlsnova@seznam.cz` · `+420 728 069 926` · `linkedin.com/in/katerinamlsnova` · GitHub `@MlsnaMalina`
- Lokalita: **Průhonice, Praha-západ**
- Dostupnost: **K dispozici od července 2026**
- Doména: **katerinamlsnova.cz** (zatím neznámo, jestli je registrovaná)
- Vlastnictví kódu: Kateřina sama deployuje přes Claude Code → GitHub → Vercel (z globální CLAUDE.md)
- Git author email pro commity: `k.schmiedtova@seznam.cz` (Vercel jinak commit odmítne)

## Limity a rizika

- **Foto:** k dispozici jen `images/profil.jpeg`. Web ji aktuálně **nepoužívá** v hero (foto vlevo bylo nahrazeno motifem dle ref designu). Pokud má být foto vidět, je nutno doplnit.
- **Doména a hosting:** žádný deploy zatím neproběhl. `katerinamlsnova.cz` může být zabraná.
- **Projekty:** popisky 5 projektů jsou reálné (klientka je dodala v této session), ale URL všech 5 jsou stále `href="#"`. Před publikací nutno doplnit reálné odkazy.
- **CV PDF + motivační dopis PDF:** odkazy na `files/cv-katerina-mlsnova.pdf` a `files/motivacni-dopis.pdf` jsou v navigaci, hero a patičce — soubory zatím **neexistují**.
- **EN překlad:** hrubý, neprošel rodilým mluvčím.
- **OG image:** meta tag ukazuje na `/images/profil.jpeg` — pro LinkedIn sdílení nutno vyrobit 1200×630 px obrázek.
