# NEXT_STEPS.md

> Praktický plán pokračování. Žádné vágní formulace —
> každý krok má kde, proč a jak poznáme, že je hotový.

---

## NUTNÉ KROKY (před odesláním přihlášky)

### N1. Ověřit a doplnit reálná data v `COPY.cs` / `COPY.en`

**Co:** Projít všechny placeholder hodnoty a nahradit reálnými.
**Proč:** Před odesláním nesmí být v materiálech `+420 ··· ··· ···` ani
neexistující URL.
**Kde:** `artboards.jsx`, hledat objekt `COPY = { cs: {…}, en: {…} }`.

Konkrétní klíče k ověření:

| Klíč                         | Současná hodnota                 | Akce                                       |
|------------------------------|----------------------------------|--------------------------------------------|
| `COPY.cs.contactItems[0].v`  | `katerina@mlsnova.cz`            | Potvrdit nebo opravit                       |
| `COPY.cs.contactItems[1].v`  | `+420 ··· ··· ···`               | Doplnit telefon                             |
| `COPY.cs.contactItems[2].v`  | `/in/katerina-mlsnova`           | Ověřit LinkedIn slug                        |
| `COPY.cs.contactItems[3].v`  | `@kmlsnova`                      | Ověřit GitHub username                      |
| `COPY.cs.available`          | `K dispozici od června 2026`     | Potvrdit datum                              |
| `COPY.cs.projects[0..4]`     | 5 projektů — popisky + tech tagy | Nahradit reálnými projekty + URL            |
| `COPY.cs.timeline[1].year`   | `— 2016`                          | Doplnit přesné rozpětí (od kdy do kdy)      |

**Hotovo když:** žádný placeholder znak `···`, žádný fiktivní projekt,
všechny URL otevřou skutečnou stránku.

---

### N2. Doplnit reálnou foto Kateřiny

**Co:** Vložit pravoúhlou portrétní foto (4:5 nebo 3:4) do hero variant C
a do míst, kde je dnes placeholder se stripe patternem.
**Proč:** Brief vyžaduje stejné foto napříč webem, CV a motivačním dopisem.
**Kde:**
- Komponenta `PhotoSlot` v `artboards.jsx` — nahradit její obsah `<img>` tagem
- Nebo přidat prop `src` a podmíněně renderovat foto vs. placeholder

**Hotovo když:** v hero C a všech místech s `PhotoSlot` je vidět reálná
fotka, ne stripe placeholder. Editorial cit — ideálně B&W nebo
sjednocený tón (brief doporučuje pravoúhlé, ne kruh).

---

### N3. Implementace finálního statického webu (Claude Code)

**Co:** Převést design canvas → produkční statický web pro GitHub Pages.
**Proč:** Toto je celý smysl projektu. Canvas je předloha, web je výstup.
**Kde:** Nový samostatný repozitář (např. `katerinamlsnova-cz`), ideálně přes Claude Code.

Plán:

1. Inicializovat repo s `index.html`, `style.css`, `main.js` (nebo bez JS pro fallback).
2. Přepsat **Homepage CS artboard** (`ArtHomepage` v `sections.jsx`) jako
   semantické HTML s odpovídajícími CSS proměnnými:
   ```css
   :root {
     --ink: #2D5F4F;
     --accent: #8B2C44;
     --surface: #FFFFFF;
     --paper: #F4F4F2;
     --mute: #5A5A5A;
     --serif: 'Libre Caslon Text', Georgia, serif;
     --sans: 'Plus Jakarta Sans', system-ui, sans-serif;
     --mono: 'JetBrains Mono', ui-monospace, monospace;
   }
   ```
3. Implementovat **CS/EN přepínač** přes anchor tags + `lang` query param
   (žádný framework router, žádný React).
4. Implementovat **scroll-fade-in animace** přes IntersectionObserver
   (5 řádků JS).
5. Přidat **og:image, og:title, og:description** pro LinkedIn sdílení.
6. Zkompilovat motiv `MotifTriangle` jako inlineovaný SVG do HTML.
7. Otestovat na mobilu (Safari iOS, Chrome Android).
8. Push na GitHub, zapnout GitHub Pages na main / docs.

**Hotovo když:** `https://katerinamlsnova.cz` je veřejně dostupný, prochází
Lighthouse skóre > 95, funguje bez JS pro základní obsah, sdílení na
LinkedIn ukáže og:image.

---

### N4. PDF CV — vytvořit ve stejném vizuálním jazyku

**Co:** 1stránkové PDF, A4, stejná paleta + fonty + tři pilíře motiv.
**Proč:** Brief vyžaduje „povinné minimum, klasická forma" — recruiterka ji
očekává.
**Kde:** V tomto projektu doporučuji vytvořit nový artboard
`§ CV` ve formátu 794×1123 px (A4 @ 96 DPI), kde se ukáže CV podle
brand jazyka.

