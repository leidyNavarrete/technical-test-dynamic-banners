const CLICK_URL = "https://www.nike.com/co/";
const devMode =
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost";

const video = document.getElementById("adVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");
const cta = document.getElementById("cta");

const devToggle = document.getElementById("devToggle");
const devPanel = document.getElementById("devPanel");
const resetBtn = document.getElementById("resetMetrics");

const mPlay = document.getElementById("mPlay");
const mPause = document.getElementById("mPause");
const mMute = document.getElementById("mMute");
const mUnmute = document.getElementById("mUnmute");
const mTotal = document.getElementById("mTotal");

/* MÉTRICAS */
let metrics = JSON.parse(localStorage.getItem("nikeBannerMetrics")) || {
  play: 0,
  pause: 0,
  mute: 0,
  unmute: 0,
  total: 0
};

/* PREVENIR CLICK PROPAGATION */
[video, playPauseBtn, muteBtn, cta].forEach(el => {
  el.addEventListener("click", e => e.stopPropagation());
});

/* CTA */
cta.addEventListener("click", () => {
  window.open(CLICK_URL, "_blank");
});

/* PLAY / PAUSE */
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
});

/* MUTE */
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "Unmute" : "Mute";
});

/* TRACKING */
video.addEventListener("play", () => {
  metrics.play++;
  metrics.total++;
  track();
});

video.addEventListener("pause", () => {
  metrics.pause++;
  metrics.total++;
  track();
});

video.addEventListener("volumechange", () => {
  if (video.muted) metrics.mute++;
  else metrics.unmute++;
  metrics.total++;
  track();
});

function track() {
  localStorage.setItem("nikeBannerMetrics", JSON.stringify(metrics));
  if (devMode) updatePanel();
}

function updatePanel() {
  mPlay.textContent = metrics.play;
  mPause.textContent = metrics.pause;
  mMute.textContent = metrics.mute;
  mUnmute.textContent = metrics.unmute;
  mTotal.textContent = metrics.total;
}

/* DEV PANEL */
if (devMode) {
  devToggle.style.display = "block";
}

if (devToggle && devPanel) {
  devToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    devPanel.style.display =
      devPanel.style.display === "block" ? "none" : "block";
    updatePanel();
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    metrics = { play: 0, pause: 0, mute: 0, unmute: 0, total: 0 };
    localStorage.removeItem("nikeBannerMetrics");
    updatePanel();
  });
}



