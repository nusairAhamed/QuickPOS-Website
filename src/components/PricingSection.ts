import { t } from '../i18n';

// Pricing Section Component (PDF Page 5)

export function renderPricingSection(): string {
  return `
    <section class="section-pricing" id="pricing" style="padding: 5.5rem 0;">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag" data-i18n="pricingSection.tag">${t('pricingSection.tag')}</div>
          <h2 class="section-title" data-i18n-html="pricingSection.title">
            ${t('pricingSection.title')}
          </h2>
          <p class="section-subtitle" data-i18n="pricingSection.subtitle">
            ${t('pricingSection.subtitle')}
          </p>
        </div>

        <!-- Plan Card -->
        <div class="pricing-main-card" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <div class="pricing-card-badge" data-i18n="pricingSection.badge">${t('pricingSection.badge')}</div>

          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.4rem;" data-i18n="pricingSection.planTitle">
            ${t('pricingSection.planTitle')}
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;" data-i18n="pricingSection.planSubtitle">
            ${t('pricingSection.planSubtitle')}
          </p>

          <div style="margin: 1.75rem 0;">
            <div style="font-size: clamp(2.5rem, 4vw, 3.25rem); font-weight: 800; color: var(--text-primary); line-height: 1.1;" data-i18n="pricingSection.freeDays">
              ${t('pricingSection.freeDays')}
            </div>
            <div style="font-size: 1.15rem; color: var(--brand-accent-green); font-weight: 700; margin-top: 0.75rem;" data-i18n="pricingSection.monthly">
              ${t('pricingSection.monthly')}
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;" data-i18n="pricingSection.annual">
              ${t('pricingSection.annual')}
            </div>
          </div>

          <!-- Feature Grid -->
          <div class="plan-features-grid">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="pricingSection.feature1">${t('pricingSection.feature1')}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="pricingSection.feature2">${t('pricingSection.feature2')}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="pricingSection.feature3">${t('pricingSection.feature3')}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="pricingSection.feature4">${t('pricingSection.feature4')}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="pricingSection.feature5">${t('pricingSection.feature5')}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span data-i18n="pricingSection.feature6">${t('pricingSection.feature6')}</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem; align-items: center;">
            <button class="btn btn-primary btn-lg open-trial-modal-btn" style="width: 100%;">
              <span data-i18n="pricingSection.startTrial">${t('pricingSection.startTrial')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
