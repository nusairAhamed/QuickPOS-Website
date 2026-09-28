// Hardware Section with Interactive Hotspot Showcase (pos2.png)

export function renderHardwareSection(): string {
  return `
    <section class="section-hardware-agnostic" id="hardware">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">HARDWARE</div>
          <h2 class="section-title">Use the hardware you already have.</h2>
          <p class="section-subtitle">
            You don't need an expensive proprietary POS machine. QuickPOS works with the computers, printers and scanners you already use.
          </p>
        </div>

        <!-- Hardware Interactive Hotspot Stage -->
        <div class="hardware-hotspot-stage-wrapper">
          <div class="hardware-hotspot-stage" id="hardware-stage">
            
            <!-- Main 3D Isolated Hardware Setup Image -->
            <img 
              src="/assets/pos2.png" 
              alt="QuickPOS Complete Retail Counter Hardware Ecosystem" 
              class="hardware-stage-img"
              loading="lazy"
            />

            <!-- Ambient Glow Overlay -->
            <div class="hardware-stage-glow"></div>

            <!-- Hotspot 1: Standard PC / Touch POS Terminal -->
            <div class="hardware-hotspot-item active" data-hotspot="pc" style="top: 32%; left: 42%;">
              <button class="hotspot-pin" aria-label="View PC & POS Terminal Details">
                <span class="hotspot-pulse"></span>
                <span class="hotspot-core">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </span>
              </button>
              
              <!-- Clean Minimal Hotspot Card -->
              <div class="hotspot-card hotspot-card-bottom-right">
                <h4 class="hotspot-card-title">Standard PC or Touch POS</h4>
                <p class="hotspot-card-desc">
                  Runs in Chrome, Edge, or Firefox. Works with zero local software installs or driver conflicts.
                </p>
              </div>
            </div>

            <!-- Hotspot 2: Thermal Printers -->
            <div class="hardware-hotspot-item" data-hotspot="printers" style="top: 76%; left: 74%;">
              <button class="hotspot-pin" aria-label="View Thermal Printer Details">
                <span class="hotspot-pulse"></span>
                <span class="hotspot-core">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                </span>
              </button>

              <!-- Clean Minimal Hotspot Card -->
              <div class="hotspot-card hotspot-card-top-left">
                <h4 class="hotspot-card-title">Thermal Printers</h4>
                <p class="hotspot-card-desc">
                  Full ESC/POS support for 80mm and 58mm thermal printers (Epson, Xprinter, Rongta, Sewoo).
                </p>
              </div>
            </div>

            <!-- Hotspot 3: Barcode Scanners -->
            <div class="hardware-hotspot-item" data-hotspot="scanners" style="top: 60%; left: 90%;">
              <button class="hotspot-pin" aria-label="View Barcode Scanner Details">
                <span class="hotspot-pulse"></span>
                <span class="hotspot-core">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="10" y1="8" x2="10" y2="16"/><line x1="13" y1="8" x2="13" y2="16"/><line x1="17" y1="8" x2="17" y2="16"/></svg>
                </span>
              </button>

              <!-- Clean Minimal Hotspot Card -->
              <div class="hotspot-card hotspot-card-top-left">
                <h4 class="hotspot-card-title">Barcode Scanners</h4>
                <p class="hotspot-card-desc">
                  Works with any standard USB or wireless handheld barcode scanner via keyboard emulation.
                </p>
              </div>
            </div>

            <!-- Hotspot 4: Cash Drawers -->
            <div class="hardware-hotspot-item" data-hotspot="drawers" style="top: 80%; left: 36%;">
              <button class="hotspot-pin" aria-label="View Cash Drawer Details">
                <span class="hotspot-pulse"></span>
                <span class="hotspot-core">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/></svg>
                </span>
              </button>

              <!-- Clean Minimal Hotspot Card -->
              <div class="hotspot-card hotspot-card-top-center">
                <h4 class="hotspot-card-title">Cash Drawers</h4>
                <p class="hotspot-card-desc">
                  RJ-11 connection to your receipt printer kicks the drawer open on cash sales automatically.
                </p>
              </div>
            </div>

          </div>

          <!-- Interactive Selector Navigation Buttons Below Setup -->
          <div class="hardware-selector-bar">
            <button class="hardware-selector-btn active" data-target-hotspot="pc">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <span>1. Standard PC / Touch POS</span>
            </button>
            <button class="hardware-selector-btn" data-target-hotspot="printers">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              <span>2. Thermal Printers</span>
            </button>
            <button class="hardware-selector-btn" data-target-hotspot="scanners">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="10" y1="8" x2="10" y2="16"/></svg>
              <span>3. Barcode Scanners</span>
            </button>
            <button class="hardware-selector-btn" data-target-hotspot="drawers">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/></svg>
              <span>4. Cash Drawers</span>
            </button>
          </div>

          <!-- Active Hardware Details Card for Mobile & Touch Screen Clarity -->
          <div class="hardware-info-card" id="hardware-info-card">
            <div class="hardware-info-card-header">
              <span class="badge-pulse-dot" style="width: 6px; height: 6px;"></span>
              <h4 id="hardware-info-card-title">Standard PC or Touch POS</h4>
            </div>
            <p id="hardware-info-card-desc">
              Runs in Chrome, Edge, or Firefox. Works with zero local software installs or driver conflicts.
            </p>
          </div>

          <!-- Technical Credibility Tag -->
          <div style="margin-top: 1.5rem; text-align: center;">
            <span style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.45rem 1.1rem; border-radius: 9999px; background: var(--bg-surface); border: 1px solid var(--border-subtle); font-size: 0.82rem; color: var(--text-muted); font-weight: 500; box-shadow: var(--shadow-sm);">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>ESC/POS compatible printers & standard USB / Wireless peripherals supported</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  `;
}
