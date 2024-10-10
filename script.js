let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let interval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function startInterval() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, intervalTime);
}

function stopInterval() {
    clearInterval(interval);
}

function prevSlide() {
    stopInterval();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    startInterval();
}

function nextSlide() {
    stopInterval();
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    startInterval();
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        stopInterval();
        currentIndex = i;
        showSlide(currentIndex);
        startInterval();
    });
});

const intervalTime = 4200;
startInterval();
showSlide(currentIndex);
