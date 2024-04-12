document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = 'none';
            dots[i].classList.remove('active');
        });
        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    function nextSlide() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }

    // Automatically change slide every 5 seconds
    setInterval(nextSlide, 3000);

    // Initially show the first slide
    showSlide(currentSlide);
});
document.querySelector('.slider').addEventListener('click', function(event) {
    if (event.target.matches('.slide-button')) {
        window.location.href = 'gallery.html';
    }
});