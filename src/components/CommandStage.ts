// Interactive Command Stage Component with Multi-Image Slider Support per Tab

export interface StageSlide {
  id: string;
  label: string;
  img: string;
  url: string;
  title: string;
  desc: string;
}

export interface StageTab {
  id: string;
  name: string;
  iconSvg: string;
  slides: StageSlide[];
}

export const STAGE_TABS: Record<string, StageTab> = {
  'stage-pos': {
    id: 'stage-pos',
    name: 'POS',
    iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
    slides: [
      {
        id: 'pos-1',
        label: '1. Register V3',
        img: '/assets/03_pos_register_v3.png',
        url: 'https://lanka-grocery.quickpos.lk/pos',
        title: 'POS Counter Register V3 — /pos',
        desc: 'High-velocity barcode scanning, dual kg/rupee bulk sales, quick denomination tenders, and ESC/POS thermal receipts.'
      },
      {
        id: 'pos-2',
        label: '2. Active Cart & Quick Pay',
        img: '/assets/04_pos_active_cart.png',
        url: 'https://lanka-grocery.quickpos.lk/pos/checkout',
        title: 'Active Cart & Instant Cash Tender — /pos/checkout',
        desc: 'One-click Rs. 500, 1,000, 5,000 tenders, exact change calculation, multiple discount modes, and customer cart parking.'
      },
      {
        id: 'pos-3',
        label: '3. Transaction History',
        img: '/assets/07_transaction_history.png',
        url: 'https://lanka-grocery.quickpos.lk/pos/history',
        title: 'Live Cashier Shift Logs & Sales History — /pos/history',
        desc: 'Instant receipt search, item-level return audits, shift closeout summaries, and cash drawer reconciliations.'
      }
    ]
  },
  'stage-inventory': {
    id: 'stage-inventory',
    name: 'Inventory',
    iconSvg: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
    slides: [
      {
        id: 'inv-1',
        label: '1. Products Catalog',
        img: '/assets/05_products_catalog.png',
        url: 'https://lanka-grocery.quickpos.lk/products',
        title: 'Inventory & SheetJS Auto-Import — /products',
        desc: 'Auto-detects Sinhala and English retail columns, reorder thresholds, and variant hierarchy without manual data entry.'
      },
      {
        id: 'inv-2',
        label: '2. Stocktake & Audits',
        img: '/assets/10_stocktakes_audit.png',
        url: 'https://lanka-grocery.quickpos.lk/inventory/stocktakes',
        title: 'Physical Stock Audits & Discrepancies — /stocktakes',
        desc: 'Barcode-driven physical vs book stock counting, discrepancy flags, variance value calculation, and shrinkage audits.'
      },
      {
        id: 'inv-3',
        label: '3. Bulk Produce Matrix',
        img: '/assets/inventory.png',
        url: 'https://lanka-grocery.quickpos.lk/inventory/matrix',
        title: 'Categorized Produce & Loose Unit Pricing — /inventory',
        desc: 'Multi-tiered pricing for kilogram, gram, and pack units with automated reorder alerts for high-turnover grocery lines.'
      }
    ]
  },
  'stage-credit': {
    id: 'stage-credit',
    name: 'Credit',
    iconSvg: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
    slides: [
      {
        id: 'credit-1',
        label: '1. Credit Aging Buckets',
        img: '/assets/13_credit_aging_report.png',
        url: 'https://lanka-grocery.quickpos.lk/credit-aging',
        title: 'Niyama Potha Customer Credit & Aging — /credit-aging',
        desc: '30, 60, 90+ day aging buckets, verified customer credit limits, and 1-click WhatsApp payment recovery alerts.'
      },
      {
        id: 'credit-2',
        label: '2. Customer Directory',
        img: '/assets/11_customers_directory.png',
        url: 'https://lanka-grocery.quickpos.lk/customers',
        title: 'Customer Directory & Credit Thresholds — /customers',
        desc: 'Instant phone search, individual credit ceiling management, outstanding balances, and customer loyalty profiles.'
      },
      {
        id: 'credit-3',
        label: '3. Customer 360 Profile',
        img: '/assets/12_customer_profile_360.png',
        url: 'https://lanka-grocery.quickpos.lk/customers/profile',
        title: 'Customer 360 Ledger & WhatsApp Recovery — /customers/360',
        desc: 'Full debit/credit audit trail, repayment history, unpaid invoice drill-downs, and automated statement dispatch.'
      }
    ]
  },
  'stage-cheque': {
    id: 'stage-cheque',
    name: 'Cheques',
    iconSvg: '<rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>',
    slides: [
      {
        id: 'cheque-1',
        label: '1. Cheque Register',
        img: '/assets/16_cheque_register.png',
        url: 'https://lanka-grocery.quickpos.lk/cheques',
        title: 'Automated Cheque Potha Register — /cheques',
        desc: 'Lifecycle clearance for customer and vendor cheques with 7-day maturity warnings and automated bank ledger reconciliation.'
      },
      {
        id: 'cheque-2',
        label: '2. Treasury & Multi-Bank',
        img: '/assets/14_banking_treasury.png',
        url: 'https://lanka-grocery.quickpos.lk/banking',
        title: 'Multi-Bank Treasury & Safe Drops — /banking',
        desc: 'Real-time cash in hand vs bank accounts, cashier safe deposit logs, and multi-branch fund transfers.'
      },
      {
        id: 'cheque-3',
        label: '3. Expense Management',
        img: '/assets/15_expenses_hub.png',
        url: 'https://lanka-grocery.quickpos.lk/expenses',
        title: 'Petty Cash & Expense Categorization — /expenses',
        desc: 'Categorized operational expenses, utility bills, supplier payouts, and cash drawer expense reconciliation.'
      }
    ]
  },
  'stage-financials': {
    id: 'stage-financials',
    name: 'P&L',
    iconSvg: '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
    slides: [
      {
        id: 'pnl-1',
        label: '1. Real-Time AVCO P&L',
        img: '/assets/20_profit_loss_report.png',
        url: 'https://lanka-grocery.quickpos.lk/reports/profit-loss',
        title: 'Real-Time AVCO Executive P&L — /reports/profit-loss',
        desc: 'Weighted Average Costing (AVCO), live Gross Revenue, return adjustments, operating expenses, and net profit margins.'
      },
      {
        id: 'pnl-2',
        label: '2. Balance Sheet',
        img: '/assets/21_balance_sheet.png',
        url: 'https://lanka-grocery.quickpos.lk/reports/balance-sheet',
        title: 'Double-Entry Balance Sheet — /reports/balance-sheet',
        desc: 'Asset valuation, supplier accounts payable, customer receivables, and real-time equity balance calculations.'
      },
      {
        id: 'pnl-3',
        label: '3. Sales Analytics',
        img: '/assets/19_sales_report.png',
        url: 'https://lanka-grocery.quickpos.lk/reports/sales',
        title: 'Product & Hourly Sales Performance — /reports/sales',
        desc: 'Peak rush hour throughput, top-selling margin contributors, and cashier speed benchmarks.'
      }
    ]
  }
};

