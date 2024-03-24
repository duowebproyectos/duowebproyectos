var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
document.addEventListener("DOMContentLoaded", function() {
    const fadeElems = document.querySelectorAll('.fade-in');

    const fadeOptions = {
        threshold: 0.5,
    };

    const fadeOnScroll = new IntersectionObserver(function(entries, fadeOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                fadeOnScroll.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    fadeElems.forEach(fadeElem => {
        fadeOnScroll.observe(fadeElem);
    });
});
