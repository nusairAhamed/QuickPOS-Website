import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(options?: { delayHero?: boolean }): { playHero: () => void } {
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return { playHero: () => {} };
  }

  const delayHero = options?.delayHero ?? false;

  // 1. Hero Reveal Timeline
  const heroTl = gsap.timeline({ 
    paused: delayHero,
    defaults: { ease: 'power3.out', duration: 0.85 } 
  });

  heroTl
    .from('.hero-pill-wrapper', { opacity: 0, y: -20, delay: 0.1, clearProps: 'opacity,transform' })
    .from('.hero-title', { opacity: 0, y: 30, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.hero-subtitle', { opacity: 0, y: 25, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.hero-cta-group', { opacity: 0, y: 20, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.hero-trust-bar', { opacity: 0, y: 15, clearProps: 'opacity,transform' }, '-=0.6')
    .from('.mockup-window-frame', { opacity: 0, y: 45, scale: 0.96, clearProps: 'opacity,transform' }, '-=0.5')
    .from('.floating-chip', { opacity: 0, scale: 0.8, stagger: 0.18, clearProps: 'opacity,transform' }, '-=0.4')
    .from('.hero-verticals-pills .badge-pill', { opacity: 0, y: 15, stagger: 0.06, duration: 0.5, ease: 'power2.out', clearProps: 'opacity,transform' }, '-=0.2');

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

  // 3. Deep Dive Hero Showcases - Granular Element-by-Element Smooth Reveal
  document.querySelectorAll<HTMLElement>('.deep-dive-showcase').forEach(showcase => {
    // 3a. Header (Tag, Title, and Subtitle) Staggered Slide-Up
    const header = showcase.querySelector('.deep-dive-showcase-header');
    if (header) {
      const leftItems = header.querySelectorAll('.showcase-header-left > *');
      const rightSubtitle = header.querySelector('.showcase-header-right .section-subtitle');
      const headerElements = [...Array.from(leftItems), ...(rightSubtitle ? [rightSubtitle] : [])];

      gsap.from(headerElements, {
        scrollTrigger: {
          trigger: header,
          start: 'top 88%',
          once: true
        },
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'opacity,transform'
      });
    }

    // 3b. 3D Centerpiece Visual and Feature Cards Synchronized Reveal
    const stage = showcase.querySelector('.feature-3d-stage-hero');
    const cards = showcase.querySelectorAll('.showcase-feature-grid .feature-check-pill');
    const img = stage?.querySelector<HTMLImageElement>('img');

    // Ensure ScrollTrigger recalibrates if lazy image finishes loading
    if (img && !img.complete) {
      img.addEventListener('load', () => {
        ScrollTrigger.refresh();
      }, { once: true });
    }

    if (stage) {
      const stageTl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top 86%',
          once: true
        }
      });

      // 3D Visual Centerpiece entrance
      stageTl.from(stage, {
        opacity: 0,
        y: 36,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'opacity,transform'
      });

      // Benefit cards reveal right as the image appears so they are immediately visible
      if (cards.length > 0) {
        stageTl.from(cards, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'opacity,transform'
        }, '-=0.5');
      }
    }
  });

  // Fallback for any legacy .deep-dive-row if present
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

    // Sequential animation for architecture tier cards and connecting lines
    const tierCards = document.querySelectorAll('.arch-tier-item');
    const connectorLines = document.querySelectorAll('.arch-connector .connector-line');

    if (tierCards.length > 0) {
      const archTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.arch-terminal-window',
          start: 'top 85%',
          once: true
        }
      });

      tierCards.forEach((card, index) => {
        archTl.from(card, {
          opacity: 0,
          x: 20,
          duration: 0.45,
          ease: 'power2.out',
          clearProps: 'opacity,transform'
        }, index === 0 ? undefined : '-=0.1');

        if (connectorLines[index]) {
          archTl.from(connectorLines[index], {
            scaleY: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            transformOrigin: 'top center',
            clearProps: 'opacity,transform'
          }, '-=0.1');
        }
      });
    }
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

  return {
    playHero: () => {
      heroTl.play();
    }
  };
}
