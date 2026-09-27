// Pricing Section Component (PDF Page 5)

export function renderPricingSection(): string {
  return `
    <section class="section-pricing" id="pricing" style="padding: 5.5rem 0;">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">PRICING</div>
          <h2 class="section-title">
            Start with a 30-Day Free Trial. Pay in Sri Lankan Rupees.
          </h2>
          <p class="section-subtitle">
            No credit card required. Free store setup assistance included with every account.
          </p>
        </div>

        <!-- Plan Card -->
        <div class="pricing-main-card" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <div class="pricing-card-badge">ALL-INCLUSIVE PRO SUITE</div>

          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.4rem;">
            QuickPOS Retail Pro
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Everything you need to run high-throughput counters, credit ledgers, and reporting.
          </p>

          <div style="margin: 1.75rem 0;">
            <div style="font-size: clamp(2.5rem, 4vw, 3.25rem); font-weight: 800; color: var(--text-primary); line-height: 1.1;">
              30 days free
            </div>
            <div style="font-size: 1.15rem; color: var(--brand-accent-green); font-weight: 700; margin-top: 0.75rem;">
              From Rs. 4,500/month
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
              or Rs. 45,000/year (2 months free on annual billing)
            </div>
          </div>

          <!-- Feature Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem 1.5rem; text-align: left; margin: 2rem 0; padding: 1.5rem; background: var(--bg-surface-subtle); border-radius: 1rem; border: 1px solid var(--border-subtle);" class="plan-features-grid">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Unlimited Register Transactions</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Niyama Potha Credit Aging</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Automated Cheque Register</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>30-Sec SheetJS Excel Import</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Real-Time AVCO P&L Reports</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Dedicated Database Isolation</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem; align-items: center;">
            <button class="btn btn-primary btn-lg open-trial-modal-btn" style="width: 100%;">
              <span>Start Free Trial</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button class="btn btn-ghost btn-sm open-trial-modal-btn" style="color: var(--text-muted);">
              View Detailed Plan Comparison →
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
