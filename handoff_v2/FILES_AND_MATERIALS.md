# FILES_AND_MATERIALS.md

> Kde najít všechny soubory, k čemu slouží a kam zasahovat / nezasahovat.

---

## Mapa projektu

```
Libra/                                       ← pracovní složka (Windows)
│
├── web/                                     ★ PRODUKČNÍ WEB (hlavní výstup)
│   ├── index.html                           Hlavní HTML, 6 sekcí, CS texty inline
│   ├── style.css                            Kompletní CSS design systém
│   ├── main.js                              Vanilla JS: i18n, IO fade-in, smooth scroll, lang toggle
│   ├── images/
│   │   └── profil.jpeg                      Portrétní foto
│   └── ref/                                 Reference HTML z Claude Design (pro debug/srovnání)
│       ├── hero.html                        ← kopie handoff/A _ Right motif.html
│       ├── tri-svety.html                   ← kopie handoff/_ T_i sv_ty.html
│       ├── timeline.html                    ← kopie handoff/_ Dr_ha _ Timeline.html
│       ├── projekty.html                    ← kopie handoff/_ AI Projekty.html
│       ├── proc-libra.html                  ← kopie handoff/_ Pro_ Libra.html
│       └── kontakt.html                     ← kopie handoff/_ Kontakt _ Footer.html
│
├── .claude/
│   └── launch.json                          Dev server config: `npx serve web -l 5173`
│
├── texts/                                   Canonical zdrojové texty (klientka)
│   ├── web-content.md                       Texty webu (záloha; produkční web má vlastní iterované verze)
│   └── cv-content.md                        Texty CV (pro budoucí PDF — N1)
│
├── images/
│   └── profil.jpeg                          Master foto (zdroj kopie v web/images/)
│
├── handoff/                                 ★ Handoff z PŘEDCHOZÍ Claude Design session
│   ├── PROJECT_CONTEXT.md, SESSION_SUMMARY.md, CURRENT_STATE.md, NEXT_STEPS.md,
│   │   FILES_AND_MATERIALS.md, PROMPT_FOR_NEXT_MODEL.md, DO_NOT_CHANGE.md, QUICK_START.md
│   ├── A _ Right motif.html                 6 MB DOM export hero artboardu (1440×900)
│   ├── _ T_i sv_ty.html                     6 MB DOM export Tři světy
│   ├── _ Dr_ha _ Timeline.html              6 MB DOM export Dráha
│   ├── _ AI Projekty.html                   6 MB DOM export Projekty
│   ├── _ Pro_ Libra.html                    6 MB DOM export Proč Libra
│   └── _ Kontakt _ Footer.html              6 MB DOM export Kontakt (dark inverse)
│
├── handoff_v2/                              ★ TATO handoff sada (po této session)
│   ├── PROJECT_CONTEXT.md
│   ├── SESSION_SUMMARY.md
│   ├── CURRENT_STATE.md
│   ├── NEXT_STEPS.md
│   ├── FILES_AND_MATERIALS.md               (tento dokument)
│   ├── PROMPT_FOR_NEXT_MODEL.md
│   └── DO_NOT_CHANGE.md
│
├── Old_kontext/                             Starší materiály o klientce a její práci
│   ├── 01_02_Co_by_AI_o_mne_mela_vedet_podle_AI.pdf
│   ├── 02_Zpusob_prace_a_komunikace.pdf
│   ├── 03_02_Hodnoceni_me_prace.pdf
│   ├── 03_Prace_a_podnikani.pdf
│   ├── 07_AI_vyuziti_a_opakovane_ukoly.pdf
│   ├── 08_Sablony_a_vysledky.pdf
│   ├── 09_Aktualni_projekty.pdf
│   ├── Katerina_Mlsnova_CV_botanicky_ustav.pdf      Staré CV (jiná pozice — Botanický ústav)
│   └── WK_Mlsnova_motivacni_dopis.pdf               Starý motivační dopis (jiná pozice)
│
├── CONTEXT.md                               Starší projektový kontext
├── Inzerat.txt                              Popis pozice Legal Engineer (pro reference)
└── Ikonografika.png                         Vizuální podklad od klientky
```

## Hlavní soubory (sem se zasahuje)

| Soubor | Co obsahuje | Kdy editovat |
|--------|-------------|--------------|
| `web/index.html` | Strukturu, CS texty, data-i18n klíče | Při změnách obsahu nebo struktury |
| `web/style.css` | CSS proměnné, layout, responzivita, animace | Při změnách vizuálu / spacingu |
| `web/main.js` | EN slovník (objekt `EN`), interakce | Při změnách EN překladu nebo chování |
| `web/images/profil.jpeg` | Foto | Pokud má klientka novou verzi fotky |

