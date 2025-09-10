document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
