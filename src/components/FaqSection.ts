// FAQ Accordion Component

export function renderFaqSection(): string {
  return `
    <section class="section-faq" id="faq">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-tag">Frequently Asked Questions</div>
          <h2 class="section-title">Everything You Need to Know About QuickPOS</h2>
          <p class="section-subtitle">
            Clear answers about dedicated databases, hardware compatibility, loose bulk goods, and migration.
          </p>
        </div>

        <!-- FAQ Items List -->
        <div class="faq-list">
          <!-- Item 1 -->
          <div class="faq-item active">
            <button class="faq-question">
              <span>Why is a dedicated private database better than standard cloud POS?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              Most cloud POS providers place thousands of stores inside one giant database table separated only by a store ID. One wrong query or software update can leak your wholesale buying prices, profits, and supplier lists to competing stores. QuickPOS provisions an isolated database instance for every client. Cross-store data leakage is mathematically impossible, and heavy stock audits run by other shops will never slow down your checkout registers.
            </div>
          </div>

          <!-- Item 2 -->
          <div class="faq-item">
            <button class="faq-question">
              <span>Can I use my existing thermal printers, barcode scanners, and cash drawers?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              Yes, 100%. QuickPOS supports standard ESC/POS thermal receipt printers (80mm and 58mm) over USB, Wi-Fi, Ethernet LAN, or Bluetooth. It connects seamlessly with any 1D/2D USB or Bluetooth barcode scanner and triggers standard RJ11/RJ12 electronic cash drawers automatically when cash receipts print.
            </div>
          </div>

          <!-- Item 3 -->
          <div class="faq-item">
            <button class="faq-question">
              <span>How does weight-based and rupee-total selling work for loose goods?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              QuickPOS supports dual entry modes. You can enter the exact scale weight (e.g. 1.250 kg) or type the customer's requested rupee budget (e.g. "Give me Rs. 250 worth of Basmati rice"). The engine automatically back-calculates the exact gram weight with zero decimal or currency rounding discrepancies.
            </div>
          </div>

          <!-- Item 4 -->
          <div class="faq-item">
            <button class="faq-question">
              <span>How do automated WhatsApp and SMS Khata credit reminders work?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              From the register or Customer Credit Aging report, click the WhatsApp icon next to any customer. QuickPOS generates a polite, personalized message with their exact outstanding balance, overdue invoice list, and your store's bank account or payment details. SMS notifications are also supported for customers without smartphones.
            </div>
          </div>

          <!-- Item 5 -->
          <div class="faq-item">
            <button class="faq-question">
              <span>How hard is it to import my existing product catalog and inventory?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              Extremely simple. Drag and drop your existing Excel or CSV spreadsheet into QuickPOS. Our smart importer auto-detects your columns (Item Name, Barcode, Buying Cost, Selling Price, Category, Unit), previews the mapped catalog, and imports thousands of items in seconds. Our technical team also provides complimentary migration assistance.
            </div>
          </div>

          <!-- Item 6 -->
          <div class="faq-item">
            <button class="faq-question">
              <span>What happens if my store loses internet connectivity?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              QuickPOS V3 uses intelligent client-side caching. If your broadband or 4G connection temporarily drops, cashiers can continue barcode scanning, ringing up sales, taking cash, and printing receipts. As soon as connectivity returns, transactions automatically sync back to your dedicated cloud database vault.
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
