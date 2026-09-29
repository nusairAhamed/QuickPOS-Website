import { t } from '../i18n';

// Transformation Section: Paper & Guesswork vs Automated Control (from PDF Page 1 & 2)

export function renderTransformation(): string {
  return `
    <section class="section-transformation" id="transformation">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag" data-i18n="transformation.tag">${t('transformation.tag')}</div>
          <h2 class="section-title" data-i18n="transformation.title">
            ${t('transformation.title')}
          </h2>
          <p class="section-subtitle" data-i18n="transformation.subtitle">
            ${t('transformation.subtitle')}
          </p>
        </div>

        <!-- Comparison Cards Box -->
        <div class="transformation-comparison-grid">
          <!-- Left: Paper & Guesswork -->
          <div class="trans-card trans-card-old">
            <div class="trans-card-header">
              <h3 class="trans-card-title trans-title-old" data-i18n="transformation.oldTitle">${t('transformation.oldTitle')}</h3>
              <span class="badge badge-old-friction" data-i18n="transformation.oldBadge">${t('transformation.oldBadge')}</span>
            </div>
            <ul class="trans-card-list">
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span data-i18n="transformation.oldItem1">${t('transformation.oldItem1')}</span>
              </li>
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span data-i18n="transformation.oldItem2">${t('transformation.oldItem2')}</span>
              </li>
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span data-i18n="transformation.oldItem3">${t('transformation.oldItem3')}</span>
              </li>
              <li class="trans-item-old">
                <span class="trans-cross-icon">✕</span>
                <span data-i18n="transformation.oldItem4">${t('transformation.oldItem4')}</span>
              </li>
            </ul>
          </div>

          <!-- Middle Arrow -->
          <div class="trans-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          <!-- Right: Automated Control -->
          <div class="trans-card trans-card-new">
            <div class="trans-card-header">
              <h3 class="trans-card-title trans-title-new" data-i18n="transformation.newTitle">${t('transformation.newTitle')}</h3>
              <span class="badge badge-new-standard" data-i18n="transformation.newBadge">${t('transformation.newBadge')}</span>
            </div>
            <ul class="trans-card-list">
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span data-i18n="transformation.newItem1">${t('transformation.newItem1')}</span>
              </li>
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span data-i18n="transformation.newItem2">${t('transformation.newItem2')}</span>
              </li>
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span data-i18n="transformation.newItem3">${t('transformation.newItem3')}</span>
              </li>
              <li class="trans-item-new">
                <span class="trans-check-icon">✓</span>
                <span data-i18n="transformation.newItem4">${t('transformation.newItem4')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
