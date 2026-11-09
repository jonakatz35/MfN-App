# Product Requirements Document (PRD) & Master-Konzept: Marketing (MfN) Klausur- & Fortschrittstracker App

**Zielgruppe dieses Dokuments:** Antigravity (AI Coding Agent / App Builder)  
**Projekt:** MfN Study OS – Fortschrittstracker & Higher-Order Learning Companion  
**Kurs:** Marketing für Nebenfachstudierende (MfN) – HWS 2026 (Universität Mannheim, Prof. Dr. Florian Kraus)  
**Startdatum:** 09.11.2026  
**Interne Content-Deadline (100 % Encoding abgeschlossen):** 11.12.2026 (32 Tage)  
**Revisions- & Simulationsphase (7 Tage):** 11.12.2026 – 17.12.2026  
**Klausurtermin:** Freitag, 18.12.2026  

---

## 1. System-Überblick & Ziel der App

Antigravity soll eine fokussierte, interaktive **Fortschrittstracker- & Lern-App** entwickeln, die auf die Materialien im verknüpften Projektordner (`Uni_Marketing`) zugreift und den gesamten Lernprozess bis zur Klausur am 18.12.2026 nach der **Higher-Order Thinking Methodik (Justin Sung)** in Kombination mit **RemNote** steuert.

### Kern-Features für die App-Oberfläche (UI/UX):
1. **Dual-Countdown Header:** 
   - Primärer Countdown bis zur **Content-Deadline am 11.12.2026** (Ziel: 100 % des Stoffs strukturiert, gechunkt und einmal gerechnet).
   - Sekundärer Countdown bis zur **Klausur am 18.12.2026**.
2. **4-Step-Pipeline-Tracker pro Kapitel (Justin Sung Workflow):**
   - Statt einer simplen Checkbox hat jedes Modul 4 abhakbare Lernphasen:
     - `[1] Pre-Study Scoping & Priming` (20–30 Min., ohne RemNote)
     - `[2] Non-Linear Mindmapping / Chunking` (45–60 Min., Big-Picture-Map auf einer Seite)
     - `[3] Higher-Order RemNote-Encoding` (45–60 Min., Concept-Descriptor & Grouped Chunking)
     - `[4] Immediate Application` (45 Min., Übung & Tutorium ohne Spicken lösen)
3. **Quant-Drill & Formel-Mastery Matrix:**
   - Ein eigenes Modul für die **7 quantitativen Aufgabentypen** inkl. Status-Tracking (*Ungesehen → Mit Hilfe gelöst → Blind auf Zeit gelöst*) und Checkliste für den **3-Schritt-Klausurstandard** (Formel → Einsetzen → 1 Interpretationssatz).
4. **Richtig/Falsch-Fallen & Detail-Chunking Referenz:**
   - Ein Nachschlage- und Prüf-Tab für die Grouped-Chunking-Anker (Listen mit 4–10 Fakten) und typische Statistik-/Marktforschungsfallen.

---

## 2. Verzeichnis- & Dateistruktur im Projektordner (`Uni_Marketing`)

Antigravity hat Zugriff auf den Projektordner und kann folgende Dateien direkt verlinken, parsen oder als Referenz pro Lernwoche anzeigen:

### A. Organisation & Prüfungssimulation
- `2026_MfN_Orga.pdf` – Veranstaltungsübersicht, Semesterplan, Literatur (Homburg 2020, 6. Aufl.).
- `MFN_2026_Probeklausur_LoesungRechenaufgabe.pdf.pdf` – Musterlösung zur Rechenaufgabe (Gewinn & Wirtschaftlichkeit) inkl. Punkteschema.

### B. Vorlesungsskripte (Theorie-Basis)
- `2026_MfN_Vorlesungsskript_1_.pdf` – Kap. 1: Allgemeine Grundlagen (Märkte, Marketingbegriff, 4 Ps, 7 Perspektiven).
- `2026_MfN_Vorlesungsskript_2_.pdf` – Kap. 2: Konsumentenverhalten (Zentrale Konstrukte, Informationsverarbeitung, Kaufentscheidung).
- `2026_MfN_Vorlesungsskript_3_.pdf` – Kap. 3: Marktforschung (Grundlagen, Gütekriterien, 10-Schritte-Prozess, Datenanalyse & Statistik).
- `2026_MfN_Vorlesungsskript_4_.pdf` – Kap. 4: Strategisches Marketing (Zielsystem, PIMS, Erfahrungskurve, Lebenszyklus, Strategieprozess & Segmentierung).
- `2026_MfN_Vorlesungsskript_5_.pdf` – Kap. 5.1: Produktpolitik (Produktbegriffe, Produkttypen, Innovationsmanagement, etablierte Produkte, Markenmanagement).
- `2026_MfN_Vorlesungsskript_6_.pdf` – Kap. 5.2: Preispolitik (Skimming vs. Penetration, Preisdifferenzierung, PAF-Formen, Preiselastizität, Behavioral Pricing).
- `2026_MfN_Vorlesungsskript_7_.pdf` – Kap. 5.3: Kommunikationspolitik (Kommunikationsprozess, AIDA, Zielgruppen, Budgetierung, Mediaplanung, Werbewirkung).
- `2026_MfN_Vorlesungsskript_8_.pdf` – Kap. 5.4: Vertriebspolitik (Akquisitorisch vs. Logistisch, Vertriebsorgane, Franchise, Direkt vs. Indirekt, Key Account Management).
- *(Ergänzend aus Übung/Tutorium für Woche 11/12)*: Kap. 6: Institutionelle Perspektive (6.1 Dienstleistungsmarketing, 6.2 B2B-Marketing, 6.3 Internationales Marketing).

