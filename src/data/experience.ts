export interface Experience {
  company: string;
  role: { en: string; tr: string };
  period: { en: string; tr: string };
  description: { en: string; tr: string };
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Coffee Dictionary',
    role: {
      en: 'Co-founder',
      tr: 'Kurucu Ortak',
    },
    // From the first commit of the API repository (Feb 1, 2026).
    period: {
      en: 'Feb 2026 – Present',
      tr: 'Şub 2026 – Günümüz',
    },
    description: {
      en: 'I co-founded Coffee Dictionary and run its whole technical side. It is a coffee glossary in English, German and Turkish on iOS, Android and the web (coffeedictionary.com), with more than 250 terms and a term of the day. Approved community editors propose new terms and improve the translations. I built the Go API, the React Native app, the Next.js website and the admin panel, and I handle deployment and publishing to the App Store and Google Play.',
      tr: "Coffee Dictionary'nin kurucu ortağıyım ve tüm teknik tarafını yürütüyorum. İngilizce, Almanca ve Türkçe bir kahve sözlüğü; iOS, Android ve web'de (coffeedictionary.com) yayında, 250'den fazla terim ve günün terimiyle. Onaylı topluluk editörleri yeni terim öneriyor ve çevirileri iyileştiriyor. Go API'yi, React Native uygulamasını, Next.js web sitesini ve yönetim panelini ben geliştirdim; yayına alma ile App Store ve Google Play süreçlerini de ben yürütüyorum.",
    },
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Go',
      'PostgreSQL',
      'Next.js',
      'TanStack Query',
      'Tailwind CSS',
      'Google Cloud Run',
    ],
  },
  {
    company: 'Bankacı',
    role: {
      en: 'Founder',
      tr: 'Founder',
    },
    period: {
      en: 'Jan 2023 – Present',
      tr: 'Oca 2023 – Günümüz',
    },
    description: {
      en: 'I built Bankacı from scratch and run it end to end. It is an app for loans, credit cards, deposits and investments on iOS, Android and the web (bankaci.app), with calculators, two AI assistants and a loan marketplace that connects borrowers with bankers. I handle the product, design, the mobile app, the Go backend, the web surfaces and the Google Cloud infrastructure. It earns from Premium subscriptions and ads.',
      tr: "Bankacı'yı sıfırdan kurdum ve uçtan uca yürütüyorum. Kredi, kredi kartı, mevduat ve yatırım için iOS, Android ve web'de (bankaci.app) yayında bir uygulama; hesaplama araçları, iki yapay zekâ asistanı ve kredi arayanı bankacıyla buluşturan bir kredi pazaryeri var. Ürün, tasarım, mobil uygulama, Go backend, web tarafı ve Google Cloud altyapısı bende. Gelirini Premium abonelikler ve reklamlar sağlıyor.",
    },
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Go',
      'PostgreSQL',
      'Next.js',
      'Google Cloud Run',
      'Claude (Anthropic)',
      'Swift',
      'Kotlin',
      'RevenueCat',
      'SEO',
    ],
  },
  {
    company: 'Protel & Simpra',
    role: {
      en: 'Frontend Developer',
      tr: 'Frontend Developer',
    },
    period: {
      en: 'Jun 2022 – Present',
      tr: 'Haz 2022 – Günümüz',
    },
    description: {
      en: 'I build and maintain production web and mobile apps for the hospitality industry. Today I work mainly on Resort Manager and Portal UI, and on whatever else the company needs. On CheckandPlace, a reservation system serving guests from 156+ countries, I built the AI assistant that makes online booking faster and easier. I also maintain the UiKit and Widget component libraries shared across products. I delivered PMS, Loyalty, Simphony Ordering Hub and Simphony Manager App. The teams work in Agile/Scrum with trunk-based development and domain-driven design.',
      tr: "Misafir ağırlama sektörü için production'da çalışan web ve mobil uygulamalar geliştiriyor, bakımını yapıyorum. Bugün başta Resort Manager ve Portal UI'da, bir de şirketin ihtiyaç duyduğu diğer projelerde çalışıyorum. 156'dan fazla ülkeden misafire hizmet veren CheckandPlace rezervasyon sisteminde online rezervasyonu hızlandıran ve kolaylaştıran yapay zekâ asistanını geliştirdim. Ürünler arasında ortak kullanılan UiKit ve Widget bileşen kütüphanelerinin bakımını da yapıyorum. PMS, Loyalty, Simphony Ordering Hub ve Simphony Manager App projelerini teslim ettim. Ekiplerde Agile/Scrum, trunk-based development ve domain-driven design ile çalışıyoruz.",
    },
    tech: [
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Redux',
      'Redux-Saga',
      'BFF Layer',
      'Domain Driven Design',
      'Jest',
      'React Testing Library',
      'Lit',
      'Web Components',
    ],
  },
  {
    company: 'Sarıtay Bilişim',
    role: {
      en: 'Scrum Master / Project Manager (Intern)',
      tr: 'Scrum Master / Proje Yöneticisi (Stajyer)',
    },
    period: {
      en: 'Mar 2022 – Apr 2022',
      tr: 'Mar 2022 – Nis 2022',
    },
    description: {
      en: 'A short internship coordinating product, design and development work. I helped with sprint planning, kept the backlog up to date and passed information between teams so everyone worked to the same priorities.',
      tr: "Ürün, tasarım ve geliştirme işlerinin koordinasyonu üzerine kısa bir staj. Sprint planlamaya yardım ettim, backlog'u güncel tuttum ve ekipler arasında bilgi taşıyarak herkesin aynı önceliklerle çalışmasına yardımcı oldum.",
    },
    tech: [
      'Agile / Scrum',
      'Jira',
      'Backlog Management',
      'Stakeholder Communication',
      'Project Coordination',
    ],
  },
  {
    company: 'Türkiye İş Bankası',
    role: {
      en: 'Customer Service Officer',
      tr: 'Müşteri Hizmetleri Yetkilisi',
    },
    period: {
      en: 'Jan 2011 – Aug 2021',
      tr: 'Oca 2011 – Ağu 2021',
    },
    description: {
      en: "More than ten years at the bank taught me how a business and its processes work. I submitted 184 formal proposals to improve the bank's internal screens and its web and mobile interfaces; 60% of them were put into practice, and I received an award for them. The bank's software team is what pulled me fully into software. Until then it had been a hobby.",
      tr: "Bankadaki on yılı aşkın süre bana bir işin ve süreçlerinin nasıl yürüdüğünü öğretti. Bankanın iç ekranları ile web ve mobil arayüzlerini iyileştirmek için 184 resmi öneri sundum; bunların %60'ı hayata geçirildi ve ödül aldım. Beni tamamen yazılıma yönelten bankanın yazılım ekibi oldu. O güne kadar yazılım benim için bir hobiydi.",
    },
    tech: [
      'Customer Operations',
      'Process Improvement',
      'Service Quality',
      'Operational Excellence',
      'Business Process Awareness',
    ],
  },
];
