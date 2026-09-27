// Feature Deep Dives: 4 Alternating Feature Sections (Standardized Business-First Copy)

export function renderFeatureDeepDives(): string {
  return `
    <section class="section-deep-dives" id="features" style="position: relative;">
      <!-- Hidden Anchor for legacy link compatibility -->
      <span id="capabilities" style="position: absolute; top: -80px;"></span>
      
      <div class="container">
        <!-- ================= ROW 1: POS ================= -->
        <div class="deep-dive-row">
          <!-- Left Text -->
          <div class="deep-dive-text">
            <div class="section-tag">01 / POS</div>
            <h2 class="section-title text-left">
              Sell faster. Keep the queue moving.
            </h2>
            <p class="section-subtitle text-left">
              Search products, scan barcodes, apply discounts and print receipts without slowing down the counter.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Fast Barcode Scanning</strong>
                  <p class="check-pill-desc">
                    Scan products and add them to the bill instantly.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Hold & Resume Bills</strong>
                  <p class="check-pill-desc">
                    Pause an unfinished sale and come back to it later.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Fast Checkout</strong>
                  <p class="check-pill-desc">
                    Complete payments and print receipts in seconds.
                  </p>
                </div>
              </div>
            </div>

            <!-- Technical Credibility Badge -->
            <div style="margin-top: 1.5rem;">
              <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.35rem 0.85rem; border-radius: 9999px; border: 1px solid var(--border-subtle); font-weight: 500;">
                <span style="color: var(--brand-primary); font-weight: 700;">•</span>
                <span>Built for high-volume retail counters</span>
              </span>
            </div>
          </div>

          <!-- Right Mockup -->
          <div class="mockup-window-frame">
            <div class="window-titlebar">
              <div class="window-dots">
                <span class="window-dot window-dot-red"></span>
                <span class="window-dot window-dot-yellow"></span>
                <span class="window-dot window-dot-green"></span>
              </div>
              <div class="window-address-bar">
                <span>quickpos.lk/pos — Counter Register #1</span>
              </div>
            </div>
            <img src="/assets/04_pos_active_cart.png" alt="QuickPOS Counter Register #1 Active Cart Interface" class="window-screen-img" />
          </div>
        </div>

        <!-- ================= ROW 2: INVENTORY ================= -->
        <div class="deep-dive-row deep-dive-reverse">
          <!-- Left Mockup -->
          <div class="mockup-window-frame">
            <div class="window-titlebar">
              <div class="window-dots">
                <span class="window-dot window-dot-red"></span>
                <span class="window-dot window-dot-yellow"></span>
                <span class="window-dot window-dot-green"></span>
              </div>
              <div class="window-address-bar">
                <span>quickpos.lk/products — Product Catalog</span>
              </div>
            </div>
            <img src="/assets/08_products_catalog.png" alt="QuickPOS Product Catalog & Excel Import" class="window-screen-img" />
          </div>

          <!-- Right Text -->
          <div class="deep-dive-text">
            <div class="section-tag">02 / INVENTORY</div>
            <h2 class="section-title text-left">
              Know exactly what you have.
            </h2>
            <p class="section-subtitle text-left">
              Track every product, variant and stock movement without relying on spreadsheets.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Import Your Existing Excel Sheet</strong>
                  <p class="check-pill-desc">
                    Bring your product list into QuickPOS without starting from scratch.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Know When Stock Is Running Low</strong>
                  <p class="check-pill-desc">
                    Get alerts before popular products run out so you can reorder in advance.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Audit Your Stock</strong>
                  <p class="check-pill-desc">
                    Compare physical stock with your system and identify differences quickly.
                  </p>
                </div>
              </div>
            </div>

            <!-- Technical Credibility Badge -->
            <div style="margin-top: 1.5rem;">
              <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.35rem 0.85rem; border-radius: 9999px; border: 1px solid var(--border-subtle); font-weight: 500;">
                <span style="color: var(--brand-primary); font-weight: 700;">•</span>
                <span>Import Excel / CSV files • Automatic variant grouping</span>
              </span>
            </div>
          </div>
        </div>

        <!-- ================= ROW 3: CREDIT ================= -->
        <div class="deep-dive-row">
          <!-- Left Text -->
          <div class="deep-dive-text">
            <div class="section-tag">03 / CREDIT</div>
            <h2 class="section-title text-left">
              Replace your Niyama Potha with a digital credit ledger.
            </h2>
            <p class="section-subtitle text-left">
              Know who owes you, how much they owe and when it's due—without searching through notebooks.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Every Customer's Balance in One Place</strong>
                  <p class="check-pill-desc">
                    See all customer balances, contact details and total credit owed across your store.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Credit Limits and Payment History</strong>
                  <p class="check-pill-desc">
                    Set strict credit ceilings so cashiers cannot over-extend debt; track complete payment records.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">See Overdue Customers Instantly</strong>
                  <p class="check-pill-desc">
                    Flag aging accounts (0–90+ days) before credit goes stale.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Send Payment Reminders Through WhatsApp</strong>
                  <p class="check-pill-desc">
                    Send polite, itemized statements and balance reminders to customer phones in one tap.
                  </p>
                </div>
              </div>
            </div>

            <!-- Technical Credibility Badge -->
            <div style="margin-top: 1.5rem;">
              <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.35rem 0.85rem; border-radius: 9999px; border: 1px solid var(--border-subtle); font-weight: 500;">
                <span style="color: var(--brand-primary); font-weight: 700;">•</span>
                <span>WhatsApp Business integration • 0–90+ days credit aging breakdown</span>
              </span>
            </div>
          </div>

          <!-- Right Mockup -->
          <div class="mockup-window-frame">
            <div class="window-titlebar">
              <div class="window-dots">
                <span class="window-dot window-dot-red"></span>
                <span class="window-dot window-dot-yellow"></span>
                <span class="window-dot window-dot-green"></span>
              </div>
              <div class="window-address-bar">
                <span>quickpos.lk/customers/view — Customer Profile 360</span>
              </div>
            </div>
            <img src="/assets/12_customer_profile_360.png" alt="QuickPOS Customer 360 Profile and Khata Credit Ledger" class="window-screen-img" />
          </div>
        </div>

        <!-- ================= ROW 4: FINANCIALS ================= -->
        <div class="deep-dive-row deep-dive-reverse">
          <!-- Left Mockup -->
          <div class="mockup-window-frame">
            <div class="window-titlebar">
              <div class="window-dots">
                <span class="window-dot window-dot-red"></span>
                <span class="window-dot window-dot-yellow"></span>
                <span class="window-dot window-dot-green"></span>
              </div>
              <div class="window-address-bar">
                <span>quickpos.lk/reports/profit-loss — Executive P&L</span>
              </div>
            </div>
            <img src="/assets/20_profit_loss_report.png" alt="QuickPOS Real-Time Executive Profit and Loss Statement" class="window-screen-img" />
          </div>

          <!-- Right Text -->
          <div class="deep-dive-text">
            <div class="section-tag">04 / FINANCIALS</div>
            <h2 class="section-title text-left">
              Know if your shop is actually making money.
            </h2>
            <p class="section-subtitle text-left">
              See your sales, expenses, stock costs and profit in one place—without calculating everything manually.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">See Your Real Profit</strong>
                  <p class="check-pill-desc">
                    Track revenue, costs and expenses together so you always know your true net margins.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Know What Your Stock Is Costing You</strong>
                  <p class="check-pill-desc">
                    QuickPOS automatically calculates your stock cost as you sell and restock.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Track Outstanding Cheques</strong>
                  <p class="check-pill-desc">
                    Know what's pending, cleared and overdue with 7-day maturity warnings.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Cashier Shift Float Reconciliation</strong>
                  <p class="check-pill-desc">
                    Enforced blind cash count prevents skimming and leakage at shift close.
                  </p>
                </div>
              </div>
            </div>

            <!-- Technical Credibility Badge -->
            <div style="margin-top: 1.5rem;">
              <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.35rem 0.85rem; border-radius: 9999px; border: 1px solid var(--border-subtle); font-weight: 500;">
                <span style="color: var(--brand-primary); font-weight: 700;">•</span>
                <span>Weighted Average Costing (AVCO) supported • Real-time P&L • Cheque Potha register</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
