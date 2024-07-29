document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust the offset for the fixed header
                behavior: 'smooth'
            });
        });
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && window.innerWidth < 769) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });

    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerWidth < 769) {
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                document.body.classList.add('scrolling-down');
                navToggle.style.display = 'none';
                navMenu.classList.remove('show');
                navToggle.classList.remove('active');
            } else {
                document.body.classList.remove('scrolling-down');
                navToggle.style.display = 'block';
            }
        }
        lastScrollTop = scrollTop;
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 769) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
            // Remove any inline styles that might have been added
            navMenu.querySelectorAll('li a').forEach(link => {
                link.style.removeProperty('all');
            });
        }
    });
});
