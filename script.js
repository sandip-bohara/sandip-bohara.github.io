const video1 = document.getElementById("video");
const video2 = document.getElementById("video2");

const toVideo2Btn = document.getElementById("toVideo2");
const finishBtn = document.getElementById("finish");

const videoSection = document.getElementById("videoSection");
const video2Section = document.getElementById("video2Section");
const finalSection = document.getElementById("finalSection");

// Show next button after first video ends
video1.addEventListener("ended", () => {
  toVideo2Btn.classList.remove("hidden");
});

// Move to second video
toVideo2Btn.addEventListener("click", () => {
  videoSection.classList.remove("active");
  video2Section.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show finish button after second video ends
video2.addEventListener("ended", () => {
  finishBtn.classList.remove("hidden");
});

// Show final message
finishBtn.addEventListener("click", () => {
  video2.pause();
  video2Section.classList.remove("active");
  finalSection.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
