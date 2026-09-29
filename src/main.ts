import './styles/tokens.css';
import './styles/components.css';

import { initTheme, toggleTheme } from './theme';
import { initAnimations } from './animations';
import { initPageLoader } from './loader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderTransformation } from './components/Transformation';
import { renderFeatureDeepDives } from './components/FeatureDeepDives';
import { renderCommandStage, STAGE_TABS } from './components/CommandStage';
import { renderHardwareSection } from './components/HardwareSection';
import { renderDataIsolation } from './components/DataIsolation';
import { renderPricingSection } from './components/PricingSection';
import { renderCtaSection } from './components/CtaSection';
import { renderFooter } from './components/Footer';
import { renderTrialModal } from './components/TrialModal';
import { renderLanguageToggle } from './components/LanguageToggle';

import { initI18n, onLanguageChange } from './i18n';

import confetti from 'canvas-confetti';

// 1. Assemble Application Layout (Exact Sequence from PDF)
function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderTransformation()}
      ${renderFeatureDeepDives()}
      ${renderCommandStage()}
      ${renderHardwareSection()}
      ${renderDataIsolation()}
      ${renderPricingSection()}
      ${renderCtaSection()}
    </main>
    ${renderFooter()}
    ${renderTrialModal()}
    ${renderLanguageToggle()}
  `;
}

// 2. Interactive Handlers Setup
function initInteractions(): void {
  // Multi-Language Localization System Setup & Reactive ScrollTrigger Recalibration
  initI18n();
  onLanguageChange(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  });

  // Sticky Navbar Scroll & Reading Progress Bar (0% at top, 100% at bottom)
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('header-scroll-progress');

  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (navbar) {
      if (scrollTop > 15) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    }

    if (scrollProgressBar) {
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, scrollPercent));
      scrollProgressBar.style.width = `${clamped}%`;
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Theme Toggle Button
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      toggleTheme();
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = mobileDrawer.style.display === 'block';
      mobileDrawer.style.display = isVisible ? 'none' : 'block';
    });
  }

  // Smooth Scroll & Anchor Jump for Navigation Links (Desktop & Mobile)
  const navAnchorLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link, .mobile-nav-link, a[href^="#"]');
  navAnchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();

        // Close mobile drawer if open
        if (mobileDrawer && mobileDrawer.style.display === 'block') {
          mobileDrawer.style.display = 'none';
        }

        // Native smooth scroll into view respecting CSS scroll-margin-top
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL hash cleanly without causing a jump
        if (window.location.hash !== href) {
          history.pushState(null, '', href);
        }
      }
    });
  });

  // Interactive Command Stage Tabs & Multi-Image Slider with Autoplay & Progress Bar
  let currentStageKey = 'stage-pos';
  let currentSlideIndex = 0;
  const SLIDE_DURATION = 4200; // 4.2 seconds per slide

  let autoplayTimer: number | null = null;
  let startTime = Date.now();
  let remainingTime = SLIDE_DURATION;
  let isHovered = false;

  const stageButtons = document.querySelectorAll('.tab-nav-btn[data-stage]');
  const stageImg = document.getElementById('stage-active-img') as HTMLImageElement | null;
  const stageUrl = document.getElementById('stage-address-bar');
  const stageTitle = document.getElementById('stage-info-title');
  const stageDesc = document.getElementById('stage-info-desc');
  const stageSubnav = document.getElementById('stage-subnav');
  const stageDotsBar = document.getElementById('stage-dots-bar');
  const stageCounterText = document.getElementById('stage-counter-text');
  const stagePrevBtn = document.getElementById('stage-prev-btn');
  const stageNextBtn = document.getElementById('stage-next-btn');
  const stageProgressBar = document.getElementById('stage-progress-bar');
  const commandStageFrame = document.querySelector('.command-stage-frame');

  function startProgressAnimation(durationMs: number): void {
    if (!stageProgressBar) return;
    stageProgressBar.style.transition = 'none';
    stageProgressBar.style.width = '0%';
    void stageProgressBar.offsetWidth; // Force reflow
    stageProgressBar.style.transition = `width ${durationMs}ms linear`;
    stageProgressBar.style.width = '100%';
  }

  function pauseProgressAnimation(): void {
    if (!stageProgressBar) return;
    const computedStyle = window.getComputedStyle(stageProgressBar);
    const currentWidth = computedStyle.width;
    stageProgressBar.style.transition = 'none';
    stageProgressBar.style.width = currentWidth;
  }

  function resumeProgressAnimation(remainingMs: number): void {
    if (!stageProgressBar) return;
    stageProgressBar.style.transition = `width ${remainingMs}ms linear`;
    stageProgressBar.style.width = '100%';
  }

  function scheduleNextSlide(delayMs: number): void {
    if (autoplayTimer !== null) {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = null;
    }

    if (isHovered) return;

    startTime = Date.now();
    remainingTime = delayMs;

    autoplayTimer = window.setTimeout(() => {
      const tab = STAGE_TABS[currentStageKey];
      if (tab) {
        currentSlideIndex = (currentSlideIndex + 1) % tab.slides.length;
        updateStageUI('next');
      }
    }, delayMs);
  }

  function resetAutoplay(): void {
    if (autoplayTimer !== null) {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = null;
    }
    remainingTime = SLIDE_DURATION;
    startProgressAnimation(SLIDE_DURATION);
    if (!isHovered) {
      scheduleNextSlide(SLIDE_DURATION);
    }
  }

  function updateStageUI(direction: 'next' | 'prev' | 'fade' = 'next'): void {
    const tab = STAGE_TABS[currentStageKey];
    if (!tab) return;

    if (currentSlideIndex >= tab.slides.length) {
      currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
      currentSlideIndex = tab.slides.length - 1;
    }

    const currentSlide = tab.slides[currentSlideIndex];

    // 1. Update Tab Buttons active state
    stageButtons.forEach(btn => {
      const isCurrent = btn.getAttribute('data-stage') === currentStageKey;
      btn.classList.toggle('active', isCurrent);
    });

    // 2. Update Sub-Nav Pills
    if (stageSubnav) {
      stageSubnav.innerHTML = tab.slides.map((slide, idx) => `
        <button class="stage-subnav-pill ${idx === currentSlideIndex ? 'active' : ''}" data-slide-index="${idx}">
          <span>${slide.label}</span>
        </button>
      `).join('');

      stageSubnav.querySelectorAll('.stage-subnav-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const idxStr = pill.getAttribute('data-slide-index');
          if (idxStr !== null) {
            const targetIdx = parseInt(idxStr, 10);
            if (targetIdx !== currentSlideIndex) {
              const dir = targetIdx > currentSlideIndex ? 'next' : 'prev';
              currentSlideIndex = targetIdx;
              updateStageUI(dir);
            }
          }
        });
      });
    }

    // 3. Update Indicator Dots
    if (stageDotsBar) {
      stageDotsBar.innerHTML = tab.slides.map((_, idx) => `
        <button class="stage-dot ${idx === currentSlideIndex ? 'active' : ''}" data-dot-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
      `).join('');

      stageDotsBar.querySelectorAll('.stage-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const idxStr = dot.getAttribute('data-dot-index');
          if (idxStr !== null) {
            const targetIdx = parseInt(idxStr, 10);
            if (targetIdx !== currentSlideIndex) {
              const dir = targetIdx > currentSlideIndex ? 'next' : 'prev';
              currentSlideIndex = targetIdx;
              updateStageUI(dir);
            }
          }
        });
      });
    }

    // 4. Update Counter Text
    if (stageCounterText) {
      stageCounterText.innerText = `Screen ${currentSlideIndex + 1} of ${tab.slides.length}`;
    }

    // 5. Update Image with directional slide transition & skeleton handling
    if (stageImg) {
      stageImg.className = 'window-screen-img stage-screen-img skeleton-img';
      if (direction === 'next') {
        stageImg.classList.add('slide-from-right');
      } else if (direction === 'prev') {
        stageImg.classList.add('slide-from-left');
      } else {
        stageImg.classList.add('slide-fade');
      }

      const stageViewport = document.getElementById('stage-slider-viewport');
      const newImg = new Image();
      newImg.src = currentSlide.img;

      let applied = false;
      const applyLoadedImage = () => {
        if (applied || !stageImg) return;
        applied = true;
        stageImg.src = currentSlide.img;
        stageImg.alt = currentSlide.title;

        if (stageViewport) {
          stageViewport.classList.remove('skeleton-loading');
        }

        // Smoothly animate in
        requestAnimationFrame(() => {
          stageImg.className = 'window-screen-img stage-screen-img slide-active skeleton-img img-loaded';
        });
      };

      if (newImg.complete && newImg.naturalWidth > 0) {
        setTimeout(applyLoadedImage, 30);
      } else {
        if (stageViewport) {
          stageViewport.classList.add('skeleton-loading');
        }
        newImg.onload = applyLoadedImage;
        newImg.onerror = () => {
          if (stageViewport) stageViewport.classList.remove('skeleton-loading');
          applyLoadedImage();
        };
        setTimeout(applyLoadedImage, 350);
      }
    }

    // 6. Update Address Bar with micro-transition
    if (stageUrl) {
      stageUrl.classList.remove('stage-text-anim');
      void stageUrl.offsetWidth;
      stageUrl.innerHTML = `<span>${currentSlide.url}</span>`;
      stageUrl.classList.add('stage-text-anim');
    }

    // 7. Update Info Title & Description with micro-transition
    if (stageTitle) {
      stageTitle.classList.remove('stage-text-anim');
      void stageTitle.offsetWidth;
      stageTitle.innerText = currentSlide.title;
      stageTitle.classList.add('stage-text-anim');
    }

    if (stageDesc) {
      stageDesc.classList.remove('stage-text-anim');
      void stageDesc.offsetWidth;
      stageDesc.innerText = currentSlide.desc;
      stageDesc.classList.add('stage-text-anim');
    }

    // 8. Reset and trigger autoplay & progress bar
    resetAutoplay();
  }

  // Bind Main Tab Click Handlers
  stageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stageKey = btn.getAttribute('data-stage');
      if (!stageKey || !STAGE_TABS[stageKey]) return;

      currentStageKey = stageKey;
      currentSlideIndex = 0;
      updateStageUI('fade');
    });
  });

  // Bind Slider Prev / Next Buttons
  if (stagePrevBtn) {
    stagePrevBtn.addEventListener('click', () => {
      const tab = STAGE_TABS[currentStageKey];
      if (!tab) return;
      currentSlideIndex = (currentSlideIndex - 1 + tab.slides.length) % tab.slides.length;
      updateStageUI('prev');
    });
  }

  if (stageNextBtn) {
    stageNextBtn.addEventListener('click', () => {
      const tab = STAGE_TABS[currentStageKey];
      if (!tab) return;
      currentSlideIndex = (currentSlideIndex + 1) % tab.slides.length;
      updateStageUI('next');
    });
  }

  // Pause on Hover & Resume on Leave
  if (commandStageFrame) {
    commandStageFrame.addEventListener('mouseenter', () => {
      isHovered = true;
      const elapsed = Date.now() - startTime;
      remainingTime = Math.max(0, remainingTime - elapsed);
      if (autoplayTimer !== null) {
        window.clearTimeout(autoplayTimer);
        autoplayTimer = null;
      }
      pauseProgressAnimation();
    });

    commandStageFrame.addEventListener('mouseleave', () => {
      isHovered = false;
      if (remainingTime <= 150) {
        remainingTime = SLIDE_DURATION;
        startProgressAnimation(SLIDE_DURATION);
      } else {
        resumeProgressAnimation(remainingTime);
      }
      scheduleNextSlide(remainingTime);
    });
  }

  const hotspotItems = document.querySelectorAll('.hardware-hotspot-item');
  const hotspotSelectorBtns = document.querySelectorAll('.hardware-selector-btn');
  const hardwareData: Record<string, { title: string; desc: string }> = {
    pc: {
      title: 'Standard PC or Touch POS',
      desc: 'Runs in Chrome, Edge, or Firefox. Works with zero local software installs or driver conflicts.'
    },
    printers: {
      title: 'Thermal Printers',
      desc: 'Full ESC/POS support for 80mm and 58mm thermal printers (Epson, Xprinter, Rongta, Sewoo).'
    },
    scanners: {
      title: 'Barcode Scanners',
      desc: 'Works with any standard USB or wireless handheld barcode scanner via keyboard emulation.'
    },
    drawers: {
      title: 'Cash Drawers',
      desc: 'RJ-11 connection to your receipt printer kicks the drawer open on cash sales automatically.'
    }
  };

  function setActiveHotspot(hotspotKey: string): void {
    hotspotItems.forEach(item => {
      const isTarget = item.getAttribute('data-hotspot') === hotspotKey;
      item.classList.toggle('active', isTarget);
    });

    hotspotSelectorBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-target-hotspot') === hotspotKey;
      btn.classList.toggle('active', isTarget);
    });

    const info = hardwareData[hotspotKey];
    if (info) {
      const titleEl = document.getElementById('hardware-info-card-title');
      const descEl = document.getElementById('hardware-info-card-desc');
      if (titleEl) titleEl.innerText = info.title;
      if (descEl) descEl.innerText = info.desc;
    }
  }

  hotspotItems.forEach(item => {
    const key = item.getAttribute('data-hotspot');
    if (!key) return;

    item.querySelector('.hotspot-pin')?.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveHotspot(key);
    });

    item.addEventListener('mouseenter', () => {
      setActiveHotspot(key);
    });
  });

  hotspotSelectorBtns.forEach(btn => {
    const key = btn.getAttribute('data-target-hotspot');
    if (!key) return;

    btn.addEventListener('click', () => {
      setActiveHotspot(key);
    });

    btn.addEventListener('mouseenter', () => {
      setActiveHotspot(key);
    });
  });

  // Interactive UI Showcase Tabs (V3 POS, Khata, P&L, Treasury, Receipts)
  const showcaseTabBtns = document.querySelectorAll('.tab-nav-btn[data-tab]');
  const showcasePanels = document.querySelectorAll('.tab-content-panel');

  showcaseTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      if (!targetTabId) return;

      showcaseTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      showcasePanels.forEach(panel => {
        const isTarget = panel.id === targetTabId;
        panel.classList.toggle('active', isTarget);
        if (isTarget) {
          const img = panel.querySelector<HTMLImageElement>('img');
          if (img) {
            const container = img.closest('.skeleton-loading') || img.parentElement;
            if (img.complete && img.naturalWidth > 0) {
              img.classList.add('img-loaded');
              container?.classList.remove('skeleton-loading');
            } else {
              img.classList.add('skeleton-img', 'img-loading');
              container?.classList.add('skeleton-loading');
              img.addEventListener('load', () => {
                img.classList.add('img-loaded');
                img.classList.remove('img-loading');
                container?.classList.remove('skeleton-loading');
                ScrollTrigger.refresh();
              }, { once: true });
            }
          }
        }
      });

      ScrollTrigger.refresh();
    });
  });

  // Initialize Stage UI
  updateStageUI();

  // Trial Modal Setup
  const modalBackdrop = document.getElementById('trial-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalForm = document.getElementById('trial-modal-form') as HTMLFormElement | null;
  const trialSuccessMsg = document.getElementById('trial-success-message');

  function openModal(): void {
    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
    }
  }

  function closeModal(): void {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
    }
  }

  document.querySelectorAll('.open-trial-modal-btn').forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  if (modalForm && trialSuccessMsg) {
    const submitBtn = document.getElementById('trial-submit-btn') as HTMLButtonElement | null;

    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const storeName = (document.getElementById('trial-store-name') as HTMLInputElement)?.value.trim() || '';
      const subdomain = (document.getElementById('trial-subdomain') as HTMLInputElement)?.value.trim() || '';
      const phone = (document.getElementById('trial-phone') as HTMLInputElement)?.value.trim() || '';

      // Button loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite;">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
            </svg>
            Provisioning Vault...
          </span>
        `;
      }

      // Background webhook dispatch (Google Apps Script / n8n / custom webhook)
      const webhookUrl = (window as unknown as { QUICKPOS_WEBHOOK_URL?: string }).QUICKPOS_WEBHOOK_URL ||
        import.meta.env.VITE_LEAD_WEBHOOK_URL ||
        'https://script.google.com/macros/s/AKfycbws65OYdHDvA6iPtpcIC6lX8tYZmTFZxe3TFkCbz7ZZMw05kfy_yxodY6wLF816yn-_UQ/exec';

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              storeName,
              subdomain,
              phone,
              timestamp: new Date().toISOString()
            })
          });
        } catch (err) {
          console.error('Lead webhook dispatch error:', err);
        }
      }

      // Launch celebratory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });

      modalForm.style.display = 'none';
      trialSuccessMsg.style.display = 'block';
    });
  }
}

