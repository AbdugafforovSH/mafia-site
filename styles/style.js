window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.padding = '15px 8%';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.padding = '20px 8%';
    }
});

const cards = document.querySelectorAll('.role-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
document.addEventListener("DOMContentLoaded", function() {
    // 1. Hamburger Menu (Ochish/Yopish)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // 2. Scroll Reveal (Elementlarni chiqarish)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = revealElements[i].getBoundingClientRect().top;
            let elementVisible = 100; // Element qancha masofadan keyin ko'rinsin

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('reveal-visible');
            }
        }
    };

    // Sahifa yuklanganda bir marta tekshirish (ekrandagi narsalar chiqishi uchun)
    revealOnScroll();
    
    // Skroll bo'lganda tekshirish
    window.addEventListener('scroll', revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const menuList = document.getElementById('menu-list');

    // 1. Hamburger menyu toggle (ochish/yopish)
    if (hamburger && menuList) {
        hamburger.addEventListener('click', () => {
            menuList.classList.toggle('show'); // 'active' o'rniga 'show' ishlatsak ham bo'ladi
            hamburger.classList.toggle('toggle');
        });
    }

    // 2. Bo'lim tanlanganda menyuni yopish va silliq o'tish
    const navLinks = document.querySelectorAll('#menu-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Faqat ichki linklar (#) uchun ishlaydi
            if (link.getAttribute('href').startsWith('#')) {
                // Mobil menyuni yopish
                menuList.classList.remove('show');
                hamburger.classList.remove('toggle');
            }
        });
    });
});