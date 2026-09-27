// Feature Deep Dives: 4 Alternating Feature Sections (Exact user headings)

export function renderFeatureDeepDives(): string {
  return `
    <section class="section-deep-dives" id="capabilities">
      <div class="container">
        <!-- ================= ROW 1: POS ================= -->
        <div class="deep-dive-row">
          <!-- Left Text -->
          <div class="deep-dive-text">
            <div class="section-tag">01 / POS</div>
            <h2 class="section-title text-left">
              Sell faster. Even with lines out the door.
            </h2>
            <p class="section-subtitle text-left">
              Designed for speed at the counter. Sub-second barcode scanning, single-key item search, dual kg/rupee bulk calculations, and immediate thermal receipt printing.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Dual Weight & Rupee Bulk Calculator</strong>
                  <p class="check-pill-desc">
                    Enter grams or enter "Rs. 150 worth of Dhal" — QuickPOS back-calculates exact weight down to 2 decimals.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Hold & Instant Resume</strong>
                  <p class="check-pill-desc">
                    Park an incomplete cart when a customer grabs an extra item; serve the next person with zero delay.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Automatic Drawer Kickout & Receipt Print</strong>
                  <p class="check-pill-desc">
                    Fast ESC/POS 80mm and 58mm printer integration via browser print or OS Tray.
                  </p>
                </div>
              </div>
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
            <img src="/assets/08_products_catalog.png" alt="QuickPOS Product Catalog & Excel SheetJS Parser" class="window-screen-img" />
          </div>

          <!-- Right Text -->
          <div class="deep-dive-text">
            <div class="section-tag">02 / INVENTORY</div>
            <h2 class="section-title text-left">
              Know exactly what you have.
            </h2>
            <p class="section-subtitle text-left">
              No more typing thousands of barcodes by hand. Our built-in SheetJS parser maps Sinhala and English retail columns automatically from existing spreadsheets.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Automated Reorder Point Alerts</strong>
                  <p class="check-pill-desc">
                    Dashboard flags fast-moving items before they run out so you can issue purchase orders in advance.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Physical Barcode Stocktakes & Audits</strong>
                  <p class="check-pill-desc">
                    Audit aisles with a barcode scanner; hear confirmation beeps, and auto-reconcile shrinkage variance.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Clean Variant Grouping</strong>
                  <p class="check-pill-desc">
                    Group items by size, color, or packaging without cluttering the primary cashier register.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= ROW 3: CREDIT ================= -->
        <div class="deep-dive-row">
          <!-- Left Text -->
          <div class="deep-dive-text">
            <div class="section-tag">03 / CREDIT</div>
            <h2 class="section-title text-left">
              Turn your Niyama Potha into a digital ledger.
            </h2>
            <p class="section-subtitle text-left">
              Replace forgotten credit notebooks with a digital ledger that protects your working capital. Set strict customer ceilings, review debt aging, and collect receivables faster.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Customer 360 & Approved Credit Limits</strong>
                  <p class="check-pill-desc">
                    Cashiers cannot exceed owner-approved credit ceilings. View lifetime spend and current debt at a glance.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Credit Aging Breakdown (0–90+ Days)</strong>
                  <p class="check-pill-desc">
                    Close visualization of balances by age to identify delinquent accounts before debts go stale.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">1-Click WhatsApp Payment Reminders</strong>
                  <p class="check-pill-desc">
                    Send polite, itemized statements and arrears to customer phones with a single tap.
                  </p>
                </div>
              </div>
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
              Stop guessing your margins at month-end. QuickPOS computes accurate Weighted Average Costing (AVCO), Gross and Net P&L, and gives you total visibility over supplier cheques.
            </p>
            <div class="feature-check-list">
              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Real-Time AVCO Profit & Loss</strong>
                  <p class="check-pill-desc">
                    Factored purchase costs yield exact gross operating expenses (rent, utilities, wages) from daily revenues.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Automated Cheque Potha Register</strong>
                  <p class="check-pill-desc">
                    Tracks customer and vendor cheques across Pending → Due → Cleared with 7-day maturity warnings.
                  </p>
                </div>
              </div>

              <div class="feature-check-pill">
                <div class="feature-check-icon">✓</div>
                <div>
                  <strong class="check-pill-title">Cashier Shift Float Reconciliation</strong>
                  <p class="check-pill-desc">
                    Enforced blind cash count prevents skimming and leakage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
