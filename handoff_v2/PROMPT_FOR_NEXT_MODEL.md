# PROMPT_FOR_NEXT_MODEL.md

> Hotový prompt — zkopíruj do nové AI konverzace (Claude / GPT / jiný model).
> Funguje samostatně, nepotřebuje další úpravy.

---

```
Přebíráš projekt „Libra — osobní brand pro pozici Legal Engineer" (klientka Kateřina Mlsnová, deadline 17. května 2026, přihláška do Wolters Kluwer / Libra).

Pracovní složka je Libra/ na disku. Hlavní výstup je statický web ve složce web/. Souběžně existují canonical zdrojové texty v texts/, podklady v Old_kontext/, a dvě sady handoff dokumentů — handoff/ (z předchozí Claude Design session, design canvas) a handoff_v2/ (z poslední session, produkční web).

KROK 1 — Nejprve si přečti, neopakuj:

Přečti v tomto pořadí všechny dokumenty z handoff_v2/:
1. handoff_v2/PROJECT_CONTEXT.md
2. handoff_v2/SESSION_SUMMARY.md
3. handoff_v2/CURRENT_STATE.md
4. handoff_v2/NEXT_STEPS.md
5. handoff_v2/FILES_AND_MATERIALS.md
6. handoff_v2/DO_NOT_CHANGE.md

Pak otevři:
- texts/web-content.md (záloha textů webu)
- texts/cv-content.md (texty pro budoucí CV PDF)
- web/index.html, web/style.css, web/main.js (aktuální stav produkčního webu)

Volitelně (pro hlubší kontext):
- handoff/ — předchozí Claude Design session, popis designové předlohy
- web/ref/*.html — kopie 6 HTML designových artboardů (lze prohlížet v dev preview přes /ref/hero.html, /ref/tri-svety.html, atd.)
- Old_kontext/ — starší materiály o klientce a její práci

KROK 2 — Shrnutí

Než cokoli začneš dělat, napiš MAX 10 odrážek:
- Co jsi pochopil/a o projektu (cíl, audience, claim, tři pilíře)
- Jaký je aktuální stav webu (co je hotové, co chybí)
- Které věci NESMÍŠ měnit bez výslovného svolení klientky (cituj z DO_NOT_CHANGE.md)
- Jaké jsou aktuální „nutné kroky" před deadline 17.5.2026

KROK 3 — Návrh dalšího postupu

Po shrnutí navrhni, co bys udělal/a jako další. Nečekej, že klientka má rozmyšleno — nabídni 2–3 konkrétní možnosti seřazené podle priority. Vycházej z handoff_v2/NEXT_STEPS.md.

KROK 4 — Pracovat začínáš až po potvrzení

Žádné zásadní změny v existujících souborech bez explicitního souhlasu klientky. „Zásadní změna" zahrnuje:
- Změna palety, písem, motivu, layoutu hero/sekcí
- Změna struktury 6 sekcí nebo jejich pořadí
- Změna claim textu nebo názvů tří pilířů
- Změna reálných kontaktních hodnot
- Přidání frameworku / build stepu / externí JS knihovny
- Změna pravidla „statický web bez backendu"

Drobné úpravy (oprava překlepu v textu, lokální fix CSS) lze provést bez schvalování, ale vždy uveď, cos změnil/a.

DŮLEŽITÉ:
- Klientka mluví česky. Komunikuj česky. Texty na webu jsou primárně česky, EN je záloha.
- Statický web BEZ frameworků. Žádné React/Vue/Next/build steps.
- Reálné kontakty (NESMÍ být placeholder): k.mlsnova@seznam.cz · +420 728 069 926 · linkedin.com/in/katerinamlsnova · GitHub @MlsnaMalina · dostupnost „od července 2026".
- Pokud bys spouštěl/a dev server, použij .claude/launch.json — config „web (npx serve)" na portu 5173. Žádný Python (na stroji není).
- Pokud něčemu nerozumíš nebo informace chybí, NEHADEJ. Zeptej se klientky nebo to označ jako otevřenou otázku.

Začni KROKEM 1: přečti dokumenty a shrň, co jsi pochopil/a.
```

---

## Tipy pro použití promptu

- **Pokud používáš jiný model než Claude Code:** v modelu, který nemá file system access (např. plain Claude.ai), je nutné nahrát dokumenty ručně přes upload. Tento prompt předpokládá agent s read access.
- **Pokud chceš pokračovat v této konverzaci** (stejný Claude session): místo plného promptu stačí napsat „pokračuj podle handoff_v2/" a Claude se zorientuje.
- **Pokud chceš jen rychlý sanity check** (ne plný onboarding): viz `NEJRYCHLEJŠÍ MOŽNÝ START` v sekci níže nebo v `SESSION_SUMMARY.md`.
