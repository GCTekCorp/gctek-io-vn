// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollAnimations();
    initializeNavigation();
});

// Initialize all animations
function initializeAnimations() {
    // Section 1: Conversation Scene Animations
    animateConversationScene();
    
    // Section 2: SCADA Scene Animations
    animateScadaScene();
    
    // Section 3: Messenger Scene Animations
    animateMessengerScene();
}

// Conversation Scene Animations
function animateConversationScene() {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    
    // Animate people
    tl.to('.person-1', { 
        y: -10, 
        duration: 1, 
        ease: "power2.inOut" 
    })
    .to('.person-2', { 
        y: -10, 
        duration: 1, 
        ease: "power2.inOut" 
    }, "<")
    .to('.person-1', { 
        y: 0, 
        duration: 1, 
        ease: "power2.inOut" 
    })
    .to('.person-2', { 
        y: 0, 
        duration: 1, 
        ease: "power2.inOut" 
    }, "<");
    
    // Animate speech bubbles
    const bubbles = document.querySelectorAll('.speech-bubble');
    bubbles.forEach((bubble, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 3 })
            .to(bubble, { 
                opacity: 1, 
                scale: 1, 
                duration: 0.5, 
                delay: index * 0.8 
            })
            .to(bubble, { 
                y: -20, 
                duration: 2, 
                ease: "power2.out" 
            })
            .to(bubble, { 
                opacity: 0, 
                scale: 0.8, 
                duration: 0.5 
            });
    });
    
    // Animate arms movement
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to('.person-1 .arms', { 
            rotation: -25, 
            duration: 1, 
            ease: "power2.inOut" 
        })
        .to('.person-1 .arms', { 
            rotation: -15, 
            duration: 1, 
            ease: "power2.inOut" 
        })
        .to('.person-2 .arms', { 
            rotation: 25, 
            duration: 1, 
            ease: "power2.inOut" 
        })
        .to('.person-2 .arms', { 
            rotation: 15, 
            duration: 1, 
            ease: "power2.inOut" 
        });
}

// SCADA Scene Animations
function animateScadaScene() {
    // Animate antenna stations
    const stations = document.querySelectorAll('.antenna-station');
    stations.forEach((station, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 1 })
            .to(station, { 
                y: -5, 
                duration: 2, 
                ease: "power2.inOut",
                delay: index * 0.3 
            })
            .to(station, { 
                y: 0, 
                duration: 2, 
                ease: "power2.inOut" 
            });
    });
    
    // Animate signal waves
    const signalWaves = document.querySelectorAll('.signal-wave');
    signalWaves.forEach((wave, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 1 })
            .to(wave, { 
                scale: 3, 
                opacity: 0, 
                duration: 2, 
                ease: "power2.out",
                delay: index * 0.5 
            });
    });
    
    // Animate central server
    gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
        .to('.central-server', { 
            scale: 1.05, 
            duration: 1, 
            ease: "power2.inOut" 
        })
        .to('.central-server', { 
            scale: 1, 
            duration: 1, 
            ease: "power2.inOut" 
        });
    
    // Animate connection lines
    const connectionLines = document.querySelectorAll('.connection-line');
    connectionLines.forEach((line, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 2 })
            .to(line, { 
                opacity: 1, 
                duration: 0.5, 
                delay: index * 0.3 
            })
            .to(line, { 
                opacity: 0.3, 
                duration: 1.5 
            });
    });
    
    // Animate monitor
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to('.monitor', { 
            y: -10, 
            duration: 2, 
            ease: "power2.inOut" 
        })
        .to('.monitor', { 
            y: 0, 
            duration: 2, 
            ease: "power2.inOut" 
        });
    
    // Animate observer
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to('.observer', { 
            x: 5, 
            duration: 2, 
            ease: "power2.inOut" 
        })
        .to('.observer', { 
            x: 0, 
            duration: 2, 
            ease: "power2.inOut" 
        });
}

