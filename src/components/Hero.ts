import { t } from '../i18n';

// Hero Component - Exact Copy & Layout per User Outline

export function renderHero(): string {
  return `
    <section class="hero-section" id="product">
      <div class="hero-glow-bg"></div>
      
      <div class="container hero-content">
        <!-- Purpose-Built Badge -->
        <div class="hero-pill-wrapper">
          <div class="badge badge-pill badge-glow">
            <span class="badge-pulse-dot"></span>
            <span data-i18n="hero.badge">${t('hero.badge')}</span>
          </div>
        </div>

        <!-- Headline -->
        <h1 class="hero-title" style="max-width: 900px; margin-left: auto; margin-right: auto;" data-i18n-html="hero.title">
          ${t('hero.title')}
        </h1>

        <!-- Subtitle / Core Modules -->
        <p class="hero-subtitle" style="font-weight: 700; font-size: clamp(1.1rem, 2vw, 1.35rem); letter-spacing: 0.04em; color: var(--text-primary); margin-bottom: 2rem;" data-i18n="hero.subtitle">
          ${t('hero.subtitle')}
        </p>

        <!-- CTA Group -->
        <div class="hero-cta-group">
          <button class="btn btn-primary btn-lg open-trial-modal-btn">
            <span data-i18n="hero.startTrial">${t('hero.startTrial')}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <a href="https://wa.me/94761199636?text=Hello%20QuickPOS,%20I%20would%20like%20to%20book%20a%20guided%20demo" target="_blank" rel="noopener" class="btn btn-green btn-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741 1.008.997-3.646-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span data-i18n="hero.bookDemo">${t('hero.bookDemo')}</span>
          </a>
        </div>

        <!-- Trust Items -->
        <div class="hero-trust-bar">
          <div class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span data-i18n="hero.trust1">${t('hero.trust1')}</span>
          </div>
          <div class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span data-i18n="hero.trust2">${t('hero.trust2')}</span>
          </div>
          <div class="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span data-i18n="hero.trust3">${t('hero.trust3')}</span>
          </div>
        </div>

        <!-- Hero Mockup Window with Floating Badges -->
        <div class="hero-mockup-container" id="hero-mockup">
          <!-- Floating Badge Left: Active cashier float -->
          <div class="floating-chip floating-chip-left" style="top: 10%; left: -3%;">
            <div class="chip-icon" style="background: rgba(37, 99, 235, 0.12); color: #2563EB;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div>
              <div class="chip-label" data-i18n="hero.chipFloatLabel">${t('hero.chipFloatLabel')}</div>
              <div class="chip-val"><span data-i18n="hero.chipFloatVal">${t('hero.chipFloatVal')}</span> <span class="chip-badge" data-i18n="hero.chipFloatBadge">${t('hero.chipFloatBadge')}</span></div>
            </div>
          </div>

          <!-- Floating Badge Right: Maturing Cheque warning -->
          <div class="floating-chip floating-chip-right" style="top: 25%; right: -3%;">
            <div class="chip-icon" style="background: rgba(245, 158, 11, 0.12); color: #F59E0B;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <div>
              <div class="chip-label">Cheque Potha Alert</div>
              <div class="chip-val">Cheque #489211 <span class="chip-badge" style="background: rgba(245, 158, 11, 0.15); color: #F59E0B;">Due Tomorrow</span></div>
            </div>
          </div>

          <!-- Floating Badge Bottom: Customer Credit Limit warning -->
          <div class="floating-chip floating-chip-bottom" style="bottom: 12%; left: 3%; right: auto; width: max-content;">
            <div class="chip-icon" style="background: rgba(16, 185, 129, 0.12); color: #10B981;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div>
              <div class="chip-label" data-i18n="hero.chipCreditLabel">${t('hero.chipCreditLabel')}</div>
              <div class="chip-val">Perera Bros <span class="chip-badge" style="background: rgba(16, 185, 129, 0.15); color: #10B981;">Limit OK</span></div>
            </div>
          </div>

          <!-- Main Desktop Window Mockup -->
          <div class="mockup-window-frame">
            <!-- Window Titlebar -->
            <div class="window-titlebar">
              <div class="window-dots">
                <span class="window-dot window-dot-red"></span>
                <span class="window-dot window-dot-yellow"></span>
                <span class="window-dot window-dot-green"></span>
              </div>
              <div class="window-address-bar">
                <span>quickpos.lk/dashboard — Live Store Overview</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: var(--brand-accent-green); font-weight: 600;">
                <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--brand-accent-green);"></span>
                <span>LIVE SYSTEM</span>
              </div>
            </div>

            <!-- Screenshot from screenshot folder with Skeleton Holder -->
            <div class="mockup-screen-container skeleton-loading">
              <img 
                src="/assets/02_dashboard.png" 
                alt="QuickPOS Live Production Dashboard Overview" 
                class="window-screen-img skeleton-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <!-- Target Verticals Pills -->
        <div class="hero-verticals-pills">
          <span class="badge badge-pill">✦ Supermarkets</span>
          <span class="badge badge-pill">✦ Mini-marts</span>
          <span class="badge badge-pill">✦ Hardware stores</span>
          <span class="badge badge-pill">✦ Pharmacies</span>
          <span class="badge badge-pill">✦ Clothing</span>
          <span class="badge badge-pill">✦ Auto parts</span>
        </div>
      </div>
    </section>
  `;
}
