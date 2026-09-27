// Complete Data Isolation Section (PDF Page 4) - Verbatim Copy & Enterprise Cloud Architecture Design

export function renderDataIsolation(): string {
  return `
    <section class="section-data-isolation" id="data-isolation">
      <div class="container">
        <div class="data-isolation-card isolation-split">
          <!-- Ambient Glow Effect -->
          <div class="isolation-glow"></div>

          <!-- Left Details Column -->
          <div class="isolation-info-col">
            <div class="isolation-badge">
              <span class="isolation-badge-dot"></span>
              <span>SECURITY</span>
            </div>

            <h2 class="isolation-heading">
              Your business data <span class="isolation-heading-gradient">stays yours.</span>
            </h2>

            <p class="isolation-description">
              Unlike multi-tenant apps that mix hundreds of retailers into one database table with a shared column, QuickPOS physically partitions every shop into an isolated database (<code class="isolation-code-pill">pos_tenant_{id}</code>). Your financial records and customer debts are strictly quarantined.
            </p>

            <div class="isolation-features-row">
              <div class="isolation-feature-item">
                <div class="isolation-feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>AUTOMATED NIGHTLY BACKUPS</span>
              </div>

              <div class="isolation-feature-item">
                <div class="isolation-feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>ROLE-BASED ACCESS (OWNER VS CASHIER)</span>
              </div>
            </div>
          </div>

          <!-- Right Interactive Architecture Terminal -->
          <div class="isolation-diagram-col">
            <div class="arch-terminal-window">
              <!-- Window Header -->
              <div class="arch-terminal-header">
                <div class="terminal-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="terminal-title">Physical Tenancy Partitioning</div>
                <div class="terminal-status">
                  <span class="pulse-dot"></span>
                  <span>ISOLATED</span>
                </div>
              </div>

              <!-- Terminal Body with 3 Architecture Tiers -->
              <div class="arch-tiers-list">
                <!-- Tier 1: Store App -->
                <div class="arch-tier-item tier-store">
                  <div class="arch-tier-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div class="arch-tier-content">
                    <div class="arch-tier-label">Store App:</div>
                    <div class="arch-tier-code">https://[your-store].quickpos.lk</div>
                  </div>
                  <span class="arch-tier-badge">SSL / TLS 1.3</span>
                </div>

                <!-- Connector Line 1 -->
                <div class="arch-connector">
                  <div class="connector-line"></div>
                  <div class="connector-arrow">↓</div>
                </div>

                <!-- Tier 2: Dedicated Database Schema -->
                <div class="arch-tier-item tier-db">
                  <div class="arch-tier-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  </div>
                  <div class="arch-tier-content">
                    <div class="arch-tier-label">Isolated Database:</div>
                    <div class="arch-tier-code">pos_tenant_{id} (Dedicated Schema)</div>
                  </div>
                  <span class="arch-tier-badge badge-active">Dedicated</span>
                </div>

                <!-- Connector Line 2 -->
                <div class="arch-connector">
                  <div class="connector-line"></div>
                  <div class="connector-arrow">↓</div>
                </div>

                <!-- Tier 3: Cold Storage -->
                <div class="arch-tier-item tier-backup">
                  <div class="arch-tier-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <div class="arch-tier-content">
                    <div class="arch-tier-label">Cold Storage:</div>
                    <div class="arch-tier-code">Nightly Gzip Encrypted Cloud Backup</div>
                  </div>
                  <span class="arch-tier-badge">Automated</span>
                </div>
              </div>

              <!-- Terminal Footer Note -->
              <div class="arch-terminal-footer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Hardware AES-256 Quarantined Storage Cluster · Zero Cross-Tenant Queries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
