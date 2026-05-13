# NEXT_STEPS.md

> Prioritizovaný plán pokračování. Deadline přihlášky: **17. května 2026.**
> Každý krok má: **Co · Proč · Kde · Kdy hotovo.**

---

## NUTNÉ KROKY (před odesláním přihlášky)

### N1. Vytvořit CV jako PDF

- **Co:** 1stránkové PDF, A4, stejný vizuální jazyk jako web (Modern Czech paleta, Caslon · Jakarta · JetBrains).
- **Proč:** Brief Legal Engineer pozice vyžaduje povinné CV. Odkazy `files/cv-katerina-mlsnova.pdf` v navigaci, hero a footeru webu zatím vedou do 404.
- **Kde:**
  - Zdrojový text: `texts/cv-content.md` (klientka tam má kompletní obsah)
  - Výstup: `web/files/cv-katerina-mlsnova.pdf`
  - Lze postavit přes Anthropic Skill `anthropic-skills:docx` (Word → export PDF) nebo `anthropic-skills:pdf` přímo
- **Hotovo když:** PDF má 1 stránku A4, fonty embedované, paleta sedí s webem, otevírá se po kliknutí na CTA na webu.

### N2. Vytvořit motivační dopis jako PDF

- **Co:** 1stránkový dopis A4 na hlavičkovém papíru ve stejných barvách.
- **Proč:** Most mezi webem a CV. Brief to očekává.
- **Kde:**
  - Reference: `Old_kontext/WK_Mlsnova_motivacni_dopis.pdf` (starší verze, jiná pozice — zachytit tón, ale text je třeba aktualizovat na Legal Engineer @ Libra)
  - Výstup: `web/files/motivacni-dopis.pdf`
  - Odkaz v patičce webu (`§ 06 · Kontakt` → metadata) na něj už ukazuje
- **Hotovo když:** Stejný layout/paleta jako CV, 1 stránka, čitelný v Acrobatu, fonty embedované.

### N3. Doplnit titul v sekci Dráha

- **Co:** Změnit „Třináct let, *čtyři kapitoly*" na **„Devatenáct let, *pět kapitol*"** (5 milníků od 2005).
- **Proč:** Number nesouhlasí s aktuálním obsahem.
- **Kde:** `web/index.html` (hledat `path.title1` a `path.title2`) + `web/main.js` EN dictionary (`path.title1`/`title2`).
- **Hotovo když:** Title sedí s počtem milníků.

### N4. Sjednotit titulek projektu 5

- **Co:** Buď přejmenovat „Prompt knihovna pro právníky" na něco jako „Hra pro Legal Innovation Day", nebo upravit popis zpět k tématu knihovny promptů. Klientka v poslední iteraci změnila jen text — titulek nesouhlasí.
- **Proč:** Konfliktní obsah (titulek o promptech, text o konferenční hře).
- **Kde:** `web/index.html` projekt 5 (`proj.p5.title` + `proj.p5.desc`).
- **Hotovo když:** Klientka potvrdí finální podobu.

### N5. Doplnit reálné URL projektů

- **Co:** Nahradit `href="#"` reálnými odkazy na 5 projektů.
- **Proč:** Karty jsou interaktivní, ale aktuálně neklikají nikam.
- **Kde:** `web/index.html`, hledat `class="proj fade-in" href="#"` (5 výskytů).
- **Hotovo když:** Každý projekt vede na funkční URL (nebo je výslovně označený jako WIP bez odkazu).

### N6. Production deploy

- **Co:** Postavit GitHub repo + propojit s Vercelem (per uživatelské CLAUDE.md preference: Git → GitHub → Vercel).
- **Proč:** Web musí být veřejně dostupný na `katerinamlsnova.cz` před odesláním přihlášky.
- **Kde:**
  - Init `web/` jako git repo
  - Git author email **`k.schmiedtova@seznam.cz`** (Vercel jinak commit odmítne)
  - Vytvořit GitHub repo, push, propojit Vercel
  - Nastavit custom doménu `katerinamlsnova.cz` (předpoklad: registrovaná u registrátora)
- **Hotovo když:** `https://katerinamlsnova.cz` je veřejně dostupný, sdílení na LinkedIn ukáže OG metadata.

### N7. Vyrobit OG image (1200×630 px)

- **Co:** PNG 1200×630 s monogramem KM + claimem „Most mezi právem, jazykem a technologií".
- **Proč:** Při sdílení odkazu na LinkedIn / Slack se aktuálně tahá `profil.jpeg` (špatný poměr).
- **Kde:**
  - Výstup: `web/images/og-image.png`
  - Update `<meta property="og:image">` v `web/index.html`
