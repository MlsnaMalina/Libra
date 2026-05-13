# CURRENT_STATE.md

> Snapshot stavu projektu k **13. května 2026** po této session.

---

## TL;DR

- **Hlavní výstup:** produkční statický web ve složce `web/` (HTML/CSS/vanilla JS)
- **Stav:** vizuálně i obsahově sedí s designovou předlohou z Claude Design + reálný obsah dodaný klientkou v této session
- **Hostuje:** lokálně přes `npx serve web -l 5173` (port 5173). **Žádný production deploy.**
- **CV PDF a motivační dopis PDF:** **neexistují.**

## Struktura projektu

```
Libra/
├── .claude/
│   └── launch.json                  # dev server config (npx serve)
├── CONTEXT.md                        # starý projektový kontext (před touto session)
├── Ikonografika.png                  # podklad
├── Inzerat.txt                       # popis pozice
├── Old_kontext/                      # starší materiály (CV, motivační dopis, profily)
│   ├── 01_02_Co_by_AI_o_mne_mela_vedet_podle_AI.pdf
│   ├── 02_Zpusob_prace_a_komunikace.pdf
│   ├── 03_02_Hodnoceni_me_prace.pdf
│   ├── 03_Prace_a_podnikani.pdf
│   ├── 07_AI_vyuziti_a_opakovane_ukoly.pdf
│   ├── 08_Sablony_a_vysledky.pdf
│   ├── 09_Aktualni_projekty.pdf
│   ├── Katerina_Mlsnova_CV_botanicky_ustav.pdf   # staré CV (jiná pozice)
│   └── WK_Mlsnova_motivacni_dopis.pdf            # starý motivační dopis (jiná pozice)
├── handoff/                          # ★ handoff z PŘEDCHOZÍ session (Claude Design)
│   ├── PROJECT_CONTEXT.md / SESSION_SUMMARY.md / atd.
│   ├── A _ Right motif.html          # 6 MB DOM export hero
│   ├── _ T_i sv_ty.html              # 6 MB DOM export Tři světy
│   ├── _ Dr_ha _ Timeline.html       # ...
│   ├── _ AI Projekty.html
│   ├── _ Pro_ Libra.html
│   └── _ Kontakt _ Footer.html
├── handoff_v2/                       # ★ tato handoff sada (aktuální)
├── images/
│   └── profil.jpeg                   # portrétní foto (4:5)
├── texts/
│   ├── web-content.md                # canonical text webu (klientka)
│   └── cv-content.md                 # canonical text CV (klientka)
└── web/                              # ★ PRODUKČNÍ WEB (hlavní výstup)
    ├── index.html
    ├── style.css
    ├── main.js
    ├── images/
    │   └── profil.jpeg
    └── ref/                          # kopie HTML předloh z handoff/ (pro debug/srovnání)
        ├── hero.html
        ├── tri-svety.html
        ├── timeline.html
        ├── projekty.html
        ├── proc-libra.html
        └── kontakt.html
```

## Co aktuálně funguje

### Web (`web/index.html`)

Otevřením v prohlížeči (nebo přes `npx serve web -l 5173`) se zobrazí kompletní 6-sekcová homepage:

1. **Hero** — sticky header s monogramem KM + nav + CS/EN toggle. Tagline „Most mezi právem, jazykem a *technologií*." (84 px Caslon, italic+accent emfáza). Lede o 9+7+2 letech. 2 CTA. Inline SVG triangle motif vpravo (Právo / Jazyk / Technologie + centroid). Stat lišta: 71 vydaných knih / 09 let v advokacii / 05 advokátních kanceláří / 09 let s Wolters Kluwer (leading zero accent).
2. **Tři světy** — kicker „02 — Tři světy", H2 „Tři světy, *jeden překlad*". 3 sloupce s číslem + názvem (Právo / Jazyk / Technologie), body textem, mono tagy.
3. **Dráha** — kicker „03 — Dráha", H2 „Třináct let, čtyři kapitoly" (POZOR: titul ještě nereflektuje 5 milníků). **Vertikální timeline** s left rail + kruhové body. 5 milníků: Bc. 2005–2008 / Mgr. 2009–2013 / Advokacie 2008–2017 / WK ČR 2017–2024 / OSVČ 2024–. Bílé pozadí.
4. **Aktuální projekty** — kicker „04 — AI Projekty". 5 karet s meta řádkem (NUM · CATEGORY + status pilulka): Osobní web · Checklisty pro redaktory · Výukové hry pro děti · Kalkulačka ceny nabízených služeb · Prompt knihovna pro právníky. Všechny `href="#"`.
5. **Proč Libra** — kicker „05 — Proč Libra", H2 „Tři důvody, *proč přesně Wolters Kluwer.*". **3 boxy se šipkami →** (na mobilu ↓): Znám DNA produktu zevnitř → Propojení s právem → Technologie. Pod tím outro v serif.
6. **Kontakt** (footer) — kicker „06 — Kontakt" v accent, H2 italic 104 px „*Pojďme si promluvit.*". Ink background s bílým textem. 4 řádky kontaktu (e-mail / telefon / LinkedIn / GitHub) s reálnými hodnotami. Obří KM monogram (Caslon 280 px) v rohu na 7 % opacity. Patička s metadaty.

