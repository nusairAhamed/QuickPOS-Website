export type Language = 'en' | 'si' | 'ta';

export interface TranslationDictionary {
  nav: {
    features: string;
    action: string;
    hardware: string;
    pricing: string;
    contact: string;
    startTrial: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    startTrial: string;
    bookDemo: string;
    trust1: string;
    trust2: string;
    trust3: string;
    chipFloatLabel: string;
    chipFloatVal: string;
    chipFloatBadge: string;
    chipSpeedLabel: string;
    chipSpeedVal: string;
    chipCreditLabel: string;
  };
  features: {
    pos: {
      tag: string;
      title: string;
      subtitle: string;
    };
    inventory: {
      tag: string;
      title: string;
      subtitle: string;
    };
    credit: {
      tag: string;
      title: string;
      subtitle: string;
    };
    financials: {
      tag: string;
      title: string;
      subtitle: string;
    };
  };
  transformation: {
    tag: string;
    title: string;
    subtitle: string;
    oldTitle: string;
    oldBadge: string;
    oldItem1: string;
    oldItem2: string;
    oldItem3: string;
    oldItem4: string;
    newTitle: string;
    newBadge: string;
    newItem1: string;
    newItem2: string;
    newItem3: string;
    newItem4: string;
  };
  isolation: {
    badge: string;
    heading: string;
    description: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    credibility: string;
  };
  pricingSection: {
    tag: string;
    title: string;
    subtitle: string;
    badge: string;
    planTitle: string;
    planSubtitle: string;
    freeDays: string;
    monthly: string;
    annual: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
    startTrial: string;
  };
  cta: {
    title: string;
    desc: string;
    startTrial: string;
    talkTeam: string;
  };
  modal: {
    badge: string;
    title: string;
    desc: string;
    storeNameLabel: string;
    storeNamePlaceholder: string;
    subdomainLabel: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    doneBtn: string;
  };
}
