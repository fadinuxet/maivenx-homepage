// Simple working navigation script for mAIvenX™ homepage
console.log('mAIvenX™ homepage script loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
        console.log('AOS initialized');
    }
    
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Mobile menu toggled');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            console.log('Clicking link:', targetId);
            console.log('Target element found:', !!targetElement);
            
            if (targetElement) {
                // Calculate position accounting for fixed navbar
                const navbarHeight = 80;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                console.log('Scrolling to position:', targetPosition);
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            } else {
                console.error('Target element not found:', targetId);
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted');
            alert('Thank you! We\'ll get back to you soon.');
        });
    }
    
    console.log('All event listeners attached successfully');
});

// Test function for debugging
window.testNavigation = function() {
    console.log('Testing navigation...');
    const testLink = document.querySelector('a[href="#locations"]');
    if (testLink) {
        testLink.click();
    } else {
        console.error('Test link not found');
    }
};
