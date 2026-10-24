import React, { createContext, useContext, useState } from 'react';
import { safeStorage } from '../utils/safeStorage';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultText: string) => string;
}

const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    'nav.services': 'Services & Solutions',
    'nav.browser': 'Gothwad Browser',
    'nav.simulator': 'Live Simulator',
    'nav.tracker': 'Order Tracker',
    'nav.advisor': 'Tech Advisor',
    'nav.calculator': 'ROI Calculator',
    'nav.blog': 'Tech Insights',
    'nav.careers': 'Careers (12 Experts)',
    'nav.docs': 'Developer Docs',
    'nav.portfolio': 'Client Work',
    'nav.leadership': 'Leadership',
    'nav.contact': 'Contact Us',
    'nav.orderNow': 'Configure & Order',
    'hero.badge': 'India’s Premier Sovereign Software Powerhouse',
    'hero.title1': 'Engineering Sovereign Software &',
    'hero.title2': 'High-Speed Web Platforms',
    'hero.desc': 'Gothwad Tech builds ultra-fast sovereign web applications, cloud architectures, custom mobile apps, and the revolutionary Gothwad Browser. Proudly engineered in Jaipur & Bengaluru for global mission-critical performance.',
    'hero.ctaOrder': 'Configure & Order System',
    'hero.ctaBrowser': 'Explore Gothwad Browser',
    'hero.ctaSimulator': 'Live Browser Simulator',
  },
  hi: {
    'nav.services': 'सेवाएं एवं समाधान',
    'nav.browser': 'गोथवाड़ ब्राउज़र',
    'nav.simulator': 'लाइव सिम्युलेटर',
    'nav.tracker': 'ऑर्डर ट्रैकर',
    'nav.advisor': 'टेक एडवाइजर',
    'nav.calculator': 'लागत कैलकुलेटर',
    'nav.blog': 'टेक इनसाइट्स',
    'nav.careers': 'करियर (12 विशेषज्ञ)',
    'nav.docs': 'डेवलपर डॉक्स',
    'nav.portfolio': 'प्रोजेक्ट्स',
    'nav.leadership': 'नेतृत्व टीम',
    'nav.contact': 'संपर्क करें',
    'nav.orderNow': 'ऑर्डर एवं बजट',
    'hero.badge': 'भारत की प्रमुख संप्रभु सॉफ्टवेयर कंपनी (आत्मनिर्भर भारत)',
    'hero.title1': 'आत्मनिर्भर डिजिटल इंजीनियरिंग एवं',
    'hero.title2': 'अल्ट्रा-फास्ट वेब प्लेटफॉर्म्स',
    'hero.desc': 'गोथवाड़ टेक बनाता है हाई-परफॉर्मेंस संप्रभु सॉफ्टवेयर सिस्टम, कस्टमाइज्ड मोबाइल ऐप्स, क्लाउड आर्किटेक्चर और दुनिया का सबसे तेज एवं हल्का गोथवाड़ ब्राउज़र।',
    'hero.ctaOrder': 'प्रोजेक्ट कंफिगर करें',
    'hero.ctaBrowser': 'गोथवाड़ ब्राउज़र देखें',
    'hero.ctaSimulator': 'लाइव सिम्युलेटर चलाएं',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (_key: string, defaultText: string) => defaultText,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return safeStorage.getItem<Language>('gt_lang', 'en') || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeStorage.setItem('gt_lang', lang);
  };

  const t = (key: string, defaultText: string): string => {
    const dict = DICTIONARY[language];
    if (dict && dict[key]) {
      return dict[key];
    }
    return defaultText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
