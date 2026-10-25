// ===================================
// Mobile Navigation Toggle
// ===================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===================================
// Navbar Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Contact Form Submission
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const productCategory = document.getElementById('productCategory').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate required fields
        if (!fullName || !phone || !productCategory || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Construct WhatsApp message
        let whatsappMessage = `Hello VADORA Supply Solutions,\n\n`;
        whatsappMessage += `*Name:* ${fullName}\n`;
        
        if (companyName) {
            whatsappMessage += `*Company:* ${companyName}\n`;
        }
        
        whatsappMessage += `*Contact Number:* ${phone}\n`;
        whatsappMessage += `*Product Category:* ${productCategory}\n\n`;
        whatsappMessage += `*Enquiry:*\n${message}`;
        
        // URL encode the message
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp URL with South African country code
        const whatsappURL = `https://wa.me/27761595942?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
        
        // Optional: Reset form after submission
        contactForm.reset();
    });
}

// ===================================
// Form Input Validation Feedback
// ===================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    // Add visual feedback on blur
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    });
    
    // Remove error styling on input
    input.addEventListener('input', () => {
        input.style.borderColor = '';
    });
});

// ===================================
// Smooth Scroll Behavior Enhancement
// ===================================

// Add smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            // Calculate offset for fixed navbar
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Footer Copyright Year
// ===================================

const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInElements = document.querySelectorAll('.product-card, .feature-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delay
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize fade-in animation
fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// ===================================
// WhatsApp Button Click Tracking
// ===================================

const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('WhatsApp enquiry button clicked:', button.textContent);
        // You can add analytics tracking here if needed
    });
});

// ===================================
// Keyboard Navigation Enhancement
// ===================================

// Trap focus in mobile menu when open
const focusableElements = 'a[href], button, textarea, input, select';

if (navMenu) {
    navMenu.addEventListener('keydown', (e) => {
        if (!navMenu.classList.contains('active')) return;
        
        const focusable = navMenu.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        
        // Tab key
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
        
        // Escape key closes menu
        if (e.key === 'Escape') {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            mobileMenuToggle.focus();
        }
    });
}

// ===================================
// Image Loading Optimization
// ===================================

// Add loading attribute to images if not already present
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});

// ===================================
// Handle Missing Images Gracefully
// ===================================

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Create a placeholder if image fails to load
        this.style.backgroundColor = '#e5e7eb';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = 'Image not available';
        
        // You can add a placeholder icon or text here
        console.log('Image failed to load:', this.src);
    });
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event if needed for performance
const debouncedScroll = debounce(() => {
    // Any additional scroll handlers can be added here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// Accessibility: Skip to Main Content
// ===================================

// Add skip to main content link for screen readers
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-to-content';
skipLink.textContent = 'Skip to main content';
document.body.insertBefore(skipLink, document.body.firstChild);

// ===================================
// Console Welcome Message
// ===================================

console.log('%cVADORA Supply Solutions', 'color: #10b981; font-size: 24px; font-weight: bold;');
console.log('%cReliable Supply. Smarter Solutions.', 'color: #f59e0b; font-size: 16px;');
console.log('Website loaded successfully. For enquiries, contact us on WhatsApp: 076 159 5942');
