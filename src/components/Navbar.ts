// Navbar Component - Matching PDF Header

export function renderNavbar(): string {
  return `
    <header class="site-header" id="navbar">
      <div class="container">
        <nav class="site-nav">
          <!-- Logo -->
          <a href="#" class="brand-logo" title="QuickPOS Lanka">
            <div class="brand-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <span>QuickPOS <span class="brand-tag">LK</span></span>
          </a>

          <!-- Desktop Navigation -->
          <ul class="nav-links-desktop">
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#command-stage" class="nav-link">See It in Action</a></li>
            <li><a href="#hardware" class="nav-link">Hardware</a></li>
            <li><a href="#pricing" class="nav-link">Pricing</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>

          <!-- Action Buttons -->
          <div class="nav-actions">
            <!-- Theme Toggle -->
            <button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle Dark/Light Mode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>

            <!-- Primary CTA -->
            <button class="btn btn-primary btn-sm open-trial-modal-btn hide-on-mobile">
              <span>Start Free Trial</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <!-- Mobile Toggle -->
            <button class="mobile-nav-toggle" id="mobile-toggle-btn" aria-label="Toggle mobile menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-drawer" class="mobile-drawer" style="display: none; padding: 1.5rem; background: var(--bg-surface); border-bottom: 1px solid var(--border-subtle);">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <li><a href="#features" class="mobile-nav-link nav-link">Features</a></li>
          <li><a href="#command-stage" class="mobile-nav-link nav-link">See It in Action</a></li>
          <li><a href="#hardware" class="mobile-nav-link nav-link">Hardware</a></li>
          <li><a href="#pricing" class="mobile-nav-link nav-link">Pricing</a></li>
          <li><a href="#contact" class="mobile-nav-link nav-link">Contact</a></li>
        </ul>
        <button class="btn btn-primary btn-sm open-trial-modal-btn" style="width: 100%;">Start Free Trial</button>
      </div>

      <!-- Scroll Progress Bar directly below sticky menu -->
      <div class="header-scroll-progress-container" aria-hidden="true">
        <div class="header-scroll-progress-bar" id="header-scroll-progress"></div>
      </div>
    </header>
  `;
}
