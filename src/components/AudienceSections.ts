// Audience Sections Component ("Why is it worth to use QuickPOS?")

export function renderAudienceSections(): string {
  return `
    <section class="section-audience" id="solutions" style="padding: 5.5rem 0;">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">Engineered for Your Business Model</div>
          <h2 class="section-title">Why Is It Worth to Use QuickPOS?</h2>
          <p class="section-subtitle">
            Generic POS systems force your business into rigid boxes. QuickPOS is tailored specifically for high-frequency retail, loose commodities, and credit-driven merchant relationships.
          </p>
        </div>

        <!-- 3 Feature Highlight Columns -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;" class="audience-grid-3">
          <!-- Card 1: Supermarkets & Grocery Stores -->
          <div class="stat-card" style="text-align: left; display: flex; flex-direction: column;">
            <div class="skeleton-loading" style="border-radius: 0.85rem; overflow: hidden; margin-bottom: 1.5rem; height: 180px;">
              <img src="/assets/supermarket-store.jpg" alt="Supermarket and grocery retail checkout" class="skeleton-img" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="badge badge-pill" style="align-self: flex-start; margin-bottom: 0.75rem;">
              Supermarkets & Groceries
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.6rem;">
              Loose Bulk & Weight Selling
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem; flex: 1;">
              Pre-packaged barcodes are simple. Loose dhal, rice, sugar, spices, produce, and bulk liquids are where other systems fail. QuickPOS handles kg, grams, liters, and rupee back-calculations natively.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Zero rounding discrepancies on gram weights</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Drag-and-drop messy Excel product catalogs</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Unified multi-pack & size variant hierarchy</span>
              </li>
            </ul>
          </div>

          <!-- Card 2: Pharmacies & Dispensaries -->
          <div class="stat-card" style="text-align: left; display: flex; flex-direction: column;">
            <div style="border-radius: 0.85rem; overflow: hidden; margin-bottom: 1.5rem; height: 180px; background: var(--bg-surface-subtle); display: flex; align-items: center; justify-content: center;">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <div class="badge badge-pill" style="align-self: flex-start; margin-bottom: 0.75rem;">
              Pharmacies & Counters
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.6rem;">
              Rapid Dispensing & Audit Control
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem; flex: 1;">
              When customer queues demand split-second dispensing, pharmacists can search by generic aliases, brand names, or strip barcodes with instant stock visibility.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Instant SKU alias search across 20,000+ medicines</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Blind shift cash drawer counts eliminate shrinkage</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Mandatory return reason codes & restock ledger</span>
              </li>
            </ul>
          </div>

          <!-- Card 3: Wholesale & Multi-Branch Merchants -->
          <div class="stat-card" style="text-align: left; display: flex; flex-direction: column;">
            <div style="border-radius: 0.85rem; overflow: hidden; margin-bottom: 1.5rem; height: 180px; background: var(--bg-surface-subtle); display: flex; align-items: center; justify-content: center;">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--brand-indigo)" stroke-width="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div class="badge badge-pill" style="align-self: flex-start; margin-bottom: 0.75rem;">
              Wholesale & Multi-Branch
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.6rem;">
              Khata Ledger & Inter-Branch Transfers
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem; flex: 1;">
              Manage trade customer credit with 30/60/90-day aging buckets, automated WhatsApp recovery reminders, post-dated cheque tracking, and multi-branch stock transfers.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Automated WhatsApp & SMS credit reminders</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Cheque clearing lifecycle (Pending, Cleared, Bounced)</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Inter-branch transfer dispatch & receive verification</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
