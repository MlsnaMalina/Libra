(function () {
  'use strict';

  var EN = {
    'nav.three': 'Three worlds',
    'nav.path': 'Path',
    'nav.projects': 'Projects',
    'nav.why': 'Why Libra',
    'nav.about': 'About',
    'nav.refs': 'References',
    'nav.contact': 'Contact',

    'hero.available': 'Available from July 2026',
    'hero.kicker': 'Legal Engineer · Application',
    'hero.h1a': 'A bridge between law,',
    'hero.h1b': 'language and ',
    'hero.h1c': 'technology',
    'hero.lede': 'Nine years in legal practice. Seven years in the Wolters Kluwer ČR editorial team. Two years with AI tools. I know how lawyers work with information. I know how Wolters Kluwer publishes professional content. And I can build a tool that connects these two worlds.',
    'hero.cta1': 'Open portfolio',
    'hero.cta2': 'Download CV (PDF)',
    'hero.fig': 'Fig. 01 — Three pillars, one node',
    'hero.scroll': 'continue',
    'pillars.law': 'LAW',
    'pillars.lang': 'LANGUAGE',
    'pillars.tech': 'TECHNOLOGY',
    'stats.books': 'published books',
    'stats.years': 'years in practice',
    'stats.firms': 'law firms',
    'stats.wk': 'years with Wolters Kluwer',

    'three.kicker': '02 — Three worlds',
    'three.title1': 'Three worlds,',
    'three.title2': 'one translation',
    'three.w1.name': 'Law',
    'three.w1.body': 'Master of Law (UWB 2013). Nine years in legal practice. Editor of 71 professional law books — mainly in IT law, financial law, intellectual and industrial property law, and civil procedure.',
    'three.w1.t1': 'IT law',
    'three.w1.t2': 'Financial law',
    'three.w1.t3': 'IP',
    'three.w1.t4': 'Civil procedure',
    'three.w1.idx': '01 / 03',
    'three.w1.year': '2013–',
    'three.w2.name': 'Language',
    'three.w2.body': 'Seven years as a book editor at Wolters Kluwer ČR in the legal editorial team. Two years of external collaboration. Daily contact with dozens of authors — attorneys, judges, academics, in-house lawyers, notaries, bailiffs, mediators. I explain to them how the collaboration works, onboard them into our online systems (PublishOne), negotiate scope, manage deadlines and give them feedback on their manuscripts. When an author is unsure about anything, I am the one they reach out to.',
    'three.w2.t1': 'Editing',
    'three.w2.t2': 'Reviewing',
    'three.w2.t3': 'UX writing',
    'three.w2.idx': '02 / 03',
    'three.w2.year': '2017–2024',
    'three.w3.name': 'Technology',
    'three.w3.body': 'Two years of actively building with AI (LLMs, Claude Code, prompt design) and learning the field. Personal website. Checklists for editors. A services calculator. Interactive digital materials. A new project every month, all publicly available. Builder mindset, not LinkedIn AI hype. Even this page was made by hand with Claude Code.',
    'three.w3.t1': 'Claude Code',
    'three.w3.t2': 'Prompts',
    'three.w3.t3': 'HTML/CSS/JS',
    'three.w3.t4': 'Git',
    'three.w3.idx': '03 / 03',
    'three.w3.year': '2024–',

    'path.kicker': '03 — Path',
    'path.title1': 'Thirteen years,',
    'path.title2': 'four chapters',
    'path.edu.dur': 'Bc. + Mgr.',
    'path.edu.cat': 'Education',
    'path.edu.title': 'Education',
    'path.m1.dur': 'Bachelor',
    'path.m1.cat': 'Education · Bc.',
    'path.m1.title': 'College of Applied Law',
    'path.m1.desc': 'A practice-oriented law programme, focused on business law.',
    'path.m2.dur': 'Master',
    'path.m2.cat': 'Education · Mgr.',
    'path.m2.title': 'Faculty of Law, University of West Bohemia',
    'path.m2.desc': 'Five-year Master’s programme in Law and Legal Science, covering the full range of legal specialisations.',
    'path.m2b.dur': 'Semester',
    'path.m2b.cat': 'Education · Exchange',
    'path.m2b.title': 'University of Haifa, Israel',
    'path.m2b.desc': 'Successfully completed semester in English on the Global Economy & Law Program.',
    'path.m3.dur': '9 years',
    'path.m3.s1.dur': 'Small firm',
    'path.m3.s1.cat': 'Practice · office back, dealings with the IPO, filing trademark applications',
    'path.m3.s1.title': 'Law Office of Josef Mrázek',
    'path.m3.s1.desc': 'A small firm with one lawyer, one trainee and a specialist office manager. Focus on copyright and industrial-property protection.',
    'path.m3.s2.dur': 'Mid-sized firm',
    'path.m3.s2.cat': 'Practice · office back, drafting filings for courts and authorities',
    'path.m3.s2.title': 'Kovanda & Tykalová & Jan Mach',
    'path.m3.s2.desc': 'A mid-sized firm — 3 partners, 3 cooperating lawyers, 2 trainees, 1 law student and 1 office manager. General practice and a focus on healthcare law.',
    'path.m3.s3.dur': 'Short engagement',
    'path.m3.s3.cat': 'Practice · office back, issuing payment orders',
    'path.m3.s3.title': 'LFA 2020 advokáti, s.r.o.',
    'path.m3.s3.desc': 'A managing partner, one lawyer and several law students. Focus on debt collection.',
    'path.m3.s4.dur': 'Short engagement',
    'path.m3.s4.cat': 'Practice · office back, legal research',
    'path.m3.s4.title': 'Brodec & partners, law firm',
    'path.m3.s4.desc': 'A managing partner, 2 lawyers, 3 trainees and 2 law students.',
    'path.m3.s5.dur': 'Large firm',
    'path.m3.s5.cat': 'Practice · trainee',
    'path.m3.s5.title': 'Hrudka & Partners',
    'path.m3.s5.desc': 'A large firm — 3 partners, 5 lawyers, 3 trainees, 3 law students and 4 administrative staff. General practice, liquidators and insolvency administrators, criminal law. Office back, preparing court materials, handling simpler court matters, research for partners, public procurement, managing 450+ data boxes of an insolvency administrator and liquidator, issuing payment orders and similar.',
    'path.m3.cat': 'Practice',
    'path.m3.title': 'Legal practice',
    'path.m3.desc': 'Office back, legal administrative assistant, trainee attorney. Five law firms in total (general practice, copyright, debt recovery, insolvency administrators). From small law firms — just an attorney, me and a trainee — to a firm with three partners and six more attorneys.',
    'path.m4.dur': '7 years',
    'path.m4.cat': 'Editorial',
    'path.m4.title': 'Wolters Kluwer ČR',
    'path.m4.desc': 'Editor in the legal division, focused on financial law, IT law, intellectual property and civil procedure. Manuscript processing (content and formal review), communication with authors and external vendors (proof-reader, typesetter, printer), and the administration of the publishing workflow.',
    'path.m5.dur': 'present',
    'path.m5.cat': 'Builder',
    'path.m5.title': 'Self-employed + AI builder',
    'path.m5.desc': 'Continued close cooperation with Wolters Kluwer ČR as a book editor, plus AI training, vibe coding, personal website, learning games, legal checklists, calculators. A new project every month.',

    'proj.kicker': '04 — AI Projects',
    'proj.title': 'Current projects',
    'proj.lede': 'Five projects from the past year. All public, all with real code.',
    'proj.open': 'Open →',
    'proj.p1.cat': 'Portfolio', 'proj.p1.status': 'live',
    'proj.p1.title': 'Personal website',
    'proj.p1.desc': 'My personal site katerinamlsnova.cz. Built through vibe coding — static HTML/CSS on GitHub Pages. No backend, no cookies. Proof that a lawyer without a CS background can ship a product with AI.',
    'proj.p1.t1': 'HTML', 'proj.p1.t2': 'CSS', 'proj.p1.t3': 'Claude Code',
    'proj.p2.cat': 'Interactive tool', 'proj.p2.status': 'live',
    'proj.p2.title': 'Checklists for editors',
    'proj.p2.desc': 'A guide for administrative tasks, so the brain can focus on what actually matters.',
    'proj.p2.t1': 'JS', 'proj.p2.t2': 'Prompts', 'proj.p2.t3': 'UX',
    'proj.p3.cat': 'Edu', 'proj.p3.status': 'beta',
    'proj.p3.title': 'Learning games for kids',
    'proj.p3.desc': 'Learning games for preschoolers — counting up to 20, simple memory exercises. Playful, designed for a specific user.',
    'proj.p3.t1': 'JS', 'proj.p3.t2': 'LocalStorage',
    'proj.p4.cat': 'Tool', 'proj.p4.status': 'live',
    'proj.p4.title': 'Services pricing calculator',
    'proj.p4.desc': 'A calculator that tells the client the price interactively, instead of passively receiving (uncomfortable) information.',
    'proj.p4.t1': 'JavaScript', 'proj.p4.t2': 'CSV',
    'proj.p5.cat': 'Resource', 'proj.p5.status': 'wip',
    'proj.p5.title': 'Prompt library for lawyers',
    'proj.p5.desc': 'A game for lawyers at the Legal Innovation Day conference, where they learn about IT law — during the break, the game lets them discover, in a playful way, the Wolters Kluwer titles that cover those topics.',
    'proj.p5.t1': 'Markdown', 'proj.p5.t2': 'Notebook',

    'why.kicker': '05 — Why Libra',
    'why.title1': 'Three reasons,',
    'why.title2': 'why Wolters Kluwer specifically.',
    'why.r1.title': 'I know the product DNA from the inside',
    'why.r1.text': 'For seven years I was an employee of the legal division at Wolters Kluwer ČR. I still work with WK, so that is nine years of continuous cooperation. I know how a legal text travels from author to reader. I know what ASPI looks like from the inside — and I have been contributing to its content for nine years. In the legal editorial team I stood behind the creation of a dedicated IT Law area, which I have been working on from the very beginning.',
    'why.r2.title': 'A connection to the law',
    'why.r2.text': 'For nine years I worked as a lawyer in different roles across different law firms. I know how lawyers handle information and what they need to work effectively.',
    'why.r3.title': 'Technology',
    'why.r3.text': 'My interest in technology is not a side effect of the latest mainstream wave. I was one of the first in the Czech Republic with a Kindle from Amazon. I had to order Google Home smart-home devices via addresses in Britain and Germany because they were not available locally — but I wanted to try them. I tested the first kind of smartwatch for O2. When the first LLMs arrived, I jumped straight into training and started vibe coding.',
    'why.pros.kicker': 'A · Authors',
    'why.pros.title': 'Working with authors',
    'why.pros.t1': 'attorneys',
    'why.pros.t2': 'in-house lawyers',
    'why.pros.t3': 'judges',
    'why.pros.t4': 'law-school professors',
    'why.pros.t5': 'notaries',
    'why.pros.t6': 'mediators',
    'why.pros.t7': 'bailiffs',
    'why.pros.body': 'As an editor I work with authors across every legal profession — daily contact. I explain how the collaboration works, onboard authors into our online systems (PublishOne), negotiate scope, manage deadlines and give feedback on manuscripts. When an author is unsure about anything, I am the one they reach out to.',
    'why.spec.kicker': 'A · Specialisation',
    'why.spec.title': 'IT law as a specialisation',
    'why.spec.intro': 'In 2018 Wolters Kluwer ČR received a proposal for the manuscript <em>Programování pro právníky</em> (Lukáš Michna) — I volunteered for it and began building a dedicated <strong>IT Law</strong> specialisation within the legal editorial team. Under it I published the following titles:',
    'why.stat.kicker': 'B · Summary',
    'why.stat.cap': 'professional law books across specialisations that I edited at Wolters Kluwer ČR — all of them part of <strong>ASPI</strong>.',
    'why.outroKicker': 'Outro',
    'why.outro': 'I am looking for a role where I can translate between worlds every day. Wolters Kluwer / Libra is the most natural next step — and this page is the first proof that I mean it.',

    'about.kicker': 'About',
    'about.title1': 'I did not leave the law,',
    'about.title2': 'I just practise it differently.',
    'about.p1': '<strong>Master of Law (UWB)</strong>, 9 years in legal practice, 7 years as a book editor in the legal division at Wolters Kluwer ČR. Specialisations: IT law, financial law, intellectual and industrial property law, civil procedure. Inside the editorial team I stood behind the creation of a dedicated IT law area.',
    'about.p2': 'Since 2024 I have been self-employed — continued cooperation with WK and my own AI projects (vibe coding, prompt design, legal tools). Working as a book editor for Wolters Kluwer ČR means checking the legal currency of texts every day, talking to practising attorneys, judges and other legal professionals, and constantly tracking legislation and the changes that are coming.',
    'about.p3': 'I did not leave the law — I just started practising it differently. That is why I am a fit for the <em>Legal Engineer</em>&ensp; role at Wolters Kluwer Libra.',

    'refs.kicker': '06 — References',
    'refs.title1': 'What the authors say',
    'refs.title2': 'about working with me.',
    'refs.q1': '…I would also like to thank you and the language editor explicitly for your work (even though colleague Rak has already, quite rightly, thanked you on behalf of both of us). After your edits I can finally picture how the book will actually look, and I am very pleased with that picture (more than I expected).',
    'refs.q2': 'Exceptional satisfaction with Ms Mlsnová — very easy collaboration, replies immediately and always tries hard to help. Sometimes I almost feel bad pestering her with silly questions, but she is clearly a very tolerant person :).',
    'refs.q3': 'Excellent, thank you very much, you really are very efficient. I look forward to it and will hopefully be in touch soon about the monograph.',
    'refs.q4': 'Dear Ms Mlsnová, you are simply the best, thank you so much!!!',
    'refs.q5': 'Ms Mlsnová is brilliant — the collaboration cannot be better. Thank you, Gazda.',

    'contact.kicker': '07 — Contact',
    'contact.title': 'Let us talk.',
    'contact.lede': 'Email is fastest. I reply within 24 hours on working days.',
    'contact.email': 'E-mail',
    'contact.phone': 'Phone',
    'contact.meta': 'PRAGUE · CZ · CV (PDF) · COVER LETTER (PDF)',
    'contact.copy': '© 2026 Kateřina Mlsnová. This page was written by hand with Claude Code.'
  };

  var CS = {};
  function snapshotCS() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in CS)) CS[k] = el.innerHTML;
    });
  }

  function setLang(lang) {
    var dict = lang === 'en' ? EN : CS;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'cs');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang-set') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function initFades() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-in').forEach(function (el) { io.observe(el); });
  }

  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var nav = document.getElementById('primaryNav');
      if (nav) nav.classList.remove('is-open');
      var t = document.getElementById('navToggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }

  function initNavToggle() {
    var btn = document.getElementById('navToggle');
    var nav = document.getElementById('primaryNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        setLang(b.getAttribute('data-lang-set'));
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    snapshotCS();
    initFades();
    initSmoothScroll();
    initNavToggle();
    initLangToggle();
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved === 'en') setLang('en');
  });
})();
