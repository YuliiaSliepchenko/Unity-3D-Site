/**
 * Main JavaScript functionality for ItEnAi 3D Blender course landing page
 */

// Mobile menu functionality
let isMobileMenuOpen = false;

/**
 * Toggles mobile menu visibility
 */
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburgerLines = document.querySelectorAll('.hamburger');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileNav.classList.add('active');
        // Animate hamburger to X
        hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburgerLines[1].style.opacity = '0';
        hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        mobileNav.classList.remove('active');
        // Reset hamburger
        hamburgerLines[0].style.transform = 'none';
        hamburgerLines[1].style.opacity = '1';
        hamburgerLines[2].style.transform = 'none';
    }
}

/**
 * Closes mobile menu
 */
function closeMobileMenu() {
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

/**
 * Smooth scrolling to section
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Handles contact form submission
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        age: formData.get('age'),
        plan: formData.get('plan')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.age) {
        alert('Будь ласка, заповніть всі обов\'язкові поля');
        return;
    }
    
    if (data.age < 9 || data.age > 18) {
        alert('Вік дитини має бути від 9 до 18 років');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Відправляємо...';
    
    // Simulate API call
    setTimeout(() => {
        alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.');
        event.target.reset();
        
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 2000);
    
    console.log('Form submitted:', data);
}

/**
 * Handles smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    // Handle navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            closeMobileMenu();
        });
    });
}

/**
 * Handles scroll-based animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .module-card, .benefit-card, .pricing-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Handles header background on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.backdropFilter = 'blur(12px)';
        }
    });
}

/**
 * Handles floating elements animation
 */
function initFloatingElements() {
    const floating3D = document.querySelector('.floating-3d');
    const floatingUsers = document.querySelector('.floating-users');
    
    if (floating3D && floatingUsers) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            floating3D.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
            floatingUsers.style.transform = `translateY(${rate * 0.8}px) rotate(${scrolled * -0.1}deg)`;
        });
    }
}

/**
 * Adds loading states to buttons
 */
function initButtonStates() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('btn-primary') && !this.type === 'submit') {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

/**
 * Handles pricing card hover effects
 */
function initPricingEffects() {
    document.querySelectorAll('.pricing-card:not(.pricing-popular)').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[src*="sider.ai"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                // Simulate loading
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 300);
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Handles keyboard navigation
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && isMobileMenuOpen) {
            closeMobileMenu();
        }
        
        // Quick navigation shortcuts
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    scrollToSection('about');
                    break;
                case '2':
                    e.preventDefault();
                    scrollToSection('modules');
                    break;
                case '3':
                    e.preventDefault();
                    scrollToSection('benefits');
                    break;
                case '4':
                    e.preventDefault();
                    scrollToSection('pricing');
                    break;
                case '5':
                    e.preventDefault();
                    scrollToSection('contact');
                    break;
            }
        }
    });
}

/**
 * Adds click outside functionality for mobile menu
 */
function initClickOutside() {
    document.addEventListener('click', (e) => {
        const mobileNav = document.getElementById('mobileNav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (isMobileMenuOpen && 
            !mobileNav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

/**
 * Initialize stats counter animation
 */
function initStatsCounter() {
    const statsNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                
                // Extract number from text
                const match = text.match(/\d+/);
                if (match) {
                    const finalNumber = parseInt(match[0]);
                    animateNumber(target, 0, finalNumber, text);
                }
                
                observer.unobserve(target);
            }
        });
    });
    
    statsNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

/**
 * Animates number counting
 */
function animateNumber(element, start, end, originalText) {
    const duration = 2000;
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        const newText = originalText.replace(/\d+/, Math.floor(current));
        element.textContent = newText;
    }, 16);
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidationError);
    });
}

/**
 * Validates individual input field
 */
function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    // Remove existing error styling
    input.classList.remove('error');
    
    // Basic validation
    if (!value) {
        showInputError(input, 'Це поле обов\'язкове');
        return false;
    }
    
    // Email validation
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showInputError(input, 'Введіть коректний email');
            return false;
        }
    }
    
    // Phone validation
    if (input.type === 'tel') {
        const phoneRegex = /^\+380\s?\d{2}\s?\d{3}-?\d{2}-?\d{2}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            showInputError(input, 'Введіть коректний номер телефону');
            return false;
        }
    }
    
    // Age validation
    if (input.type === 'number') {
        const age = parseInt(value);
        if (age < 9 || age > 18) {
            showInputError(input, 'Вік має бути від 9 до 18 років');
            return false;
        }
    }
    
    return true;
}

/**
 * Shows input validation error
 */
function showInputError(input, message) {
    input.classList.add('error');
    
    // Create or update error message
    let errorElement = input.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        input.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.color = '#dc2626';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '4px';
}

/**
 * Clears validation error
 */
function clearValidationError(e) {
    const input = e.target;
    input.classList.remove('error');
    
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('ItEnAi 3D Course Landing Page loaded');
    
    // Initialize all features
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScroll();
    initFloatingElements();
    initButtonStates();
    initPricingEffects();
    initLazyLoading();
    initKeyboardNavigation();
    initClickOutside();
    initStatsCounter();
    initFormValidation();
    
    // Add CSS for validation errors
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.error {
            border-color: #dc2626;
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }
        
        .error-message {
            color: #dc2626;
            font-size: 12px;
            margin-top: 4px;
        }
    `;
    document.head.appendChild(style);
    
    console.log('All features initialized successfully');
});

/**
 * Handle window resize for responsive behavior
 */
window.addEventListener('resize', function() {
    // Close mobile menu on desktop
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

/**
 * Performance optimization: Throttle scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}