// Site Footer Component (PDF Pages 5 & 6)

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top-grid">
          <!-- Col 1: Brand & Bio -->
          <div>
            <a href="#" class="brand-logo" style="margin-bottom: 1.25rem;">
              <div class="brand-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span>QuickPOS <span class="brand-tag">LK</span></span>
            </a>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; max-width: 320px;">
              The modern retail point of sale and business operations SaaS platform engineered specifically for retail merchants across Sri Lanka.
            </p>
            <div class="status-indicator">
              <span class="status-dot"></span>
              <span>Cloud Engine Operational (99.99% Uptime)</span>
            </div>
          </div>

          <!-- Col 2: Product -->
          <div>
            <h4 class="footer-col-title">PRODUCT</h4>
            <ul class="footer-links-list">
              <li><a href="#capabilities" class="footer-link">POS Register V3</a></li>
              <li><a href="#capabilities" class="footer-link">Niyama Potha (Credit)</a></li>
              <li><a href="#command-stage" class="footer-link">Cheque Register</a></li>
              <li><a href="#capabilities" class="footer-link">SheetJS Excel Import</a></li>
              <li><a href="#capabilities" class="footer-link">AVCO Accounting</a></li>
              <li><a href="#hardware" class="footer-link">Hardware Compatibility</a></li>
            </ul>
          </div>

          <!-- Col 3: Company -->
          <div>
            <h4 class="footer-col-title">COMPANY</h4>
            <ul class="footer-links-list">
              <li><a href="#pricing" class="footer-link">Pricing Plans</a></li>
              <li><button class="footer-link open-trial-modal-btn" style="text-align: left; padding: 0;">Book a Free Demo</button></li>
              <li><a href="#contact" class="footer-link">Colombo Office</a></li>
              <li><a href="https://wa.me/94771234567" target="_blank" class="footer-link">WhatsApp Support</a></li>
            </ul>
          </div>

          <!-- Col 4: Merchants -->
          <div>
            <h4 class="footer-col-title">MERCHANTS</h4>
            <ul class="footer-links-list">
              <li><a href="https://nusair-staging.quickpos.lk/login" target="_blank" class="footer-link">Sign in to Store</a></li>
              <li><button class="footer-link open-trial-modal-btn" style="text-align: left; padding: 0;">30-Day Free Trial</button></li>
              <li><a href="#data-isolation" class="footer-link">Data Isolation</a></li>
            </ul>
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
