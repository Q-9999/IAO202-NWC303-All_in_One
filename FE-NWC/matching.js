/**
 * Cisco CyberOps Associate - Interactive Node-to-Node Matching Engine
 * Redesigned UX/UI with interactive circular connection nodes, vibrant SVG connecting lines,
 * and instant evaluation feedback matching the user's architectural mockups.
 */

(function () {
  'use strict';

  // Distinct vibrant color palette for matched node pairs
  const PAIR_COLORS = [
    { bg: '#2563eb', border: '#1d4ed8', light: '#eff6ff', darkBg: '#1e3a8a', label: 'A', text: '#ffffff' },
    { bg: '#7c3aed', border: '#6d28d9', light: '#f5f3ff', darkBg: '#3b0764', label: 'B', text: '#ffffff' },
    { bg: '#059669', border: '#047857', light: '#ecfdf5', darkBg: '#064e3b', label: 'C', text: '#ffffff' },
    { bg: '#d97706', border: '#b45309', light: '#fffbeb', darkBg: '#451a03', label: 'D', text: '#ffffff' },
    { bg: '#db2777', border: '#be185d', light: '#fdf2f8', darkBg: '#500724', label: 'E', text: '#ffffff' },
    { bg: '#0891b2', border: '#0e7490', light: '#ecfeff', darkBg: '#164e63', label: 'F', text: '#ffffff' },
    { bg: '#65a30d', border: '#4d7c0f', light: '#f7fee7', darkBg: '#1a2e05', label: 'G', text: '#ffffff' },
    { bg: '#4f46e5', border: '#4338ca', light: '#eef2ff', darkBg: '#1e1b4b', label: 'H', text: '#ffffff' }
  ];

  const SHUFFLED_CACHE = {};

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getShuffledDescriptions(q) {
    if (SHUFFLED_CACHE[q.id]) {
      return SHUFFLED_CACHE[q.id];
    }
    const matchData = q.match_data;
    if (!matchData || !matchData.pairs) return [];

    let descs = matchData.pairs.map(p => ({
      desc: p.desc,
      desc_vi: p.desc_vi,
      correctTerm: p.term
    }));

    if (matchData.distractor_descs && matchData.distractor_descs.length > 0) {
      matchData.distractor_descs.forEach(d => {
        descs.push({
          desc: d.desc,
          desc_vi: d.desc_vi,
          correctTerm: null
        });
      });
    }

    // Stable random shuffle per question
    descs.sort(() => 0.5 - Math.random());
    SHUFFLED_CACHE[q.id] = descs;
    return descs;
  }

  // =========================================================================
  // RENDER INTERACTIVE NODE-TO-NODE MATCHING BOARD
  // =========================================================================
  function renderExamMatchingBoard(q, currentAnswers, onChange, options = {}) {
    const matchData = q.match_data;
    if (!matchData) return document.createElement('div');

    const container = document.createElement('div');
    container.className = 'matching-node-board-container';
    container.style.position = 'relative';

    const terms = matchData.pairs.map(p => ({
      term: p.term,
      term_vi: p.term_vi
    }));

    if (matchData.distractors && matchData.distractors.length > 0) {
      matchData.distractors.forEach(d => {
        terms.push({ term: d.term, term_vi: d.term_vi });
      });
    }

    const descriptions = getShuffledDescriptions(q);

    let selectedTerm = null;
    let selectedDesc = null;
    let checkedState = null; // { isAllCorrect, details } when evaluated

    const matchedPairs = currentAnswers || {};

    function renderUI() {
      container.innerHTML = '';

      const matchedTermCount = Object.keys(matchedPairs).length;
      const totalRequired = matchData.pairs.length;

      // Map color index to each matched pair
      const pairColorMap = {};
      let colorIdx = 0;
      Object.keys(matchedPairs).forEach(termKey => {
        pairColorMap[termKey] = PAIR_COLORS[colorIdx % PAIR_COLORS.length];
        colorIdx++;
      });

      // 1. Controls Header
      const header = document.createElement('div');
      header.className = 'matching-header-banner';
      header.innerHTML = `
        <div class="matching-banner-actions" style="margin-left: auto;">
          <span class="matching-progress-badge">
            Đã nối: <strong>${matchedTermCount}/${totalRequired}</strong> cặp
          </span>
          <button class="btn btn-outline btn-xs btn-match-check" type="button">
            Chấm điểm
          </button>
          <button class="btn btn-outline btn-xs btn-match-reset" type="button">
            Reset
          </button>
        </div>
      `;
      container.appendChild(header);

      // Bind Reset
      header.querySelector('.btn-match-reset').addEventListener('click', (e) => {
        e.stopPropagation();
        Object.keys(matchedPairs).forEach(k => delete matchedPairs[k]);
        checkedState = null;
        if (onChange) onChange(matchedPairs);
        renderUI();
      });

      // Bind Check
      header.querySelector('.btn-match-check').addEventListener('click', (e) => {
        e.stopPropagation();
        checkedState = evaluateMatchQuestion(q, matchedPairs);
        renderUI();
      });

      // Checked Result Feedback Banner if evaluated
      if (checkedState) {
        const evalBox = document.createElement('div');
        evalBox.className = `matching-eval-banner ${checkedState.isAllCorrect ? 'success' : 'warning'}`;
        evalBox.innerHTML = `
          <span>${checkedState.isAllCorrect ? 'Xuất sắc! Bạn đã nối chính xác 100% tất cả các cặp.' : `Bạn đã ghép đúng ${checkedState.correctCount}/${checkedState.totalPairs} cặp từ. Hãy xem lại các đường nối màu đỏ.`}</span>
        `;
        container.appendChild(evalBox);
      }

      // 2. Grid Wrapper + SVG Lines Overlay
      const gridWrapper = document.createElement('div');
      gridWrapper.className = 'matching-grid-wrapper';
      gridWrapper.style.position = 'relative';

      // SVG Canvas for Connecting Lines
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'matching-svg-lines');
      svg.style.position = 'absolute';
      svg.style.inset = '0';
      svg.style.width = '100%';
      svg.style.height = '100%';
      svg.style.pointerEvents = 'none';
      svg.style.zIndex = '4';
      gridWrapper.appendChild(svg);

      // Two Column Board
      const grid = document.createElement('div');
      grid.className = 'matching-two-cols';

      // --- LEFT COLUMN: TERMS ---
      const leftCol = document.createElement('div');
      leftCol.className = 'matching-column matching-col-terms';
      leftCol.innerHTML = `
        <div class="matching-column-title">
          ${escapeHtml(matchData.left_title || 'THUẬT NGỮ / SECURITY TOOL')}
        </div>
      `;

      terms.forEach((t, tIdx) => {
        const isSelected = selectedTerm === t.term;
        const isPaired = Boolean(matchedPairs[t.term]);
        const color = pairColorMap[t.term];

        let evalStatus = null;
        if (checkedState && isPaired) {
          const detail = checkedState.details.find(d => d.term === t.term);
          if (detail) evalStatus = detail.isCorrect ? 'correct' : 'wrong';
        }

        const card = document.createElement('div');
        card.className = `match-node-card match-card-term ${isSelected ? 'selected' : ''} ${isPaired ? 'paired' : ''} ${evalStatus || ''}`;
        card.dataset.term = t.term;

        if (isPaired && color) {
          card.style.borderColor = evalStatus === 'wrong' ? '#ef4444' : (evalStatus === 'correct' ? '#22c55e' : color.border);
          card.style.backgroundColor = color.light;
        }

        const defaultLetter = String.fromCharCode(65 + (tIdx % 26));
        const activeLabel = color ? color.label : defaultLetter;

        card.innerHTML = `
          <div class="match-card-content">
            <div class="match-card-title">${escapeHtml(t.term)}</div>
            ${t.term_vi ? `<div class="match-card-subtext">vn ${escapeHtml(t.term_vi)}</div>` : ''}
          </div>
          <div class="match-node-target node-right ${isPaired ? 'connected' : 'unconnected'}" data-node-term="${escapeHtml(t.term)}" title="Bấm vào node để nối">
            <span class="match-node-bubble" style="${isPaired && color ? `background: ${evalStatus === 'wrong' ? '#ef4444' : (evalStatus === 'correct' ? '#22c55e' : color.bg)}; color: #fff; border-color: ${color.border};` : ''}">
              ${isPaired ? activeLabel : defaultLetter}
            </span>
          </div>
        `;

        card.addEventListener('click', (e) => {
          e.stopPropagation();
          if (isPaired && selectedTerm !== t.term) {
            // Unpair on click if already paired
            delete matchedPairs[t.term];
            checkedState = null;
            if (onChange) onChange(matchedPairs);
            renderUI();
            return;
          }

          if (selectedTerm === t.term) {
            selectedTerm = null;
          } else {
            selectedTerm = t.term;
            if (selectedDesc) {
              makePair(selectedTerm, selectedDesc);
              selectedTerm = null;
              selectedDesc = null;
            }
          }
          renderUI();
        });

        leftCol.appendChild(card);
      });

      // --- RIGHT COLUMN: DESCRIPTIONS ---
      const rightCol = document.createElement('div');
      rightCol.className = 'matching-column matching-col-descriptions';
      rightCol.innerHTML = `
        <div class="matching-column-title">
          ${escapeHtml(matchData.right_title || 'DESCRIPTION / ĐỊNH NGHĨA')}
        </div>
      `;

      descriptions.forEach(d => {
        let pairedTerm = null;
        Object.entries(matchedPairs).forEach(([tm, ds]) => {
          if (ds === d.desc) pairedTerm = tm;
        });

        const isSelected = selectedDesc === d.desc;
        const isPaired = Boolean(pairedTerm);
        const color = pairedTerm ? pairColorMap[pairedTerm] : null;

        let evalStatus = null;
        if (checkedState && isPaired) {
          const detail = checkedState.details.find(dt => dt.term === pairedTerm);
          if (detail) evalStatus = detail.isCorrect ? 'correct' : 'wrong';
        }

        const card = document.createElement('div');
        card.className = `match-node-card match-card-desc ${isSelected ? 'selected' : ''} ${isPaired ? 'paired' : ''} ${evalStatus || ''}`;
        card.dataset.desc = d.desc;

        if (isPaired && color) {
          card.style.borderColor = evalStatus === 'wrong' ? '#ef4444' : (evalStatus === 'correct' ? '#22c55e' : color.border);
          card.style.backgroundColor = color.light;
        }

        card.innerHTML = `
          <div class="match-node-target node-left ${isPaired ? 'connected' : 'unconnected'}" data-node-desc="${escapeHtml(d.desc)}" title="Bấm vào node để nối">
            <span class="match-node-bubble" style="${isPaired && color ? `background: ${evalStatus === 'wrong' ? '#ef4444' : (evalStatus === 'correct' ? '#22c55e' : color.bg)}; color: #fff; border-color: ${color.border};` : ''}">
              ${isPaired && color ? color.label : '○'}
            </span>
          </div>
          <div class="match-card-content">
            <div class="match-card-body-text">${escapeHtml(d.desc)}</div>
            ${d.desc_vi ? `<div class="match-card-subtext">vn ${escapeHtml(d.desc_vi)}</div>` : ''}
          </div>
        `;

        card.addEventListener('click', (e) => {
          e.stopPropagation();
          if (isPaired && selectedDesc !== d.desc) {
            // Unpair on click if already paired
            delete matchedPairs[pairedTerm];
            checkedState = null;
            if (onChange) onChange(matchedPairs);
            renderUI();
            return;
          }

          if (selectedDesc === d.desc) {
            selectedDesc = null;
          } else {
            selectedDesc = d.desc;
            if (selectedTerm) {
              makePair(selectedTerm, selectedDesc);
              selectedTerm = null;
              selectedDesc = null;
            }
          }
          renderUI();
        });

        rightCol.appendChild(card);
      });

      grid.appendChild(leftCol);
      grid.appendChild(rightCol);
      gridWrapper.appendChild(grid);
      container.appendChild(gridWrapper);

      // 3. Paired Summary Tags Bar
      if (matchedTermCount > 0) {
        const summary = document.createElement('div');
        summary.className = 'matching-summary-box';
        summary.innerHTML = `<div class="matching-summary-title">Các cặp đã kết nối (${matchedTermCount}):</div>`;

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'matching-tags-container';

        Object.entries(matchedPairs).forEach(([tm, ds]) => {
          const color = pairColorMap[tm] || PAIR_COLORS[0];
          const tag = document.createElement('div');
          tag.className = 'matching-pair-tag';
          tag.style.borderLeft = `3px solid ${color.border}`;
          tag.innerHTML = `
            <span style="font-weight: 700; color: ${color.border};">[${color.label}]</span>
            <span style="font-weight: 600;">${escapeHtml(tm)}</span>
            <span style="color: var(--text-muted);">➔</span>
            <span style="color: var(--text-muted);">${escapeHtml(ds.slice(0, 40))}...</span>
            <span class="btn-remove-pair" title="Gỡ cặp này" data-term="${escapeHtml(tm)}">✕</span>
          `;

          tag.querySelector('.btn-remove-pair').addEventListener('click', (e) => {
            e.stopPropagation();
            delete matchedPairs[tm];
            checkedState = null;
            if (onChange) onChange(matchedPairs);
            renderUI();
          });

          tagsContainer.appendChild(tag);
        });

        summary.appendChild(tagsContainer);
        container.appendChild(summary);
      }

      // 4. Draw Connecting Lines via SVG Canvas
      function updateSvgLines() {
        svg.innerHTML = '';
        if (window.innerWidth <= 640) return; // In mobile column mode, skip lines

        const wrapperRect = gridWrapper.getBoundingClientRect();
        if (wrapperRect.width === 0 || wrapperRect.height === 0) return;

        Object.entries(matchedPairs).forEach(([tm, ds]) => {
          const color = pairColorMap[tm];
          if (!color) return;

          const leftTarget = gridWrapper.querySelector(`.node-right[data-node-term="${CSS.escape(tm)}"] .match-node-bubble`);
          const rightTarget = gridWrapper.querySelector(`.node-left[data-node-desc="${CSS.escape(ds)}"] .match-node-bubble`);

          if (leftTarget && rightTarget) {
            const r1 = leftTarget.getBoundingClientRect();
            const r2 = rightTarget.getBoundingClientRect();

            const x1 = (r1.left + r1.right) / 2 - wrapperRect.left;
            const y1 = (r1.top + r1.bottom) / 2 - wrapperRect.top;
            const x2 = (r2.left + r2.right) / 2 - wrapperRect.left;
            const y2 = (r2.top + r2.bottom) / 2 - wrapperRect.top;

            let strokeColor = color.border;
            if (checkedState) {
              const detail = checkedState.details.find(d => d.term === tm);
              if (detail) {
                strokeColor = detail.isCorrect ? '#22c55e' : '#ef4444';
              }
            }

            // Smooth cubic bezier curve connecting node to node
            const dx = Math.abs(x2 - x1) * 0.45;
            const pathD = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathD);
            path.setAttribute('stroke', strokeColor);
            path.setAttribute('stroke-width', '2.8');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('fill', 'none');
            path.setAttribute('opacity', '0.9');
            path.setAttribute('class', 'matching-connection-path');
            svg.appendChild(path);
          }
        });
      }

      requestAnimationFrame(() => updateSvgLines());
      window.addEventListener('resize', updateSvgLines, { once: true });
    }

    function makePair(term, desc) {
      // Remove any previous pairing with this desc
      Object.keys(matchedPairs).forEach(t => {
        if (matchedPairs[t] === desc) delete matchedPairs[t];
      });
      matchedPairs[term] = desc;
      checkedState = null;
      if (onChange) onChange(matchedPairs);
    }

    renderUI();
    return container;
  }

  // =========================================================================
  // EVALUATE MATCHING ACCURACY
  // =========================================================================
  function evaluateMatchQuestion(q, userMatches) {
    const matchData = q.match_data;
    if (!matchData || !matchData.pairs) return { isAllCorrect: false, score: 0, details: [] };

    const pairs = matchData.pairs;
    let correctCount = 0;
    const details = [];

    pairs.forEach(p => {
      const userSelectedDesc = userMatches ? userMatches[p.term] : null;
      const isMatch = (userSelectedDesc === p.desc);
      if (isMatch) correctCount++;

      details.push({
        term: p.term,
        term_vi: p.term_vi,
        correctDesc: p.desc,
        correctDesc_vi: p.desc_vi,
        userDesc: userSelectedDesc,
        isCorrect: isMatch
      });
    });

    const isAllCorrect = (correctCount === pairs.length);
    return {
      isAllCorrect,
      score: correctCount / pairs.length,
      correctCount,
      totalPairs: pairs.length,
      details
    };
  }

  // =========================================================================
  // RENDER STUDY MODE MATCHING (CLEAN ANSWERS + PRACTICE MODE)
  // =========================================================================
  function renderStudyMatchingBlock(q) {
    const matchData = q.match_data;
    if (!matchData) return '';

    const qid = q.id;
    const pairs = matchData.pairs || [];

    // Pre-build answered pairs for default study visual
    const correctPairs = {};
    pairs.forEach(p => {
      correctPairs[p.term] = p.desc;
    });

    let rowsHtml = '';
    pairs.forEach((p, idx) => {
      const color = PAIR_COLORS[idx % PAIR_COLORS.length];
      rowsHtml += `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 10px 14px; font-weight: 700; color: ${color.border}; width: 32%;">
            <span style="display: inline-block; width: 22px; height: 22px; line-height: 22px; text-align: center; border-radius: 50%; background: ${color.bg}; color: #fff; font-size: 11px; margin-right: 6px;">${color.label}</span>
            ${escapeHtml(p.term)}
            ${p.term_vi ? `<div style="font-weight: 400; font-size: 12px; color: var(--text-muted); margin-top: 2px;">vn ${escapeHtml(p.term_vi)}</div>` : ''}
          </td>
          <td style="padding: 10px 14px; color: var(--text-main);">
            ${escapeHtml(p.desc)}
            ${p.desc_vi ? `<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">vn ${escapeHtml(p.desc_vi)}</div>` : ''}
          </td>
        </tr>
      `;
    });

    const exhibitImg = (q.images && q.images[0]) ? q.images[0] : null;

    return `
      <div class="matching-study-wrapper" style="margin: 14px 0; border: 1px solid var(--border-color); border-radius: var(--radius); padding: 16px; background: var(--bg-card); box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong style="font-size: 14px; color: var(--primary);">Bảng ghép cặp đáp án chuẩn (Study Matching):</strong>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-outline btn-xs btn-toggle-interactive-match" data-qid="${qid}">
              Thực hành nối trực quan (Interactive Node)
            </button>
            ${exhibitImg ? `
              <button class="btn btn-outline btn-xs btn-toggle-exhibit-img" data-img="exhibit_img_${qid}" data-text-show="Xem sơ đồ câu hỏi" data-text-hide="Ẩn sơ đồ câu hỏi">
                Xem sơ đồ câu hỏi
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Answers Table -->
        <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color);">
          <thead>
            <tr style="background: var(--bg-main); text-align: left; border-bottom: 2px solid var(--border-color);">
              <th style="padding: 10px 14px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(matchData.left_title || 'THUẬT NGỮ')}</th>
              <th style="padding: 10px 14px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(matchData.right_title || 'ĐỊNH NGHĨA TƯƠNG ỨNG')}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <!-- Interactive Practice Area -->
        <div class="practice-interactive-container" id="practice_area_${qid}" style="display: none; margin-top: 16px; border-top: 1px dashed var(--border-color); padding-top: 14px;"></div>

        <!-- Original Exhibit Image -->
        ${exhibitImg ? `
          <div class="exhibit-img-box" id="exhibit_img_${qid}" style="display: none; margin-top: 14px; border-top: 1px dashed var(--border-color); padding-top: 10px; text-align: center;">
            <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">Sơ đồ câu hỏi:</p>
            <img src="${exhibitImg}" alt="Exhibit Answer" style="max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color);" loading="lazy">
          </div>
        ` : ''}
      </div>
    `;
  }

  // =========================================================================
  // RENDER EXAM REVIEW MATCHING RESULT
  // =========================================================================
  function renderExamReviewMatching(q, userMatches) {
    const evalResult = evaluateMatchQuestion(q, userMatches);
    const details = evalResult.details;

    let rowsHtml = '';
    details.forEach(d => {
      const isCorrect = d.isCorrect;
      const statusIcon = isCorrect ? '✔ Đúng' : '✖ Sai';
      const statusColor = isCorrect ? 'color: #15803d; font-weight: 700;' : 'color: #b91c1c; font-weight: 700;';

      rowsHtml += `
        <tr class="${isCorrect ? 'correct' : 'incorrect'}">
          <td style="padding: 8px 12px; font-weight: 600;">${escapeHtml(d.term)}</td>
          <td style="padding: 8px 12px; ${statusColor}">${statusIcon}</td>
          <td style="padding: 8px 12px;">${escapeHtml(d.userDesc || '(Chưa nối)')}</td>
          <td style="padding: 8px 12px; font-weight: 600; color: #15803d;">${escapeHtml(d.correctDesc)}</td>
        </tr>
      `;
    });

    const exhibitImg = (q.images && q.images[0]) ? q.images[0] : null;

    return `
      <div style="margin: 12px 0; border: 1px solid var(--border-color); border-radius: var(--radius); padding: 14px; background: var(--bg-card);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <strong style="font-size: 14px;">Kết quả ghép cặp: Đúng ${evalResult.correctCount}/${evalResult.totalPairs} cặp</strong>
          ${exhibitImg ? `
            <button class="btn btn-outline btn-xs btn-toggle-exhibit-img" data-img="rev_img_${q.id}" data-text-show="Xem sơ đồ câu hỏi" data-text-hide="Ẩn sơ đồ câu hỏi">
              Xem sơ đồ câu hỏi
            </button>
          ` : ''}
        </div>
        <table class="matching-review-table">
          <thead>
            <tr>
              <th>Từ khóa</th>
              <th>Kết quả</th>
              <th>Lựa chọn của bạn</th>
              <th>Đáp án đúng chuẩn</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
        ${exhibitImg ? `
          <div class="exhibit-img-box" id="rev_img_${q.id}" style="display: none; margin-top: 10px; text-align: center;">
            <img src="${exhibitImg}" alt="Exhibit" style="max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color);" loading="lazy">
          </div>
        ` : ''}
      </div>
    `;
  }

  // Export to window
  window.MATCHING_HELPER = {
    renderExamMatchingBoard,
    renderStudyMatchingBlock,
    renderExamReviewMatching,
    evaluateMatchQuestion
  };

  // Global event delegation for Study practice toggles
  document.addEventListener('click', (e) => {
    const practiceBtn = e.target.closest('.btn-toggle-interactive-match');
    if (practiceBtn) {
      e.stopPropagation();
      const qid = practiceBtn.getAttribute('data-qid');
      const area = document.getElementById(`practice_area_${qid}`);
      if (area && (window.NWC_APP || window.CYBER_OPS_APP)) {
        const isHidden = (area.style.display === 'none');
        area.style.display = isHidden ? 'block' : 'none';
        practiceBtn.innerText = isHidden ? 'Ẩn thực hành' : 'Thực hành nối trực quan (Interactive Node)';
        if (isHidden && area.children.length === 0) {
          const q = (window.NWC_APP || window.CYBER_OPS_APP).dataStore.getQuestion(qid);
          if (q) {
            const board = renderExamMatchingBoard(q, {}, () => {});
            area.appendChild(board);
          }
        }
      }
    }

    const exhibitBtn = e.target.closest('.btn-toggle-exhibit-img');
    if (exhibitBtn) {
      e.stopPropagation();
      const targetId = exhibitBtn.getAttribute('data-img');
      const box = document.getElementById(targetId);
      if (box) {
        const isHidden = (box.style.display === 'none' || !box.style.display);
        box.style.display = isHidden ? 'block' : 'none';
        const showText = exhibitBtn.getAttribute('data-text-show') || 'Xem sơ đồ câu hỏi';
        const hideText = exhibitBtn.getAttribute('data-text-hide') || 'Ẩn sơ đồ câu hỏi';
        exhibitBtn.textContent = isHidden ? hideText : showText;
      }
    }
  });

})();