// Messenger Scene Animations
function animateMessengerScene() {
    // Animate person
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to('.messenger-person', { 
            y: -5, 
            duration: 2, 
            ease: "power2.inOut" 
        })
        .to('.messenger-person', { 
            y: 0, 
            duration: 2, 
            ease: "power2.inOut" 
        });
    
    // Animate app windows
    const appWindows = document.querySelectorAll('.app-window');
    appWindows.forEach((window, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 2 })
            .to(window, { 
                scale: 1.05, 
                duration: 1, 
                ease: "power2.inOut",
                delay: index * 0.3 
            })
            .to(window, { 
                scale: 1, 
                duration: 1, 
                ease: "power2.inOut" 
            });
    });
    
    // Animate report panel
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to('.report-panel', { 
            scale: 1.05, 
            duration: 1.5, 
            ease: "power2.inOut" 
        })
        .to('.report-panel', { 
            scale: 1, 
            duration: 1.5, 
            ease: "power2.inOut" 
        });
    
    // Animate analysis bubbles
    const analysisBubbles = document.querySelectorAll('.analysis-bubble');
    analysisBubbles.forEach((bubble, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 4 })
            .to(bubble, { 
                opacity: 1, 
                scale: 1, 
                duration: 0.5, 
                delay: index * 0.4 
            })
            .to(bubble, { 
                y: -15, 
                duration: 2, 
                ease: "power2.out" 
            })
            .to(bubble, { 
                opacity: 0, 
                scale: 0.8, 
                duration: 0.5 
            });
    });
    
    // Animate chat lines
    const chatLines = document.querySelectorAll('.chat-line');
    chatLines.forEach((line, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 3 })
            .to(line, { 
                opacity: 0.3, 
                duration: 1, 
                delay: index * 0.2 
            })
            .to(line, { 
                opacity: 1, 
                duration: 1 
            });
    });
    
    // Animate report lines
    const reportLines = document.querySelectorAll('.report-line');
    reportLines.forEach((line, index) => {
        gsap.timeline({ repeat: -1, repeatDelay: 2 })
            .to(line, { 
                opacity: 0.3, 
                duration: 1, 
                delay: index * 0.3 
            })
            .to(line, { 
                opacity: 1, 
                duration: 1 
            });
    });
}

// Scroll-triggered animations
function initializeScrollAnimations() {
    // Animate content on scroll
    gsap.utils.toArray('.content').forEach(content => {
        gsap.fromTo(content, 
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Animate service cards
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.fromTo(card,
            { 
                opacity: 0, 
                y: 30 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Animate features
    gsap.utils.toArray('.feature').forEach((feature, index) => {
        gsap.fromTo(feature,
            { 
                opacity: 0, 
                x: -30 
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: feature,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            { 
                opacity: 0, 
                y: 30 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Animate animation containers
    gsap.utils.toArray('.animation-container').forEach(container => {
        gsap.fromTo(container,
            { 
                opacity: 0, 
                scale: 0.9 
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 20%",
            end: "bottom 20%",
            onEnter: () => {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            },
            onEnterBack: () => {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Navbar background on scroll
    ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        onUpdate: (self) => {
            const navbar = document.querySelector('.navbar');
            if (self.direction === 1) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Performance optimization: Pause animations when not in viewport
ScrollTrigger.batch(".animation-container", {
    onEnter: (elements) => {
        elements.forEach(el => {
            const animations = el.querySelectorAll('[class*="gsap"]');
            animations.forEach(anim => {
                if (anim._gsap) {
                    anim._gsap.play();
                }
            });
        });
    },
    onLeave: (elements) => {
        elements.forEach(el => {
            const animations = el.querySelectorAll('[class*="gsap"]');
            animations.forEach(anim => {
                if (anim._gsap) {
                    anim._gsap.pause();
                }
            });
        });
    },
    onEnterBack: (elements) => {
        elements.forEach(el => {
            const animations = el.querySelectorAll('[class*="gsap"]');
            animations.forEach(anim => {
                if (anim._gsap) {
                    anim._gsap.play();
                }
            });
        });
    },
    onLeaveBack: (elements) => {
        elements.forEach(el => {
            const animations = el.querySelectorAll('[class*="gsap"]');
            animations.forEach(anim => {
                if (anim._gsap) {
                    anim._gsap.pause();
                }
            });
        });
    }
});

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollTop > 500) {
        if (!scrollToTopBtn) {
            createScrollToTopButton();
        }
        scrollToTopBtn.style.display = 'block';
    } else if (scrollToTopBtn) {
        scrollToTopBtn.style.display = 'none';
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    `;
    
    button.addEventListener('click', function() {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0 },
            ease: "power2.inOut"
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#1d4ed8';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#2563eb';
    });
    
    document.body.appendChild(button);
} 