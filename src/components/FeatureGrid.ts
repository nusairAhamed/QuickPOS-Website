// Feature Grid Component ("And some features beside that" — Dashcom UI 8-Card Grid)

export function renderFeatureGrid(): string {
  return `
    <section class="section-features" id="features">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">High-Velocity Counter Operations</div>
          <h2 class="section-title">Built for Muscle Memory & Split-Second Checkouts</h2>
          <p class="section-subtitle">
            When a queue of customers is waiting with full baskets, counter staff need pure speed. QuickPOS eliminates friction with keyboard-first workflows and automated cash recovery.
          </p>
        </div>

        <!-- 8 Micro-Feature Cards -->
        <div class="feature-grid-8">
          <!-- Card 1 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                <line x1="7" y1="8" x2="7" y2="16"></line>
                <line x1="10" y1="8" x2="10" y2="16"></line>
                <line x1="13" y1="8" x2="13" y2="16"></line>
                <line x1="17" y1="8" x2="17" y2="16"></line>
              </svg>
            </div>
            <h3 class="feature-card-title">Instant Barcode & SKU Scanning</h3>
            <p class="feature-card-desc">
              Items drop into the cart the exact millisecond the laser fires, with zero lag even across massive catalogs of 30,000+ items.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </div>
            <h3 class="feature-card-title">Smart Fast-Cash Buttons</h3>
            <p class="feature-card-desc">
              One-tap tendered cash amounts with automatic rupee rounding (Rs. 500, Rs. 1,000, Rs. 5,000) and immediate change calculations.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                <path d="M12 6v12"></path>
              </svg>
            </div>
            <h3 class="feature-card-title">Flexible Split-Tender Payments</h3>
            <p class="feature-card-desc">
              Settle any customer bill across Cash, Customer Credit Ledger, Cheque, or Bank Transfer in a single unified checkout.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
            </div>
            <h3 class="feature-card-title">Thermal Printing & Drawer Kick</h3>
            <p class="feature-card-desc">
              Direct ESC/POS and browser printing for standard 80mm and 58mm thermal receipt printers with automatic cash drawer kick.
            </p>
          </div>

          <!-- Card 5 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="feature-card-title">Hold & Resume Sales</h3>
            <p class="feature-card-desc">
              Park an active cart with one keypress (F8) to serve the next customer, then retrieve it in seconds without losing any line items.
            </p>
          </div>

          <!-- Card 6 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <h3 class="feature-card-title">Returns & Restock Auditing</h3>
            <p class="feature-card-desc">
              Process customer returns with mandatory audit reasons, automatic stock restock, and instant cash or customer credit ledger reversals.
            </p>
          </div>

          <!-- Card 7 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h3 class="feature-card-title">1-Click WhatsApp Khata Alerts</h3>
            <p class="feature-card-desc">
              Dispatch polite, pre-formatted payment reminders directly via official WhatsApp Cloud API with outstanding balance and bank details.
            </p>
          </div>

          <!-- Card 8 -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 class="feature-card-title">Blind Shift Cash Counts</h3>
            <p class="feature-card-desc">
              Cashiers count their drawer blind without seeing expected system totals, highlighting cash shortages or overages immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