### Interakce

- Sticky header s blur (`backdrop-filter`)
- Smooth scroll na anchor odkazy
- CS/EN přepínač — CS je v HTML, EN slovník v `main.js`. Volba se ukládá do `localStorage`.
- IntersectionObserver fade-in (threshold 0.15) na všech `.fade-in` prvcích
- Hover stavy: nav linky (ink → accent), tlačítka, projektové karty (lift + accent border), reason-boxy
- Hamburger menu pod 768 px

### Responzivita

- Desktop ≥ 1080 px: plný layout
- 1080 → 960 px: timeline `tl-when` se zmenší
- < 960 px: 3-sloupce → 1 sloupec (worlds, reasons), projekty 3 → 2 sloupce
- < 768 px (mobile): hamburger, motif nad textem, stats 2×2, projekty 1 sloupec, reasons stack se šipkou ↓

### Dev server

- `.claude/launch.json` definuje server `web (npx serve)` na portu 5173
- Server běží přes `npx -y serve web -l 5173` (vyžaduje Node, máme 24.14.1)

## Co je hotové

- ✅ HTML struktura všech 6 sekcí
- ✅ Kompletní CSS design systém (CSS custom properties, mobile-first)
- ✅ Inline SVG motif (trojúhelník + centroid)
- ✅ Statistická lišta s accent leading zero
- ✅ Vertikální timeline s railou a kruhy
- ✅ Boxové „Proč Libra" se šipkami
- ✅ Dark inverse kontakt sekce s obřím KM monogramem
- ✅ Reálné kontaktní údaje
- ✅ CS/EN přepínač s EN slovníkem
- ✅ IntersectionObserver fade-in animace
- ✅ Smooth scroll, hamburger menu, lang persistence
- ✅ Meta tagy (title, description, OG, canonical)
- ✅ Google Fonts (Libre Caslon Text · Plus Jakarta Sans · JetBrains Mono)

## Co je rozpracované / k doladění

- 🟡 **Title sekce Dráha** — „Třináct let, čtyři kapitoly" → měl by být „Devatenáct let, *pět kapitol*" (5 milníků 2005–)
- 🟡 **EN překlad** — funguje, ale nejsou hotové všechny edge cases (`accent-em` ve title se přeloží jako text, ale italic emfáza se zachovává; nezkontroloval rodilý mluvčí)
- 🟡 **Projekt 5 titulek** — „Prompt knihovna pro právníky" nesedí s novým popisem (hra pro Legal Innovation Day). Klientka řekla „s textem" — titulek nezměnila. Nutno potvrdit.

## Co neexistuje / chybí

- 🔲 **`web/files/cv-katerina-mlsnova.pdf`** — odkazováno z navigace, hero a footeru. **404.**
- 🔲 **`web/files/motivacni-dopis.pdf`** — odkazováno z footeru. **404.**
- 🔲 **OG image** — `<meta property="og:image" content="/images/profil.jpeg">` ukazuje na portrét, který nemá poměr 1.91:1
- 🔲 **Favicon** — žádný `<link rel="icon">`
- 🔲 **Reálné URL 5 projektů** — všech 5 má `href="#"`
- 🔲 **Foto v hero** — design dle ref má motif vpravo, foto se v hero NEPOUŽÍVÁ (jen v `web/images/`). Pokud má být foto v hero, je nutné explicitně dohodnout
- 🔲 **GitHub repo** — neexistuje
- 🔲 **Production deploy (Vercel / GitHub Pages)** — neproběhl
- 🔲 **Doména `katerinamlsnova.cz`** — neznámý stav registrace

## Známé chyby / slabá místa

| Co | Závažnost | Poznámka |
|----|-----------|----------|
| `preview_screenshot` MCP timeoutuje na production webu | Nízká | Lze obejít přes `preview_inspect` na selektory |
| EN překlad nezkontrolován rodilým mluvčím | Střední | Funkčně OK, idiomaticky průměrné |
| Sekce mají velký vertical rhythm (120 px padding) — na mobile to může působit „dlouze" | Nízká | `@media (max-width: 768px)` to redukuje na 80 px |
| `accent-em` v H2 sekcích je `<em>` s inline italic — bez fallback fontu vypadá ošklivě než se Caslon natáhne | Nízká | Mitigováno přes `font-display: swap` |

## Co nesmí být změněno bez souhlasu klientky

Viz `DO_NOT_CHANGE.md`. Stručně:

- Paleta Modern Czech (ink/accent/surface/paper/mute hex)
- Pár písem Caslon · Jakarta · JetBrains
- Hlavní claim a tři pilíře (názvy + pořadí)
- Motiv Trojúhelník · centroid
- Číslo 71 vydaných knih (ověřený fakt)
- Reálné kontakty (`k.mlsnova@seznam.cz`, `+420 728 069 926`, `linkedin.com/in/katerinamlsnova`, `@MlsnaMalina`)
- Struktura 6 sekcí a jejich pořadí
- „Aktuální projekty" jako název sekce
- Vertikální timeline s rail + kruhy
- 3 reason-boxy se šipkami
- Lede texty po iteracích v této session

## Stav uložení

Žádný git, žádný commit. Vše jen na disku v `web/`. Server běží v pozadí.
