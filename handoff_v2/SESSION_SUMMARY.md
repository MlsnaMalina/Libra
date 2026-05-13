# SESSION_SUMMARY.md

> Datum: **13. května 2026**
> Cíl session: postavit produkční statický web z designové předlohy + doladit obsah.

---

## Vstupní stav

- V `Libra/` byly handoff dokumenty z předchozí Claude Design session (`handoff/`) a 6 HTML exportů designových artboardů (`handoff/A _ Right motif.html`, `_ T_i sv_ty.html`, atd.)
- Texty webu v `texts/web-content.md`, texty CV v `texts/cv-content.md`
- Foto: `images/profil.jpeg`
- **Žádný JSX/React kód designu v projektu nebyl** (handoff dokumenty se na něj odkazují, ale soubory `artboards.jsx`, `sections.jsx`, `app.jsx` v repu nejsou — jen HTML exporty)

## Původní zadání

Uživatelka prošla 4 úkoly:
1. Opravit reálná data v `artboards.jsx` (kontakty, dostupnost) — **nešlo provést**, soubor neexistuje
2. Doplnit fotku v `PhotoSlot` v `artboards.jsx` — **nešlo provést**, soubor neexistuje
3. Postavit produkční statický web ve složce `web/` (HTML/CSS/JS, mobile-first, CS/EN, IntersectionObserver fade-in, semantické HTML, 6 sekcí)
4. Verifikace

## Co jsem během session udělala

### 1. První verze webu

Postavena podle `texts/web-content.md`:
- `web/index.html` se 6 sekcemi (Hero · Tři světy · Cesta · Projekty · Proč Libra · Kontakt)
- `web/style.css` s CSS proměnnými + mobile-first
- `web/main.js` (vanilla JS, IntersectionObserver, CS/EN toggle, smooth scroll, hamburger menu)
- `web/images/profil.jpeg` zkopírováno

### 2. Dev server

- Vytvořeno `.claude/launch.json`
- První pokus s `python -m http.server` selhal (Python na stroji není)
- Přepnuto na `npx serve web -l 5173` — funguje, Node 24.14.1
- Server běží na portu 5173

### 3. Realignment podle designových náhledů

Uživatelka řekla „výsledek se mi nelíbí, stáhla jsem si náhledy ze sessions s Claude Design, drž se jich víc". 6 HTML exportů v `handoff/` byly 6 MB DOM dumpy s inline CSS — nečitelné textově.

**Řešení:** zkopírovala jsem HTML do `web/ref/` (servable), pak přes `mcp__Claude_Preview__preview_eval` extrahovala strukturovaný design data per sekce (text + bounding box + computed styles). Tím jsem získala kompletní mapping typografie / barev / layout / copy ze schválené designové předlohy.

### 4. Druhá verze webu (kompletní rewrite)

Přepsala jsem `index.html`, `style.css`, `main.js` aby seděly s ref designem:

- Velké editorial nadpisy (H1 84 px Caslon, H2 ~54 px)
- „Most mezi právem, jazykem a *technologií*." s italic+accent emfázou na posledním slově
- Kickery jako „02 — TŘI SVĚTY" mono uppercase accent
- Stat lišta s leading-zero accent na první číslici (`7`1, `0`9, `0`5, `0`9)
- Tři Světy: editorial sloupce bez kartových boxů, jen border-top + tagy
- Dráha: vertikální timeline s kruhovými body na svislé ose
- Projekty: meta řádek (`01 · Portfolio · live`) + accentové status pilulky
- Proč Libra: 3 boxy se šipkami →
- Kontakt: ink background, italic 104 px „Pojďme si promluvit.", obří KM monogram

### 5. Iterace na obsahu (uživatelka postupně dodávala)

