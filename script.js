const video = document.getElementById("video");
const audio = document.getElementById("audio");

const toAudioBtn = document.getElementById("toAudio");
const finishBtn = document.getElementById("finish");

const videoSection = document.getElementById("videoSection");
const audioSection = document.getElementById("audioSection");
const finalSection = document.getElementById("finalSection");

// Show next button after video ends
video.addEventListener("ended", () => {
  toAudioBtn.classList.remove("hidden");
});

// Move to audio section
toAudioBtn.addEventListener("click", () => {
  videoSection.classList.remove("active");
  audioSection.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show finish button after audio ends
audio.addEventListener("ended", () => {
  finishBtn.classList.remove("hidden");
});

// Final message
finishBtn.addEventListener("click", () => {
  audioSection.classList.remove("active");
  finalSection.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
