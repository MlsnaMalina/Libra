# PROJECT_CONTEXT.md

> Orientační dokument pro nový AI model nebo člověka, který projekt převezme.
> Cílem je porozumět projektu během 5 minut.

---

## Název projektu

**Libra — osobní brand pro pozici Legal Engineer**
(klient: Kateřina Mlsnová, deadline 17. května 2026)

---

## Stručný popis

Vícevrstvá profesní přihláška na pozici **Legal Engineer** ve firmě
**Wolters Kluwer / Libra** (evropská legal-tech firma stavějící AI platformu
pro právníky).

Tři výstupy, které musí ladit dohromady:

1. **Interaktivní webové portfolio** — `katerinamlsnova.cz` (hlavní diferenciátor)
2. **PDF CV** — povinné minimum, klasická forma
3. **Motivační dopis (PDF)** — most mezi webem a CV

V této session se pracovalo **pouze na webovém portfoliu** — design exploration
+ kompletní homepage předloha. CV a motivační dopis nejsou hotové.

---

## Cíl projektu

Odlišit se od ostatních kandidátů **formou, která zároveň demonstruje přesně to,
co bude Kateřina na pozici dělat** — překlad mezi právem, jazykem a technologií.

Web musí:

- působit profesionálně v korporátní kultuře Wolters Kluwer (nadnárodní firma)
- zároveň ukazovat **builder mindset** (něco, co odlišuje od šablon)
- být srozumitelný v česky-mluvícím kontextu, ale s mezinárodním nádechem (proto CS/EN přepínač)
- fungovat na mobilu (recruiteři často koukají na telefonu)
- načítat se rychle, fungovat bez JavaScriptu pro základní obsah
- být hostovaný na **GitHub Pages** (statické soubory, žádný backend)

---

## Cílová skupina

**Primárně:**

- **Iulia Craciun** — HR recruiterka Wolters Kluwer (mezinárodní prostředí)
- **Vedoucí Legal Engineering týmu** (technicky orientovaný právník)

**Sekundárně:**

- Produktoví manažeři Libra (technicko-produktové prostředí)
- Možní budoucí klienti — právníci v advokátních kancelářích a in-house

---

## Hlavní myšlenka (claim)

> **„Most mezi právem, jazykem a technologií.
> Tam, kde se právník potkává s AI."**

Vizuální motiv mostu — **ne doslovný, ale strukturní**. Tři pilíře propojené
do jednoho celku.

**Tři pilíře = vizuální základ celého systému:**

1. **PRÁVO** — tradice, hloubka, struktura
2. **JAZYK** — preciznost, srozumitelnost, lidskost
3. **TECHNOLOGIE** — modernost, dynamika, otevřenost

---

## Profil autorky (důležité pro tón)

- Kateřina Mlsnová, 40 let (rok narození na materiálech **neuvádět**)
- Mgr. práva (Západočeská univerzita, 2013)
- 9 let v advokacii (do 2016)
- 7 let knižní redaktorka ve Wolters Kluwer ČR (2017–2024) — **71 vydaných odborných právních knih**
- Od 2024 OSVČ + aktivní AI builder (Claude Code, vibe coding, prompt engineering)
- Specializace v redakci: IT právo, finanční právo, právo duševního vlastnictví, občanské právo procesní

**Osobnost:** introvert, systematická, pečlivá, vizuální typ, cit pro jazyk,
buduje „stavebně", ne efektně. Nesnáší prázdnou korporátní řeč.
Hodnoty: čestnost, slušnost, praktičnost.

---

## Schválený vizuální směr (FINAL — neměnit bez souhlasu)

### Paleta — **Modern Czech**

| Token       | Hex         | Použití                                   |
|-------------|-------------|-------------------------------------------|
| `ink`       | `#2D5F4F`   | Hlavní text, čáry, monogram, primární CTA |
| `accent`    | `#8B2C44`   | Akcent (malinová), kurzíva, čísla, dotky  |
| `surface`   | `#FFFFFF`   | Hlavní pozadí stránky                     |
| `paper`     | `#F4F4F2`   | Neutrální světle šedá pro panely a oddělení sekcí |
| `mute`      | `#5A5A5A`   | Sekundární text, popisky                  |

