/**
 * CCNA 2 v7 (SRWE) - Switching, Routing, and Wireless Essentials
 * Advanced Single Page Application (OOP Architecture)
 * Optimized Data Structures (Map, Set, Indexed Groups) for Maximum Performance
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONSTANTS & METADATA
  // =========================================================================

  const MODULE_GROUP_INFO = {
    'all': { name: 'Toàn bộ Modules 1 - 16', desc: 'Ngân hàng toàn diện 327 câu hỏi trắc nghiệm & nối từ chuẩn ITExamAnswers CCNA 2 v7 (SRWE).' },
    'm1-4': { name: 'Modules 1 - 4: Switching Concepts, VLANs, and InterVLAN Routing', desc: 'Khái niệm chuyển mạch Switch, cấu hình VLANs, đường Trunk 802.1Q và định tuyến liên VLAN (Inter-VLAN Routing).' },
    'm5-6': { name: 'Modules 5 - 6: Redundant Networks (STP & EtherChannel)', desc: 'Giao thức chống loop Spanning Tree Protocol (STP/RSTP) và kỹ thuật gom liên kết EtherChannel (LACP/PAgP).' },
    'm7-9': { name: 'Modules 7 - 9: Available and Reliable Networks (DHCP & FHRP)', desc: 'Cấu hình cấp phát IP tự động DHCPv4/DHCPv6, SLAAC và cơ chế dự phòng định tuyến First Hop Redundancy Protocol (HSRP).' },
    'm10-13': { name: 'Modules 10 - 13: L2 Security and WLANs', desc: 'Bảo mật chuyển mạch Layer 2 (Port Security, DHCP Snooping, DAI) và kiến trúc, quản trị mạng không dây WLAN (WLC/AP).' },
    'm14-16': { name: 'Modules 14 - 16: Routing Concepts and Configuration (Static Routes)', desc: 'Nguyên lý định tuyến Router, giải mã bảng định tuyến Routing Table và cấu hình định tuyến tĩnh Static Route.' },
    'final': { name: 'CCNA 2 v7 (SRWE) Practice Final Exam', desc: 'Đề thi tổng hợp toàn diện cuối kỳ CCNA 2 Switching, Routing, and Wireless Essentials chuẩn quốc tế Cisco.' }
  };

  const MOD_1_TO_16_KEYS = ['m1-4', 'm5-6', 'm7-9', 'm10-13', 'm14-16', 'final'];

  // =========================================================================
  // 2. UTILITIES
  // =========================================================================

  class Utils {
    static escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    static shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    static copyToClipboard(text, btnElement = null) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          if (btnElement) {
            const originalText = btnElement.innerText;
            btnElement.innerText = 'Đã chép!';
            setTimeout(() => { btnElement.innerText = originalText; }, 1500);
          }
        }).catch(() => {});
      }
    }

    static copyCli(btn, text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          const span = btn.querySelector('span');
          if (span) span.innerText = 'Đã sao chép!';
          btn.style.color = '#22c55e';
          setTimeout(() => {
            if (span) span.innerText = 'Sao chép';
            btn.style.color = '';
          }, 2000);
        }).catch(() => {});
      }
    }

    static formatCiscoCli(text) {
      if (!text) return '';
      if (text.includes('```')) {
        return text.replace(/```(?:cisco|ios)?([\s\S]*?)```/g, (m, code) => {
          const raw = code.trim();
          const encoded = encodeURIComponent(raw);
          const highlighted = Utils.highlightCliSyntax(Utils.escapeHtml(raw));
          return `
            <div class="cisco-terminal-box">
              <div class="terminal-topbar">
                <div class="terminal-dots">
                  <span class="dot dot-red"></span>
                  <span class="dot dot-yellow"></span>
                  <span class="dot dot-green"></span>
                </div>
                <span class="terminal-title">Cisco IOS CLI</span>
                <button class="btn-copy-cli" onclick="Utils.copyCli(this, decodeURIComponent('${encoded}'))">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  <span>Sao chép</span>
                </button>
              </div>
              <pre class="terminal-code"><code>${highlighted}</code></pre>
            </div>
          `;
        });
      }
      return Utils.escapeHtml(text);
    }

    static highlightCliSyntax(escapedText) {
      return escapedText
        .replace(/((?:Router|Switch|S\d|R\d|DLS\d|ALS\d)(?:\([a-zA-Z0-9\-_]+\))?[#>])/g, '<span class="cli-prompt">$1</span>')
        .replace(/(\b(?:configure\s+terminal|interface|switchport|ip\s+address|no\s+shutdown|show\s+ip\s+route|show\s+mac\s+address-table|spanning-tree|standby|channel-group|ip\s+dhcp|network|default-router|encapsulation|ip\s+route|ip\s+helper-address|access-list|permit|deny)\b)/gi, '<span class="cli-cmd">$1</span>');
    }

    static formatExplanation(text) {
      if (!text) return '';
      if (text.includes('```')) {
        return Utils.formatCiscoCli(text);
      }
      const escaped = Utils.escapeHtml(text);
      return escaped
        .replace(/(Explanation:\s*Topic\s*[\d\.]+)/gi, '<div class="exp-topic-title"><strong>$1</strong></div>')
        .replace(/\n/g, '<br>');
    }
  }

  // =========================================================================
  // 3. STORAGE SERVICE
  // =========================================================================

  class StorageService {
    static get(key, defaultValue) {
      try {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultValue;
      } catch (e) {
        console.warn(`Storage get error for ${key}:`, e);
        return defaultValue;
      }
    }

    static set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn(`Storage set error for ${key}:`, e);
      }
    }

    static getStarred() {
      const arr = this.get('nwc_starred', []);
      return new Set(Array.isArray(arr) ? arr : []);
    }

    static saveStarred(starredSet) {
      this.set('nwc_starred', Array.from(starredSet));
    }

    static getMistakes() {
      const arr = this.get('nwc_mistakes', []);
      return new Set(Array.isArray(arr) ? arr : []);
    }

    static saveMistakes(mistakesSet) {
      this.set('nwc_mistakes', Array.from(mistakesSet));
    }

    static getFeTests() {
      return this.get('nwc_fe_tests', []);
    }

    static saveFeTests(tests) {
      this.set('nwc_fe_tests', tests);
    }

    static getModuleStats() {
      let raw = this.get('nwc_module_stats', {});
      const result = {};
      const defaultKeys = ['m1-4', 'm5-6', 'm7-9', 'm10-13', 'm14-16', 'final'];
      defaultKeys.forEach(k => {
        const item = raw[k];
        if (item && typeof item === 'object') {
          if (item.latest && typeof item.latest === 'object') {
            const tot = Number(item.latest.total) || 0;
            const cor = Number(item.latest.correct) || 0;
            const pct = tot > 0 ? Math.round((cor / tot) * 100) : 0;
            result[k] = {
              latest: { total: tot, correct: cor, percentage: pct, date: item.latest.date || '' },
              total: tot,
              correct: cor,
              percentage: pct,
              history: Array.isArray(item.history) ? item.history : []
            };
          } else {
            const total = Number(item.total) || 0;
            const correct = Number(item.correct) || 0;
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
            result[k] = {
              latest: total > 0 ? { total, correct, percentage: pct, date: '' } : null,
              total,
              correct,
              percentage: pct,
              history: Array.isArray(item.history) ? item.history : []
            };
          }
        } else {
          result[k] = { latest: null, total: 0, correct: 0, percentage: 0, history: [] };
        }
      });
      return result;
    }

    static saveModuleStats(stats) {
      this.set('nwc_module_stats', stats);
    }

    static getExamConfig() {
      return this.get('nwc_exam_config', {
        shuffleQuestions: true,
        shuffleOptions: true,
        durationMinutes: 45
      });
    }

    static saveExamConfig(cfg) {
      this.set('nwc_exam_config', cfg);
    }

    static getTheme() {
      return localStorage.getItem('nwc_theme') || 'light';
    }

    static setTheme(theme) {
      localStorage.setItem('nwc_theme', theme);
    }
  }

  // =========================================================================
  // 4. VISUALIZATION BRIDGE SERVICE (Live Motion Simulation)
  // =========================================================================

  class VisualizationBridge {
    static intervals = {};

    static hasVisualization(questionId) {
      if (!window.QUESTION_VISUAL_MAP || !window.MECHANISM_VISUALIZATIONS) return false;
      const key = window.QUESTION_VISUAL_MAP[questionId];
      return Boolean(key && window.MECHANISM_VISUALIZATIONS[key]);
    }

    static getDeviceSvg(type) {
      switch (type) {
        case 'switch':
          return `
            <rect x="-34" y="-18" width="68" height="36" rx="5" class="motion-node-body switch-body" />
            <path d="M-22 -5 L-6 -5 M-10 -9 L-6 -5 L-10 -1" class="switch-arrow" />
            <path d="M-6 5 L-22 5 M-18 1 L-22 5 L-18 9" class="switch-arrow" />
            <path d="M6 -5 L22 -5 M18 -9 L22 -5 L18 -1" class="switch-arrow" />
            <path d="M22 5 L6 5 M10 1 L6 5 L10 9" class="switch-arrow" />
          `;
        case 'router':
          return `
            <circle cx="0" cy="0" r="22" class="motion-node-body router-body" />
            <path d="M-12 0 L12 0 M8 -4 L12 0 L8 4 M-8 -4 L-12 0 L-8 4" class="router-arrow" />
            <path d="M0 -12 L0 12 M-4 8 L0 12 L4 8 M-4 -8 L0 -12 L4 -8" class="router-arrow" />
          `;
        case 'firewall':
          return `
            <rect x="-30" y="-20" width="60" height="40" rx="4" class="motion-node-body firewall-body" />
            <line x1="-30" y1="-7" x2="30" y2="-7" class="fw-brick" />
            <line x1="-30" y1="6" x2="30" y2="6" class="fw-brick" />
            <line x1="-10" y1="-20" x2="-10" y2="-7" class="fw-brick" />
            <line x1="10" y1="-20" x2="10" y2="-7" class="fw-brick" />
            <line x1="-20" y1="-7" x2="-20" y2="6" class="fw-brick" />
            <line x1="0" y1="-7" x2="0" y2="6" class="fw-brick" />
            <line x1="20" y1="-7" x2="20" y2="6" class="fw-brick" />
            <line x1="-10" y1="6" x2="-10" y2="20" class="fw-brick" />
            <line x1="10" y1="6" x2="10" y2="20" class="fw-brick" />
          `;
        case 'server':
          return `
            <rect x="-26" y="-22" width="52" height="44" rx="4" class="motion-node-body server-body" />
            <line x1="-20" y1="-10" x2="14" y2="-10" class="server-slot" />
            <circle cx="18" cy="-10" r="2" class="server-led green" />
            <line x1="-20" y1="0" x2="14" y2="0" class="server-slot" />
            <circle cx="18" cy="0" r="2" class="server-led green" />
            <line x1="-20" y1="10" x2="14" y2="10" class="server-slot" />
            <circle cx="18" cy="10" r="2" class="server-led blue" />
          `;
        case 'attacker':
          return `
            <rect x="-26" y="-18" width="52" height="30" rx="3" class="motion-node-body attacker-body" />
            <rect x="-21" y="-14" width="42" height="22" rx="2" class="attacker-screen" />
            <path d="M-30 16 L30 16 L24 20 L-24 20 Z" class="attacker-base" />
            <text x="0" y="2" class="attacker-prompt" text-anchor="middle">&gt;_</text>
          `;
        case 'cloud':
          return `
            <path d="M-22 8 C-30 8 -34 -2 -26 -10 C-26 -18 -12 -22 0 -16 C8 -24 24 -20 26 -10 C34 -4 32 8 22 8 Z" class="motion-node-body cloud-body" />
          `;
        case 'pc':
        default:
          return `
            <rect x="-26" y="-20" width="52" height="32" rx="3" class="motion-node-body pc-body" />
            <rect x="-22" y="-16" width="44" height="24" rx="2" class="pc-screen" />
            <path d="M-6 12 L6 12 L8 18 L-8 18 Z" class="pc-stand" />
            <line x1="-14" y1="18" x2="14" y2="18" class="pc-base" />
          `;
      }
    }

    static renderBlock(questionId) {
      if (!this.hasVisualization(questionId)) return '';
      const visualKey = window.QUESTION_VISUAL_MAP[questionId];
      const visualData = window.MECHANISM_VISUALIZATIONS[visualKey];
      if (!visualData) return '';

      let innerHtml = '';
      if (typeof visualData.render === 'function') {
        innerHtml = visualData.render(`vis_canvas_${questionId}`);
      } else {
        const steps = Array.isArray(visualData.steps) ? visualData.steps : [];
        const topo = visualData.topology || {};
        const nodes = Array.isArray(topo.nodes) ? topo.nodes : (Array.isArray(visualData.nodes) ? visualData.nodes : []);
        const links = Array.isArray(topo.links) ? topo.links : [];
        const rawSpec = visualData.specTable;
        const step0 = steps[0] || {};
        const pdu0 = step0.pdu || {};
        const ds0 = step0.deviceState || {};

        // 1. Stepper Navigation Header
        let stepperNavHtml = '';
        if (steps.length > 0) {
          stepperNavHtml = `
            <div class="visual-stepper-header">
              <span class="visual-stepper-title">Quy trình xử lý gói tin (Packet Processing Steps):</span>
              <div class="visual-stepper-nav" data-qid="${questionId}">
                ${steps.map((s, idx) => `
                  <button class="visual-step-btn ${idx === 0 ? 'active' : ''}" data-qid="${questionId}" data-step-idx="${idx}">
                    <span>Bước ${s.num || (idx + 1)}:</span>
                    <span>${Utils.escapeHtml(s.name || '')}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }

        // 2. Live Motion Simulation Canvas (SVG)
        let liveMotionHtml = '';
        if (nodes.length > 0) {
          const firstFromNode = nodes.find(n => n.id === step0.fromNode) || nodes[0];
          liveMotionHtml = `
            <div class="live-motion-wrap">
              <div class="live-motion-header">
                <span class="live-motion-title">Mô phỏng luồng chuyển động gói tin (Live Motion Topology):</span>
              </div>
              <svg viewBox="0 0 620 250" class="live-motion-canvas" id="motion_canvas_${questionId}">
                <!-- Network Links -->
                ${links.map(l => {
                  const n1 = nodes.find(n => n.id === l.from);
                  const n2 = nodes.find(n => n.id === l.to);
                  if (!n1 || !n2) return '';
                  const midX = (n1.x + n2.x) / 2;
                  const midY = (n1.y + n2.y) / 2 - 8;
                  return `
                    <line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" class="motion-link-line" id="link_${questionId}_${l.from}_${l.to}" />
                    ${l.label ? `<text x="${midX}" y="${midY}" class="motion-link-label" text-anchor="middle">${Utils.escapeHtml(l.label)}</text>` : ''}
                  `;
                }).join('')}

                <!-- Network Device Nodes -->
                ${nodes.map((n, idx) => `
                  <g class="motion-node-group ${idx === 0 ? 'active-node' : ''}" id="node_${questionId}_${n.id}" transform="translate(${n.x},${n.y})">
                    ${VisualizationBridge.getDeviceSvg(n.type || 'pc')}
                    <text x="0" y="32" class="motion-node-title" text-anchor="middle">${Utils.escapeHtml(n.label || n.name || '')}</text>
                    <text x="0" y="44" class="motion-node-sub" text-anchor="middle">${Utils.escapeHtml(n.sub || n.role || '')}</text>
                  </g>
                `).join('')}

                <!-- Animated Packet PDU Envelope -->
                <g class="motion-packet ${step0.status === 'drop' ? 'packet-drop' : ''}" id="packet_${questionId}" transform="translate(${firstFromNode.x},${firstFromNode.y})">
                  <rect x="-42" y="-12" width="84" height="24" rx="5" class="motion-packet-box"/>
                  <text x="0" y="4" class="motion-packet-text" text-anchor="middle">✉ ${Utils.escapeHtml(step0.packetLabel || 'Packet')}</text>
                </g>
              </svg>

              <!-- Live Simulation Status Console & Action Controls -->
              <div class="motion-console" id="motion_console_${questionId}">
                <div class="motion-console-text" id="console_text_${questionId}">
                  [Bước 1/${steps.length}] ${Utils.escapeHtml(step0.actionText || step0.name || '')}
                </div>
                <div class="motion-controls-row">
                  <button class="btn btn-outline btn-xs btn-autoplay" data-qid="${questionId}">▶ Phát tự động</button>
                  <div class="motion-speed-wrapper">
                    <label class="speed-label">Tốc độ:</label>
                    <select class="motion-speed-select" data-qid="${questionId}">
                      <option value="3500">0.75x</option>
                      <option value="2500" selected>1x</option>
                      <option value="1500">1.5x</option>
                    </select>
                  </div>
                  <button class="btn btn-outline btn-xs btn-reset-motion" data-qid="${questionId}" title="Đặt lại vị trí đầu">↺ Đặt lại</button>
                </div>
              </div>
            </div>
          `;
        }

        // 3. Live PDU Header Inspector Box
        let pduInspectorHtml = `
          <div class="visual-pdu-inspector" id="pdu_inspector_${questionId}">
            <div class="visual-inspector-title">
              <span class="inspector-badge">PDU Header Inspector</span>
              <span class="inspector-sub">Phân tích trường dữ liệu khung tin thời gian thực</span>
            </div>
            <div class="pdu-layers-grid">
              <div class="pdu-layer-card l2-card">
                <div class="pdu-layer-tag">Layer 2 • Data Link</div>
                <div class="pdu-layer-val" id="pdu_l2_${questionId}">${Utils.escapeHtml(pdu0.layer2 || 'Không áp dụng')}</div>
              </div>
              <div class="pdu-layer-card l3-card">
                <div class="pdu-layer-tag">Layer 3 • Network</div>
                <div class="pdu-layer-val" id="pdu_l3_${questionId}">${Utils.escapeHtml(pdu0.layer3 || 'Không áp dụng')}</div>
              </div>
              <div class="pdu-layer-card l4-card">
                <div class="pdu-layer-tag">Layer 4 • Transport</div>
                <div class="pdu-layer-val" id="pdu_l4_${questionId}">${Utils.escapeHtml(pdu0.layer4 || 'Không áp dụng')}</div>
              </div>
              <div class="pdu-layer-card payload-card">
                <div class="pdu-layer-tag">Payload / Application Data</div>
                <div class="pdu-layer-val" id="pdu_payload_${questionId}">${Utils.escapeHtml(pdu0.payload || 'Không có dữ liệu')}</div>
              </div>
            </div>
          </div>
        `;

        // 4. Real-Time Device State Table
        let deviceStateHtml = '';
        if (ds0 && Array.isArray(ds0.headers)) {
          deviceStateHtml = `
            <div class="visual-device-state-wrap" id="device_state_wrap_${questionId}">
              <div class="visual-state-title" id="device_state_title_${questionId}">
                ${Utils.escapeHtml(ds0.title || 'Trạng thái thiết bị thời gian thực')}
              </div>
              <div class="visual-state-table-scroll">
                <table class="visual-state-table" id="device_state_table_${questionId}">
                  <thead>
                    <tr>${ds0.headers.map(h => `<th>${Utils.escapeHtml(h)}</th>`).join('')}</tr>
                  </thead>
                  <tbody>
                    ${(ds0.rows || []).map(r => `<tr>${r.map(c => `<td>${Utils.escapeHtml(c)}</td>`).join('')}</tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        // 5. Step Detail Cards (one per step, active shown)
        let stepCardsHtml = '';
        if (steps.length > 0) {
          stepCardsHtml = `
            <div class="visual-step-cards-wrap" id="step_cards_wrap_${questionId}">
              ${steps.map((s, idx) => `
                <div class="visual-step-detail-card" id="step_card_${questionId}_${idx}" style="display: ${idx === 0 ? 'block' : 'none'};">
                  <div class="visual-step-headline">
                    <div class="visual-step-name">Bước ${s.num || (idx + 1)}: ${Utils.escapeHtml(s.name || '')}</div>
                    ${s.packetLabel ? `<span class="visual-packet-badge">✉ ${Utils.escapeHtml(s.packetLabel)}</span>` : ''}
                  </div>
                  <div class="visual-step-desc">${Utils.escapeHtml(s.desc || '')}</div>
                  <div class="visual-stepper-footer">
                    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                      <button class="btn btn-outline btn-xs btn-step-nav" data-qid="${questionId}" data-dir="prev" ${idx === 0 ? 'disabled' : ''}>← Bước trước</button>
                      <button class="btn btn-primary btn-xs btn-step-nav" data-qid="${questionId}" data-dir="next" ${idx === steps.length - 1 ? 'disabled' : ''}>Bước tiếp theo →</button>
                    </div>
                    <span style="font-size: 11.5px; color: var(--text-muted);">Bước ${idx + 1} / ${steps.length}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }

        // 6. Technical Specification Table
        let specHtml = '';
        if (rawSpec) {
          let rowsHtml = '';
          if (Array.isArray(rawSpec)) {
            rowsHtml = rawSpec.map(item => {
              if (Array.isArray(item)) {
                return `<tr>${item.map(c => `<td>${Utils.escapeHtml(String(c))}</td>`).join('')}</tr>`;
              }
              return `<tr><td>${Utils.escapeHtml(String(item.key || ''))}</td><td>${Utils.escapeHtml(String(item.value || ''))}</td></tr>`;
            }).join('');
          } else if (typeof rawSpec === 'object' && Array.isArray(rawSpec.rows)) {
            let theadHtml = '';
            if (Array.isArray(rawSpec.headers)) {
              theadHtml = `<thead><tr>${rawSpec.headers.map(h => `<th>${Utils.escapeHtml(String(h))}</th>`).join('')}</tr></thead>`;
            }
            rowsHtml = theadHtml + `<tbody>${rawSpec.rows.map(r => `<tr>${r.map(c => `<td>${Utils.escapeHtml(String(c))}</td>`).join('')}</tr>`).join('')}</tbody>`;
          }

          if (rowsHtml) {
            specHtml = `
              <div class="visual-spec-card">
                <div class="visual-spec-header">Thông số kỹ thuật chuẩn (Technical Specifications)</div>
                <table class="visual-spec-table">
                  ${rowsHtml.includes('<tbody>') ? rowsHtml : `<tbody>${rowsHtml}</tbody>`}
                </table>
              </div>
            `;
          }
        }

        // 7. Key Concept Note
        let takeawayHtml = '';
        const takeawayText = visualData.takeaway || visualData.note || '';
        if (takeawayText) {
          takeawayHtml = `
            <div class="visual-takeaway-box">
              <div class="visual-takeaway-label">
                <span>Quy tắc cốt lõi:</span>
              </div>
              <div>${Utils.escapeHtml(takeawayText)}</div>
            </div>
          `;
        }

        innerHtml = `
          ${stepperNavHtml}
          ${liveMotionHtml}
          ${pduInspectorHtml}
          ${deviceStateHtml}
          ${stepCardsHtml}
          ${specHtml}
          ${takeawayHtml}
        `;
      }

      return `
        <div class="visual-wrapper" style="margin-top: 14px;">
          <button class="visual-toggle-btn" data-target="vis_${questionId}">
            🌐 Xem sơ đồ cơ chế
          </button>
          <div class="visual-container" id="vis_${questionId}" style="display: none;">
            <div class="visual-title-bar">
              <div class="visual-title-text">
                <span>🔍</span>
                <span>${Utils.escapeHtml(visualData.title)}</span>
              </div>
              ${visualData.badge ? `<span class="visual-badge">${Utils.escapeHtml(visualData.badge)}</span>` : ''}
            </div>
            ${visualData.summary ? `<div class="visual-summary-banner">${Utils.escapeHtml(visualData.summary)}</div>` : ''}
            <div class="visual-box">
              ${innerHtml}
            </div>
          </div>
        </div>
      `;
    }

    static bindToggleEvents(container) {
      if (!container) return;

      // Cross-Component Highlighting: Node -> State Table Row
      container.querySelectorAll('.motion-node-group').forEach(nodeEl => {
        const parts = nodeEl.id.split('_');
        const nodeId = parts[parts.length - 1];
        nodeEl.onmouseenter = () => {
          container.querySelectorAll('.visual-state-table tbody tr').forEach(tr => {
            if (tr.textContent.toLowerCase().includes(nodeId.toLowerCase())) {
              tr.classList.add('highlight-row');
            }
          });
        };
        nodeEl.onmouseleave = () => {
          container.querySelectorAll('.visual-state-table tbody tr').forEach(tr => {
            tr.classList.remove('highlight-row');
          });
        };
      });

      // Cross-Component Highlighting: State Table Row -> Node
      container.querySelectorAll('.visual-state-table tbody tr').forEach(tr => {
        tr.onmouseenter = () => {
          container.querySelectorAll('.motion-node-group').forEach(nodeEl => {
            const parts = nodeEl.id.split('_');
            const nodeId = parts[parts.length - 1];
            if (tr.textContent.toLowerCase().includes(nodeId.toLowerCase())) {
              nodeEl.classList.add('pulse-focus');
            }
          });
        };
        tr.onmouseleave = () => {
          container.querySelectorAll('.motion-node-group').forEach(nodeEl => {
            nodeEl.classList.remove('pulse-focus');
          });
        };
      });

      // Global Keyboard Stepping for active visualization ([ and ])
      if (!window._visKeyShortcutsBound) {
        window._visKeyShortcutsBound = true;
        window.addEventListener('keydown', (e) => {
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
          const openVis = document.querySelector('.visual-container[style*="display: block"]');
          if (!openVis) return;
          const qid = openVis.id.replace('vis_', '');
          const navBar = openVis.querySelector(`.visual-stepper-nav[data-qid="${qid}"]`);
          if (!navBar) return;
          const activeBtn = navBar.querySelector('.visual-step-btn.active');
          if (!activeBtn) return;
          const curIdx = parseInt(activeBtn.getAttribute('data-step-idx'), 10);
          const allBtns = navBar.querySelectorAll('.visual-step-btn');

          if (e.key === '[' || e.key === 'PageUp') {
            e.preventDefault();
            if (curIdx > 0) {
              VisualizationBridge.stopAutoPlay(openVis, qid);
              VisualizationBridge.switchToStep(openVis, qid, curIdx - 1);
            }
          } else if (e.key === ']' || e.key === 'PageDown') {
            e.preventDefault();
            if (curIdx < allBtns.length - 1) {
              VisualizationBridge.stopAutoPlay(openVis, qid);
              VisualizationBridge.switchToStep(openVis, qid, curIdx + 1);
            }
          } else if (e.code === 'Space' && (openVis.contains(document.activeElement) || e.target === document.body)) {
            e.preventDefault();
            const autoBtn = openVis.querySelector(`.btn-autoplay[data-qid="${qid}"]`);
            if (autoBtn) VisualizationBridge.toggleAutoPlay(openVis, qid, autoBtn);
          }
        });
      }
      if (!container) return;

      // 1. Toggle visibility of the entire visualization container
      container.querySelectorAll('.visual-toggle-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const targetId = btn.getAttribute('data-target');
          const targetEl = container.querySelector(`#${targetId}`);
          if (targetEl) {
            const isHidden = targetEl.style.display === 'none';
            targetEl.style.display = isHidden ? 'block' : 'none';
            btn.innerHTML = isHidden ? '✕ Ẩn sơ đồ cơ chế' : '🌐 Xem sơ đồ cơ chế';
          }
        };
      });

      // 2. Stepper Tab switching
      container.querySelectorAll('.visual-step-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const qid = btn.getAttribute('data-qid');
          const stepIdx = parseInt(btn.getAttribute('data-step-idx'), 10);
          VisualizationBridge.stopAutoPlay(container, qid);
          VisualizationBridge.switchToStep(container, qid, stepIdx);
        };
      });

      // 3. Prev / Next Step buttons inside detail cards
      container.querySelectorAll('.btn-step-nav').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const qid = btn.getAttribute('data-qid');
          const dir = btn.getAttribute('data-dir');
          const navBar = container.querySelector(`.visual-stepper-nav[data-qid="${qid}"]`);
          if (!navBar) return;
          const activeBtn = navBar.querySelector('.visual-step-btn.active');
          if (!activeBtn) return;
          const currentIdx = parseInt(activeBtn.getAttribute('data-step-idx'), 10);
          const nextIdx = dir === 'next' ? currentIdx + 1 : currentIdx - 1;
          VisualizationBridge.stopAutoPlay(container, qid);
          VisualizationBridge.switchToStep(container, qid, nextIdx);
        };
      });

      // 4. Auto-Play animation toggle
      container.querySelectorAll('.btn-autoplay').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const qid = btn.getAttribute('data-qid');
          VisualizationBridge.toggleAutoPlay(container, qid, btn);
        };
      });

      // 5. Reset Motion button
      container.querySelectorAll('.btn-reset-motion').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const qid = btn.getAttribute('data-qid');
          VisualizationBridge.stopAutoPlay(container, qid);
          VisualizationBridge.switchToStep(container, qid, 0);
        };
      });

      // 6. Speed Selector change
      container.querySelectorAll('.motion-speed-select').forEach(sel => {
        sel.onchange = (e) => {
          e.stopPropagation();
          const qid = sel.getAttribute('data-qid');
          if (VisualizationBridge.intervals[qid]) {
            const autoBtn = container.querySelector(`.btn-autoplay[data-qid="${qid}"]`);
            VisualizationBridge.stopAutoPlay(container, qid);
            if (autoBtn) VisualizationBridge.toggleAutoPlay(container, qid, autoBtn);
          }
        };
      });
    }

    static toggleAutoPlay(container, qid, btn) {
      if (this.intervals[qid]) {
        this.stopAutoPlay(container, qid);
      } else {
        const navBar = container.querySelector(`.visual-stepper-nav[data-qid="${qid}"]`);
        if (!navBar) return;
        const stepBtns = navBar.querySelectorAll('.visual-step-btn');
        if (stepBtns.length <= 1) return;

        container.querySelectorAll(`.btn-autoplay[data-qid="${qid}"]`).forEach(b => {
          b.innerHTML = '⏸ Tạm dừng';
          b.classList.add('playing');
        });

        const speedSel = container.querySelector(`.motion-speed-select[data-qid="${qid}"]`);
        const delay = speedSel ? parseInt(speedSel.value, 10) : 2500;

        this.intervals[qid] = setInterval(() => {
          const activeBtn = navBar.querySelector('.visual-step-btn.active');
          const currentIdx = activeBtn ? parseInt(activeBtn.getAttribute('data-step-idx'), 10) : 0;
          const nextIdx = (currentIdx + 1) % stepBtns.length;
          VisualizationBridge.switchToStep(container, qid, nextIdx);
        }, delay);
      }
    }

    static stopAutoPlay(container, qid) {
      if (this.intervals[qid]) {
        clearInterval(this.intervals[qid]);
        delete this.intervals[qid];
        container.querySelectorAll(`.btn-autoplay[data-qid="${qid}"]`).forEach(b => {
          b.innerHTML = '▶ Phát tự động';
          b.classList.remove('playing');
          b.style.borderColor = '';
          b.style.color = '';
        });
      }
    }

    static switchToStep(container, qid, stepIdx) {
      const visualKey = window.QUESTION_VISUAL_MAP[qid];
      const visualData = window.MECHANISM_VISUALIZATIONS[visualKey];
      if (!visualData) return;

      const steps = visualData.steps || [];
      if (stepIdx < 0 || stepIdx >= steps.length) return;
      const currentStep = steps[stepIdx];

      // Update Stepper Nav Buttons
      const navBar = container.querySelector(`.visual-stepper-nav[data-qid="${qid}"]`);
      if (navBar) {
        navBar.querySelectorAll('.visual-step-btn').forEach((b, idx) => {
          b.classList.toggle('active', idx === stepIdx);
        });
      }

      // Update Detail Cards
      const cardsWrap = container.querySelector(`#step_cards_wrap_${qid}`);
      if (cardsWrap) {
        cardsWrap.querySelectorAll('.visual-step-detail-card').forEach((c, idx) => {
          c.style.display = idx === stepIdx ? 'block' : 'none';
        });
      }

      // Update Console Text
      const consoleText = container.querySelector(`#console_text_${qid}`);
      if (consoleText) {
        consoleText.innerText = `[Bước ${stepIdx + 1}/${steps.length}] ${currentStep.actionText || currentStep.name || ''}`;
      }

      // Update Live PDU Header Inspector Fields
      const pdu = currentStep.pdu || {};
      const elL2 = container.querySelector(`#pdu_l2_${qid}`);
      const elL3 = container.querySelector(`#pdu_l3_${qid}`);
      const elL4 = container.querySelector(`#pdu_l4_${qid}`);
      const elPayload = container.querySelector(`#pdu_payload_${qid}`);
      if (elL2) elL2.textContent = pdu.layer2 || 'Không áp dụng';
      if (elL3) elL3.textContent = pdu.layer3 || 'Không áp dụng';
      if (elL4) elL4.textContent = pdu.layer4 || 'Không áp dụng';
      if (elPayload) elPayload.textContent = pdu.payload || 'Không có dữ liệu';

      // Update Real-Time Device State Table
      const ds = currentStep.deviceState;
      const dsWrap = container.querySelector(`#device_state_wrap_${qid}`);
      const dsTitle = container.querySelector(`#device_state_title_${qid}`);
      const dsTable = container.querySelector(`#device_state_table_${qid}`);
      if (ds && dsWrap && dsTable) {
        dsWrap.style.display = 'block';
        if (dsTitle) dsTitle.textContent = ds.title || 'Trạng thái thiết bị thời gian thực';
        const thead = dsTable.querySelector('thead');
        const tbody = dsTable.querySelector('tbody');
        if (thead && Array.isArray(ds.headers)) {
          thead.innerHTML = `<tr>${ds.headers.map(h => `<th>${Utils.escapeHtml(h)}</th>`).join('')}</tr>`;
        }
        if (tbody && Array.isArray(ds.rows)) {
          tbody.innerHTML = ds.rows.map(r => `<tr>${r.map(c => `<td>${Utils.escapeHtml(c)}</td>`).join('')}</tr>`).join('');
        }
      } else if (dsWrap) {
        dsWrap.style.display = 'none';
      }

      // Animate SVG Packet PDU and Highlight Nodes
      const topo = visualData.topology || {};
      const nodes = Array.isArray(topo.nodes) ? topo.nodes : (Array.isArray(visualData.nodes) ? visualData.nodes : []);
      const links = Array.isArray(topo.links) ? topo.links : [];

      if (nodes.length > 0) {
        const fromNode = nodes.find(n => n.id === currentStep.fromNode);
        const toNode = nodes.find(n => n.id === currentStep.toNode) || fromNode || nodes[0];
        const packetEl = container.querySelector(`#packet_${qid}`);

        // Highlight active nodes
        nodes.forEach(n => {
          const nodeEl = container.querySelector(`#node_${qid}_${n.id}`);
          if (nodeEl) {
            const isActive = n.id === currentStep.toNode || n.id === currentStep.fromNode;
            nodeEl.classList.toggle('active-node', isActive);
          }
        });

        // Highlight active link lines
        links.forEach(l => {
          const linkEl1 = container.querySelector(`#link_${qid}_${l.from}_${l.to}`);
          const linkEl2 = container.querySelector(`#link_${qid}_${l.to}_${l.from}`);
          const isCurrent = (l.from === currentStep.fromNode && l.to === currentStep.toNode) ||
                            (l.to === currentStep.fromNode && l.from === currentStep.toNode);
          if (linkEl1) linkEl1.classList.toggle('active-link', isCurrent);
          if (linkEl2) linkEl2.classList.toggle('active-link', isCurrent);
        });

        // Smoothly glide packet to toNode
        if (packetEl && toNode) {
          packetEl.classList.toggle('packet-drop', currentStep.status === 'drop');
          const textEl = packetEl.querySelector('.motion-packet-text');
          if (textEl) {
            textEl.textContent = `✉ ${currentStep.packetLabel || 'Packet'}`;
          }
          packetEl.style.transform = `translate(${toNode.x}px, ${toNode.y}px)`;
        }
      }
    }
  }

  window.CISCO_VISUALIZATIONS = {
    hasVisualization: (q) => VisualizationBridge.hasVisualization(q.id || q),
    renderDiagram: (q) => VisualizationBridge.renderBlock(q.id || q)
  };


  // =========================================================================
  // 5. EXAM DATA STORE (O(1) Indexed Lookups with Maps & Sets)
  // =========================================================================

  class ExamDataStore {
    constructor() {
      this.questions = [];
      this.byId = new Map();
      this.byGroup = new Map();
      this.groupCounts = new Map();
      this.matchQuestions = [];
      this.mod1To16Questions = [];
      this.translations = window.QUESTION_TRANSLATIONS || window.TRANSLATIONS_DATA || window.QUESTIONS_TRANSLATIONS || window.TRANSLATIONS || {};
      this.starredIds = StorageService.getStarred();
      this.mistakesIds = StorageService.getMistakes();
      this.moduleStats = StorageService.getModuleStats();
      this.feTests = StorageService.getFeTests();
      this.examConfig = StorageService.getExamConfig();

      this.initData();
    }

    static determineGroupKey(q) {
      if (q.source_group) {
        const sg = String(q.source_group).toLowerCase().trim();
        if (sg === 'final') return 'final';
        if (MODULE_GROUP_INFO[sg]) return sg;
      }
      if (q.id) {
        const id = String(q.id).toLowerCase();
        if (id.startsWith('final_')) return 'final';
        if (id.startsWith('m1-4_')) return 'm1-4';
        if (id.startsWith('m5-6_')) return 'm5-6';
        if (id.startsWith('m7-9_')) return 'm7-9';
        if (id.startsWith('m10-13_')) return 'm10-13';
        if (id.startsWith('m14-16_')) return 'm14-16';
      }
      const m = Number(q.module);
      if (!isNaN(m) && m > 0) {
        if (m <= 4) return 'm1-4';
        if (m <= 6) return 'm5-6';
        if (m <= 9) return 'm7-9';
        if (m <= 13) return 'm10-13';
        if (m <= 16) return 'm14-16';
      }
      return 'm1-4';
    }

    initData() {
      const raw = Array.isArray(window.EXAM_DATA) ? window.EXAM_DATA : (Array.isArray(window.QUESTIONS_DATA) ? window.QUESTIONS_DATA : (typeof QUESTIONS_DATA !== 'undefined' ? QUESTIONS_DATA : []));
      this.questions = raw;

      // Initialize groups map
      Object.keys(MODULE_GROUP_INFO).forEach(key => {
        this.byGroup.set(key, []);
        this.groupCounts.set(key, 0);
      });

      raw.forEach(q => {
        this.byId.set(q.id, q);
        const groupKey = ExamDataStore.determineGroupKey(q);
        q._groupKey = groupKey;

        if (this.byGroup.has(groupKey)) {
          this.byGroup.get(groupKey).push(q);
        }

        if (q.type === 'match') {
          this.matchQuestions.push(q);
        }

        if (MOD_1_TO_16_KEYS.includes(groupKey)) {
          this.mod1To16Questions.push(q);
        }
      });

      // Update group counts
      this.groupCounts.set('all', raw.length);
      this.byGroup.forEach((list, k) => {
        if (k !== 'all') this.groupCounts.set(k, list.length);
      });
    }

    getQuestion(id) {
      return this.byId.get(id);
    }

    getTranslation(id) {
      return this.translations[id] || null;
    }

    toggleStar(id) {
      if (this.starredIds.has(id)) {
        this.starredIds.delete(id);
      } else {
        this.starredIds.add(id);
      }
      StorageService.saveStarred(this.starredIds);
      return this.starredIds.has(id);
    }

    recordExamResults(examQuestions, userAnswers, scorePct) {
      examQuestions.forEach(q => {
        const uAns = userAnswers[q.id];
        let isCorrect = false;

        if (q.type === 'match' && window.MATCHING_HELPER) {
          const evalRes = window.MATCHING_HELPER.evaluateMatchQuestion(q, uAns);
          isCorrect = evalRes.isAllCorrect;
        } else {
          const correctOpts = (q.options || []).filter(o => o.is_correct).map(o => o.text);
          if (Array.isArray(uAns)) {
            isCorrect = uAns.length === correctOpts.length &&
              uAns.every(ans => correctOpts.includes(ans)) &&
              correctOpts.every(ans => uAns.includes(ans));
          } else {
            isCorrect = correctOpts.length === 1 && correctOpts[0] === uAns;
          }
        }

        if (!isCorrect) {
          this.mistakesIds.add(q.id);
        }
      });
      StorageService.saveMistakes(this.mistakesIds);

      // Record stats per module
      const breakdown = {};
      examQuestions.forEach(q => {
        const gk = q._groupKey || ExamDataStore.determineGroupKey(q);
        if (!breakdown[gk]) breakdown[gk] = { total: 0, correct: 0 };
        breakdown[gk].total++;

        const uAns = userAnswers[q.id];
        let correct = false;
        if (q.type === 'match' && window.MATCHING_HELPER) {
          correct = window.MATCHING_HELPER.evaluateMatchQuestion(q, uAns).isAllCorrect;
        } else {
          const correctOpts = (q.options || []).filter(o => o.is_correct).map(o => o.text);
          if (Array.isArray(uAns)) {
            correct = uAns.length === correctOpts.length && uAns.every(a => correctOpts.includes(a));
          } else {
            correct = correctOpts.length === 1 && correctOpts[0] === uAns;
          }
        }
        if (correct) breakdown[gk].correct++;
      });

      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${now.toLocaleDateString('vi-VN')}`;

      Object.keys(breakdown).forEach(gk => {
        if (!this.moduleStats[gk]) {
          this.moduleStats[gk] = { latest: null, total: 0, correct: 0, percentage: 0, history: [] };
        }
        const b = breakdown[gk];
        const pct = b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0;

        // Luôn lưu phần làm mới nhất thành Tỉ lệ chính xác (không cộng dồn lũy kế)
        this.moduleStats[gk].latest = {
          total: b.total,
          correct: b.correct,
          percentage: pct,
          date: timeStr
        };
        this.moduleStats[gk].total = b.total;
        this.moduleStats[gk].correct = b.correct;
        this.moduleStats[gk].percentage = pct;

        if (!Array.isArray(this.moduleStats[gk].history)) {
          this.moduleStats[gk].history = [];
        }
        this.moduleStats[gk].history.unshift({
          date: timeStr,
          score: `${b.correct}/${b.total}`,
          total: b.total,
          correct: b.correct,
          pct: pct
        });

        // Lưu tối đa 10 lượt làm gần nhất
        if (this.moduleStats[gk].history.length > 10) {
          this.moduleStats[gk].history = this.moduleStats[gk].history.slice(0, 10);
        }
      });
      StorageService.saveModuleStats(this.moduleStats);
    }
  }

  // =========================================================================
  // 6. STUDY CONTROLLER (High Performance Batch Rendering & Clear Highlighting)
  // =========================================================================

  class StudyController {
    constructor(dataStore, elements) {
      this.dataStore = dataStore;
      this.elements = elements;
      this.currentFilter = 'all';
      this.searchQuery = '';
      this.hideAnswers = false;
      this.showAllTranslations = false;
      this.starredOnly = false;
      this.individualTranslations = new Set();
      this.renderedCount = 0;
      this.BATCH_SIZE = 35;
      this.currentFilteredList = [];
    }

    setFilter(filterKey) {
      this.currentFilter = filterKey;
      this.updateHeaderMeta();
      this.render();
    }

    setSearch(query) {
      this.searchQuery = (query || '').trim().toLowerCase();
      this.render();
    }

    toggleAnswers() {
      this.hideAnswers = !this.hideAnswers;
      if (this.elements.toggleAnswersText) {
        this.elements.toggleAnswersText.innerText = this.hideAnswers ? 'Hiện đáp án' : 'Ẩn đáp án';
      }
      this.render();
    }

    toggleAllTranslations() {
      this.showAllTranslations = !this.showAllTranslations;
      if (this.elements.toggleAllTranslateBtn) {
        this.elements.toggleAllTranslateBtn.classList.toggle('active', this.showAllTranslations);
        this.elements.toggleAllTranslateBtn.innerText = this.showAllTranslations ? 'Tắt dịch toàn bộ' : 'Dịch toàn bộ câu hỏi';
      }
      this.render();
    }

    toggleStarredOnly() {
      this.starredOnly = !this.starredOnly;
      if (this.elements.filterStarredOnlyBtn) {
        this.elements.filterStarredOnlyBtn.classList.toggle('active', this.starredOnly);
        this.elements.filterStarredOnlyBtn.innerText = this.starredOnly ? 'Hiện tất cả câu' : 'Hiện câu đã lưu';
      }
      this.render();
    }

    getFilteredList() {
      let list = this.currentFilter === 'all'
        ? [...this.dataStore.questions]
        : [...(this.dataStore.byGroup.get(this.currentFilter) || [])];

      if (this.starredOnly) {
        list = list.filter(q => this.dataStore.starredIds.has(q.id));
      }

      if (this.searchQuery) {
        const qText = this.searchQuery;
        list = list.filter(item => {
          return (item.question && item.question.toLowerCase().includes(qText)) ||
                 (item.explanation && item.explanation.toLowerCase().includes(qText)) ||
                 (item.topic && item.topic.toLowerCase().includes(qText)) ||
                 (item.options && item.options.some(o => o.text && o.text.toLowerCase().includes(qText)));
        });
      }

      return list;
    }

    updateHeaderMeta() {
      const info = MODULE_GROUP_INFO[this.currentFilter] || MODULE_GROUP_INFO['all'];
      if (this.elements.studyModuleTitle) this.elements.studyModuleTitle.innerText = `CCNA 2 v7 (SRWE): ${info.name}`;
      if (this.elements.studyModuleDesc) this.elements.studyModuleDesc.innerText = info.desc;
    }

    render() {
      this.currentFilteredList = this.getFilteredList();
      this.elements.studyQuestionsList.innerHTML = '';
      this.renderedCount = 0;

      if (this.currentFilteredList.length === 0) {
        this.elements.studyQuestionsList.innerHTML = `
          <div style="text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius); border: 1px dashed var(--border-color);">
            <div style="font-size: 15px; color: var(--text-muted); margin-bottom: 10px;">Không tìm thấy câu hỏi phù hợp.</div>
            <div style="font-weight: 700; font-size: 16px;">Không tìm thấy câu hỏi phù hợp</div>
            <div style="color: var(--text-muted); font-size: 13.5px; margin-top: 6px;">Hãy thử điều chỉnh từ khóa tìm kiếm hoặc chọn nhóm Module khác.</div>
          </div>
        `;
        return;
      }

      this.renderNextBatch();
      this.updateStudyNavRail();
    }

    renderNextBatch() {
      const fragment = document.createDocumentFragment();
      const end = Math.min(this.renderedCount + this.BATCH_SIZE, this.currentFilteredList.length);

      for (let i = this.renderedCount; i < end; i++) {
        const q = this.currentFilteredList[i];
        const cardEl = this.createQuestionCard(q, i);
        fragment.appendChild(cardEl);
      }

      this.elements.studyQuestionsList.appendChild(fragment);
      VisualizationBridge.bindToggleEvents(this.elements.studyQuestionsList);
      this.renderedCount = end;

      // Handle "Load More" indicator if more questions remain
      const existingLoadMore = document.getElementById('studyLoadMoreContainer');
      if (existingLoadMore) existingLoadMore.remove();

      if (this.renderedCount < this.currentFilteredList.length) {
        const loadMoreBox = document.createElement('div');
        loadMoreBox.id = 'studyLoadMoreContainer';
        loadMoreBox.style.cssText = 'text-align: center; margin: 24px 0 36px;';
        loadMoreBox.innerHTML = `
          <button class="btn btn-outline" id="btnStudyLoadMore" style="padding: 10px 24px; font-weight: 600;">
            Tải thêm câu hỏi (${this.renderedCount}/${this.currentFilteredList.length})
          </button>
        `;
        this.elements.studyQuestionsList.appendChild(loadMoreBox);

        const btnMore = loadMoreBox.querySelector('#btnStudyLoadMore');
        if (btnMore) {
          btnMore.onclick = () => {
            loadMoreBox.remove();
            this.renderNextBatch();
      this.updateStudyNavRail();
          };
        }
      }
    }

    
    updateStudyNavRail() {
      const rail = document.getElementById('studyNavRail');
      const railGrid = document.getElementById('studyNavRailGrid');
      const railCount = document.getElementById('studyNavRailCount');
      if (!rail || !railGrid) return;

      const total = this.currentFilteredList.length;
      if (railCount) railCount.innerText = total;

      railGrid.innerHTML = '';
      this.currentFilteredList.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'rail-qbtn';
        btn.innerText = idx + 1;
        btn.dataset.qid = q.id;
        if (this.dataStore.starredIds.has(q.id)) btn.classList.add('starred');

        btn.onclick = (e) => {
          e.stopPropagation();
          while (this.renderedCount <= idx && this.renderedCount < this.currentFilteredList.length) {
            this.renderNextBatch();
      this.updateStudyNavRail();
          }
          const card = this.elements.studyQuestionsList.querySelector(`.study-card[data-id="${q.id}"]`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.remove('pulse-focus');
            void card.offsetWidth;
            card.classList.add('pulse-focus');
            setTimeout(() => card.classList.remove('pulse-focus'), 1400);

            railGrid.querySelectorAll('.rail-qbtn').forEach(b => b.classList.remove('active-target'));
            btn.classList.add('active-target');

            if (window.innerWidth <= 768) {
              rail.classList.remove('open');
            }
          }
        };
        railGrid.appendChild(btn);
      });

      const globalFill = document.getElementById('globalProgressBar');
      if (globalFill) {
        const pct = Math.min(100, Math.round((this.renderedCount / Math.max(1, total)) * 100));
        globalFill.style.width = `${pct}%`;
      }
    }

    createQuestionCard(q, index) {
      const card = document.createElement('div');
      card.className = 'study-card';
      card.dataset.id = q.id;

      const groupKey = q._groupKey || ExamDataStore.determineGroupKey(q);
      const modInfo = MODULE_GROUP_INFO[groupKey] || { name: `Module ${q.module || ''}` };
      const isStarred = this.dataStore.starredIds.has(q.id);
      const transObj = this.dataStore.getTranslation(q.id);
      const isTranslating = this.showAllTranslations || this.individualTranslations.has(q.id);

      // 1. Translation Box for Question
      let translationBoxHtml = '';
      if (transObj && transObj.question) {
        translationBoxHtml = `
          <div class="study-translation-box" id="trans_box_${q.id}" style="display: ${isTranslating ? 'block' : 'none'}; margin: 10px 0; padding: 10px 14px; background: rgba(29, 114, 184, 0.08); border-left: 3px solid var(--primary); border-radius: 4px; font-size: 14.5px; color: var(--text-main);">
            <strong>Bản dịch:</strong> ${Utils.escapeHtml(transObj.question)}
          </div>
        `;
      }

      // 2. Exhibit Image
      let imgHtml = '';
      if (q.images && q.images.length > 0) {
        if (q.type === 'match') {
          const isReferExhibit = q.question.toLowerCase().includes('refer to the exhibit');
          if (isReferExhibit) {
            imgHtml = `
              <div class="study-image" style="margin: 12px 0;">
                <div style="font-weight: 600; font-size: 13.5px; color: var(--primary); margin-bottom: 6px;">
                  Sơ đồ câu hỏi (Exhibit Diagram):
                </div>
                <img src="${q.images[0]}" alt="Exhibit Image" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 0 auto;" loading="lazy">
              </div>
            `;
          }
        } else {
          imgHtml = `
            <div class="study-image">
              ${q.images.map(img => `<img src="${img}" alt="Exhibit Image" loading="lazy">`).join('')}
            </div>
          `;
        }
      }

      // 3. Options or Matching Block
      let contentHtml = '';
      if (q.type === 'match' && window.MATCHING_HELPER && q.match_data) {
        contentHtml = window.MATCHING_HELPER.renderStudyMatchingBlock(q);
      } else if (q.options && q.options.length > 0) {
        let optsHtml = '';
        q.options.forEach((opt, optIdx) => {
          const isCorrect = !!opt.is_correct;
          const letter = String.fromCharCode(65 + optIdx);
          const optVi = (transObj && transObj.options && transObj.options[optIdx]) ? transObj.options[optIdx] : null;
          const shouldHighlight = isCorrect && !this.hideAnswers;

          optsHtml += `
            <div class="study-option ${shouldHighlight ? 'correct' : ''}">
              <span class="option-indicator">${letter}</span>
              <div style="flex: 1;">
                <div>${Utils.escapeHtml(opt.text)}</div>
                ${optVi ? `<div class="opt-translation" style="display: ${isTranslating ? 'block' : 'none'};">${Utils.escapeHtml(optVi)}</div>` : ''}
              </div>
              ${shouldHighlight ? '<span class="study-option-badge">Đáp án đúng</span>' : ''}
              <button class="copy-btn" title="Sao chép đáp án" data-copy="${Utils.escapeHtml(opt.text)}">Sao chép</button>
            </div>
          `;
        });
        contentHtml = `<div class="study-options">${optsHtml}</div>`;
      }

      // 4. Explanation Box
      let explanationHtml = '';
      if (q.explanation && !this.hideAnswers) {
        const explVi = (transObj && transObj.explanation) ? transObj.explanation : null;
        explanationHtml = `
          <div class="explanation-box">
                        <div class="exp-text">${Utils.formatExplanation(q.explanation)}</div>
            ${explVi ? `
              <div class="exp-vi-box" style="display: ${isTranslating ? 'block' : 'none'}; margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(43, 147, 72, 0.25); font-size: 13.5px;">
                <strong>Bản dịch giải thích:</strong> ${Utils.escapeHtml(explVi)}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 5. Mechanism Visualization Diagram
      const visualHtml = VisualizationBridge.renderBlock(q.id);

      card.innerHTML = `
        <div class="study-card-header">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="study-qnum">Câu ${index + 1}</span>
            <span class="tag-badge">${Utils.escapeHtml(modInfo.name.split(':')[0])}</span>
            ${q.type === 'match' ? '<span class="tag-badge" style="background: #e0e7ff; color: #4338ca;">Nối từ</span>' : ''}
            ${q.type === 'multiple' ? '<span class="tag-badge" style="background: #fef3c7; color: #b45309;">Nhiều đáp án</span>' : ''}
          </div>
          <div style="display: flex; gap: 6px; align-items: center;">
            ${transObj ? `
              <button class="btn btn-outline btn-xs btn-translate-single ${isTranslating ? 'active' : ''}" data-id="${q.id}" title="Dịch câu hỏi & lựa chọn sang Tiếng Việt">
                ${isTranslating ? 'Tắt dịch' : '🌐 Dịch TV'}
              </button>
            ` : ''}
            <button class="btn-star ${isStarred ? 'starred' : ''}" data-id="${q.id}" title="${isStarred ? 'Đã lưu câu này' : 'Lưu câu này'}">
              ${isStarred ? '★' : '☆'}
            </button>
          </div>
        </div>

        <div style="font-size: 15.5px; font-weight: 600; margin: 12px 0; line-height: 1.6;">
          ${Utils.escapeHtml(q.question)}
        </div>

        ${translationBoxHtml}
        ${imgHtml}
        ${contentHtml}
        ${explanationHtml}
        ${visualHtml}
      `;

      // Event listener: Star bookmark
      const starBtn = card.querySelector('.btn-star');
      if (starBtn) {
        starBtn.onclick = (e) => {
          e.stopPropagation();
          const starred = this.dataStore.toggleStar(q.id);
          starBtn.classList.toggle('starred', starred);
          starBtn.innerText = starred ? '★' : '☆';
          starBtn.title = starred ? 'Đã lưu câu này' : 'Lưu câu này';
          if (this.elements.starredCount) this.elements.starredCount.innerText = this.dataStore.starredIds.size;
        };
      }

      // Event listener: Translate single
      const transBtn = card.querySelector('.btn-translate-single');
      if (transBtn) {
        transBtn.onclick = (e) => {
          e.stopPropagation();
          const qid = q.id;
          const isCurrentlyShowing = this.individualTranslations.has(qid) || this.showAllTranslations;
          if (isCurrentlyShowing) {
            this.individualTranslations.delete(qid);
            transBtn.classList.remove('active');
            transBtn.innerText = 'Dịch TV';
            const box = card.querySelector(`#trans_box_${qid}`);
            if (box) box.style.display = 'none';
            card.querySelectorAll('.opt-translation, .exp-vi-box').forEach(el => el.style.display = 'none');
          } else {
            this.individualTranslations.add(qid);
            transBtn.classList.add('active');
            transBtn.innerText = 'Tắt dịch';
            const box = card.querySelector(`#trans_box_${qid}`);
            if (box) box.style.display = 'block';
            card.querySelectorAll('.opt-translation, .exp-vi-box').forEach(el => el.style.display = 'block');
          }
        };
      }

      // Event listener: Copy answer
      card.querySelectorAll('.copy-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const text = btn.getAttribute('data-copy');
          Utils.copyToClipboard(text, btn);
        };
      });

      return card;
    }
  }

  // =========================================================================
  // 7. EXAM CONTROLLER (Interactive Simulation, Timer, Scoring & Review)
  // =========================================================================

  class ExamController {
    constructor(dataStore, elements, app) {
      this.dataStore = dataStore;
      this.elements = elements;
      this.app = app;
      this.activeExam = null;
      this.timerInterval = null;
      this.remainingSeconds = 0;
      this.isPaused = false;
    }

    startExam(customQuestions = null, customTitle = null) {
      let qList = [];
      if (customQuestions && customQuestions.length > 0) {
        qList = [...customQuestions];
      } else {
        const groupKey = this.app.studyController.currentFilter;
        qList = groupKey === 'all'
          ? [...this.dataStore.questions]
          : [...(this.dataStore.byGroup.get(groupKey) || [])];
      }

      if (qList.length === 0) {
        alert('Không có câu hỏi nào trong phần này để tạo đề thi!');
        return;
      }

      const cfg = this.dataStore.examConfig;
      if (cfg.shuffleQuestions) {
        qList = Utils.shuffleArray(qList);
      }

      // Clone questions and shuffle options if configured
      const examQuestions = qList.map(orig => {
        const cloned = { ...orig };
        if (cloned.options && Array.isArray(cloned.options)) {
          cloned.options = cfg.shuffleOptions ? Utils.shuffleArray(cloned.options) : [...cloned.options];
        }
        return cloned;
      });

      const title = customTitle || (MODULE_GROUP_INFO[this.app.studyController.currentFilter] ? MODULE_GROUP_INFO[this.app.studyController.currentFilter].name : 'CCNA 2 v7 Practice Exam');

      this.activeExam = {
        title,
        questions: examQuestions,
        currentIndex: 0,
        userAnswers: {},
        reviewFlags: new Set(),
        startTime: Date.now(),
        durationMinutes: cfg.durationMinutes
      };

      if (this.elements.examCurrentTitle) this.elements.examCurrentTitle.innerText = `${title} - Test Online`;
      if (this.elements.examQuestionsCountBadge) this.elements.examQuestionsCountBadge.innerText = `${examQuestions.length} câu`;

      this.app.switchMode('exam');
      const seb = document.getElementById('sebStickyBar');
      if (seb) seb.style.display = 'block';
      const sebTitle = document.getElementById('sebExamName');
      if (sebTitle) sebTitle.innerText = this.activeExam.title;
      this.startTimer(cfg.durationMinutes);
      this.renderGrid();
      this.goToQuestion(0);
    }

    startTimer(durationMinutes) {
      clearInterval(this.timerInterval);
      const seb = document.getElementById('sebStickyBar');
      if (seb) seb.style.display = 'none';
      this.isPaused = false;

      if (!durationMinutes || durationMinutes === 0) {
        this.remainingSeconds = 0;
        if (this.elements.timerDisplay) this.elements.timerDisplay.innerText = '∞ Tự do';
        if (this.elements.examTimerBadge) this.elements.examTimerBadge.className = 'timer-badge normal';
        return;
      }

      this.remainingSeconds = durationMinutes * 60;
      this.updateTimerDisplay();

      this.timerInterval = setInterval(() => {
        if (!this.isPaused) {
          this.remainingSeconds--;
          this.updateTimerDisplay();
          if (this.remainingSeconds <= 0) {
            clearInterval(this.timerInterval);
            alert('Đã hết thời gian làm bài. Hệ thống sẽ tự động nộp bài.');
            this.submitExam();
          }
        }
      }, 1000);
    }

    togglePauseTimer() {
      this.isPaused = !this.isPaused;
      if (this.elements.timerPauseBtn) {
        this.elements.timerPauseBtn.innerText = this.isPaused ? 'Tiếp tục' : 'Tạm dừng';
        this.elements.timerPauseBtn.title = this.isPaused ? 'Tiếp tục làm bài' : 'Tạm dừng';
      }
    }

    updateTimerDisplay() {
      if (!this.elements.timerDisplay) return;
      const mins = Math.floor(this.remainingSeconds / 60);
      const secs = this.remainingSeconds % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      this.elements.timerDisplay.innerText = formatted;
      const sebTimer = document.getElementById('sebTimerDisplay');
      if (sebTimer) sebTimer.innerText = formatted;
      const sebBadge = document.getElementById('sebTimerBadge');
      if (sebBadge) {
        sebBadge.className = 'seb-timer-badge';
        if (this.remainingSeconds <= 180) sebBadge.classList.add('danger');
        else if (this.remainingSeconds <= 600) sebBadge.classList.add('warning');
      }

      if (this.elements.examTimerBadge) {
        if (this.remainingSeconds <= 300) {
          this.elements.examTimerBadge.className = 'timer-badge danger';
        } else if (this.remainingSeconds <= 600) {
          this.elements.examTimerBadge.className = 'timer-badge warning';
        } else {
          this.elements.examTimerBadge.className = 'timer-badge normal';
        }
      }
    }

    renderGrid() {
      if (!this.elements.examGrid || !this.activeExam) return;
      this.elements.examGrid.innerHTML = '';

      let answeredCount = 0;
      let reviewCount = 0;

      this.activeExam.questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'q-grid-btn';
        btn.innerText = idx + 1;

        const isAnswered = this.isQuestionAnswered(q.id);
        const isReview = this.activeExam.reviewFlags.has(q.id);
        const isActive = this.activeExam.currentIndex === idx;

        if (isReview) {
          btn.classList.add('review');
          reviewCount++;
        } else if (isAnswered) {
          btn.classList.add('answered');
          answeredCount++;
        }

        if (isActive) {
          btn.classList.add('active');
          if (btn.scrollIntoViewIfNeeded) {
            btn.scrollIntoViewIfNeeded({ block: 'nearest' });
          }
        }

        btn.onclick = () => this.goToQuestion(idx);
        this.elements.examGrid.appendChild(btn);
      });

      const totalQ = this.activeExam.questions.length;
      const currentQNum = this.activeExam.currentIndex + 1;
      const progressPct = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;
      const sebText = document.getElementById('sebProgressText');
      if (sebText) sebText.innerText = `Câu ${currentQNum} / ${totalQ} (${progressPct}% đã làm)`;
      const sebFill = document.getElementById('sebProgressFill');
      if (sebFill) sebFill.style.width = `${progressPct}%`;
      const globalFill = document.getElementById('globalProgressBar');
      if (globalFill) globalFill.style.width = `${progressPct}%`;

      const paletteSummary = document.getElementById('examPaletteSummary');
      if (paletteSummary) paletteSummary.innerText = `Câu ${currentQNum}/${totalQ}`;

      if (this.elements.countAnswered) this.elements.countAnswered.innerText = answeredCount;
      if (this.elements.countReview) this.elements.countReview.innerText = reviewCount;
      if (this.elements.countUnanswered) this.elements.countUnanswered.innerText = this.activeExam.questions.length - answeredCount;
    }

    isQuestionAnswered(questionId) {
      if (!this.activeExam) return false;
      const ans = this.activeExam.userAnswers[questionId];
      if (ans === undefined || ans === null) return false;
      if (Array.isArray(ans)) return ans.length > 0;
      if (typeof ans === 'object') return Object.keys(ans).length > 0;
      return String(ans).trim().length > 0;
    }

    goToQuestion(index) {
      if (!this.activeExam || index < 0 || index >= this.activeExam.questions.length) return;
      this.activeExam.currentIndex = index;
      this.renderCurrentQuestion();
      this.renderGrid();
    }

    renderCurrentQuestion() {
      if (!this.activeExam) return;
      const q = this.activeExam.questions[this.activeExam.currentIndex];
      const idx = this.activeExam.currentIndex;

      if (this.elements.examQTitle) this.elements.examQTitle.innerText = `${idx + 1}. Question`;
      if (this.elements.examQText) this.elements.examQText.innerText = q.question;

      // Handle translation
      const transObj = this.dataStore.getTranslation(q.id);
      if (this.elements.btnTranslateExamQ && this.elements.examQTranslationBox) {
        if (transObj && transObj.question) {
          this.elements.btnTranslateExamQ.style.display = 'inline-flex';
          this.elements.examQTranslationText.innerText = transObj.question;
          this.elements.examQTranslationBox.style.display = 'none';
          this.elements.btnTranslateExamQ.classList.remove('active');
          this.elements.btnTranslateExamQ.innerText = 'Dịch câu hỏi sang Tiếng Việt';
        } else {
          this.elements.btnTranslateExamQ.style.display = 'none';
          this.elements.examQTranslationBox.style.display = 'none';
        }
      }

      // Handle Image
      if (this.elements.examQImageContainer) {
        if (q.images && q.images.length > 0) {
          if (q.type === 'match') {
            const isReferExhibit = q.question.toLowerCase().includes('refer to the exhibit');
            if (isReferExhibit) {
              this.elements.examQImageContainer.style.display = 'block';
              this.elements.examQImageContainer.innerHTML = `
                <div style="font-weight: 600; font-size: 13.5px; color: var(--primary); margin-bottom: 6px;">
                  Sơ đồ câu hỏi (Exhibit Diagram):
                </div>
                <img src="${q.images[0]}" alt="Question Exhibit" style="max-width: 100%; max-height: 400px; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 0 auto;">
              `;
            } else {
              this.elements.examQImageContainer.style.display = 'none';
              this.elements.examQImageContainer.innerHTML = '';
            }
          } else {
            this.elements.examQImageContainer.style.display = 'block';
            this.elements.examQImageContainer.innerHTML = q.images.map(img => `<img src="${img}" alt="Question Exhibit" style="max-width: 100%; max-height: 400px; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 8px auto;">`).join('');
          }
        } else {
          this.elements.examQImageContainer.style.display = 'none';
          this.elements.examQImageContainer.innerHTML = '';
        }
      }

      // Handle Options or Match
      if (q.type === 'match' && window.MATCHING_HELPER) {
        this.elements.examOptionsList.style.display = 'none';
        this.elements.examMatchContainer.style.display = 'block';
        const curAns = this.activeExam.userAnswers[q.id] || {};
        this.elements.examMatchContainer.innerHTML = '';
        const matchBoard = window.MATCHING_HELPER.renderExamMatchingBoard(q, curAns, (updatedAnswers) => {
          this.activeExam.userAnswers[q.id] = updatedAnswers;
          this.renderGrid();
        });
        this.elements.examMatchContainer.appendChild(matchBoard);
      } else {
        this.elements.examMatchContainer.style.display = 'none';
        this.elements.examOptionsList.style.display = 'flex';
        this.elements.examOptionsList.innerHTML = '';

        const isMultiple = q.type === 'multiple';
        const userSelected = this.activeExam.userAnswers[q.id] || (isMultiple ? [] : null);

        (q.options || []).forEach((opt, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          const isChecked = isMultiple
            ? Array.isArray(userSelected) && userSelected.includes(opt.text)
            : userSelected === opt.text;

          const label = document.createElement('label');
          label.className = 'exam-option-label';

          const inputType = isMultiple ? 'checkbox' : 'radio';
          label.innerHTML = `
            <input type="${inputType}" name="exam_opt_${q.id}" class="exam-option-input" value="${Utils.escapeHtml(opt.text)}" ${isChecked ? 'checked' : ''}>
            <span class="option-indicator">${letter}</span>
            <div style="flex: 1;">
              <div class="exam-option-text">${Utils.escapeHtml(opt.text)}</div>
            </div>
          `;

          const input = label.querySelector('input');
          if (input) {
            input.onchange = () => {
              this.handleOptionSelect(q, opt.text, isMultiple, input.checked);
            };
          }

          this.elements.examOptionsList.appendChild(label);
        });
      }

      // Mark for Review state
      if (this.elements.btnMarkReview) {
        const isReviewed = this.activeExam.reviewFlags.has(q.id);
        this.elements.btnMarkReview.classList.toggle('active', isReviewed);
        this.elements.btnMarkReview.innerText = isReviewed ? 'Bỏ đánh dấu xem lại' : 'Đánh dấu xem lại';
      }

      // Nav buttons state
      if (this.elements.btnPrevQuestion) this.elements.btnPrevQuestion.disabled = (idx === 0);
      if (this.elements.btnNextQuestion) {
        if (idx === this.activeExam.questions.length - 1) {
          this.elements.btnNextQuestion.innerText = 'Kiểm tra & Nộp';
        } else {
          this.elements.btnNextQuestion.innerText = 'Câu tiếp theo';
        }
      }
    }

    handleOptionSelect(question, optionText, isMultiple, isChecked) {
      if (!this.activeExam) return;
      const qid = question.id;

      if (isMultiple) {
        let current = this.activeExam.userAnswers[qid];
        if (!Array.isArray(current)) current = [];
        if (isChecked) {
          if (!current.includes(optionText)) current.push(optionText);
        } else {
          current = current.filter(t => t !== optionText);
        }
        this.activeExam.userAnswers[qid] = current;
      } else {
        this.activeExam.userAnswers[qid] = optionText;
      }

      this.renderGrid();
    }

    toggleMarkForReview() {
      if (!this.activeExam) return;
      const q = this.activeExam.questions[this.activeExam.currentIndex];
      if (this.activeExam.reviewFlags.has(q.id)) {
        this.activeExam.reviewFlags.delete(q.id);
      } else {
        this.activeExam.reviewFlags.add(q.id);
      }
      this.renderGrid();
      this.renderCurrentQuestion();
    }

    clearAnswer() {
      if (!this.activeExam) return;
      const q = this.activeExam.questions[this.activeExam.currentIndex];
      delete this.activeExam.userAnswers[q.id];
      this.renderGrid();
      this.renderCurrentQuestion();
    }

    promptSubmit() {
      if (!this.activeExam) return;
      let answered = 0;
      this.activeExam.questions.forEach(q => {
        if (this.isQuestionAnswered(q.id)) answered++;
      });
      const total = this.activeExam.questions.length;
      const unanswered = total - answered;
      const reviewed = this.activeExam.reviewFlags.size;

      if (this.elements.submitModalSummary) {
        this.elements.submitModalSummary.innerHTML = `
          <div style="margin-bottom: 12px; font-size: 15px;">Bạn có chắc chắn muốn nộp bài thi?</div>
          <div style="background: var(--bg-main); padding: 12px; border-radius: 6px; font-size: 13.5px; line-height: 1.6;">
            <div>Số câu đã trả lời: <strong>${answered}/${total}</strong></div>
            <div>Số câu chưa làm: <strong>${unanswered}</strong></div>
            <div>Số câu đánh dấu xem lại: <strong>${reviewed}</strong></div>
          </div>
        `;
      }
      if (this.elements.submitModal) this.elements.submitModal.classList.add('open');
    }

    submitExam() {
      if (!this.activeExam) return;
      clearInterval(this.timerInterval);
      if (this.elements.submitModal) this.elements.submitModal.classList.remove('open');

      const questions = this.activeExam.questions;
      const userAnswers = this.activeExam.userAnswers;
      let correctCount = 0;
      let wrongCount = 0;
      let skippedCount = 0;

      const reviewDetails = questions.map(q => {
        const uAns = userAnswers[q.id];
        let isCorrect = false;
        let isSkipped = !this.isQuestionAnswered(q.id);

        if (q.type === 'match' && window.MATCHING_HELPER) {
          const evalRes = window.MATCHING_HELPER.evaluateMatchQuestion(q, uAns);
          isCorrect = evalRes.isAllCorrect;
        } else {
          const correctOpts = (q.options || []).filter(o => o.is_correct).map(o => o.text);
          if (Array.isArray(uAns)) {
            isCorrect = uAns.length === correctOpts.length &&
              uAns.every(ans => correctOpts.includes(ans)) &&
              correctOpts.every(ans => uAns.includes(ans));
          } else {
            isCorrect = correctOpts.length === 1 && correctOpts[0] === uAns;
          }
        }

        if (isCorrect) correctCount++;
        else if (isSkipped) skippedCount++;
        else wrongCount++;

        return { question: q, userSelected: uAns, isCorrect, isSkipped };
      });

      const total = questions.length;
      const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
      const timeSpentSec = Math.round((Date.now() - this.activeExam.startTime) / 1000);
      const mins = Math.floor(timeSpentSec / 60);
      const secs = timeSpentSec % 60;
      const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      // Persist results & mistakes
      this.dataStore.recordExamResults(questions, userAnswers, scorePct);

      // If active exam is a FE_Test, mark it completed with score
      // Persist FE-Test attempt if this exam belongs to FE-Test
      const targetFeId = this.activeExam.feTestId || 
        (this.dataStore.feTests.find(t => t.id === this.activeExam.title || t.title === this.activeExam.title)?.id);
      
      if (targetFeId) {
        const feTest = this.dataStore.feTests.find(t => t.id === targetFeId);
        if (feTest) {
          feTest.completed = true;
          feTest.scorePct = scorePct;
          feTest.correctCount = correctCount;
          feTest.wrongCount = wrongCount;
          feTest.skippedCount = skippedCount;
          feTest.lastTime = timeStr;
          feTest.lastDate = new Date().toLocaleDateString('vi-VN');

          if (!Array.isArray(feTest.history)) {
            feTest.history = [];
          }

          // Build wrongDetails so user can review all wrong answers for this test attempt
          const wrongDetails = reviewDetails
            .filter(r => !r.isCorrect)
            .map(r => ({
              questionId: r.question.id,
              userSelected: r.userSelected,
              isSkipped: r.isSkipped
            }));

          const nextTurn = feTest.history.length > 0 ? ((feTest.history[0].turn || feTest.history.length) + 1) : 1;
          const attemptRecord = {
            turn: nextTurn,
            date: `${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} - ${new Date().toLocaleDateString('vi-VN')}`,
            scorePct: scorePct,
            correctCount: correctCount,
            totalCount: total,
            wrongCount: wrongCount,
            skippedCount: skippedCount,
            timeStr: timeStr,
            wrongDetails: wrongDetails
          };

          feTest.history.unshift(attemptRecord);
          if (feTest.history.length > 20) {
            feTest.history = feTest.history.slice(0, 20);
          }
          StorageService.saveFeTests(this.dataStore.feTests);
          if (this.app.feTestController) {
            this.app.feTestController.render();
          }
        }
      }

      this.renderResults({
        title: this.activeExam.title,
        questions,
        reviewDetails,
        scorePct,
        correctCount,
        wrongCount,
        skippedCount,
        timeStr
      });
    }

    renderResults(results) {
      this.app.switchMode('results');

      if (this.elements.scorePercent) this.elements.scorePercent.innerText = `${results.scorePct}%`;
      const isPassed = results.scorePct >= 70;
      if (this.elements.scoreCircle) {
        this.elements.scoreCircle.classList.remove('score-pass', 'score-fail');
        this.elements.scoreCircle.classList.add(isPassed ? 'score-pass' : 'score-fail');
      }
      if (this.elements.scoreBadge) {
        this.elements.scoreBadge.innerText = isPassed ? 'ĐẠT (PASS)' : 'CHƯA ĐẠT (FAIL)';
        this.elements.scoreBadge.style.color = isPassed ? '#22c55e' : '#ef4444';
      }
      if (this.elements.resCorrect) this.elements.resCorrect.innerText = results.correctCount;
      if (this.elements.resWrong) this.elements.resWrong.innerText = results.wrongCount;
      if (this.elements.resSkipped) this.elements.resSkipped.innerText = results.skippedCount;
      if (this.elements.resTime) this.elements.resTime.innerText = results.timeStr;

      // Render Detailed Review Cards
      if (this.elements.examReviewList) {
        this.elements.examReviewList.innerHTML = '';
        results.reviewDetails.forEach((item, idx) => {
          const q = item.question;
          const card = document.createElement('div');
          card.className = 'study-card';
          card.style.borderLeft = item.isCorrect ? '4px solid #22c55e' : '4px solid #ef4444';

          const transObj = this.dataStore.getTranslation(q.id);

          let optsOrMatchHtml = '';
          if (q.type === 'match' && window.MATCHING_HELPER) {
            optsOrMatchHtml = window.MATCHING_HELPER.renderExamReviewMatching(q, item.userSelected);
          } else if (q.options && q.options.length > 0) {
            let opts = '';
            q.options.forEach((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              const isUserSel = Array.isArray(item.userSelected)
                ? item.userSelected.includes(opt.text)
                : item.userSelected === opt.text;
              const isCorrect = !!opt.is_correct;

              let cls = 'review-option';
              if (isCorrect) cls += ' correct-answer';
              if (isUserSel && !isCorrect) cls += ' user-wrong';
              if (isUserSel && isCorrect) cls += ' user-correct';

              opts += `
                <div class="${cls}">
                  <span class="option-indicator">${letter}</span>
                  <div style="flex: 1;">
                    <div>${Utils.escapeHtml(opt.text)}</div>
                    ${isUserSel ? '<div style="font-size: 11.5px; font-weight: 700; color: var(--primary); margin-top: 2px;">Lựa chọn của bạn</div>' : ''}
                    ${isCorrect ? '<div style="font-size: 11.5px; font-weight: 700; color: #15803d; margin-top: 2px;">Đáp án chính xác</div>' : ''}
                  </div>
                </div>
              `;
            });
            optsOrMatchHtml = `<div class="study-options">${opts}</div>`;
          }

          let explHtml = '';
          if (q.explanation) {
            explHtml = `
              <div class="explanation-box" style="margin-top: 14px;">
                                <div class="exp-text">${Utils.formatExplanation(q.explanation)}</div>
              </div>
            `;
          }

          let imgHtml = '';
          if (q.images && q.images.length > 0) {
            if (q.type === 'match') {
              const isReferExhibit = q.question.toLowerCase().includes('refer to the exhibit');
              if (isReferExhibit) {
                imgHtml = `
                  <div class="study-image" style="margin: 12px 0;">
                    <div style="font-weight: 600; font-size: 13.5px; color: var(--primary); margin-bottom: 6px;">
                      Sơ đồ câu hỏi (Exhibit Diagram):
                    </div>
                    <img src="${q.images[0]}" alt="Exhibit Image" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 0 auto;" loading="lazy">
                  </div>
                `;
              }
            } else {
              imgHtml = `
                <div class="study-image" style="margin: 12px 0;">
                  ${q.images.map(img => `<img src="${img}" alt="Exhibit Image" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 8px auto;" loading="lazy">`).join('')}
                </div>
              `;
            }
          }

          const visualHtml = VisualizationBridge.renderBlock(q.id);

          card.innerHTML = `
            <div class="study-card-header">
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <span class="study-qnum">Câu ${idx + 1}</span>
                <span class="tag-badge" style="${item.isCorrect ? 'background: #dcfce7; color: #15803d;' : 'background: #fee2e2; color: #b91c1c; font-weight: 700;'}">
                  ${item.isCorrect ? 'Đúng' : 'Sai'}
                </span>
                <span class="tag-badge">${Utils.escapeHtml(q._groupKey || '')}</span>
              </div>
            </div>

            <div style="font-size: 15.5px; font-weight: 600; margin: 12px 0;">
              ${Utils.escapeHtml(q.question)}
            </div>

            ${imgHtml}
            ${optsOrMatchHtml}
            ${explHtml}
            ${visualHtml}
          `;

          this.elements.examReviewList.appendChild(card);
        });

        VisualizationBridge.bindToggleEvents(this.elements.examReviewList);
      }
    }
  }

  // =========================================================================
  // 8. MATCHING CONTROLLER (Dedicated Tab for 36 Matching Questions)
  // =========================================================================

  class MatchingController {
    constructor(dataStore, elements) {
      this.dataStore = dataStore;
      this.elements = elements;
      this.currentFilter = 'all';
      this.showTranslations = false;
      this.userMatchAnswers = {};
    }

    setFilter(filterKey) {
      this.currentFilter = filterKey;
      this.render();
    }

    render() {
      if (!this.elements.matchQuestionsList) return;
      this.elements.matchQuestionsList.innerHTML = '';

      let list = this.dataStore.matchQuestions;
      if (this.currentFilter !== 'all') {
        list = list.filter(q => (q._groupKey || ExamDataStore.determineGroupKey(q)) === this.currentFilter);
      }

      if (list.length === 0) {
        this.elements.matchQuestionsList.innerHTML = `
          <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: 8px;">
            <div style="font-size: 15px; color: var(--text-muted); margin-bottom: 8px;">Không có bài tập nối nào.</div>
            <div>Không có bài nối từ nào trong phần này.</div>
          </div>
        `;
        return;
      }

      list.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'study-card';
        card.dataset.id = q.id;

        const transObj = this.dataStore.getTranslation(q.id);
        const transBoxHtml = (transObj && transObj.question) ? `
          <div class="study-translation-box" id="match_trans_${q.id}" style="display: ${this.showTranslations ? 'block' : 'none'}; margin: 10px 0; padding: 10px 14px; background: rgba(29, 114, 184, 0.08); border-left: 3px solid var(--primary); border-radius: 4px; font-size: 14.5px;">
            <strong>Bản dịch:</strong> ${Utils.escapeHtml(transObj.question)}
          </div>
        ` : '';

        // Exhibit Images for Match Questions
        let exhibitHtml = '';
        if (q.images && q.images.length > 0) {
          const isReferExhibit = q.question.toLowerCase().includes('refer to the exhibit');
          if (isReferExhibit) {
            exhibitHtml = `
              <div class="match-exhibit-container" style="margin: 12px 0;">
                <div style="font-weight: 600; font-size: 13.5px; color: var(--primary); margin-bottom: 6px;">
                  Sơ đồ câu hỏi (Exhibit Diagram):
                </div>
                <div style="text-align: center; background: var(--bg-card); padding: 10px; border-radius: var(--radius); border: 1px solid var(--border-color);">
                  <img src="${q.images[0]}" alt="Exhibit Diagram" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; display: block; margin: 0 auto;" loading="lazy">
                </div>
                ${q.images.length > 1 ? `
                  <div style="margin-top: 8px; text-align: right;">
                    <button class="btn btn-outline btn-xs btn-toggle-exhibit-img" data-img="match_ans_${q.id}" data-text-show="Xem hình ảnh đáp án" data-text-hide="Ẩn hình ảnh đáp án">
                      Xem hình ảnh đáp án
                    </button>
                    <div id="match_ans_${q.id}" style="display: none; margin-top: 8px; text-align: center; background: var(--bg-card); padding: 10px; border-radius: var(--radius); border: 1px solid var(--border-color);">
                      <img src="${q.images[1]}" alt="Answer Diagram" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; display: block; margin: 0 auto;" loading="lazy">
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
          } else {
            exhibitHtml = `
              <div class="match-exhibit-container" style="margin: 10px 0; text-align: right;">
                <button class="btn btn-outline btn-xs btn-toggle-exhibit-img" data-img="match_ans_${q.id}" data-text-show="Xem sơ đồ câu hỏi" data-text-hide="Ẩn sơ đồ câu hỏi">
                  Xem sơ đồ câu hỏi
                </button>
                <div id="match_ans_${q.id}" style="display: none; margin-top: 10px; text-align: center; background: var(--bg-card); padding: 10px; border-radius: var(--radius); border: 1px solid var(--border-color);">
                  <img src="${q.images[0]}" alt="Question Diagram" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; display: block; margin: 0 auto;" loading="lazy">
                </div>
              </div>
            `;
          }
        }

        card.innerHTML = `
          <div class="study-card-header">
            <span class="study-qnum">Bài nối ${idx + 1}</span>
            <span class="tag-badge">${Utils.escapeHtml(q._groupKey || '')}</span>
          </div>
          <div style="font-size: 15.5px; font-weight: 600; margin: 10px 0;">
            ${Utils.escapeHtml(q.question)}
          </div>
          ${transBoxHtml}
          ${exhibitHtml}
          <div class="match-interactive-slot"></div>
        `;

        const slot = card.querySelector('.match-interactive-slot');
        if (window.MATCHING_HELPER) {
          const curAns = this.userMatchAnswers[q.id] || {};
          const board = window.MATCHING_HELPER.renderExamMatchingBoard(q, curAns, (updated) => {
            this.userMatchAnswers[q.id] = updated;
          });
          slot.appendChild(board);
        }

        this.elements.matchQuestionsList.appendChild(card);
      });
    }

    checkAll() {
      let totalPairs = 0;
      let correctPairs = 0;

      this.dataStore.matchQuestions.forEach(q => {
        const ans = this.userMatchAnswers[q.id] || {};
        if (window.MATCHING_HELPER) {
          const res = window.MATCHING_HELPER.evaluateMatchQuestion(q, ans);
          totalPairs += res.totalPairs;
          correctPairs += res.correctCount;
        }
      });

      alert(`Kết quả ghép nối: Bạn làm đúng ${correctPairs}/${totalPairs} cặp từ!`);
    }

    resetAll() {
      if (confirm('Bạn có chắc chắn muốn đặt lại tất cả các cặp đã nối?')) {
        this.userMatchAnswers = {};
        this.render();
      }
    }
  }

  // =========================================================================
  // 9. FE-TEST CONTROLLER (Practice Sets Generator & History)
  // =========================================================================

  class FeTestController {
    constructor(dataStore, elements, app) {
      this.dataStore = dataStore;
      this.elements = elements;
      this.app = app;
      this.currentReviewTest = null;
      this.currentReviewAttempt = null;
    }

    render() {
      const tests = this.dataStore.feTests;
      if (this.elements.feTestTotalCreated) this.elements.feTestTotalCreated.innerText = tests.length;

      const completed = tests.filter(t => t.completed);
      if (this.elements.feTestCompletedCount) this.elements.feTestCompletedCount.innerText = completed.length;

      let highest = 0;
      tests.forEach(t => {
        if (t.scorePct > highest) highest = t.scorePct;
        if (Array.isArray(t.history)) {
          t.history.forEach(h => {
            if (h.scorePct > highest) highest = h.scorePct;
          });
        }
      });
      if (this.elements.feTestHighestScore) this.elements.feTestHighestScore.innerText = completed.length > 0 ? `${highest}%` : '--';

      if (!this.elements.feTestListContainer) return;
      this.elements.feTestListContainer.innerHTML = '';

      if (tests.length === 0) {
        this.elements.feTestListContainer.innerHTML = `
          <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: 8px; border: 1px dashed var(--border-color);">
            <div style="font-weight: 700; font-size: 16px;">Chưa có đề thi FE_Test nào được tạo</div>
            <div style="color: var(--text-muted); font-size: 13.5px; margin-top: 6px;">Bấm nút "Tạo đề mới" ở góc trên bên phải để hệ thống sinh ngẫu nhiên 50 câu chuẩn từ Modules 1 - 16.</div>
          </div>
        `;
        return;
      }

      tests.forEach(test => {
        const card = document.createElement('div');
        card.className = 'fetest-card';

        const historyItems = Array.isArray(test.history) ? test.history : [];
        const hasHistory = historyItems.length > 0 || test.completed;
        const totalQ = test.questionIds ? test.questionIds.length : 50;
        const latestAttempt = historyItems.length > 0 ? historyItems[0] : (test.completed ? {
          turn: 1,
          date: test.lastDate || test.createdAt || '',
          scorePct: test.scorePct || 0,
          correctCount: test.correctCount || 0,
          totalCount: totalQ,
          wrongCount: (test.wrongCount !== undefined ? test.wrongCount : (totalQ - (test.correctCount || 0))),
          timeStr: test.lastTime || '--',
          wrongDetails: []
        } : null);

        const currentPct = latestAttempt ? latestAttempt.scorePct : 0;
        const isPassed = currentPct >= 70;
        const wrongNum = latestAttempt ? (latestAttempt.wrongDetails ? latestAttempt.wrongDetails.length : (latestAttempt.wrongCount || 0)) : 0;

        // Render history items rows
        let historyRowsHtml = '';
        if (historyItems.length > 0) {
          historyItems.forEach(h => {
            const hPct = typeof h.scorePct === 'number' ? h.scorePct : 0;
            const hPassed = hPct >= 70;
            const hWrong = (h.wrongDetails ? h.wrongDetails.length : h.wrongCount) || 0;
            historyRowsHtml += `
              <div class="fetest-history-row">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <span style="font-weight: 700; color: var(--primary);">Lượt #${h.turn || 1}:</span>
                  <span style="color: var(--text-muted); font-size: 12px;">${Utils.escapeHtml(h.date || '')}</span>
                  ${h.timeStr ? `<span style="color: var(--text-muted); font-size: 12px;">${Utils.escapeHtml(h.timeStr)}</span>` : ''}
                </div>
                <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                  <span style="font-size: 12.5px;">Đúng: <strong>${h.correctCount}/${h.totalCount}</strong> câu</span>
                  <span class="stat-badge ${hPassed ? 'good' : 'weak'}" style="font-size: 12px; padding: 2px 8px; border-radius: 999px;">${hPct}%</span>
                  ${hWrong > 0 ? `
                    <button class="btn btn-outline btn-sm btn-view-turn-mistakes" data-testid="${test.id}" data-turn="${h.turn}" style="font-size: 11.5px; padding: 3px 8px;">
                      Xem câu sai (${hWrong})
                    </button>
                    <button class="btn btn-outline btn-sm btn-retry-turn-mistakes" data-testid="${test.id}" data-turn="${h.turn}" style="font-size: 11.5px; padding: 3px 8px; color: #f59e0b; border-color: #fcd34d;">
                      Làm lại câu sai
                    </button>
                  ` : `
                    <span style="font-size: 11.5px; color: #15803d; font-weight: 600;">100% Đúng</span>
                  `}
                </div>
              </div>
            `;
          });
        }

        card.innerHTML = `
          <div class="fetest-header-row">
            <div class="fetest-title-wrap">
              <div class="fetest-title">${Utils.escapeHtml(test.title || test.id)}</div>
              <div class="fetest-meta">
                <span>Ngày tạo: ${Utils.escapeHtml(test.createdAt || '')}</span>
                <span>•</span>
                <span>Số câu: <strong>${totalQ}</strong> câu (Mod 1 - 16)</span>
                ${hasHistory ? `
                  <span>•</span>
                  <span style="color: var(--primary); font-weight: 600;">Lịch sử: ${historyItems.length || 1} lượt làm</span>
                ` : ''}
              </div>
            </div>

            <div class="fetest-actions">
              ${hasHistory ? `
                <span class="tag-badge" style="background: ${isPassed ? '#dcfce7' : '#fee2e2'}; color: ${isPassed ? '#15803d' : '#b91c1c'}; font-size: 13px; font-weight: 700; padding: 4px 10px;">
                  ${isPassed ? 'Đạt' : 'Chưa đạt'}: ${currentPct}% (${latestAttempt.correctCount}/${totalQ})
                </span>
              ` : `
                <span class="tag-badge" style="background: #fef3c7; color: #b45309; font-size: 13px; padding: 4px 10px;">
                  Chưa làm
                </span>
              `}

              <button class="btn btn-primary btn-sm btn-start-fetest" data-id="${test.id}">
                ${hasHistory ? 'Làm lại' : 'Làm bài thi'}
              </button>

              ${hasHistory ? `
                <button class="btn btn-outline btn-sm btn-toggle-history" data-id="${test.id}" title="Xem lịch sử làm bài của đề này">
                  Lịch sử (${historyItems.length || 1}) ▾
                </button>
              ` : ''}

              ${hasHistory && wrongNum > 0 ? `
                <button class="btn btn-warning btn-sm btn-view-latest-mistakes" data-id="${test.id}" title="Xem ngay các câu sai của lần thi gần nhất">
                  Xem câu sai (${wrongNum})
                </button>
              ` : ''}

              <button class="btn btn-outline btn-sm btn-delete-fetest" data-id="${test.id}" title="Xóa vĩnh viễn bài test này">
                Xóa
              </button>
            </div>
          </div>

          <!-- History container -->
          <div class="fetest-history-dropdown" id="hist_container_${test.id}" style="display: none;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 12.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                Lịch sử làm bài (${historyItems.length} lượt thi):
              </span>
              <span style="font-size: 11.5px; color: var(--text-muted);">Lần mới nhất hiển thị trên cùng</span>
            </div>
            ${historyRowsHtml || '<div style="font-size: 12px; color: var(--text-muted); font-style: italic;">Chưa có lượt thi nào ghi nhận.</div>'}
          </div>
        `;

        // Event: Start / Retake
        const startBtn = card.querySelector('.btn-start-fetest');
        if (startBtn) startBtn.onclick = () => this.startTest(test.id);

        // Event: Delete individual test
        const delBtn = card.querySelector('.btn-delete-fetest');
        if (delBtn) delBtn.onclick = () => this.deleteTest(test.id);

        // Event: Toggle History
        const histBtn = card.querySelector('.btn-toggle-history');
        if (histBtn) {
          histBtn.onclick = () => {
            const hCont = card.querySelector(`#hist_container_${test.id}`);
            if (hCont) {
              const isHidden = hCont.style.display === 'none';
              hCont.style.display = isHidden ? 'block' : 'none';
              histBtn.innerText = isHidden ? `Lịch sử (${historyItems.length || 1}) ▴` : `Lịch sử (${historyItems.length || 1}) ▾`;
            }
          };
        }

        // Event: View latest mistakes
        const latestMistakesBtn = card.querySelector('.btn-view-latest-mistakes');
        if (latestMistakesBtn) {
          latestMistakesBtn.onclick = () => this.openMistakesModal(test.id, latestAttempt ? latestAttempt.turn : null);
        }

        // Event: View specific turn mistakes
        card.querySelectorAll('.btn-view-turn-mistakes').forEach(btn => {
          btn.onclick = () => {
            const turnNum = parseInt(btn.getAttribute('data-turn'), 10);
            this.openMistakesModal(test.id, turnNum);
          };
        });

        // Event: Retry specific turn mistakes
        card.querySelectorAll('.btn-retry-turn-mistakes').forEach(btn => {
          btn.onclick = () => {
            const turnNum = parseInt(btn.getAttribute('data-turn'), 10);
            this.retryWrongQuestions(test.id, turnNum);
          };
        });

        this.elements.feTestListContainer.appendChild(card);
      });
    }

    createTest() {
      const candidates = this.dataStore.mod1To16Questions;
      if (candidates.length < 50) {
        alert('Không đủ câu hỏi trong Module 1 - 16 để sinh đề 50 câu!');
        return;
      }

      // Determine next sequential index (FE_Test_01, FE_Test_02, ...)
      let maxNum = 0;
      this.dataStore.feTests.forEach(t => {
        const match = t.id && t.id.match(/^FE_Test_(\\d+)$/i);
        if (match) {
          const num = parseInt(match[1], 10);
          if (!isNaN(num) && num > maxNum) maxNum = num;
        }
      });
      const nextNum = maxNum + 1;
      const numStr = String(nextNum).padStart(2, '0');
      const testId = `FE_Test_${numStr}`;
      const title = `FE_Test_${numStr}`;

      const shuffled = Utils.shuffleArray(candidates);
      const selected = shuffled.slice(0, 50);

      const newTest = {
        id: testId,
        title,
        createdAt: new Date().toLocaleDateString('vi-VN'),
        questionIds: selected.map(q => q.id),
        completed: false,
        scorePct: 0,
        correctCount: 0,
        history: []
      };

      this.dataStore.feTests.unshift(newTest);
      StorageService.saveFeTests(this.dataStore.feTests);
      this.render();
      this.startTest(testId);
    }

    startTest(testId) {
      const test = this.dataStore.feTests.find(t => t.id === testId);
      if (!test) return;
      const questions = test.questionIds.map(id => this.dataStore.getQuestion(id)).filter(Boolean);
      this.app.examController.startExam(questions, test.title, test.id);
    }

    deleteTest(testId) {
      const test = this.dataStore.feTests.find(t => t.id === testId);
      const title = test ? (test.title || test.id) : testId;
      if (confirm(`Bạn có chắc chắn muốn xóa bài thi "${title}"? Toàn bộ lịch sử làm bài của đề này sẽ bị xóa vĩnh viễn.`)) {
        this.dataStore.feTests = this.dataStore.feTests.filter(t => t.id !== testId);
        StorageService.saveFeTests(this.dataStore.feTests);
        this.render();
      }
    }

    clearHistory() {
      if (confirm('Bạn có chắc chắn muốn xóa tất cả các đề FE_Test đã tạo?')) {
        this.dataStore.feTests = [];
        StorageService.saveFeTests([]);
        this.render();
      }
    }

    openMistakesModal(testId, turnNum = null) {
      const test = this.dataStore.feTests.find(t => t.id === testId);
      if (!test) return;

      const history = Array.isArray(test.history) ? test.history : [];
      let attempt = null;
      if (turnNum !== null) {
        attempt = history.find(h => h.turn === turnNum);
      }
      if (!attempt && history.length > 0) {
        attempt = history[0];
      }

      this.currentReviewTest = test;
      this.currentReviewAttempt = attempt;

      const modal = this.elements.testMistakesModal;
      if (!modal) return;

      const titleEl = this.elements.testMistakesModalTitle;
      const subEl = this.elements.testMistakesModalSubtitle;
      const bodyEl = this.elements.testMistakesModalBody;

      const turnLabel = attempt ? `Lượt #${attempt.turn}` : 'Lần gần nhất';
      const scoreLabel = attempt ? `${attempt.scorePct}%` : (test.scorePct ? `${test.scorePct}%` : '0%');
      const correctLabel = attempt ? `${attempt.correctCount}/${attempt.totalCount}` : `${test.correctCount || 0}/${test.questionIds.length}`;
      const dateLabel = attempt ? attempt.date : (test.lastDate || test.createdAt || '');

      if (titleEl) {
        titleEl.innerHTML = `<span>Xem chi tiết câu sai: ${Utils.escapeHtml(test.title || test.id)} (${turnLabel})</span>`;
      }
      if (subEl) {
        subEl.innerText = `Kết quả: ${scoreLabel} (${correctLabel} câu đúng • Ngày thi: ${dateLabel})`;
      }

      // Collect wrong questions
      let wrongQuestionsWithAnswers = [];
      if (attempt && Array.isArray(attempt.wrongDetails) && attempt.wrongDetails.length > 0) {
        attempt.wrongDetails.forEach(wd => {
          const q = this.dataStore.getQuestion(wd.questionId);
          if (q) {
            wrongQuestionsWithAnswers.push({
              question: q,
              userSelected: wd.userSelected,
              isSkipped: wd.isSkipped
            });
          }
        });
      } else {
        // Fallback: lookup from test questionIds that are in mistakesIds
        (test.questionIds || []).forEach(qid => {
          if (this.dataStore.mistakesIds.has(qid)) {
            const q = this.dataStore.getQuestion(qid);
            if (q) wrongQuestionsWithAnswers.push({ question: q, userSelected: null, isSkipped: false });
          }
        });
      }

      if (!bodyEl) return;
      bodyEl.innerHTML = '';

      if (wrongQuestionsWithAnswers.length === 0) {
        bodyEl.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; background: var(--bg-card); border-radius: 8px;">
            <div style="font-weight: 700; font-size: 16px; color: #15803d;">Tuyệt vời! Không có câu làm sai trong bài thi này.</div>
            <div style="color: var(--text-muted); font-size: 13.5px; margin-top: 6px;">Bạn đã trả lời chính xác tất cả các câu hỏi của đề thi!</div>
          </div>
        `;
      } else {
        wrongQuestionsWithAnswers.forEach((item, idx) => {
          const q = item.question;
          const card = document.createElement('div');
          card.className = 'study-card';
          card.style.borderLeft = '4px solid #ef4444';
          card.style.marginBottom = '14px';

          let optsOrMatchHtml = '';
          if (q.type === 'match' && window.MATCHING_HELPER) {
            optsOrMatchHtml = window.MATCHING_HELPER.renderExamReviewMatching(q, item.userSelected);
          } else if (q.options && q.options.length > 0) {
            let opts = '';
            q.options.forEach((opt, optIdx) => {
              const letter = String.fromCharCode(65 + optIdx);
              const isUserSel = Array.isArray(item.userSelected)
                ? item.userSelected.includes(opt.text)
                : item.userSelected === opt.text;
              const isCorrect = !!opt.is_correct;

              let cls = 'review-option';
              if (isCorrect) cls += ' correct-answer';
              if (isUserSel && !isCorrect) cls += ' user-wrong';
              if (isUserSel && isCorrect) cls += ' user-correct';

              opts += `
                <div class="${cls}">
                  <span class="option-indicator">${letter}</span>
                  <div style="flex: 1;">
                    <div>${Utils.escapeHtml(opt.text)}</div>
                    ${isUserSel && !isCorrect ? '<div style="font-size: 11.5px; font-weight: 700; color: #ef4444; margin-top: 2px;">Lựa chọn sai của bạn</div>' : ''}
                    ${isCorrect ? '<div style="font-size: 11.5px; font-weight: 700; color: #15803d; margin-top: 2px;">Đáp án chính xác ITExamAnswers</div>' : ''}
                  </div>
                </div>
              `;
            });
            optsOrMatchHtml = `<div class="study-options">${opts}</div>`;
          }

          let explHtml = '';
          if (q.explanation) {
            explHtml = `
              <div class="explanation-box" style="margin-top: 14px;">
                <div class="exp-topic-title">Explanation:</div>
                <div class="exp-text">${Utils.formatExplanation(q.explanation)}</div>
              </div>
            `;
          }

          const visualHtml = VisualizationBridge.renderBlock(q.id);

          card.innerHTML = `
            <div class="study-card-header">
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <span class="study-qnum">Câu ${idx + 1}</span>
                <span class="tag-badge" style="background: #fee2e2; color: #b91c1c; font-weight: 700;">Làm sai</span>
                <span class="tag-badge">${Utils.escapeHtml(q._groupKey || '')}</span>
              </div>
            </div>

            <div style="font-size: 15.5px; font-weight: 600; margin: 12px 0;">
              ${Utils.escapeHtml(q.question)}
            </div>

            ${optsOrMatchHtml}
            ${explHtml}
            ${visualHtml}
          `;

          bodyEl.appendChild(card);
        });

        VisualizationBridge.bindToggleEvents(bodyEl);
      }

      modal.classList.add('open');
    }

    closeMistakesModal() {
      if (this.elements.testMistakesModal) {
        this.elements.testMistakesModal.classList.remove('open');
      }
    }

    retryWrongQuestions(testId, turnNum = null) {
      const test = this.dataStore.feTests.find(t => t.id === testId);
      if (!test) return;

      const history = Array.isArray(test.history) ? test.history : [];
      let attempt = null;
      if (turnNum !== null) attempt = history.find(h => h.turn === turnNum);
      if (!attempt && history.length > 0) attempt = history[0];

      let wrongQuestions = [];
      if (attempt && Array.isArray(attempt.wrongDetails) && attempt.wrongDetails.length > 0) {
        attempt.wrongDetails.forEach(wd => {
          const q = this.dataStore.getQuestion(wd.questionId);
          if (q) wrongQuestions.push(q);
        });
      } else {
        (test.questionIds || []).forEach(qid => {
          if (this.dataStore.mistakesIds.has(qid)) {
            const q = this.dataStore.getQuestion(qid);
            if (q) wrongQuestions.push(q);
          }
        });
      }

      if (wrongQuestions.length === 0) {
        alert('Không tìm thấy câu làm sai nào trong lượt thi này!');
        return;
      }

      this.closeMistakesModal();
      this.app.examController.startExam(wrongQuestions, `Làm Lại Câu Sai: ${test.title} (Lượt #${attempt ? attempt.turn : 1})`);
    }
  }

  // =========================================================================
  // 11. MISTAKES CONTROLLER (Targeted Review of Past Errors)
  // =========================================================================

  class MistakesController {
    constructor(dataStore, elements, app) {
      this.dataStore = dataStore;
      this.elements = elements;
      this.app = app;
    }

    render() {
      const wrongIds = Array.from(this.dataStore.mistakesIds);
      const wrongList = wrongIds.map(id => this.dataStore.getQuestion(id)).filter(Boolean);

      if (this.elements.mistakesTabCount) this.elements.mistakesTabCount.innerText = wrongList.length;

      if (!this.elements.mistakesQuestionsList) return;
      this.elements.mistakesQuestionsList.innerHTML = '';

      if (wrongList.length === 0) {
        if (this.elements.mistakesSummaryText) this.elements.mistakesSummaryText.innerText = 'Bạn chưa có câu nào bị sai khi thi thử!';
        this.elements.mistakesQuestionsList.innerHTML = `
          <div style="text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius); border: 1px dashed var(--border-color);">
            <div style="font-size: 15px; color: var(--text-muted); margin-bottom: 10px;">Không có câu làm sai nào.</div>
            <div style="font-weight: 700; font-size: 16px;">Tuyệt vời! Danh sách câu sai trống.</div>
            <div style="color: var(--text-muted); font-size: 13.5px; margin-top: 6px;">Hãy tiếp tục làm thêm các bài thi online để kiểm tra kiến thức.</div>
          </div>
        `;
        return;
      }

      if (this.elements.mistakesSummaryText) {
        this.elements.mistakesSummaryText.innerText = `Bạn đang có ${wrongList.length} câu đã từng trả lời sai khi thi. Hãy ôn tập lại để nhớ chính xác.`;
      }

      wrongList.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'study-card';
        card.dataset.id = q.id;
        card.style.borderLeft = '4px solid var(--correct-red)';

        let optsHtml = '';
        if (q.type === 'match' && window.MATCHING_HELPER && q.match_data) {
          optsHtml = window.MATCHING_HELPER.renderStudyMatchingBlock(q);
        } else if (q.options) {
          let opts = '';
          q.options.forEach((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            const isCorrect = !!opt.is_correct;
            opts += `
              <div class="study-option ${isCorrect ? 'correct' : ''}">
                <span class="option-indicator">${letter}</span>
                <div style="flex: 1;">${Utils.escapeHtml(opt.text)}</div>
                ${isCorrect ? '<span class="study-option-badge">Đáp án đúng</span>' : ''}
              </div>
            `;
          });
          optsHtml = `<div class="study-options">${opts}</div>`;
        }

        let imgHtml = '';
        if (q.images && q.images.length > 0) {
          if (q.type === 'match') {
            const isReferExhibit = q.question.toLowerCase().includes('refer to the exhibit');
            if (isReferExhibit) {
              imgHtml = `
                <div class="study-image" style="margin: 12px 0;">
                  <div style="font-weight: 600; font-size: 13.5px; color: var(--primary); margin-bottom: 6px;">
                    Sơ đồ câu hỏi (Exhibit Diagram):
                  </div>
                  <img src="${q.images[0]}" alt="Exhibit Image" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 0 auto;" loading="lazy">
                </div>
              `;
            }
          } else {
            imgHtml = `
              <div class="study-image" style="margin: 12px 0;">
                ${q.images.map(img => `<img src="${img}" alt="Exhibit Image" style="max-height: 400px; width: auto; max-width: 100%; border-radius: 6px; border: 1px solid var(--border-color); display: block; margin: 8px auto;" loading="lazy">`).join('')}
              </div>
            `;
          }
        }

        let explHtml = '';
        if (q.explanation) {
          explHtml = `
            <div class="explanation-box" style="margin-top: 14px;">
                            <div>${Utils.formatExplanation(q.explanation)}</div>
            </div>
          `;
        }

        card.innerHTML = `
          <div class="study-card-header">
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <span class="study-qnum">Câu ${idx + 1}</span>
              <span class="tag-badge" style="background: rgba(217, 4, 41, 0.12); color: var(--correct-red); font-weight: 700;">Đã từng làm sai</span>
              <span class="tag-badge">${Utils.escapeHtml(q._groupKey || '')}</span>
            </div>
            <button class="btn btn-outline btn-xs btn-remove-wrong" data-id="${q.id}" title="Xóa câu này khi đã thuộc">
              Xóa câu này
            </button>
          </div>
          <div style="font-size: 15.5px; font-weight: 600; margin: 12px 0;">
            ${Utils.escapeHtml(q.question)}
          </div>
          ${imgHtml}
          ${optsHtml}
          ${explHtml}
        `;

        const rmBtn = card.querySelector('.btn-remove-wrong');
        if (rmBtn) {
          rmBtn.onclick = () => {
            this.dataStore.mistakesIds.delete(q.id);
            StorageService.saveMistakes(this.dataStore.mistakesIds);
            this.render();
          };
        }

        this.elements.mistakesQuestionsList.appendChild(card);
      });
    }

    testMistakesOnly() {
      const wrongIds = Array.from(this.dataStore.mistakesIds);
      const questions = wrongIds.map(id => this.dataStore.getQuestion(id)).filter(Boolean);
      if (questions.length === 0) {
        alert('Bạn không có câu sai nào để làm bài thi!');
        return;
      }
      this.app.examController.startExam(questions, 'Ôn Tập Các Câu Đã Làm Sai');
    }

    clearAll() {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách câu sai?')) {
        this.dataStore.mistakesIds.clear();
        StorageService.saveMistakes(this.dataStore.mistakesIds);
        this.render();
      }
    }
  }

  // =========================================================================
  // 12. STATS CONTROLLER (Module Mastery Progress)
  // =========================================================================

  class StatsController {
    constructor(dataStore, elements) {
      this.dataStore = dataStore;
      this.elements = elements;
    }

    render() {
      if (!this.elements.moduleStatsGrid) return;
      this.elements.moduleStatsGrid.innerHTML = '';

      const keys = ['m1-4', 'm5-6', 'm7-9', 'm10-13', 'm14-16', 'final'];

      keys.forEach(k => {
        const info = MODULE_GROUP_INFO[k] || { name: k };
        const stat = this.dataStore.moduleStats[k] || { latest: null, total: 0, correct: 0, percentage: 0, history: [] };
        
        const hasData = (stat.latest !== null && stat.latest.total > 0) || (stat.total > 0) || (Array.isArray(stat.history) && stat.history.length > 0);
        const latest = stat.latest || (stat.total > 0 ? { total: stat.total, correct: stat.correct, percentage: stat.percentage, date: '' } : { total: 0, correct: 0, percentage: 0, date: '' });
        const pct = latest.percentage || 0;

        let badgeCls = 'weak';
        let badgeTxt = 'Cần ôn thêm';
        if (!hasData) {
          badgeCls = 'neutral';
          badgeTxt = 'Chưa làm (0%)';
        } else if (pct >= 80) {
          badgeCls = 'good';
          badgeTxt = `Rất tốt (${pct}%)`;
        } else if (pct >= 60) {
          badgeCls = 'medium';
          badgeTxt = `Khá (${pct}%)`;
        } else {
          badgeTxt = `Cần ôn thêm (${pct}%)`;
        }

        const historyItems = (stat.history && stat.history.length > 0) ? stat.history : [];
        let historyHtml = '';
        if (historyItems.length > 0) {
          let listRows = '';
          historyItems.forEach((h, hIdx) => {
            const hPct = typeof h.pct === 'number' ? h.pct : (h.total > 0 ? Math.round((h.correct / h.total) * 100) : 0);
            let hBadgeCls = hPct >= 80 ? 'good' : (hPct >= 60 ? 'medium' : 'weak');
            const attemptNum = historyItems.length - hIdx;
            listRows += `
              <div class="stat-history-item" style="display: flex; justify-content: space-between; align-items: center; padding: 7px 10px; background: var(--bg-main); border-radius: 6px; font-size: 12.5px; border: 1px solid var(--border-color); margin-bottom: 5px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-weight: 700; color: var(--primary);">Lượt ${attemptNum}:</span>
                  <span style="color: var(--text-muted); font-size: 11.5px;">${Utils.escapeHtml(h.date || '')}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>Đúng: <strong>${h.score || `${h.correct}/${h.total}`}</strong></span>
                  <span class="stat-badge ${hBadgeCls}" style="font-size: 11px; padding: 2px 7px;">${hPct}%</span>
                </div>
              </div>
            `;
          });

          historyHtml = `
            <div class="stat-history-section" style="margin-top: 14px; border-top: 1px dashed var(--border-color); padding-top: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                  Lịch sử làm bài (${historyItems.length} lượt):
                </span>
                <span style="font-size: 11px; color: var(--text-muted);">Mới nhất ở trên</span>
              </div>
              <div style="max-height: 140px; overflow-y: auto; padding-right: 2px;">
                ${listRows}
              </div>
            </div>
          `;
        } else {
          historyHtml = `
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--border-color); font-size: 12px; color: var(--text-muted); font-style: italic;">
              Chưa có lịch sử làm bài cho module này.
            </div>
          `;
        }

        const card = document.createElement('div');
        card.className = 'module-stat-card';
        card.innerHTML = `
          <div class="stat-card-header">
            <span class="stat-module-name" style="font-weight: 700;">${Utils.escapeHtml(info.name.split(':')[0])}</span>
            <span class="stat-badge ${badgeCls}">${badgeTxt}</span>
          </div>
          <div class="stat-numbers" style="margin: 10px 0 6px;">
            <span>Lần gần nhất: <strong>${hasData ? `${latest.correct}/${latest.total} câu` : '0 câu'}</strong></span>
            <span>Tỉ lệ chính xác: <strong style="color: ${pct >= 80 ? '#10b981' : (pct >= 60 ? '#f59e0b' : '#ef4444')};">${pct}%</strong></span>
          </div>
          <div class="progress-track" style="height: 6px; background: var(--bg-hover); border-radius: 999px; overflow: hidden;">
            <div class="progress-fill ${badgeCls}" style="width: ${pct}%; height: 100%;"></div>
          </div>
          ${historyHtml}
        `;
        this.elements.moduleStatsGrid.appendChild(card);
      });
    }

    resetAll() {
      if (confirm('Bạn có chắc chắn muốn xóa toàn bộ thống kê kết quả học tập?')) {
        this.dataStore.moduleStats = {};
        StorageService.saveModuleStats({});
        this.render();
      }
    }
  }

  // =========================================================================
  // 13. THEME MANAGER
  // =========================================================================

  class ThemeManager {
    static init() {
      const saved = StorageService.getTheme();
      document.documentElement.setAttribute('data-theme', saved);
    }

    static toggle() {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      StorageService.setTheme(next);
    }
  }

  // =========================================================================
  // 14. MAIN APPLICATION ORCHESTRATOR
  // =========================================================================

  class App {
    constructor() {
      this.elements = this.getElements();
      this.dataStore = new ExamDataStore();

      // Initialize Controllers
      this.studyController = new StudyController(this.dataStore, this.elements);
      this.examController = new ExamController(this.dataStore, this.elements, this);
      this.matchingController = new MatchingController(this.dataStore, this.elements);
      this.feTestController = new FeTestController(this.dataStore, this.elements, this);
            this.mistakesController = new MistakesController(this.dataStore, this.elements, this);
      this.statsController = new StatsController(this.dataStore, this.elements);

      this.currentMode = 'study';
    }

    getElements() {
      return {
        themeToggleBtn: document.getElementById('themeToggleBtn'),
        starredBtn: document.getElementById('starredBtn'),
        starredCount: document.getElementById('starredCount'),
        modulesBar: document.getElementById('modulesBar'),
        tabStudy: document.getElementById('tabStudy'),
        tabExam: document.getElementById('tabExam'),
        tabMatchMode: document.getElementById('tabMatchMode'),
        tabFeTest: document.getElementById('tabFeTest'),
        tabMistakes: document.getElementById('tabMistakes'),
        tabStats: document.getElementById('tabStats'),
                matchTabCount: document.getElementById('matchTabCount'),
        mistakesTabCount: document.getElementById('mistakesTabCount'),
        searchInput: document.getElementById('searchInput'),

        // Views
        studyView: document.getElementById('studyView'),
        examView: document.getElementById('examView'),
        matchView: document.getElementById('matchView'),
        fetestView: document.getElementById('fetestView'),
        resultsView: document.getElementById('resultsView'),
                mistakesView: document.getElementById('mistakesView'),
        statsView: document.getElementById('statsView'),

        // Study View
        studyModuleTitle: document.getElementById('studyModuleTitle'),
        studyModuleDesc: document.getElementById('studyModuleDesc'),
        studyQuestionsList: document.getElementById('studyQuestionsList'),
        toggleAnswersBtn: document.getElementById('toggleAnswersBtn'),
        toggleAnswersText: document.getElementById('toggleAnswersText'),
        toggleAllTranslateBtn: document.getElementById('toggleAllTranslateBtn'),
        filterStarredOnlyBtn: document.getElementById('filterStarredOnlyBtn'),
        startExamFromStudyBtn: document.getElementById('startExamFromStudyBtn'),

        // Match View
        matchQuestionsList: document.getElementById('matchQuestionsList'),
        matchFilterBar: document.getElementById('matchFilterBar'),
        btnTranslateAllMatch: document.getElementById('btnTranslateAllMatch'),
        btnResetAllMatches: document.getElementById('btnResetAllMatches'),
        btnCheckAllMatches: document.getElementById('btnCheckAllMatches'),

        // FE - Test View
        btnCreateFeTest: document.getElementById('btnCreateFeTest'),
        btnClearFeTests: document.getElementById('btnClearFeTests'),
        feTestListContainer: document.getElementById('feTestListContainer'),
        feTestTotalCreated: document.getElementById('feTestTotalCreated'),
        feTestCompletedCount: document.getElementById('feTestCompletedCount'),
        feTestHighestScore: document.getElementById('feTestHighestScore'),

        // Exam View
        examCurrentTitle: document.getElementById('examCurrentTitle'),
        examQuestionsCountBadge: document.getElementById('examQuestionsCountBadge'),
        timerDisplay: document.getElementById('timerDisplay'),
        timerPauseBtn: document.getElementById('timerPauseBtn'),
        examTimerBadge: document.getElementById('examTimerBadge'),
        examSettingsBtn: document.getElementById('examSettingsBtn'),
        examGrid: document.getElementById('examGrid'),
        countAnswered: document.getElementById('countAnswered'),
        countReview: document.getElementById('countReview'),
        countUnanswered: document.getElementById('countUnanswered'),
        examQTitle: document.getElementById('examQTitle'),
        examQText: document.getElementById('examQText'),
        examQTranslationBox: document.getElementById('examQTranslationBox'),
        examQTranslationText: document.getElementById('examQTranslationText'),
        btnTranslateExamQ: document.getElementById('btnTranslateExamQ'),
        examQImageContainer: document.getElementById('examQImageContainer'),
        examOptionsList: document.getElementById('examOptionsList'),
        examMatchContainer: document.getElementById('examMatchContainer'),
        btnPrevQuestion: document.getElementById('btnPrevQuestion'),
        btnNextQuestion: document.getElementById('btnNextQuestion'),
        btnMarkReview: document.getElementById('btnMarkReview'),
        btnClearAnswer: document.getElementById('btnClearAnswer'),
        btnSubmitExam: document.getElementById('btnSubmitExam'),
        submitExamTopBtn: document.getElementById('submitExamTopBtn'),

        // Results View
        scoreCircle: document.getElementById('scoreCircle'),
        scorePercent: document.getElementById('scorePercent'),
        scoreBadge: document.getElementById('scoreBadge'),
        resultTitle: document.getElementById('resultTitle'),
        resultFeedback: document.getElementById('resultFeedback'),
        resCorrect: document.getElementById('resCorrect'),
        resWrong: document.getElementById('resWrong'),
        resSkipped: document.getElementById('resSkipped'),
        resTime: document.getElementById('resTime'),
        btnRetakeExam: document.getElementById('btnRetakeExam'),
        btnRetryWrongOnly: document.getElementById('btnRetryWrongOnly'),
        btnReviewAllAnswers: document.getElementById('btnReviewAllAnswers'),
        examReviewList: document.getElementById('examReviewList'),

        // Mistakes View
        mistakesQuestionsList: document.getElementById('mistakesQuestionsList'),
        btnTestMistakesOnly: document.getElementById('btnTestMistakesOnly'),
        btnClearAllMistakes: document.getElementById('btnClearAllMistakes'),
        mistakesSummaryText: document.getElementById('mistakesSummaryText'),

        // Stats View
        moduleStatsGrid: document.getElementById('moduleStatsGrid'),
        btnResetAllStats: document.getElementById('btnResetAllStats'),

        // Modals
        submitModal: document.getElementById('submitModal'),
        submitModalSummary: document.getElementById('submitModalSummary'),
        btnCancelSubmit: document.getElementById('btnCancelSubmit'),
        btnConfirmSubmit: document.getElementById('btnConfirmSubmit'),
        settingsModal: document.getElementById('settingsModal'),
        cfgShuffleQ: document.getElementById('cfgShuffleQ'),
        cfgShuffleO: document.getElementById('cfgShuffleO'),
        cfgTimer: document.getElementById('cfgTimer'),
        btnCloseSettings: document.getElementById('btnCloseSettings'),
        btnSaveSettings: document.getElementById('btnSaveSettings'),

        // Test Mistakes Review Modal
        testMistakesModal: document.getElementById('testMistakesModal'),
        testMistakesModalTitle: document.getElementById('testMistakesModalTitle'),
        testMistakesModalSubtitle: document.getElementById('testMistakesModalSubtitle'),
        testMistakesModalBody: document.getElementById('testMistakesModalBody'),
        btnCloseTestMistakesModal: document.getElementById('btnCloseTestMistakesModal'),
        btnCloseTestMistakesFooter: document.getElementById('btnCloseTestMistakesFooter'),
        btnRetrySpecificTestMistakes: document.getElementById('btnRetrySpecificTestMistakes')
      };
    }

    init() {
      ThemeManager.init();

      // Update counters in Header
      if (this.elements.starredCount) this.elements.starredCount.innerText = this.dataStore.starredIds.size;
      if (this.elements.mistakesTabCount) this.elements.mistakesTabCount.innerText = this.dataStore.mistakesIds.size;
      if (this.elements.matchTabCount) this.elements.matchTabCount.innerText = this.dataStore.matchQuestions.length;

      // Update Module badge counts on top navigation bar
      this.dataStore.groupCounts.forEach((count, k) => {
        const el = document.getElementById(`count-${k}`);
        if (el) el.innerText = count;
      });

      this.bindEvents();

      // Render initial study mode
      this.studyController.updateHeaderMeta();
      this.studyController.render();
    }

        updateTabSlider() {
      const activeTab = document.querySelector('.topbar-tab-btn.active');
      const slider = document.getElementById('tabSliderPill');
      const nav = document.querySelector('.topbar-modes-nav');
      if (activeTab && slider && nav) {
        const navRect = nav.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        slider.style.width = `${tabRect.width}px`;
        slider.style.transform = `translateX(${tabRect.left - navRect.left}px)`;
        slider.style.opacity = '1';
      } else if (slider) {
        slider.style.opacity = '0';
      }
    }

    switchMode(mode) {
      this.currentMode = mode;

      const views = {
        study: this.elements.studyView,
        exam: this.elements.examView,
        results: this.elements.resultsView,
        match: this.elements.matchView,
        fetest: this.elements.fetestView,
                mistakes: this.elements.mistakesView,
        stats: this.elements.statsView
      };

      Object.keys(views).forEach(key => {
        if (views[key]) views[key].style.display = (key === mode ? 'block' : 'none');
      });

      // Update active tabs
      const tabs = {
        study: this.elements.tabStudy,
        exam: this.elements.tabExam,
        match: this.elements.tabMatchMode,
        fetest: this.elements.tabFeTest,
        mistakes: this.elements.tabMistakes,
        stats: this.elements.tabStats,
              };

      Object.keys(tabs).forEach(key => {
        if (tabs[key]) tabs[key].classList.toggle('active', key === mode);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.updateTabSlider();
      const sebBar = document.getElementById('sebStickyBar');
      if (sebBar && mode !== 'exam') sebBar.style.display = 'none';

      // Trigger sub-controller renders on tab switch
      if (mode === 'match') this.matchingController.render();
      else if (mode === 'fetest') this.feTestController.render();
            else if (mode === 'mistakes') this.mistakesController.render();
      else if (mode === 'stats') this.statsController.render();
    }

    bindEvents() {
      // Theme Toggle
      if (this.elements.themeToggleBtn) {
        this.elements.themeToggleBtn.onclick = () => ThemeManager.toggle();
      }

      // Brand Logo (IAO) Click
      const logoBtn = document.getElementById('logoBtn');
      if (logoBtn) {
        logoBtn.onclick = () => {
          if (this.elements.modulesBar) {
            this.elements.modulesBar.querySelectorAll('.module-pill').forEach(p => p.classList.remove('active'));
            const allBtn = this.elements.modulesBar.querySelector('[data-mod="all"]');
            if (allBtn) allBtn.classList.add('active');
          }
          this.studyController.setFilter('all');
          this.switchMode('study');
        };
      }

      // Hybrid Sidebar Architecture (Docked + Collapsed + Overlay Drawer)
      const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
      const mobileToggle = document.getElementById('mobileSidebarToggle');
      const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
      const sidebar = document.getElementById('appSidebar');
      const backdrop = document.getElementById('sidebarBackdrop');

      const toggleSidebarAction = () => {
        if (!sidebar) return;
        const isMobile = window.innerWidth <= 860;
        if (isMobile) {
          sidebar.classList.toggle('open');
          if (backdrop) backdrop.classList.toggle('active', sidebar.classList.contains('open'));
        } else {
          // Desktop: if currently collapsed, toggle overlay-open or expand dock
          if (document.body.classList.contains('sidebar-collapsed')) {
            if (sidebar.classList.contains('overlay-open')) {
              sidebar.classList.remove('overlay-open');
              if (backdrop) backdrop.classList.remove('active');
            } else {
              sidebar.classList.add('overlay-open');
              if (backdrop) backdrop.classList.add('active');
            }
          } else {
            // Docked -> Collapse to full width
            document.body.classList.add('sidebar-collapsed');
            sidebar.classList.remove('overlay-open');
            if (backdrop) backdrop.classList.remove('active');
          }
        }
      };

      const closeSidebarDrawer = () => {
        if (sidebar) {
          sidebar.classList.remove('open');
          sidebar.classList.remove('overlay-open');
        }
        if (backdrop) backdrop.classList.remove('active');
      };

      if (sidebarToggleBtn) sidebarToggleBtn.onclick = toggleSidebarAction;
      if (mobileToggle) mobileToggle.onclick = toggleSidebarAction;
      if (sidebarCloseBtn) sidebarCloseBtn.onclick = closeSidebarDrawer;
      if (backdrop) backdrop.onclick = closeSidebarDrawer;

      // Keyboard shortcut Ctrl + B to toggle sidebar
      // Safe Exam Browser (SEB) Controls
      const sebPauseBtn = document.getElementById('sebPauseBtn');
      if (sebPauseBtn) sebPauseBtn.onclick = () => this.examController.togglePauseTimer();
      const sebSubmitBtn = document.getElementById('sebSubmitBtn');
      if (sebSubmitBtn) sebSubmitBtn.onclick = () => this.examController.promptSubmit();

      // Question Quick-Nav Rail Toggle
      const railToggle = document.getElementById('studyNavRailToggle');
      const railClose = document.getElementById('studyNavRailCloseBtn');
      const railEl = document.getElementById('studyNavRail');
      if (railToggle && railEl) {
        railToggle.onclick = (e) => {
          e.stopPropagation();
          railEl.classList.toggle('open');
        };
      }
      if (railClose && railEl) {
        railClose.onclick = (e) => {
          e.stopPropagation();
          railEl.classList.remove('open');
        };
      }

      // Tab Slider Resize Listener
      window.addEventListener('resize', () => this.updateTabSlider());
      setTimeout(() => this.updateTabSlider(), 60);

      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
          e.preventDefault();
          toggleSidebarAction();
        }
      });

      // Left Sidebar Module Navigation
      if (this.elements.modulesBar) {
        this.elements.modulesBar.querySelectorAll('.module-pill').forEach(pill => {
          pill.onclick = () => {
            this.elements.modulesBar.querySelectorAll('.module-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const modKey = pill.getAttribute('data-mod');
            this.studyController.setFilter(modKey);
            if (this.currentMode !== 'study') this.switchMode('study');
            closeSidebarDrawer();
          };
        });
      }

      if (this.elements.searchInput) {
        let debounceTimer;
        this.elements.searchInput.oninput = (e) => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            this.studyController.setSearch(e.target.value);
            if (this.currentMode !== 'study') this.switchMode('study');
          }, 200);
        };
      }

      // Global Keyboard Shortcuts
      window.addEventListener('keydown', (e) => {
        // Ctrl + K or Ctrl + F: focus search
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'f')) {
          e.preventDefault();
          if (this.elements.searchInput) {
            this.elements.searchInput.focus();
            this.elements.searchInput.select();
          }
        }

      });

      // Mode Switcher Tabs
      if (this.elements.tabStudy) this.elements.tabStudy.onclick = () => this.switchMode('study');
      if (this.elements.tabExam) this.elements.tabExam.onclick = () => this.examController.startExam();
      if (this.elements.tabMatchMode) this.elements.tabMatchMode.onclick = () => this.switchMode('match');
      if (this.elements.tabFeTest) this.elements.tabFeTest.onclick = () => this.switchMode('fetest');
      if (this.elements.tabMistakes) this.elements.tabMistakes.onclick = () => this.switchMode('mistakes');
      if (this.elements.tabStats) this.elements.tabStats.onclick = () => this.switchMode('stats');
      
      // Header Starred Button
      if (this.elements.starredBtn) {
        this.elements.starredBtn.onclick = () => {
          this.switchMode('study');
          this.studyController.toggleStarredOnly();
        };
      }

      // Study Controls
      if (this.elements.toggleAnswersBtn) this.elements.toggleAnswersBtn.onclick = () => this.studyController.toggleAnswers();
      if (this.elements.toggleAllTranslateBtn) this.elements.toggleAllTranslateBtn.onclick = () => this.studyController.toggleAllTranslations();
      if (this.elements.filterStarredOnlyBtn) this.elements.filterStarredOnlyBtn.onclick = () => this.studyController.toggleStarredOnly();
      if (this.elements.startExamFromStudyBtn) this.elements.startExamFromStudyBtn.onclick = () => this.examController.startExam();

      // Exam Controls
      if (this.elements.timerPauseBtn) this.elements.timerPauseBtn.onclick = () => this.examController.togglePauseTimer();
      if (this.elements.btnPrevQuestion) this.elements.btnPrevQuestion.onclick = () => this.examController.goToQuestion(this.examController.activeExam.currentIndex - 1);
      if (this.elements.btnNextQuestion) {
        this.elements.btnNextQuestion.onclick = () => {
          if (this.examController.activeExam.currentIndex === this.examController.activeExam.questions.length - 1) {
            this.examController.promptSubmit();
          } else {
            this.examController.goToQuestion(this.examController.activeExam.currentIndex + 1);
          }
        };
      }
      if (this.elements.btnMarkReview) this.elements.btnMarkReview.onclick = () => this.examController.toggleMarkForReview();
      if (this.elements.btnClearAnswer) this.elements.btnClearAnswer.onclick = () => this.examController.clearAnswer();
      if (this.elements.btnSubmitExam) this.elements.btnSubmitExam.onclick = () => this.examController.promptSubmit();
      if (this.elements.submitExamTopBtn) this.elements.submitExamTopBtn.onclick = () => this.examController.promptSubmit();

      // Exam Translation
      if (this.elements.btnTranslateExamQ) {
        this.elements.btnTranslateExamQ.onclick = () => {
          const isHidden = this.elements.examQTranslationBox.style.display === 'none';
          this.elements.examQTranslationBox.style.display = isHidden ? 'block' : 'none';
          this.elements.btnTranslateExamQ.classList.toggle('active', isHidden);
          this.elements.btnTranslateExamQ.innerText = isHidden ? 'Ẩn bản dịch Tiếng Việt' : 'Dịch câu hỏi sang Tiếng Việt';
        };
      }

      // Modals
      if (this.elements.btnCancelSubmit) this.elements.btnCancelSubmit.onclick = () => this.elements.submitModal.classList.remove('open');
      if (this.elements.btnConfirmSubmit) this.elements.btnConfirmSubmit.onclick = () => this.examController.submitExam();

      // Exam Settings
      if (this.elements.examSettingsBtn) {
        this.elements.examSettingsBtn.onclick = () => {
          const cfg = this.dataStore.examConfig;
          if (this.elements.cfgShuffleQ) this.elements.cfgShuffleQ.checked = cfg.shuffleQuestions;
          if (this.elements.cfgShuffleO) this.elements.cfgShuffleO.checked = cfg.shuffleOptions;
          if (this.elements.cfgTimer) this.elements.cfgTimer.value = cfg.durationMinutes;
          this.elements.settingsModal.classList.add('open');
        };
      }
      if (this.elements.btnCloseSettings) this.elements.btnCloseSettings.onclick = () => this.elements.settingsModal.classList.remove('open');
      if (this.elements.btnSaveSettings) {
        this.elements.btnSaveSettings.onclick = () => {
          const cfg = {
            shuffleQuestions: this.elements.cfgShuffleQ.checked,
            shuffleOptions: this.elements.cfgShuffleO.checked,
            durationMinutes: parseInt(this.elements.cfgTimer.value, 10)
          };
          this.dataStore.examConfig = cfg;
          StorageService.saveExamConfig(cfg);
          this.elements.settingsModal.classList.remove('open');
          this.examController.startExam();
        };
      }

      // Results Actions
      if (this.elements.btnRetakeExam) this.elements.btnRetakeExam.onclick = () => this.examController.startExam();
      if (this.elements.btnRetryWrongOnly) {
        this.elements.btnRetryWrongOnly.onclick = () => {
          const wrongIds = Array.from(this.dataStore.mistakesIds);
          const qList = wrongIds.map(id => this.dataStore.getQuestion(id)).filter(Boolean);
          if (qList.length > 0) {
            this.examController.startExam(qList, 'Làm Lại Các Câu Trả Lời Sai');
          } else {
            alert('Không có câu sai nào trong bài thi vừa rồi!');
          }
        };
      }
      if (this.elements.btnReviewAllAnswers) {
        this.elements.btnReviewAllAnswers.onclick = () => {
          if (this.elements.examReviewList) {
            this.elements.examReviewList.scrollIntoView({ behavior: 'smooth' });
          }
        };
      }

      // Match Tab Controls
      if (this.elements.matchFilterBar) {
        this.elements.matchFilterBar.querySelectorAll('.module-pill').forEach(btn => {
          btn.onclick = () => {
            this.elements.matchFilterBar.querySelectorAll('.module-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mod = btn.getAttribute('data-match-mod');
            this.matchingController.setFilter(mod);
          };
        });
      }
      if (this.elements.btnTranslateAllMatch) {
        this.elements.btnTranslateAllMatch.onclick = () => {
          this.matchingController.showTranslations = !this.matchingController.showTranslations;
          this.elements.btnTranslateAllMatch.classList.toggle('active', this.matchingController.showTranslations);
          this.elements.btnTranslateAllMatch.innerText = this.matchingController.showTranslations ? 'Tắt dịch' : 'Dịch Tiếng Việt';
          this.matchingController.render();
        };
      }
      if (this.elements.btnResetAllMatches) this.elements.btnResetAllMatches.onclick = () => this.matchingController.resetAll();
      if (this.elements.btnCheckAllMatches) this.elements.btnCheckAllMatches.onclick = () => this.matchingController.checkAll();

      // FE - Test Controls
      if (this.elements.btnCreateFeTest) this.elements.btnCreateFeTest.onclick = () => this.feTestController.createTest();
      if (this.elements.btnClearFeTests) this.elements.btnClearFeTests.onclick = () => this.feTestController.clearHistory();

      // Test Mistakes Modal bindings
      if (this.elements.btnCloseTestMistakesModal) {
        this.elements.btnCloseTestMistakesModal.onclick = () => this.feTestController.closeMistakesModal();
      }
      if (this.elements.btnCloseTestMistakesFooter) {
        this.elements.btnCloseTestMistakesFooter.onclick = () => this.feTestController.closeMistakesModal();
      }
      if (this.elements.btnRetrySpecificTestMistakes) {
        this.elements.btnRetrySpecificTestMistakes.onclick = () => {
          const revTest = this.feTestController.currentReviewTest;
          const revAttempt = this.feTestController.currentReviewAttempt;
          if (revTest) {
            this.feTestController.retryWrongQuestions(revTest.id, revAttempt ? revAttempt.turn : null);
          }
        };
      }

      
      // Mistakes Controls
      if (this.elements.btnTestMistakesOnly) this.elements.btnTestMistakesOnly.onclick = () => this.mistakesController.testMistakesOnly();
      if (this.elements.btnClearAllMistakes) this.elements.btnClearAllMistakes.onclick = () => this.mistakesController.clearAll();

      // Stats Controls
      if (this.elements.btnResetAllStats) this.elements.btnResetAllStats.onclick = () => this.statsController.resetAll();
    }
  }

  // =========================================================================
  // 15. BOOTSTRAP APPLICATION
  // =========================================================================

  document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
    window.NWC_APP = app;
    window.CYBER_OPS_APP = app;
  });

})();
