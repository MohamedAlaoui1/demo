// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50 
        ? 'rgba(10, 10, 10, 0.95)' 
        : 'linear-gradient(to bottom, #0A0A0A, transparent)';
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10, 10, 10, 0.98)';
    navLinks.style.padding = '24px';
    navLinks.style.gap = '24px';
});

// Smooth reveal on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Vinyl pause on hover
const vinyl = document.querySelector('.vinyl');
vinyl?.addEventListener('mouseenter', () => vinyl.style.animationPlayState = 'paused');
vinyl?.addEventListener('mouseleave', () => vinyl.style.animationPlayState = 'running');

// Form submission
const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Mohamed will get back to you soon. 🎧');
    form.reset();
});

// Play button interaction
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🎵 Mix player coming soon! Follow on SoundCloud for now.');
    });
});