// ============================================================================
// MfN Study OS — Core Application Engine & State Management (HWS 2026)
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "mfn_study_os_2026_state_v1";
  const DATA = window.MFN_DATA;

  // Default persistent state structure
  function createDefaultState() {
    return {
      theme: "dark",
      simDate: "2026-11-09",
      activeTab: "cockpit",
      activeCalc: "cournot",
      deepWorkSessions: 0,
      blurtingText: "",
      // Block pipeline completion: { "woche1_scoping": true, ... }
      pipelineDone: {},
      // Block sub-tasks completion: { "w1_t1": true, ... }
      tasksDone: {},
      // Block notes: { "woche1": "..." }
      blockNotes: {},
      // Collapsed blocks: { "woche2": false }
      collapsedBlocks: {},
      // Quant mastery: { "q_markov": "unseen" | "assisted" | "mastered" }
      quantMastery: {},
      // Quant 3-step standard checks: { "q_markov_s1": true, "q_markov_s2": true, "q_markov_s3": true }
      quantSteps: {},
      // R/F statements mastered: { "rf_ue3_1": true }
      rfMastered: {},
      // User R/F guesses (session/persisted): { "rf_ue3_1": true/false }
      rfGuesses: {},
      // Scale items mastered: { "sc_1": true }
      scalesMastered: {},
      // Backhaus items mastered: { "bh_1": true }
      backhausMastered: {},
      // Grouped chunks mastered: { "gc_budget": true }
      chunksMastered: {},
      // Case studies mastered: { "case_iphone": true }
      casesMastered: {},
      // Cluster blur state: { "gc_budget_0": false }
      clusterBlurred: {}
    };
  }

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultState();
      const parsed = JSON.parse(raw);
      return Object.assign(createDefaultState(), parsed);
    } catch (e) {
      console.warn("Konnte localStorage nicht lesen, verwende Standard-State:", e);
      return createDefaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Konnte localStorage nicht speichern:", e);
    }
    updateScoresAndHeader();
  }

  function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const el = document.createElement("div");
    el.className = "toast-msg";
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = "0";
      el.style.transition = "opacity 200ms ease";
      setTimeout(() => el.remove(), 220);
    }, 2400);
  }

  // ==========================================================================
  // 1. THEME, COUNTDOWNS & WEIGHTED 1,0-READINESS SCORE CALCULATION
  // ==========================================================================
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const iconEl = document.getElementById("themeToggleIcon");
    if (iconEl) {
      iconEl.textContent = state.theme === "dark" ? "☀ Light" : "☾ Dark";
    }
  }

  function getActiveWeekBlock() {
    const cur = state.simDate || "2026-11-09";
    for (const block of DATA.studyBlocks) {
      if (cur >= block.startDate && cur <= block.endDate) {
        return block;
      }
    }
    if (cur < DATA.studyBlocks[0].startDate) return DATA.studyBlocks[0];
    return DATA.studyBlocks[DATA.studyBlocks.length - 1];
  }

  function updateCountdowns() {
    const sim = new Date((state.simDate || "2026-11-09") + "T00:00:00");
    const contentDeadline = new Date(DATA.meta.contentDeadline + "T00:00:00");
    const examDate = new Date(DATA.meta.examDate + "T00:00:00");

    const diffContentDays = Math.round((contentDeadline - sim) / (1000 * 60 * 60 * 24));
    const diffExamDays = Math.round((examDate - sim) / (1000 * 60 * 60 * 24));

    const cdContentDaysEl = document.getElementById("cdContentDays");
    const cdContentSubEl = document.getElementById("cdContentSub");
    const cdExamDaysEl = document.getElementById("cdExamDays");
    const cdExamSubEl = document.getElementById("cdExamSub");

    if (cdContentDaysEl) {
      if (diffContentDays > 0) {
        cdContentDaysEl.textContent = `${diffContentDays} Tage`;
        cdContentSubEl.textContent = "bis Fr, 11.12.2026 (Stoff-Finish)";
      } else if (diffContentDays === 0) {
        cdContentDaysEl.textContent = "HEUTE";
        cdContentSubEl.textContent = "Fr, 11.12.2026 · Content-Deadline!";
      } else {
        cdContentDaysEl.textContent = "Puffer";
        cdContentSubEl.textContent = "7-Tage-Revisionsphase aktiv!";
      }
    }

    if (cdExamDaysEl) {
      if (diffExamDays > 0) {
        cdExamDaysEl.textContent = `${diffExamDays} Tage`;
        cdExamSubEl.textContent = "bis Fr, 18.12.2026 (Klausur)";
      } else if (diffExamDays === 0) {
        cdExamDaysEl.textContent = "KLAUSUR";
        cdExamSubEl.textContent = "Fr, 18.12.2026 · Viel Erfolg (1,0)!";
      } else {
        cdExamDaysEl.textContent = "Fertig";
        cdExamSubEl.textContent = "Klausur abgeschlossen";
      }
    }
  }

  function computeReadinessMetrics() {
    // Säule 1 (45%):
    // - 6 blocks * 4 pipeline steps = 24 pipeline units
    // - All block sub-tasks (43 tasks)
    // - 7 Grouped Chunks + 5 Case Studies = 12 vault items
    const totalPipelineUnits = DATA.studyBlocks.length * DATA.pipelineSteps.length;
    let donePipelineUnits = 0;
    DATA.studyBlocks.forEach((b) => {
      DATA.pipelineSteps.forEach((s) => {
        if (state.pipelineDone[`${b.id}_${s.id}`]) donePipelineUnits++;
      });
    });

    let totalBlockTasks = 0;
    let doneBlockTasks = 0;
    DATA.studyBlocks.forEach((b) => {
      b.tasks.forEach((t) => {
        totalBlockTasks++;
        if (state.tasksDone[t.id]) doneBlockTasks++;
      });
    });

    const totalChunks = DATA.groupedChunks.length;
    let doneChunks = 0;
    DATA.groupedChunks.forEach((c) => {
      if (state.chunksMastered[c.id]) doneChunks++;
    });

    const totalCases = DATA.caseStudies.length;
    let doneCases = 0;
    DATA.caseStudies.forEach((c) => {
      if (state.casesMastered[c.id]) doneCases++;
    });

    const totalPillar1Units = totalPipelineUnits + totalBlockTasks + totalChunks + totalCases;
    const donePillar1Units = donePipelineUnits + doneBlockTasks + doneChunks + doneCases;
    const pillar1Pct = totalPillar1Units > 0 ? (donePillar1Units / totalPillar1Units) * 100 : 0;

    // Säule 2 (35%):
    // 11 Quant Archetypes: unseen = 0, assisted = 0.5, mastered = 1.0 (85% weight of Pillar 2)
    // + 3-Step Klausurstandard checks (11 * 3 = 33 checks, 15% weight of Pillar 2)
    const totalQuant = DATA.quantDrills.length;
    let quantPoints = 0;
    let masteredCount = 0;
    let assistedCount = 0;
    let stepChecksDone = 0;

    DATA.quantDrills.forEach((q) => {
      const status = state.quantMastery[q.id] || "unseen";
      if (status === "mastered") {
        quantPoints += 1.0;
        masteredCount++;
      } else if (status === "assisted") {
        quantPoints += 0.5;
        assistedCount++;
      }
      if (state.quantSteps[`${q.id}_s1`]) stepChecksDone++;
      if (state.quantSteps[`${q.id}_s2`]) stepChecksDone++;
      if (state.quantSteps[`${q.id}_s3`]) stepChecksDone++;
    });

    const quantMasteryRatio = totalQuant > 0 ? quantPoints / totalQuant : 0;
    const quantStepsRatio = totalQuant > 0 ? stepChecksDone / (totalQuant * 3) : 0;
    const pillar2Pct = (quantMasteryRatio * 0.85 + quantStepsRatio * 0.15) * 100;

    // Säule 3 (20%):
    // 14 R/F statements + 5 Scales + 9 Backhaus = 28 items
    const totalRf = DATA.rfStatements.length;
    let doneRf = 0;
    DATA.rfStatements.forEach((r) => {
      if (state.rfMastered[r.id]) doneRf++;
    });

    const totalScales = DATA.scaleItems.length;
    let doneScales = 0;
    DATA.scaleItems.forEach((s) => {
      if (state.scalesMastered[s.id]) doneScales++;
    });

    const totalBackhaus = DATA.backhausItems.length;
    let doneBackhaus = 0;
    DATA.backhausItems.forEach((bh) => {
      if (state.backhausMastered[bh.id]) doneBackhaus++;
    });

    const totalPillar3 = totalRf + totalScales + totalBackhaus;
    const donePillar3 = doneRf + doneScales + doneBackhaus;
    const pillar3Pct = totalPillar3 > 0 ? (donePillar3 / totalPillar3) * 100 : 0;

    // Weighted Total Score (45% / 35% / 20%)
    const weightedTotal =
      pillar1Pct * DATA.meta.weights.conceptual +
      pillar2Pct * DATA.meta.weights.quantitative +
      pillar3Pct * DATA.meta.weights.diagnostic;

    // Grade forecast mapping
    let gradeLabel = "4,0";
    if (weightedTotal >= 92) gradeLabel = "1,0 ★";
    else if (weightedTotal >= 85) gradeLabel = "1,3";
    else if (weightedTotal >= 78) gradeLabel = "1,7";
    else if (weightedTotal >= 70) gradeLabel = "2,0";
    else if (weightedTotal >= 60) gradeLabel = "2,3";
    else if (weightedTotal >= 50) gradeLabel = "2,7";
    else if (weightedTotal >= 35) gradeLabel = "3,0";
    else if (weightedTotal >= 20) gradeLabel = "3,3";
    else if (weightedTotal >= 8) gradeLabel = "3,7";
    else gradeLabel = "Start";

    return {
      pillar1Pct,
      donePillar1Units,
      totalPillar1Units,
      pillar2Pct,
      masteredCount,
      assistedCount,
      totalQuant,
      pillar3Pct,
      donePillar3,
      totalPillar3,
      doneRf,
      totalRf,
      doneScales,
      totalScales,
      doneBackhaus,
      totalBackhaus,
      weightedTotal,
      gradeLabel
    };
  }

  function updateScoresAndHeader() {
    updateCountdowns();
    const m = computeReadinessMetrics();

    // Header Radial & Pill
    const pctRounded = Math.round(m.weightedTotal);
    const headerPctEl = document.getElementById("headerReadinessPct");
    const headerGradeEl = document.getElementById("headerGradeForecast");
    const radialBar = document.getElementById("headerRadialBar");

    if (headerPctEl) headerPctEl.textContent = `${pctRounded}%`;
    if (headerGradeEl) headerGradeEl.textContent = `Note: ${m.gradeLabel}`;
    if (radialBar) {
      const circumference = 97.4;
      const offset = circumference - (Math.min(100, Math.max(0, m.weightedTotal)) / 100) * circumference;
      radialBar.style.strokeDashoffset = String(offset);
    }

    // Pillar 1 Card
    const p1Score = document.getElementById("pillar1Score");
    const p1Bar = document.getElementById("pillar1Bar");
    const p1Det = document.getElementById("pillar1Detail");
    if (p1Score) p1Score.textContent = `${Math.round(m.pillar1Pct)}%`;
    if (p1Bar) p1Bar.style.width = `${m.pillar1Pct.toFixed(1)}%`;
    if (p1Det) p1Det.textContent = `${m.donePillar1Units} / ${m.totalPillar1Units} Einheiten erledigt`;

    // Pillar 2 Card
    const p2Score = document.getElementById("pillar2Score");
    const p2Bar = document.getElementById("pillar2Bar");
    const p2Det = document.getElementById("pillar2Detail");
    if (p2Score) p2Score.textContent = `${Math.round(m.pillar2Pct)}%`;
    if (p2Bar) p2Bar.style.width = `${m.pillar2Pct.toFixed(1)}%`;
    if (p2Det) p2Det.textContent = `${m.masteredCount} / ${m.totalQuant} „Blind auf Zeit“ (${m.assistedCount} mit Hilfe)`;

    // Pillar 3 Card
    const p3Score = document.getElementById("pillar3Score");
    const p3Bar = document.getElementById("pillar3Bar");
    const p3Det = document.getElementById("pillar3Detail");
    if (p3Score) p3Score.textContent = `${Math.round(m.pillar3Pct)}%`;
    if (p3Bar) p3Bar.style.width = `${m.pillar3Pct.toFixed(1)}%`;
    if (p3Det) p3Det.textContent = `${m.donePillar3} / ${m.totalPillar3} Diagnosen gemeistert`;

    // Diagnostic sub-badges
    const rfBadge = document.getElementById("rfProgressBadge");
    const scBadge = document.getElementById("scalesProgressBadge");
    const bhBadge = document.getElementById("backhausProgressBadge");
    if (rfBadge) rfBadge.textContent = `${m.doneRf} / ${m.totalRf} gemeistert`;
    if (scBadge) scBadge.textContent = `${m.doneScales} / ${m.totalScales} gemeistert`;
    if (bhBadge) bhBadge.textContent = `${m.doneBackhaus} / ${m.totalBackhaus} gemeistert`;

    // Session counter
    const sessEl = document.getElementById("sessionCounterText");
    if (sessEl) {
      sessEl.textContent = `Absolvierte Deep-Work-Sessions: ${state.deepWorkSessions} (Ziel: 2–3 Sessions/Woche à 2h)`;
    }
  }

  // ==========================================================================
  // 2. COCKPIT ACTIVE WEEK RENDERER
  // ==========================================================================
  function renderCockpitActiveWeek() {
    const container = document.getElementById("cockpitActiveWeekContainer");
    const badge = document.getElementById("activeWeekDateBadge");
    if (!container) return;

    const activeBlock = getActiveWeekBlock();
    if (badge) badge.textContent = `Woche ${activeBlock.weekNumber} · ${activeBlock.dateRange}`;

    const doneTasksCount = activeBlock.tasks.filter((t) => state.tasksDone[t.id]).length;

    const stepsHtml = DATA.pipelineSteps
      .map((s) => {
        const key = `${activeBlock.id}_${s.id}`;
        const isDone = !!state.pipelineDone[key];
        return `
          <button type="button" class="mini-step-btn ${isDone ? "done" : ""}" data-toggle-pipeline="${key}">
            <span class="mini-step-num">${isDone ? "✓ STEP " + s.stepNumber : "STEP " + s.stepNumber + " · " + s.duration}</span>
            <span class="mini-step-label">${s.shortTitle}</span>
          </button>
        `;
      })
      .join("");

    const quickTasksHtml = activeBlock.tasks
      .slice(0, 5)
      .map((t) => {
        const isDone = !!state.tasksDone[t.id];
        return `
          <div class="task-check-row ${isDone ? "done" : ""}" data-toggle-task="${t.id}">
            <div class="task-checkbox">${isDone ? "✓" : ""}</div>
            <span class="task-code-pill ${t.category}">${t.code}</span>
            <span class="task-title-text">${t.title}</span>
          </div>
        `;
      })
      .join("");

    const pdfChipsHtml = activeBlock.pdfs
      .map(
        (p) => `
        <a href="${p.path}" target="_blank" rel="noopener" class="pdf-chip">
          <span>📄 ${p.label}</span>
        </a>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="active-week-banner">
        <div class="active-week-top">
          <span class="week-pill-gold">AKTIVER BLOCK · WOCHE ${activeBlock.weekNumber}</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary);">
            ${doneTasksCount} / ${activeBlock.tasks.length} Aufgaben erledigt
          </span>
        </div>
        <h3>${activeBlock.title}</h3>
        <p>${activeBlock.synergyHint}</p>

        <div class="pipeline-track-title">4-Step Justin Sung Pipeline für Woche ${activeBlock.weekNumber} (Klicken zum Abhaken):</div>
        <div class="mini-pipeline-grid">${stepsHtml}</div>

        <div class="pipeline-track-title">Direktzugriff auf die Unterlagen dieser Woche:</div>
        <div class="pdf-chips-wrap">${pdfChipsHtml}</div>
      </div>

      <div class="pipeline-track-title" style="margin-top: 0.85rem;">Wichtigste Meilenstein-Aufgaben dieser Woche:</div>
      <div class="task-checklist">
        ${quickTasksHtml}
      </div>
    `;
  }

  // ==========================================================================
  // 3. TAB 2: 6-WOCHEN-MASTERPLAN RENDERER
  // ==========================================================================
  function renderMasterplanBlocks() {
    const container = document.getElementById("masterplanBlocksContainer");
    if (!container) return;

    const activeBlock = getActiveWeekBlock();

    container.innerHTML = DATA.studyBlocks
      .map((block) => {
        const isCurrent = block.id === activeBlock.id;
        const isCollapsed = !!state.collapsedBlocks[block.id];

        let blockUnitsTotal = DATA.pipelineSteps.length + block.tasks.length;
        let blockUnitsDone = 0;
        DATA.pipelineSteps.forEach((s) => {
          if (state.pipelineDone[`${block.id}_${s.id}`]) blockUnitsDone++;
        });
        block.tasks.forEach((t) => {
          if (state.tasksDone[t.id]) blockUnitsDone++;
        });
        const blockPct = Math.round((blockUnitsDone / blockUnitsTotal) * 100);

        const pipelineHtml = DATA.pipelineSteps
          .map((s) => {
            const key = `${block.id}_${s.id}`;
            const completed = !!state.pipelineDone[key];
            return `
              <div class="pipeline-step-card ${completed ? "completed" : ""}" data-toggle-pipeline="${key}">
                <div>
                  <div class="step-card-top">
                    <span class="step-Badge-num">STEP ${s.stepNumber} · ${s.badge}</span>
                    <div class="step-check-circle">${completed ? "✓" : ""}</div>
                  </div>
                  <div class="step-card-title">${s.shortTitle}</div>
                  <div class="step-card-desc">${s.description}</div>
                </div>
                <div class="step-card-meta">
                  <span>⏱ ${s.duration}</span>
                  <span>${completed ? "Abgeschlossen" : "Offen"}</span>
                </div>
              </div>
            `;
          })
          .join("");

        const tasksHtml = block.tasks
          .map((t) => {
            const done = !!state.tasksDone[t.id];
            return `
              <div class="task-check-row ${done ? "done" : ""}" data-toggle-task="${t.id}">
                <div class="task-checkbox">${done ? "✓" : ""}</div>
                <span class="task-code-pill ${t.category}">${t.code}</span>
                <span class="task-title-text">${t.title}</span>
              </div>
            `;
          })
          .join("");

        const modelsHtml = block.coreModels.map((m) => `<li>${m}</li>`).join("");
        const pdfsHtml = block.pdfs
          .map(
            (p) => `
            <a href="${p.path}" target="_blank" rel="noopener" class="pdf-chip">
              <span>📄 ${p.label}</span>
            </a>
          `
          )
          .join("");

        const noteVal = state.blockNotes[block.id] || "";

        return `
          <article class="block-card ${isCurrent ? "current-week" : ""} ${isCollapsed ? "collapsed" : ""}" id="card-${block.id}">
            <div class="block-card-header" data-toggle-collapse="${block.id}">
              <div class="block-header-left">
                <div class="week-index-badge">
                  <span class="wk-label">Woche</span>
                  <span class="wk-num">${block.weekNumber}</span>
                </div>
                <div class="block-title-group">
                  <h3>
                    <span>${block.title}</span>
                    ${isCurrent ? '<span class="week-pill-gold">AKTUELLE WOCHE</span>' : ""}
                  </h3>
                  <div class="block-meta-row">
                    <span class="block-date-pill">📅 ${block.dateRange}</span>
                    <span>•</span>
                    <span>${block.subtitle}</span>
                    <span>•</span>
                    <span>📖 ${block.homburgPages}</span>
                  </div>
                </div>
              </div>

              <div class="block-header-right">
                <div class="block-progress-summary tabular-nums">
                  <div style="font-weight: 800; color: var(--emerald-400);">${blockPct}%</div>
                  <div style="font-size: 0.7rem; color: var(--text-muted);">${blockUnitsDone}/${blockUnitsTotal} Steps</div>
                </div>
                <span style="font-size: 0.9rem; color: var(--text-muted);">${isCollapsed ? "▼" : "▲"}</span>
              </div>
            </div>

            <div class="block-card-body">
              <div class="synergy-banner">${block.synergyHint}</div>

              <div>
                <div class="pipeline-track-title">1 · Verbindliche 4-Step Lern-Pipeline (Klicken zum Umschalten)</div>
                <div class="pipeline-steps-grid">${pipelineHtml}</div>
              </div>

              <div class="block-details-split">
                <div>
                  <div class="pipeline-track-title">2 · Übungs-, Tutoriums- & Case-Checkliste (${block.tasks.length} Aufgaben)</div>
                  <div class="task-checklist">${tasksHtml}</div>
                </div>

                <div>
                  <div class="pipeline-track-title">3 · Kernmodelle für die 1-Seiten-Mindmap</div>
                  <ul class="models-bullet-list">${modelsHtml}</ul>

                  <div class="pipeline-track-title">4 · Verknüpfte PDF-Vorlesungen, Übungen & Kernlösungen</div>
                  <div class="pdf-chips-wrap" style="margin-bottom: 1rem;">${pdfsHtml}</div>

                  <div class="pipeline-track-title">5 · Eigene Erkenntnisse / Schwachstellen-Notizen zu Woche ${block.weekNumber}</div>
                  <textarea
                    class="block-notes-input"
                    data-block-note="${block.id}"
                    placeholder="Notiere hier offene Fragen für das Tutorium oder typische Flüchtigkeitsfehler..."
                  >${noteVal}</textarea>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // 4. TAB 3: QUANT-LABOR & LIVE FORMULA CALCULATOR
  // ==========================================================================
  function renderLiveCalculator() {
    const container = document.getElementById("liveCalcBody");
    if (!container) return;

    document.querySelectorAll(".calc-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-calc") === state.activeCalc);
    });

    if (state.activeCalc === "cournot") {
      container.innerHTML = `
        <div class="calc-inputs-grid">
          <div class="calc-field">
            <label>Lineare PAF: Achsenabschnitt a</label>
            <input type="number" id="calc_paf_a" value="750000" step="1000" />
          </div>
          <div class="calc-field">
            <label>Lineare PAF: Steigung b (x = a - bp)</label>
            <input type="number" id="calc_paf_b" value="300000" step="1000" />
          </div>
          <div class="calc-field">
            <label>Variable Stückkosten k (€)</label>
            <input type="number" id="calc_paf_k" value="0.50" step="0.1" />
          </div>
          <div class="calc-field">
            <label>Fixkosten K_fix (€)</label>
            <input type="number" id="calc_paf_kfix" value="320000" step="1000" />
          </div>
          <div class="calc-field">
            <label>Multiplikative PAF: Exponent b (x = a·p^-b)</label>
            <input type="number" id="calc_mult_b" value="4" step="0.5" />
          </div>
        </div>
        <div class="calc-result-box" id="calcCournotOutput"></div>
      `;
      const updateCournot = () => {
        const a = parseFloat(document.getElementById("calc_paf_a").value) || 0;
        const b = parseFloat(document.getElementById("calc_paf_b").value) || 1;
        const k = parseFloat(document.getElementById("calc_paf_k").value) || 0;
        const kfix = parseFloat(document.getElementById("calc_paf_kfix").value) || 0;
        const mb = parseFloat(document.getElementById("calc_mult_b").value) || 2;

        const pMax = a / b;
        const pUmax = a / (2 * b);
        const pCournot = 0.5 * (a / b + k);
        const xCournot = Math.max(0, a - b * pCournot);
        const gCournot = (pCournot - k) * xCournot - kfix;
        const pMultArr = mb > 1 ? (mb / (mb - 1)) * k : NaN;

        document.getElementById("calcCournotOutput").innerHTML = `
          <div><strong>Lineare PAF x(p) = ${a.toLocaleString("de-DE")} - ${b.toLocaleString("de-DE")}·p:</strong> Höchstpreis p_max = <strong>${pMax.toFixed(2)} €</strong> | Umsatzmax. Preis p_Umax = <strong>${pUmax.toFixed(2)} €</strong></div>
          <div style="margin-top:0.3rem;"><strong>Cournot-Gewinnmaximum:</strong> p* = 0,5·(a/b + k) = <strong>${pCournot.toFixed(2)} €</strong> → Absatz x(p*) = <strong>${xCournot.toLocaleString("de-DE")} Stück</strong> → Max. Gewinn G(p*) = <strong>${gCournot.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</strong></div>
          <div style="margin-top:0.3rem; color: var(--gold-400);"><strong>Multiplikative PAF (ε = -${mb}):</strong> Gewinnopt. Preis nach Amoroso-Robinson p* = [b/(b-1)]·k = <strong>${isNaN(pMultArr) ? "Nicht definiert (b muss > 1 sein!)" : pMultArr.toFixed(2) + " €"}</strong></div>
        `;
      };
      container.querySelectorAll("input").forEach((inp) => inp.addEventListener("input", updateCournot));
      updateCournot();
    } else if (state.activeCalc === "advertising") {
      container.innerHTML = `
        <div class="calc-inputs-grid">
          <div class="calc-field">
            <label>Preis p (€)</label>
            <input type="number" id="calc_adv_p" value="90" step="1" />
          </div>
          <div class="calc-field">
            <label>Variable Stückkosten k_v (€)</label>
            <input type="number" id="calc_adv_kv" value="82" step="1" />
          </div>
          <div class="calc-field">
            <label>Fixkosten K_fix (€)</label>
            <input type="number" id="calc_adv_kfix" value="175000" step="5000" />
          </div>
          <div class="calc-field">
            <label>ln-Modell: Faktor c vor ln(W)</label>
            <input type="number" id="calc_adv_ln" value="1500" step="100" />
          </div>
        </div>
        <div class="calc-result-box" id="calcAdvOutput"></div>
      `;
      const updateAdv = () => {
        const p = parseFloat(document.getElementById("calc_adv_p").value) || 0;
        const kv = parseFloat(document.getElementById("calc_adv_kv").value) || 0;
        const kfix = parseFloat(document.getElementById("calc_adv_kfix").value) || 0;
        const cLn = parseFloat(document.getElementById("calc_adv_ln").value) || 1500;
        const db = p - kv;

        // Übung 9 Variante A: x(W) = 30.000 + 0,12W + 10·W^0,5 -> G'(W) = db*(0,12 + 5/√W) - 1 = 0
        const slopeLin = db * 0.12 - 1; // at db=8 -> -0.04
        let wStarSqrt = NaN;
        if (slopeLin < 0 && db > 0) {
          const rootW = (db * 5) / Math.abs(slopeLin);
          wStarSqrt = rootW * rootW;
        }
        // Variante B: x(W) = 30.000 - 0,25W + cLn*ln(W) -> G'(W) = db*(-0,25 + cLn/W) - 1 = 0 -> (db*cLn)/W = 1 + 0,25*db
        const wStarLn = (db * cLn) / (1 + 0.25 * db);

        document.getElementById("calcAdvOutput").innerHTML = `
          <div><strong>Stück-Deckungsbeitrag (p - k_v):</strong> ${db.toFixed(2)} € pro Stück</div>
          <div style="margin-top:0.3rem;"><strong>Übung 9 Wurzel-Modell [x(W) = 30.000 + 0,12W + 10·W^0,5]:</strong> Optimales Budget W* = <strong>${isNaN(wStarSqrt) ? "Kein inneres Maximum" : wStarSqrt.toLocaleString("de-DE", { maximumFractionDigits: 2 }) + " €"}</strong></div>
          <div style="margin-top:0.3rem; color: var(--gold-400);"><strong>Klausur ln-Modell [x(W) = 30.000 - 0,25W + ${cLn}·ln(W)]:</strong> Optimales Budget W* = <strong>${wStarLn.toLocaleString("de-DE", { maximumFractionDigits: 2 })} €</strong></div>
        `;
      };
      container.querySelectorAll("input").forEach((inp) => inp.addEventListener("input", updateAdv));
      updateAdv();
    } else if (state.activeCalc === "harris") {
      container.innerHTML = `
        <div class="calc-inputs-grid">
          <div class="calc-field">
            <label>Jahresbedarf V (Stück)</label>
            <input type="number" id="calc_hw_v" value="1600" step="100" />
          </div>
          <div class="calc-field">
            <label>Bestellfixkosten K_b (€/Bestellung)</label>
            <input type="number" id="calc_hw_kb" value="50" step="5" />
          </div>
          <div class="calc-field">
            <label>Einstandspreis p (€/Stück)</label>
            <input type="number" id="calc_hw_p" value="20" step="1" />
          </div>
          <div class="calc-field">
            <label>Zins- & Lagerkostensatz i (in %)</label>
            <input type="number" id="calc_hw_i" value="10" step="1" />
          </div>
        </div>
        <div class="calc-result-box" id="calcHwOutput"></div>
      `;
      const updateHw = () => {
        const v = parseFloat(document.getElementById("calc_hw_v").value) || 0;
        const kb = parseFloat(document.getElementById("calc_hw_kb").value) || 0;
        const p = parseFloat(document.getElementById("calc_hw_p").value) || 1;
        const i = parseFloat(document.getElementById("calc_hw_i").value) || 1;

        const qOpt = Math.sqrt((200 * v * kb) / (p * i));
        const freq = qOpt > 0 ? v / qOpt : 0;
        const kBestell = freq * kb;
        const kLager = (qOpt / 2) * p * (i / 100);

        document.getElementById("calcHwOutput").innerHTML = `
          <div><strong>Optimale Bestellmenge (Harris-Wilson):</strong> q_opt = √[(200·V·K_b)/(p·i)] = <strong>${qOpt.toFixed(2)} ≈ ${Math.round(qOpt)} Stück</strong></div>
          <div style="margin-top:0.3rem;"><strong>Optimale Bestellhäufigkeit:</strong> ${freq.toFixed(2)} Bestellungen/Jahr | Bestellkosten = <strong>${kBestell.toFixed(2)} €</strong> | Lagerkosten = <strong>${kLager.toFixed(2)} €</strong> (Summe = <strong>${(kBestell + kLager).toFixed(2)} €</strong>)</div>
        `;
      };
      container.querySelectorAll("input").forEach((inp) => inp.addEventListener("input", updateHw));
      updateHw();
    } else if (state.activeCalc === "experience") {
      container.innerHTML = `
        <div class="calc-inputs-grid">
          <div class="calc-field">
            <label>Parameter a (Kosten 1. Einheit)</label>
            <input type="number" id="calc_exp_a" value="3.2" step="0.1" />
          </div>
          <div class="calc-field">
            <label>Degressionsparameter b</label>
            <input type="number" id="calc_exp_b" value="0.3" step="0.05" />
          </div>
          <div class="calc-field">
            <label>Kumulierte Menge x_1</label>
            <input type="number" id="calc_exp_x1" value="8000" step="1000" />
          </div>
          <div class="calc-field">
            <label>Kumulierte Menge x_2</label>
            <input type="number" id="calc_exp_x2" value="30000" step="1000" />
          </div>
        </div>
        <div class="calc-result-box" id="calcExpOutput"></div>
      `;
      const updateExp = () => {
        const a = parseFloat(document.getElementById("calc_exp_a").value) || 0;
        const b = parseFloat(document.getElementById("calc_exp_b").value) || 0;
        const x1 = parseFloat(document.getElementById("calc_exp_x1").value) || 1;
        const x2 = parseFloat(document.getElementById("calc_exp_x2").value) || 1;

        const k1 = a * Math.pow(x1, -b);
        const k2 = a * Math.pow(x2, -b);
        const diff = k1 - k2;
        const pct = k1 > 0 ? (diff / k1) * 100 : 0;

        document.getElementById("calcExpOutput").innerHTML = `
          <div><strong>Stückkosten K(x) = ${a} · x^(-${b}):</strong> K(${x1.toLocaleString("de-DE")}) = <strong>${k1.toFixed(3)} € (≈ ${k1.toFixed(2)} €)</strong> | K(${x2.toLocaleString("de-DE")}) = <strong>${k2.toFixed(3)} € (≈ ${k2.toFixed(2)} €)</strong></div>
          <div style="margin-top:0.3rem; color: var(--emerald-400);"><strong>Kostensenkungspotenzial:</strong> ΔK = <strong>${diff.toFixed(2)} € pro Stück</strong> (relative Ersparnis: <strong>${pct.toFixed(1)}%</strong>)</div>
        `;
      };
      container.querySelectorAll("input").forEach((inp) => inp.addEventListener("input", updateExp));
      updateExp();
    }
  }

  function renderQuantDrills() {
    const container = document.getElementById("quantDrillsContainer");
    if (!container) return;

    container.innerHTML = DATA.quantDrills
      .map((q) => {
        const status = state.quantMastery[q.id] || "unseen";
        const s1 = !!state.quantSteps[`${q.id}_s1`];
        const s2 = !!state.quantSteps[`${q.id}_s2`];
        const s3 = !!state.quantSteps[`${q.id}_s3`];

        const problemsHtml = q.practiceProblems
          .map(
            (prob, idx) => `
            <div class="practice-problem-box">
              <div class="problem-header-row">
                <span class="cue-tag-pill">Original-Aufgabe: ${prob.code}</span>
                <button type="button" class="btn btn-secondary" data-toggle-sol="${q.id}_${idx}" style="padding: 0.3rem 0.7rem; font-size: 0.74rem;">
                  👁 3-Schritt-Musterlösung ein-/ausblenden
                </button>
              </div>
              <p style="font-size: 0.83rem; color: var(--text-primary); margin-top: 0.35rem;">${prob.prompt}</p>
              <div class="solution-reveal-area" id="sol-${q.id}_${idx}">
                <div class="sol-step-block"><strong>1. Allgemeine Formel & Ansatz:</strong>\n${prob.step1Formula}</div>
                <div class="sol-step-block"><strong>2. Eingesetzte Werte & Rechenweg:</strong>\n${prob.step2Calc}</div>
                <div class="sol-step-block interp"><strong>3. Expliziter 1,0-Interpretationssatz:</strong>\n„${prob.step3Interpretation}“</div>
              </div>
            </div>
          `
          )
          .join("");

        return `
          <article class="quant-card status-${status}">
            <div class="quant-card-top">
              <div>
                <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.35rem;">
                  <span class="quant-num-badge">TYP ${q.number}</span>
                  <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${q.chapter} · ${q.source}</span>
                  <span class="brand-badge">⏱ Zielzeit: ≤ ${q.targetMinutes} Min.</span>
                </div>
                <h3 style="font-size: 1.12rem; font-weight: 800;">${q.title}</h3>
              </div>

              <div class="mastery-selector" role="group" aria-label="Mastery Status">
                <button type="button" class="mastery-opt ${status === "unseen" ? "active-unseen" : ""}" data-quant-status="${q.id}:unseen">
                  Ungesehen
                </button>
                <button type="button" class="mastery-opt ${status === "assisted" ? "active-assisted" : ""}" data-quant-status="${q.id}:assisted">
                  Mit Hilfe gelöst
                </button>
                <button type="button" class="mastery-opt ${status === "mastered" ? "active-mastered" : ""}" data-quant-status="${q.id}:mastered">
                  ✓ Blind auf Zeit
                </button>
              </div>
            </div>

            <p style="font-size: 0.83rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${q.conceptSummary}</p>

            <div class="formula-banner">📐 Kernformeln: ${q.formulaPlain}</div>

            <div class="trap-callout">
              <strong>⚠ Typische Klausurfalle:</strong> ${q.examTrap}
            </div>

            <!-- 3-Schritt-Klausurstandard Checkboxes for this Quant Type -->
            <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap; margin-bottom: 0.65rem;">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">3-Schritt-Check:</span>
              <button type="button" class="icon-btn" data-toggle-qstep="${q.id}_s1" style="${s1 ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                ${s1 ? "☑" : "☐"} 1. Formel auswendig
              </button>
              <button type="button" class="icon-btn" data-toggle-qstep="${q.id}_s2" style="${s2 ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                ${s2 ? "☑" : "☐"} 2. Fehlerfrei gerechnet
              </button>
              <button type="button" class="icon-btn" data-toggle-qstep="${q.id}_s3" style="${s3 ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                ${s3 ? "☑" : "☐"} 3. Interpretationssatz sitzt
              </button>
            </div>

            ${problemsHtml}
          </article>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // 5. TAB 4: R/F-DIAGNOSTIK, SKALENNIVEAUS & BACKHAUS-TYPEN
  // ==========================================================================
  function renderDiagnostics() {
    // Part A: 14 R/F Statements
    const rfContainer = document.getElementById("rfCardsContainer");
    if (rfContainer) {
      rfContainer.innerHTML = DATA.rfStatements
        .map((item) => {
          const isMastered = !!state.rfMastered[item.id];
          const userGuess = state.rfGuesses[item.id];
          const hasGuessed = userGuess !== undefined && userGuess !== null;
          const isCorrectGuess = hasGuessed && userGuess === item.isTrue;

          let trueBtnClass = "rf-guess-btn";
          let falseBtnClass = "rf-guess-btn";
          if (hasGuessed) {
            if (userGuess === true) {
              trueBtnClass += item.isTrue ? " correct-pick" : " wrong-pick";
            } else {
              falseBtnClass += !item.isTrue ? " correct-pick" : " wrong-pick";
            }
          }

          return `
            <article class="rf-card ${isMastered ? "mastered" : ""}">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.55rem;">
                  <span class="task-code-pill diag">${item.source}</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">${item.chapter}</span>
                </div>
                <p class="rf-statement-text">„${item.statement}“</p>
              </div>

              <div>
                <div class="rf-actions-row">
                  <button type="button" class="${trueBtnClass}" data-rf-guess="${item.id}:true">Richtig</button>
                  <button type="button" class="${falseBtnClass}" data-rf-guess="${item.id}:false">Falsch</button>
                  <button type="button" class="icon-btn" data-rf-master="${item.id}" style="margin-left: auto; ${isMastered ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                    ${isMastered ? "✓ Gemeistert" : "Als gemeistert markieren"}
                  </button>
                </div>

                <div class="rf-explanation-box ${hasGuessed ? "visible" : ""}" id="rf-exp-${item.id}" style="margin-top: 0.75rem;">
                  <div style="font-weight: 800; color: ${item.isTrue ? "var(--emerald-400)" : "var(--rose-400)"}; margin-bottom: 0.25rem;">
                    Offizielle Lösung: ${item.shortVerdict} ${hasGuessed ? (isCorrectGuess ? "— Deine Wahl war Goldrichtig!" : "— Achtung, Klausurfalle!") : ""}
                  </div>
                  <div style="color: var(--text-primary); margin-bottom: 0.35rem;"><strong>Weil:</strong> ${item.explanation}</div>
                  <div style="font-size: 0.75rem; color: var(--gold-400);">💡 <strong>Merksatz:</strong> ${item.trapHint}</div>
                </div>
              </div>
            </article>
          `;
        })
        .join("");
    }

    // Part B: 5 Scale Items
    const scalesContainer = document.getElementById("scalesContainer");
    if (scalesContainer) {
      scalesContainer.innerHTML = DATA.scaleItems
        .map((sc) => {
          const mastered = !!state.scalesMastered[sc.id];
          return `
            <article class="rf-card ${mastered ? "mastered" : ""}">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                  <span class="task-code-pill concept">Tutorium 2 · Aufg. 3.1</span>
                  <button type="button" class="icon-btn" data-scale-master="${sc.id}" style="${mastered ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                    ${mastered ? "✓ Gemeistert" : "Gemeistert"}
                  </button>
                </div>
                <p class="rf-statement-text">${sc.item}</p>
              </div>
              <div>
                <button type="button" class="btn btn-secondary" data-toggle-generic="sc-sol-${sc.id}" style="font-size: 0.75rem;">
                  Skalenniveau & Begründung prüfen
                </button>
                <div class="rf-explanation-box" id="sc-sol-${sc.id}" style="margin-top: 0.65rem;">
                  <div style="font-weight: 800; color: var(--gold-400); margin-bottom: 0.2rem;">${sc.correctScale}</div>
                  <div>${sc.explanation}</div>
                </div>
              </div>
            </article>
          `;
        })
        .join("");
    }

    // Part C: Backhaus 4 Business Types
    const bhContainer = document.getElementById("backhausContainer");
    if (bhContainer) {
      bhContainer.innerHTML = DATA.backhausItems
        .map((bh) => {
          const mastered = !!state.backhausMastered[bh.id];
          return `
            <article class="rf-card ${mastered ? "mastered" : ""}">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.45rem;">
                  <span class="task-code-pill case">Übung 11 · Aufg. 6.1.3</span>
                  <button type="button" class="icon-btn" data-bh-master="${bh.id}" style="${mastered ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                    ${mastered ? "✓ Gemeistert" : "Gemeistert"}
                  </button>
                </div>
                <p class="rf-statement-text">${bh.item}</p>
              </div>
              <div>
                <button type="button" class="btn btn-secondary" data-toggle-generic="bh-sol-${bh.id}" style="font-size: 0.75rem;">
                  Geschäftstyp nach Backhaus aufdecken
                </button>
                <div class="rf-explanation-box" id="bh-sol-${bh.id}" style="margin-top: 0.65rem;">
                  <div style="font-weight: 800; color: var(--emerald-400); margin-bottom: 0.2rem;">→ ${bh.type}</div>
                  <div>${bh.reason}</div>
                </div>
              </div>
            </article>
          `;
        })
        .join("");
    }
  }

  // ==========================================================================
  // 6. TAB 5: GROUPED-CHUNKING & CASE-STUDY-TRESOR
  // ==========================================================================
  function renderVault() {
    const chunksContainer = document.getElementById("groupedChunksContainer");
    if (chunksContainer) {
      chunksContainer.innerHTML = DATA.groupedChunks
        .map((gc) => {
          const mastered = !!state.chunksMastered[gc.id];
          const clustersHtml = gc.clusters
            .map((cl, idx) => {
              const blurKey = `${gc.id}_${idx}`;
              const isBlurred = !!state.clusterBlurred[blurKey];
              const itemsLi = cl.items.map((it) => `<li>${it}</li>`).join("");
              return `
                <div class="cluster-box ${isBlurred ? "blurred" : ""}" data-toggle-cluster-blur="${blurKey}">
                  <div class="cluster-box-header">
                    <span class="cluster-name">${cl.name}</span>
                    <span style="font-size: 0.7rem; color: var(--text-muted);">${isBlurred ? "🔒 Klicken zum Aufdecken" : "🔓 Sichtbar"}</span>
                  </div>
                  <ul class="cluster-items-list">${itemsLi}</ul>
                </div>
              `;
            })
            .join("");

          return `
            <article class="chunk-card ${mastered ? "mastered" : ""}">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.65rem; margin-bottom: 0.55rem;">
                <div style="display: flex; align-items: center; gap: 0.45rem; flex-wrap: wrap; min-width: 0;">
                  <span class="cue-tag-pill">${gc.cueTag}</span>
                  <span style="font-size: 0.72rem; color: var(--text-muted);">${gc.chapter}</span>
                </div>
                <button type="button" class="icon-btn" data-chunk-master="${gc.id}" style="flex-shrink: 0; ${mastered ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                  ${mastered ? "✓ Sitzt auswendig" : "Als gelernt markieren"}
                </button>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.35rem;">${gc.title}</h4>
              <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.65rem;"><strong>Prüfungs-Prompt:</strong> ${gc.promptQuestion}</p>
              ${clustersHtml}
            </article>
          `;
        })
        .join("");
    }

    const casesContainer = document.getElementById("caseStudiesContainer");
    if (casesContainer) {
      casesContainer.innerHTML = DATA.caseStudies
        .map((cs) => {
          const mastered = !!state.casesMastered[cs.id];
          const measuresHtml = cs.solutionMeasures.map((m) => `<div style="margin-bottom:0.35rem;">• ${m}</div>`).join("");
          return `
            <article class="case-matrix-card" style="${mastered ? "border-color: var(--gold-border);" : ""}">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
                <div>
                  <span class="task-code-pill case">${cs.source}</span>
                  <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">${cs.chapter}</span>
                  <h4 style="font-size: 1.1rem; font-weight: 800; margin-top: 0.3rem;">${cs.title}</h4>
                </div>
                <button type="button" class="icon-btn" data-case-master="${cs.id}" style="${mastered ? "border-color: var(--emerald-400); color: var(--emerald-400);" : ""}">
                  ${mastered ? "✓ Case-Transfer beherrscht" : "Case als gelernt markieren"}
                </button>
              </div>

              <div class="case-4col-grid">
                <div class="case-col-box">
                  <span class="case-col-label" style="color: var(--rose-400);">1 · Ausgangsproblem</span>
                  <div>${cs.problem}</div>
                </div>
                <div class="case-col-box">
                  <span class="case-col-label" style="color: var(--cobalt-400);">2 · Modell-Diagnose</span>
                  <div>${cs.modelDiagnosis}</div>
                </div>
                <div class="case-col-box">
                  <span class="case-col-label" style="color: var(--emerald-400);">3 · Strategische Maßnahmen</span>
                  <div>${measuresHtml}</div>
                </div>
                <div class="case-col-box">
                  <span class="case-col-label" style="color: var(--gold-400);">4 · Kritischer Trade-off / Risiko</span>
                  <div>${cs.tradeOff}</div>
                </div>
              </div>
            </article>
          `;
        })
        .join("");
    }
  }

  // ==========================================================================
  // 7. TIMERS (3-MIN BLURTING STUDIO TIMER & QUANT STOPWATCH)
  // ==========================================================================
  let studioSecondsRemaining = 180;
  let studioInterval = null;

  function formatMMSS(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateStudioTimerUI() {
    const el = document.getElementById("studioTimerDisplay");
    const btn = document.getElementById("timerStartPauseBtn");
    if (el) el.textContent = formatMMSS(studioSecondsRemaining);
    if (btn) btn.textContent = studioInterval ? "⏸ Pause" : "▶ Start";
  }

  function toggleStudioTimer() {
    if (studioInterval) {
      clearInterval(studioInterval);
      studioInterval = null;
    } else {
      studioInterval = setInterval(() => {
        if (studioSecondsRemaining > 0) {
          studioSecondsRemaining--;
          updateStudioTimerUI();
        } else {
          clearInterval(studioInterval);
          studioInterval = null;
          updateStudioTimerUI();
          showToast("⏰ Timer abgelaufen! Vergleiche dein Blurting jetzt mit dem Skript.");
        }
      }, 1000);
    }
    updateStudioTimerUI();
  }

  let quantSwSeconds = 0;
  let quantSwInterval = null;

  function updateQuantSwUI() {
    const el = document.getElementById("quantStopwatchDisplay");
    const btn = document.getElementById("quantSwToggleBtn");
    if (el) el.textContent = formatMMSS(quantSwSeconds);
    if (btn) btn.textContent = quantSwInterval ? "⏸ Stopp" : "▶ Start";
  }

  // ==========================================================================
  // 8. TAB NAVIGATION & GLOBAL EVENT DELEGATION
  // ==========================================================================
  function switchTab(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      const isMatch = btn.getAttribute("data-tab") === tabId;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-selected", isMatch ? "true" : "false");
    });
    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === `view-${tabId}`);
    });
    saveState();
  }

  function renderAll() {
    applyTheme();
    updateScoresAndHeader();
    renderCockpitActiveWeek();
    renderMasterplanBlocks();
    renderLiveCalculator();
    renderQuantDrills();
    renderDiagnostics();
    renderVault();

    const simInput = document.getElementById("simDateInput");
    if (simInput) simInput.value = state.simDate || "2026-11-09";

    const blurPad = document.getElementById("blurtingScratchpad");
    if (blurPad && blurPad.value !== state.blurtingText) {
      blurPad.value = state.blurtingText || "";
    }
  }

  function bindEvents() {
    // Tab clicks
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        if (tab) switchTab(tab);
      });
    });

    // Delegated clicks across workspace
    document.body.addEventListener("click", (e) => {
      const target = e.target;

      // Goto tab buttons
      const gotoBtn = target.closest("[data-goto-tab]");
      if (gotoBtn) {
        switchTab(gotoBtn.getAttribute("data-goto-tab"));
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Pipeline step toggle
      const pipeBtn = target.closest("[data-toggle-pipeline]");
      if (pipeBtn) {
        const key = pipeBtn.getAttribute("data-toggle-pipeline");
        state.pipelineDone[key] = !state.pipelineDone[key];
        saveState();
        renderCockpitActiveWeek();
        renderMasterplanBlocks();
        showToast(state.pipelineDone[key] ? "✓ Pipeline-Step abgeschlossen!" : "Pipeline-Step als offen markiert");
        return;
      }

      // Sub-task toggle
      const taskRow = target.closest("[data-toggle-task]");
      if (taskRow) {
        const id = taskRow.getAttribute("data-toggle-task");
        state.tasksDone[id] = !state.tasksDone[id];
        saveState();
        renderCockpitActiveWeek();
        renderMasterplanBlocks();
        return;
      }

      // Collapse/expand block header
      const collapseHdr = target.closest("[data-toggle-collapse]");
      if (collapseHdr) {
        const blockId = collapseHdr.getAttribute("data-toggle-collapse");
        state.collapsedBlocks[blockId] = !state.collapsedBlocks[blockId];
        saveState();
        renderMasterplanBlocks();
        return;
      }

      // Calculator tab switch
      const calcBtn = target.closest("[data-calc]");
      if (calcBtn) {
        state.activeCalc = calcBtn.getAttribute("data-calc");
        saveState();
        renderLiveCalculator();
        return;
      }

      // Quant Mastery status
      const qStatusBtn = target.closest("[data-quant-status]");
      if (qStatusBtn) {
        const [qId, newStatus] = qStatusBtn.getAttribute("data-quant-status").split(":");
        state.quantMastery[qId] = newStatus;
        if (newStatus === "mastered") {
          state.quantSteps[`${qId}_s1`] = true;
          state.quantSteps[`${qId}_s2`] = true;
          state.quantSteps[`${qId}_s3`] = true;
          showToast("🏆 Stark! Aufgabentyp als „Blind auf Zeit gelöst“ im 1,0-Score verbucht!");
        }
        saveState();
        renderQuantDrills();
        return;
      }

      // Quant 3-step standard checkbox
      const qStepBtn = target.closest("[data-toggle-qstep]");
      if (qStepBtn) {
        const key = qStepBtn.getAttribute("data-toggle-qstep");
        state.quantSteps[key] = !state.quantSteps[key];
        saveState();
        renderQuantDrills();
        return;
      }

      // Toggle practice problem solution
      const solBtn = target.closest("[data-toggle-sol]");
      if (solBtn) {
        const id = solBtn.getAttribute("data-toggle-sol");
        const box = document.getElementById(`sol-${id}`);
        if (box) box.classList.toggle("open");
        return;
      }

      // R/F Guess
      const rfGuessBtn = target.closest("[data-rf-guess]");
      if (rfGuessBtn) {
        const [rfId, guessStr] = rfGuessBtn.getAttribute("data-rf-guess").split(":");
        const guessBool = guessStr === "true";
        state.rfGuesses[rfId] = guessBool;
        const item = DATA.rfStatements.find((x) => x.id === rfId);
        if (item && item.isTrue === guessBool) {
          state.rfMastered[rfId] = true;
        }
        saveState();
        renderDiagnostics();
        return;
      }

      // R/F Master toggle
      const rfMasterBtn = target.closest("[data-rf-master]");
      if (rfMasterBtn) {
        const rfId = rfMasterBtn.getAttribute("data-rf-master");
        state.rfMastered[rfId] = !state.rfMastered[rfId];
        saveState();
        renderDiagnostics();
        return;
      }

      // Scale Master toggle
      const scMasterBtn = target.closest("[data-scale-master]");
      if (scMasterBtn) {
        const scId = scMasterBtn.getAttribute("data-scale-master");
        state.scalesMastered[scId] = !state.scalesMastered[scId];
        saveState();
        renderDiagnostics();
        return;
      }

      // Backhaus Master toggle
      const bhMasterBtn = target.closest("[data-bh-master]");
      if (bhMasterBtn) {
        const bhId = bhMasterBtn.getAttribute("data-bh-master");
        state.backhausMastered[bhId] = !state.backhausMastered[bhId];
        saveState();
        renderDiagnostics();
        return;
      }

      // Generic explanation reveal
      const genBtn = target.closest("[data-toggle-generic]");
      if (genBtn) {
        const targetId = genBtn.getAttribute("data-toggle-generic");
        const el = document.getElementById(targetId);
        if (el) el.classList.toggle("visible");
        return;
      }

      // Grouped chunk master toggle
      const chunkMasterBtn = target.closest("[data-chunk-master]");
      if (chunkMasterBtn) {
        const cId = chunkMasterBtn.getAttribute("data-chunk-master");
        state.chunksMastered[cId] = !state.chunksMastered[cId];
        saveState();
        renderVault();
        return;
      }

      // Cluster blur toggle
      const clusterBox = target.closest("[data-toggle-cluster-blur]");
      if (clusterBox) {
        const key = clusterBox.getAttribute("data-toggle-cluster-blur");
        state.clusterBlurred[key] = !state.clusterBlurred[key];
        saveState();
        renderVault();
        return;
      }

      // Case master toggle
      const caseMasterBtn = target.closest("[data-case-master]");
      if (caseMasterBtn) {
        const csId = caseMasterBtn.getAttribute("data-case-master");
        state.casesMastered[csId] = !state.casesMastered[csId];
        saveState();
        renderVault();
        return;
      }
    });

    // Block notes input
    document.body.addEventListener("input", (e) => {
      if (e.target.matches("[data-block-note]")) {
        const blockId = e.target.getAttribute("data-block-note");
        state.blockNotes[blockId] = e.target.value;
        saveState();
      } else if (e.target.id === "blurtingScratchpad") {
        state.blurtingText = e.target.value;
        saveState();
      }
    });

    // Simulated planning date change
    const simDateInput = document.getElementById("simDateInput");
    if (simDateInput) {
      simDateInput.addEventListener("change", () => {
        if (simDateInput.value) {
          state.simDate = simDateInput.value;
          saveState();
          renderCockpitActiveWeek();
          renderMasterplanBlocks();
          showToast(`📅 Planungsdatum auf ${state.simDate} gesetzt.`);
        }
      });
    }

    // Theme toggle
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        applyTheme();
        saveState();
      });
    }

    // Expand / Collapse all blocks
    const expandAllBtn = document.getElementById("expandAllBlocksBtn");
    const collapseAllBtn = document.getElementById("collapseAllBlocksBtn");
    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        state.collapsedBlocks = {};
        saveState();
        renderMasterplanBlocks();
      });
    }
    if (collapseAllBtn) {
      collapseAllBtn.addEventListener("click", () => {
        DATA.studyBlocks.forEach((b) => (state.collapsedBlocks[b.id] = true));
        saveState();
        renderMasterplanBlocks();
      });
    }

    // Studio Timer buttons
    document.getElementById("timerStartPauseBtn")?.addEventListener("click", toggleStudioTimer);
    document.getElementById("timerMode3MinBtn")?.addEventListener("click", () => {
      if (studioInterval) clearInterval(studioInterval);
      studioInterval = null;
      studioSecondsRemaining = 180;
      updateStudioTimerUI();
    });
    document.getElementById("timerMode45MinBtn")?.addEventListener("click", () => {
      if (studioInterval) clearInterval(studioInterval);
      studioInterval = null;
      studioSecondsRemaining = 45 * 60;
      updateStudioTimerUI();
    });
    document.getElementById("timerResetBtn")?.addEventListener("click", () => {
      if (studioInterval) clearInterval(studioInterval);
      studioInterval = null;
      studioSecondsRemaining = 180;
      updateStudioTimerUI();
    });

    document.getElementById("logSessionBtn")?.addEventListener("click", () => {
      state.deepWorkSessions = (state.deepWorkSessions || 0) + 1;
      saveState();
      showToast(`🔥 Stark! Deep-Work-Session #${state.deepWorkSessions} gespeichert.`);
    });

    // Quant Stopwatch
    document.getElementById("quantSwToggleBtn")?.addEventListener("click", () => {
      if (quantSwInterval) {
        clearInterval(quantSwInterval);
        quantSwInterval = null;
      } else {
        quantSwInterval = setInterval(() => {
          quantSwSeconds++;
          updateQuantSwUI();
        }, 1000);
      }
      updateQuantSwUI();
    });
    document.getElementById("quantSwResetBtn")?.addEventListener("click", () => {
      if (quantSwInterval) clearInterval(quantSwInterval);
      quantSwInterval = null;
      quantSwSeconds = 0;
      updateQuantSwUI();
    });

    // R/F Reveal all / Reset quiz
    document.getElementById("revealAllRfBtn")?.addEventListener("click", () => {
      DATA.rfStatements.forEach((item) => {
        state.rfGuesses[item.id] = item.isTrue;
      });
      saveState();
      renderDiagnostics();
    });
    document.getElementById("hideAllRfBtn")?.addEventListener("click", () => {
      state.rfGuesses = {};
      saveState();
      renderDiagnostics();
    });

    // Vault Blur / Unblur all clusters
    document.getElementById("blurAllChunksBtn")?.addEventListener("click", () => {
      DATA.groupedChunks.forEach((gc) => {
        gc.clusters.forEach((_, idx) => {
          state.clusterBlurred[`${gc.id}_${idx}`] = true;
        });
      });
      saveState();
      renderVault();
      showToast("🔒 Alle Cluster verdeckt — teste deinen aktiven Abruf!");
    });
    document.getElementById("unblurAllChunksBtn")?.addEventListener("click", () => {
      state.clusterBlurred = {};
      saveState();
      renderVault();
    });

    // Backup Modal
    const backupModal = document.getElementById("backupModal");
    const backupPreview = document.getElementById("backupJsonPreview");
    document.getElementById("openBackupModalBtn")?.addEventListener("click", () => {
      if (backupPreview) backupPreview.value = JSON.stringify(state, null, 2);
      backupModal?.classList.add("open");
    });
    document.getElementById("closeBackupModalBtn")?.addEventListener("click", () => {
      backupModal?.classList.remove("open");
    });
    document.getElementById("exportJsonBtn")?.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `MfN_Study_OS_Backup_${state.simDate}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("⬇ JSON-Backup wurde heruntergeladen.");
    });
    document.getElementById("importJsonInput")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const imported = JSON.parse(String(reader.result));
          state = Object.assign(createDefaultState(), imported);
          saveState();
          renderAll();
          backupModal?.classList.remove("open");
          showToast("✅ Backup erfolgreich wiederhergestellt!");
        } catch (err) {
          alert("Ungültige JSON-Datei: " + err.message);
        }
      };
      reader.readAsText(file);
    });
    document.getElementById("resetAllProgressBtn")?.addEventListener("click", () => {
      if (confirm("Möchtest du wirklich deinen gesamten Lernfortschritt auf Null zurücksetzen?")) {
        state = createDefaultState();
        saveState();
        renderAll();
        backupModal?.classList.remove("open");
        showToast("Fortschritt wurde zurückgesetzt.");
      }
    });
  }

  function applyHashRoute() {
    const hash = (window.location.hash || "").replace(/^#/, "").trim();
    if (!hash) return;
    const validTabs = ["cockpit", "masterplan", "quant", "diagnostic", "vault"];
    const parts = hash.split("-");
    if (parts.includes("light")) {
      state.theme = "light";
      applyTheme();
    } else if (parts.includes("dark")) {
      state.theme = "dark";
      applyTheme();
    }
    for (const p of parts) {
      if (validTabs.includes(p)) {
        switchTab(p);
        break;
      }
    }
  }

  // Initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    bindEvents();
    if (state.activeTab && state.activeTab !== "cockpit") {
      switchTab(state.activeTab);
    }
    applyHashRoute();
    window.addEventListener("hashchange", applyHashRoute);
  });
})();
