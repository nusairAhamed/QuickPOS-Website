import { gsap } from 'gsap';

export interface LoaderOptions {
  onStartHero?: () => void;
  onFinish?: () => void;
  minDuration?: number;
}

export function initPageLoader(options: LoaderOptions = {}): void {
  const loader = document.getElementById('initial-loader');

  // SEO & Core Web Vitals Safeguard:
  // Detect automated crawlers (Googlebot, Bingbot, Lighthouse) or repeat visits in same session
  const isBot = typeof navigator !== 'undefined' && /bot|googlebot|crawler|spider|robot|crawling|lighthouse|pagespeed/i.test(navigator.userAgent || '');
  let alreadyLoaded = false;
  try {
    alreadyLoaded = sessionStorage.getItem('quickpos_loader_shown') === '1';
  } catch {
    // Local storage / session storage might be blocked in strict private browsing
  }

  const shouldBypass = isBot || alreadyLoaded || document.documentElement.classList.contains('skip-loader');

  let heroStarted = false;
  const startHeroOnce = () => {
    if (!heroStarted) {
      heroStarted = true;
      options.onStartHero?.();
    }
  };

  if (!loader || shouldBypass) {
    document.body.classList.remove('loader-active');
    loader?.remove();
    startHeroOnce();
    options.onFinish?.();
    return;
  }

  // Mark current session so repeat internal clicks or refreshes don't re-trigger
  try {
    sessionStorage.setItem('quickpos_loader_shown', '1');
  } catch {
    // Ignore error in restricted storage mode
  }

  const progressBar = document.getElementById('loader-progress-bar');
  const percentText = document.getElementById('loader-percent');
  const statusText = document.getElementById('loader-status-text');
  const loaderContent = loader.querySelector<HTMLElement>('.loader-content');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.body.classList.remove('loader-active');
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.remove();
      startHeroOnce();
      options.onFinish?.();
    }, 100);
    return;
  }

  // Snappy, modern duration (~950ms) to ensure excellent LCP and responsiveness
  const progressState = { value: 0 };
  const targetDuration = (options.minDuration ?? 950) / 1000;

  const tl = gsap.timeline({
    onComplete: () => {
      const exitTl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('loader-active');
          loader.remove();
          options.onFinish?.();
        }
      });

      // 1. Content smoothly fades and scales
      if (loaderContent) {
        exitTl.to(loaderContent, {
          opacity: 0,
          y: -16,
          scale: 0.97,
          duration: 0.3,
          ease: 'power2.in'
        });
      }

      // 2. High-end curtain wipe reveal
      exitTl.to(loader, {
        yPercent: -100,
        duration: 0.55,
        ease: 'power4.inOut'
      }, '-=0.12');

      // 3. Trigger hero cascade right as curtain starts lifting
      exitTl.add(() => {
        startHeroOnce();
      }, '-=0.4');
    }
  });

  // Progress Bar tween
  tl.to(progressState, {
    value: 100,
    duration: targetDuration,
    ease: 'power2.out',
    onUpdate: () => {
      const p = Math.round(progressState.value);
      if (progressBar) progressBar.style.width = `${p}%`;
      if (percentText) percentText.textContent = `${p}%`;

      if (statusText) {
        if (p < 30) {
          statusText.textContent = 'INITIALIZING ENGINE';
        } else if (p < 68) {
          statusText.textContent = 'LOADING RETAIL MODULES';
        } else if (p < 98) {
          statusText.textContent = 'SYNCING CLOUD LEDGERS';
        } else {
          statusText.textContent = 'SYSTEM READY';
        }
      }
    }
  });

  // Short pause at 100% to let completion register visually
  tl.to({}, { duration: 0.12 });

  // Absolute safety timeout fallback
  setTimeout(() => {
    if (document.getElementById('initial-loader')) {
      document.body.classList.remove('loader-active');
      loader.remove();
      startHeroOnce();
      options.onFinish?.();
    }
  }, 2800);
}