**Zásada:** žádná béžová / krémová. Pozadí je čistě bílé, paper je
**neutrální šedá**, nikoli teplý odstín.

### Typografie — **Caslon · Jakarta · JetBrains**

| Rodina               | Použití                                  |
|----------------------|------------------------------------------|
| **Libre Caslon Text** | Display & section headings (serif)       |
| **Plus Jakarta Sans** | Body, UI, captions (sans-serif)          |
| **JetBrains Mono**    | Metadata, kickery, čísla, čipy (mono)    |

**Princip:** Serif = redakční řemeslo. Sans = technologická čistota. Mono = builder vrstva.
Tři rodiny = tři pilíře, i v typografii.

### Vizuální motiv — **Trojúhelník · centroid**

Linkový diagram (uzly + spoje) ve formě trojúhelníku se 3 vrcholy
(Právo / Jazyk / Technologie) propojenými přes centrální uzel (centroid).
Hustota **regular** (3 sub-uzly + 1 centroid + 3 hlavní).

### Layout

- Maximální šířka obsahu **1100–1200 px** (editorial čtení)
- Nadpisy **48–88 px**, tělo textu **17–18 px**, popisky 11 px mono
- Hodně bílého prostoru — primárně zaměřit, ne zaplnit
- **Jeden akcent na sekci** — barva, ikona, prvek
- Mobile-first responzivita (≥ desktop priorita)

---

## Tón vizuálního jazyka

**Profesionální, ne korporátní.** Editorská preciznost, modernost s respektem
k tradici, lidskost.

**Reference, ke kterým směřujeme:**

- Stripe / Linear — clean, structured, confident
- The Browser Company — lidský tech
- Bloomberg / Reuters — vážná autorita s moderním provedením
- Editorial design typu Aeon, The Pudding, Stripe Press

---

## Co je výslovně odmítnuto

❌ **Křiklavé barvy, gradienty, neonové akcenty**
❌ **AI-generated stock obrázky** (žádné „tým ukazuje na grafy")
❌ **Šedý korporátní feel** (PowerPoint estetika)
❌ **Přeplácanost** — příliš mnoho prvků na obrazovce
❌ **Pseudo-startupové vizuály** — zaoblené ikony, ilustrace lidiček
❌ **Animace pro animace** — jen smysluplné hover stavy a fade-iny při scrollu
❌ **Béžová / krémová pozadí** — explicitně odmítnuto v této session
❌ **Hand-drawn SVG ilustrace** — všechna grafika je geometrická / strukturní
❌ **Recreating Wolters Kluwer brand UI** — žádné kopírování chráněných prvků

---

## Limity & rizika

- **Implementace:** finální web staví Kateřina sama v Claude Code (vibe coding).
  Tento projekt produkuje **designovou předlohu**, ne produkční kód —
  ale kód je natolik čistý, že může sloužit jako základ.
- **Foto:** ve všech artboardech je zatím **placeholder** (stripe pattern).
  Kateřina dodá vlastní portrétní foto později (pravoúhlé, ne kruh).
- **AI projekty:** popisky v `COPY.cs.projects` jsou **pravděpodobné, ale ne
  ověřené** (vznikly na základě stručného briefu „osobní web, výukové hry,
  checklisty, kalkulačky"). Před publikací **musí Kateřina ověřit a doplnit
  reálné URL**.
- **Telefon & emailové údaje:** v kontaktu jsou placeholder (`+420 ··· ··· ···`,
  `katerina@mlsnova.cz`). Nutno potvrdit / opravit před implementací.
- **Stránka je v CS, EN přepínač funguje pouze v artboardech přes Tweaks** —
  finální web bude potřebovat reálný EN překlad pro nadnárodní recruiting.
