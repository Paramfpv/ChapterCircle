// Careers Page JavaScript

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Simple and reliable tab functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Careers page loaded, initializing tabs...');
    
    // Get all tab buttons and job containers
    const tabButtons = document.querySelectorAll('.tab-btn');
    const jobContainers = document.querySelectorAll('.jobs-container');
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found job containers:', jobContainers.length);
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('Tab clicked:', category);
            
            // Remove active class from all buttons
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all job containers
            jobContainers.forEach(function(container) {
                container.classList.remove('active');
            });
            
            // Show the target container
            const targetContainer = document.getElementById(category + '-jobs');
            if (targetContainer) {
                targetContainer.classList.add('active');
                console.log('Switched to:', category + '-jobs');
            } else {
                console.error('Container not found:', category + '-jobs');
            }
        });
    });
});

// Apply button functionality
document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const jobTitle = this.closest('.job-card').querySelector('.job-title').textContent;
            showApplicationModal(jobTitle);
        });
    });
});

// Application modal function
function showApplicationModal(jobTitle) {
    // Create modal container
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 20px;
        box-sizing: border-box;
    `;

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: #1a1a1a;
        border-radius: 16px;
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #ffffff;
        position: relative;
    `;

    // Create modal HTML
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <h3 style="margin: 0; color: #ffffff; font-size: 1.5rem; font-weight: 600;">Apply for ${jobTitle}</h3>
            <button id="closeBtn" style="background: none; border: none; color: #cccccc; font-size: 1.5rem; cursor: pointer; padding: 0.5rem; border-radius: 50%; transition: all 0.3s ease;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div style="color: #cccccc; line-height: 1.6;">
            <p>Thank you for your interest! Please send us your resume and a brief introduction at:</p>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; color: #ffffff;">
                    <i class="fas fa-envelope" style="color: #e50914; font-size: 1.2rem; width: 20px;"></i>
                    <span>circlechapter@gmail.com</span>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0; color: #ffffff;">
                    <i class="fas fa-phone" style="color: #e50914; font-size: 1.2rem; width: 20px;"></i>
                    <span>+91 74330 17158</span>
                </div>
            </div>
            <p style="background: rgba(229, 9, 20, 0.1); border: 1px solid rgba(229, 9, 20, 0.3); border-radius: 8px; padding: 1rem; margin: 1.5rem 0; color: #ffffff;">
                Include the position title in your email subject line.
            </p>
            <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
                <button id="closeBtn2" style="flex: 1; min-width: 120px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; border: none; border-radius: 8px; background: rgba(255,255,255,0.1); color: #ffffff; cursor: pointer; transition: all 0.3s ease;">
                    Close
                </button>
                <a href="mailto:circlechapter@gmail.com?subject=Application for ${jobTitle}" style="flex: 1; min-width: 120px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; border: none; border-radius: 8px; background: #e50914; color: #ffffff; text-decoration: none; transition: all 0.3s ease;">
                    <i class="fas fa-envelope"></i> Send Email
                </a>
            </div>
        </div>
    `;

    // Add modal to page
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Mobile responsive adjustments
    if (window.innerWidth <= 768) {
        modal.style.padding = '10px';
        modalContent.style.maxHeight = '95vh';
        modalContent.style.padding = '1.5rem';
        
        const actionDiv = modalContent.querySelector('div:last-child');
        actionDiv.style.flexDirection = 'column';
        
        const buttons = actionDiv.querySelectorAll('button, a');
        buttons.forEach(btn => {
            btn.style.width = '100%';
        });
    }

    // Close function
    const closeModal = () => {
        document.body.removeChild(modal);
    };

    // Add event listeners
    modal.querySelector('#closeBtn').addEventListener('click', closeModal);
    modal.querySelector('#closeBtn2').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Parallax effect for floating elements
function handleParallax() {
    const floatingElements = document.querySelectorAll('[data-speed]');
    const scrolled = window.pageYOffset;
    
    floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed) / 10;
        element.style.transform = `translateY(${yPos}px)`;
    });
}

window.addEventListener('scroll', handleParallax);

// Job card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Benefit card animations
document.addEventListener('DOMContentLoaded', function() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    const benefitObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });

    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        benefitObserver.observe(card);
    });
});



// Floating elements mouse interaction
document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.floating-code, .floating-video, .floating-pen');
    
    floatingElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.color = 'rgba(229, 9, 20, 0.8)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.color = 'rgba(229, 9, 20, 0.3)';
        });
    });
});

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Back to top button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #e50914;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;

    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect for back to top button
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#ff6b6b';
    });

    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#e50914';
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('.application-modal');
        modals.forEach(modal => {
            const closeBtn = modal.querySelector('.close-modal');
            if (closeBtn) closeBtn.click();
        });
    }
});

// Page load performance
document.addEventListener('DOMContentLoaded', () => {
    console.log('Careers page loaded successfully!');
    
    // Preload critical images
    const criticalImages = [
        'media/logos/logo.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Skill tag hover effects
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(function(tag) {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(229, 9, 20, 0.3)';
            this.style.transform = 'scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255,255,255,0.1)';
            this.style.transform = 'scale(1)';
        });
    });
});

// Job badge animation
document.addEventListener('DOMContentLoaded', function() {
    const jobBadges = document.querySelectorAll('.job-badge');
    
    jobBadges.forEach(function(badge) {
        badge.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(229, 9, 20, 0.4)';
            this.style.transform = 'scale(1.1)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(229, 9, 20, 0.2)';
            this.style.transform = 'scale(1)';
        });
    });
}); 