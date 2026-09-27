import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(): void {
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. Hero Reveal Timeline
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.85 } });

  heroTl
    .from('.hero-pill-wrapper', { opacity: 0, y: -20, delay: 0.1, clearProps: 'opacity,transform' })
    .from('.hero-title', { opacity: 0, y: 30, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.hero-subtitle', { opacity: 0, y: 25, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.hero-cta-group', { opacity: 0, y: 20, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.hero-trust-bar', { opacity: 0, y: 15, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.mockup-window-frame', { opacity: 0, y: 45, scale: 0.96, clearProps: 'opacity,transform' }, '-=0.5')
    .from('.floating-chip', { opacity: 0, scale: 0.8, stagger: 0.18, clearProps: 'opacity,transform' }, '-=0.4');

  // Parallax subtle float on Hero Mockup on scroll
  if (document.querySelector('.hero-mockup-container')) {
    gsap.to('.hero-mockup-container', {
      y: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2
      }
    });
  }

  // 2. Transformation Comparison Cards Stagger
  if (document.querySelector('.transformation-comparison-grid')) {
    gsap.from('.trans-card', {
      scrollTrigger: {
        trigger: '.transformation-comparison-grid',
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 35,
      stagger: 0.18,
      duration: 0.75,
      ease: 'power2.out',
      clearProps: 'opacity,transform'
    });
  }

  // 3. Deep Dive Alternating Rows Fade & Slide
  document.querySelectorAll('.deep-dive-row').forEach(row => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 35,
      duration: 0.75,
      ease: 'power2.out',
      clearProps: 'opacity,transform'
    });
  });

  // 4. Command Stage Frame Reveal
  if (document.querySelector('.command-stage-frame')) {
    gsap.from('.command-stage-frame', {
      scrollTrigger: {
        trigger: '.section-command-stage',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 40,
      scale: 0.98,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'opacity,transform'
    });
  }

  // 5. Hardware Cards Stagger (PDF Page 4)
  const hardwareCards = document.querySelectorAll('.hardware-grid-4 .hardware-card');
  if (hardwareCards.length > 0) {
    gsap.from(hardwareCards, {
      scrollTrigger: {
        trigger: '.hardware-grid-4',
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 35,
      stagger: 0.12,
      duration: 0.65,
      ease: 'power2.out',
      clearProps: 'opacity,transform'
    });
  }

  // 6. Complete Data Isolation Card Reveal (PDF Page 4)
  if (document.querySelector('.data-isolation-card')) {
    gsap.from('.data-isolation-card', {
      scrollTrigger: {
        trigger: '.section-data-isolation',
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 35,
      scale: 0.98,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'opacity,transform'
    });

    // Stagger the 3 architecture tiers inside the terminal
    gsap.from('.arch-tier-item', {
      scrollTrigger: {
        trigger: '.arch-terminal-window',
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      x: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'opacity,transform'
    });
  }

  // 7. Pricing Card Zoom In
  if (document.querySelector('.pricing-main-card')) {
    gsap.from('.pricing-main-card', {
      scrollTrigger: {
        trigger: '.section-pricing',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 40,
      scale: 0.97,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'opacity,transform'
    });
  }

  // 8. Colombo CTA Rocket Card
  if (document.querySelector('.rocket-cta-card')) {
    gsap.from('.rocket-cta-card', {
      scrollTrigger: {
        trigger: '.section-cta',
        start: 'top 85%',
        once: true
      },
      opacity: 0,
      y: 35,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'opacity,transform'
    });
  }
}
