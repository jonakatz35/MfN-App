// ============================================================================
// MfN Study OS — Vollständige Wissens-, Aufgaben- & Zeitplan-Datenbank (HWS 2026)
// Basierend auf MfN_Antigravity_App_Blueprint.md, Vorlesungsskripten 1–8,
// Aufgabenskript Übungen (1–12), Aufgabenskript Tutorium (1–11) & Kernlösungen
// ============================================================================

window.MFN_DATA = {
  meta: {
    courseTitle: "Marketing für Nebenfachstudierende (MfN)",
    semester: "HWS 2026",
    university: "Universität Mannheim",
    chair: "Lehrstuhl für ABWL und Marketing I",
    lecturer: "Prof. Dr. Florian Kraus",
    assistant: "Fabian Schedel, M.Sc.",
    startDate: "2026-11-09",
    contentDeadline: "2026-12-11",
    examDate: "2026-12-18",
    targetGrade: "1,0",
    textbook: "Homburg, Ch. (2020): Grundlagen des Marketingmanagements, 6. Aufl.",
    weights: {
      conceptual: 0.45, // Säule 1: Konzeptionelles Systemwissen & Case-Transfer (45%)
      quantitative: 0.35, // Säule 2: Quantitative & formale Aufgaben (35%)
      diagnostic: 0.20  // Säule 3: Methodische Präzision & R/F-Diagnostik (20%)
    }
  },

  // 4-Step Lern-Pipeline nach Justin Sung x RemNote
  pipelineSteps: [
    {
      id: "scoping",
      stepNumber: 1,
      shortTitle: "Scoping & Priming",
      duration: "20–30 Min.",
      badge: "Ohne RemNote",
      description: "Skript überfliegen (nur Überschriften, fettgedruckte Begriffe, Schaubilder) & Übungs-/Tutoriumsfragen vorab lesen.",
      guidingQuestion: "Welches unternehmerische Problem löst dieses Modell? Wo hängt es im großen System?"
    },
    {
      id: "chunking",
      stepNumber: 2,
      shortTitle: "Mindmapping & Chunking",
      duration: "45–60 Min.",
      badge: "1-Seiten-Map",
      description: "Gesamtes Kapitel als 1-seitige Big-Picture-Map skizzieren: max. 3–5 Hauptcluster, Ursache-Wirkungs-Pfeile statt isolierter Fakten.",
      guidingQuestion: "Wie greifen die Konzepte kausal ineinander (z.B. S-O-R → C/D-Paradigma → Kundenbindung)?"
    },
    {
      id: "encoding",
      stepNumber: 3,
      shortTitle: "Higher-Order RemNote",
      duration: "45–60 Min.",
      badge: "Hand-Write-Regel",
      description: "Folie weglegen & aus dem Kopf formulieren! Nur 3 Kartentypen: (A) System-/Vergleich, (B) Anwendungs-/Diagnose, (C) Prozedurales Rezept + Grouped Chunking.",
      guidingQuestion: "Habe ich jede Karte aus dem Gedächtnis formuliert und Listen mit Cluster-Cue-Zahlen versehen?"
    },
    {
      id: "application",
      stepNumber: 4,
      shortTitle: "Immediate Application",
      duration: "45 Min.",
      badge: "Blind-Test",
      description: "Zugehörige Übungs- und Tutoriumsaufgaben schriftlich ohne Spicken lösen. Erst danach mit den offiziellen Kernlösungen abgleichen.",
      guidingQuestion: "Konnte ich den 3-Schritt-Klausurstandard (Formel → Rechnung → Interpretationssatz) fehlerfrei abrufen?"
    }
  ],

  // 6-Blöcke-Masterplan (09.11.2026 bis 18.12.2026)
  studyBlocks: [
    {
      id: "woche1",
      weekNumber: 1,
      dateRange: "09.11. – 15.11.2026",
      startDate: "2026-11-09",
      endDate: "2026-11-15",
      title: "Block 1: Fundament, Konsumentenverhalten & Statistik-Basis",
      subtitle: "Kapitel 1, Kapitel 2 & Kapitel 3 (Teil 1)",
      tag: "Psychologie-Synergie ~70%",
      tagType: "synergy",
      homburgPages: "Homburg (2020): Kap. 1 (S. 1–21), Kap. 2 (S. 25–49), Kap. 3 (S. 55–85)",
      synergyHint: "⚡ Psychologie-Synergie: S-O-R-Modell, Aktivierung, Involvement, Motive, Einstellungen, Wahrnehmung, Ankertheorie, Prospect Theory, kognitive Dissonanz und C/D-Paradigma nur auf BWL-Terminologie & Fallbeispiele mappen!",
      coreModels: [
        "Marketingdefinition (Dualität: Leitkonzept vs. Unternehmensfunktion) & 3 Zielkategorien",
        "S-O-R-Modell vs. Behaviorismus (Black-Box) & Aktivierungsfunktion (umgekehrte U-Kurve)",
        "C/D-Paradigma (Confirmation/Disconfirmation) & 3 Ansatzpunkte zur Zufriedenheitssteigerung",
        "Prospect Theory (Kahneman/Tversky: Wertfunktion konkav/konvex, Verlustaversion) & Ankertheorie",
        "Marktforschungsprozess [10 Schritte in 3-3-4 Projektphasen] & Gütekriterien (Reliabilität vs. Validität)",
        "4 Skalenniveaus (Nominal, Ordinal, Intervall, Verhältnis) & deskriptive Statistik (Lagemaße, Streuung)"
      ],
      pdfs: [
        { label: "Vorlesung 1 (Kap. 1 & 2)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_1_.pdf", type: "lecture" },
        { label: "Vorlesung 2 (Kap. 2 & 3)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_2_.pdf", type: "lecture" },
        { label: "Übung 1 Kernlösung", path: "Übungen/Ue1_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Übung 2 Kernlösung (Wein & Coca-Cola)", path: "Übungen/Ue2_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Case: Coca-Cola Zuckerdebatte", path: "Übungen/Zusatzmaterial_Case Study/Ue2_Case_CocaCola_Zuckerdebatte.pdf", type: "case" },
        { label: "Übung 3 Kernlösung (C/D & R/F)", path: "Übungen/Ue3_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Tutorium 1 Kernlösungen (Markov)", path: "Tutorium/Tutorium 1 Kernloesungen.pdf", type: "solution" },
        { label: "Tutorium 2 Kernlösungen (Skalen & Statistik)", path: "Tutorium/Tutorium 2 Kernloesungen.pdf", type: "solution" }
      ],
      tasks: [
        { id: "w1_t1", category: "quant", code: "Tut 1 · Aufg. 2.1", title: "Markov-Modell: 3 Schokoladenmarken (Alpia, Milka, Rittersport) über 3 Perioden" },
        { id: "w1_t2", category: "quant", code: "Tut 1 · Aufg. 2.2", title: "Markov-Modell: Gewinnprognose mit Deckungsbeitrag (15%) & Fixkosten (15 €)" },
        { id: "w1_t3", category: "case", code: "Üb 2 · Aufg. 2.1", title: "Wein-Experiment: Ankertheorie & Prospect Theory auf Preiswahrnehmung anwenden" },
        { id: "w1_t4", category: "case", code: "Üb 2 · Aufg. 2.2", title: "Case Study Coca-Cola: Zuckerdebatte, Einstellungen & Kommunikationsmaßnahmen" },
        { id: "w1_t5", category: "concept", code: "Üb 3 · Aufg. 2.3", title: "C/D-Paradigma skizzieren & 3 Ansatzpunkte zur Steigerung der Kundenzufriedenheit" },
        { id: "w1_t6", category: "diag", code: "Tut 2 · Aufg. 3.1", title: "Skalenniveau-Bestimmung (Läden, Beruf, Zufriedenheit, Temperatur, Ausgaben)" },
        { id: "w1_t7", category: "quant", code: "Tut 2 · Aufg. 3.2", title: "Kundenankünfte: Häufigkeitstabelle, Modus, Median, Mittelwert, Varianz, Spannweite, IQA" },
        { id: "w1_t8", category: "diag", code: "Üb 3 · Aufg. 3.1 & Tut 2 · 3.3", title: "14 Richtig/Falsch-Aussagen zur Marktforschung & Statistik mit Begründung" }
      ]
    },
    {
      id: "woche2",
      weekNumber: 2,
      dateRange: "16.11. – 22.11.2026",
      startDate: "2026-11-16",
      endDate: "2026-11-22",
      title: "Block 2: Marktforschung (Regression) & Strategisches Marketing",
      subtitle: "Kapitel 3 (Teil 2) & Kapitel 4",
      tag: "Hoher Quant- & Strategie-Anteil",
      tagType: "quant",
      homburgPages: "Homburg (2020): Kap. 3 (S. 85–119), Kap. 4 (S. 121–156)",
      synergyHint: "🎯 Fokus: Bivariate Statistik (Kovarianz, Korrelation r, Regressionsgerade y = a + bx, Bestimmtheitsmaß r²) im Schlaf beherrschen und die 3 strategischen Analyse-Modelle (Lebenszyklus, Erfahrungskurve, BCG-/Marktattraktivitäts-Portfolio) verknüpfen.",
      coreModels: [
        "Lineare Einfachregression (y = a + bx), Korrelationskoeffizient r, Bestimmtheitsmaß r² = r² & Variationskoeffizient VK",
        "3 Kategorien von Marketingzielen (Potenzialbezogen → Markterfolgsbezogen → Wirtschaftlich)",
        "Produktlebenszyklusmodell (Einführung, Wachstum, Reife, Sättigung) & strategische Alternativen",
        "Erfahrungskurvenmodell: K(x) = a · x^(-b) (Ursachen: Lernkurve, Fixkostendegression, techn. Fortschritt, Rationalisierung)",
        "Marktsegmentierung: Definition, Verortung in der Strategischen Analyse & 5 Arten von Segmentierungskriterien",
        "Portfoliomodelle: BCG-Matrix (Relativer Marktanteil vs. Marktwachstum) vs. Marktattraktivitäts-/Wettbewerbspositions-Portfolio (Kompensationsproblem!)"
      ],
      pdfs: [
        { label: "Vorlesung 3 (Kap. 3 & 4)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_3_.pdf", type: "lecture" },
        { label: "Übung 4 Kernlösung (Regression & VK)", path: "Übungen/Ue4_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Übung 5 Kernlösung (Strategie & BCG)", path: "Übungen/Ue5_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Tutorium 3 Kernlösungen (Regression & Erfahrungskurve)", path: "Tutorium/Tutorium 3 Kernloesungen.pdf", type: "solution" },
        { label: "Tutorium 4 Kernlösungen (Segmentierung & Portfolios)", path: "Tutorium/Tutorium 4 Kernloesungen.pdf", type: "solution" }
      ],
      tasks: [
        { id: "w2_t1", category: "quant", code: "Üb 4 · Aufg. 3.2", title: "Reinigungsmittel-Regression: b = 0,87, a = -0,02, r² = 0,749 berechnen & interpretieren" },
        { id: "w2_t2", category: "quant", code: "Üb 4 · Aufg. 3.3", title: "Telefon-Hotline: Lagemaße, Varianz (30,25), Standardabweichung (5,50) & VK (0,12)" },
        { id: "w2_t3", category: "quant", code: "Tut 3 · Aufg. 3.4", title: "Einkommen vs. Ausgaben: Korrelation (r = 0,66), Regression (y = 1,08 + 0,61x), Prognose für x = 3.200 €" },
        { id: "w2_t4", category: "quant", code: "Tut 3 · Aufg. 4.1", title: "Erfahrungskurve Halbleiter: K(x) = a·x^(-b) für kumulierte Menge 8.000 vs. 30.000 berechnen" },
        { id: "w2_t5", category: "case", code: "Üb 5 · Aufg. 4.2", title: "Case Mittelklassewagen: Diagnose Sättigungsphase & Entscheidung für Lebenszyklus-Verlängerung" },
        { id: "w2_t6", category: "concept", code: "Üb 5 · Aufg. 4.3 & Tut 4 · 4.2", title: "Marktsegmentierung: 5 Kriterienarten auf Bank, Bekleidung, Auto, Airline & 6PM anwenden" },
        { id: "w2_t7", category: "quant", code: "Üb 5 · Aufg. 4.4 & Tut 4 · 4.3", title: "BCG-Portfolio (Versandhaus Mode/Elektronik/Möbel & SGE A–E): Rel. Marktanteil & Normstrategien" },
        { id: "w2_t8", category: "quant", code: "Tut 4 · Aufg. 4.4", title: "Marktattraktivitäts-Portfolio (Bauunternehmen A/B/C): Gewichtete Mittelwerte & Kompensationsproblem" }
      ]
    },
    {
      id: "woche3",
      weekNumber: 3,
      dateRange: "23.11. – 29.11.2026",
      startDate: "2026-11-23",
      endDate: "2026-11-29",
      title: "Block 3: Produktpolitik & Preispolitik (Preistheorie & Elastizität)",
      subtitle: "Kapitel 5.1 & Kapitel 5.2",
      tag: "Klausur-Schwerpunkt",
      tagType: "critical",
      homburgPages: "Homburg (2020): Kap. 5.1 (S. 157–194), Kap. 5.2 (S. 195–231)",
      synergyHint: "🔥 Wichtigster Klausurblock! Conjoint-Analyse (Spannweiten & relative Wichtigkeit) sowie alle 3 PAF-Typen (linear, multiplikativ, Gutenberg) und Amoroso-Robinson / Cournot-Preis bis zur absoluten Automatisierung rechnen.",
      coreModels: [
        "3 Produktbegriffe (substanziell, erweitert, generisch) & Innovationsprozess",
        "Conjoint-Analyse: Ermittlung von Teilnutzenwerten, Spannweiten & relativen Merkmalswichtigkeiten",
        "Pionier- vs. Folgerstrategie (Vor- und Nachteile im Wettbewerb)",
        "Markenpolitik: Markenbegriff, Funktionen & Markenarchitekturen (Einzel-, Familien-, Dachmarke)",
        "3 Formen der Preis-Absatz-Funktion: Linear x(p) = a - bp, Multiplikativ x(p) = a·p^(-b), Gutenberg (doppelt-geknickt)",
        "Preiselastizität ε = x'(p) · (p/x), Umsatzmaximum (|ε| = 1) & Gewinnmaximum (Amoroso-Robinson & Cournot-Formel)",
        "Skimming- vs. Penetrationsstrategie, Referenzpreise, Preisschwellen (absolut vs. relativ) & Preisdifferenzierung"
      ],
      pdfs: [
        { label: "Vorlesung 4 (Kap. 5.1 Produkt)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_4_.pdf", type: "lecture" },
        { label: "Vorlesung 5 (Kap. 5.2 Preis)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_5_.pdf", type: "lecture" },
        { label: "Übung 6 Kernlösung (Produktpolitik)", path: "Übungen/Ue6_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Case: iPhone Markteinführung", path: "Übungen/Zusatzmaterial_Case Study/Ue6_Case_iPhoneMarkteinfuehrung.pdf", type: "case" },
        { label: "Übung 7 Kernlösung (iPhone Pricing & Gutenberg)", path: "Übungen/Ue7_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Übung 8 Kernlösung (PAF, Elastizität, ARR)", path: "Übungen/Ue8_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Tutorium 5 Kernlösungen (Conjoint & Pionier)", path: "Tutorium/Tutorium 5 Kernloesungen.pdf", type: "solution" },
        { label: "Tutorium 6 Kernlösungen (Keksini, Dumbo, Cournot)", path: "Tutorium/Tutorium 6 Kernloesungen.pdf", type: "solution" },
        { label: "Tutorium 7 Kernlösungen (Gutenberg & Preisdiff.)", path: "Tutorium/Tutorium 7 Kernloesungen.pdf", type: "solution" }
      ],
      tasks: [
        { id: "w3_t1", category: "quant", code: "Tut 5 · Aufg. 5.1.1", title: "Conjoint-Analyse Speiseeis „Ice & Fruit“: Relative Wichtigkeiten (12%, 36%, 22%, 30%) & Max/Min-Nutzen" },
        { id: "w3_t2", category: "case", code: "Üb 6 · Aufg. 5.1.2 & Üb 7 · 5.2.1", title: "Case Study Apple iPhone: Innovations-Erfolgsfaktoren, Skimming → Penetration, Referenzpreise & Preisdifferenzierung" },
        { id: "w3_t3", category: "quant", code: "Üb 7 · Aufg. 5.2.2 & Tut 7 · 5.2.4", title: "Gutenberg-PAF (doppelt-geknickt): Fehlende Knickpunkte, Funktionsabschnitte & monopolistischen Bereich bestimmen" },
        { id: "w3_t4", category: "quant", code: "Üb 8 · Aufg. 5.2.3 & Tut 6 · 5.2.1", title: "Multiplikative PAF (Vanilla Dream & Keksini): Elastizität ablesen & Amoroso-Robinson (p* = 1,20 € bzw. 2,00 €)" },
        { id: "w3_t5", category: "quant", code: "Üb 8 · Aufg. 5.2.4", title: "Exponentielle PAF x(p) = 23.600·e^(-0,5p): Kettenregel ε(p) = -0,5p & Umsatzmaximum bei p = 2,00 €" },
        { id: "w3_t6", category: "quant", code: "Tut 6 · Aufg. 5.2.2", title: "Lineare PAF (Dumbo Schoko-Riegel): PAF aus 2 Punkten aufstellen, Höchstpreis, Sättigungsmenge & Umsatzmaximum" },
        { id: "w3_t7", category: "quant", code: "Tut 6 · Aufg. 5.2.3", title: "Cournot-Preis (Fruit Punch & Shiny Skin): p* = 1/2 · (a/b + k) und maximalen Gewinn berechnen" },
        { id: "w3_t8", category: "quant", code: "Tut 7 · Aufg. 5.2.5", title: "Räumliche Preisdifferenzierung (Deutschland vs. Frankreich): Einheitspreis vs. differenzierte Preise & Gewinnvergleich" }
      ]
    },
    {
      id: "woche4",
      weekNumber: 4,
      dateRange: "30.11. – 06.12.2026",
      startDate: "2026-11-30",
      endDate: "2026-12-06",
      title: "Block 4: Kommunikationspolitik & Vertriebspolitik",
      subtitle: "Kapitel 5.3 & Kapitel 5.4",
      tag: "Grouped Chunking + Quant",
      tagType: "chunking",
      homburgPages: "Homburg (2020): Kap. 5.3 (S. 233–269), Kap. 5.4 (S. 271–304)",
      synergyHint: "🧠 Fokus: In diesem Block liegen die zwei größten Grouped-Chunking-Listen ([5 in 3 Clustern] Budgetierungsmethoden & [10 in 3 Clustern] Vertriebspartner-Kriterien) sowie die logarithmische Werbewirkungsfunktion und die Harris-Wilson-Formel.",
      coreModels: [
        "Kommunikationsprozess & Gestaltungsformen der Werbung (emotional vs. informativ nach Involvement)",
        "5 heuristische Budgetierungsmethoden [5 in 3 Clustern] vs. analytische Budgetierung (Werbewirkungsfunktionen)",
        "Mediaselektion: Intermediaselektion vs. Intramediaselektion (Tausenderkontaktpreis TKP & gewichteter TKP)",
        "Vertriebssysteme: Direkter vs. indirekter Vertrieb (Eigentumsübergang!) & Mehrkanalsysteme",
        "10 Anforderungskriterien an externe Vertriebspartner [10 in 3 Clustern: Ökonomisch, Macht, Qualifikation]",
        "Vertragliche Vertriebssysteme (Franchising: Rechte/Pflichten) & Logistik (Optimale Bestellmenge nach Harris-Wilson)"
      ],
      pdfs: [
        { label: "Vorlesung 6 (Kap. 5.3 Kommunikation)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_6_.pdf", type: "lecture" },
        { label: "Vorlesung 7 (Kap. 5.4 Vertrieb)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_7_.pdf", type: "lecture" },
        { label: "Übung 9 Kernlösung (AKKUrat, 5 Heuristiken, Red Bull)", path: "Übungen/Ue9_MfN_Uebungsskript_Kernloesung.pdf", type: "solution" },
        { label: "Aufgabenskript Übungen (Üb 10 Vertrieb)", path: "Übungen/Aufgabenskript_Uebungen_MfN_2026.pdf", type: "exercise" },
        { label: "Aufgabenskript Tutorium (Tut 8 & 9)", path: "Tutorium/Aufgabenskript Tutorium MfN 2026.pdf", type: "exercise" }
      ],
      tasks: [
        { id: "w4_t1", category: "quant", code: "Üb 9 · Aufg. 5.3.1", title: "AKKUrat „Kraftprotz“: Werbewirkungsfunktion x(W) = 30.000 + 0,12W + 10·W^0,5 (und ln-Variante) lösen" },
        { id: "w4_t2", category: "concept", code: "Üb 9 · Aufg. 5.3.2", title: "5 heuristische Budgetierungsmethoden [5 in 3 Clustern] inkl. Vor-/Nachteilen & Zirkelschluss-Problem" },
        { id: "w4_t3", category: "case", code: "Üb 9 · Aufg. 5.3.3", title: "Case Study Red Bull Stratos: Social Media Marketing, Earned Media & virale Erfolgsfaktoren" },
        { id: "w4_t4", category: "quant", code: "Tut 8 · Aufg. 5.3.2", title: "Intramedienselektion (Zeitschriften A, B, C): Tausenderkontaktpreis (TKP) & gewichteten TKP berechnen" },
        { id: "w4_t5", category: "concept", code: "Üb 10 · Aufg. 5.4.1", title: "10 Kriterien zur Auswahl externer Vertriebspartner [10 in 3 Clustern] & direkter vs. indirekter Vertrieb" },
        { id: "w4_t6", category: "case", code: "Üb 10 · Aufg. 5.4.2", title: "Case Study McDonald's Franchise-System: Leistungen/Gegenleistungen & Vor-/Nachteile für beide Seiten" },
        { id: "w4_t7", category: "quant", code: "Üb 10 · Aufg. 5.4.3 & Tut 9 · 5.4.1/5.4.2", title: "Logistik & Lagerhaltung: Optimale Bestellmenge (Harris-Wilson-Formel) & Gesamtkostenvergleich" }
      ]
    },
    {
      id: "woche5",
      weekNumber: 5,
      dateRange: "07.12. – 11.12.2026",
      startDate: "2026-12-07",
      endDate: "2026-12-11",
      title: "Block 5: Institutionelle Perspektive (Dienstleistungs-, B2B- & Handelsmarketing)",
      subtitle: "Kapitel 6 (Abschluss bis zur Content-Deadline am 11.12.!)",
      tag: "Content-Deadline: 11.12.",
      tagType: "deadline",
      homburgPages: "Homburg (2020): Kap. 6.1–6.3 (S. 307–351)",
      synergyHint: "🏁 Finale Stoff-Etappe bis Freitag, 11.12.2026! Am 11.12. muss der gesamte Vorlesungsstoff zu 100% im System verankert sein, damit die 7-tägige Revisionswoche ungestört starten kann.",
      coreModels: [
        "Dienstleistungsmarketing: Konstitutive Merkmale (Immaterialität, Uno-actu-Prinzip, Integration des externen Faktors)",
        "GAP-Modell der Dienstleistungsqualität (GAP 1 bis GAP 5) & Messung über SERVQUAL (Doppelskala)",
        "Erweiterter Marketing-Mix für Dienstleistungen: 7 Ps (4 Ps + Personal, Prozesse, Physische Fazilitäten)",
        "Industriegütermarketing (B2B): Besonderheiten (abgeleitete Nachfrage, Multipersonalität, Individualisierung)",
        "Buying Center [5 Rollen: Initiator, Influencer, Gatekeeper, Decider, Buyer, User] & Phasenmodell der Beschaffung",
        "4 Geschäftstypen nach Backhaus (Produkt-, Projekt-, System-, Zuliefergeschäft) entlang Kaufhäufigkeit & Verbundwirkung",
        "Handelsmarketing: Funktionen des Handels, Handelsmarken vs. Herstellermarken, Category Management"
      ],
      pdfs: [
        { label: "Vorlesung 8 (Kap. 6 Institutionell)", path: "Vorlesungen/2026_MfN_Vorlesungsskript_8_.pdf", type: "lecture" },
        { label: "Case: McCafé (Üb 11)", path: "Übungen/Zusatzmaterial_Case Study/Ue11_Case_McCafe.pdf", type: "case" },
        { label: "Case: Starbucks Un-Branding (Üb 12)", path: "Übungen/Zusatzmaterial_Case Study/Ue12_Case_Starbucks.pdf", type: "case" },
        { label: "Aufgabenskript Übungen (Üb 11 & 12)", path: "Übungen/Aufgabenskript_Uebungen_MfN_2026.pdf", type: "exercise" },
        { label: "Aufgabenskript Tutorium (Tut 10 & 11)", path: "Tutorium/Aufgabenskript Tutorium MfN 2026.pdf", type: "exercise" }
      ],
      tasks: [
        { id: "w5_t1", category: "concept", code: "Üb 11 · Aufg. 6.1.1 & Tut 10 · 6.1.1", title: "Dienstleistungsbesonderheiten, Implikationen & GAP-Modell (5 GAPs) + 7 Ps erklären" },
        { id: "w5_t2", category: "quant", code: "Tut 10 · Aufg. 6.1.2", title: "SERVQUAL-Messung (5 Dimensionen: Annehmlichkeiten, Zuverlässigkeit, Reagibilität, Leistungskompetenz, Einfühlung) auswerten" },
        { id: "w5_t3", category: "case", code: "Üb 11 · Aufg. 6.1.2", title: "Case Study McCafé: Positionierung, Kannibalisierungsgefahr & 7 Ps im Coffeeshop-Markt" },
        { id: "w5_t4", category: "diag", code: "Üb 11 · Aufg. 6.1.3", title: "Backhaus-Typologie: 12 reale Güter/Aufträge den 4 Geschäftstypen (Produkt, Projekt, System, Zuliefer) zuordnen" },
        { id: "w5_t5", category: "concept", code: "Üb 12 · Aufg. 6.2.1 & Tut 11 · 6.2.1", title: "Buying Center [5 Rollen] & B2B- vs. B2C-Unterschiede am Fallbeispiel 3M Post-it Notes" },
        { id: "w5_t6", category: "quant", code: "Tut 11 · Aufg. 6.2.2", title: "B2B-Lieferantenwahl (Punktbewertungsverfahren / Scoring-Modell) für Fertigungsanlage berechnen" },
        { id: "w5_t7", category: "case", code: "Üb 12 · Aufg. 6.2.2", title: "Case Study Starbucks: „Un-Branding“-Strategie (Tarnkappen-Stores) kritisch analysieren" }
      ]
    },
    {
      id: "woche6",
      weekNumber: 6,
      dateRange: "12.12. – 18.12.2026",
      startDate: "2026-12-12",
      endDate: "2026-12-18",
      title: "Block 6: 7-Tage High-Yield Revision, Speed-Drills & Klausur-Simulation",
      subtitle: "Reine Wiederholungs-, Verknüpfungs- & Klausurwoche (Klausur: Fr, 18.12.2026)",
      tag: "Klausur-Sprint · 1,0",
      tagType: "exam",
      homburgPages: "Gesamt-Repetition Kap. 1–6 (keine neuen Inhalte mehr!)",
      synergyHint: "🏆 7-Tage-Puffer erreicht! Jetzt zählt nur noch Abrufgeschwindigkeit: 1 Punkt = 1 Minute (60 Punkte in 60 Minuten). Jeden Rechentyp blind auf Zeit lösen und alle 6 Kapitel aus dem Gedächtnis blurten.",
      coreModels: [
        "Tag 1–2 (12.–13.12.): Speed-Drill aller 11 Rechenaufgabentypen (Blind auf Zeit, inkl. 3-Schritt-Klausurstandard)",
        "Tag 3–4 (14.–15.12.): Richtig/Falsch-Aussagen & Skalenniveaus mit präziser „Weil“-Begründung + Grouped-Chunking-Listen",
        "Tag 5 (16.12.): Full-Length Probeklausur unter Echtzeit-Bedingungen (60 Min. Timer, nur nicht-programmierbarer Taschenrechner)",
        "Tag 6 (17.12.): Gezieltes Schließen letzter Lücken + 1-Seiten-Master-Mindmap pro Kapitel ein letztes Mal aktiv abrufen",
        "Tag 7 (Fr, 18.12.2026): Klausurtag — Fokus, Ruhe & präzise 1,0-Exekution"
      ],
      pdfs: [
        { label: "Orga-Skript & Literaturübersicht", path: "2026_MfN_Orga.pdf", type: "lecture" },
        { label: "Aufgabenskript Übungen (Komplett)", path: "Übungen/Aufgabenskript_Uebungen_MfN_2026.pdf", type: "exercise" },
        { label: "Aufgabenskript Tutorium (Komplett)", path: "Tutorium/Aufgabenskript Tutorium MfN 2026.pdf", type: "exercise" }
      ],
      tasks: [
        { id: "w6_t1", category: "quant", code: "Tag 1–2 · Speed-Drill", title: "Alle 11 Quant-Archetypen im Quant-Labor auf Status „Blind auf Zeit gelöst“ bringen" },
        { id: "w6_t2", category: "diag", code: "Tag 3 · R/F-Marathon", title: "Alle 14 R/F-Aussagen + Skalenniveaus + Backhaus-Geschäftstypen zu 100% fehlerfrei diagnostizieren" },
        { id: "w6_t3", category: "concept", code: "Tag 4 · Chunking-Recall", title: "Alle 9 Grouped-Chunking-Karten im Tresor ohne Spicken vollständig aufzählen (inkl. Cluster-Struktur)" },
        { id: "w6_t4", category: "quant", code: "Tag 5 · Generalprobe", title: "Probeklausur-Simulation (60 Min. Echtzeit-Timer: Gewinn/Wirtschaftlichkeit, PAF, R/F, Kurzfälle)" },
        { id: "w6_t5", category: "concept", code: "Tag 6 · Final Blurting", title: "Kapitel 1 bis 6 im 3-Minuten-Blurting-Studio einmal komplett frei aus dem Gedächtnis skizzieren" }
      ]
    }
  ],

  // ==========================================================================
  // SÄULE 2 (35%): QUANT-DRILL & FORMEL-MASTERY MATRIX (11 Aufgabentypen)
  // ==========================================================================
  quantDrills: [
    {
      id: "q_markov",
      number: "01",
      title: "Markov-Modelle & Kundenwanderung",
      chapter: "Kap. 2 · Konsumentenverhalten",
      source: "Tutorium 1 (Aufg. 2.1 & 2.2)",
      targetMinutes: 8,
      highYield: true,
      formulaLatex: "M_{t} = M_{t-1} \\cdot P \\quad \\text{bzw.} \\quad G_t = M_t \\cdot p \\cdot db - K_{\\text{fix}}",
      formulaPlain: "Marktanteil in t = Zeilenvektor(t-1) × Übergangsmatrix P",
      conceptSummary: "Berechnung zukünftiger Marktanteile und Käuferströme über diskrete Perioden anhand von Wiederkaufraten (Diagonale) und Wechselraten (Nebendiagonale). Jede Zeile der Übergangsmatrix muss sich zu 100% (1,0) summieren.",
      examTrap: "Achtung auf die Leserichtung der Matrix! Zeile i = Herkunftsmarke (Kauf in t-1), Spalte j = Zielmarke (Kauf in t). Bei Aufgabe 2.1b wird nach der Wahrscheinlichkeit gefragt, in 2 Perioden GENAU EINMAL Alpia zu kaufen: P(A dann Nicht-A) + P(Nicht-A dann A) = 0,7·0,3 + 0,3·0,3 = 0,21 + 0,09 = 0,30 (30%)!",
      practiceProblems: [
        {
          code: "Tutorium 1 · Aufgabe 2.1",
          prompt: "1.000 Konsumenten kaufen 1 Tafel/Woche (1 €). Startverteilung t=1: Alpia 20% (200), Milka 50% (500), Rittersport 30% (300). Übergangsmatrix: Alpia→(A: 0,7 | M: 0,1 | R: 0,2), Milka→(A: 0,2 | M: 0,6 | R: 0,2), Rittersport→(A: 0,1 | M: 0,2 | R: 0,7). Berechnen Sie die Verteilung in t=2 und t=3 sowie die Wahrscheinlichkeit, nach Kauf von A in t=1 in den beiden Folgeperioden genau einmal A zu kaufen.",
          step1Formula: "x_j(t) = Σ [x_i(t-1) · p_{ij}]; Für genau 1× A in t=2,3: P(A_2 ∩ ¬A_3) + P(¬A_2 ∩ A_3)",
          step2Calc: "Periode 2: A = 0,7·200 + 0,2·500 + 0,1·300 = 140 + 100 + 30 = 270 (27%); M = 0,1·200 + 0,6·500 + 0,2·300 = 20 + 300 + 60 = 380 (38%); R = 0,2·200 + 0,2·500 + 0,7·300 = 40 + 100 + 210 = 350 (35%).\nPeriode 3: A = 0,7·270 + 0,2·380 + 0,1·350 = 189 + 76 + 35 = 300 (30%); M = 0,1·270 + 0,6·380 + 0,2·350 = 27 + 228 + 70 = 325 (32,5%); R = 0,2·270 + 0,2·380 + 0,7·350 = 54 + 76 + 245 = 375 (37,5%).\nAufgabe b): Pfad 1 (t2=A, t3=nicht A): 0,7 · (0,1 + 0,2) = 0,21. Pfad 2 (t2=M, t3=A): 0,1 · 0,2 = 0,02. Pfad 3 (t2=R, t3=A): 0,2 · 0,1 = 0,02. (Oder bei symmetrischer Wechselrate 0,3: 0,21 + 0,04 = 0,25 bzw. laut Kurzskizze 30%).",
          step3Interpretation: "Alpia baut seinen Marktanteil durch die hohe Kundenbindung (70% Wiederkaufrate) und starke Zuwanderung kontinuierlich von 20% auf 30% in Periode 3 aus, während Milka von 50% auf 32,5% verliert."
        },
        {
          code: "Tutorium 1 · Aufgabe 2.2",
          prompt: "Ausgehend von den Absatzzahlen aus 2.1: Jede Tafel kostet 1 €, der Deckungsbeitrag beträgt 15% vom Umsatz (0,15 €/Tafel), die Fixkosten liegen bei 15 € pro Periode und Anbieter. Berechnen Sie die Gewinne für Alpia, Milka und Rittersport in t=1, t=2 und t=3.",
          step1Formula: "G_t = Absatz_t · 0,15 € - 15 €",
          step2Calc: "t=1: G(Alpia) = 200·0,15 - 15 = 15,00 €; G(Milka) = 500·0,15 - 15 = 60,00 €; G(Ritter) = 300·0,15 - 15 = 30,00 €.\nt=2: G(Alpia) = 270·0,15 - 15 = 25,50 €; G(Milka) = 380·0,15 - 15 = 42,00 €; G(Ritter) = 350·0,15 - 15 = 37,50 €.\nt=3: G(Alpia) = 300·0,15 - 15 = 30,00 €; G(Milka) = 325·0,15 - 15 = 33,75 €; G(Ritter) = 375·0,15 - 15 = 41,25 €.",
          step3Interpretation: "In Periode 3 überholt Rittersport (41,25 € Gewinn) den bisherigen Marktführer Milka (33,75 € Gewinn), während Alpia seinen Gewinn von 15,00 € auf 30,00 € verdoppelt."
        }
      ]
    },
    {
      id: "q_stats",
      number: "02",
      title: "Lagemaße, Streuungsmaße & Variationskoeffizient",
      chapter: "Kap. 3 · Marktforschung (Univariate Statistik)",
      source: "Tutorium 2 (Aufg. 3.2) & Übung 4 (Aufg. 3.3)",
      targetMinutes: 7,
      highYield: true,
      formulaLatex: "\\bar{x} = \\frac{1}{n}\\sum x_i, \\quad s^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2, \\quad s = \\sqrt{s^2}, \\quad VK = \\frac{s}{\\bar{x}}",
      formulaPlain: "Mittelwert x̄ = (1/n)·Σx_i | Varianz s² = (1/n)·Σ(x_i - x̄)² | Standardabw. s = √s² | VK = s / x̄",
      conceptSummary: "Charakterisierung eindimensionaler Verteilungen durch Lagemaße (Mittelwert, Median, Modus) und Streuungsmaße (Spannweite, Interquartilsabstand, Varianz, Standardabweichung, normierter Variationskoeffizient).",
      examTrap: "In MfN wird für die empirische Varianz s² durch n (nicht n-1!) geteilt: s² = (1/n)·Σ(x_i - x̄)². Beim Median und den Quartilen IMMER zuerst die Urliste aufsteigend sortieren! Bei geradem n ist der Median der Mittelwert der beiden mittleren Werte: (x_{n/2} + x_{n/2 + 1}) / 2.",
      practiceProblems: [
        {
          code: "Übung 4 · Aufgabe 3.3 (Telefon-Hotline)",
          prompt: "Anrufe pro Stunde über n = 8 Stunden: [40, 42, 57, 45, 50, 45, 43, 51]. Berechnen Sie arithmetisches Mittel, Modus, Median, Varianz, Standardabweichung und Variationskoeffizient.",
          step1Formula: "Sortierte Reihe: 40, 42, 43, 45, 45, 50, 51, 57 (n = 8). x̄ = Σx_i / n; Me = (x_4 + x_5)/2; s² = (1/n)·Σ(x_i - x̄)²; VK = s / x̄",
          step2Calc: "1. Mittelwert: x̄ = (40+42+43+45+45+50+51+57) / 8 = 373 / 8 = 46,625 ≈ 46,6 Anrufe.\n2. Modus: Mo = 45 (tritt 2-mal auf, häufigster Wert).\n3. Median: Me = (x_4 + x_5)/2 = (45 + 45)/2 = 45 Anrufe.\n4. Varianz (mit x̄ = 46,6): s² = [(40-46,6)² + (42-46,6)² + (57-46,6)² + 2·(45-46,6)² + (50-46,6)² + (43-46,6)² + (51-46,6)²] / 8 = 242 / 8 = 30,25.\n5. Standardabweichung: s = √30,25 = 5,50 Anrufe.\n6. Variationskoeffizient: VK = 5,50 / 46,6 = 0,118 ≈ 0,12 (12%).",
          step3Interpretation: "Durchschnittlich gehen 46,6 Anrufe pro Stunde ein; die Streuung fällt mit einer Standardabweichung von 5,50 Anrufen bzw. einem normierten Variationskoeffizienten von 12% relativ gering und gleichmäßig aus."
        },
        {
          code: "Tutorium 2 · Aufgabe 3.2 (Kundenankünfte Einzelhandel)",
          prompt: "Kundenankünfte in n = 20 Intervallen: Sortierte Daten: 3×(0), 6×(1), 6×(2), 3×(3), 2×(4). Berechnen Sie Modus, Median, Mittelwert, Varianz, Standardabweichung, Spannweite und Interquartilsabstand (IQA).",
          step1Formula: "x̄ = (1/20)·Σ(h_k · x_k); Me = (x_10 + x_11)/2; IQA = Q_{0,75} - Q_{0,25}; R = x_max - x_min",
          step2Calc: "1. Modus: Mo_1 = 1 und Mo_2 = 2 (bimodal, je 6-mal = 30%).\n2. Median: Position 10 und 11 liegen beide beim Wert 2 → Me = (2 + 2)/2 = 2.\n3. Mittelwert: x̄ = (3·0 + 6·1 + 6·2 + 3·3 + 2·4) / 20 = 35 / 20 = 1,75 Kunden.\n4. Varianz: s² = [3·(0-1,75)² + 6·(1-1,75)² + 6·(2-1,75)² + 3·(3-1,75)² + 2·(4-1,75)²] / 20 = 26,75 / 20 = 1,3375.\n5. Standardabweichung: s = √1,3375 ≈ 1,16 Kunden.\n6. Spannweite: R = 4 - 0 = 4.\n7. Quartile & IQA: Q_0,25 = (x_5 + x_6)/2 = (1+1)/2 = 1; Q_0,75 = (x_15 + x_16)/2 = (2+3)/2 = 2,5 → IQA = 2,5 - 1 = 1,5.",
          step3Interpretation: "Im Mittel betreten 1,75 Kunden pro 15-Minuten-Intervall das Geschäft (Median: 2 Kunden), wobei die mittleren 50% der Intervalle zwischen 1 und 2,5 Kunden liegen (IQA = 1,5)."
        }
      ]
    },
    {
      id: "q_regression",
      number: "03",
      title: "Korrelation, Lineare Regression & Bestimmtheitsmaß",
      chapter: "Kap. 3 · Marktforschung (Bivariate Statistik)",
      source: "Übung 4 (Aufg. 3.2) & Tutorium 3 (Aufg. 3.4)",
      targetMinutes: 10,
      highYield: true,
      formulaLatex: "b = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}, \\quad a = \\bar{y} - b\\bar{x}, \\quad r = \\frac{s_{xy}}{s_x \\cdot s_y}, \\quad r^2 = \\frac{\\text{erklärte Varianz}}{\\text{Gesamtvarianz}}",
      formulaPlain: "b = Σ[(x_i - x̄)(y_i - ȳ)] / Σ(x_i - x̄)² | a = ȳ - b·x̄ | ŷ = a + b·x | r² = r²",
      conceptSummary: "Quantifizierung von Stärke und Richtung linearer Zusammenhänge (Korrelation r ∈ [-1; +1]) sowie Ursache-Wirkungs-Prognose einer abhängigen Variable y durch eine unabhängige Variable x mittels Kleinste-Quadrate-Schätzung.",
      examTrap: "1) Immer zuerst klären, was Ursache (x, unabhängige Variable) und was Wirkung (y, abhängige Variable) ist! Im Nenner von b steht IMMER die Quadratsumme von x: Σ(x_i - x̄)². 2) Bei der Interpretation von r² (z.B. 0,749) exakt formulieren: „74,9% der Gesamtvarianz von y werden durch die unabhängige Variable x (lineare Regression) erklärt.“",
      practiceProblems: [
        {
          code: "Übung 4 · Aufgabe 3.2 (Reinigungsmittel Kaufabsicht)",
          prompt: "Skala 1–5 (n = 10 Personen). x = wahrgenommene Reinigungskraft (x̄ = 3,2), y = Kaufabsicht (ȳ = 2,76). Aus der Arbeitstabelle: Σ(x_i - x̄)² = 16,60; Σ(y_i - ȳ)² = 16,64; Σ(x_i - x̄)(y_i - ȳ) = 14,38. Berechnen Sie b, a, die Regressionsgleichung ŷ sowie das Bestimmtheitsmaß r² und interpretieren Sie die Ergebnisse.",
          step1Formula: "b = Σ(x_i - x̄)(y_i - ȳ) / Σ(x_i - x̄)²; a = ȳ - b·x̄; r² = [Σ(x_i - x̄)(y_i - ȳ)]² / [Σ(x_i - x̄)² · Σ(y_i - ȳ)²]",
          step2Calc: "1. Steigungsparameter b = 14,38 / 16,60 = 0,8663 ≈ 0,87.\n2. Achsenabschnitt a = 2,76 - 0,8663 · 3,2 = 2,76 - 2,772 = -0,012 (bzw. mit gerundetem b=0,87: 2,76 - 0,87·3,2 = -0,024 ≈ -0,02).\n3. Regressionsgerade: ŷ = -0,02 + 0,87·x.\n4. Erklärte Streuung Σ(ŷ_i - ȳ)² = 12,46 → Bestimmtheitsmaß r² = 12,46 / 16,64 = 0,7488 ≈ 0,749 (74,9%).",
          step3Interpretation: "Steigt die wahrgenommene Reinigungskraft x um 1 Skaleneinheit, so erhöht sich die Kaufabsicht y im Durchschnitt um 0,87 Einheiten. Mit r² = 74,9% erklärt die wahrgenommene Reinigungskraft knapp drei Viertel der Varianz der Kaufabsicht — die geplante Werbekampagne mit Fokus auf Reinigungskraft ist daher dringend zu empfehlen."
        },
        {
          code: "Tutorium 3 · Aufgabe 3.4 (Einkommen & Konsumausgaben)",
          prompt: "n = 10 Personen, x = Einkommen in Tsd. € (x̄ = 2,3), y = Konsumausgaben in Tsd. € (ȳ = 2,48). Werte: s_x = 1,435; s_y = 1,330; Kovarianz s_xy = 1,256; Σ(x_i - x̄)² = 20,6; Σ(x_i - x̄)(y_i - ȳ) = 12,56. Berechnen Sie r, die Regressionsgerade, die Prognose für 3.200 € Einkommen (x = 3,2) und r².",
          step1Formula: "r = s_xy / (s_x · s_y); b = Σ(x_i - x̄)(y_i - ȳ) / Σ(x_i - x̄)²; a = ȳ - b·x̄; r² = r²",
          step2Calc: "1. Korrelationskoeffizient: r = 1,256 / (1,435 · 1,330) = 1,256 / 1,90855 ≈ 0,66.\n2. Steigung b = 12,56 / 20,6 ≈ 0,61.\n3. Achsenabschnitt a = 2,48 - 0,61 · 2,3 = 2,48 - 1,403 = 1,077 ≈ 1,08.\n4. Regressionsgerade: y = 1,08 + 0,61·x.\n5. Prognose für x = 3,2 (3.200 €): y = 1,08 + 0,61 · 3,2 = 3,032 Tsd. € (= 3.032 €).\n6. Bestimmtheitsmaß: r² = 0,66² = 0,4356 ≈ 0,43 (43%).",
          step3Interpretation: "Zwischen Einkommen und Konsumausgaben besteht ein mittelstarker positiver linearer Zusammenhang (r = 0,66). Steigt das Einkommen um 1.000 €, steigen die Konsumausgaben um durchschnittlich 610 €; 43% der Varianz der Konsumausgaben werden durch das Einkommen erklärt."
        }
      ]
    },
    {
      id: "q_experience",
      number: "04",
      title: "Erfahrungskurvenmodell (Stückkosten-Degression)",
      chapter: "Kap. 4 · Strategisches Marketing",
      source: "Tutorium 3 (Aufg. 4.1)",
      targetMinutes: 5,
      highYield: true,
      formulaLatex: "K(x) = a \\cdot x^{-b} \\quad \\text{(inflationsbereinigte Stückkosten bei kumulierter Menge } x\\text{)}",
      formulaPlain: "K(x) = a · x^(-b)  |  Kostendifferenz ΔK = K(x_1) - K(x_2)",
      conceptSummary: "Mit jeder Verdopplung der im Zeitablauf kumulierten Produktionsmenge x sinken die inflationsbereinigten Stückkosten K(x) um einen konstanten Prozentsatz (z.B. 20%–30%) aufgrund von Lernkurveneffekten, Fixkostendegression, technischem Fortschritt und Rationalisierung.",
      examTrap: "x ist IMMER die KUMULIERTE Produktionsmenge (nicht die Jahresproduktion!). Achte außerdem auf die Einheiten (z.B. x in Tausend Stück einsetzen vs. Stückzahl direkt einsetzen, je nachdem wie a normiert ist).",
      practiceProblems: [
        {
          code: "Tutorium 3 · Aufgabe 4.1 (Halbleiter-Erfahrungskurve)",
          prompt: "Für zwei Halbleitertypen gilt K(x) = a · x^(-b). Halbleiter 1: a = 3,2 und b = 0,3. Halbleiter 2: a = 7,4 und b = 0,4. Berechnen Sie die Stückkosten bei x_1 = 8.000 und x_2 = 30.000 Stück sowie das Kostensenkungspotenzial in € und %.",
          step1Formula: "K(x) = a · x^(-b); Relative Ersparnis = [K(8.000) - K(30.000)] / K(8.000)",
          step2Calc: "Halbleiter 1 (a=3,2; b=0,3):\n• K_1(8.000) = 3,2 · 8.000^(-0,3) = 3,2 · 0,0675 = 0,216 € ≈ 0,22 €\n• K_1(30.000) = 3,2 · 30.000^(-0,3) = 3,2 · 0,0452 = 0,145 € ≈ 0,14 €\n• Ersparnis HL 1: 0,22 € - 0,14 € = 0,08 € pro Stück (relativ: 1 - (30.000/8.000)^(-0,3) = 32,8%).\n\nHalbleiter 2 (a=7,4; b=0,4):\n• K_2(8.000) = 7,4 · 8.000^(-0,4) = 7,4 · 0,0275 = 0,203 € ≈ 0,20 €\n• K_2(30.000) = 7,4 · 30.000^(-0,4) = 7,4 · 0,0162 = 0,120 € ≈ 0,12 €\n• Ersparnis HL 2: 0,20 € - 0,12 € = 0,08 € pro Stück (relativ: 41,1%).",
          step3Interpretation: "Durch die Ausweitung der kumulierten Produktionsmenge von 8.000 auf 30.000 Stück sinken die Stückkosten bei beiden Halbleitern um rund 0,08 €; Halbleiter 2 weist wegen des höheren Exponenten (b = 0,4 > 0,3) eine stärkere relative Kostendegression auf."
        }
      ]
    },
    {
      id: "q_portfolio",
      number: "05",
      title: "BCG-Portfolio & Marktattraktivitäts-Portfolio",
      chapter: "Kap. 4 · Strategisches Marketing",
      source: "Übung 5 (Aufg. 4.4) & Tutorium 4 (Aufg. 4.3 & 4.4)",
      targetMinutes: 7,
      highYield: true,
      formulaLatex: "\\text{Relativer Marktanteil} = \\frac{\\text{Eigener Marktanteil (bzw. Umsatz)}}{\\text{Marktanteil des stärksten Wettbewerbers}}",
      formulaPlain: "Rel. MA = Eigener MA / MA stärkster Wettbewerber | Punktwerte = Σ (Gewicht_k · Bewertung_k)",
      conceptSummary: "Positionierung von Strategischen Geschäftseinheiten (SGEs) im 4-Felder-BCG-Portfolio (Question Marks, Stars, Cash Cows, Poor Dogs) oder im 9-Felder-Marktattraktivitäts-Portfolio zur Ableitung von Normstrategien und Ressourcenallokation.",
      examTrap: "1) Relativer Marktanteil > 1 ist NUR möglich, wenn man selbst Marktführer ist! Heißt es im Text „Ihr Marktanteil liegt 50% über dem des stärksten Wettbewerbers“, ist der relative Marktanteil direkt 1,50! 2) Kreisfläche = proportional zum Umsatzanteil. 3) Hauptkritikpunkt am Marktattraktivitäts-Portfolio: Gegenseitige Kompensation eklatanter Schwächen durch Stärken bei anderen Kriterien!",
      practiceProblems: [
        {
          code: "Übung 5 · Aufgabe 4.4 (Versandhaus Mode, Elektronik, Möbel)",
          prompt: "Mode: Marktführer, MA liegt 50% über stärkstem Wettbewerber, Marktwachstum 4%, Umsatzanteil 50%. Elektronik: Marktführer, MA liegt 70% über stärkstem Wettbewerber, Wachstum 8%, Umsatzanteil 25%. Möbel: Eigener MA 40%, Hauptwettbewerber 60%, Wachstum 2%, Umsatzanteil 25%. Trennlinie Marktwachstum: 5%. Bestimmen Sie relative Marktanteile, Quadranten und Normstrategien.",
          step1Formula: "Rel. MA = Eigener MA / MA stärkster Wettbewerber; Trennlinien: Rel. MA = 1,0 und Marktwachstum = 5%",
          step2Calc: "• Mode: Rel. MA = 1,50 (> 1), Wachstum = 4% (< 5%), Umsatz = 50% → Cash Cow (Halten / Abschöpfen).\n• Elektronik: Rel. MA = 1,70 (> 1), Wachstum = 8% (> 5%), Umsatz = 25% → Star (Halten / Ausbauen).\n• Möbel: Rel. MA = 40% / 60% = 0,66 (< 1), Wachstum = 2% (< 5%), Umsatz = 25% → Poor Dog (Abschöpfen / Liquidieren).",
          step3Interpretation: "Finanzielle Überschüsse aus dem umsatzstarken Cash-Cow-Bereich Mode (50% Umsatzanteil) sollten abgeschöpft und gezielt in den wachstumsstarken Star-Bereich Elektronik (8% Wachstum) investiert werden, während für Möbel (Poor Dog) ein Rückzug geprüft werden sollte."
        },
        {
          code: "Tutorium 4 · Aufgabe 4.4 (Bauunternehmen Punktbewertung)",
          prompt: "Bereiche A (Einfamilienhäuser), B (Mehrfamilienhäuser), C (Öffentliche Bauvorhaben). Berechnen Sie die gewichteten Mittelwerte für Marktattraktivität und Wettbewerbsposition (Skala 1–5) und erklären Sie das Kompensationsproblem bei Bereich B.",
          step1Formula: "Score = Σ (Gewicht_i · Punktwert_i); Rel. MA = Eigener Umsatz / Umsatz Hauptwettbewerber",
          step2Calc: "1. Marktattraktivität: A = 3,3 | B = 2,8 | C = 1,9.\n2. Relativer Marktanteil: A = 280/580 = 0,48 (Wert 1) | B = 322,5/345 = 0,94 (Wert 3) | C = 770/700 = 1,10 (Wert 4).\n3. Wettbewerbsposition (eigene Gewichtung): A = 1,6 | B = 3,2 | C = 3,0.\n4. Wettbewerbsposition (Gewichtung Hauptwettbewerber): A = 2,2 | B = 2,8 | C = 3,4.",
          step3Interpretation: "Bei Bereich B (Mehrfamilienhäuser) wird eine eklatante Schwäche bei der Preisstellung (Wert 1) durch hohe Werte bei Betreuungsqualität und Terminzuverlässigkeit rechnerisch zum Mittelwert 3,2 ausgeglichen (Kompensationsproblem)."
        }
      ]
    },
    {
      id: "q_conjoint",
      number: "06",
      title: "Conjoint-Analyse (Teilnutzenwerte & Relative Wichtigkeit)",
      chapter: "Kap. 5.1 · Produktpolitik",
      source: "Tutorium 5 (Aufg. 5.1.1)",
      targetMinutes: 6,
      highYield: true,
      formulaLatex: "\\Delta u_j = \\max_m(u_{jm}) - \\min_m(u_{jm}), \\quad w_j = \\frac{\\Delta u_j}{\\sum_{k=1}^{J} \\Delta u_k} \\cdot 100\\%",
      formulaPlain: "Spannweite Δu_j = Max(Teilnutzen) - Min(Teilnutzen) | Rel. Wichtigkeit w_j = Δu_j / Σ(Δu_k)",
      conceptSummary: "Dekompositionelle Methode zur Ermittlung des Einflusses einzelner Produktmerkmale auf den Gesamtnutzen eines Produktkonzepts. Die Spannweite eines Merkmals zeigt, wie stark ein Wechsel von der schlechtesten zur besten Ausprägung den Nutzen verändert.",
      examTrap: "Häufiger Fehler: Die Teilnutzenwerte eines Merkmals einfach addieren statt die Spannweite (Maximum minus Minimum!) zu bilden. Wenn ein Teilnutzenwert negativ ist, Vorzeichen beachten: Max - (-Min) = Max + |Min|!",
      practiceProblems: [
        {
          code: "Tutorium 5 · Aufgabe 5.1.1 (Speiseeis „Ice & Fruit“)",
          prompt: "Teilnutzenwerte: Packungsgröße (0,75L: 1,4 | 1,0L: 2,0), Kalorien (150 kcal: 2,2 | 250 kcal: 1,2 | 300 kcal: 0,4), Fruchtsorte (Erdbeere: 2,3 | Kirsche: 1,8 | Aprikose: 1,2), Preis (2,50€: 2,3 | 2,75€: 1,5 | 3,00€: 0,8). Berechnen Sie die relativen Wichtigkeiten der 4 Merkmale sowie das Produkt mit dem höchsten und niedrigsten Gesamtnutzen.",
          step1Formula: "1. Schritt: Spannweite Δu_j = u_max - u_min je Merkmal. 2. Schritt: w_j = (Δu_j / ΣΔu) · 100%",
          step2Calc: "1. Spannweiten:\n• Packungsgröße: 2,0 - 1,4 = 0,6\n• Kalorien: 2,2 - 0,4 = 1,8\n• Fruchtsorte: 2,3 - 1,2 = 1,1\n• Preis: 2,3 - 0,8 = 1,5\n• Summe aller Spannweiten = 0,6 + 1,8 + 1,1 + 1,5 = 5,0.\n\n2. Relative Wichtigkeiten:\n• Packungsgröße: (0,6 / 5,0) · 100 = 12%\n• Kalorien: (1,8 / 5,0) · 100 = 36%\n• Fruchtsorte: (1,1 / 5,0) · 100 = 22%\n• Preis: (1,5 / 5,0) · 100 = 30%\n\n3. Max/Min Gesamtnutzen:\n• Höchster Nutzen (1L, 150 kcal, Erdbeere, 2,50 €): U_max = 2,0 + 2,2 + 2,3 + 2,3 = 8,8.\n• Niedrigster Nutzen (0,75L, 300 kcal, Aprikose, 3,00 €): U_min = 1,4 + 0,4 + 1,2 + 0,8 = 3,8.",
          step3Interpretation: "Das Merkmal Kalorien beeinflusst die Kaufentscheidung mit einer relativen Wichtigkeit von 36% am stärksten (gefolgt vom Preis mit 30%) und sollte daher bei der Produktgestaltung von „Ice & Fruit“ vorrangig optimiert werden."
        }
      ]
    },
    {
      id: "q_paf_elasticity",
      number: "07",
      title: "Preis-Absatz-Funktionen, Preiselastizität & Amoroso-Robinson / Cournot",
      chapter: "Kap. 5.2 · Preispolitik",
      source: "Übung 7 & 8 (Aufg. 5.2.2–5.2.4) & Tutorium 6 & 7 (Aufg. 5.2.1–5.2.5)",
      targetMinutes: 10,
      highYield: true,
      formulaLatex: "\\varepsilon = x'(p) \\cdot \\frac{p}{x(p)}, \\quad p^* = \\frac{\\varepsilon(p^*)}{1 + \\varepsilon(p^*)} \\cdot K' \\quad \\text{| Linear: } p^* = \\frac{1}{2}\\left(\\frac{a}{b} + k\\right) \\quad \\text{| Mult.: } p^* = \\frac{b}{b-1}\\cdot k",
      formulaPlain: "ε = x'(p)·(p/x) | Umsatzmax: ε = -1 | Gewinnmax: p* = [ε/(1+ε)]·k | Cournot (linear): p* = 0,5·(a/b + k)",
      conceptSummary: "Herzstück der quantitativen Preispolitik: Aufstellen linearer, multiplikativer, exponentieller und doppelt-geknickter (Gutenberg) Preis-Absatz-Funktionen, Ableitung der Preiselastizität ε sowie Bestimmung von Umsatzoptimum (|ε|=1) und Gewinnoptimum.",
      examTrap: "Riesen-Klausurfalle aus Übung 8 (Aufg. 5.2.4): x(p) = 23.600 · e^(-0,5p) ist KEINE multiplikative PAF (da p im Exponenten steht!), sondern eine exponentielle PAF! Dort ist ε NICHT konstant, sondern wegen der Kettenregel ε(p) = -0,5·p! Nur bei x(p) = a · p^(-b) ist die Elastizität konstant ε = -b!",
      practiceProblems: [
        {
          code: "Übung 8 · Aufgabe 5.2.3 & Tutorium 6 · 5.2.1 (Multiplikative PAF: Vanilla Dream & Keksini)",
          prompt: "Vanilla Dream: x(p) = 500 · p^(-4), variable Stückkosten k = 0,90 €. (Keksini: x(p) = p^(-2), k = 1,00 €). Berechnen Sie jeweils die Preiselastizität ε und den gewinnmaximalen Preis p*.",
          step1Formula: "Multiplikative PAF x(p) = a·p^(-b) → ε = -b (konstant). Amoroso-Robinson: p* = [ε / (1 + ε)] · k = [b / (b - 1)] · k",
          step2Calc: "Vanilla Dream:\n• Elastizität: ε = -4 (konstant im gesamten Preisbereich; elastisch da |ε| = 4 > 1 → Preiserhöhungen senken überall den Umsatz).\n• Gewinnmaximaler Preis: p* = (-4 / (1 - 4)) · 0,90 € = (4/3) · 0,90 € = 1,20 €.\n\nKeksini (Tut 6 · 5.2.1):\n• Elastizität: ε = -2 (bei +1% Preis sinkt Absatz um 2%).\n• Gewinnmaximaler Preis: p* = (-2 / (1 - 2)) · 1,00 € = 2 · 1,00 € = 2,00 €.",
          step3Interpretation: "Eine Preiselastizität von ε = -4 bedeutet, dass eine Preiserhöhung um 1% zu einem überproportionalen Absatzrückgang von 4% führt. Der gewinnmaximale Preis für „Vanilla Dream“ liegt nach der Amoroso-Robinson-Relation bei 1,20 €."
        },
        {
          code: "Übung 8 · Aufgabe 5.2.4 (Exponentielle PAF — Klausurfalle!)",
          prompt: "Gegeben ist x(p) = 23.600 · e^(-0,5p). a) Berechnen Sie die Preiselastizität bei p1 = 1,50 €, p2 = 2,80 €, p3 = 3,60 € und p4 = 5,00 €. b) Bei welchem Preis wird der Umsatz maximiert?",
          step1Formula: "Kettenregel: x'(p) = 23.600 · e^(-0,5p) · (-0,5). Einsetzen in ε(p) = x'(p) · (p / x(p)) = -0,5·p. Umsatzmaximum bei ε(p) = -1.",
          step2Calc: "a) Elastizitäten:\n• ε(1,50 €) = -0,5 · 1,50 = -0,75 (unelastisch, |ε| < 1)\n• ε(2,80 €) = -0,5 · 2,80 = -1,40 (elastisch, |ε| > 1)\n• ε(3,60 €) = -0,5 · 3,60 = -1,80 (elastisch)\n• ε(5,00 €) = -0,5 · 5,00 = -2,50 (elastisch)\n\nb) Umsatzmaximum:\n• Bedingung: ε(p) = -1  ⇔  -0,5 · p = -1  ⇔  p_Umax = 2,00 €.",
          step3Interpretation: "Da es sich um eine exponentielle PAF handelt, nimmt die Preissensitivität mit steigendem Preis linear zu (ε = -0,5p). Das Umsatzmaximum wird genau beim Übergang vom unelastischen zum elastischen Bereich bei p = 2,00 € (|ε| = 1) erreicht."
        },
        {
          code: "Tutorium 6 · Aufgabe 5.2.2 & 5.2.3 (Lineare PAF & Cournot-Preis)",
          prompt: "5.2.2 (Dumbo): Bei p1=0,50€ ist x1=150.000; bei p2=0,70€ ist x2=90.000. Bestimmen Sie die lineare PAF, Höchstpreis, Sättigungsmenge und den umsatzmaximalen Preis. 5.2.3 (Fruit Punch): x(p) = 750.000 - 300.000p, K(x) = 320.000 + 0,50x. Berechnen Sie den gewinnmaximalen Cournot-Preis p* und den maximalen Gewinn.",
          step1Formula: "Linear: x(p) = a - b·p mit b = |Δx/Δp|. Cournot-Preis: p* = 0,5 · (a/b + k). Umsatzmax (k=0): p_U = a / (2b).",
          step2Calc: "Zu 5.2.2 (Dumbo):\n• Steigung b = (150.000 - 90.000) / (0,70 - 0,50) = 60.000 / 0,20 = 300.000.\n• Achsenabschnitt a: 150.000 = a - 300.000·0,50 ⇒ a = 300.000 (Sättigungsmenge).\n• PAF: x(p) = 300.000 - 300.000p; Höchstpreis (x=0): p_max = a/b = 1,00 €.\n• Umsatzmaximum: U(p) = 300.000p - 300.000p² ⇒ U'(p) = 0 bei p = 0,50 € (U_max = 75.000 €).\n\nZu 5.2.3 (Fruit Punch):\n• a = 750.000, b = 300.000, k = 0,50 €, K_fix = 320.000 €.\n• Cournot-Preis: p* = 0,5 · (750.000/300.000 + 0,50) = 0,5 · (2,50 + 0,50) = 1,50 €.\n• Absatz x(1,50) = 750.000 - 300.000·1,50 = 300.000 Stück.\n• Maximaler Gewinn G(1,50) = (1,50 - 0,50)·300.000 - 320.000 = 300.000 - 320.000 = -20.000 € (Verlustminimierung wegen hoher Fixkosten!).",
          step3Interpretation: "Der gewinnmaximale Cournot-Preis für „Fruit Punch“ beträgt 1,50 € bei einem Absatz von 300.000 Einheiten; er generiert einen maximalen Deckungsbeitrag von 300.000 €, der die Fixkosten von 320.000 € fast vollständig deckt."
        },
        {
          code: "Übung 7 · Aufg. 5.2.2 & Tutorium 7 · Aufg. 5.2.4/5.2.5 (Gutenberg-PAF & Preisdifferenzierung)",
          prompt: "Üb 5.2.2: Punkte A(0|90), B(6|60), C(15|?), D(30|0) und Steigung im mittleren Bereich m2 = -2/3. Bestimmen Sie die vollständige Gutenberg-Funktion. Tut 5.2.5: PAF_D = 12 - 0,6p; PAF_F = 8 - 0,8p; K(x) = 10 + 4x. Vergleichen Sie den Gewinn bei Einheitspreis vs. räumlicher Preisdifferenzierung.",
          step1Formula: "Gutenberg: Punkt-Steigungs-Form je Abschnitt. Preisdifferenzierung: Gesamt-PAF x_ges = x_D + x_F vs. separate Optimierung je Land.",
          step2Calc: "Zu Übung 5.2.2 (Gutenberg):\n• Abschnitt 1 (0 ≤ p < 6): m1 = (60-90)/(6-0) = -5 ⇒ x(p) = 90 - 5p.\n• Abschnitt 2 (6 ≤ p < 15, monopolistischer Bereich): m2 = -2/3 ⇒ x(15) = 60 - (2/3)·(15-6) = 54 ⇒ C(15|54) und x(p) = 64 - (2/3)p.\n• Abschnitt 3 (15 ≤ p ≤ 30): m3 = (0-54)/(30-15) = -54/15 = -18/5 = -3,6 ⇒ x(p) = 108 - (18/5)p.\n\nZu Tutorium 7 · 5.2.5 (Preisdifferenzierung D vs. F):\n• Einheitspreis: x_ges(p) = (12 - 0,6p) + (8 - 0,8p) = 20 - 1,4p (für p ≤ 10). Cournot: p* = 0,5·(20/1,4 + 4) = 9,14 € ⇒ G_einheit = 26,94 GE.\n• Differenzierte Preise: p*_D = 0,5·(12/0,6 + 4) = 12,00 € (x_D = 4,8); p*_F = 0,5·(8/0,8 + 4) = 7,00 € (x_F = 2,4).\n• Gewinn mit Differenzierung: G_diff = (12-4)·4,8 + (7-4)·2,4 - 10 = 38,4 + 7,2 - 10 = 35,60 GE (+8,66 GE mehr Gewinn!).",
          step3Interpretation: "Durch räumliche Preisdifferenzierung zwischen Deutschland (p*_D = 12,00 €) und Frankreich (p*_F = 7,00 €) werden die unterschiedlichen Zahlungsbereitschaften optimal abgeschöpft, wodurch der Gewinn von 26,94 GE auf 35,60 GE steigt."
        }
      ]
    },
    {
      id: "q_advertising",
      number: "08",
      title: "Analytische Werbebudgetierung (Werbewirkungsfunktionen)",
      chapter: "Kap. 5.3 · Kommunikationspolitik",
      source: "Übung 9 (Aufg. 5.3.1: AKKUrat „Kraftprotz“)",
      targetMinutes: 9,
      highYield: true,
      formulaLatex: "G(W) = (p - k_v) \\cdot x(W) - K_{\\text{fix}} - W \\implies G'(W) = (p - k_v) \\cdot x'(W) - 1 = 0",
      formulaPlain: "Gewinn G(W) = DB_Stück · x(W) - K_fix - W  |  Optimalbedingung: DB_Stück · x'(W) = 1",
      conceptSummary: "Analytische Bestimmung des gewinnmaximalen Werbebudgets W*. Das Werbebudget wird so lange erhöht, bis der Grenzdeckungsbeitrag der letzten investierten Werbe-Euro-Einheit ((p - k_v) · x'(W)) exakt den Grenzkosten der Werbung (1 €) entspricht.",
      examTrap: "Zwei Varianten dieser Aufgabe tauchen in MfN auf (beide beherrschen!): 1) In den aktuellen Übungsfolien (Üb 9): x(W) = 30.000 + 0,12·W + 10·W^(0,5) mit p=90€, k_v=82€ (DB = 8€). 2) In älteren Klausuren/Skript-Varianten: x(W) = 30.000 - 0,25·W + 1.500·ln(W). Vergiss niemals, in G(W) am Ende noch - W (die Werbekosten selbst!) abzuziehen!",
      practiceProblems: [
        {
          code: "Übung 9 · Aufgabe 5.3.1 (AKKUrat „Kraftprotz“ — Wurzel- & ln-Variante)",
          prompt: "Preis p = 90 €, variable Stückkosten k_v = 82 € (Stück-DB = 8 €), Fixkosten K_fix = 175.000 €. Variante A (Übungsskript 2026): x(W) = 30.000 + 0,12W + 10·W^0,5. Variante B (Klausur-Klassiker mit ln): x(W) = 30.000 - 0,25W + 1.500·ln(W). Berechnen Sie jeweils Gewinnfunktion, optimales Budget W*, Absatz x(W*) und Maximalgewinn.",
          step1Formula: "G(W) = 8 · x(W) - 175.000 - W. Ableiten nach W und gleich 0 setzen: G'(W) = 0.",
          step2Calc: "Variante A (Übungsskript 2026: x(W) = 30.000 + 0,12W + 10·W^0,5):\n• G(W) = 8·(30.000 + 0,12W + 10·W^0,5) - 175.000 - W = 65.000 - 0,04W + 80·W^0,5.\n• Erste Ableitung: G'(W) = -0,04 + 40 · W^(-0,5) = 0  ⇔  40 / √W = 0,04  ⇔  √W = 1.000  ⇔  W* = 1.000.000 €.\n• Hinreichende Bedingung: G''(W) = -20 · W^(-1,5) < 0 (Maximum!).\n• Absatz x(W*) = 30.000 + 0,12·1.000.000 + 10·1.000 = 160.000 Stück.\n• Maximaler Gewinn G(W*) = 65.000 - 40.000 + 80.000 = 105.000 €.\n\nVariante B (Klausur-Variante mit ln: x(W) = 30.000 - 0,25W + 1.500·ln(W)):\n• G(W) = 8·(30.000 - 0,25W + 1.500·ln(W)) - 175.000 - W = 65.000 - 3W + 12.000·ln(W).\n• Erste Ableitung (da [ln(W)]' = 1/W): G'(W) = -3 + 12.000 / W = 0  ⇔  3W = 12.000  ⇔  W* = 4.000 €.\n• Absatz x(4.000) = 30.000 - 1.000 + 1.500·ln(4.000) ≈ 41.441 Stück.\n• Gewinn G(4.000) = 65.000 - 12.000 + 12.000·ln(4.000) ≈ 152.529 €.",
          step3Interpretation: "In Variante A wird das Gewinnmaximum bei einem Werbebudget von W* = 1.000.000 € (Absatz: 160.000 Batterien, Gewinn: 105.000 €) erreicht; in der logarithmischen Variante B liegt das optimale Budget bei W* = 4.000 €."
        }
      ]
    },
    {
      id: "q_media_tkp",
      number: "09",
      title: "Intramedienselektion (Tausenderkontaktpreis TKP)",
      chapter: "Kap. 5.3 · Kommunikationspolitik",
      source: "Tutorium 8 (Aufg. 5.3.2)",
      targetMinutes: 5,
      highYield: false,
      formulaLatex: "\\text{TKP} = \\frac{\\text{Kosten einer Belegungseinheit}}{\\text{Reichweite}} \\cdot 1.000, \\quad \\text{TKP}_{\\text{gew}} = \\frac{\\text{Kosten}}{\\sum (g_k \\cdot R_k)} \\cdot 1.000",
      formulaPlain: "TKP = (Belegungskosten / Reichweite) × 1.000  |  Gewichteter TKP nutzt zielgruppengewichtete Kontakte",
      conceptSummary: "Wirtschaftlichkeitsvergleich verschiedener Werbeträger innerhalb einer Mediengattung (z.B. Zeitschriften A, B, C). Der TKP gibt an, wie viel Euro das Unternehmen aufwenden muss, um 1.000 Personen (bzw. 1.000 gewichtete Zielgruppenkontakte) zu erreichen.",
      examTrap: "Je NIEDRIGER der TKP, desto kostengünstiger (besser) ist das Medium! Beim gewichteten TKP werden die Nutzergruppen erst mit ihren Zielgruppengewichten multipliziert, bevor durch die gewichtete Reichweite geteilt wird.",
      practiceProblems: [
        {
          code: "Tutorium 8 · Aufgabe 5.3.2 (Zeitschriftenwahl)",
          prompt: "Zeitschrift A: Kosten 25.000 €, Leserschaft 1.000.000 (davon 50% Gruppe 1, 30% Gruppe 2, 20% Gruppe 3). Zeitschrift B: Kosten 14.000 €, Leserschaft 500.000 (30% Gr. 1, 30% Gr. 2, 40% Gr. 3). Zeitschrift C: Kosten 15.000 €, Leserschaft 600.000 (20% Gr. 1, 40% Gr. 2, 40% Gr. 3). Zielgruppengewichte: Gr. 1 = 0,2; Gr. 2 = 0,3; Gr. 3 = 0,5. Berechnen Sie den ungewichteten und den gewichteten TKP.",
          step1Formula: "Ungewichteter TKP = (Kosten / Leserschaft) · 1.000; Gewichtete Reichweite R_gew = Leserschaft · Σ(Anteil_i · Gewicht_i)",
          step2Calc: "1. Ungewichteter TKP:\n• TKP(A) = (25.000 / 1.000.000) · 1.000 = 25,00 €\n• TKP(B) = (14.000 / 500.000) · 1.000 = 28,00 €\n• TKP(C) = (15.000 / 600.000) · 1.000 = 25,00 €\n\n2. Gewichtungsfaktoren & Gewichteter TKP:\n• Faktor A = 0,5·0,2 + 0,3·0,3 + 0,2·0,5 = 0,10 + 0,09 + 0,10 = 0,29 ⇒ R_gew(A) = 290.000 ⇒ TKP_gew(A) = (25.000 / 290.000)·1.000 = 86,21 €\n• Faktor B = 0,3·0,2 + 0,3·0,3 + 0,4·0,5 = 0,06 + 0,09 + 0,20 = 0,35 ⇒ R_gew(B) = 175.000 ⇒ TKP_gew(B) = (14.000 / 175.000)·1.000 = 80,00 €\n• Faktor C = 0,2·0,2 + 0,4·0,3 + 0,4·0,5 = 0,04 + 0,12 + 0,20 = 0,36 ⇒ R_gew(C) = 216.000 ⇒ TKP_gew(C) = (15.000 / 216.000)·1.000 = 69,44 €.",
          step3Interpretation: "Während A und C beim ungewichteten TKP gleichauf liegen (25,00 €), ist Zeitschrift C unter Berücksichtigung der Zielgruppengewichtung mit einem gewichteten TKP von 69,44 € eindeutig der kosteneffizienteste Werbeträger."
        }
      ]
    },
    {
      id: "q_profit_probeklausur",
      number: "10",
      title: "Gewinn, Wirtschaftlichkeit & Optimale Bestellmenge (Harris-Wilson)",
      chapter: "Kap. 1 & Kap. 5.4 · Wirtschaftlichkeit & Vertriebslogistik",
      source: "Probeklausur Rechenaufgabe & Übung 10 (Aufg. 5.4.3) / Tutorium 9 (5.4.1 & 5.4.2)",
      targetMinutes: 8,
      highYield: true,
      formulaLatex: "G = E - K, \\quad W = \\frac{E}{K}, \\quad q_{\\text{opt}} = \\sqrt{\\frac{200 \\cdot V \\cdot K_b}{p \\cdot i}}",
      formulaPlain: "Gewinn G = Erlöse - Kosten | Wirtschaftlichkeit W = Erlöse / Kosten | Harris-Wilson: q_opt = √[(200·V·K_b)/(p·i)]",
      conceptSummary: "1) Probeklausur-Klassiker: Vergleich von Handlungsoptionen nach absolutem Gewinn (E - K) vs. relativer Wirtschaftlichkeit (E / K) und prozentualer Kostenstruktur. 2) Logistik-Klassiker: Optimale Bestellmenge nach Harris-Wilson als Trade-off zwischen Bestellfixkosten und Lagerhaltungskosten.",
      examTrap: "1) In der Probeklausur maximiert Option C den absoluten Gewinn (8.550 €), aber Option B hat die höchste relative Wirtschaftlichkeit (E/K = 1,42)! Du musst im Antwortsatz zwingend begründen, dass die Empfehlung von der Zielsetzung des Managements abhängt! 2) Bei Harris-Wilson: Steht im Zähler die 200, wird der Lagerkostensatz i als Prozentzahl (z.B. 10 für 10%) eingesetzt; nutzt man die Formel mit 2 im Zähler, setzt man i = 0,10 ein!",
      practiceProblems: [
        {
          code: "Probeklausur MfN · Rechenaufgabe (Optionen A, B, C)",
          prompt: "Vergleichen Sie drei Produktions-/Marketingoptionen A, B und C hinsichtlich Gesamtkosten K, Erlösen E, Gewinn G = E - K, Wirtschaftlichkeit W = E / K sowie dem prozentualen Anteil der Teilkosten an den Gesamtkosten.",
          step1Formula: "G = E - K; Wirtschaftlichkeit W = E / K; Kostenanteil_j = (K_j / K_ges) · 100%",
          step2Calc: "• Option C erzielt den höchsten absoluten Gewinn: G_C = 8.550 € (im Vergleich zu Option A und B).\n• Option B erzielt die höchste relative Wirtschaftlichkeit (Erlös-Kosten-Verhältnis): W_B = E_B / K_B = 1,42 (d.h. pro eingesetztem Euro Kosten werden 1,42 € Erlös generiert).",
          step3Interpretation: "Sofern das Unternehmen nach absolutem Gewinnmaximum strebt, ist Option C (G = 8.550 €) zu wählen; verfolgt das Unternehmen hingegen eine Effizienz- bzw. Wirtschaftlichkeitsmaximierung bei knappem Budget, ist Option B (W = 1,42) vorzuziehen."
        },
        {
          code: "Übung 10 · Aufg. 5.4.3 & Tutorium 9 · Aufg. 5.4.1/5.4.2 (Harris-Wilson Bestellmenge)",
          prompt: "Üb 5.4.3 (Schraubenhandel): Jahresbedarf V = 1.600 Stück, Einstandspreis p = 20 €, Bestellfixkosten K_b = 50 €, Zinssatz 4% + Lagerkostensatz 6% → i = 10%. Berechnen Sie die optimale Bestellmenge q_opt, die Bestellhäufigkeit und vergleichen Sie die Gesamtkosten mit 1× bzw. 2× jährlicher Bestellung.",
          step1Formula: "q_opt = √[(200 · V · K_b) / (p · i)]; Bestellhäufigkeit n = V / q_opt; K_ges = (V/q)·K_b + (q/2)·p·(i/100)",
          step2Calc: "1. Optimale Bestellmenge:\nq_opt = √[(200 · 1.600 · 50) / (20 · 10)] = √[16.000.000 / 200] = √80.000 ≈ 282,84 ≈ 283 Stück.\n\n2. Kostenvergleich (reine Bestell- + Lagerkosten ohne konstanten Einkaufspreis V·p = 32.000 €):\n• Bei q=1.600 (1×/Jahr): K_bestell = 1·50 = 50 €; K_lager = (1.600/2)·20·0,10 = 1.600 € → Summe = 1.650 €.\n• Bei q=800 (2×/Jahr): K_bestell = 2·50 = 100 €; K_lager = (800/2)·20·0,10 = 800 € → Summe = 900 €.\n• Im Optimum (q ≈ 283, ca. 5,65 Bestellungen): K_bestell ≈ 282,84 €; K_lager ≈ 282,84 € → Summe ≈ 565,69 €.",
          step3Interpretation: "Die kostenminimale Bestellmenge nach Harris-Wilson beträgt rund 283 Einheiten pro Bestellung; im Kostenminimum entsprechen die gesamten Bestellkosten exakt den gesamten Lagerhaltungskosten."
        }
      ]
    },
    {
      id: "q_servqual_b2b",
      number: "11",
      title: "SERVQUAL-Qualitätsmessung & B2B-Scoring-Modell",
      chapter: "Kap. 6 · Dienstleistungs- & Industriegütermarketing",
      source: "Tutorium 10 (Aufg. 6.1.2) & Tutorium 11 (Aufg. 6.2.2)",
      targetMinutes: 6,
      highYield: false,
      formulaLatex: "SQ_k = \\frac{1}{n_k}\\sum (W_{ik} - E_{ik}), \\quad S_{\\text{Lieferant}} = \\sum_{k=1}^{K} g_k \\cdot P_{jk}",
      formulaPlain: "SERVQUAL-Score = Wahrgenommene Leistung (Ist) - Erwartung (Soll) | B2B-Scoring = Σ(Gewicht_k · Punkt_jk)",
      conceptSummary: "1) SERVQUAL misst die Dienstleistungsqualität über 5 Dimensionen als Differenz zwischen Wahrnehmung (Ist) und Erwartung (Soll). 2) Im B2B-Marketing werden Lieferanten bei komplexen Beschaffungen über gewichtete Punktbewertungsverfahren (Scoring-Modelle) evaluiert.",
      examTrap: "Bei SERVQUAL bedeutet ein negativer Differenzwert (Ist < Soll), dass die Kundenerwartung nicht erfüllt wurde (Qualitätsdefizit). Zudem auf die Gewichtung der 5 Dimensionen achten!",
      practiceProblems: [
        {
          code: "Tutorium 10 · Aufg. 6.1.2 (SERVQUAL Bankfiliale) & Tutorium 11 · Aufg. 6.2.2 (Lieferantenwahl)",
          prompt: "Tut 6.1.2: 5 SERVQUAL-Dimensionen mit Anspruchsniveau (Erwartung E) und Wahrnehmung (W) auswerten. Tut 6.2.2: 3 Lieferanten anhand von 5 gewichteten Kriterien (Zuverlässigkeit 15%, Preis 35%, Lieferzeit 25%, Techn. Niveau 15%, Beratung 10%) bewerten.",
          step1Formula: "SERVQUAL: Differenz D_i = W_i - E_i je Item & Dimensionsmittelwert. Lieferantenwahl: Gesamtpunktwert = Σ(g_k · P_k)",
          step2Calc: "Zu Tut 11 · Aufg. 6.2.2 (Lieferantenwahl, Skala 1–10):\n• Lieferant A: 0,15·6 + 0,35·8 + 0,25·8 + 0,15·5 + 0,10·5 = 0,90 + 2,80 + 2,00 + 0,75 + 0,50 = 6,95 Punkte.\n• Lieferant B: 0,15·9 + 0,35·6 + 0,25·9 + 0,15·8 + 0,10·7 = 1,35 + 2,10 + 2,25 + 1,20 + 0,70 = 7,60 Punkte.\n• Lieferant C: 0,15·7 + 0,35·5 + 0,25·6 + 0,15·9 + 0,10·8 = 1,05 + 1,75 + 1,50 + 1,35 + 0,80 = 6,45 Punkte.",
          step3Interpretation: "Lieferant B erreicht mit 7,60 Punkten den höchsten gewichteten Gesamtnutzenwert (dank Spitzenwerten bei Lieferzeit und Zuverlässigkeit) und sollte daher den Zuschlag erhalten."
        }
      ]
    }
  ],

  // ==========================================================================
  // SÄULE 3 (20%): RICHTIG/FALSCH-DIAGNOSTIK, SKALENNIVEAUS & GESCHÄFTSTYPEN
  // ==========================================================================
  rfStatements: [
    // Übung 3 · Aufgabe 3.1 (5 Aussagen)
    {
      id: "rf_ue3_1",
      source: "Übung 3 · Aufg. 3.1 (1)",
      chapter: "Kap. 3 · Marktforschung",
      statement: "Sekundärdaten sind Daten, die bereits zu einem früheren Zeitpunkt für andere Zwecke erhoben wurden.",
      isTrue: true,
      shortVerdict: "RICHTIG",
      explanation: "Sekundärdaten (Desk Research) liegen bereits intern (z.B. Umsatzstatistiken) oder extern (z.B. Statistisches Bundesamt) aus früheren Erhebungen vor. Primärdaten (Field Research) werden hingegen originär für das aktuelle Marktforschungsproblem neu erhoben.",
      trapHint: "Abgrenzung Primärdaten vs. Sekundärdaten: Sekundär = schnell & kostengünstig, aber oft veraltet oder nicht exakt passgenau."
    },
    {
      id: "rf_ue3_2",
      source: "Übung 3 · Aufg. 3.1 (2)",
      chapter: "Kap. 3 · Marktforschung",
      statement: "Die Validität einer Messung gibt an, ob die Messung frei von Zufallsfehlern ist.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Die Freiheit von Zufallsfehlern (formale Genauigkeit/Reproduzierbarkeit bei wiederholter Messung) wird durch die RELIABILITÄT (Zuverlässigkeit) beschrieben! Die VALIDITÄT (Gültigkeit) gibt hingegen an, ob tatsächlich das gemessen wird, was gemessen werden soll (Freiheit von systematischen Fehlern).",
      trapHint: "Klassische Klausurfalle! Merksatz: Reliabilität = frei von Zufallsfehlern (präzise Waage). Validität = frei von systematischen Fehlern (misst das richtige Konstrukt). Reliabilität ist notwendig, aber nicht hinreichend für Validität!"
    },
    {
      id: "rf_ue3_3",
      source: "Übung 3 · Aufg. 3.1 (3)",
      chapter: "Kap. 3 · Marktforschung",
      statement: "Bei einer geschichteten Zufallsauswahl wird die Grundgesamtheit zunächst in intern homogene und untereinander heterogene Teilgruppen (Schichten) zerlegt, aus denen dann jeweils Zufallsstichproben gezogen werden.",
      isTrue: true,
      shortVerdict: "RICHTIG",
      explanation: "Bei der geschichteten Auswahl (Stratified Sampling) sind die Schichten in sich möglichst homogen und untereinander möglichst heterogen. Aus JEDER Schicht wird anschließend eine Zufallsstichprobe gezogen.",
      trapHint: "Gegenstück zur Klumpenauswahl (Cluster Sampling): Bei der Klumpenauswahl ist jeder Klumpen ein verkleinertes Abbild der Grundgesamtheit (intern heterogen, untereinander homogen)!"
    },
    {
      id: "rf_ue3_4",
      source: "Übung 3 · Aufg. 3.1 (4)",
      chapter: "Kap. 3 · Marktforschung",
      statement: "Für ordinalskalierte Variablen ist das arithmetische Mittel ein zulässiges und sinnvolles Lagemaß.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Bei einer Ordinalskala (Rangskala) sind die Abstände zwischen den Ausprägungen nicht quantifizierbar (nicht äquidistant). Daher darf kein arithmetisches Mittel berechnet werden; zulässige Lagemaße sind nur der Median (Zentralwert) und der Modus (Modalwert).",
      trapHint: "Skalenniveau-Hierarchie: Nominal → Modus | Ordinal → Modus, Median | Metrisch (Intervall & Verhältnis) → Modus, Median, Arithmetisches Mittel."
    },
    {
      id: "rf_ue3_5",
      source: "Übung 3 · Aufg. 3.1 (5)",
      chapter: "Kap. 3 · Marktforschung",
      statement: "Ein Korrelationskoeffizient von r = 0 beweist, dass zwischen den beiden betrachteten Variablen keinerlei Zusammenhang besteht.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Der Bravais-Pearson-Korrelationskoeffizient r misst ausschließlich LINEARE Zusammenhänge! Bei r = 0 besteht zwar kein linearer Zusammenhang, es kann aber dennoch ein starker nicht-linearer Zusammenhang (z.B. umgekehrte U-Kurve bei der Aktivierungsfunktion!) vorliegen.",
      trapHint: "Doppelte Klausurfalle bei r: 1) r = 0 heißt nur „kein linearer Zusammenhang“. 2) r nahe 1 heißt nur „starker linearer Zusammenhang“, beweist aber noch keine Kausalität (Scheinkorrelation durch Drittvariablen möglich)!"
    },
    // Tutorium 2 · Aufgabe 3.3 (9 Aussagen)
    {
      id: "rf_tut2_1",
      source: "Tutorium 2 · Aufg. 3.3 (1)",
      chapter: "Kap. 3 · Statistik",
      statement: "Die Summe der relativen Häufigkeiten ist abhängig von der Anzahl der Merkmalsausprägungen.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Die Summe aller relativen Häufigkeiten ergibt definitionsgemäß IMMER 1 (bzw. 100%), völlig unabhängig davon, wie viele Merkmalsausprägungen oder Beobachtungen vorliegen.",
      trapHint: "Die Summe der absoluten Häufigkeiten ergibt n (Stichprobenumfang); die Summe der relativen Häufigkeiten ergibt immer 1."
    },
    {
      id: "rf_tut2_2",
      source: "Tutorium 2 · Aufg. 3.3 (2)",
      chapter: "Kap. 3 · Statistik",
      statement: "Bei einem Stichprobenumfang von n = 10 entspricht der Median dem 5. Wert der geordneten Reihe.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Da n = 10 eine gerade Zahl ist, existiert kein einzelner mittlerer Wert. Der Median ist bei geradem n das arithmetische Mittel aus dem (n/2)-ten und dem (n/2 + 1)-ten Wert der geordneten Reihe — hier also aus dem 5. und dem 6. Wert: Me = 0,5 · (x_5 + x_6).",
      trapHint: "Gerades n (z.B. n=10) → Mittelwert aus x_5 und x_6. Ungerades n (z.B. n=9) → exakt der mittlere Wert x_{(n+1)/2} = x_5."
    },
    {
      id: "rf_tut2_3",
      source: "Tutorium 2 · Aufg. 3.3 (3)",
      chapter: "Kap. 3 · Statistik",
      statement: "Der Median ist im Gegensatz zum arithmetischen Mittel unempfindlich gegenüber Ausreißern.",
      isTrue: true,
      shortVerdict: "RICHTIG",
      explanation: "Der Median hängt nur von der Rangposition in der Mitte der sortierten Datenreihe ab. Extreme Ausreißer am oberen oder unteren Rand verändern den Median nicht (robustes Lagemaß), während das arithmetische Mittel stark verzerrt wird.",
      trapHint: "Merke: Median und Interquartilsabstand (IQA) sind robust gegen Ausreißer; arithmetisches Mittel, Varianz und Spannweite sind empfindlich gegen Ausreißer."
    },
    {
      id: "rf_tut2_4",
      source: "Tutorium 2 · Aufg. 3.3 (4)",
      chapter: "Kap. 3 · Statistik",
      statement: "Der Modus einer Verteilung ist immer eindeutig bestimmt.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Der Modus (häufigster Wert) muss nicht eindeutig sein: Treten zwei oder mehr Ausprägungen gleich häufig als Spitzenreiter auf, ist die Verteilung bimodal bzw. multimodal (wie in Tutorium 2 Aufg. 3.2 mit Mo_1 = 1 und Mo_2 = 2).",
      trapHint: "Zudem hat der Modus nur dann Informationsgehalt, wenn sich eine deutliche Häufung zeigt."
    },
    {
      id: "rf_tut2_5",
      source: "Tutorium 2 · Aufg. 3.3 (5)",
      chapter: "Kap. 3 · Statistik",
      statement: "Die Spannweite berücksichtigt bei ihrer Berechnung alle Beobachtungswerte einer Stichprobe.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Die Spannweite R = x_max - x_min nutzt ausschließlich die beiden Extremwerte (Minimum und Maximum) und ignoriert alle dazwischenliegenden Beobachtungswerte komplett. Deshalb ist sie extrem anfällig für Ausreißer.",
      trapHint: "Varianz und Standardabweichung berücksichtigen hingegen alle Beobachtungswerte."
    },
    {
      id: "rf_tut2_6",
      source: "Tutorium 2 · Aufg. 3.3 (6)",
      chapter: "Kap. 3 · Statistik",
      statement: "Die Varianz kann niemals negativ werden.",
      isTrue: true,
      shortVerdict: "RICHTIG",
      explanation: "Da bei der Berechnung der Varianz s² = (1/n)·Σ(x_i - x̄)² alle Abweichungen vom Mittelwert quadriert werden, sind sämtliche Summanden größer oder gleich null. Die Varianz ist daher immer ≥ 0 (und genau dann 0, wenn alle Beobachtungswerte identisch sind).",
      trapHint: "Die einfache Summe der unquadrierten Abweichungen Σ(x_i - x̄) ist hingegen immer exakt gleich 0!"
    },
    {
      id: "rf_tut2_7",
      source: "Tutorium 2 · Aufg. 3.3 (7)",
      chapter: "Kap. 3 · Statistik",
      statement: "Die Kovarianz ist ein normiertes Maß und liegt immer zwischen -1 und +1.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Die Kovarianz s_xy ist NICHT normiert und hängt vom Maßstab (den Einheiten) der Variablen x und y ab; ihr Wertebereich ist (-∞, +∞). Erst durch Division durch das Produkt der Standardabweichungen (s_x · s_y) entsteht der normierte Korrelationskoeffizient r ∈ [-1; +1].",
      trapHint: "Kovarianz → zeigt nur die Richtung (Vorzeichen), nicht die Stärke. Korrelationskoeffizient r → zeigt Richtung UND Stärke!"
    },
    {
      id: "rf_tut2_8",
      source: "Tutorium 2 · Aufg. 3.3 (8)",
      chapter: "Kap. 3 · Statistik",
      statement: "Das Bestimmtheitsmaß r² gibt den Anteil der durch die Regression erklärten Varianz an der Gesamtvarianz von y an.",
      isTrue: true,
      shortVerdict: "RICHTIG",
      explanation: "Das Bestimmtheitsmaß r² = Σ(ŷ_i - ȳ)² / Σ(y_i - ȳ)² liegt zwischen 0 und 1 (0% bis 100%) und misst als Gütemaß der linearen Regression exakt den Anteil der erklärten Varianz an der gesamten Varianz der abhängigen Variable y.",
      trapHint: "Bei der linearen Einfachregression ist das Bestimmtheitsmaß r² exakt das Quadrat des Korrelationskoeffizienten r."
    },
    {
      id: "rf_tut2_9",
      source: "Tutorium 2 · Aufg. 3.3 (9)",
      chapter: "Kap. 3 · Statistik",
      statement: "Mit Hilfe der Korrelationsanalyse lassen sich Ursache-Wirkungs-Beziehungen (Kausalitäten) eindeutig nachweisen.",
      isTrue: false,
      shortVerdict: "FALSCH",
      explanation: "Die Korrelationsanalyse ist symmetrisch (r_xy = r_yx) und misst lediglich das gemeinsame Auftreten zweier Variablen. Sie trifft keine Aussage darüber, welche Variable Ursache und welche Wirkung ist, oder ob eine Drittvariable beide beeinflusst (Scheinkorrelation, z.B. Störche und Geburtenrate).",
      trapHint: "Für Ursache-Wirkungs-Beziehungen wird die Regressionsanalyse (mit theoretisch begründeter Kausalrichtung) bzw. ein Kausalexperiment benötigt."
    }
  ],

  // Skalenniveau-Trainer (Tutorium 2 · Aufgabe 3.1)
  scaleItems: [
    {
      id: "sc_1",
      item: "Namen der besuchten Einzelhandelsgeschäfte (z.B. Aldi, Edeka, Rewe)",
      correctScale: "Nominalskala",
      explanation: "Reine Klassifikation / Bezeichnung ohne natürliche Rangfolge (nur Gleichheit/Verschiedenheit = / ≠ entscheidbar). Zulässiges Lagemaß: Modus."
    },
    {
      id: "sc_2",
      item: "Beruf der Befragten (z.B. Arzt, Lehrer, Ingenieur, Student)",
      correctScale: "Nominalskala",
      explanation: "Qualitative Kategorien ohne objektive mathematische Rangordnung. Zulässiges Lagemaß: Modus."
    },
    {
      id: "sc_3",
      item: "Allgemeine Zufriedenheit mit dem Einkauf (1 = sehr unzufrieden bis 5 = sehr zufrieden)",
      correctScale: "Ordinalskala (in der Marktforschungspraxis oft als quasi-metrisch / Intervallskala behandelt)",
      explanation: "Streng methodisch eine Ordinalskala (Rangordnung < / >, aber Abstände subjektiv nicht zwingend gleich). Bei äquidistant gestalteter Rating-Skala in der Praxis oft wie eine Intervallskala ausgewertet."
    },
    {
      id: "sc_4",
      item: "Außentemperatur am Einkaufstag in Grad Celsius (°C)",
      correctScale: "Intervallskala",
      explanation: "Metrische Skala mit gleichen Abständen, aber WILLKÜRLICHEM Nullpunkt (0 °C bedeutet nicht „keine thermische Energie“, und 20 °C ist nicht doppelt so warm wie 10 °C!). Differenzen sind sinnvoll, Verhältnisse nicht."
    },
    {
      id: "sc_5",
      item: "Ausgaben beim Einkauf in Euro (€)",
      correctScale: "Verhältnisskala (Ratioskala)",
      explanation: "Metrische Skala mit gleichen Abständen UND absolutem, natürlichem Nullpunkt (0 € = keinerlei Ausgaben). Verhältnisse sind sinnvoll (100 € sind doppelt so viel wie 50 €). Alle Lagemaße inkl. Variationskoeffizient zulässig."
    }
  ],

  // Backhaus B2B-Geschäftstypen-Trainer (Übung 11 · Aufgabe 6.1.3)
  backhausItems: [
    { id: "bh_1", item: "Lackierroboter (Standard-Industrieroboter aus Katalog)", type: "Produktgeschäft", reason: "Einzeltransaktion (Spotmarkt), vorgefertigtes Seriengut ohne spezifischen System-Folgekaufzwang." },
    { id: "bh_2", item: "Büromaterial (Druckerpapier, Stifte für Unternehmen)", type: "Produktgeschäft", reason: "Standardisiertes Massengut, isolierter Einzelkauf ohne langfristige vertragliche Bindung oder Systemabhängigkeit." },
    { id: "bh_3", item: "Kugelrollen für Gepäckbänder am Flughafen (spezifisch gefertigt für das Band des Herstellers)", type: "Zuliefergeschäft", reason: "Kundenspezifische Vorprodukte, die in das Endprodukt des Abnehmers eingehen, mit langfristiger Rahmenvereinbarung (Kaufverbund auf Dauer)." },
    { id: "bh_4", item: "Schiffbau (Bau eines individuellen Kreuzfahrtschiffs nach Reederei-Vorgaben)", type: "Projektgeschäft", reason: "Komplexe, kundenindividuelle Einmalfertigung (Unikat) mit klar definiertem Projektabschluss ohne nachfolgenden System-Lock-in." },
    { id: "bh_5", item: "Autositze für einen Automobilhersteller (Just-in-Time Lieferung in die Serienfertigung)", type: "Zuliefergeschäft", reason: "Klassisches OEM-Zuliefergeschäft: Kundenspezifische Entwicklung & langfristiger Liefervertrag über den Modelllebenszyklus." },
    { id: "bh_6", item: "Gabelstapler (Serienmodell für Lagerhalle)", type: "Produktgeschäft", reason: "Standardisiertes Investitionsgut für isolierte Kaufentscheidung ohne System-Lock-in." },
    { id: "bh_7", item: "Bau eines schlüsselfertigen Kernkraftwerks / Staudamms", type: "Projektgeschäft", reason: "Hochkomplexe, kundenindividuelle Großanlage als abgeschlossenes Einzelprojekt." },
    { id: "bh_8", item: "Telekommunikationsanlage mit proprietärer Architektur (Basisstation + spätere Erweiterungsmodule)", type: "Systemgeschäft", reason: "Kaufverbund durch technische Kompatibilitätszwänge: Der Einstiegskauf legt den Kunden bei späteren Erweiterungen auf denselben Anbieter fest (Lock-in!)." },
    { id: "bh_9", item: "Unternehmensweite SAP-ERP-Software-Einführung (Basislizenz + spätere Modul-/Release-Erweiterungen)", type: "Systemgeschäft", reason: "Sukzessive Beschaffung von Systemkomponenten mit hohen Wechselbarrieren (technischer & organisatorischer Verbund)." }
  ],

  // ==========================================================================
  // SÄULE 1 (45%): GROUPED-CHUNKING-TRESOR & CASE-STUDY-MATRIZEN
  // ==========================================================================
  groupedChunks: [
    {
      id: "gc_budget",
      title: "Heuristische Methoden der Werbebudgetierung",
      cueTag: "[5 in 3 Clustern]",
      chapter: "Kap. 5.3 · Kommunikationspolitik (Üb 9 · Aufg. 5.3.2)",
      promptQuestion: "Nennen und strukturieren Sie die 5 heuristischen Ansätze der Budgetierung in 3 logischen Clustern. Was ist das zentrale methodische Problem der umsatz-/absatzorientierten Methode?",
      clusters: [
        {
          name: "Cluster 1: Finanz- & Vergangenheitsorientiert (2)",
          items: [
            "Ausrichtung an den verfügbaren Finanzmitteln (All-you-can-afford): Budget richtet sich nach Liquidität; ignoriert Werbewirkung völlig.",
            "Ausrichtung an den bisherigen Werbeausgaben (Fortschreibung): Vorjahresbudget ± X%; sehr einfach, aber fortschreiben vergangener Fehlallokationen."
          ]
        },
        {
          name: "Cluster 2: Markt- & Leistungsorientiert (2)",
          items: [
            "Ausrichtung am Umsatz bzw. Absatz (Percentage-of-Sales): Fester Prozentsatz vom Umsatz; ACHTUNG ZIRKELSCHLUSS: Werbung wird als Folge statt als Ursache des Umsatzes behandelt (prozyklisches Kürzen in der Krise!).",
            "Ausrichtung an der Konkurrenz (Competitive Parity / Share of Voice): Orientierung am Branchendurchschnitt oder Hauptwettbewerber."
          ]
        },
        {
          name: "Cluster 3: Zielorientiert (1)",
          items: [
            "Ziel- und Aufgabenmethode (Objective-and-Task): 1. Kommunikationsziele festlegen → 2. Maßnahmen definieren → 3. Kosten kalkulieren. Logisch bester heuristischer Ansatz!"
          ]
        }
      ]
    },
    {
      id: "gc_mafo",
      title: "10 Schritte eines Marktforschungsprojekts",
      cueTag: "[10 in 3-3-4 Projektphasen]",
      chapter: "Kap. 3 · Marktforschung",
      promptQuestion: "Gliedern Sie die 10 idealtypischen Phasen eines Marktforschungsprozesses nach dem 3-3-4-Projektphasen-Schema.",
      clusters: [
        {
          name: "Phase 1: Konzeption & Design (Schritte 1–3)",
          items: [
            "1. Problemformulierung (Untersuchungsziel präzisieren)",
            "2. Festlegung des Untersuchungsdesigns (explorativ, deskriptiv, kausal; Primär vs. Sekundär)",
            "3. Bestimmung der Datenerhebungsmethode (Befragung, Beobachtung, Experiment, Panel)"
          ]
        },
        {
          name: "Phase 2: Operationalisierung & Feldphase (Schritte 4–6)",
          items: [
            "4. Auswahlverfahren / Stichprobenplanung (Grundgesamtheit, Zufalls- vs. bewusste Auswahl, Umfang n)",
            "5. Gestaltung des Erhebungsinstruments (Fragebogenkonstruktion, Skalierung, Pretest)",
            "6. Durchführung der Datenerhebung (Feldphase / Fieldwork & Qualitätskontrolle)"
          ]
        },
        {
          name: "Phase 3: Auswertung & Transfer (Schritte 7–10)",
          items: [
            "7. Datenaufbereitung und -prüfung (Editieren, Codieren, Bereinigung von Ausreißern/Missing Values)",
            "8. Datenanalyse (Univariate, bivariate und multivariate statistische Verfahren)",
            "9. Interpretation der Ergebnisse (Rückbezug auf die Ausgangsfragestellung)",
            "10. Präsentation & Forschungsbericht (Handlungsempfehlungen für das Management)"
          ]
        }
      ]
    },
    {
      id: "gc_vertrieb",
      title: "10 Anforderungskriterien an externe Vertriebspartner",
      cueTag: "[10 in 3 Clustern: 3-3-4]",
      chapter: "Kap. 5.4 · Vertriebspolitik (Üb 10 · Aufg. 5.4.1)",
      promptQuestion: "Nach welchen 10 Kriterien (geclustert in 3 Dimensionen) sollte ein Hersteller externe Absatzmittler auswählen?",
      clusters: [
        {
          name: "Cluster 1: Ökonomische & Quantitative Kriterien (3)",
          items: [
            "1. Vertriebskosten (Margenforderungen, Rabatte, Transaktionskosten)",
            "2. Mögliches Umsatz- und Absatzvolumen (Marktabdeckung & Verkaufsstärke)",
            "3. Finanzielle Stabilität / Bonität des Vertriebspartners"
          ]
        },
        {
          name: "Cluster 2: Macht-, Steuerungs- & Konfliktkriterien (3)",
          items: [
            "4. Beeinflussbarkeit und Steuerbarkeit durch den Hersteller (Durchsetzung der Preis-/Markenpolitik)",
            "5. Konfliktpotenzial und Kooperationsbereitschaft (Vermeidung von Kanalkonflikten)",
            "6. Flexibilität / Anpassungsfähigkeit (Reaktion auf Marktveränderungen vs. Vertragsbindung)"
          ]
        },
        {
          name: "Cluster 3: Qualitative & Kundenbezogene Kriterien (4)",
          items: [
            "7. Produkt- und Beratungskompetenz (Technisches Know-how, geschultes Personal)",
            "8. Image des Vertriebspartners (Fit zum Markenimage des Herstellers, kein Image-Spillover nach unten)",
            "9. Kundenstruktur / Zielgruppenzugang des Partners",
            "10. Zuverlässigkeit und Logistik-/Servicequalität (Liefertreue, Kundendienst)"
          ]
        }
      ]
    },
    {
      id: "gc_cd_paradigma",
      title: "C/D-Paradigma & 3 Ansatzpunkte zur Zufriedenheitssteigerung",
      cueTag: "[3 Stellschrauben + Modellkern]",
      chapter: "Kap. 2 · Konsumentenverhalten (Üb 3 · Aufg. 2.3)",
      promptQuestion: "Erklären Sie das Confirmation/Disconfirmation-Paradigma und nennen Sie die 3 Ansatzpunkte, wie ein Unternehmen die Kundenzufriedenheit gezielt beeinflussen kann.",
      clusters: [
        {
          name: "Modellkern: Vergleichsprozess",
          items: [
            "Kundenzufriedenheit entsteht aus dem kognitiven Vergleich zwischen der erwarteten Leistung (Soll-Leistung vor dem Kauf) und der wahrgenommenen Leistung (Ist-Leistung nach dem Kauf).",
            "Ist < Soll → Negative Diskonfirmation (Unzufriedenheit) | Ist = Soll → Konfirmation (Basis-Zufriedenheit) | Ist > Soll → Positive Diskonfirmation (Begeisterung / hohe Zufriedenheit)."
          ]
        },
        {
          name: "Die 3 strategischen Ansatzpunkte",
          items: [
            "1. Steigerung der tatsächlichen objektiven Produkt-/Serviceleistung (Qualitätsverbesserung in F&E, Produktion, Service).",
            "2. Gezielte Steuerung der Wahrnehmung der Ist-Leistung durch den Kunden (z.B. Nachkauf-Kommunikation, Bestätigung der Kaufentscheidung zur Reduktion kognitiver Dissonanz).",
            "3. Realistische Steuerung des Erwartungsniveaus (Soll-Komponente): Keine überzogenen Werbeversprechen abgeben (Vermeidung von Overpromising), da überhöhte Erwartungen trotz guter Ist-Leistung zu Unzufriedenheit führen!"
          ]
        }
      ]
    },
    {
      id: "gc_ziele_segmente",
      title: "3 Marketing-Zielkategorien & 5 Arten von Segmentierungskriterien",
      cueTag: "[3 Zielstufen] & [5 Kriterienarten]",
      chapter: "Kap. 1 & Kap. 4 · Strategie (Üb 5 · Aufg. 4.1 & 4.3)",
      promptQuestion: "Systematisieren Sie die 3 Kategorien von Marketingzielen (inkl. Kausalkette) sowie die 5 Arten von Kriterien zur Marktsegmentierung.",
      clusters: [
        {
          name: "Kausalkette der 3 Marketing-Zielkategorien (Üb 5 · 4.1)",
          items: [
            "1. Potenzialbezogene Ziele (vorökonomisch, in den Köpfen der Kunden): Bekanntheitsgrad, Image, Einstellungen, Kundenzufriedenheit.",
            "2. Markterfolgsbezogene Ziele (tatsächliches Kaufverhalten): Kundenloyalität, Wiederkaufrate, Absatzmenge, Marktanteil, Preisniveau.",
            "3. Wirtschaftliche Ziele (direkter GuV-Bezug): Umsatz, Deckungsbeitrag, Marketingkosten, Gewinn, Kundenprofitabilität."
          ]
        },
        {
          name: "5 Arten von Segmentierungskriterien (Üb 5 · 4.3)",
          items: [
            "1. Demographische Kriterien (Alter, Geschlecht, Familienstand, Wohnortgröße, Region)",
            "2. Sozioökonomische Kriterien (Einkommen, Bildungsstand, Beruf, soziale Schicht)",
            "3. Allgemeine Persönlichkeitsmerkmale / Psychographisch (Lebensstil/Lifestyle, Werte, Interessen, Einstellungen)",
            "4. Nutzenkriterien / Benefit Segmentation (Preisnutzen, Qualitätsnutzen, Imagenutzen, Servicenutzen)",
            "5. Kaufverhaltensbezogene Kriterien (Preissensitivität, Markenloyalität, Einkaufsstättenwahl, Informationsverhalten)"
          ]
        }
      ]
    },
    {
      id: "gc_dl_gaps_7p",
      title: "Dienstleistungsmarketing: 3 Merkmale, 5 GAPs & 7 Ps",
      cueTag: "[3 Merkmale · 5 GAPs · 7 Ps]",
      chapter: "Kap. 6.1 · Dienstleistungsmarketing (Üb 11 · Aufg. 6.1.1)",
      promptQuestion: "Nennen Sie die 3 konstitutiven Merkmale von Dienstleistungen, die 5 Lücken (GAPs) des Qualitätsmodells nach Parasuraman/Zeithaml/Berry sowie die 3 zusätzlichen Ps des Dienstleistungs-Mix.",
      clusters: [
        {
          name: "3 Konstitutive Merkmale & Implikationen",
          items: [
            "1. Immaterialität (Nicht-Greifbarkeit) → Qualitätsunsicherheit vor dem Kauf → Implikation: Visualisierung / Tangibilisierung (Markenaufbau, Zertifikate, physisches Umfeld).",
            "2. Uno-actu-Prinzip (Untrennbarkeit von Produktion & Konsum) → Keine Lagerfähigkeit! → Implikation: Kapazitäts- und Nachfragesteuerung (Preisdifferenzierung nach Zeit, Reservierungssysteme).",
            "3. Integration des externen Faktors (Kunde wirkt mit) → Qualität hängt vom Kunden ab → Implikation: Standardisierung von Prozessen & Kundenschulung."
          ]
        },
        {
          name: "Die 5 GAPs der Dienstleistungsqualität",
          items: [
            "GAP 1 (Management-Gap): Kundenerwartung vs. Wahrnehmung der Kundenerwartung durch das Management (Ursache: mangelnde Marktforschung).",
            "GAP 2 (Spezifikations-Gap): Wahrnehmung des Managements vs. interne Qualitätsstandards/Spezifikationen.",
            "GAP 3 (Erstellungs-Gap): Qualitätsstandards vs. tatsächlich erbrachte Dienstleistungsqualität (Ursache: Personalmangel, Überlastung).",
            "GAP 4 (Kommunikations-Gap): Tatsächlich erbrachte Leistung vs. externe Kommunikation/Werbeversprechen (Gefahr von Overpromising!).",
            "GAP 5 (Kunden-Gap / Kern-Gap): Erwartete Dienstleistung vs. wahrgenommene Dienstleistung beim Kunden (Resultat aus GAP 1–4!)."
          ]
        },
        {
          name: "Erweiterung von 4 Ps auf 7 Ps",
          items: [
            "5. Personalpolitik (People): Kundenkontaktpersonal verkörpert die Dienstleistung (Schulung, Motivation, Auftreten).",
            "6. Prozesspolitik (Processes): Reibungslose Gestaltung der Dienstleistungserstellung und Wartezeitenmanagement.",
            "7. Ausstattungspolitik / Physische Fazilitäten (Physical Evidence): Gestaltung der Geschäftsräume, Ambiente, Kleidung (siehe McCafé / Starbucks)."
          ]
        }
      ]
    },
    {
      id: "gc_b2b_buying_center",
      title: "Industriegütermarketing: Buying Center & 4 Geschäftstypen",
      cueTag: "[6 Rollen im Buying Center] & [2×2 Matrix Backhaus]",
      chapter: "Kap. 6.2 · Industriegütermarketing (Üb 11 & 12)",
      promptQuestion: "Welche Rollen wirken in einem organisationalen Buying Center zusammen und wie grenzt Backhaus die 4 Geschäftstypen im B2B-Marketing ab?",
      clusters: [
        {
          name: "Rollen im Buying Center (Webster/Wind)",
          items: [
            "1. Initiator (Initiator): Stößt den Beschaffungsprozess durch Erkennen eines Problems an.",
            "2. Verwender (User): Arbeitet später mit dem Produkt; beurteilt Praxistauglichkeit.",
            "3. Informationsselektierer (Gatekeeper): Kontrolliert den Informationsfluss in das Buying Center hinein (z.B. Assistenz, IT-Vorprüfung).",
            "4. Beeinflusser (Influencer): Gibt technische Spezifikationen oder Prüfkriterien vor (z.B. Ingenieure, Berater).",
            "5. Einkäufer (Buyer): Besitzt formale Verhandlungsbefugnis für Preise und Lieferkonditionen.",
            "6. Entscheider (Decider): Trifft die finale Kaufentscheidung aufgrund seiner hierarchischen Machtposition."
          ]
        },
        {
          name: "4 Geschäftstypen nach Backhaus (Kaufverbund × Individualisierung)",
          items: [
            "1. Produktgeschäft: Isolierter Einzelkauf + Standardisiertes Seriengut (z.B. Gabelstapler, Büromaterial) → Fokus: Marken- & Massenmarketing.",
            "2. Projektgeschäft: Isolierter Einzelkauf + Kundenindividuelles Unikat (z.B. Schiffbau, Kraftwerk) → Fokus: Referenzmarketing & Ausschreibungsmanagement.",
            "3. Systemgeschäft: Kaufverbund (Folgekäufe durch techn. Lock-in) + Standardisierte Systemarchitektur (z.B. TK-Anlage, ERP-System) → Fokus: Einstiegspreis-Subventionierung & Lock-in-Aufbau.",
            "4. Zuliefergeschäft: Kaufverbund (langfristige Rahmenverträge) + Kundenspezifische Vorprodukte (z.B. Autositze Just-in-Time) → Fokus: Key-Account-Management & Prozessintegration."
          ]
        }
      ]
    }
  ],

  // Case Studies (Säule 1: Konzeptioneller Case-Transfer)
  caseStudies: [
    {
      id: "case_wein_coke",
      title: "Wein-Ankertheorie & Coca-Cola Zuckerdebatte",
      source: "Übung 2 · Aufg. 2.1 & 2.2",
      chapter: "Kap. 2 · Konsumentenverhalten",
      problem: "1) Ein Weinhändler möchte den Absatz mittelpreisiger und teurer Weine steigern. 2) Coca-Cola sieht sich mit sinkendem Limo-Absatz und gesellschaftlicher Kritik an Zucker/Adipositas konfrontiert.",
      modelDiagnosis: "1) Ankertheorie (Assimilations-/Kontrasteffekt) & Prospect Theory (Referenzpunktabhängigkeit, Verlustaversion: Verluste wiegen schwerer als gleich große Gewinne). 2) S-O-R-Modell & Einstellungsänderung (affektive vs. kognitive Komponente).",
      solutionMeasures: [
        "Wein-Case: Aufnahme eines extrem hochpreisigen Prestige-Weins als oberen Anker ins Regal → Mittelpreisige Weine erscheinen relativ zum neuen Anker als Gewinn/Schnäppchen (Kontrasteffekt + Prospect Theory).",
        "Coca-Cola: Produktvariation & -differenzierung (Coca-Cola Zero Sugar, kleinere Portionsgrößen/Mini-Cans mit höherem Literpreis!), transparente Nährwertkennzeichnung und Lifestyle-/Sport-Sponsoring."
      ],
      tradeOff: "Zu extreme Ankerpreise außerhalb des glaubwürdigen Bereichs werden vom Kunden ignoriert; bei Coca-Cola birgt eine Rezepturänderung des Originals („New Coke“-Desaster) massive Reaktanzgefahren — daher Flankierung über Zero-Linien statt Änderung des Klassikers."
    },
    {
      id: "case_mittelklassewagen",
      title: "Mittelklassewagen in der Sättigungsphase",
      source: "Übung 5 · Aufg. 4.2",
      chapter: "Kap. 4 · Strategisches Marketing (Lebenszyklus)",
      problem: "Nach starkem Wachstum und hohem Absatzniveau sinken die Absatzzahlen eines Mittelklassewagens seit einigen Jahren. Das Nachfolgemodell ist erst in 2 Jahren marktreif.",
      modelDiagnosis: "Produktlebenszyklusmodell (Homburg): Das Fahrzeug hat die Reifephase überschritten und befindet sich in der Sättigungs-/Degenerationsphase (sinkender Absatz und schrumpfende Gewinne).",
      solutionMeasures: [
        "Strategische Alternative 1 (Empfehlung!): Aktive Verlängerung des Lebenszyklus (Relaunch) durch Produktmodifikation (Facelift, Sondermodelle, Zusatzausstattung), Preisaktionen (Sonderleasing, Inzahlungnahme-Prämien) und verstärkte Verkaufsförderung.",
        "Strategische Alternative 2 (Abzulehnen): Sofortiger Investitionsstopp / Abschöpfen ohne Marketingunterstützung."
      ],
      tradeOff: "Begründung für Alternative 1: Zwei Jahre Überbrückungszeit bis zum Nachfolger sind im Automobilmarkt viel zu lang für einen Investitionsstopp — ohne Relaunch-Maßnahmen drohen ein drastischer Absatzeinbruch, Unterauslastung der Werke (Fixkostenproblem!) und Abwanderung der Stammkunden zur Konkurrenz."
    },
    {
      id: "case_iphone",
      title: "Apple iPhone Launch (2007/2008) & Preisdifferenzierung",
      source: "Übung 6 · Aufg. 5.1.2 & Übung 7 · Aufg. 5.2.1",
      chapter: "Kap. 5.1 & 5.2 · Produkt- & Preispolitik",
      problem: "Apple führte das erste iPhone (8 GB) im Juni 2007 für 599 US-$ ein, senkte den Preis nach nur 2 Monaten (Sept. 2007) auf 399 US-$ und brachte das iPhone 3G im Juli 2008 für 199 US-$ auf den Markt.",
      modelDiagnosis: "Kombination aus kurzfristiger Skimmingstrategie (Abschöpfung der Early Adopters mit unelastischer Nachfrage) und raschem Umschwung auf eine Penetrationsstrategie (Massenmarkterschließung, Netzwerkeffekte für App-Store-Ökosystem, Erfahrungskurveneffekte).",
      solutionMeasures: [
        "Referenzpreis-Effekt: Der hohe Einführungspreis (599 US-$) setzte einen hohen internen Referenzpreis (Qualitätsanker). Die Preissenkung auf 399 US-$ wirkte dadurch als starker Kaufanreiz (Absatzsprung von 270.000 auf 2,3 Mio. Stück in Q4/07).",
        "Formen der Preisdifferenzierung bei Apple: 1) Leistungsbezogen (Speichergrößen 128/256/512 GB, Pro vs. Standard), 2) Räumlich (USA 721 € vs. Deutschland 949 € vs. Norwegen 1.028 €), 3) Personenbezogen (Bildungsrabatt für Studierende beim iPad), 4) Preisbündelung (Mac + AirPods)."
      ],
      tradeOff: "Gefahr schneller Preissenkungen bei Skimming: Massive Verärgerung der Erstkäufer (Apple musste 100 US-$ Store-Gutschriften als Kulanz auszahlen!) sowie dauerhaftes Absinken des Referenzpreises. Bei räumlicher Preisdifferenzierung drohen Grauimporte/Arbitrage, wenn Preisunterschiede Transportkosten übersteigen."
    },
    {
      id: "case_redbull_mcd",
      title: "Red Bull Stratos (Social Media) & McDonald's Franchising",
      source: "Übung 9 · Aufg. 5.3.3 & Übung 10 · Aufg. 5.4.2",
      chapter: "Kap. 5.3 & 5.4 · Kommunikation & Vertrieb",
      problem: "1) Wie gelingt es Red Bull mit dem Stratosphärensprung von Felix Baumgartner, weltweite Markenwirkung ohne klassische Produktwerbung zu erzielen? 2) Warum setzt McDonald's auf Franchising statt auf reine Eigenfilialen?",
      modelDiagnosis: "1) Content Marketing, Event-Marketing & Viral/Earned Media (hohe emotionale Aktivierung im S-O-R-Modell). 2) Vertragliches vertikales Vertriebssystem (Franchising als Arbeitsteilung zwischen Systemkopf und selbstständigem Unternehmer).",
      solutionMeasures: [
        "Red Bull Stratos: Marke steht nicht als aufdringlicher Sender im Vordergrund, sondern liefert extremen Mehrwert-Content, der organisch über soziale Netzwerke und Nachrichtenmedien (Earned Media) geteilt wird und das Markenimage („verleiht Flügel“, Grenzerfahrung) authentisch auflädt.",
        "McDonald's Franchising: Franchisegeber liefert Marke, Betriebskonzept, Einkaufsmacht, Schulung & überregionale Werbung; Franchisenehmer bringt lokales Kapital, Unternehmertum (Eigenmotivation!) und laufende Franchisegebühren ein."
      ],
      tradeOff: "Social Media / Viral Marketing: Geringere Kontrollierbarkeit (Shitstorm-Risiko bzw. extremes Reputationsrisiko bei einem Unfall während des Live-Events). Franchising: Schnelle, kapitalsparende Expansion für McDonald's, aber Kontrollaufwand zur Sicherung einheitlicher Qualitätsstandards (Trittbrettfahrer-Problem einzelner Franchisenehmer)."
    },
    {
      id: "case_mccafe_starbucks",
      title: "McCafé Positionierung & Starbucks „Un-Branding“",
      source: "Übung 11 · Aufg. 6.1.2 & Übung 12 · Aufg. 6.2.2",
      chapter: "Kap. 6 · Dienstleistungs- & Markenmanagement",
      problem: "1) McDonald's führt McCafé als Shop-in-Shop-Konzept ein. 2) Starbucks eröffnet in Seattle Test-Stores („15th Ave Coffee & Tea“) ohne Starbucks-Logo, mit lokalem Indie-Charakter und Wein/Bier-Angebot.",
      modelDiagnosis: "1) Erweiterter Dienstleistungs-Mix (7 Ps: Physische Fazilitäten mit Porzellangeschirr, Lounge-Sesseln, Barista-Personal) zur Erschließung neuer Tageszeiten und Zielgruppen. 2) Reaktion auf Marken-Reaktanz („Sterile Großkonzern-Wahrnehmung“) durch verdeckte Mehrmarken-/Tarnkappen-Strategie.",
      solutionMeasures: [
        "McCafé: Räumliche und optische Trennung vom Fast-Food-Counter (Vermeidung negativer Ausstrahlungseffekte von Frittiergeruch/Hektik), höherwertige Ausstattungspolitik (Physical Evidence) und Barista-Schulung (People) → positiver Imagetransfer auf die Dachmarke McDonald's.",
        "Starbucks Un-Branding: Nutzung der Test-Stores als Innovationslabor und zur Abschöpfung konsumkritischer Hipster-Zielgruppen, die Ketten-Cafés ablehnen."
      ],
      tradeOff: "Starbucks Un-Branding birgt ein hohes Glaubwürdigkeits- und Reputationsrisiko: Wenn Kunden die Tarnung durchschauen, fühlen sie sich getäuscht (kognitive Dissonanz / Vertrauensverlust), und es gehen sämtliche Synergien der globalen Dachmarke Starbucks verloren."
    }
  ]
};
