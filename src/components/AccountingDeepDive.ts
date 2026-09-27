// Accounting & Operations Deep Dive Component

export function renderAccountingDeepDive(): string {
  return `
    <section class="section-accounting" id="accounting" style="padding: 5.5rem 0; background: var(--bg-surface-subtle); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">Double-Entry Financial Intelligence</div>
          <h2 class="section-title">Built-In Accounting & Treasury Operations</h2>
          <p class="section-subtitle">
            Say goodbye to clunky spreadsheet exports. QuickPOS embeds an enterprise-grade financial ledger that automatically reconciles every checkout, expense, cheque, and inventory movement.
          </p>
        </div>

        <!-- 3 Financial Pillars Grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;" class="accounting-grid-3">
          <!-- Pillar 1: Financial Statements -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="feature-card-title">Real-Time P&L & Balance Sheet</h3>
            <p class="feature-card-desc">
              Live statements updated in real-time. Calculate gross revenue, returned stock adjustments, AVCO cost of goods sold, operating expenses, and net profit margins across any custom date range.
            </p>
            <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted);">
              ✦ Double-entry trial balance & historical month locking
            </div>
          </div>

          <!-- Pillar 2: Treasury & Cheques -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <h3 class="feature-card-title">Multi-Bank Treasury & Cheques</h3>
            <p class="feature-card-desc">
              Track customer and vendor cheques across Pending, Deposited, Cleared, and Bounced states. Run petty cash, cashier drawer-to-safe cash drops, and track live corporate bank balances.
            </p>
            <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted);">
              ✦ Automated bank balance adjustments upon cheque clearance
            </div>
          </div>

          <!-- Pillar 3: Stocktake & Shrinkage -->
          <div class="feature-pill-card">
            <div class="feature-icon-bubble">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 class="feature-card-title">Physical Stocktake & Shrinkage</h3>
            <p class="feature-card-desc">
              Conduct high-speed aisle audits with barcode beepers. Choose Blind Audit Mode to eliminate staff bias, calculate rupee variance automatically, and auto-zero missing or uncounted items.
            </p>
            <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted);">
              ✦ Manager sign-off with immutable stock movement audit trail
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