## Pomocné soubory

| Soubor | Účel |
|--------|------|
| `.claude/launch.json` | Konfigurace dev serveru pro Claude Preview MCP |
| `web/ref/*.html` | Reference design z Claude Design (pro porovnání, neměnit) |

## Zdrojové (input) materiály

| Soubor | Pro co |
|--------|--------|
| `texts/web-content.md` | Záloha textů webu od klientky (canonical text před iteracemi) |
| `texts/cv-content.md` | **Hlavní zdroj** pro tvorbu CV PDF (krok N1) |
| `Old_kontext/WK_Mlsnova_motivacni_dopis.pdf` | Reference tónu pro nový motivační dopis (N2). Obsah je o jiné pozici — nepoužívat doslova. |
| `Old_kontext/01_…_AI_o_mne_mela_vedet_podle_AI.pdf` | Klientčin „AI uživatelský manuál" — užitečné pro pochopení preferencí |
| `Inzerat.txt` | Popis pozice Legal Engineer @ WK Libra (pro motivační dopis a CV) |

## Výstupy / exporty

| Soubor | Stav |
|--------|------|
| `web/index.html` + `style.css` + `main.js` | ✅ Hotové, funkční lokálně |
| `web/files/cv-katerina-mlsnova.pdf` | ❌ **Neexistuje** — třeba vytvořit (N1) |
| `web/files/motivacni-dopis.pdf` | ❌ **Neexistuje** — třeba vytvořit (N2) |
| `web/images/og-image.png` | ❌ **Neexistuje** — třeba vytvořit (N7) |
| `web/favicon.svg` | ❌ **Neexistuje** — třeba vytvořit (N8) |

## Kontaktní údaje a fakta (kanonická)

**Tyto hodnoty jsou ověřené klientkou a musí být všude konzistentní:**

| Co | Hodnota |
|----|---------|
| Jméno | Kateřina Mlsnová |
| Monogram | KM |
| E-mail | k.mlsnova@seznam.cz |
| Telefon | +420 728 069 926 |
| LinkedIn | linkedin.com/in/katerinamlsnova → `https://www.linkedin.com/in/katerinamlsnova` |
| GitHub | @MlsnaMalina → `https://github.com/MlsnaMalina` |
| Lokalita | Průhonice, Praha-západ |
| Domácí adresa (pro CV) | U Parku 280, 252 43 Průhonice |
| Dostupnost | K dispozici od července 2026 |
| Doména | katerinamlsnova.cz |
| Git author email | k.schmiedtova@seznam.cz (pro Vercel commity) |

## Reference designu

Náhledy v `handoff/` (a kopie v `web/ref/`) jsou exporty z Claude Design canvasu — slouží jako **vizuální etalon** pro produkční web. Při změnách designu **konzultovat s těmito náhledy** přes preview:

```js
// V dev konzoli nebo přes mcp__Claude_Preview__preview_eval:
location.href = '/ref/hero.html'  // nebo tri-svety, timeline, projekty, proc-libra, kontakt
```

## Pravidlo „kam zasahovat"

```
OBSAHOVÉ ÚPRAVY (CS)    → web/index.html (přímo texty + data-i18n klíče)
OBSAHOVÉ ÚPRAVY (EN)    → web/main.js (objekt EN, klíče stejné jako data-i18n)
BAREVNÉ ÚPRAVY          → web/style.css (CSS proměnné v :root)
TYPOGRAFIE              → web/style.css (CSS proměnné --serif/--sans/--mono)
                          + web/index.html (Google Fonts <link>)
LAYOUT / SPACING        → web/style.css (per sekce)
INTERAKCE / I18N        → web/main.js
NOVÉ ASSETS             → web/images/ nebo nově web/files/
```

## Chybějící informace

- **Stav domény `katerinamlsnova.cz`** — nikdo neověřil, jestli je registrovaná.
- **GitHub username klientky** — řekla `@MlsnaMalina`, ale není ověřeno, jestli má repo / aktivní profil.
- **Aktuální URL 5 projektů** — všechny mají `href="#"`. Klientka projekty popsala, ale URL nedodala.
- **Foto v hero** — design ji nepoužívá, ale není explicitní rozhodnutí, jestli má/nemá být vidět.
- **OG image** — neexistuje, není definováno, jakou má mít kompozici.