export function renderCommandStage(): string {
  const initialTabKey = 'stage-pos';
  const initialTab = STAGE_TABS[initialTabKey];
  const initialSlide = initialTab.slides[0];

  return `
    <section class="section-command-stage" id="command-stage">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">SEE THE PRODUCT</div>
          <h2 class="section-title">See QuickPOS in action</h2>
          <p class="section-subtitle">
            Switch between core application modules and browse detailed production screens with the interactive slider.
          </p>
        </div>

        <!-- 5 Tabs Navigation -->
        <div class="tab-nav-wrapper">
          <div class="tab-nav-container">
            ${Object.values(STAGE_TABS).map((tab, idx) => `
              <button class="tab-nav-btn ${idx === 0 ? 'active' : ''}" data-stage="${tab.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">${tab.iconSvg}</svg>
                <span>${tab.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Sub-navigation: Slide Pills Selector -->
        <div class="stage-subnav-wrapper">
          <div class="stage-subnav-container" id="stage-subnav">
            ${initialTab.slides.map((slide, idx) => `
              <button class="stage-subnav-pill ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
                <span>${slide.label}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Stage Showcase Display Frame -->
        <div class="command-stage-frame">
          <!-- Titlebar -->
          <div class="window-titlebar">
            <div class="window-dots">
              <span class="window-dot window-dot-red"></span>
              <span class="window-dot window-dot-yellow"></span>
              <span class="window-dot window-dot-green"></span>
            </div>
            <div class="window-address-bar" id="stage-address-bar">
              <span>${initialSlide.url}</span>
            </div>
            <div class="stage-titlebar-badge" id="stage-slide-badge">
              <span class="badge-pulse-dot" style="width: 6px; height: 6px;"></span>
              <span id="stage-counter-text">Screen 1 of ${initialTab.slides.length}</span>
            </div>
          </div>

          <!-- Slide Autoplay Progress Bar -->
          <div class="stage-progress-track">
            <div class="stage-progress-bar" id="stage-progress-bar"></div>
          </div>

          <!-- Active Slider Viewport -->
          <div class="stage-slider-container" id="stage-slider-viewport">
            
            <!-- Slide Image -->
            <img 
              id="stage-active-img" 
              src="${initialSlide.img}" 
              alt="${initialSlide.title}" 
              class="window-screen-img stage-screen-img"
              style="width: 100%; height: auto; display: block; transition: opacity 0.25s ease, transform 0.25s ease;" 
            />

            <!-- Prev Navigation Arrow -->
            <button class="stage-slider-arrow stage-slider-prev" id="stage-prev-btn" aria-label="Previous screen" title="Previous screen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <!-- Next Navigation Arrow -->
            <button class="stage-slider-arrow stage-slider-next" id="stage-next-btn" aria-label="Next screen" title="Next screen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <!-- Floating Indicator Dots -->
            <div class="stage-dots-bar" id="stage-dots-bar">
              ${initialTab.slides.map((_, idx) => `
                <button class="stage-dot ${idx === 0 ? 'active' : ''}" data-dot-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
              `).join('')}
            </div>
          </div>

          <!-- Stage Info Bottom Bar -->
          <div class="stage-info-bar" style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.75rem; background: var(--bg-surface-elevated); border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
            <div>
              <h4 id="stage-info-title" style="font-size: 1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.2rem;">
                ${initialSlide.title}
              </h4>
              <p id="stage-info-desc" style="font-size: 0.85rem; color: var(--text-secondary);">
                ${initialSlide.desc}
              </p>
            </div>
            <button class="btn btn-secondary btn-sm open-trial-modal-btn">
              <span>View Specifications →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