### C. Übungs- & Tutoriumsmaterialien (Anwendung & Quant-Drills)
- `Aufgabenskript_Uebungen_MfN_2026.pdf` – Gesamtes Aufgabenskript aller 12 Übungen.
- `Aufgabenskript Tutorium MfN 2026.pdf` – Gesamtes Aufgabenskript aller Tutorien (Fokus auf Rechenaufgaben & Statistik).
- `Ue1_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 1 (Aufg. 1.1–1.4: Marktbegriff, Marketingentwicklung, Bezugs-/Zielobjekt, Marketing-Mix).
- `Ue2_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 2 (Aufg. 1.5 Coca-Cola Case, 2.1 Aktivierung, 2.2 Kognitive Dissonanz, 2.2.3 Wein-Ankertheorie).
- `Ue3_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 3 (Aufg. 2.3 C/D-Paradigma & Kundenzufriedenheit, Aufg. 3.1 Richtig/Falsch Marktforschung & Lagemaße).
- `Ue4_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 4 (Aufg. 3.2 Korrelations- vs. Regressionsanalyse, Berechnung lineare Regression & Bestimmtheitsmaß $r^2$).
- `Ue5_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 5 (Aufg. 4.1 Zielkategorien, 4.2 Mittelklassewagen Lebenszyklus-Case, 4.3 Marktsegmentierung).
- `Ue6_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 6 (Aufg. 5.1.1 iPhone Markteinführungs-Case, Prämarketing, Rogers Diffusionsmodell).
- `Ue7_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 7 (Aufg. 5.2.1 iPhone Pricing-Case: Skimming vs. Penetration, Referenzpreise, Preisdifferenzierung).
- `Ue8_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 8 (Klassische Preistheorie: Lineare, multiplikative & Gutenberg-PAF, Preiselastizität des Absatzes).
- `Ue9_MfN_Uebungsskript_Kernloesung.pdf` – Lösungen Übung 9 (Aufg. 5.3.1 AKKUrat Werbewirkungsfunktion mit $\ln$-Auflösung, 5.3.2 5 heuristische Budgetierungsmethoden).
- `Ue11_Case_McCafe.pdf` – Zusatzmaterial zu Übungsaufgabe 6.1.1 (Dienstleistungsmarketing / McCafé Case).

---

## 3. Prüfungsarchitektur (Die 3 Kompetenzsäulen)

Die App soll Aufgaben und Fortschritte nach den **3 Kompetenztypen der Klausur** gewichten:

1. **Säule 1: Konzeptionelles Systemwissen & Case-Transfer (ca. 45 %)**
   - Verständnis der 6 Perspektiven des Marketings im Gesamtsystem (*Unternehmensziel → Strategie → 4 Ps → Konsumentenreaktion*).
   - Anwendung auf reale Fallstudien (Coca-Cola, iPhone Launch & Pricing, Mittelklassewagen, McDonald's Franchise, McCafé).
2. **Säule 2: Quantitative & formale Aufgaben (ca. 35 %)**
   - Algorithmische Rechenaufgaben aus Tutorium, Übung und Probeklausur.
   - **Goldene Bewertungsregel (aus Probeklausur):** Jede Rechnung muss im **Dreischritt** trainiert werden:
     1. *Formel / allgemeiner Rechenweg* (gibt Teilpunkte)
     2. *Eingesetzte Werte & exaktes Ergebnis* (auf geforderte Dezimalstellen gerundet)
     3. *1 expliziter Interpretations- bzw. Bewertungssatz* (bringt 1 vollen Punkt, z. B. „Produkt B ist effizienter, da die Wirtschaftlichkeit mit 94 % höher ist als bei A mit 90 %.“).
3. **Säule 3: Methodische Präzision & Richtig/Falsch-Diagnostik (ca. 20 %)**
   - Skalenniveaus (Nominal, Ordinal, Intervall, Verhältnis) fehlerfrei zuordnen.
   - Gütekriterien (Objektivität, Reliabilität, Validität) in Fallbeispielen diagnostizieren.
   - Statistische Aussagen (Lagemaße, Streuungsmaße, Variationskoeffizient, Korrelation vs. Kausalität) mit einem präzisen „Weil“-Mechanismus begründen.

---

## 4. Lernmethodik: Higher-Order Learning (Justin Sung) × RemNote

Die App soll den Nutzer aktiv davor schützen, in passives Auswendiglernen oder isolierte Detail-Karteikarten (Karten-Inflation) zurückzufallen.

### A. Der 4-Schritt-Workflow pro Lernblock
1. **Schritt 1: Pre-Study Scoping & Priming (20–30 Min., *ohne* RemNote)**
   - Überschriften des Vorlesungsskripts sowie die zugehörigen Aufgaben in `Aufgabenskript_Uebungen_MfN_2026.pdf` und `Aufgabenskript Tutorium MfN 2026.pdf` überfliegen.
   - Leitfrage: *„Welches unternehmerische Problem löst dieses Modell? Wo hängt es im großen System?“*
2. **Schritt 2: Non-Linear Mindmapping / Chunking (45–60 Min., auf dem iPad)**
   - Pro Kapitel **ein einziges visuelles Framework (Big-Picture-Map)** auf einer Seite bauen.
   - Maximal 3–5 Hauptcluster pro Kapitel. Konzepte durch **gerichtete Ursache-Wirkungs-Pfeile**, Vergleiche und Abhängigkeiten verbinden.
   - **Psychologie-Synergie nutzen:** Kapitel 2 (Konsumentenverhalten) und Kapitel 3 (Marktforschung/Statistik) überschneiden sich zu ca. 70 % mit Psychologie-Vorwissen (Aktivierung/Lambda-Hypothese, Maslow, Kognitive Dissonanz, C/D-Paradigma, Reliabilität/Validität, lineare Regression). Direkt mit bestehenden mentalen Schemata verknüpfen!
3. **Schritt 3: Higher-Order RemNote-Encoding (45–60 Min.)**
   - Erst *nach* der Mindmap wird die Struktur in RemNote angelegt.
   - **3 erlaubte Kartentypen in RemNote:**
     - **Typ 1: System- & Vergleichskarten (Higher-Order):** `Konzept A vs. Konzept B :: Was ist das zentrale Unterscheidungskriterium und wann ist A vorteilhafter als B?`
     - **Typ 2: Anwendungs-/Diagnose-Karten (Case-Transfer):** `Szenario: Produkt in Sättigungsphase, Nachfolger erst in 2 Jahren marktreif >> Welche strategische Option nach Lebenszyklusmodell wählen + 2 Maßnahmen?`
     - **Typ 3: Prozedurale Rezept-Karten (für Rechenaufgaben):** Schritt-für-Schritt-Algorithmen statt reiner Buchstabenformeln.
4. **Schritt 4: Immediate Application (45 Min.)**
   - Zugehörige Übungs- und Tutoriumsaufgaben **schriftlich ohne Spicken** lösen und erst danach mit den `Kernloesung`-PDFs abgleichen.

### B. Umgang mit spezifischem Detailwissen & Aufzählungen („Grouped Chunking“)
Details werden **niemals isoliert („nackt“)** abgefragt, sondern immer über eine **logische Zwischenschicht (Ordnungsprinzip / Chunk)** von maximal 3 Oberkategorien mit je 2–4 Unterpunkten. Auf die Vorderseite der RemNote-Karte kommt immer die **Cue-Zahl in Klammern** (z. B. `(5 in 3 Clustern)`).

- **Referenz-Beispiel 1: 5 heuristische Budgetierungsmethoden (Übung 9, Aufg. 5.3.2)**
  - *Ordnungsanker: Worauf schaut die Methode? (Intern/Finanzen vs. Extern/Wettbewerb vs. Rational/Ziele)*
  - `Heuristische Budgetierungsmethoden (5 in 3 Clustern) nach Orientierungsanker ::`
    1. **Intern / Finanzbasiert (3):** Orientierung am Vorperiodenbudget, Orientierung am Umsatz/Gewinn (*percentage-of-sales/profit*), Orientierung an verfügbaren Mitteln (*all-you-can-afford* / Residualgröße).
    2. **Extern / Konkurrenzbasiert (1):** Orientierung an Wettbewerbsaktivitäten (*competitive-parity-method*).
    3. **Rational / Zielbasiert (1):** Orientierung an Zielen & Aufgaben der Kommunikationspolitik (*objectives-and-task-method*).

- **Referenz-Beispiel 2: 10 Schritte des Marktforschungsprozesses (VL 3, Folie 7)**
  - *Ordnungsanker: 3 Projektphasen (3 – 3 – 4 Chunking)*
  - `Marktforschungsprozess (10 Schritte in 3 Projektphasen) ::`
    1. **Phase 1: Konzeption (Schritte 1–3):** 1. Problemformulierung (Ziele & Grundgesamtheit) → 2. Untersuchungsdesign (deskriptiv / explorativ / explikativ) → 3. Bestimmung des Durchführenden (intern vs. extern).
    2. **Phase 2: Operationalisierung (Schritte 4–6):** 4. Festlegung der Datenerhebungsmethode → 5. Stichprobenauswahl → 6. Gestaltung des Erhebungsinstruments.
    3. **Phase 3: Feld & Auswertung (Schritte 7–10):** 7. Durchführung der Datenerhebung → 8. Editierung und Kodierung der Daten → 9. Datenanalyse und -interpretation → 10. Präsentation der Ergebnisse.

- **Referenz-Beispiel 3: 10 Anforderungskriterien an externe Vertriebspartner (VL 8, Folie 314)**
  - *Ordnungsanker: 3 Partner-Dimensionen (Strategie/Kultur vs. Ressourcen/Struktur vs. Markt/Operativ)*
  - `Anforderungskriterien an unternehmensexterne Vertriebspartner (10 in 3 Clustern) ::`
    1. **Strategie, Kultur & Reputation (3):** Ähnliche Geschäftsphilosophie/Kultur, Gute Reputation, Gutes Management.
    2. **Ressourcen & Infrastruktur (3):** Gute finanzielle Lage, Unternehmensgröße, Infrastruktur (z. B. Niederlassungen, EDI).
    3. **Marktbearbeitung & Kompetenz (4):** Fachliche Kompetenz, Professionelle Marktbearbeitung, Breite Marktabdeckung, Angemessenes Sortiment.

- **Referenz-Beispiel 4: 3 Ansatzpunkte im C/D-Paradigma (Übung 3, Aufg. 2.3b)**
  - `Ansatzpunkte zur Beeinflussung der Kundenzufriedenheit nach C/D-Paradigma (3) ::`
    1. **Objektive Ist-Leistung steigern:** Tatsächliche Produkt-/Servicequalität erhöhen (z. B. zusätzliche Produktfunktionen).
    2. **Subjektive Wahrnehmung der Ist-Leistung steuern:** Gezielte positive Kommunikation (z. B. Veröffentlichung positiver Testergebnisse).
    3. **Soll-Leistung (Erwartung) steuern:** Realistische Erwartungen setzen (z. B. keine überzogenen Werbeversprechen im Verkaufsgespräch).

### C. Die „2-Schichten-Abrufregel“ für tägliche Sessions
1. **Top-Down-Abruf (3-Minuten Freestyle Blurting):** Vor dem Öffnen der RemNote-Queue auf einem leeren Blatt das Kapitel-Grundgerüst aus dem Kopf skizzieren.
2. **Bottom-Up-Präzision (RemNote Queue + Hand-Write-Regel für Formeln):** Eine Formel-Karte darf in RemNote **nur dann als „gewusst“ markiert werden**, wenn die Formel einmal physisch auf Papier/iPad ausgeschrieben wurde (Schutz vor *Illusion of Competence*).

---

## 5. Der 6-Blöcke-Masterplan (Datenmodell für den Wochen-Tracker)

Dieser Zeitplan bildet das Rückgrat der App. Pro Woche sind **2 bis 3 fokussierte Deep-Work-Sessions à 2–2,5 Stunden** vorgesehen.

### Block 1: Woche 1 (09.11. – 15.11.2026) – Fundament & Konsumentenverhalten
- **Materialien:** `2026_MfN_Vorlesungsskript_1_.pdf`, `2026_MfN_Vorlesungsskript_2_.pdf`, `Ue1` bis `Ue3`, `Aufgabenskript Tutorium MfN 2026.pdf` (Tutorium 1).
- **Inhaltliche Schwerpunkte:**
  - Marktbegriff, Märkte als Bezugs- vs. Zielobjekt, Marktabgrenzung (Anbieter, Nachfrager, Produkte, Bedürfnisse), Kategorisierung von Märkten.
  - Marketingbegriff im Zeitablauf, aktivitäts-, beziehungs-, führungsorientierte & integrative Definition, 4 Ps, 7 Perspektiven.
  - Zentrale Konstrukte des Konsumentenverhaltens: Aktivierung (inkl. Lambda-Hypothese & Überaktivierung), Motivation (Maslow), Emotion, Involvement, Einstellung, Werte/Lebensstil, Kundenzufriedenheit (C/D-Paradigma: Konfirmation, positive/negative Diskonfirmation), Kognitive Dissonanz (After-Sales-Marketing).
  - Informationsverarbeitung (Phasen & Theorien, inkl. Ankertheorie) und Kaufentscheidungen.
- **Quantitative Drills & Cases:**
  - **Tutorium Aufg. 2.1 & 2.2:** Markov-Modelle (Fluktuationsmatrix aufstellen, Übergangswahrscheinlichkeiten berechnen, Index für Markentreue = Hauptdiagonale, Gleichgewichtsmarktanteile über Gleichungssystem bestimmen, grafische Darstellung).
  - **Übung 1.1–1.5:** Grundfragen & Coca-Cola Case Study („Sweetener Challenge“, One Brand Strategy).
  - **Übung 2.1–2.3:** Aktivierung, After-Sales/Dissonanz, Wein-Speisekarte nach Ankertheorie sortieren (Aufg. 2.2.3), C/D-Paradigma (Aufg. 2.3).

### Block 2: Woche 2 (16.11. – 22.11.2026) – Marktforschung & Datenanalyse
- **Materialien:** `2026_MfN_Vorlesungsskript_3_.pdf`, `Ue3` & `Ue4`, `Aufgabenskript Tutorium MfN 2026.pdf` (Tutorium 2 & 3).
- **Inhaltliche Schwerpunkte:**
  - Definition, Ziele & Erkenntnisobjekte der Marktforschung.
  - Messen, Daten & Gütekriterien der Messung: Objektivität, Reliabilität (frei von Zufallsfehlern), Validität (frei von systematischen Fehlern; Reliabilität als notwendige, aber nicht hinreichende Bedingung für Validität).
  - 10-Schritte-Prozess der Marktforschung; Untersuchungsdesigns (deskriptiv vs. explorativ vs. explikativ); Interne vs. externe Durchführung.
  - Skalenniveaus (Nominal-, Ordinal-, Intervall-, Verhältnisskala) und zulässige Transformationen/Statistiken.
- **Quantitative Drills & Cases:**
  - **Tutorium Aufg. 3.1 & Übung Aufg. 3.1:** Skalenniveaus bestimmen & Richtig/Falsch-Aussagen zu Gütekriterien und Lagemaßen begründen.
  - **Tutorium Aufg. 3.2:** Häufigkeitsverteilung (absolut/relativ/kumuliert), Arithmetisches Mittel, Modus, Median, Varianz und Standardabweichung (Kundenankünfte am Bankschalter).
  - **Tutorium Aufg. 3.3:** Knifflige Richtig/Falsch-Aussagen (Variationskoeffizient bei 10 % Preisreduktion + 10 € Rabatt; mittlere quadratische Abweichung vom Mittelwert vs. Median; Panel-Sterblichkeit; Korrelation vs. Wenn-Dann-Aussagen).
  - **Übung Aufg. 3.2 (Übung 4) & Tutorium Aufg. 3.4:** Korrelationskoeffizient $r$, lineare Regressionsfunktion $y = a + bx$ (Methode der kleinsten Quadrate) und Bestimmtheitsmaß $r^2$ berechnen & interpretieren.

### Block 3: Woche 3 (23.11. – 29.11.2026) – Strategisches Marketing & Produktpolitik
- **Materialien:** `2026_MfN_Vorlesungsskript_4_.pdf`, `2026_MfN_Vorlesungsskript_5_.pdf`, `Ue5` & `Ue6`, `Aufgabenskript Tutorium MfN 2026.pdf` (Tutorium 3 & 4), `MFN_2026_Probeklausur_LoesungRechenaufgabe.pdf.pdf`.
- **Inhaltliche Schwerpunkte:**
  - Strategisches Marketing: „Wo konkurrieren wir?“ (Produkt-Markt-Investitionen) vs. „Wie konkurrieren wir?“ (Wertversprechen).
  - Zielpyramide im Unternehmen & die 3 Marketing-Zielkategorien (Potenzialbezogene → Markterfolgsbezogene → Wirtschaftliche Ziele).
  - Zentrale Modelle: PIMS-Erfolgsfaktorenforschung, Erfahrungskurvenmodell, Produktlebenszyklusmodell (Einführung, Wachstum, Reife, Sättigung).
  - Strategieentwicklungsprozess & Marktsegmentierung (Kriterien & Anforderungen).
  - Produktpolitik: Substantieller, erweiterter und generischer Produktbegriff (Bsp. E-Auto); Produkttypologisierung (Konsumgüter, Industriegüter, Dienstleistungen); Innovationsgrad-Matrix; Phasen des Innovationsprozesses; Prämarketing; Diffusionsmodell nach Rogers (Innovatoren, Early Adopters etc.); Markenmanagement & Management etablierter Produkte.
- **Quantitative Drills & Cases:**
  - **Tutorium Aufg. 4.1:** Erfahrungskurvengesetz $k(x) = 10.000 \cdot x^{-b}$ erläutern, Kostenänderung bei Mengenverdopplung und Lernraten für $b \in \{0{,}3; 0{,}4; 0{,}5; 0{,}6\}$ berechnen.
  - **Probeklausur-Rechenaufgabe:** Gewinn der Produktion und Effizienz über den Grad der Wirtschaftlichkeit ($W = \text{Soll-Kosten} / \text{Ist-Kosten}$) berechnen.
  - **Übung 4.1–4.3 (Übung 5) & Tutorium 4.2–4.4:** Zielsystematisierung, Case Study „Mittelklassewagen in der Sättigungsphase“ (Strategieempfehlung bei Nachfolger in 2 Jahren), Marktsegmentierung.
  - **Übung 5.1.1 (Übung 6) & Tutorium 5.1.1–5.1.2:** Case Study „iPhone: Die Markteinführung“ (MP3- vs. Smartphone-Lebenszyklus, Pionier- vs. Folgerstrategie, Prämarketing Vor-/Nachteile, Wasserfallstrategie, Rogers Diffusion).

### Block 4: Woche 4 (30.11. – 06.12.2026) – Preispolitik & Kommunikationspolitik
- **Materialien:** `2026_MfN_Vorlesungsskript_6_.pdf`, `2026_MfN_Vorlesungsskript_7_.pdf`, `Ue7`, `Ue8`, `Ue9`, `Aufgabenskript Tutorium MfN 2026.pdf` (Woche 7–10).
- **Inhaltliche Schwerpunkte:**
  - Preispolitik: Charakteristika preispolitischer Entscheidungen (schnelle Umsetzbarkeit, hohe Wirkungsgeschwindigkeit, schwere Revidierbarkeit).
  - Preisstrategien für Neuprodukte: Skimmingstrategie vs. Penetrationsstrategie (Vor- und Nachteile); Formen der Preisdifferenzierung; Bildung von Referenzpreisen.
  - Klassische Preistheorie: Lineare PAF ($x(p) = a - bp$), Multiplikative PAF ($x(p) = a \cdot p^{-b}$), Gutenberg-PAF (doppelt-geknickte PAF mit monopolistischem Bereich); Preiselastizität des Absatzes $\varepsilon$ und Einflussfaktoren auf Preisempfindlichkeit (Substitutionsmöglichkeiten).
  - Kommunikationspolitik: Idealtypischer Planungsprozess; Abgrenzung Kommunikationsbotschaft vs. Kommunikationsmittel vs. Kommunikationsträger; AIDA-Modell; Zielgruppentypologien; Heuristische vs. analytische Budgetierungsmethoden; Werbewirkungsfunktionen & Kontrolle (Pretest/Posttest).
- **Quantitative Drills & Cases:**
  - **Übung 7 (Aufg. 5.2.1):** Case Study „iPhone Preisstrategien“ (Übergang Skimming zu Penetration, Referenzpreise, Preisdifferenzierung nach Varianten/Ländern).
  - **Übung 8 & Tutorium Aufg. 5.2.1–5.2.5:** PAF-Aufgaben (Sättigungsmenge, Prohibitivpreis, Knickstellen der Gutenberg-PAF), Preiselastizität $\varepsilon = x'(p) \cdot \frac{p}{x(p)}$ berechnen, Umsatzoptimum ($|\varepsilon| = 1$) bestimmen.
  - **Übung 9 (Aufg. 5.3.1 & 5.3.2) & Tutorium Aufg. 5.3.1–5.3.2:** AKKUrat „Kraftprotz“-Case: Parameter $a, b, c$ der nicht-linearen Werbewirkungsfunktion $x(W) = a + 0{,}12W + b \cdot W^c$ aus Wertetabelle mittels Gleichsetzen und natürlichem Logarithmus ($\ln$) bestimmen; 5 heuristische Budgetierungsmethoden kritisch würdigen.

### Block 5: Woche 5 (07.12. – 11.12.2026) – Vertriebspolitik & Institutionelle Perspektive (DEADLINE!)
- **Materialien:** `2026_MfN_Vorlesungsskript_8_.pdf`, `Ue11_Case_McCafe.pdf`, `Aufgabenskript_Uebungen_MfN_2026.pdf` (Übung 10–12), `Aufgabenskript Tutorium MfN 2026.pdf` (Woche 11–13).
- **Inhaltliche Schwerpunkte:**
  - Vertriebspolitik: Marktgerichtete akquisitorische Aktivitäten vs. vertriebslogistische Aktivitäten; 3 Entscheidungsfelder (Vertriebssystem, Beziehungsstrukturen/Key Accounts, Verkaufsaktivitäten).
  - Vertriebsorgane: Unternehmensintern (Innen-/Außendienst, KAM, E-Commerce) vs. Unternehmensextern (gebunden: Vertragshändler, Franchise wie McDonald's; unabhängig: Absatzmittler [Groß-/Einzelhandel] vs. Absatzhelfer [Handelsvertreter, Kommissionär, Makler, Logistik]).
  - 10 Anforderungskriterien an externe Vertriebspartner; Direkter vs. indirekter Vertriebsweg.
  - Kap. 6 Institutionelle Perspektive:
    - 6.1 Dienstleistungsmarketing (Besonderheiten von Dienstleistungen, Immaterialität, Uno-actu-Prinzip, McCafé Case).
    - 6.2 Business-to-Business (B2B) Marketing (Organisationale Beschaffung, Buying Center, Geschäftstypen: Produkt-, Anlagen-, System-, Zuliefergeschäft).
    - 6.3 Internationales Marketing (Markteintrittsstrategien, Wasserfall- vs. Sprinklerstrategie, Standardisierung vs. Differenzierung).
- **Quantitative Drills & Cases:**
  - **Übung 10 (Aufg. 5.4.1–5.4.4) & Tutorium 5.4.1–5.4.2:** Vertriebswegewahl (Kostenvergleich Handelsvertreter vs. Reisender/Außendienst, kritische Absatzmenge).
  - **Übung 11 & 12 (Aufg. 6.1.1–6.2.2) & Tutorium 6.1.1–6.3.1:** McCafé Case Study, B2B- & Internationalisierungs-Aufgaben.
  - **MEILENSTEIN AM FREITAG, 11.12.2026:** 100 % des Inhalts in Mindmaps & RemNote abgeschlossen!

### Block 6: 7-Tage-Endspurt (11.12. – 17.12.2026) – Reine Wiederholung & Prüfungssimulation
- **Tag 1–2 (11.12.–12.12.):** **Full-System Blurting** – Kapitel 1–6 komplett ohne Unterlagen als vernetzte System-Mindmaps aus dem Gedächtnis zeichnen; Lücken identifizieren und in RemNote gezielt nachschärfen.
- **Tag 3–4 (13.12.–14.12.):** **Quant-Bootcamp** – Alle 7 quantitativen Aufgabentypen aus Tutorium, Übung und Probeklausur ohne Formelblatt auf Zeit durchrechnen.
- **Tag 5–6 (15.12.–16.12.):** **Klausursimulation unter Echtzeitbedingungen** – Probeklausur und Altklausur-Aufgaben unter striktem Zeitlimit schreiben; Selbstkorrektur nach dem 3-Schritt-Bewertungsschema.
- **Tag 7 (17.12.):** **Light Review & Tapering** – Nur noch fällige RemNote-Karten durchgehen, Taschenrechner & Formeln kurz prüfen, früh schlafen.
- **Freitag, 18.12.2026:** **Klausurtag!**

---

## 6. Spezifikation für das „Quant-Drill & Formel-Modul“ in der App

Antigravity soll die folgenden **7 quantitativen Aufgabentypen** als interaktive Karten/Rezepte in der App hinterlegen:

| # | Aufgabentyp & Quelle | Kernformel / Mathematisches Modell | Typische Klausur-Schritte & Fallstricke |
| :--- | :--- | :--- | :--- |
| **1** | **Markov-Modell**<br>*(Tutorium 2.1, 2.2)* | Übergangsmatrix $P = (p_{ij})$ mit $\sum_j p_{ij} = 1$<br>Gleichgewicht: $m \cdot P = m$ mit $\sum m_i = 1$ | 1. Fluktuationsmatrix (absolute Käuferwanderungen) in Zeilenprozent umrechnen ($p_{ij} = \text{Käufer}_{i \to j} / \text{Käufer}_{i, t-1}$).<br>2. **Markentreue-Index** = Werte auf der Hauptdiagonale $p_{ii}$.<br>3. Gleichgewichtsmarktanteile: Spaltengleichungen aufstellen, eine Gleichung durch $m_A + m_B + \dots = 1$ ersetzen und LGS lösen. |
| **2** | **Lagemaße, Streuung & Variationskoeffizient**<br>*(Tutorium 3.2, 3.3, Übung 3.1)* | $\bar{x} = \frac{1}{n}\sum x_i$, $\quad s^2 = \frac{1}{n}\sum (x_i - \bar{x})^2$<br>$s = \sqrt{s^2}$, $\quad VK = \frac{s}{\bar{x}}$ | **Falle 1 (Minimaleigenschaft):** Die mittlere quadratische Abweichung vom arithmetischen Mittel ist *immer* kleiner oder gleich der vom Median!<br>**Falle 2 (Lineare Transformation beim VK):** Proportionale Preisänderung ($-10\%$) lässt $VK$ konstant; zusätzlicher absoluter Rabatt ($-10\text{ €}$) senkt $\bar{x}$ stärker als $s$, wodurch der $VK$ **steigt** (Aussage in Tut 3.3 Nr. 8 ist also *falsch*!). |
| **3** | **Korrelation & Lineare Regression**<br>*(Übung 3.2 / Üb 4, Tutorium 3.4)* | $\hat{y} = a + b \cdot x$<br>$b = \frac{n \sum x_i y_i - (\sum x_i)(\sum y_i)}{n \sum x_i^2 - (\sum x_i)^2}$<br>$a = \bar{y} - b \cdot \bar{x}$, $\quad r^2 = \left(\frac{\text{Cov}(x,y)}{s_x \cdot s_y}\right)^2$ | 1. Arbeitstabelle mit Spalten $x_i, y_i, x_i y_i, x_i^2, y_i^2$ sauber anlegen.<br>2. Erst $b$ berechnen, dann über die Mittelwerte $\bar{x}$ und $\bar{y}$ den Achsenabschnitt $a$ bestimmen.<br>3. Bestimmtheitsmaß $r^2 \in [0, 1]$ gibt den Anteil der durch $x$ erklärten Varianz von $y$ an.<br>4. **Merke:** Korrelation misst ungerichteten linearen Zusammenhang; Regression prüft einseitige Ursache-Wirkungs-Beziehung ($x \to y$). |
| **4** | **Erfahrungskurvenmodell**<br>*(Tutorium 4.1)* | $k(x) = a \cdot x^{-b}$<br>Bei Verdopplung ($2x$): $\frac{k(2x)}{k(x)} = 2^{-b}$<br>Lernrate: $LR = 1 - 2^{-b}$ | $a$ = Stückkosten der ersten Einheit, $x$ = kumulierte Produktionsmenge, $b$ = Kostensenkungsparameter.<br>Beispiel: Für $b = 0{,}3$ ist $2^{-0{,}3} \approx 0{,}8123 \Rightarrow$ Stückkosten sinken bei Verdopplung der kumulierten Menge um $LR = 18{,}77\%$. |
| **5** | **Preis-Absatz-Funktion (PAF) & Preiselastizität**<br>*(Übung 8, Tutorium 5.2.x)* | Linear: $x(p) = a - bp$<br>Multiplikativ: $x(p) = a \cdot p^{-b}$<br>Elastizität: $\varepsilon = \frac{dx(p)}{dp} \cdot \frac{p}{x(p)}$ | - $|arepsilon| > 1$: elastisch (Preissenkung $\to$ Umsatzsteigerung).<br>- $|arepsilon| = 1$: proportional elastisch (**Umsatzoptimum**).<br>- $|arepsilon| < 1$: unelastisch (Preiserhöhung $\to$ Umsatzsteigerung).<br>- Bei multiplikativer PAF ist $\varepsilon = -b$ konstant! Bei Gutenberg-PAF: mittlerer Teil flach (monopolistischer Bereich, unelastisch), Randbereiche steil (elastisch). |
| **6** | **Nicht-lineare Werbewirkungsfunktion**<br>*(Übung 9 Aufg. 5.3.1, Tutorium 5.3.x)* | $x(W) = a + 0{,}12 \cdot W + b \cdot W^c$<br>Gewinn: $G(W) = \text{DB}_{\text{Stück}} \cdot x(W) - W - K_{\text{fix}}$ | 1. Parameter $a$ über $x(0) = a$ ablesen.<br>2. Zwei Punkte $(W_1, x_1)$ und $(W_2, x_2)$ einsetzen, nach $b$ umstellen und gleichsetzen.<br>3. Über natürlichen Logarithmus auflösen: $c = \frac{\ln(\text{Rest}_1) - \ln(\text{Rest}_2)}{\ln(W_1) - \ln(W_2)}$.<br>4. $c$ einsetzen, um $b$ zu berechnen; mit 4. Punkt Probe machen! |
| **7** | **Gewinn, Wirtschaftlichkeit & Vertriebswege**<br>*(Probeklausur, Tutorium 5.4.x)* | $\text{Gewinn} = x \cdot (p - k_{\text{Ist}})$<br>$W = \frac{\text{Soll-Kosten}}{\text{Ist-Kosten}}$ | - In der Probeklausur strikt zwischen **Gewinn** (nimmt *Ist-Kosten*!) und **Effizienz / Wirtschaftlichkeit** ($\text{Soll-Kosten} / \text{Ist-Kosten}$) trennen.<br>- Immer abschließenden 1-Satz-Vergleich hinschreiben! |

---

## 7. JSON-Datenstruktur für Antigravity (Initial State Seed)

Antigravity kann dieses JSON-Schema direkt als initiale Datenbank / State für die Fortschrittstracker-App importieren:

```json
{
  "projectMeta": {
    "courseName": "Marketing für Nebenfachstudierende (MfN)",
    "university": "Universität Mannheim",
    "lecturer": "Prof. Dr. Florian Kraus",
    "startDate": "2026-11-09",
    "contentDeadline": "2026-12-11",
    "examDate": "2026-12-18",
    "methodology": "Justin Sung Higher-Order Learning + RemNote Grouped Chunking"
  },
  "workflowSteps": [
    "1_Scoping_Priming",
    "2_Mindmap_Chunking",
    "3_RemNote_Encoding",
    "4_Immediate_Application"
  ],
  "studyBlocks": [
    {
      "blockId": "block_1",
      "week": "Woche 1 (09.11. – 15.11.2026)",
      "title": "Fundament & Konsumentenverhalten",
      "chapters": ["Kapitel 1: Allgemeine Grundlagen", "Kapitel 2: Verhalten der Konsumenten"],
      "files": [
        "2026_MfN_Vorlesungsskript_1_.pdf",
        "2026_MfN_Vorlesungsskript_2_.pdf",
        "Ue1_MfN_Uebungsskript_Kernloesung.pdf",
        "Ue2_MfN_Uebungsskript_Kernloesung.pdf",
        "Ue3_MfN_Uebungsskript_Kernloesung.pdf",
        "Aufgabenskript Tutorium MfN 2026.pdf"
      ],
      "quantTasks": ["Tutorium 2.1 (Markov 4 Produkte)", "Tutorium 2.2 (Markov Speedy Sportswear)"],
      "cases": ["Übung 1.5 (Coca-Cola)", "Übung 2.2.3 (Wein-Ankertheorie)", "Übung 2.3 (C/D-Paradigma)"],
      "status": {
        "1_Scoping_Priming": false,
        "2_Mindmap_Chunking": false,
        "3_RemNote_Encoding": false,
        "4_Immediate_Application": false
      }
    },
    {
      "blockId": "block_2",
      "week": "Woche 2 (16.11. – 22.11.2026)",
      "title": "Marktforschung & Datenanalyse",
      "chapters": ["Kapitel 3: Informationsbezogene Perspektive – Marktforschung"],
      "files": [
        "2026_MfN_Vorlesungsskript_3_.pdf",
        "Ue3_MfN_Uebungsskript_Kernloesung.pdf",
        "Ue4_MfN_Uebungsskript_Kernloesung.pdf",
        "Aufgabenskript Tutorium MfN 2026.pdf"
      ],
      "quantTasks": [
        "Tutorium 3.1 & Übung 3.1 (Skalenniveaus & Gütekriterien)",
        "Tutorium 3.2 (Häufigkeiten, Mittelwert, Median, Modus, Varianz, SD)",
        "Tutorium 3.3 (Richtig/Falsch-Fallen & Variationskoeffizient)",
        "Übung 3.2 & Tutorium 3.4 (Korrelation, Lineare Regression & Bestimmtheitsmaß r²)"
      ],
      "cases": ["Praktikum Reinigungsmittel-Hersteller (Regression)"],
      "status": {
        "1_Scoping_Priming": false,
        "2_Mindmap_Chunking": false,
        "3_RemNote_Encoding": false,
        "4_Immediate_Application": false
      }
    },
    {
      "blockId": "block_3",
      "week": "Woche 3 (23.11. – 29.11.2026)",
      "title": "Strategisches Marketing & Produktpolitik",
      "chapters": ["Kapitel 4: Strategisches Marketing", "Kapitel 5.1: Produktpolitik"],
      "files": [
        "2026_MfN_Vorlesungsskript_4_.pdf",
        "2026_MfN_Vorlesungsskript_5_.pdf",
        "Ue5_MfN_Uebungsskript_Kernloesung.pdf",
        "Ue6_MfN_Uebungsskript_Kernloesung.pdf",
        "MFN_2026_Probeklausur_LoesungRechenaufgabe.pdf.pdf",
        "Aufgabenskript Tutorium MfN 2026.pdf"
      ],
      "quantTasks": [
        "Tutorium 4.1 (Erfahrungskurvengesetz & Lernraten)",
        "Probeklausur Rechenaufgabe (Gewinn & Wirtschaftlichkeit)"
      ],
      "cases": [
        "Übung 4.2 (Mittelklassewagen in Sättigungsphase)",
        "Übung 5.1.1 (iPhone Markteinführung, Prämarketing & Rogers Diffusion)"
      ],
      "status": {
        "1_Scoping_Priming": false,
        "2_Mindmap_Chunking": false,
        "3_RemNote_Encoding": false,
        "4_Immediate_Application": false
      }
    },
    {
      "blockId": "block_4",
      "week": "Woche 4 (30.11. – 06.12.2026)",
      "title": "Preispolitik & Kommunikationspolitik",
      "chapters": ["Kapitel 5.2: Preispolitik", "Kapitel 5.3: Kommunikationspolitik"],
      "files": [
        "2026_MfN_Vorlesungsskript_6_.pdf",
        "2026_MfN_Vorlesungsskript_7_.pdf",
        "Ue7_MfN_Uebungsskript_Kernloesung.pdf",
        "Ue8_MfN_Uebungsskript_Kernloesung.pdf",
        "Ue9_MfN_Uebungsskript_Kernloesung.pdf",
        "Aufgabenskript Tutorium MfN 2026.pdf"
      ],
      "quantTasks": [
        "Übung 8 & Tutorium 5.2.1–5.2.5 (Lineare/Multiplikative/Gutenberg-PAF & Preiselastizität)",
        "Übung 9 Aufg. 5.3.1 & Tutorium 5.3.1–5.3.2 (AKKUrat Werbewirkungsfunktion mit ln-Auflösung)"
      ],
      "cases": [
        "Übung 5.2.1 (iPhone Pricing: Skimming vs. Penetration, Preisdifferenzierung)",
        "Übung 5.3.2 (5 heuristische Budgetierungsmethoden)"
      ],
      "status": {
        "1_Scoping_Priming": false,
        "2_Mindmap_Chunking": false,
        "3_RemNote_Encoding": false,
        "4_Immediate_Application": false
      }
    },
    {
      "blockId": "block_5",
      "week": "Woche 5 (07.12. – 11.12.2026) [CONTENT DEADLINE]",
      "title": "Vertriebspolitik & Institutionelle Perspektive",
      "chapters": [
        "Kapitel 5.4: Vertriebspolitik",
        "Kapitel 6.1: Dienstleistungsmarketing",
        "Kapitel 6.2: B2B-Marketing",
        "Kapitel 6.3: Internationales Marketing"
      ],
      "files": [
        "2026_MfN_Vorlesungsskript_8_.pdf",
        "Ue11_Case_McCafe.pdf",
        "Aufgabenskript_Uebungen_MfN_2026.pdf",
        "Aufgabenskript Tutorium MfN 2026.pdf"
      ],
      "quantTasks": [
        "Tutorium 5.4.1–5.4.2 (Vertriebswegewahl / Kostenvergleich Handelsvertreter vs. Reisender)",
        "Tutorium 6.1.1–6.3.1 (Dienstleistungs-, B2B- & Internationalisierungs-Aufgaben)"
      ],
      "cases": ["McDonald's Franchise-System", "Übung 6.1.1 (McCafé Case Study)"],
      "status": {
        "1_Scoping_Priming": false,
        "2_Mindmap_Chunking": false,
        "3_RemNote_Encoding": false,
        "4_Immediate_Application": false
      }
    },
    {
      "blockId": "block_6",
      "week": "7-Tage-Sprint (11.12. – 17.12.2026)",
      "title": "Reine Wiederholung, Blurting & Klausursimulation",
      "chapters": ["Gesamter Kurs (Kapitel 1 bis 6)"],
      "files": ["Alle Skripte, RemNote-Queue & Altklausuren"],
      "quantTasks": [
        "11.12.–12.12.: Full-System Blurting (Kapitel 1–6 aus dem Gedächtnis zeichnen)",
        "13.12.–14.12.: Quant-Bootcamp (Alle 7 Aufgabentypen blind auf Zeit rechnen)",
        "15.12.–16.12.: Altklausuren-Simulation unter Echtzeitbedingungen",
        "17.12.: Light Review & Tapering"
      ],
      "cases": [],
      "status": {
        "1_Scoping_Priming": false,
        "2_Mindmap_Chunking": false,
        "3_RemNote_Encoding": false,
        "4_Immediate_Application": false
      }
    }
  ]
}
```
