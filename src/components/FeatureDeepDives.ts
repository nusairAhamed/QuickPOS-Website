// Feature Deep Dives: 4 Alternating Feature Sections (Standardized Hero Showcases)

export function renderFeatureDeepDives(): string {
  return `
    <section class="section-deep-dives" id="features" style="position: relative;">
      <!-- Hidden Anchor for legacy link compatibility -->
      <span id="capabilities" style="position: absolute; top: -80px;"></span>
      
      <div class="container">
        <!-- ================= ROW 1: POS (HERO SHOWCASE) ================= -->
        <div class="deep-dive-showcase">
          <!-- Top Section Header (Side-by-Side Heading & Copy) -->
          <div class="deep-dive-showcase-header showcase-header-split">
            <div class="showcase-header-left">
              <div class="section-tag">01 / POS</div>
              <h2 class="section-title text-left">
                Sell faster. Keep the queue moving.
              </h2>
            </div>
            <div class="showcase-header-right">
              <p class="section-subtitle text-left">
                Search products, scan barcodes, apply discounts and print receipts without slowing down the counter.
              </p>
            </div>
          </div>

          <!-- Massive Prominent 3D Visual Centerpiece -->
          <div class="feature-3d-stage feature-3d-stage-hero">
            <div class="feature-3d-holder skeleton-loading">
              <img 
                src="/assets/feature-pos-3d.png" 
                alt="QuickPOS High-Velocity Counter Register with Barcode Scanning and Thermal Printing" 
                class="feature-3d-img feature-3d-img-hero skeleton-img"
                width="1859"
                height="846"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- 3 Benefit Cards in a Balanced 3-Column Grid -->
          <div class="showcase-feature-grid showcase-feature-grid-3">
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
        </div>

        <!-- ================= ROW 2: INVENTORY (HERO SHOWCASE) ================= -->
        <div class="deep-dive-showcase">
          <!-- Top Section Header (Side-by-Side Heading & Copy) -->
          <div class="deep-dive-showcase-header showcase-header-split">
            <div class="showcase-header-left">
              <div class="section-tag">02 / INVENTORY</div>
              <h2 class="section-title text-left">
                Know exactly what you have.
              </h2>
            </div>
            <div class="showcase-header-right">
              <p class="section-subtitle text-left">
                Track every product, variant and stock movement without relying on spreadsheets.
              </p>
            </div>
          </div>

          <!-- Massive Prominent 3D Visual Centerpiece -->
          <div class="feature-3d-stage feature-3d-stage-hero">
            <div class="feature-3d-holder skeleton-loading">
              <img 
                src="/assets/feature-inventory-3d.png" 
                alt="QuickPOS Real-Time Inventory Control with Excel Import and Low Stock Alerts" 
                class="feature-3d-img feature-3d-img-hero skeleton-img"
                width="1663"
                height="946"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- 3 Benefit Cards in a Balanced 3-Column Grid -->
          <div class="showcase-feature-grid showcase-feature-grid-3">
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
        </div>

        <!-- ================= ROW 3: CREDIT (HERO SHOWCASE) ================= -->
        <div class="deep-dive-showcase">
          <!-- Top Section Header (Side-by-Side Heading & Copy) -->
          <div class="deep-dive-showcase-header showcase-header-split">
            <div class="showcase-header-left">
              <div class="section-tag">03 / CREDIT</div>
              <h2 class="section-title text-left">
                Replace your Niyama Potha with a digital credit ledger.
              </h2>
            </div>
            <div class="showcase-header-right">
              <p class="section-subtitle text-left">
                Know who owes you, how much they owe and when it's due—without searching through notebooks.
              </p>
            </div>
          </div>

          <!-- Massive Prominent 3D Visual Centerpiece -->
          <div class="feature-3d-stage feature-3d-stage-hero">
            <div class="feature-3d-holder skeleton-loading">
              <img 
                src="/assets/feature-credit-3d.png" 
                alt="QuickPOS Customer 360 Credit Khata Ledger with Automated WhatsApp Reminders" 
                class="feature-3d-img feature-3d-img-hero skeleton-img"
                width="1663"
                height="945"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- 4 Benefit Cards in a Balanced 2x2 Grid -->
          <div class="showcase-feature-grid">
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
                <strong class="check-pill-title">Send Payment Reminders</strong>
                <p class="check-pill-desc">
                  Send polite, itemized statements and balance reminders via WhatsApp or SMS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= ROW 4: FINANCIALS (HERO SHOWCASE) ================= -->
        <div class="deep-dive-showcase">
          <!-- Top Section Header (Side-by-Side Heading & Copy) -->
          <div class="deep-dive-showcase-header showcase-header-split">
            <div class="showcase-header-left">
              <div class="section-tag">04 / FINANCIALS</div>
              <h2 class="section-title text-left">
                Know if your shop is actually making money.
              </h2>
            </div>
            <div class="showcase-header-right">
              <p class="section-subtitle text-left">
                See your sales, expenses, stock costs and profit in one place—without calculating everything manually.
              </p>
            </div>
          </div>

          <!-- Massive Prominent 3D Visual Centerpiece -->
          <div class="feature-3d-stage feature-3d-stage-hero">
            <div class="feature-3d-holder skeleton-loading">
              <img 
                src="/assets/feature-reports-3d.png" 
                alt="QuickPOS Real-Time Executive Profit and Loss Statement with Financials" 
                class="feature-3d-img feature-3d-img-hero skeleton-img"
                width="1665"
                height="945"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- 4 Benefit Cards in a Balanced 2x2 Grid -->
          <div class="showcase-feature-grid">
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
        </div>
      </div>
    </section>
  `;
}
