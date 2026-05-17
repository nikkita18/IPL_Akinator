// ===== IPL Akinator — Game Engine (Cinematic UI/UX Edition) =====

(function () {
  'use strict';

  // ── Questions bank ──
  const QUESTIONS = [
    { text: "Is the player Indian?", test: p => !p.overseas },
    { text: "Is the player an overseas (non-Indian) player?", test: p => p.overseas },
    { text: "Is the player primarily a batsman?", test: p => p.role === "batsman" },
    { text: "Is the player primarily a bowler?", test: p => p.role === "bowler" },
    { text: "Is the player an all-rounder?", test: p => p.role === "allrounder" },
    { text: "Is the player a wicketkeeper?", test: p => p.role === "wicketkeeper" },
    { text: "Does the player bat right-handed?", test: p => p.battingHand === "right" },
    { text: "Does the player bat left-handed?", test: p => p.battingHand === "left" },
    { text: "Does the player bowl pace / fast?", test: p => p.bowlingType === "fast" },
    { text: "Does the player bowl spin?", test: p => p.bowlingType === "spin" },
    { text: "Is the player a non-bowler (doesn't bowl)?", test: p => p.bowlingType === "none" },
    { text: "Has the player captained an IPL team?", test: p => p.isCaptain },
    { text: "Has the player won the IPL trophy?", test: p => p.hasWonIPL },
    { text: "Did the player debut in IPL before 2015?", test: p => p.debutBefore2015 },
    { text: "Is the player over 30 years old?", test: p => p.isOver30 },
    { text: "Is the player under 25 years old?", test: p => p.isUnder25 },
    { text: "Has the player won the Orange Cap?", test: p => p.orangeCap },
    { text: "Has the player won the Purple Cap?", test: p => p.purpleCap },
    { text: "Has the player retired from the IPL?", test: p => p.isRetired },
    // Team-specific questions
    { text: "Is the player associated with Chennai Super Kings (CSK)?", test: p => p.team === "CSK" },
    { text: "Is the player associated with Mumbai Indians (MI)?", test: p => p.team === "MI" },
    { text: "Is the player associated with Royal Challengers Bengaluru (RCB)?", test: p => p.team === "RCB" },
    { text: "Is the player associated with Kolkata Knight Riders (KKR)?", test: p => p.team === "KKR" },
    { text: "Is the player associated with Delhi Capitals (DC)?", test: p => p.team === "DC" },
    { text: "Is the player associated with Rajasthan Royals (RR)?", test: p => p.team === "RR" },
    { text: "Is the player associated with Sunrisers Hyderabad (SRH)?", test: p => p.team === "SRH" },
    { text: "Is the player associated with Punjab Kings (PBKS)?", test: p => p.team === "PBKS" },
    { text: "Is the player associated with Gujarat Titans (GT)?", test: p => p.team === "GT" },
    { text: "Is the player associated with Lucknow Super Giants (LSG)?", test: p => p.team === "LSG" },
    // Country-specific
    { text: "Is the player from Australia?", test: p => p.country === "Australia" },
    { text: "Is the player from England?", test: p => p.country === "England" },
    { text: "Is the player from South Africa?", test: p => p.country === "South Africa" },
    { text: "Is the player from the West Indies?", test: p => p.country === "West Indies" },
    { text: "Is the player from New Zealand?", test: p => p.country === "New Zealand" },
    { text: "Is the player from Sri Lanka?", test: p => p.country === "Sri Lanka" },
    { text: "Is the player from Bangladesh?", test: p => p.country === "Bangladesh" },
    { text: "Is the player from Afghanistan?", test: p => p.country === "Afghanistan" },
    { text: "Is the player from Zimbabwe?", test: p => p.country === "Zimbabwe" },
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
  const MAX_QUESTIONS = 20;
  const DIRECT_GUESS_CANDIDATE_LIMIT = 8;
  const MIN_DIRECT_GUESS_CONFIDENCE = 35;
  const SCORE_WINDOW = 4;
  const QUESTION_POOL_LIMIT = 60;
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
  };

  const PLAYER_IMAGE_EXTENSIONS = ['jpg', 'png', 'webp', 'gif'];

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
        img.src = `image/${slug}.${PLAYER_IMAGE_EXTENSIONS[index]}`;
        return;
      }

      container.classList.remove('has-image');
      container.textContent = player.emoji || '🏏';
    };

    img.onload = () => {
      container.classList.add('has-image');
    };

    img.src = `image/${slug}.${PLAYER_IMAGE_EXTENSIONS[index]}`;
    container.appendChild(img);
  }

  function renderPrediction(ranked = getRankedPlayers(), reveal = false) {
    if (!els.predictionAvatar) return;

    const confidence = getGuessConfidence(ranked);
    els.predictionConfidence.textContent = confidence + '%';

    if (!ranked.length) {
      els.predictionAvatar.textContent = '?';
      els.predictionAvatar.classList.add('prediction-unknown');
      els.predictionName.textContent = 'No clear lead';
      els.predictionNote.textContent = 'Your answers have ruled out every known player.';
      return;
    }

    const player = ranked[0].player;
    if (reveal) {
      renderPlayerAvatar(els.predictionAvatar, player);
      els.predictionName.textContent = player.name;
      els.predictionNote.textContent = 'This is my best direct guess.';
    } else {
      els.predictionAvatar.textContent = '?';
      els.predictionAvatar.classList.remove('has-image');
      els.predictionAvatar.classList.add('prediction-unknown');
      els.predictionName.textContent = confidence >= 70 ? 'Strong lead' : 'Analyzing...';
      els.predictionNote.textContent = "Keep answering, I'm getting closer!";
    }
  }

  // ── Sound Effects (Web Audio API) ──
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let audioCtx;
  function ensureAudio() { if (!audioCtx) audioCtx = new AudioCtx(); }

  function playClick() {
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

  // ── Adaptive Player Scoring ──
  const ANSWER_WEIGHTS = {
    yes: { match: 2.4, miss: -3 },
    probably: { match: 1.25, miss: -0.75 },
    dunno: { match: 0, miss: 0 },
    probably_not: { match: -0.75, miss: 1.25 },
    no: { match: -3, miss: 2.4 },
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function scorePlayer(player) {
    if (rejectedGuesses.has(player.name)) {
      return -Infinity;
    }

    return answerHistory.reduce((score, item) => {
      const q = QUESTIONS[item.qIndex];
      const weights = ANSWER_WEIGHTS[item.answer] || ANSWER_WEIGHTS.dunno;
      return score + (q.test(player) ? weights.match : weights.miss);
    }, 0);
  }

  function getRankedPlayers() {
    return PLAYERS
      .map(player => ({ player, score: scorePlayer(player) }))
      .filter(item => Number.isFinite(item.score))
      .sort((a, b) => b.score - a.score);
  }

  function getLikelyCandidates(ranked = getRankedPlayers()) {
    if (ranked.length === 0) return [];

    const topScore = ranked[0].score;
    const close = ranked.filter(item => item.score >= topScore - SCORE_WINDOW);
    const minimum = ranked.slice(0, Math.min(DIRECT_GUESS_CANDIDATE_LIMIT, ranked.length));
    const merged = [...close, ...minimum];
    const unique = new Map();

    merged.forEach(item => {
      if (!unique.has(item.player.name)) {
        unique.set(item.player.name, item.player);
      }
    });

    return [...unique.values()];
  }

  function getQuestionPool(ranked = getRankedPlayers()) {
    if (ranked.length === 0) return [];

    const topScore = ranked[0].score;
    const close = ranked.filter(item => item.score >= topScore - SCORE_WINDOW);
    const pool = close.length >= 4 ? close : ranked;
    return pool.slice(0, Math.min(QUESTION_POOL_LIMIT, pool.length));
  }

  function updateLikelyCandidates() {
    candidates = getLikelyCandidates();
  }

  function getGuessConfidence(ranked = getRankedPlayers()) {
    if (ranked.length === 0) return 0;

    const likelyCount = getLikelyCandidates(ranked).length;
    const top = ranked[0].score;
    const second = ranked[1]?.score ?? top - SCORE_WINDOW;
    const scoreGap = Math.max(0, top - second);
    const reduction = (1 - likelyCount / totalPlayerCount) * 45;
    const evidence = Math.min(24, answerHistory.length * 2);
    const separation = Math.min(30, scoreGap * 8);

    return clamp(Math.round(18 + reduction + evidence + separation), 1, 99);
  }

  // ── Live Data Override System ──
  async function loadLiveData() {
    try {
      const response = await fetch('updates.json?v=' + new Date().getTime());
      if (!response.ok) throw new Error('Live data not found');
      const liveData = await response.json();
      
      // Update UI indicator
      if (els.liveDataContainer && els.liveDataInfo) {
        els.liveDataContainer.style.display = 'flex';
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

  // ── Initialization ──
  async function init() {
    await loadLiveData();
    
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
  }

  // ── Screen Management ──
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
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

  // ── Question Selection (Information Gain / Entropy) ──
  function getBestQuestion(ranked = getRankedPlayers()) {
    let bestScore = -Infinity;
    let bestQuestion = null;
    const pool = getQuestionPool(ranked);
    const n = pool.length;

    if (n < 2) return null;

    const topScore = ranked[0]?.score ?? 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
      if (askedQuestions.has(i)) continue;

      const q = QUESTIONS[i];
      let yesCount = 0;
      let yesWeight = 0;
      let noWeight = 0;

      for (const item of pool) {
        const weight = 0.2 + Math.exp((item.score - topScore) / 4);
        if (q.test(item.player)) {
          yesCount++;
          yesWeight += weight;
        } else {
          noWeight += weight;
        }
      }
      const noCount = n - yesCount;

      if (yesCount === 0 || noCount === 0) continue;

      const totalWeight = yesWeight + noWeight;
      const p = yesWeight / totalWeight;
      const entropy = -(p * Math.log2(p)) - ((1 - p) * Math.log2(1 - p));
      
      let penalty = 0;
      // Penalize narrow team/country questions while the pool is still broad.
      if (i >= 19 && n > 15) penalty = 0.05;
      
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

    const qIndex = getBestQuestion(ranked);
    const confidence = getGuessConfidence(ranked);
    const shouldGuess =
      candidates.length <= DIRECT_GUESS_CANDIDATE_LIMIT ||
      confidence >= 82 ||
      questionCount >= MAX_QUESTIONS ||
      qIndex === null;

    if (shouldGuess) {
      makeGuess(ranked, confidence);
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

    const qIndex = getBestQuestion(ranked);
    if (confidence < MIN_DIRECT_GUESS_CONFIDENCE && qIndex !== null && questionCount < MAX_QUESTIONS) {
      askNextQuestion(qIndex, ranked);
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
      els.resultTitle.className = 'win';
      els.resultSubtitle.textContent = `Guessed in ${questionCount} questions! That's a sixer! 🏏🔥`;
      playCrowdRoar();
      launchConfetti();
    } else if (gaveUp) {
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
      els.resultTitle.className = 'win';
      els.resultSubtitle.textContent = `I was going to guess that! Better luck stumping me next time. 🎯`;
    } else {
      els.resultEmoji.style.display = 'block';
      els.resultPlayerCard.style.display = 'none';
      els.resultEmoji.textContent = '😅';
      els.resultTitle.textContent = 'You Stumped Me!';
      els.resultTitle.className = 'lose';
      els.resultSubtitle.textContent = `I couldn't guess your player. You win this round! 🏏`;
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
    els.winsDisplay.textContent = wins;
    els.streakDisplay.textContent = streak;
  }

  // ── Particles ──
  function createParticles() {
    const container = $id('particles');
    const colors = ['#6c3ce0', '#a855f7', '#f5c518', '#00d2d3', '#ff6b35'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 5 + 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 20) + 's';
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
