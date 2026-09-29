import { t } from '../i18n';

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
          <div class="badge badge-pill" style="margin-bottom: 0.5rem;" data-i18n="modal.badge">${t('modal.badge')}</div>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.35rem;" data-i18n="modal.title">
            ${t('modal.title')}
          </h3>
          <p style="font-size: 0.875rem; color: var(--text-secondary);" data-i18n="modal.desc">
            ${t('modal.desc')}
          </p>
        </div>

        <form id="trial-modal-form">
          <div class="modal-form-group">
            <label class="modal-label" for="trial-store-name" data-i18n="modal.storeNameLabel">${t('modal.storeNameLabel')}</label>
            <input type="text" id="trial-store-name" class="modal-input" placeholder="${t('modal.storeNamePlaceholder')}" data-i18n-placeholder="modal.storeNamePlaceholder" required />
          </div>

          <div class="modal-form-group">
            <label class="modal-label" for="trial-subdomain" data-i18n="modal.subdomainLabel">${t('modal.subdomainLabel')}</label>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="text" id="trial-subdomain" class="modal-input" placeholder="citysuper" style="flex: 1;" required />
              <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); font-family: var(--font-mono);">.quickpos.lk</span>
            </div>
          </div>

          <div class="modal-form-group">
            <label class="modal-label" for="trial-phone" data-i18n="modal.phoneLabel">${t('modal.phoneLabel')}</label>
            <input type="tel" id="trial-phone" class="modal-input" placeholder="${t('modal.phonePlaceholder')}" data-i18n-placeholder="modal.phonePlaceholder" required />
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 0.5rem;" id="trial-submit-btn">
            <span data-i18n="modal.submitBtn">${t('modal.submitBtn')}</span>
          </button>
        </form>

        <div id="trial-success-message" style="display: none; text-align: center; padding: 1.5rem 0;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🎉</div>
          <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--brand-accent-green); margin-bottom: 0.5rem;" data-i18n="modal.successTitle">
            ${t('modal.successTitle')}
          </h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.5rem;" data-i18n="modal.successDesc">
            ${t('modal.successDesc')}
          </p>
          <button class="btn btn-primary btn-md" onclick="document.getElementById('trial-modal-backdrop').classList.remove('open')" style="width: 100%;">
            <span data-i18n="modal.doneBtn">${t('modal.doneBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
