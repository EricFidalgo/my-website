document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerWidth < 769) {
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                header.classList.add('scrolling-down');
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    navToggle.classList.remove('active');
                }
            } else {
                header.classList.remove('scrolling-down');
            }
        }
        lastScrollTop = scrollTop;
    });

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 769) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
            header.classList.remove('scrolling-down');
        }
    });
});