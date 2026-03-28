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
      en: 'Built a strong business and process perspective across a long pre-software professional period. Managed customer operations at scale, identified recurring service bottlenecks, and generated practical improvement ideas that later shaped my product and engineering mindset.',
      tr: 'Yazılım öncesi uzun profesyonel dönemde güçlü bir iş ve süreç bakış açısı kazandım. Büyük ölçekte müşteri operasyonlarını yönettim, tekrar eden hizmet darboğazlarını tespit ettim ve daha sonra ürün ve mühendislik yaklaşımımı şekillendiren uygulanabilir iyileştirme fikirleri geliştirdim.',
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
