// Stats Metrics Component (Dashcom UI 4-Pill Metric Blocks)

export function renderStatsMetrics(): string {
  return `
    <section class="section-stats" id="metrics">
      <div class="container">
        <div class="stats-grid">
          <!-- Metric 1 -->
          <div class="stat-card">
            <div class="stat-card-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div class="stat-number" data-target="0.04">0.04s</div>
            <div class="stat-label">Laser Cart Latency</div>
            <div class="stat-sublabel">Instant scanning across 30,000+ items with zero cashier wait time</div>
          </div>

          <!-- Metric 2 -->
          <div class="stat-card">
            <div class="stat-card-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div class="stat-number" data-target="100">100%</div>
            <div class="stat-label">Isolated Database Vault</div>
            <div class="stat-sublabel">Dedicated PostgreSQL database per client — no shared multi-tenant tables</div>
          </div>

          <!-- Metric 3 -->
          <div class="stat-card">
            <div class="stat-card-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
              </svg>
            </div>
            <div class="stat-number">0 Errors</div>
            <div class="stat-label">Dual Weight & Rupee Conversion</div>
            <div class="stat-sublabel">Exact gram back-calculation from rupee requests with zero decimal rounding issues</div>
          </div>

          <!-- Metric 4 -->
          <div class="stat-card">
            <div class="stat-card-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="stat-number">Rs. 0</div>
            <div class="stat-label">Feature Paywalls or Limits</div>
            <div class="stat-sublabel">All 20+ enterprise modules included with unlimited products & transactions</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
