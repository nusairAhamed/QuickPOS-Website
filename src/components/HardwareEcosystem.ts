// Hardware Ecosystem Component with High-Res Counter Setup Visual

export function renderHardwareEcosystem(): string {
  return `
    <section class="section-hardware" id="hardware">
      <div class="container">
        <div class="hardware-split">
          <!-- Left: Hardware Image Visual -->
          <div class="hardware-img-container">
            <img 
              src="/assets/pos-hardware.jpg" 
              alt="QuickPOS Retail Counter Hardware Setup with Terminal, Thermal Printer, Barcode Scanner and Drawer" 
              loading="lazy"
              decoding="async"
              style="width: 100%; height: auto; display: block;" 
            />
          </div>

          <!-- Right: Hardware Details & Compatibility Badges -->
          <div>
            <div class="section-tag">Zero Proprietary Lock-In</div>
            <h2 class="section-title" style="text-align: left; margin-bottom: 1.25rem;">
              Works Seamlessly with the Hardware You Already Own
            </h2>
            <p class="section-subtitle" style="text-align: left; margin-bottom: 2rem;">
              Never pay inflated prices for proprietary hardware locks. QuickPOS runs directly in standard web browsers and interfaces with industry-standard POS peripherals.
            </p>

            <!-- Hardware Badges Grid -->
            <div class="hardware-badges-list">
              <div class="hw-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <span>Any PC, Mac or Tablet</span>
              </div>
              <div class="hw-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                <span>80mm & 58mm Thermal Printers</span>
              </div>
              <div class="hw-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="7" y1="8" x2="7" y2="16"></line><line x1="10" y1="8" x2="10" y2="16"></line><line x1="13" y1="8" x2="13" y2="16"></line></svg>
                <span>USB & Bluetooth Scanners</span>
              </div>
              <div class="hw-chip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                <span>RJ11/RJ12 Cash Drawers</span>
              </div>
            </div>

            <div style="margin-top: 2rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">Tested Across:</span>
              <span class="badge badge-pill">Epson TM-T82</span>
              <span class="badge badge-pill">Xprinter 80C</span>
              <span class="badge badge-pill">Honeywell 1900G</span>
              <span class="badge badge-pill">Sunmi V2 Pro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
