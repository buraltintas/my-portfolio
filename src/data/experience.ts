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
      en: 'I co-founded Coffee Dictionary and run its entire technical side: a coffee glossary in three languages with a term of the day, detailed explanations and the most looked-up terms, on iOS and the web (coffeedictionary.com), grown by approved community editors who propose terms and improve translations. I built the Go API, the React Native app, the Next.js website and the admin panel, and handle deployment and App Store publishing.',
      tr: "Coffee Dictionary'nin kurucu ortağıyım ve tüm teknik tarafını yürütüyorum: günün terimi, detaylı açıklamalar ve en çok aranan terimlerle üç dilde, iOS ve web'de (coffeedictionary.com) yayında olan, onaylı topluluk editörlerinin terim önerip çevirileri iyileştirdiği bir kahve sözlüğü. Go API'yi, React Native uygulamasını, Next.js web sitesini ve yönetim panelini geliştirdim; yayına alma ve App Store süreçlerini yürütüyorum.",
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
      en: 'I built Bankacı from scratch and run it end to end: loan calculators and a loan marketplace for bankers and people looking for a loan, on iOS, Android and the web (bankaci.app). I handle the product, design, the mobile app, the Go backend, the web surfaces and the Google Cloud infrastructure. It earns from Premium subscriptions and ads.',
      tr: "Bankacı'yı sıfırdan kurdum ve uçtan uca yürütüyorum: bankacılar ve kredi arayanlar için iOS, Android ve web'de (bankaci.app) kredi hesaplama uygulaması ve kredi pazaryeri. Ürün, tasarım, mobil uygulama, Go backend, web tarafı ve Google Cloud altyapısı bende. Gelirini Premium abonelikler ve reklamlar sağlıyor.",
    },
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Go',
      'PostgreSQL',
      'Next.js',
      'Google Cloud Run',
      'OpenAI',
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
      en: 'Developing and maintaining production-grade web and mobile applications for the hospitality industry. Currently working on Resort Manager and Portal UI first, and on every other project the company needs. On CheckandPlace, a reservation system serving guests from 156+ countries, I built the AI assistant that makes online booking faster and easier. Maintaining shared UiKit and Widget components library used across multiple products. Delivered key projects including PMS, Loyalty, Simphony Ordering Hub, and Simphony Manager App. Working in Agile/Scrum teams with trunk-based development and domain-driven design practices.',
      tr: "Misafir ağırlama sektörüne yönelik production seviyesinde web ve mobil uygulamalar geliştirmekteyim. Şu an başta Resort Manager ve Portal UI olmak üzere şirketin ihtiyaç duyduğu diğer tüm projelerde görev alıyorum. 156'dan fazla ülkeden misafirlere hizmet veren CheckandPlace rezervasyon sisteminde online rezervasyonu hızlandıran ve kolaylaştıran AI asistanı geliştirdim. Birden fazla üründe kullanılan paylaşımlı UiKit ve Widget bileşen kütüphanelerini geliştirmekteyim. PMS, Loyalty, Simphony Ordering Hub ve Simphony Manager App gibi kritik projeleri teslim ettim. Agile/Scrum ekiplerinde trunk-based development ve domain-driven design pratikleriyle çalışmaktayım.",
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
      en: 'Completed a short internship focused on coordinating product, design, and development workflows. Supported sprint planning, backlog follow-up, and cross-team communication to help align delivery priorities.',
      tr: 'Ürün, tasarım ve geliştirme süreçleri arasındaki koordinasyona odaklanan kısa dönemli bir staj tamamladım. Sprint planlama, backlog takibi ve ekipler arası iletişime destek vererek teslimat önceliklerinin hizalanmasına katkı sağladım.',
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
      en: 'Built a strong business and process perspective across a long pre-software professional period. I submitted 184 formal proposals to improve the bank’s internal screens and its web and mobile interfaces; 60% of them were put into practice and I was awarded for them. The bank’s software team is what steered me fully into software; until then it had been a hobby.',
      tr: 'Yazılım öncesi uzun profesyonel dönemde güçlü bir iş ve süreç bakış açısı kazandım. Bankanın iç ekranları ile web ve mobil arayüzlerinin geliştirilmesi için 184 resmi öneri sundum; bunların %60’ı hayata geçirildi ve ödüllendirildim. Beni tamamen yazılıma yönlendiren de bankanın yazılım ekibi oldu; o güne kadar yazılım benim için bir hobiydi.',
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
