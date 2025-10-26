/* ==================== SHOW/HIDE MOBILE MENU ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// Function to show the menu
const showMenu = () => {
    navMenu.classList.add('show-menu');
    navToggle.innerHTML = '<i class="bx bx-x"></i>'; // Change icon to 'X'
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
};

// Function to hide the menu
const hideMenu = () => {
    navMenu.classList.remove('show-menu');
    navToggle.innerHTML = '<i class="bx bx-menu"></i>'; // Change icon back to 'menu'
    document.body.style.overflow = ''; // Restore scrolling
};

// Ensure menu is completely hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    // Force hide the menu on page load
    hideMenu();
    
    // Add a small delay to ensure CSS transitions work properly
    setTimeout(() => {
        navMenu.style.transition = 'top 0.4s ease-in-out, opacity 0.4s ease-in-out, visibility 0.4s ease-in-out';
    }, 100);
});

// Toggle menu on click
if (navToggle) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        if (navMenu.classList.contains('show-menu')) {
            hideMenu();
        } else {
            showMenu();
        }
    });
}

// Hide menu when a nav link is clicked (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only hide menu on mobile view
        if (window.innerWidth <= 768) {
            hideMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        navMenu.classList.contains('show-menu') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        hideMenu();
    }
});

// Close menu on window resize if it becomes desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hideMenu();
    }
});

/* ==================== ACTIVE LINK ON SCROLL ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // Adjusted sectionTop to account for header height
        const sectionTop = current.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) - 20; 
        const sectionId = current.getAttribute('id');

        const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        
        if (link) { 
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ==================== HEADER SHADOW ON SCROLL ==================== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* ==================== SCROLL UP BUTTON ==================== */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* ==================== SCROLL REVEAL ANIMATION ==================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
    reset: true // Animations repeat on scroll up
});

// Home section elements
sr.reveal('.home-content h1', {delay: 200});
sr.reveal('.home-content h3', {delay: 300});
sr.reveal('.home-content p', {delay: 400});
sr.reveal('.home-social', {delay: 500, origin: 'left', distance: '30px'});
sr.reveal('.home-buttons', {delay: 600, origin: 'bottom', distance: '30px'});
sr.reveal('.home-image img', {delay: 700, origin: 'right', distance: '60px', easing: 'cubic-bezier(0.5, 0, 0, 1)'});

// General section titles and subtitles
sr.reveal('.section-title', {delay: 100, origin: 'top'});
sr.reveal('.section-subtitle', {delay: 200, origin: 'top'});

// About section
sr.reveal('.about-text', {delay: 300, origin: 'left'});
sr.reveal('.about-card', {interval: 100, delay: 400, origin: 'right'}); // Stagger cards

// Skills section
sr.reveal('.skill-card', {interval: 100, delay: 200, origin: 'bottom'}); // Stagger skills

// Experience section
sr.reveal('.experience-card', {delay: 200, origin: 'bottom'});

// Projects section
sr.reveal('.project-card', {interval: 100, delay: 200, origin: 'bottom'}); // Stagger projects

// Contact section
sr.reveal('.contact-info', {delay: 200, origin: 'left'});
sr.reveal('.contact-form', {delay: 300, origin: 'right'});

/* ==================== 654321` ==================== */

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value
    }

    emailjs.send("service_0oi83t5","template_50py4mq",params).then(alert("Success! Thank you for contacting me."))
}
