// Trial Modal & Onboarding Sandbox Popup

export function renderTrialModal(): string {
  return `
    <div class="modal-backdrop" id="trial-modal-backdrop" aria-hidden="true">
      <div class="modal-card">
        <!-- Close Button -->
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Close dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style="margin-bottom: 1.5rem;">
          <div class="badge badge-pill" style="margin-bottom: 0.5rem;">⚡ 30-Day Free Trial</div>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.35rem;">
            Provision Your Store Vault
          </h3>
          <p style="font-size: 0.875rem; color: var(--text-secondary);">
            Get an isolated database instance and custom subdomain in under 5 minutes. No credit card required.
          </p>
        </div>

        <form id="trial-modal-form">
          <div class="modal-form-group">
            <label class="modal-label" for="trial-store-name">Store or Business Name</label>
            <input type="text" id="trial-store-name" class="modal-input" placeholder="e.g. City Supermarket & Groceries" required />
          </div>

          <div class="modal-form-group">
            <label class="modal-label" for="trial-subdomain">Desired Dedicated Subdomain</label>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="text" id="trial-subdomain" class="modal-input" placeholder="citysuper" style="flex: 1;" required />
              <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); font-family: var(--font-mono);">.quickpos.lk</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="modal-form-group">
              <label class="modal-label" for="trial-phone">WhatsApp / Mobile No</label>
              <input type="tel" id="trial-phone" class="modal-input" placeholder="+94 77 123 4567" required />
            </div>

            <div class="modal-form-group">
              <label class="modal-label" for="trial-store-type">Primary Business Type</label>
              <select id="trial-store-type" class="modal-input">
                <option value="supermarket">Supermarket / Grocery</option>
                <option value="pharmacy">Pharmacy / Chemist</option>
                <option value="wholesale">Wholesale & Bulk Trade</option>
                <option value="multi-branch">Multi-Branch Retail Chain</option>
              </select>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 0.5rem;" id="trial-submit-btn">
            <span>Provision My Dedicated Store →</span>
          </button>
        </form>

        <div id="trial-success-message" style="display: none; text-align: center; padding: 1.5rem 0;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🎉</div>
          <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--brand-accent-green); margin-bottom: 0.5rem;">
            Dedicated Database Vault Requested!
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Your store environment is being provisioned. Our onboarding specialist will reach out on WhatsApp within 15 minutes with your private credentials and guided catalog setup.
          </p>
          <button class="btn btn-primary btn-md" onclick="document.getElementById('trial-modal-backdrop').classList.remove('open')" style="width: 100%;">
            Done
          </button>
        </div>
      </div>
    </div>
  `;
}
