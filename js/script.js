let slideIndex = 0;

function showSlides(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}

function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll(".slide");
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(sliderId);
}

function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll(".slide");
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides(sliderId);
}

// Initialize both sliders
document.addEventListener("DOMContentLoaded", () => {
    showSlides("bookSlider");
    showSlides("testimonialSlider");
});
