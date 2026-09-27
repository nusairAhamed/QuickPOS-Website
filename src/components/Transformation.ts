// Transformation Section: Paper & Guesswork vs Automated Control (from PDF Page 1 & 2)

export function renderTransformation(): string {
  return `
    <section class="section-transformation" id="transformation">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">THE PROBLEM</div>
          <h2 class="section-title">
            Still running your shop on notebooks and spreadsheets?
          </h2>
          <p class="section-subtitle">
            Manual credit records get lost. Cheques bounce without warning. Fragile desktop software crashes on a single PC. QuickPOS brings order to everyday retail.
          </p>
        </div>

        <!-- Comparison Cards Box -->
        <div class="transformation-comparison-grid">
          <!-- Left: Paper & Guesswork -->
          <div class="trans-card trans-card-old">
            <div class="trans-card-header">
              <h3 class="trans-card-title trans-title-old">Paper & Guesswork</h3>
              <span class="badge badge-old-friction">THE OLD FRICTION</span>
            </div>
            <ul class="trans-card-list">
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span>Customer debts scribbled in notebooks; forgotten balances and lost collections.</span>
              </li>
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span>Post-dated cheques (PDCs) slipping past due dates, triggering heavy bank return penalties.</span>
              </li>
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span>Desktop software locked to one old computer with zero cloud backups.</span>
              </li>
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span>End-of-day register totals never matching the physical drawer cash count.</span>
              </li>
            </ul>
          </div>

          <!-- Middle Arrow -->
          <div class="trans-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          <!-- Right: Automated Control -->
          <div class="trans-card trans-card-new">
            <div class="trans-card-header">
              <h3 class="trans-card-title trans-title-new">Automated Control</h3>
              <span class="badge badge-new-standard">THE QUICKPOS STANDARD</span>
            </div>
            <ul class="trans-card-list">
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span>Digital Niyama Potha with strict credit limits and 1-click WhatsApp payment reminders.</span>
              </li>
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span>Automated Cheque Register with 7-day maturity warnings and atomic bank balance sync.</span>
              </li>
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span>Cloud SaaS with physical database-per-tenant isolation and nightly cold backups.</span>
              </li>
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span>Enforced cashier shift float opening, blind closing counts, and instant P&L profit calculations.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
