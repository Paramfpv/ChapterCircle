// Careers Page JavaScript

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
    const modal = document.createElement('div');
    modal.className = 'application-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Apply for ${jobTitle}</h3>
                <button class="close-modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>Thank you for your interest! Please send us your resume and a brief introduction at:</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>circlechapter@gmail.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+91 74330 17158</span>
                    </div>
                </div>
                <p class="application-note">Include the position title in your email subject line.</p>
                <div class="modal-actions">
                    <button class="btn btn-secondary close-modal-btn">Close</button>
                    <a href="mailto:circlechapter@gmail.com?subject=Application for ${jobTitle}" class="btn btn-primary">
                        <i class="fas fa-envelope"></i> Send Email
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: #1a1a1a;
        border-radius: 16px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        border: 1px solid rgba(255,255,255,0.1);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.querySelector('.close-modal-btn').addEventListener('click', closeModal);
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