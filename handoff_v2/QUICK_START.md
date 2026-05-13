# QUICK_START.md

## NEJRYCHLEJŠÍ MOŽNÝ START PRO DALŠÍ SESSION

Pokud máš jen 5 minut a chceš efektivně navázat, projdi tyto kroky **v pořadí**:

1. **Přečti `handoff_v2/PROJECT_CONTEXT.md`** (3 min) — pochopíš projekt, audience, claim, paletu, písma, motiv. Bez tohohle se nepouštěj do žádné práce.

2. **Otevři `handoff_v2/CURRENT_STATE.md` a najdi sekci „Co neexistuje / chybí"** — to je seznam toho, co je potřeba vyrobit (CV PDF, motivační dopis PDF, OG image, favicon, real URLs, deploy).

3. **Spusť dev server** přes `.claude/launch.json` — config „web (npx serve)" běží na portu 5173. Pokud preview nejede, zkontroluj že Node je dostupný (`node --version`). Python NEPOUŽÍVAT.

4. **Otevři `http://localhost:5173/` v prohlížeči** — vidíš aktuální produkční web. Klikni přes 6 sekcí, vyzkoušej CS/EN přepínač, projdi na mobile breakpointu (< 768 px).

5. **Otevři `web/index.html` v editoru** — vidíš strukturu a CS texty. `web/main.js` má EN slovník. `web/style.css` má design systém.

6. **Pokud chceš pracovat na CV PDF:** přečti `texts/cv-content.md` (canonical text od klientky) a sleduj design systém z webu (CSS proměnné v `:root`). Doporučená cesta: skill `anthropic-skills:docx` → export do PDF.

7. **Pokud chceš pracovat na motivačním dopisu:** podívej se na `Old_kontext/WK_Mlsnova_motivacni_dopis.pdf` (jiná pozice, jen pro tón). Inzerát na Legal Engineer je v `Inzerat.txt`. Nový dopis musí být na Legal Engineer @ Libra.

8. **Pokud chceš deployovat:** uživatelská CLAUDE.md říká Git → GitHub → Vercel. Git author email **musí být `k.schmiedtova@seznam.cz`** (Vercel jinak commit odmítne). Doména `katerinamlsnova.cz` — ověřit registraci u registrátora.

9. **Pokud chceš jen iterovat na textech webu:** mění se v `web/index.html` (CS) a `web/main.js` objekt `EN` (EN). Klíče `data-i18n` musí matchovat. NIKDY neměň reálné kontakty (k.mlsnova@seznam.cz, +420 728 069 926, atd. — viz `DO_NOT_CHANGE.md`).

10. **Než commitneš/pushneš:** Klientka explicitně zakázala automatický push / commit. Ptej se vždycky. Když fixneš překlep, prostě edituj soubor a info, nevolej git.

---

### Klíčové soubory na jeden pohled

```
web/index.html       — produkční web (CS texty)
web/style.css        — design systém
web/main.js          — EN slovník + interakce
web/images/profil.jpeg
.claude/launch.json  — dev server config
texts/cv-content.md  — pro budoucí CV PDF
handoff_v2/          — kompletní handoff
```

### Aktuální URL kontextu

- Dev preview: `http://localhost:5173/`
- Cílová doména: `https://katerinamlsnova.cz` (zatím nedeployováno)
- LinkedIn: `https://www.linkedin.com/in/katerinamlsnova`
- GitHub: `https://github.com/MlsnaMalina`

### Top 3 nutné kroky před deadline 17.5.2026

1. **CV PDF** (N1) — `web/files/cv-katerina-mlsnova.pdf` neexistuje, ale odkazuje se na něj z 3 míst na webu
2. **Motivační dopis PDF** (N2) — `web/files/motivacni-dopis.pdf` neexistuje
3. **GitHub repo + Vercel deploy** (N6) — bez živé URL nelze poslat přihlášku

Detaily v `handoff_v2/NEXT_STEPS.md`.