| Sekce | Změny |
|-------|-------|
| Hero | Lede přepsáno: „Tam, kde se právník potkává s AI. Devět let v advokacii, sedm let jako knižní redaktorka ve Wolters Kluwer, dva roky stavění s AI. Ideální propojení pro pozici Legal Engineer." |
| Hero stats | `04 specializace` → `05 advokátních kanceláří`, `02 roky s Claude Code` → `09 let s Wolters Kluwer` |
| Hero motif | Odebrán popisek „Fig. 01 — Tři pilíře, jeden uzel" |
| Tři světy | Všechny 3 karty přepsané delším a přesnějším textem |
| Dráha | Z 4 milníků na **5**, přidány Bc. + Mgr. samostatně, advokacie sloučená do 2008–2017. Pozadí změněno z paper na surface. Layout překlopen do **vertikální timeline** s rail + kruhové body. |
| Projekty | Nadpis sekce „Co stavím každý měsíc" → **„Aktuální projekty"**. Všech 5 titulků + popisů přepsáno (Osobní web, Checklisty pro redaktory, Výukové hry pro děti, Kalkulačka ceny nabízených služeb, hra pro Legal Innovation Day). |
| Proč Libra | 3 reasons přebaleny do **boxů s šipkami →** mezi nimi. R1 přepsán (9 let s WK, ASPI). R2 přejmenován z „Most není metafora" na **„Propojení s právem"**. R3 přejmenován ze „Stavím, ne jen mluvím" na **„Technologie"** s long copy o early adopter zkušenostech (Kindle, Google Home, O2 smart hodinky). |
| Advokacie | „Od malých tvořených" → „Od malých kanceláří tvořených" |

### 6. Kontaktní údaje

Doplněny **reálné hodnoty** (klientka je dodala v úvodu prompt):
- e-mail `k.mlsnova@seznam.cz`
- tel `+420 728 069 926`
- LinkedIn `linkedin.com/in/katerinamlsnova`
- GitHub `@MlsnaMalina`
- dostupnost „K dispozici od **července** 2026" (ne června jak v ref)

## Klíčová rozhodnutí

- **Texty v ref designu vs. `web-content.md`** — ref texty mají prioritu (kratší, redakčně lepší), `web-content.md` jen jako záloha
- **`artboards.jsx` neexistuje** — pominul jsem Úkoly 1 a 2, řekl jsem to nahlas
- **Žádný framework, žádný build step** — čistý HTML/CSS/vanilla JS dle požadavku
- **Dev server přes `npx serve`** (Node), ne Python
- **EN slovník v `main.js`** jako fallback objekt, CS je v HTML

## Problémy a jejich řešení

| Problém | Řešení |
|---------|--------|
| `artboards.jsx` v repu neexistuje | Otevřeně řečeno, úkol přeskočen |
| Python pro dev server není k dispozici | Přepnuto na `npx serve` |
| Ref HTML soubory jsou 6 MB inline-style dumpy, nečitelné textově | Zkopírovány do `web/ref/`, načteny v preview, design data extrahována přes `preview_eval` walker |
| `preview_screenshot` timeoutuje (těžký DOM) | Verifikace přes `preview_inspect` na konkrétní selektory |

## Co zůstalo otevřené

1. **CV PDF** — neexistuje, odkaz vede do 404
2. **Motivační dopis PDF** — neexistuje, odkaz v patičce vede do 404 (stará verze je v `Old_kontext/WK_Mlsnova_motivacni_dopis.pdf`)
3. **GitHub repo + deploy** — web běží jen lokálně přes `npx serve`
4. **Doména `katerinamlsnova.cz`** — neznámo, jestli registrovaná
5. **OG image** (1200×630 PNG)
6. **Favicon** (`favicon.svg` / `.ico`)
7. **Reálné URL projektů** — všech 5 karet má `href="#"`
8. **EN překlad** — neprošel rodilým mluvčím
9. **Section title v Proč Libra** — „Tři důvody, proč přesně Wolters Kluwer." pasuje, ale outro mluví o Libra obecně; lze sjednotit
10. **Title v Dráze** — „Třináct let, čtyři kapitoly", ale teď je 5 milníků (2005–) — sjednotit
