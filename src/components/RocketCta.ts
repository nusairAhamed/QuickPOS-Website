// Dashcom UI Iconic Rocket CTA Banner Component

export function renderRocketCta(): string {
  return `
    <section class="section-rocket-cta" id="cta">
      <div class="container">
        <div class="rocket-cta-card">
          <div class="rocket-glow"></div>
          
          <div style="position: relative; z-index: 1;">
            <!-- Floating Rocket Icon -->
            <div class="rocket-icon-floating">🚀</div>

            <div class="badge" style="background: rgba(255, 255, 255, 0.12); color: #FFFFFF; border: 1px solid rgba(255, 255, 255, 0.25); margin-bottom: 1.25rem;">
              <span>⚡ Setup Takes Under 5 Minutes</span>
            </div>

            <h2 class="rocket-cta-title">
              Ready to Run Your Shop at <br />
              Lightning Speed?
            </h2>

            <p class="rocket-cta-desc">
              Experience the speed, reliability, and security of an enterprise retail operating system engineered for your busy counter. No credit card required. Up and running in under five minutes.
            </p>

            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <button class="btn btn-primary btn-lg open-trial-modal-btn" style="background: #FFFFFF; color: #0F172A; box-shadow: 0 10px 25px rgba(0,0,0,0.4);">
                <span>Start Your 30-Day Free Trial</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button class="btn btn-secondary btn-lg open-trial-modal-btn" style="background: rgba(255, 255, 255, 0.1); color: #FFFFFF; border-color: rgba(255, 255, 255, 0.2);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Book a Private Demo</span>
              </button>
            </div>

            <div style="margin-top: 2rem; font-size: 0.85rem; color: #94A3B8; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap;">
              <span>✓ No credit card required</span>
              <span>✓ Dedicated private database</span>
              <span>✓ Free catalog onboarding support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
