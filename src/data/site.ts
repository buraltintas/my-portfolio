export const siteConfig = {
  name: 'Burak Altıntaş',
  // The same person as written without Turkish letters (GitHub, App Store).
  alternateName: 'Burak Altintas',
  jobTitle: 'Frontend Developer',
  title: {
    en: 'Burak Altıntaş — Frontend Developer, Web & Mobile Apps',
    tr: 'Burak Altıntaş — Frontend Developer, Web ve Mobil Uygulamalar',
  },
  description: {
    en: 'Burak Altıntaş is a frontend developer at Protel & Simpra. He builds web and mobile apps end to end with React, React Native, Next.js, Go and more.',
    tr: "Burak Altıntaş, Protel & Simpra'da Frontend Developer. React, React Native, Next.js, Go ve daha fazlasıyla web ve mobil uygulamaları uçtan uca geliştiriyor.",
  },
  // Third-person summary, reused in structured data and llms.txt.
  bio: {
    en: 'Burak Altıntaş is a frontend developer who builds web and mobile apps with React, React Native and Next.js. Since June 2022 he has worked on the hospitality products of Protel & Simpra, including Resort Manager, Portal UI, PMS and Loyalty, and he built the AI booking assistant on CheckandPlace. He founded Bankacı, an app for loans, credit cards, deposits and investments with a loan marketplace, on iOS, Android and the web. He co-founded Coffee Dictionary and runs its whole technical side, built the building management app Casamiyo with a business partner, and is building Notanica, a sheet-music app. Before moving into software he worked at Türkiye İş Bankası from 2011 to 2021.',
    tr: "Burak Altıntaş, React, React Native ve Next.js ile web ve mobil uygulamalar geliştiren bir frontend geliştirici. Haziran 2022'den beri Protel & Simpra'nın Resort Manager, Portal UI, PMS ve Loyalty gibi misafir ağırlama ürünlerinde çalışıyor; CheckandPlace'teki yapay zekâ rezervasyon asistanını o geliştirdi. Kredi, kredi kartı, mevduat ve yatırım için iOS, Android ve web'de yayında olan, kredi pazaryeri de içeren Bankacı'yı kurdu. Coffee Dictionary'nin kurucu ortağı ve tüm teknik tarafını yürütüyor; site yönetimi uygulaması Casamiyo'yu bir iş ortağıyla birlikte geliştirdi, nota uygulaması Notanica'yı da geliştiriyor. Yazılıma geçmeden önce 2011'den 2021'e kadar Türkiye İş Bankası'nda çalıştı.",
  },
  url: 'https://burak-altintas.com',
  image: '/images/me.webp',
  email: 'burak.altintas@yahoo.com.tr',
  socials: {
    github: 'https://github.com/buraltintas',
    linkedin: 'https://www.linkedin.com/in/burak--altintas/',
    twitter: 'https://x.com/burak_alti',
    medium: 'https://medium.com/@baltintas',
    instagram: 'https://www.instagram.com/xewor/',
  },
  twitterHandle: '@burak_alti',
  // Store developer pages, listed with the socials in structured data.
  stores: {
    appStore: 'https://apps.apple.com/us/developer/burak-altintas/id1726544276',
    googlePlay: 'https://play.google.com/store/apps/developer?id=Burak+Alt%C4%B1nta%C5%9F',
  },
  // IndexNow (Bing and others): the key file is public/f77079fcf83deadbd8a6624161c0d9fa.txt.
  indexNowKey: 'f77079fcf83deadbd8a6624161c0d9fa',
  analytics: {
    gtmId: 'GTM-TG2KWMN',
    gaId: 'G-KH3LP47X47',
  },
} as const