Plán:

1. Vytvořit nový komponent `ArtCV` v `sections.jsx` nebo novém `cv.jsx`.
2. Layout: hlavička s monogramem KM, claim, foto vpravo, kontakt vlevo.
3. Sekce „Dovednosti" rozčlenit do tří pilířů (Právo / Jazyk / Technologie)
   s ikonkami / čísly.
4. Sekce „Praxe" v timeline stylu (krátší než web).
5. Footer s odkazem `katerinamlsnova.cz` a QR kódem (volitelné).
6. Export do PDF: buď print-to-PDF z prohlížeče, nebo přes skill
   „Save as PDF" / „Export as PPTX (editable)".

**Hotovo když:** PDF má 1 stránku A4, vejde se na ní vše podstatné,
v Acrobatu vypadá identicky jako v prohlížeči, fonty jsou embedované.

---

### N5. PDF motivační dopis — vytvořit

**Co:** 1stránkový dopis na hlavičkovém papíru ve stejných barvách.
**Proč:** Most mezi webem a CV.
**Kde:** Nový artboard `§ Motivační dopis` ve formátu A4.

Plán:

1. Hlavičkový papír (top 1/4 stránky): monogram + jméno + claim
   v menší velikosti.
2. Tělo dopisu: levo-zarovnaný odstavec, řádky 1.5, fontFamily `--serif`
   pro tělo (editorial cit).
3. Patička: kontakt + odkaz na web.
4. Maximálně 1 stránka A4.

**Hotovo když:** PDF má 1 stránku, čistý layout, text se vejde,
fonty jsou embedované.

---

## DOPORUČENÉ KROKY (nice to have)

### D1. Export style guide jako artboard

**Co:** Vytvořit `§ Style Guide` artboard, kde jsou všechny tokeny
(barvy + hex hodnoty, typografická škála s px, mezery, breakpointy,
ukázky komponent jako Button, Card, Chip) na jednom místě.
**Proč:** Kateřina si to může exportovat jako PNG a mít po ruce
při implementaci přes Claude Code.
**Kde:** Nová komponenta v `sections.jsx`, nový artboard v `app.jsx`.
**Hotovo když:** Jeden artboard 1440×2000+ obsahuje vše, co potřebuje
implementátor (developer nebo Kateřina sama).

### D2. Favicon + og:image

**Co:** 32×32 favicon (monogram KM) + 1200×630 og:image pro LinkedIn.
**Proč:** Sdílení na LinkedIn vypadá líp s pěkným obrázkem.
**Kde:** SVG monogramu lze vyrobit jako mini-artboard a exportovat.
**Hotovo když:** Soubor `favicon.svg` + `og-image.png` existují.

### D3. Hover stavy a mikro-interakce

**Co:** Doplnit hover state pro karty AI Projektů (subtle lift / shadow),
nav linky, CTA tlačítka.
**Proč:** Brief doporučuje „mikro-interakce na hoverech (jemné zvýraznění karet)".
**Kde:** CSS `:hover` ve finálním webu (NE v design canvasu).
**Hotovo když:** Cards při hoveru reagují způsobem, který nevyrušuje.

### D4. Print-friendly CSS pro web

**Co:** `@media print` styly, aby šel web vytisknout / uložit jako PDF
přímo z prohlížeče.
**Proč:** Některé recruiterky můžou chtít print verzi.
**Hotovo když:** Cmd+P vyprodukuje čitelnou tištěnou verzi.

---

## VOLITELNÉ KROKY

### V1. Animace motivu při loadingu

Lehká fade-in animace uzlů a hran (250ms stagger). Brief odmítá efekty
pro efekty, ale jeden subtilní entry moment by sedl.

### V2. Mobile prototyp ostatních sekcí

Současně máme mobile pouze pro Hero. Pro plný image by se hodily
mobile artboardy Tři Světy + Timeline + Projekty + Kontakt.

### V3. Tmavý režim webu

Tweaks panel už má „Obsidian" paletu jako základ pro dark mode.
Lze rozšířit na `prefers-color-scheme: dark` v produkčním webu.

### V4. Tisk knihy projektů jako art-piece

Asymetrické: do recruiterčina inboxu poslat malou A6 brožurku
s motivem mostu a třemi pilíři. Vysoce diferenciační, ale drahé.

---

## POŘADÍ PRACÍ — doporučené

**Týden 1 (do 17. května):**
- N1 (data verifikace) — 2 hod
- N2 (foto) — 1 hod
- N4 (PDF CV) — 4–6 hod ⚠️ **kritické**
- N5 (motivační dopis) — 3–4 hod ⚠️ **kritické**

**Týden 2 (po odeslání):**
- N3 (statický web) — 8–12 hod přes Claude Code
- D1 (style guide artboard)
- D2 (favicon + og:image)

**Později:**
- D3, D4, V1–V4
