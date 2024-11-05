// animations.js

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[data-animate]");
    const counters = document.querySelectorAll(".count-up");
    let hasAnimatedCounters = false;

    // Counter animation function
    function animateCountUp(counter) {
        const target = +counter.getAttribute("data-target");
        const duration = 5000;
        const increment = target / (duration / 50);
        let count = 0;

        function updateCounter() {
            count += increment;
            if (count < target) {
                counter.textContent = `${Math.floor(count)}%`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = `${target}%`;
            }
        }

        updateCounter();
    }

    // IntersectionObserver callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'hidden' to show animations
                entry.target.querySelectorAll(".hidden").forEach(element => {
                    element.classList.remove("hidden");
                });
                
                // Start counter animation if in Data Results section
                if (entry.target.querySelector(".count-up") && !hasAnimatedCounters) {
                    counters.forEach(counter => animateCountUp(counter));
                    hasAnimatedCounters = true;
                }

                observer.unobserve(entry.target);
            }
        });
    }

    // Create IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3
    });

    // Observe each section
    sections.forEach(section => observer.observe(section));
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const overlay = document.getElementById("overlay");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        overlay.classList.toggle("hidden");
        mobileMenu.classList.toggle("translate-x-full");
    });

    overlay.addEventListener("click", function () {
        overlay.classList.add("hidden");
        mobileMenu.classList.add("translate-x-full");
    });
});