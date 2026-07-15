/* =====================================================================
   Wires CONFIG (config.js) into the page. No edits needed here —
   change config.js instead.
===================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Populate text from CONFIG ---------- */
  document.getElementById('cakeEyebrow').textContent = CONFIG.cakeEyebrow || 'A birthday, waiting for';
  document.getElementById('cakeName').textContent = CONFIG.girlfriendName;

  document.getElementById('heroEyebrow').textContent = CONFIG.heroEyebrow;
  document.getElementById('heroName').textContent = CONFIG.girlfriendName;
  document.getElementById('sealInstruction').textContent = CONFIG.heroInstruction;

  document.getElementById('letterOpening').textContent = `${CONFIG.letterOpening} ${CONFIG.girlfriendName},`;
  document.getElementById('letterBody').textContent = CONFIG.letterBody;
  document.getElementById('letterClosing').textContent = CONFIG.letterClosing;
  document.getElementById('letterSignature').textContent = CONFIG.yourName;

  document.getElementById('finaleHeadline').textContent = CONFIG.finaleHeadline;
  document.getElementById('finaleName').textContent = CONFIG.girlfriendName;
  document.getElementById('finaleMessage').textContent = CONFIG.finaleMessage;
  document.getElementById('finaleButton').textContent = CONFIG.finaleButtonLabel;
  document.getElementById('finaleHidden').textContent = CONFIG.finaleHidden;
  document.getElementById('finale').style.backgroundImage = `url('${CONFIG.finalePhoto}')`;
  document.title = `For ${CONFIG.girlfriendName}`;

  /* ---------- Build reason cards ---------- */
  const reasonsGrid = document.getElementById('reasonsGrid');
  CONFIG.reasons.forEach((reason) => {
    const card = document.createElement('div');
    card.className = 'reason-card';

    const numeral = document.createElement('div');
    numeral.className = 'reason-numeral';
    numeral.textContent = reason.numeral;

    const text = document.createElement('div');
    text.className = 'reason-text';
    text.textContent = reason.text;

    card.appendChild(numeral);
    card.appendChild(text);

    if (reason.photo){
      const veil = document.createElement('div');
      veil.className = 'reason-photo-veil';
      veil.innerHTML = `<img src="${reason.photo}" alt="">`;
      card.appendChild(veil);

      // tap-to-reveal on touch devices
      card.addEventListener('click', () => card.classList.toggle('tapped'));
    }

    reasonsGrid.appendChild(card);
  });

  /* ---------- Build gallery ---------- */
  const galleryWall = document.getElementById('galleryWall');
  CONFIG.gallery.forEach((item, i) => {
    const fig = document.createElement('figure');
    fig.className = 'polaroid';
    const rotation = (i % 2 === 0 ? -1 : 1) * (4 + (i * 2 % 6));
    fig.style.setProperty('--r', `${rotation}deg`);

    fig.innerHTML = `
      <img src="${item.src}" alt="${item.caption || ''}">
      <figcaption>${item.caption || ''}</figcaption>
    `;
    galleryWall.appendChild(fig);
  });

  /* ---------- Cake + candle: blow it out ---------- */
  const cakeSvg = document.getElementById('cakeSvg');
  const micButton = document.getElementById('micButton');
  const wishMessage = document.getElementById('wishMessage');
  const relightButton = document.getElementById('relightButton');
  cakeSvg.classList.add('blowable'); // tapping always works, mic or not

  let micStream = null;
  let micAudioContext = null;
  let listeningForBlow = false;

  function blowOutCandle(){
    if (cakeSvg.classList.contains('blown')) return;
    cakeSvg.classList.add('blown');
    wishMessage.textContent = CONFIG.wishGrantedMessage || 'Wish made. 🕯️';
    wishMessage.classList.add('visible');
    relightButton.style.display = 'inline-block';
    launchPetals(35);
    stopListeningForBlow();

    // Carry the site forward automatically once the wish is made.
    const nextSection = document.getElementById('hero');
    setTimeout(() => {
      if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
    }, 1600); // gives the wish message a moment to be read first
  }

  function relightCandle(){
    cakeSvg.classList.remove('blown');
    wishMessage.classList.remove('visible');
    relightButton.style.display = 'none';
  }

  function stopListeningForBlow(){
    listeningForBlow = false;
    if (micStream){
      micStream.getTracks().forEach(track => track.stop());
      micStream = null;
    }
    if (micAudioContext){
      micAudioContext.close();
      micAudioContext = null;
    }
  }

  async function enableMicBlow(){
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = micAudioContext.createMediaStreamSource(micStream);
      const analyser = micAudioContext.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);

      const data = new Uint8Array(analyser.frequencyBinCount);
      listeningForBlow = true;
      micButton.textContent = '🎤 listening... blow now!';
      micButton.disabled = true;

      let loudFrames = 0;
      function checkVolume(){
        if (!listeningForBlow) return;
        analyser.getByteTimeDomainData(data);
        // RMS of the waveform — a sustained blow reads as a loud,
        // low-frequency-dominant burst rather than a short spike.
        let sumSquares = 0;
        for (let i = 0; i < data.length; i++){
          const centered = (data[i] - 128) / 128;
          sumSquares += centered * centered;
        }
        const rms = Math.sqrt(sumSquares / data.length);

        if (rms > 0.18){
          loudFrames++;
          if (loudFrames > 4){ // sustained, not just a click/pop
            blowOutCandle();
            return;
          }
        } else {
          loudFrames = 0;
        }
        requestAnimationFrame(checkVolume);
      }
      checkVolume();
    } catch (err){
      micButton.textContent = "🎤 mic unavailable — tap the flame instead";
      micButton.disabled = true;
    }
  }

  micButton.addEventListener('click', enableMicBlow);
  cakeSvg.addEventListener('click', blowOutCandle);
  relightButton.addEventListener('click', relightCandle);

  /* ---------- Background music ---------- */
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  const musicLabel = document.getElementById('musicLabel');
  const iconPlay = musicToggle.querySelector('.icon-play');
  const iconPause = musicToggle.querySelector('.icon-pause');

  bgMusic.src = CONFIG.musicSrc;
  bgMusic.volume = 0.5;
  bgMusic.loop = true; // keeps playing continuously once started
  musicLabel.textContent = CONFIG.musicLabel;

  let musicPlaying = false;

  function markPlaying(){
    musicPlaying = true;
    musicToggle.classList.add('playing');
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
    musicToggle.setAttribute('aria-label', 'Pause background music');
  }

  function markPaused(){
    musicPlaying = false;
    musicToggle.classList.remove('playing');
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
    musicToggle.setAttribute('aria-label', 'Play background music');
  }

  function tryStartMusic(){
    if (musicPlaying) return;
    bgMusic.play().then(markPlaying).catch(() => {
      // Blocked (or CONFIG.musicSrc doesn't point to a real file yet) —
      // the fallback listeners below will retry on first interaction.
    });
  }

  // 1) Try to autoplay the instant the page loads.
  tryStartMusic();

  // 2) Browsers block autoplay-with-sound until the visitor interacts
  //    with the page — so retry on the very first click/scroll/key
  //    anywhere, not just the music button. This fires once and
  //    removes itself as soon as playback actually starts.
  const firstInteractionEvents = ['click', 'keydown', 'touchstart', 'scroll'];
  function onFirstInteraction(){
    tryStartMusic();
    if (musicPlaying || !bgMusic.paused){
      firstInteractionEvents.forEach(evt =>
        document.removeEventListener(evt, onFirstInteraction)
      );
    }
  }
  firstInteractionEvents.forEach(evt =>
    document.addEventListener(evt, onFirstInteraction, { once: false, passive: true })
  );

  musicToggle.addEventListener('click', () => {
    if (!musicPlaying){
      bgMusic.play().then(markPlaying).catch(() => {
        musicLabel.textContent = 'add a song in config.js';
      });
    } else {
      bgMusic.pause();
      markPaused();
    }
  });

  bgMusic.addEventListener('play', markPlaying);
  bgMusic.addEventListener('pause', () => { if (musicPlaying) markPaused(); });

  /* ---------- Continuous ambient floating hearts ---------- */
  function spawnAmbientHeart(){
    const heart = document.createElement('div');
    heart.className = 'ambient-heart';
    heart.textContent = Math.random() > 0.5 ? '♥' : '❤';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    heart.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
    const duration = 8 + Math.random() * 8;
    heart.style.animationDuration = `${duration}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }
  setInterval(spawnAmbientHeart, 900);
  for (let i = 0; i < 4; i++){ setTimeout(spawnAmbientHeart, i * 300); } // a few right away

  /* ---------- Ambient glow follows cursor ---------- */
  const glow = document.getElementById('glow');
  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });

  /* ---------- Break the seal ---------- */
  const hero = document.getElementById('hero');
  const sealButton = document.getElementById('sealButton');
  sealButton.addEventListener('click', () => {
    if (hero.classList.contains('opened')) return;
    hero.classList.add('opened');
    launchPetals(40); // little burst at the seal-break moment
  });

  /* ---------- Reveal-on-scroll ---------- */
  const revealTargets = document.querySelectorAll('.letter-card, .reason-card, .polaroid');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  revealTargets.forEach((el) => observer.observe(el));

  /* ---------- Finale button ---------- */
  const finaleButton = document.getElementById('finaleButton');
  const finaleHidden = document.getElementById('finaleHidden');
  finaleButton.addEventListener('click', () => {
    finaleHidden.classList.add('visible');
    launchPetals(70);
  });
});

/* =====================================================================
   Falling petals / hearts — canvas confetti, lightweight, no libraries
===================================================================== */
const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function launchPetals(count){
  for (let i = 0; i < count; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      size: 6 + Math.random() * 10,
      speedY: 1 + Math.random() * 2,
      speedX: (Math.random() - 0.5) * 1.5,
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 4,
      color: Math.random() > 0.5 ? '#ff6f91' : '#c81d43',
      life: 0
    });
  }
  if (!animating){ animating = true; animate(); }
}

let animating = false;
function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.y += p.speedY;
    p.x += p.speedX + Math.sin(p.y * 0.02);
    p.rotation += p.spin;
    p.life++;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    // simple petal / heart-ish teardrop shape
    ctx.moveTo(0, -p.size / 2);
    ctx.quadraticCurveTo(p.size / 2, -p.size / 2, 0, p.size / 2);
    ctx.quadraticCurveTo(-p.size / 2, -p.size / 2, 0, -p.size / 2);
    ctx.fill();
    ctx.restore();
  });

  particles = particles.filter((p) => p.y < canvas.height + 40);

  if (particles.length > 0){
    requestAnimationFrame(animate);
  } else {
    animating = false;
  }
}