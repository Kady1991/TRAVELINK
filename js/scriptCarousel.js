
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const numSlides = slides.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % numSlides;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 3000); // Change de diapositive toutes les 3 secondes (ajustez la durée selon vos préférences)
});
