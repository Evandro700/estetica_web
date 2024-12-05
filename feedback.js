const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselInner.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const width = carouselInner.children[currentIndex].offsetWidth;
    carouselInner.style.transform = `translateX(-${width * currentIndex}px)`;
}
