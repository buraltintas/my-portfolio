export interface Experience {
  company: string;
  role: { en: string; tr: string };
  period: { en: string; tr: string };
  description: { en: string; tr: string };
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Simpra',
    role: {
      en: 'Frontend Developer',
      tr: 'Frontend Developer',
    },
    period: {
      en: 'Jun 2022 – Present',
      tr: 'Haz 2022 – Günümüz',
    },
    description: {
      en: 'Developing and maintaining production-grade web and mobile applications for the hospitality industry. Developing CheckandPlace, a reservation system serving guests from 156+ countries. Maintaining shared UiKit and Widget components library used across multiple products. Delivered key projects including PMS, Resort Manager, Loyalty, Simphony Ordering Hub, and Simphony Manager App. Working in Agile/Scrum teams with trunk-based development and domain-driven design practices.',
      tr: "Konaklama sektörüne yönelik production seviyesinde web ve mobil uygulamalar geliştirmekteyim. 156'dan fazla ülkeden misafirlere hizmet veren CheckandPlace rezervasyon sistemini geliştiriyorum. Birden fazla üründe kullanılan paylaşımlı UiKit ve Widget bileşen kütüphanelerini geliştirmekteyim. PMS, Resort Manager, Loyalty, Simphony Ordering Hub ve Simphony Manager App gibi kritik projeleri teslim ettim. Agile/Scrum ekiplerinde trunk-based development ve domain-driven design pratikleriyle çalışmaktayım.",
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
];
