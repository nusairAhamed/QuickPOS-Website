// Floating Language Toggle Component

export function renderLanguageToggle(): string {
  return `
    <aside class="floating-lang-dock" id="floating-lang-dock" aria-label="Language Selection">
      <div class="lang-dock-inner">
        <span class="lang-globe-icon" aria-hidden="true" title="Language / භාෂාව / மொழி">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </span>
        <div class="lang-pills-group" role="group" aria-label="Language options">
          <button type="button" class="lang-toggle-btn active" data-lang-code="en" aria-pressed="true" title="English">
            <span>EN</span>
          </button>
          <button type="button" class="lang-toggle-btn" data-lang-code="si" aria-pressed="false" title="සිංහල">
            <span>සිං</span>
          </button>
          <button type="button" class="lang-toggle-btn" data-lang-code="ta" aria-pressed="false" title="தமிழ்">
            <span>த</span>
          </button>
        </div>
      </div>
    </aside>
  `;
}
