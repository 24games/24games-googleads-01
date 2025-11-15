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
    // PREFERS REDUCED MOTION CHECK
    // ============================================
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // ============================================
    // SCROLL FADE OUT EFFECT (DISABLED FOR PERFORMANCE)
    // ============================================
    
    // Fade out effect temporarily disabled due to performance issues
    // The effect was causing lag on lower-end devices
    // Elements will remain at full opacity during scroll
    
    // ============================================
    // PARALLAX EFFECT (DISABLED FOR PERFORMANCE)
    // ============================================
    
    // Parallax effect disabled - was causing scroll lag
    // Background is now static
    
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

