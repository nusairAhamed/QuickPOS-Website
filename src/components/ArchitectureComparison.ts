// Architecture Comparison Component (Dedicated Database vs Shared Multi-Tenant)

export function renderArchitectureComparison(): string {
  return `
    <section class="section-architecture" id="architecture">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">Bank-Grade Isolation</div>
          <h2 class="section-title">Dedicated Private Database Architecture</h2>
          <p class="section-subtitle">
            Most cloud POS systems pack thousands of retailers into a single shared database table. QuickPOS provisions an isolated, dedicated database vault for every single merchant.
          </p>
        </div>

        <!-- Architectural Visual Comparison -->
        <div class="arch-visual-comparison">
          <!-- Shared Multi-Tenant (Traditional Danger) -->
          <div class="arch-card arch-card-danger">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
              <span class="badge arch-badge-danger">Conventional Cloud POS</span>
              <span style="font-size: 0.75rem; color: #EF4444; font-weight: 700;">HIGH LEAKAGE RISK</span>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.75rem;">
              Shared Multi-Tenant Database
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">
              5,000+ stores dumped into the same database tables separated only by an unindexed <code style="font-family: var(--font-mono); color: #EF4444;">store_id</code> column.
            </p>
            <ul class="arch-feature-list">
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <span><strong>Cross-Store Data Leakage:</strong> One buggy query or injection leaks your supplier buy prices and profit margins to competitors.</span>
              </li>
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <span><strong>Noisy Neighbor Slowdowns:</strong> When another store runs a 50,000-item stock audit, your cashiers suffer query locks and freezing carts.</span>
              </li>
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <span><strong>Zero Backup Sovereignty:</strong> You cannot download a standalone copy of your database schema or restore an uncorrupted snapshot.</span>
              </li>
            </ul>
          </div>

          <!-- QuickPOS Dedicated Vault (Bank-Grade Winner) -->
          <div class="arch-card arch-card-success">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
              <span class="badge arch-badge-success">QuickPOS™ Architecture</span>
              <span style="font-size: 0.75rem; color: #10B981; font-weight: 700;">100% PRIVATE & ISOLATED</span>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.75rem;">
              Dedicated Private Database Vault
            </h3>
            <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">
              A physically isolated, encrypted database instance provisioned exclusively for your retail business.
            </p>
            <ul class="arch-feature-list">
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Zero Data Leakage:</strong> Your transactions, margins, and customers live in a private vault. Cross-tenant leakage is mathematically impossible.</span>
              </li>
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Guaranteed Sub-50ms Latency:</strong> No other store's audit or heavy report can ever lock your checkout register or slow down your queues.</span>
              </li>
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Branded Subdomain:</strong> Access via your own dedicated address (<code style="font-family: var(--font-mono); color: var(--brand-primary);">yourshop.quickpos.lk</code>).</span>
              </li>
              <li class="arch-list-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Full Data Sovereignty:</strong> Download or restore dedicated daily compressed backups (<code style="font-family: var(--font-mono);">.sql.gz</code>) anytime you choose.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
