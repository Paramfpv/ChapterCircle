// DOM Elements
const navbar = document.querySelector('.navbar');
const bookCards = document.querySelectorAll('.book-card');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.querySelector('.modal-title');
const videoTitle = document.querySelector('.video-title');
const videoAuthor = document.querySelector('.video-author');
const videoDescription = document.querySelector('.video-description');

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-menu a');
    
    if (hamburger && navMenu) {
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
    }
});

// Book data (in a real app, this would come from a database)
const bookData = {
    1: {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Learn how tiny changes in behavior can result in the formation of new habits and help you achieve big goals. This video summary covers the core principles of habit formation and how to build systems that lead to remarkable results.',
        duration: '15 min',
        rating: '4.8'
    },
    2: {
        title: 'Deep Work',
        author: 'Cal Newport',
        description: 'Discover the power of focused, undistracted work in a world full of distractions. This summary explores how to cultivate deep work habits and achieve peak performance in your professional life.',
        duration: '12 min',
        rating: '4.7'
    },
    3: {
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        description: 'Explore the strange ways people think about money and how your personal history shapes your financial decisions. This video covers timeless lessons on wealth, greed, and happiness.',
        duration: '18 min',
        rating: '4.9'
    },
    4: {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        description: 'Understand the two systems that drive the way we think and make decisions. This summary reveals the cognitive biases that influence our choices and how to make better decisions.',
        duration: '14 min',
        rating: '4.6'
    },
    5: {
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen Covey',
        description: 'Learn the seven fundamental habits that can transform your personal and professional life. This video summary covers principles of effectiveness and character development.',
        duration: '16 min',
        rating: '4.8'
    },
    6: {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        description: 'Discover the difference between working for money and having money work for you. This summary explores financial education and the mindset needed for building wealth.',
        duration: '13 min',
        rating: '4.5'
    }
};

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Book card click handlers
bookCards.forEach(card => {
    card.addEventListener('click', () => {
        const bookId = card.getAttribute('data-book');
        const book = bookData[bookId];
        
        if (book) {
            openVideoModal(book);
        }
    });
});

// Open video modal
function openVideoModal(book) {
    modalTitle.textContent = book.title;
    videoTitle.textContent = book.title;
    videoAuthor.textContent = book.author;
    videoDescription.textContent = book.description;
    
    videoModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        videoModal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(1)';
        videoModal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Close video modal
function closeVideoModal() {
    videoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset animation
    videoModal.querySelector('.modal-content').style.transform = 'translate(-50%, -50%) scale(0.9)';
    videoModal.querySelector('.modal-content').style.opacity = '0';
}

// Close modal event listeners
closeModal.addEventListener('click', closeVideoModal);

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.style.display === 'block') {
        closeVideoModal();
    }
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    // In a real app, this would open a search modal or expand a search bar
    alert('Search functionality coming soon!');
});

// Profile button functionality
const profileBtn = document.querySelector('.profile-btn');
profileBtn.addEventListener('click', () => {
    // In a real app, this would open user profile or login modal
    alert('Profile functionality coming soon!');
});

// Hero video placeholder click
const heroVideo = document.querySelector('.hero-video .video-placeholder');
heroVideo.addEventListener('click', () => {
    // In a real app, this would play a sample video
    alert('Sample video player coming soon!');
});

// Category card interactions
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent;
        // In a real app, this would filter books by category
        alert(`Browsing ${category} books coming soon!`);
    });
});

// Lazy loading for images (basic implementation)
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => {
    imageObserver.observe(img);
});

// Add loading animation for book cards
bookCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .modal-content {
        transform: translate(-50%, -50%) scale(0.9);
        opacity: 0;
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Add hover sound effect (optional)
function playHoverSound() {
    // In a real app, you could add subtle hover sounds
    // const audio = new Audio('hover-sound.mp3');
    // audio.volume = 0.1;
    // audio.play();
}

// Add hover sound to interactive elements
const interactiveElements = document.querySelectorAll('.book-card, .category-card, .btn');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', playHoverSound);
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states for buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Simulate loading (remove in real app)
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Add keyboard navigation for book cards
let currentFocusIndex = -1;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        
        if (currentFocusIndex === -1) {
            currentFocusIndex = 0;
        } else {
            if (e.key === 'ArrowRight') {
                currentFocusIndex = (currentFocusIndex + 1) % bookCards.length;
            } else {
                currentFocusIndex = currentFocusIndex === 0 ? bookCards.length - 1 : currentFocusIndex - 1;
            }
        }
        
        bookCards[currentFocusIndex].focus();
    }
    
    if (e.key === 'Enter' && document.activeElement.classList.contains('book-card')) {
        document.activeElement.click();
    }
});

// Make book cards focusable
bookCards.forEach(card => {
    card.setAttribute('tabindex', '0');
});

// Add analytics tracking (placeholder)
function trackEvent(eventName, data) {
    // In a real app, this would send data to analytics service
    console.log('Event tracked:', eventName, data);
}

// Track user interactions
bookCards.forEach(card => {
    card.addEventListener('click', () => {
        const bookId = card.getAttribute('data-book');
        trackEvent('book_clicked', { bookId });
    });
});

// Back to top functionality
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chapter Circle loaded successfully!');
    
    // Add any initialization code here
    trackEvent('page_view', { page: 'home' });
}); 