const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm Burak",
    'hero.title': 'Frontend Developer',
    'hero.subtitle.before': 'Frontend Developer at',
    'hero.subtitle.after':
      '. I build web and mobile apps with React, React Native, and Next.js — from backend to App Store.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    'hero.cta.cv': 'Download CV',

    // Impact
    'impact.production': 'Production Projects',
    'impact.projects': 'Personal Projects',
    'impact.apps': 'Apps Published',
    'impact.years': 'Years Experience',

    // Selected Work
    'selectedWork.title': 'Selected Works',
    'selectedWork.subtitle': "Featured projects I've built",
    'selectedWork.viewAll': 'View All Projects',

    // Experience
    'experience.title': 'Experience',

    // Skills
    'skills.title': 'Skills & Tools',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle':
      'I enjoy being involved in the development of useful products. You can contact me!',

    // Projects page
    'projects.title': 'All Projects',
    'projects.subtitle': "A collection of projects I've built",
    'projects.liveDemo': 'Live Demo',
    'projects.github': 'GitHub',
    'projects.viewCase': 'View Case Study',
    'projects.backHome': 'Back to Home',
    'projects.backAll': 'All Projects',

    // 404
    'notFound.title': 'Page Not Found',
    'notFound.description':
      "The page you're looking for doesn't exist or has been moved.",
    'notFound.backHome': 'Back to Home',

    // Footer
    'footer.built': 'Built with Next.js & Tailwind CSS',
  },
  tr: {
    // Header
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',

    // Hero
    'hero.greeting': 'Merhaba, Ben Burak',
    'hero.title': 'Frontend Developer',
    'hero.subtitle.before': '',
    'hero.subtitle.after':
      "'da Frontend Developer. React, React Native ve Next.js ile kullanıcı odaklı web ve mobil uygulamalar geliştiriyorum — backend'den App Store'a kadar.",
    'hero.cta.projects': 'Projeleri Gör',
    'hero.cta.contact': 'İletişime Geç',
    'hero.cta.cv': 'CV İndir',

    // Impact
    'impact.production': 'Production Proje',
    'impact.projects': 'Kişisel Proje',
    'impact.apps': 'Yayınlanan Uygulama',
    'impact.years': 'Yıl Deneyim',

    // Selected Work
    'selectedWork.title': 'Seçili Çalışmalar',
    'selectedWork.subtitle': 'Öne çıkan projelerim',
    'selectedWork.viewAll': 'Tüm Projeleri Gör',

    // Experience
    'experience.title': 'Deneyim',

    // Skills
    'skills.title': 'Beceriler & Araçlar',

    // Contact
    'contact.title': 'İletişime Geç',
    'contact.subtitle':
      'Kullanışlı ürünlerin geliştirilmesinde yer almaktan keyif alıyorum. Benimle iletişime geçebilirsiniz!',

    // Projects page
    'projects.title': 'Tüm Projeler',
    'projects.subtitle': 'Geliştirdiğim projelerin koleksiyonu',
    'projects.liveDemo': 'Uygulamaya Git',
    'projects.github': 'GitHub',
    'projects.viewCase': 'Detayları Gör',
    'projects.backHome': 'Ana Sayfaya Dön',
    'projects.backAll': 'Tüm Projeler',

    // 404
    'notFound.title': 'Sayfa Bulunamadı',
    'notFound.description': 'Aradığınız sayfa mevcut değil veya taşınmış.',
    'notFound.backHome': 'Ana Sayfaya Dön',

    // Footer
    'footer.built': 'Next.js & Tailwind CSS ile geliştirildi',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export default translations;
