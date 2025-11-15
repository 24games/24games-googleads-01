/**
 * Embajadores - Main JavaScript
 * Handles carousel controls, parallax effect, and accessibility features
 */

(function() {
    'use strict';

    // ============================================
    // DYNAMIC BUTTON LINK BASED ON SLUG
    // ============================================
    
    function updateButtonLink() {
        const btnConocer = document.querySelector('.btn-conocer');
        if (!btnConocer) return;
        
        // Get the current path (slug)
        const pathname = window.location.pathname;
        const slug = pathname.split('/').filter(Boolean).pop() || '';
        
        // Base URL for affiliate link
        const baseURL = 'https://go.aff.24gamespartners.com/ex9wjlb9';
        
        // If there's a slug (like axt25, axt26), use it
        // Otherwise, use a default campaign
        const campaign = slug || 'Gads_default';
        
        // Build the final URL
        const finalURL = `${baseURL}?utm_campaign=Gads_${campaign}`;
        
        // Update button href
        btnConocer.href = finalURL;
        
        // Log for debugging (remove in production)
        console.log('Slug detected:', slug || 'none (root)');
        console.log('Button URL:', finalURL);
    }
    
    // Update button link on page load
    updateButtonLink();
    
    // ============================================
    // CAROUSEL CONTROLS
    // ============================================
    
    const carouselToggle = document.getElementById('carouselToggle');
    const carouselTrack = document.querySelector('.carousel-track');
    const pauseIcons = document.querySelectorAll('.pause-icon');
    const playIcon = document.querySelector('.play-icon');
    
    let isCarouselPaused = false;
    
    if (carouselToggle && carouselTrack) {
        carouselToggle.addEventListener('click', function() {
            isCarouselPaused = !isCarouselPaused;
            
            if (isCarouselPaused) {
                carouselTrack.classList.add('paused');
                carouselToggle.setAttribute('aria-label', 'Reanudar carrusel automático');
                
                // Toggle icons
                pauseIcons.forEach(icon => icon.style.display = 'none');
                if (playIcon) playIcon.style.display = 'block';
            } else {
                carouselTrack.classList.remove('paused');
                carouselToggle.setAttribute('aria-label', 'Pausar carrusel automático');
                
                // Toggle icons
                pauseIcons.forEach(icon => icon.style.display = 'block');
                if (playIcon) playIcon.style.display = 'none';
            }
        });
    }
    
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches && carouselTrack) {
        carouselTrack.classList.add('paused');
        isCarouselPaused = true;
        
        if (carouselToggle) {
            pauseIcons.forEach(icon => icon.style.display = 'none');
            if (playIcon) playIcon.style.display = 'block';
            carouselToggle.setAttribute('aria-label', 'Reanudar carrusel automático');
        }
    }
    
    // ============================================
    // SCROLL FADE OUT EFFECT
    // ============================================
    
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');
    let fadeTicking = false;
    
    function updateScrollFade() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        scrollFadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollTop;
            const elementHeight = rect.height;
            
            // Calculate fade based on element position
            // When element is at top of viewport, start fading
            if (rect.top < 0) {
                // Element is going up (out of viewport from top)
                const fadeProgress = Math.abs(rect.top) / (elementHeight * 0.8);
                const opacity = Math.max(0, 1 - fadeProgress);
                const translateY = Math.min(fadeProgress * 30, 30); // Move up slightly
                
                element.style.opacity = opacity;
                element.style.transform = `translateY(-${translateY}px)`;
            } else if (rect.top < windowHeight) {
                // Element is visible, full opacity
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            } else {
                // Element hasn't appeared yet
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
        
        fadeTicking = false;
    }
    
    function requestScrollFadeUpdate() {
        if (!fadeTicking && !prefersReducedMotion.matches) {
            window.requestAnimationFrame(updateScrollFade);
            fadeTicking = true;
        }
    }
    
    // Initial check
    if (!prefersReducedMotion.matches) {
        updateScrollFade();
        window.addEventListener('scroll', requestScrollFadeUpdate, { passive: true });
    }
    
    // ============================================
    // PARALLAX EFFECT
    // ============================================
    
    const parallaxSection = document.querySelector('.parallax-section');
    let ticking = false;
    
    function updateParallax() {
        if (!parallaxSection) return;
        
        const scrolled = window.pageYOffset;
        const parallaxOffset = parallaxSection.offsetTop;
        const parallaxHeight = parallaxSection.offsetHeight;
        
        // Check if section is in viewport
        if (scrolled + window.innerHeight > parallaxOffset && 
            scrolled < parallaxOffset + parallaxHeight) {
            
            const yPos = -(scrolled - parallaxOffset) * 0.3;
            parallaxSection.style.backgroundPosition = `center ${yPos}px`;
        }
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        if (!ticking && !prefersReducedMotion.matches) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Only apply parallax on desktop and if motion is allowed
    if (window.innerWidth >= 768 && !prefersReducedMotion.matches) {
        window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    }
    
    // ============================================
    // SMOOTH SCROLL (for anchor links if added later)
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // IMAGE LAZY LOADING FALLBACK
    // ============================================
    
    // Native lazy loading is used in HTML, but add IntersectionObserver fallback for older browsers
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Ensure image is loaded
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================================
    // KEYBOARD NAVIGATION IMPROVEMENTS
    // ============================================
    
    // Ensure focus is visible for keyboard users
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
    
    // ============================================
    // EXTERNAL LINKS SECURITY
    // ============================================
    
    // Add rel="noopener noreferrer" to all external links (already in HTML, but as safety)
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        const rel = link.getAttribute('rel') || '';
        if (!rel.includes('noopener')) {
            link.setAttribute('rel', rel + ' noopener noreferrer');
        }
    });
    
    // ============================================
    // CONSOLE INFO (can be removed in production)
    // ============================================
    
    console.log('%c🚀 Embajadores Website', 'color: #00FF7F; font-size: 16px; font-weight: bold;');
    console.log('%cStatic site ready. No frameworks. Pure performance.', 'color: #C9D1D9; font-size: 12px;');
    
})();

