$(document).ready(function(){
    $('#book-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});

document.addEventListener("DOMContentLoaded", function () {
const counters = document.querySelectorAll(".count-up");
let hasAnimated = false; // To track if the counters have been animated

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

function handleScroll() {
    const introSection = document.querySelector('header'); // Select Section 1
    const section1Position = introSection.getBoundingClientRect().bottom; // Get bottom position of Section 1

    // Check if Section 1 has scrolled out of view
    if (section1Position < 0 && !hasAnimated) {
        hasAnimated = true; // Set the flag to true to avoid multiple animations

        counters.forEach(counter => {
            animateCountUp(counter);
        });
    }
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Check immediately in case the section is already in view
});

document.querySelectorAll('.accordion').forEach((accordion) => {
    const toggle = accordion.querySelector('.accordion-toggle');
    const content = accordion.querySelector('.accordion-content');
    const icon = accordion.querySelector('.icon');
  
    toggle.addEventListener('click', () => {
      const isExpanded = content.classList.contains('expanded');
  
      // Close all other accordions
      document.querySelectorAll('.accordion-content').forEach((c) => {
        c.style.maxHeight = null;
        c.classList.remove('expanded');
      });
      document.querySelectorAll('.icon').forEach((i) => {
        i.textContent = '+';
      });
      document.querySelectorAll('.accordion-toggle').forEach((t) => {
        t.classList.remove('text-indigo-500'); // Reset text color
      });
  
      // Expand/Collapse current accordion
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('expanded');
        icon.textContent = '-';
        toggle.classList.add('text-indigo-500'); // Apply text color to expanded item
      } else {
        content.style.maxHeight = null;
        content.classList.remove('expanded');
        icon.textContent = '+';
        toggle.classList.remove('text-indigo-500'); // Remove text color when collapsing
      }
    });
});
  