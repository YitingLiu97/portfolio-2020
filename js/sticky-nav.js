document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarOffset = navbar.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});