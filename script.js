document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });
});

function sendMail(event) {
    event.preventDefault();
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_p68nv4v", "template_0aq66b5", params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email Sent!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
}