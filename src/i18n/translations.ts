const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.label': 'Main menu',
    'nav.menu': 'Menu',
    'a11y.skip': 'Skip to content',

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
    'impact.years': 'Years Experience (5+ in software)',
    'impact.label': 'Highlights',

    // Selected Work
    'selectedWork.title': 'Selected Works',
    'selectedWork.subtitle': 'Product-focused web and mobile projects I have built from idea to production.',
    'selectedWork.viewAll': 'View All Projects',

    // Experience
    'experience.title': 'Experience',

    // Education
    'education.title': 'Education',

    // Skills
    'skills.title': 'Skills & Tools',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle':
      'I enjoy being involved in the development of useful products. You can contact me!',

    // Projects page
    'projects.title': 'All Projects',
    'projects.subtitle': "A collection of projects I've built",
    'projects.platform.web': 'Open web version',
    'projects.platform.ios': 'Open iOS version',
    'projects.platform.android': 'Open Android version',
    'projects.github': 'GitHub',
    'projects.viewCase': 'View Case Study',
    'projects.backHome': 'Back to Home',
    'projects.backAll': 'All Projects',
    'projects.discontinued': 'Discontinued',
    'projects.discontinuedNote': 'This product was shut down because I was too busy to keep supporting it. The screenshots below show it as it was.',
    'projects.gallery': 'Screenshots',
    'projects.gallery.enlarge': 'Enlarge',
    'projects.gallery.count': 'images, click to enlarge',
    'projects.gallery.web': 'Web',
    'projects.gallery.mobile': 'Mobile app',
    'projects.gallery.close': 'Close',
    'projects.gallery.prev': 'Previous image',
    'projects.gallery.next': 'Next image',
    'projects.meta.platform': 'platform',
    'projects.meta.tech': 'tech',
    'projects.onThisPage': 'On this page',
    'projects.pagination': 'Project navigation',
    'projects.next': 'Next project',

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
    'nav.label': 'Ana menü',
    'nav.menu': 'Menü',
    'a11y.skip': 'İçeriğe geç',

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
    'impact.years': 'Yıl Deneyim (5+ yıl yazılım)',
    'impact.label': 'Rakamlarla',

    // Selected Work
    'selectedWork.title': 'Seçili Çalışmalar',
    'selectedWork.subtitle': 'Öne çıkan projelerim',
    'selectedWork.viewAll': 'Tüm Projeleri Gör',

    // Experience
    'experience.title': 'Deneyim',

    // Education
    'education.title': 'Eğitim',

    // Skills
    'skills.title': 'Beceriler & Araçlar',

    // Contact
    'contact.title': 'İletişime Geç',
    'contact.subtitle':
      'Kullanışlı ürünlerin geliştirilmesinde yer almaktan keyif alıyorum. Benimle iletişime geçebilirsiniz!',

    // Projects page
    'projects.title': 'Tüm Projeler',
    'projects.subtitle': 'Geliştirdiğim projelerin koleksiyonu',
    'projects.platform.web': 'Web sürümünü aç',
    'projects.platform.ios': 'iOS sürümünü aç',
    'projects.platform.android': 'Android sürümünü aç',
    'projects.github': 'GitHub',
    'projects.viewCase': 'Detayları Gör',
    'projects.backHome': 'Ana Sayfaya Dön',
    'projects.backAll': 'Tüm Projeler',
    'projects.discontinued': 'Kapatıldı',
    'projects.discontinuedNote': 'Bu ürün, yoğunluk sebebiyle destek veremediğim için kapatıldı. Aşağıdaki ekran görüntüleri yayındayken nasıl göründüğünü gösteriyor.',
    'projects.gallery': 'Ekran görüntüleri',
    'projects.gallery.enlarge': 'Büyüt',
    'projects.gallery.count': 'görsel, büyütmek için tıkla',
    'projects.gallery.web': 'Web',
    'projects.gallery.mobile': 'Mobil uygulama',
    'projects.gallery.close': 'Kapat',
    'projects.gallery.prev': 'Önceki görsel',
    'projects.gallery.next': 'Sonraki görsel',
    'projects.meta.platform': 'platform',
    'projects.meta.tech': 'teknoloji',
    'projects.onThisPage': 'Bu sayfada',
    'projects.pagination': 'Proje gezinme',
    'projects.next': 'Sonraki proje',

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
