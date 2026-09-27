// Site Footer Component - Compact Layout

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-compact-wrapper">
          <!-- Brand & Bio -->
          <div class="footer-compact-brand">
            <a href="#" class="brand-logo">
              <div class="brand-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span>QuickPOS <span class="brand-tag">LK</span></span>
            </a>
            <p class="footer-bio">
              The modern retail point of sale and business operations SaaS platform engineered specifically for retail merchants across Sri Lanka.
            </p>
          </div>

          <!-- Status Indicator Badge -->
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span>Cloud Engine Operational (99.99% Uptime)</span>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-bar">
          <div>
            © 2026 QuickPOS™ (RetailPOS Lanka). All rights reserved.
          </div>
          <div>
            Official Marketing Website: <strong style="color: var(--brand-primary);">quickpos.lk</strong>
          </div>
        </div>
      </div>
    </footer>
  `;
}
