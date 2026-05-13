# PROMPT_FOR_NEXT_MODEL.md

> Hotový prompt k zkopírování do nové AI konverzace.

---

## Prompt — verze česká (doporučená pro pokračování)

```
Přebíráš projekt „Libra — osobní brand pro pozici Legal Engineer".
Jde o profesní přihlášku Kateřiny Mlsnové na pozici Legal Engineer
ve Wolters Kluwer / Libra. Deadline: 17. května 2026.

V projektu je složka `handoff/` s šesti dokumenty:

1. PROJECT_CONTEXT.md — co je projekt o, profil autorky, cílová skupina
2. SESSION_SUMMARY.md — co se v předchozí session konkrétně řešilo
3. CURRENT_STATE.md — přesný snapshot stavu, struktura souborů
4. NEXT_STEPS.md — prioritizovaný plán pokračování (nutné/doporučené/volitelné)
5. FILES_AND_MATERIALS.md — kde najít co, kam zasahovat
6. DO_NOT_CHANGE.md — seznam schválených prvků, které se nesmí měnit

Než cokoliv změníš:

1. Přečti si všechny dokumenty v `handoff/` v uvedeném pořadí.
2. Otevři hlavní soubor `Libra - Brand Exploration.html` a podívej se,
   co aktuálně existuje (canvas s artboardy v 5 sekcích).
3. Krátce mi shrň, co jsi pochopil — projekt, schválené volby,
   kde se nachází a co je hlavní výstup.
4. Navrhni mi další postup podle priorit v `NEXT_STEPS.md`.
5. Počkej na můj souhlas, než začneš pracovat.

Důležité zásady:

- NIKDY neměň věci uvedené v `DO_NOT_CHANGE.md` bez výslovného svolení.
- Pokud něčemu nerozumíš, zeptej se. Nehádej.
- Když měníš texty, zasahuj POUZE do COPY objektu v `artboards.jsx`,
  ne přímo do JSX komponent.
- Když měníš barvy, dělej to v `PALETTES` v `app.jsx`, ne přímo v komponentách.
- Píš česky, věcně, bez emotikon a marketingových frází.
- Respektuj editorský tón briefu — Kateřina nesnáší prázdnou korporátní řeč.

Začni přečtením `PROJECT_CONTEXT.md`.
```

---

## Prompt — verze anglická (pro případ, že navazuje EN-only model)

```
You are taking over the project "Libra — personal brand for a Legal Engineer
application". This is Kateřina Mlsnová's professional application for a
Legal Engineer position at Wolters Kluwer / Libra. Deadline: May 17, 2026.

The project root contains a `handoff/` folder with six documents
(written in Czech):

1. PROJECT_CONTEXT.md — what the project is, author profile, audience
2. SESSION_SUMMARY.md — what the previous session worked on
3. CURRENT_STATE.md — exact state snapshot, file structure
4. NEXT_STEPS.md — prioritized continuation plan
5. FILES_AND_MATERIALS.md — where to find what, where to edit
6. DO_NOT_CHANGE.md — list of approved elements that must not change

Before changing anything:

1. Read every doc in `handoff/` in the listed order.
2. Open `Libra - Brand Exploration.html` and inspect what exists
   (a design canvas with artboards across 5 sections).
3. Briefly summarize for me what you understood — project, approved choices,
   where it lives and what the main output is.
4. Propose next steps based on the priorities in `NEXT_STEPS.md`.
5. Wait for my approval before starting work.

Critical rules:

- NEVER touch anything listed in `DO_NOT_CHANGE.md` without explicit consent.
- If you don't understand something, ask. Do not guess.
- For text edits, modify ONLY the COPY object in `artboards.jsx`,
  not JSX components directly.
- For color edits, modify `PALETTES` in `app.jsx`, not individual components.
- Reply to me in Czech (the client prefers Czech), factually, no emoji,
  no marketing fluff.
- Respect the editorial tone — Kateřina dislikes empty corporate speak.

Start by reading `PROJECT_CONTEXT.md`.
```

---

## Mini-prompt — pro rychlé pokračování ve stejné konverzaci

> Pro případ, že chceš jen krátký reset bez plného načtení dokumentů.

```
Vrátili jsme se po pauze k projektu Libra (Legal Engineer přihláška Kateřiny
Mlsnové, deadline 17. května 2026). Hotový je design canvas (Modern Czech
paleta, Caslon · Jakarta · JetBrains, Triangle motiv) v souboru
`Libra - Brand Exploration.html`. Pokud potřebuješ rekap, otevři
`handoff/CURRENT_STATE.md`. Co dál: [doplň konkrétní úkol].
```

---

## Tipy pro úspěšný handoff

1. **Nový model si NEJDŘÍV otevře `Libra - Brand Exploration.html`** —
   bez vidění canvasu je všechna dokumentace abstraktní.
2. **Pokud má model nástroj „read directory", ať si projde `handoff/`** —
   tam je všechno, co potřebuje vědět.
3. **Pokud má model nástroj na screenshotování webu**, ať si vyfotí
   homepage artboard — to mu dá vizuální oporu pro další rozhodování.
4. **Pokud má model komentář vlastní k textům nebo designu**, ať se
   zeptá Kateřiny, ne ať změny dělá rovnou.
