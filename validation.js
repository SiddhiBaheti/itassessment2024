// validation.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    validateForm(); // Call the validation function
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email === '') {
        alert('Please enter your email.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return false;
    }

    if (message === '') {
        alert('Please enter your message.');
        return false;
    }

    else{
        alert('Thank you for your message! Your message means a lot to us!');
    }


    // If all fields are valid, submit the form
    document.getElementById('contactForm').submit();
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