- **Hotovo když:** LinkedIn link preview ukazuje OG image korektně.

### N8. Favicon

- **Co:** SVG/ICO ikona s monogramem KM v ink barvě.
- **Kde:** `web/favicon.svg` + `<link rel="icon" href="favicon.svg">` do `<head>`.
- **Hotovo když:** Tab v prohlížeči ukazuje monogram.

---

## DOPORUČENÉ KROKY

### D1. EN překlad — review rodilým mluvčím

- **Co:** Projít EN slovník v `web/main.js` (~80 klíčů).
- **Proč:** Iulia Craciun (recruiterka WK) je v mezinárodním kontextu; EN verze musí znít přirozeně.
- **Kde:** `web/main.js`, objekt `EN`.
- **Hotovo když:** Native speaker projde a opraví idiomy.

### D2. Hover stavy a mikro-interakce

- **Co:** Doladit hover na nav linky (underline animation?), karty projektů (přidat „Otevřít →" arrow shift), reason-boxy.
- **Proč:** Brief doporučuje „jemné mikro-interakce na hoverech".
- **Kde:** `web/style.css`.
- **Hotovo když:** Hover stavy reagují způsobem, který nevyrušuje.

### D3. Print-friendly CSS

- **Co:** `@media print` styly pro tisk/PDF export z prohlížeče.
- **Proč:** Recruiterka může chtít tisknout. Default screen CSS s dark footerem vypadá v tisku špatně.
- **Kde:** Konec `web/style.css`.
- **Hotovo když:** Cmd+P produkuje čitelnou tištěnou verzi (ink na bílém, žádné dark sections).

### D4. Lighthouse audit po deployi

- **Co:** Lighthouse skóre na všech 4 osách (perf / a11y / best practices / SEO).
- **Proč:** Strop ≥ 95. Recruiteři dnes občas spustí.
- **Kde:** Chrome DevTools nebo `npx lighthouse https://katerinamlsnova.cz`.
- **Hotovo když:** Skóre ≥ 95 ve všech 4 kategoriích.

### D5. Sjednocení outro v Proč Libra

- **Co:** Outro mluví o Libře, titul mluví o Wolters Kluwer. Buď titul „Tři důvody, *proč přesně Libra*", nebo outro upravit na WK.
- **Kde:** `web/index.html` (`why.title2` + `why.outro`) + `main.js`.
- **Hotovo když:** Konzistentní pojmenování.

### D6. Foto v hero (rozhodnutí)

- **Co:** Aktuální design má motif vpravo místo fotky (dle Claude Design ref). Pokud má být foto vidět, rozhodnout kde — alternativa: úvodní hero foto, side-by-side s motifem, nebo na samostatnou sekci „O autorce".
- **Kde:** `web/index.html` hero + `web/style.css` `.hero-grid`.
- **Hotovo když:** Klientka rozhodne, foto je viditelné (pokud chce) ve schváleném umístění.

---

## VOLITELNÉ KROKY

### V1. Tmavý režim (`prefers-color-scheme: dark`)

Tweaks systém ze designové předlohy měl Obsidian palette. Pro web by stačilo přepnout custom properties ve `[data-theme="dark"]`.

### V2. Animovaný motif při loadingu

Jemná fade-in stagger animace uzlů a hran (250 ms). Brief odmítá efekty pro efekty, ale jeden subtilní entry moment by sedl.

### V3. Mobile-specific layout review

Aktuální mobile je funkční, ale stat lišta 2×2 a stack timeline by si zasloužily víc lásky.

### V4. Sitemap.xml + robots.txt

Pro SEO. Když je web 1 stránka, je to mírný overkill, ale recruiteři občas dělají Google site search.

---

## POŘADÍ PRACÍ — doporučené (do deadline 17.5.2026)

**Den 1 (rychle):**
- N3 (titul Dráha) — 5 minut
- N4 (titulek projektu 5) — 10 minut po potvrzení
- N5 (URL projektů) — 30 minut
- N1 (CV PDF) — 2–4 hodiny ⚠️ **kritické**

**Den 2:**
- N2 (motivační dopis PDF) — 2–3 hodiny ⚠️ **kritické**
- N7 (OG image) — 30 minut
- N8 (favicon) — 15 minut

**Den 3 (deploy day):**
- N6 (GitHub + Vercel) — 1–2 hodiny ⚠️ **kritické**
- D2 (hover polish) — 30 minut
- Lighthouse pass (D4)

**Před odesláním:**
- D1 (EN review) — pokud je native speaker dostupný
- Otestovat web na mobilu (iOS Safari + Android Chrome)
- Otestovat sdílení odkazu v LinkedIn DM (OG preview)
