document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and navigation list
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    // Toggle mobile menu
    function toggleMenu() {
        // Toggle active class on hamburger and nav list
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        
        // Animate nav links
        if (navList.classList.contains('active')) {
            navLinks.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.1}s`;
            });
        } else {
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    }

    // Add click event to hamburger
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navList.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInsideNav && navList.classList.contains('active')) {
            toggleMenu();
        }
    });
});
