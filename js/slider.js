const slider      = document.querySelector('.testimonials');
const testimonials = document.querySelectorAll('.testimonial');
const dots         = document.querySelectorAll('.dot');

let current = 0;
let timerId = null;
let isAnimating = false;
const AUTOPLAY_MS = 5000;   // авто-перемикання
const RELAUNCH_MS = 7000;   // пауза після взаємодії

function showSlide(index) {
  if (isAnimating) return;      // антидребезг
  isAnimating = true;

  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });

  current = index;
  // розблокувати кліки після завершення CSS-анімації (~800ms)
  setTimeout(() => { isAnimating = false; }, 850);
}

function nextSlide() {
  showSlide((current + 1) % testimonials.length);
}

function startAutoplay(delay = AUTOPLAY_MS) {
  stopAutoplay();
  timerId = setInterval(nextSlide, delay);
}

function stopAutoplay() {
  if (timerId) { clearInterval(timerId); timerId = null; }
}

function resetAutoplay() {
  // не стартуємо зразу після кліку — даємо користувачу спокій
  stopAutoplay();
  setTimeout(() => startAutoplay(), RELAUNCH_MS);
}

// --- керування крапками ---
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoplay();          // пауза при ручному виборі
    showSlide(index);
    resetAutoplay();         // перезапуск через паузу
  });
});

// --- пауза при наведенні/тачі/фокусі ---
['mouseenter','focusin','touchstart'].forEach(ev =>
  slider.addEventListener(ev, stopAutoplay, {passive:true})
);
['mouseleave','focusout','touchend','touchcancel'].forEach(ev =>
  slider.addEventListener(ev, resetAutoplay, {passive:true})
);

// старт
startAutoplay();