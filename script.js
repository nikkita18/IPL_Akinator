// ===== IPL Akinator — Game Engine (Cinematic UI/UX Edition) =====

(function () {
  'use strict';

  // ── Questions bank ──
  const QUESTIONS = [
    // ── Broad Macro Questions ──
    { id: "indian", text: "Is the player Indian?", test: p => !p.overseas, category: "macro" },
    { id: "overseas", text: "Is the player an overseas (non-Indian) player?", test: p => p.overseas, category: "macro" },
    { id: "capped", text: "Has the player played international cricket for their country (is capped)?", test: p => p.isCapped, category: "macro" },
    { id: "batsman", text: "Is the player primarily a batsman?", test: p => p.role === "batsman", category: "macro" },
    { id: "bowler", text: "Is the player primarily a bowler?", test: p => p.role === "bowler", category: "macro" },
    { id: "allrounder", text: "Is the player an all-rounder?", test: p => p.role === "allrounder", category: "macro" },
    { id: "wicketkeeper", text: "Is the player a wicketkeeper?", test: p => p.role === "wicketkeeper", category: "macro" },
    { id: "bat_right", text: "Does the player bat right-handed?", test: p => p.battingHand === "right", category: "macro" },
    { id: "bat_left", text: "Does the player bat left-handed?", test: p => p.battingHand === "left", category: "macro" },
    { id: "bowl_pace", text: "Does the player bowl pace / fast?", test: p => p.bowlingType === "fast", category: "macro" },
    { id: "bowl_spin", text: "Does the player bowl spin?", test: p => p.bowlingType === "spin", category: "macro" },
    { id: "non_bowler", text: "Is the player a non-bowler (doesn't bowl)?", test: p => p.bowlingType === "none", category: "macro" },
    { id: "opener", text: "Does the player regularly open the batting (opening batsman)?", test: p => p.isOpener, category: "macro" },
    { id: "captain", text: "Has the player captained an IPL team?", test: p => p.isCaptain, category: "macro" },
    { id: "won_ipl", text: "Has the player won the IPL trophy?", test: p => p.hasWonIPL, category: "macro" },
    { id: "over_30", text: "Is the player over 30 years old?", test: p => p.isOver30, category: "macro" },
    { id: "under_25", text: "Is the player under 25 years old?", test: p => p.isUnder25, category: "macro" },
    
    // ── Mid-level Cricket Attributes & Milestones ──
    { id: "bowl_left", text: "Does the player bowl with their left arm?", test: p => p.bowlingArm === "left", category: "mid" },
    { id: "wrist_spin", text: "Is the player a wrist-spinner (leg-break or chinaman)?", test: p => p.spinType === "wrist", category: "mid" },
    { id: "century", text: "Has the player scored a century (100+ runs) in an IPL match?", test: p => p.hasIPLCentury, category: "mid" },
    { id: "fifer", text: "Has the player taken an IPL 5-wicket haul or hat-trick?", test: p => p.has5WicketHaul, category: "mid" },
    { id: "wc_winner", text: "Has the player won an ICC World Cup (ODI or T20 World Cup) with their country?", test: p => p.worldCupWinner, category: "mid" },
    { id: "matches_100", text: "Has the player played 100 or more matches in the IPL?", test: p => p.matches100Plus, category: "mid" },
    { id: "one_franchise", text: "Has the player played for ONLY ONE franchise throughout their entire IPL career?", test: p => p.oneFranchiseOnly, category: "mid" },
    { id: "wickets_50", text: "Has the player taken 50 or more career wickets in the IPL?", test: p => p.wickets50Plus, category: "mid" },
    { id: "fast_50", text: "Has the player scored an IPL half-century in under 16 balls?", test: p => p.fast50, category: "mid" },
    { id: "debut_pre_2015", text: "Did the player debut in the IPL before 2015?", test: p => p.debutBefore2015, category: "mid" },
    { id: "retired", text: "Has the player retired from the IPL?", test: p => p.isRetired, category: "mid" },
    { id: "teenager", text: "Is the player a teenager (under 20 years old)?", test: p => p.teenager, category: "micro" },
    { id: "emerging", text: "Has the player won the IPL Emerging Player of the Year award?", test: p => p.emergingPlayerAward, category: "micro" },
    { id: "mvp", text: "Has the player won the IPL Most Valuable Player (MVP) award?", test: p => p.iplMVP, category: "micro" },
    { id: "orange_cap", text: "Has the player won the Orange Cap (most runs in an IPL season)?", test: p => p.orangeCap, category: "micro" },
    { id: "purple_cap", text: "Has the player won the Purple Cap (most wickets in an IPL season)?", test: p => p.purpleCap, category: "micro" },

    // ── Team Associations ──
    { id: "csk", text: "Is the player associated with Chennai Super Kings (CSK)?", test: p => p.team === "CSK", category: "team" },
    { id: "mi", text: "Is the player associated with Mumbai Indians (MI)?", test: p => p.team === "MI", category: "team" },
    { id: "rcb", text: "Is the player associated with Royal Challengers Bengaluru (RCB)?", test: p => p.team === "RCB", category: "team" },
    { id: "kkr", text: "Is the player associated with Kolkata Knight Riders (KKR)?", test: p => p.team === "KKR", category: "team" },
    { id: "dc", text: "Is the player associated with Delhi Capitals (DC)?", test: p => p.team === "DC", category: "team" },
    { id: "rr", text: "Is the player associated with Rajasthan Royals (RR)?", test: p => p.team === "RR", category: "team" },
    { id: "srh", text: "Is the player associated with Sunrisers Hyderabad (SRH)?", test: p => p.team === "SRH", category: "team" },
    { id: "pbks", text: "Is the player associated with Punjab Kings (PBKS)?", test: p => p.team === "PBKS", category: "team" },
    { id: "gt", text: "Is the player associated with Gujarat Titans (GT)?", test: p => p.team === "GT", category: "team" },
    { id: "lsg", text: "Is the player associated with Lucknow Super Giants (LSG)?", test: p => p.team === "LSG", category: "team" },

    // ── Overseas Country Questions ──
    { id: "aus", text: "Is the player from Australia?", test: p => p.country === "Australia", category: "country" },
    { id: "eng", text: "Is the player from England?", test: p => p.country === "England", category: "country" },
    { id: "sa", text: "Is the player from South Africa?", test: p => p.country === "South Africa", category: "country" },
    { id: "wi", text: "Is the player from the West Indies?", test: p => p.country === "West Indies", category: "country" },
    { id: "nz", text: "Is the player from New Zealand?", test: p => p.country === "New Zealand", category: "country" },
    { id: "sl", text: "Is the player from Sri Lanka?", test: p => p.country === "Sri Lanka", category: "country" },
    { id: "afg", text: "Is the player from Afghanistan?", test: p => p.country === "Afghanistan", category: "country" },
    { id: "ban", text: "Is the player from Bangladesh?", test: p => p.country === "Bangladesh", category: "country" },
    { id: "zim", text: "Is the player from Zimbabwe?", test: p => p.country === "Zimbabwe", category: "country" },
  ];

  // ── IPL Commentary Flavor Lines ──
  const FLAVOR_LINES = {
    early: [
      "Let's narrow this down… 🏏",
      "Hmm, interesting choice!",
      "The AI brain is warming up… 🔥",
      "Let me scan the dressing room…",
      "Processing cricket data… 🧠",
    ],
    mid: [
      "Getting closer now! 🎯",
      "I can feel the answer coming…",
      "This player looks like a match-winner!",
      "Narrowing it down like a yorker! 🏏",
      "The field is shrinking fast…",
    ],
    late: [
      "Almost there! Can you feel it? 🔥",
      "I think I've got this one!",
      "Just a few more clues… 🎯",
      "This is getting exciting!",
      "One more ball to bowl… 🏏",
    ],
  };

  // ── Game State ──
  let candidates = [];
  let totalPlayerCount = 0;
  let askedQuestions = new Set();
  let answerHistory = [];
  let rejectedGuesses = new Set();
  let questionCount = 0;
  let guessAttempts = 0;
  let playerProbabilities = new Map();
  const MAX_QUESTIONS = 20;
  let isTyping = false;

  // Score tracking
  let wins = parseInt(localStorage.getItem('ipl_akinator_wins') || '0');
  let streak = parseInt(localStorage.getItem('ipl_akinator_streak') || '0');
  let bestStreak = parseInt(localStorage.getItem('ipl_akinator_best_streak') || '0');
  let currentGuessObj = null;
  let currentGuessConfidence = 0;

  // ── DOM Elements ──
  const $id = id => document.getElementById(id);

  const screens = {
    welcome: $id('welcome-screen'),
    question: $id('question-screen'),
    guess: $id('guess-screen'),
    result: $id('result-screen'),
  };

  const els = {
    startBtn: $id('start-btn'),
    totalPlayers: $id('total-players'),
    progressFill: $id('progress-fill'),
    questionNumber: $id('question-number'),
    questionKicker: $id('question-kicker'),
    remainingCount: $id('remaining-count'),
    progressPercent: $id('progress-percent'),
    thinking: $id('thinking'),
    questionText: $id('question-text'),
    questionContent: $id('question-content'),
    questionFlavor: $id('question-flavor'),
    questionCard: $id('question-card'),
    confidenceFill: $id('confidence-fill'),
    confidenceValue: $id('confidence-value'),
    answerButtons: $id('answer-buttons'),
    giveUpBtn: $id('give-up-btn'),
    guessTitle: $id('guess-title'),
    playerCard: $id('player-card'),
    playerAvatar: $id('player-avatar'),
    playerName: $id('player-name'),
    playerTeam: $id('player-team'),
    playerRole: $id('player-role'),
    playerCountry: $id('player-country'),
    guessConfidence: $id('guess-confidence'),
    guessConfidenceVal: $id('guess-confidence-val'),
    correctBtn: $id('correct-btn'),
    wrongBtn: $id('wrong-btn'),
    resultEmoji: $id('result-emoji'),
    resultTitle: $id('result-title'),
    resultSubtitle: $id('result-subtitle'),
    statQuestions: $id('stat-questions'),
    statWins: $id('stat-wins'),
    statStreak: $id('stat-streak'),
    playAgainBtn: $id('play-again-btn'),
    scoreBar: $id('score-bar'),
    winsDisplay: $id('wins'),
    streakDisplay: $id('streak'),
    cinematicOverlay: $id('cinematic-overlay'),
    revealSpotlight: $id('reveal-spotlight'),
    liveDataContainer: $id('live-data-container'),
    liveDataInfo: $id('live-data-info'),
    predictionAvatar: $id('prediction-avatar'),
    predictionName: $id('prediction-name'),
    predictionConfidence: $id('prediction-confidence'),
    predictionNote: $id('prediction-note'),
    resultPlayerCard: $id('result-player-card'),
    resultPlayerAvatar: $id('result-player-avatar'),
    resultPlayerName: $id('result-player-name'),
    resultPlayerTeam: $id('result-player-team'),
    resultPlayerRole: $id('result-player-role'),
    resultPlayerCountry: $id('result-player-country'),
    resultGuessConfidenceVal: $id('result-guess-confidence-val'),
    resultKicker: $id('result-kicker'),
  };

  const PLAYER_IMAGE_EXTENSIONS = ['png', 'jpg', 'webp', 'gif'];
  const IMAGE_CACHE_BUSTER = 'v=2.4';

  function playerImageSlug(name) {
    return name
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function renderPlayerAvatar(container, player) {
    container.textContent = '';
    container.classList.remove('has-image', 'prediction-unknown');

    if (!player?.name) {
      container.textContent = '🏏';
      return;
    }

    const slug = playerImageSlug(player.name);
    let index = 0;
    const img = document.createElement('img');
    img.alt = player.name;
    img.loading = 'lazy';

    img.onerror = () => {
      index += 1;
      if (index < PLAYER_IMAGE_EXTENSIONS.length) {
        img.src = `images/${slug}.${PLAYER_IMAGE_EXTENSIONS[index]}?${IMAGE_CACHE_BUSTER}`;
        return;
      }

      container.classList.remove('has-image');
      if (img.parentNode === container) {
        img.remove();
      }
      container.textContent = player.emoji || '🏏';
    };

    img.onload = () => {
      container.classList.add('has-image');
    };

    img.src = `images/${slug}.${PLAYER_IMAGE_EXTENSIONS[index]}?${IMAGE_CACHE_BUSTER}`;
    container.appendChild(img);
  }

  // ── Sound Settings & Web Audio API ──
  let isSoundEnabled = localStorage.getItem('ipl_akinator_sound') !== 'muted';

  function updateSoundUI() {
    document.querySelectorAll('.btn-sound-toggle').forEach(btn => {
      if (isSoundEnabled) {
        btn.classList.remove('muted');
        btn.title = 'Sound Enabled (Press M to mute)';
      } else {
        btn.classList.add('muted');
        btn.title = 'Sound Muted (Press M to unmute)';
      }
    });
    document.querySelectorAll('.sound-icon').forEach(icon => {
      icon.textContent = isSoundEnabled ? '🔊' : '🔇';
    });
  }

  function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    localStorage.setItem('ipl_akinator_sound', isSoundEnabled ? 'enabled' : 'muted');
    updateSoundUI();
    if (isSoundEnabled) playClick();
  }

  function renderPrediction(ranked = getRankedPlayers(), reveal = false) {
    if (!els.predictionAvatar) return;

    const confidence = getGuessConfidence(ranked);
    if (els.predictionConfidence) els.predictionConfidence.textContent = confidence + '%';

    const badge = $id('prediction-status-badge');
    const bubble = $id('speech-bubble-text');

    if (!ranked.length) {
      els.predictionAvatar.innerHTML = '<span>?</span>';
      els.predictionAvatar.classList.remove('has-image');
      els.predictionAvatar.classList.add('prediction-unknown');
      if (els.predictionName) els.predictionName.textContent = 'No clear lead';
      if (els.predictionNote) els.predictionNote.textContent = 'Your answers have ruled out every known player.';
      if (badge) badge.textContent = 'UNRESOLVED';
      if (bubble) bubble.textContent = 'Hmm, you might have me stumped here! Re-evaluating candidate pool...';
      return;
    }

    const player = ranked[0].player;
    if (reveal) {
      renderPlayerAvatar(els.predictionAvatar, player);
      if (els.predictionName) els.predictionName.textContent = player.name;
      if (els.predictionNote) els.predictionNote.textContent = 'This is my highest-confidence match.';
      if (badge) badge.textContent = 'LOCKED IN 🎯';
      if (bubble) bubble.textContent = `I believe your cricketer is ${player.name}! Am I right?`;
    } else {
      els.predictionAvatar.innerHTML = '<span>?</span>';
      els.predictionAvatar.classList.remove('has-image');
      els.predictionAvatar.classList.add('prediction-unknown');

      if (confidence >= 80) {
        if (els.predictionName) els.predictionName.textContent = 'Target Acquired!';
        if (els.predictionNote) els.predictionNote.textContent = 'Almost certain! Verifying franchise details.';
        if (badge) badge.textContent = 'LOCKED IN 🎯';
        if (bubble) bubble.textContent = "Aha! The clues are clicking into place. I'm ready to predict!";
      } else if (confidence >= 55) {
        if (els.predictionName) els.predictionName.textContent = 'Strong Signal';
        if (els.predictionNote) els.predictionNote.textContent = 'Narrowing down franchise & role attributes.';
        if (badge) badge.textContent = 'TARGETING';
        if (bubble) bubble.textContent = "The candidate field is shrinking fast! Zeroing in on your player.";
      } else if (confidence >= 30) {
        if (els.predictionName) els.predictionName.textContent = 'Analyzing Signals';
        if (els.predictionNote) els.predictionNote.textContent = 'Filtering batting records and tournament stats.';
        if (badge) badge.textContent = 'ANALYZING';
        if (bubble) bubble.textContent = 'Good answer! Cross-referencing stats across all 10 franchises...';
      } else {
        if (els.predictionName) els.predictionName.textContent = 'Scouting...';
        if (els.predictionNote) els.predictionNote.textContent = "Keep answering, I'm building your player's profile!";
        if (badge) badge.textContent = 'SCOUTING';
        if (bubble && questionCount <= 1) bubble.textContent = "Got it! Think of an IPL star and answer each question honestly.";
      }
    }
  }

  // ── Sound Effects (Web Audio API) ──
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let audioCtx;
  function ensureAudio() {
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  }

  function playClick() {
    if (!isSoundEnabled) return;
    try {
      ensureAudio();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.type = 'sine'; o.frequency.setValueAtTime(800, audioCtx.currentTime);
      o.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.08);
      g.gain.setValueAtTime(0.1, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      o.start(); o.stop(audioCtx.currentTime + 0.1);
    } catch(e){}
  }

  function playCrowdRoar() {
    if (!isSoundEnabled) return;
    try {
      ensureAudio();
      const duration = 1.5;
      const bufferSize = audioCtx.sampleRate * duration;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const t = i / audioCtx.sampleRate;
        const envelope = Math.sin(Math.PI * t / duration) * 0.15;
        data[i] = (Math.random() * 2 - 1) * envelope;
      }
      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass'; filter.frequency.value = 600; filter.Q.value = 0.5;
      source.connect(filter); filter.connect(audioCtx.destination);
      source.start();
    } catch(e){}
  }

  function playRevealChime() {
    if (!isSoundEnabled) return;
    try {
      ensureAudio();
      const notes = [523, 659, 784, 1047];
      notes.forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination);
        o.type = 'sine'; o.frequency.value = freq;
        const start = audioCtx.currentTime + i * 0.15;
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(0.08, start + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
        o.start(start); o.stop(start + 0.4);
      });
    } catch(e){}
  }

  // ── Bayesian Probability Engine ──
  const ANSWER_LIKELIHOODS = {
    yes: { match: 0.94, miss: 0.06 },
    probably: { match: 0.78, miss: 0.22 },
    dunno: { match: 1.0, miss: 1.0 },
    probably_not: { match: 0.22, miss: 0.78 },
    no: { match: 0.06, miss: 0.94 },
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function initBayesianPriors() {
    playerProbabilities.clear();
    let totalPrior = 0;
    for (const p of PLAYERS) {
      let prior = 1.0;
      if (p.isCapped) prior += 0.5;
      if (p.isCaptain) prior += 0.5;
      if (p.matches100Plus) prior += 0.5;
      playerProbabilities.set(p.name, prior);
      totalPrior += prior;
    }
    for (const [name, prior] of playerProbabilities) {
      playerProbabilities.set(name, prior / totalPrior);
    }
  }

  function getRankedPlayers() {
    const ranked = [];
    for (const player of PLAYERS) {
      if (rejectedGuesses.has(player.name)) continue;
      const prob = playerProbabilities.get(player.name) || 0;
      if (prob > 0) {
        ranked.push({ player, prob, score: prob });
      }
    }
    ranked.sort((a, b) => b.prob - a.prob);
    return ranked;
  }

  function getLikelyCandidates(ranked = getRankedPlayers()) {
    if (ranked.length === 0) return [];
    // Plausible candidates with non-trivial posterior probability (>= 0.5%)
    const plausible = ranked.filter(item => item.prob >= 0.005);
    if (plausible.length >= 2) return plausible.map(item => item.player);
    return ranked.slice(0, Math.min(8, ranked.length)).map(item => item.player);
  }

  function updateLikelyCandidates() {
    candidates = getLikelyCandidates();
  }

  function getGuessConfidence(ranked = getRankedPlayers()) {
    if (ranked.length === 0) return 0;
    const top = ranked[0]?.prob || 0;
    const second = ranked[1]?.prob || 0;

    let conf = Math.round(top * 100);
    if (top >= 0.45 && top >= second * 1.8) {
      conf = Math.min(99, Math.round(conf + (top - second) * 20));
    }
    return clamp(conf, 1, 99);
  }

  // ── Live Data Override System ──
  async function loadLiveData() {
    try {
      const response = await fetch('updates.json?v=' + new Date().getTime());
      if (!response.ok) throw new Error('Live data not found');
      const liveData = await response.json();
      
      // Update UI indicator
      if (els.liveDataContainer && els.liveDataInfo) {
        els.liveDataContainer.dataset.loaded = 'true';
        if (screens.welcome && screens.welcome.classList.contains('active')) {
          els.liveDataContainer.style.display = 'flex';
        }
        const updatedDate = new Date(liveData.lastUpdated).toLocaleDateString(undefined, {
          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        els.liveDataInfo.textContent = `Source: ${liveData.source || 'API'} | Updated: ${updatedDate}`;
      }

      // Merge data with PLAYERS array
      mergeData(liveData);
      
    } catch (error) {
      console.log('Using static dataset (live data unavailable):', error);
    }
  }

  function mergeData(liveData) {
    if (!liveData || !liveData.players) return;
    
    // First, map players for quick lookup
    const playerMap = new Map();
    PLAYERS.forEach(p => playerMap.set(p.name, p));

    // Override player specific data
    if (liveData.players) {
      for (const [playerName, overrides] of Object.entries(liveData.players)) {
        if (playerMap.has(playerName)) {
          const player = playerMap.get(playerName);
          Object.assign(player, overrides);
        }
      }
    }
    
    // Handle team-wide overrides (e.g. IPL Winner)
    if (liveData.teams) {
      for (const [teamName, teamData] of Object.entries(liveData.teams)) {
        if (teamData.ipl_winner) {
          // If a team won the IPL in live data, set hasWonIPL to true for all its players
          PLAYERS.forEach(p => {
            if (p.team === teamName) {
              p.hasWonIPL = true;
            }
          });
        }
      }
    }
  }

  // ── Theme & Modal System ──
  const THEMES = {
    stadium: { name: 'STADIUM', icon: '🌿' },
    gold: { name: 'GOLD', icon: '🏆' },
    royal: { name: 'ROYAL', icon: '💎' },
    cyber: { name: 'CYBER', icon: '⚡' },
  };

  function applyTheme(themeName) {
    const theme = THEMES[themeName] ? themeName : 'stadium';
    document.body.dataset.theme = theme;
    localStorage.setItem('ipl_akinator_theme', theme);

    const themeNameEl = $id('theme-name');
    const themeIconEl = $id('theme-icon');
    if (themeNameEl) themeNameEl.textContent = THEMES[theme].name;
    if (themeIconEl) themeIconEl.textContent = THEMES[theme].icon;

    document.querySelectorAll('.theme-card').forEach(card => {
      card.classList.toggle('active', card.dataset.setTheme === theme);
    });

    document.querySelectorAll('.theme-opt').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.setTheme === theme);
    });
  }

  function showThemeModal() {
    const modal = $id('theme-modal');
    if (modal) modal.style.display = 'grid';
  }

  function hideThemeModal() {
    const modal = $id('theme-modal');
    if (modal) modal.style.display = 'none';
  }

  function showRulesModal() {
    const modal = $id('rules-modal');
    if (modal) modal.style.display = 'grid';
  }

  function hideRulesModal() {
    const modal = $id('rules-modal');
    if (modal) modal.style.display = 'none';
  }

  // ── Initialization ──
  async function init() {
    await loadLiveData();
    initBayesianPriors();
    
    totalPlayerCount = PLAYERS.length;
    els.totalPlayers.textContent = totalPlayerCount;
    updateScoreDisplay();
    createParticles();

    els.startBtn.addEventListener('click', () => { playClick(); startGame(); });
    els.correctBtn.addEventListener('click', () => { playClick(); handleCorrectGuess(); });
    els.wrongBtn.addEventListener('click', () => { playClick(); handleWrongGuess(); });
    els.playAgainBtn.addEventListener('click', () => { playClick(); resetGame(); });
    els.giveUpBtn.addEventListener('click', () => { playClick(); handleGiveUp(); });

    document.querySelectorAll('.btn-answer').forEach(btn => {
      btn.addEventListener('click', () => {
        if (isTyping) return;
        playClick();
        handleAnswer(btn.dataset.answer);
      });
    });

    // Theme setup
    const savedTheme = localStorage.getItem('ipl_akinator_theme') || 'stadium';
    applyTheme(savedTheme);

    const themeBtn = $id('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', () => { playClick(); showThemeModal(); });

    const welcomeThemeBtn = $id('welcome-theme-btn');
    if (welcomeThemeBtn) welcomeThemeBtn.addEventListener('click', () => { playClick(); showThemeModal(); });

    const closeThemeBtn = $id('close-theme-btn');
    if (closeThemeBtn) closeThemeBtn.addEventListener('click', () => { playClick(); hideThemeModal(); });

    const themeApplyBtn = $id('theme-apply-btn');
    if (themeApplyBtn) themeApplyBtn.addEventListener('click', () => { playClick(); hideThemeModal(); });

    document.querySelectorAll('.theme-card').forEach(card => {
      card.addEventListener('click', () => {
        playClick();
        applyTheme(card.dataset.setTheme);
      });
    });

    const themeModal = $id('theme-modal');
    if (themeModal) {
      themeModal.addEventListener('click', (e) => {
        if (e.target === themeModal) hideThemeModal();
      });
    }

    // Rules Modal setup
    const rulesBtn = $id('rules-btn');
    if (rulesBtn) rulesBtn.addEventListener('click', () => { playClick(); showRulesModal(); });

    const welcomeRulesBtn = $id('welcome-rules-btn');
    if (welcomeRulesBtn) welcomeRulesBtn.addEventListener('click', () => { playClick(); showRulesModal(); });

    const closeRulesBtn = $id('close-rules-btn');
    if (closeRulesBtn) closeRulesBtn.addEventListener('click', () => { playClick(); hideRulesModal(); });

    const rulesGotItBtn = $id('rules-got-it-btn');
    if (rulesGotItBtn) {
      rulesGotItBtn.addEventListener('click', () => {
        playClick();
        hideRulesModal();
        startGame();
      });
    }

    const rulesModal = $id('rules-modal');
    if (rulesModal) {
      rulesModal.addEventListener('click', (e) => {
        if (e.target === rulesModal) hideRulesModal();
      });
    }

    // Sound Toggle setup
    updateSoundUI();
    document.querySelectorAll('.btn-sound-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSound();
      });
    });

    // Keyboard navigation & shortcuts
    document.addEventListener('keydown', (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      // Escape to close modals
      if (e.key === 'Escape') {
        const rulesModal = $id('rules-modal');
        const themeModal = $id('theme-modal');
        if (rulesModal && rulesModal.style.display !== 'none') {
          hideRulesModal();
          return;
        }
        if (themeModal && themeModal.style.display !== 'none') {
          hideThemeModal();
          return;
        }
      }

      // 'M' or 'm' toggles sound
      if (e.key === 'm' || e.key === 'M') {
        toggleSound();
        return;
      }

      // Welcome screen shortcuts
      if (screens.welcome && screens.welcome.classList.contains('active')) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playClick();
          startGame();
          return;
        }
      }

      // Gameplay / Question screen shortcuts
      if (screens.question && screens.question.classList.contains('active')) {
        if (isTyping) return;
        const key = e.key.toLowerCase();
        let chosenAnswer = null;

        if (key === '1' || key === 'y') chosenAnswer = 'yes';
        else if (key === '2') chosenAnswer = 'probably';
        else if (key === '3' || key === '?') chosenAnswer = 'dunno';
        else if (key === '4') chosenAnswer = 'probably_not';
        else if (key === '5' || key === 'n') chosenAnswer = 'no';

        if (chosenAnswer) {
          e.preventDefault();
          playClick();
          // Add brief tactile button flash
          const btn = document.querySelector(`.btn-answer[data-answer="${chosenAnswer}"]`);
          if (btn) {
            btn.style.transform = 'translateY(2px) scale(0.96)';
            setTimeout(() => { btn.style.transform = ''; }, 120);
          }
          handleAnswer(chosenAnswer);
          return;
        }
      }

      // Guess screen shortcuts
      if (screens.guess && screens.guess.classList.contains('active')) {
        const key = e.key.toLowerCase();
        if (key === 'y' || key === 'enter') {
          e.preventDefault();
          playClick();
          handleCorrectGuess();
          return;
        }
        if (key === 'n' || key === 'escape') {
          e.preventDefault();
          playClick();
          handleWrongGuess();
          return;
        }
      }

      // Result screen shortcuts
      if (screens.result && screens.result.classList.contains('active')) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playClick();
          resetGame();
          return;
        }
      }
    });
  }

  // ── Screen Management ──
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');

    // Float controls (Live Data badge, Floating Score Bar & Quick Controls) only on welcome screen
    const liveContainer = $id('live-data-container');
    const scoreBar = $id('score-bar');
    const quickControls = $id('quick-controls');
    if (name === 'welcome') {
      if (liveContainer && liveContainer.dataset.loaded === 'true') liveContainer.style.display = 'flex';
      if (scoreBar) scoreBar.style.display = 'flex';
      if (quickControls) quickControls.style.display = 'flex';
    } else {
      if (liveContainer) liveContainer.style.display = 'none';
      if (scoreBar) scoreBar.style.display = 'none';
      if (quickControls) quickControls.style.display = 'none';
    }
  }

  // ── Typewriter Effect ──
  function typeText(element, text, speed = 28) {
    return new Promise(resolve => {
      isTyping = true;
      element.textContent = '';
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      element.appendChild(cursor);
      let i = 0;
      function type() {
        if (i < text.length) {
          element.insertBefore(document.createTextNode(text[i]), cursor);
          i++;
          setTimeout(type, speed);
        } else {
          setTimeout(() => { cursor.remove(); isTyping = false; resolve(); }, 300);
        }
      }
      type();
    });
  }

  // ── AI Confidence ──
  function updateConfidence(ranked = getRankedPlayers()) {
    const display = getGuessConfidence(ranked);
    els.confidenceFill.style.width = display + '%';
    els.confidenceValue.textContent = display + '%';
    if (els.predictionConfidence) els.predictionConfidence.textContent = display + '%';
    // Color shifts as confidence grows
    if (display > 70) {
      els.confidenceFill.style.background = 'linear-gradient(90deg, var(--green), var(--gold))';
    } else if (display > 40) {
      els.confidenceFill.style.background = 'linear-gradient(90deg, var(--teal), var(--green))';
    } else {
      els.confidenceFill.style.background = 'linear-gradient(90deg, var(--teal), var(--green))';
    }
  }

  function getFlavorText() {
    const ratio = questionCount / MAX_QUESTIONS;
    let pool;
    if (ratio < 0.35) pool = FLAVOR_LINES.early;
    else if (ratio < 0.7) pool = FLAVOR_LINES.mid;
    else pool = FLAVOR_LINES.late;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ── Game Flow ──
  function startGame() {
    candidates = [...PLAYERS];
    askedQuestions.clear();
    answerHistory = [];
    rejectedGuesses.clear();
    questionCount = 0;
    guessAttempts = 0;
    currentGuessObj = null;
    initBayesianPriors();
    updateLikelyCandidates();
    els.scoreBar.style.display = 'flex';
    els.confidenceFill.style.width = '0%';
    els.confidenceValue.textContent = '0%';
    els.progressPercent.textContent = '0%';
    els.remainingCount.textContent = totalPlayerCount;
    renderPrediction(getRankedPlayers(), false);
    advanceGame();
  }

  function resetGame() {
    els.cinematicOverlay.classList.remove('active');
    els.revealSpotlight.classList.remove('active');
    showScreen('welcome');
    els.scoreBar.style.display = 'none';
  }

  // ── Question Selection (Shannon Entropy / Information Gain) ──
  function getBestQuestion(ranked = getRankedPlayers()) {
    let bestScore = -Infinity;
    let bestQuestion = null;

    if (ranked.length < 2) return null;

    for (let i = 0; i < QUESTIONS.length; i++) {
      if (askedQuestions.has(i)) continue;

      const q = QUESTIONS[i];
      let pYes = 0;

      for (const item of ranked) {
        if (q.test(item.player)) {
          pYes += item.prob;
        }
      }
      const pNo = 1.0 - pYes;

      // Skip non-informative splits
      if (pYes < 0.005 || pNo < 0.005) continue;

      // Shannon entropy of binary partition
      const entropy = -(pYes * Math.log2(pYes)) - (pNo * Math.log2(pNo));

      // Penalty against asking niche team/country questions too early
      let penalty = 0;
      if (q.type && (q.type === 'team' || q.type === 'country' || q.type === 'micro') && questionCount < 3) {
        penalty = 0.25;
      } else if (q.type && (q.type === 'team' || q.type === 'country') && questionCount < 5) {
        penalty = 0.10;
      }

      const score = entropy - penalty;

      if (score > bestScore) {
        bestScore = score;
        bestQuestion = i;
      }
    }

    return bestQuestion;
  }

  function advanceGame() {
    const ranked = getRankedPlayers();
    candidates = getLikelyCandidates(ranked);

    if (ranked.length === 0) {
      streak = 0;
      saveScores();
      showResult(false);
      return;
    }

    const top = ranked[0];
    const second = ranked[1];
    const topProb = top ? top.prob : 0;
    const secondProb = second ? second.prob : 0;
    const qIndex = getBestQuestion(ranked);

    // Confident guess condition:
    // 1. High posterior probability (>= 72%) AND clear lead over second place (>= 2.2x)
    // 2. Or only 1 plausible candidate remains
    // 3. Or max questions reached (20)
    // 4. Or no distinguishing question left
    const hasDominantLead = topProb >= 0.72 && topProb >= 2.2 * secondProb;
    const shouldGuess =
      hasDominantLead ||
      ranked.length === 1 ||
      questionCount >= MAX_QUESTIONS ||
      qIndex === null;

    if (shouldGuess) {
      makeGuess(ranked, getGuessConfidence(ranked));
      return;
    }

    askNextQuestion(qIndex, ranked);
  }

  function askNextQuestion(qIndex = getBestQuestion(), ranked = getRankedPlayers()) {
    if (qIndex === null) {
      makeGuess(ranked, getGuessConfidence(ranked));
      return;
    }

    questionCount++;
    askedQuestions.add(qIndex);
    showScreen('question');

    // Update progress
    const progress = Math.min((questionCount / MAX_QUESTIONS) * 100, 100);
    els.progressFill.style.width = progress + '%';
    els.progressPercent.textContent = Math.round(progress) + '%';
    els.questionNumber.textContent = questionCount;
    els.questionKicker.textContent = `QUESTION ${questionCount}`;
    els.remainingCount.textContent = candidates.length;
    updateConfidence(ranked);
    renderPrediction(ranked, false);

    // Show thinking animation
    els.questionCard.classList.add('ai-thinking');
    els.thinking.classList.add('show');
    els.questionContent.style.display = 'none';
    els.answerButtons.style.opacity = '0';
    els.answerButtons.style.pointerEvents = 'none';

    setTimeout(async () => {
      els.thinking.classList.remove('show');
      els.questionCard.classList.remove('ai-thinking');
      els.questionContent.style.display = 'block';
      els.questionContent.style.animation = 'none';
      void els.questionContent.offsetHeight;
      els.questionContent.style.animation = 'cardIn 0.4s ease';

      // Typewriter the question
      await typeText(els.questionText, QUESTIONS[qIndex].text, 22);

      // Show flavor text
      els.questionFlavor.textContent = getFlavorText();

      els.answerButtons.style.opacity = '1';
      els.answerButtons.style.pointerEvents = 'all';
    }, 900);

    window._currentQuestion = qIndex;
  }

  function handleAnswer(answer) {
    const qIndex = window._currentQuestion;
    if (qIndex === undefined || qIndex === null) return;

    const q = QUESTIONS[qIndex];
    const lk = ANSWER_LIKELIHOODS[answer] || ANSWER_LIKELIHOODS.dunno;

    // Bayesian probability update
    let sum = 0;
    for (const player of PLAYERS) {
      if (rejectedGuesses.has(player.name)) {
        playerProbabilities.set(player.name, 0);
        continue;
      }
      const currentProb = playerProbabilities.get(player.name) || 0;
      if (currentProb === 0) continue;

      const matches = q.test(player);
      const likelihood = matches ? lk.match : lk.miss;
      const newProb = currentProb * likelihood;
      playerProbabilities.set(player.name, newProb);
      sum += newProb;
    }

    // Re-normalize posterior distribution
    if (sum > 0) {
      for (const [name, prob] of playerProbabilities) {
        if (prob > 0) {
          playerProbabilities.set(name, prob / sum);
        }
      }
    }

    answerHistory.push({ qIndex, answer });
    window._currentQuestion = null;
    advanceGame();
  }

  // ── Guessing ──
  function getCandidateConfidence(ranked = getRankedPlayers()) {
    return getGuessConfidence(ranked);
  }

  function makeGuess(ranked = getRankedPlayers(), confidence = getGuessConfidence(ranked)) {
    const top = ranked[0];
    if (!top) {
      streak = 0;
      saveScores();
      showResult(false);
      return;
    }

    const guess = top.player;
    guessAttempts++;

    currentGuessObj = guess;
    currentGuessConfidence = confidence;

    // Calculate guess confidence
    els.guessConfidenceVal.textContent = currentGuessConfidence + '%';

    // Show guess screen with cinematic reveal
    els.guessTitle.textContent = `Is your player ${guess.name}?`;
    renderPlayerAvatar(els.playerAvatar, guess);
    els.playerName.textContent = guess.name;
    els.playerTeam.textContent = guess.team;
    els.playerRole.textContent = formatRole(guess.role);
    els.playerCountry.textContent = guess.country;
    els.remainingCount.textContent = `${candidates.length} likely players remaining`;
    updateConfidence(ranked);
    renderPrediction(ranked, true);
    els.playerCard.classList.remove('guess-card-exit');
    els.playerCard.style.animation = 'none';
    void els.playerCard.offsetHeight;
    els.playerCard.style.animation = '';

    // Cinematic sequence
    els.cinematicOverlay.classList.add('active');
    setTimeout(() => {
      els.revealSpotlight.classList.add('active');
      playRevealChime();
    }, 300);
    setTimeout(() => {
      showScreen('guess');
    }, 600);
  }

  function handleCorrectGuess() {
    wins++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    saveScores();
    showResult(true, false, currentGuessObj, currentGuessConfidence);
  }

  function handleWrongGuess() {
    if (currentGuessObj) {
      rejectedGuesses.add(currentGuessObj.name);
      playerProbabilities.set(currentGuessObj.name, 0);

      // Re-normalize remaining candidates
      let sum = 0;
      for (const [name, prob] of playerProbabilities) {
        if (!rejectedGuesses.has(name)) {
          sum += prob;
        }
      }
      if (sum > 0) {
        for (const [name, prob] of playerProbabilities) {
          if (!rejectedGuesses.has(name)) {
            playerProbabilities.set(name, prob / sum);
          } else {
            playerProbabilities.set(name, 0);
          }
        }
      }
    }

    els.cinematicOverlay.classList.remove('active');
    els.revealSpotlight.classList.remove('active');
    els.correctBtn.disabled = true;
    els.wrongBtn.disabled = true;
    els.playerCard.classList.add('guess-card-exit');

    setTimeout(() => {
      currentGuessObj = null;
      els.correctBtn.disabled = false;
      els.wrongBtn.disabled = false;
      if (guessAttempts >= 3) {
        streak = 0;
        saveScores();
        showResult(false);
        return;
      }
      advanceGame();
    }, 320);
  }

  function handleGiveUp() {
    wins++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    saveScores();

    let guess = null;
    let conf = 0;
    const ranked = getRankedPlayers();
    if (ranked.length > 0) {
      guess = ranked[0].player;
      conf = getGuessConfidence(ranked);
      renderPlayerAvatar(els.playerAvatar, guess);
      els.playerName.textContent = guess.name;
      els.playerTeam.textContent = guess.team;
      els.playerRole.textContent = formatRole(guess.role);
      els.playerCountry.textContent = guess.country;
    }

    showResult(true, true, guess, conf);
  }

  // ── Results ──
  function showResult(aiWon, gaveUp = false, guessObj = null, confidence = 0) {
    els.cinematicOverlay.classList.remove('active');
    els.revealSpotlight.classList.remove('active');

    if (aiWon && !gaveUp) {
      if (els.resultKicker) {
        els.resultKicker.innerHTML = '<span class="result-kicker-icon">🏆</span><span class="result-kicker-text">AI VICTORY</span>';
      }
      els.resultEmoji.style.display = 'none';
      els.resultPlayerCard.style.display = 'block';
      
      if (guessObj) {
        renderPlayerAvatar(els.resultPlayerAvatar, guessObj);
        els.resultPlayerName.textContent = guessObj.name;
        els.resultPlayerTeam.textContent = guessObj.team;
        els.resultPlayerRole.textContent = formatRole(guessObj.role);
        els.resultPlayerCountry.textContent = guessObj.country;
        els.resultGuessConfidenceVal.textContent = confidence + '%';
      }

      els.resultTitle.textContent = 'I Got It!';
      els.resultTitle.className = 'result-headline win';
      els.resultSubtitle.textContent = `Guessed in ${questionCount} questions! That's a sixer! 🏏🔥`;
      playCrowdRoar();
      launchConfetti();
    } else if (gaveUp) {
      if (els.resultKicker) {
        els.resultKicker.innerHTML = '<span class="result-kicker-icon">🎯</span><span class="result-kicker-text">MATCH CONCLUDED</span>';
      }
      els.resultEmoji.style.display = 'none';
      els.resultPlayerCard.style.display = 'block';
      
      if (guessObj) {
        renderPlayerAvatar(els.resultPlayerAvatar, guessObj);
        els.resultPlayerName.textContent = guessObj.name;
        els.resultPlayerTeam.textContent = guessObj.team;
        els.resultPlayerRole.textContent = formatRole(guessObj.role);
        els.resultPlayerCountry.textContent = guessObj.country;
        els.resultGuessConfidenceVal.textContent = confidence + '%';
      }

      els.resultTitle.textContent = 'Too Easy!';
      els.resultTitle.className = 'result-headline win';
      els.resultSubtitle.textContent = `I was going to guess that! Better luck stumping me next time. 🎯`;
    } else {
      if (els.resultKicker) {
        els.resultKicker.innerHTML = '<span class="result-kicker-icon">👑</span><span class="result-kicker-text">YOU OUTSMARTED THE AI</span>';
      }
      els.resultEmoji.style.display = 'block';
      els.resultPlayerCard.style.display = 'none';
      els.resultEmoji.textContent = '😅';
      els.resultTitle.textContent = 'You Stumped Me!';
      els.resultTitle.className = 'result-headline lose';
      els.resultSubtitle.textContent = `I couldn't guess your player in ${MAX_QUESTIONS} balls. You win this match! 🏏`;
    }

    els.statQuestions.textContent = questionCount;
    els.statWins.textContent = wins;
    els.statStreak.textContent = bestStreak;
    updateScoreDisplay();

    showScreen('result');
  }

  // ── Helpers ──
  function formatRole(role) {
    const map = {
      batsman: '🏏 Batsman',
      bowler: '🎳 Bowler',
      allrounder: '⚙️ All-rounder',
      wicketkeeper: '🧤 Wicketkeeper',
    };
    return map[role] || role;
  }

  function saveScores() {
    localStorage.setItem('ipl_akinator_wins', wins);
    localStorage.setItem('ipl_akinator_streak', streak);
    localStorage.setItem('ipl_akinator_best_streak', bestStreak);
  }

  function updateScoreDisplay() {
    if (els.winsDisplay) els.winsDisplay.textContent = wins;
    if (els.streakDisplay) els.streakDisplay.textContent = streak;
    const gameWins = $id('game-wins');
    const gameStreak = $id('game-streak');
    if (gameWins) gameWins.textContent = wins;
    if (gameStreak) gameStreak.textContent = streak;
  }

  // ── Particles ──
  function createParticles() {
    const container = $id('particles');
    if (!container) return;
    const colors = [
      'rgba(245, 197, 24, 0.8)',
      'rgba(251, 191, 36, 0.7)',
      'rgba(255, 255, 255, 0.9)',
      'rgba(0, 210, 211, 0.7)',
      'rgba(168, 85, 247, 0.7)',
      'rgba(255, 107, 53, 0.75)'
    ];
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 4 + 1.5;
      const col = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.background = col;
      p.style.boxShadow = `0 0 ${Math.round(size * 2.5)}px ${col}`;
      p.style.animationDuration = (Math.random() * 14 + 9) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      container.appendChild(p);
    }
  }

  // ── Confetti ──
  function launchConfetti() {
    const colors = ['#f5c518', '#6c3ce0', '#a855f7', '#00d2d3', '#ff6b35', '#22c55e', '#ef4444'];
    for (let i = 0; i < 80; i++) {
      const c = document.createElement('div');
      c.classList.add('confetti-piece');
      c.style.left = Math.random() * 100 + '%';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.width = (Math.random() * 10 + 5) + 'px';
      c.style.height = (Math.random() * 10 + 5) + 'px';
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      c.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      c.style.animationDelay = (Math.random() * 0.5) + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }
  }

  // ── Start ──
  document.addEventListener('DOMContentLoaded', init);
})();
