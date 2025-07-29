// CARROSSEL
const track = document.getElementById("carouselTrack");
const slides = Array.from(track.children);
const dotsContainer = document.getElementById("carouselDots");
let current = 0;
const AUTOPLAY_DELAY = 6000;
let autoplayTimer = null;

function updateCarousel() {
  track.style.transform = `translateX(-${current * 100}%)`;
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

function goToSlide(idx) {
  current = (idx + slides.length) % slides.length;
  updateCarousel();
  resetAutoplay();
}

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = i === 0 ? "active" : "";
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});
updateCarousel();

document.getElementById("carouselPrev").onclick = () => goToSlide(current - 1);
document.getElementById("carouselNext").onclick = () => goToSlide(current + 1);

function autoplay() {
  autoplayTimer = setTimeout(() => {
    goToSlide(current + 1);
  }, AUTOPLAY_DELAY);
}

function resetAutoplay() {
  if (autoplayTimer) clearTimeout(autoplayTimer);
  autoplay();
}

autoplay();