// 4. Initialize Skeleton Loading for All Images & Dynamic Sections
function initSkeletonLoading(): void {
  const images = document.querySelectorAll<HTMLImageElement>('img');

  images.forEach(img => {
    // Determine closest skeleton container or parent
    const skeletonContainer = img.closest('.skeleton-loading') || img.parentElement;

    const markLoaded = () => {
      img.classList.add('img-loaded');
      img.classList.remove('img-loading');
      if (skeletonContainer && skeletonContainer.classList.contains('skeleton-loading')) {
        skeletonContainer.classList.remove('skeleton-loading');
      }
      ScrollTrigger.refresh();
    };

    // If image is already cached/complete with natural dimensions, mark loaded immediately
    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.classList.add('skeleton-img', 'img-loading');
      if (skeletonContainer && !skeletonContainer.classList.contains('skeleton-loading')) {
        skeletonContainer.classList.add('skeleton-loading');
      }

      img.addEventListener('load', markLoaded, { once: true });
      img.addEventListener('error', () => {
        // Clear skeleton shimmer on error so it does not loop indefinitely
        img.classList.remove('img-loading');
        if (skeletonContainer) {
          skeletonContainer.classList.remove('skeleton-loading');
        }
        ScrollTrigger.refresh();
      }, { once: true });
    }
  });
}

// 5. Initialize Everything on DOM Ready
function main(): void {
  renderApp();
  initTheme();
  initInteractions();

  // Coordinate initial page loader with hero entrance animation
  const { playHero } = initAnimations({ delayHero: true });
  initPageLoader({
    onStartHero: () => {
      playHero();
    }
  });

  initSkeletonLoading();

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  setTimeout(() => ScrollTrigger.refresh(), 300);
  setTimeout(() => ScrollTrigger.refresh(), 1000);
}

window.addEventListener('DOMContentLoaded', main);
