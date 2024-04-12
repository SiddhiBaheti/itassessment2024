document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});


document.querySelector('.slider').addEventListener('click', function(event) {
    if (event.target.matches('.slide-button')) {
        window.location.href = 'gallery.html';
    }
});