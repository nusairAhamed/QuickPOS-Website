// UI Showcase Section (Interactive Tabbed Preview of Real QuickPOS Staging Screens)

export function renderUiShowcase(): string {
  return `
    <section class="section-ui-showcase" id="register">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">Interactive Product Tour</div>
          <h2 class="section-title">Modern & Minimalistic User Interface</h2>
          <p class="section-subtitle">
            Engineered for high-volume counters. Every button, keyboard shortcut, and workflow is refined to save cashiers seconds on every single customer transaction.
          </p>
        </div>

        <!-- Tab Navigation Buttons -->
        <div class="tab-nav-wrapper">
          <div class="tab-nav-container">
            <button class="tab-nav-btn active" data-tab="tab-pos">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>V3 POS Register</span>
            </button>
            <button class="tab-nav-btn" data-tab="tab-khata">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Khata & WhatsApp</span>
            </button>
            <button class="tab-nav-btn" data-tab="tab-pnl">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <span>Financials & P&L</span>
            </button>
            <button class="tab-nav-btn" data-tab="tab-overview">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Dashboard & Treasury</span>
            </button>
            <button class="tab-nav-btn" data-tab="tab-receipt">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Thermal Receipts</span>
            </button>
          </div>
        </div>

        <!-- Tab 1: V3 POS Register -->
        <div class="tab-content-panel active" id="tab-pos">
          <div class="showcase-display-box">
            <div class="showcase-split-grid">
              <div class="showcase-image-holder">
                <img src="/assets/pos-register.png" alt="QuickPOS V3 Cashier Register Screen" />
              </div>
              <div class="showcase-details-col">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
                  Lightning-Fast Checkout
                </h3>
                <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                  Built for pure keyboard muscle memory and laser scanners. Zero UI lag when scanning items at top speed.
                </p>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Shortcut Driven Architecture</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">F1 Barcode • F2 Customer • F4 New Sale • F8 Hold • F9 Pay</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Instant Fast-Cash Tender</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">One-click Rs. 500, 1,000, 5,000 buttons with exact change calculation</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Park & Retrieve Carts</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Never make queues wait if a shopper forgets their wallet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Khata & WhatsApp -->
        <div class="tab-content-panel" id="tab-khata">
          <div class="showcase-display-box">
            <div class="showcase-split-grid">
              <div class="showcase-image-holder">
                <img src="/assets/credit-aging.png" alt="Customer Credit Khata Ledger and Aging Report" />
              </div>
              <div class="showcase-details-col">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
                  Customer Credit Ledger (Khata)
                </h3>
                <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                  Offering credit builds loyalty, but paper books lead to forgotten debts. QuickPOS automates credit tracking and recovery.
                </p>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">30 / 60 / 90+ Day Aging Buckets</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Instantly identify overdue debt brackets before they become bad debts</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">1-Click WhatsApp Reminders</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Send polite payment requests via WhatsApp Cloud API with bank account details</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Automated SMS for Non-Smartphones</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Support for text notifications with custom store sender IDs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 3: Financials & P&L -->
        <div class="tab-content-panel" id="tab-pnl">
          <div class="showcase-display-box">
            <div class="showcase-split-grid">
              <div class="showcase-image-holder">
                <img src="/assets/profit-loss.png" alt="Real-time Profit and Loss Statement and Financials" />
              </div>
              <div class="showcase-details-col">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
                  Enterprise Financial Engine
                </h3>
                <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                  No need to export CSVs into spreadsheets. QuickPOS provides an enterprise-grade financial engine that updates with every sale and expense.
                </p>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Live Profit & Loss (P&L)</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Gross Revenue, Returns, COGS, Operating Expenses & Net Margin in real-time</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Weighted Average Cost (WAC/AVCO)</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">True valuation recalculating unit cost dynamically on each purchase</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Balance Sheet & Trial Balance</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Double-entry equilibrium tracking Assets, Liabilities & Owner's Equity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 4: Overview & Treasury -->
        <div class="tab-content-panel" id="tab-overview">
          <div class="showcase-display-box">
            <div class="showcase-split-grid">
              <div class="showcase-image-holder">
                <img src="/assets/dashboard-overview.png" alt="Central Dashboard and Multi-Bank Treasury Management" />
              </div>
              <div class="showcase-details-col">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
                  Executive Dashboard & Treasury
                </h3>
                <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                  Monitor operational sales curves, bank balances, maturing cheques, and critical inventory health from a single command center.
                </p>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Cheque Lifecycle Clearance</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Track customer and vendor cheques: Pending, Deposited, Cleared, and Bounced</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Cash Safe Drops & Petty Cash</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Log cashier transfers to the main safe and reconcile operational expenses</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Needs Attention Alert Bar</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Immediate notifications for low-stock SKUs and maturing vendor liabilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 5: Thermal Receipts -->
        <div class="tab-content-panel" id="tab-receipt">
          <div class="showcase-display-box">
            <div class="showcase-split-grid">
              <div class="showcase-image-holder">
                <img src="/assets/sale-receipt.png" alt="Thermal Receipt Printing and Cash Drawer Automation" />
              </div>
              <div class="showcase-details-col">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
                  Thermal Receipts & Drawer Kick
                </h3>
                <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">
                  Direct ESC/POS commands print crisp receipts and trigger electronic cash drawers in under 200 milliseconds.
                </p>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">80mm & 58mm Thermal Standards</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Auto-formatted receipts with customizable store logo and tax headers</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Automatic RJ11/RJ12 Drawer Kick</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Hardware signal sent simultaneously with cash receipt print command</span>
                  </div>
                </div>
                <div class="feature-check-pill">
                  <div class="feature-check-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  <div>
                    <strong style="display:block; font-size: 0.85rem; color: var(--text-primary);">Item Barcode Stickers</strong>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">Direct sticker printing for weight labels, shelf tags, and loose produce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
