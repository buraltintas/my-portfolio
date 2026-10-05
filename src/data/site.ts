export const siteConfig = {
  name: 'Burak Altıntaş',
  // The same person as written without Turkish letters (GitHub, App Store).
  alternateName: 'Burak Altintas',
  jobTitle: 'Frontend Developer',
  title: {
    en: 'Burak Altıntaş — Frontend Developer & Founder of Bankacı',
    tr: 'Burak Altıntaş — Frontend Developer, Bankacı Kurucusu',
  },
  description: {
    en: 'Burak Altıntaş is a frontend developer at Protel & Simpra and the founder of Bankacı. He builds web and mobile apps with React, React Native, Next.js and Go.',
    tr: "Burak Altıntaş, Protel & Simpra'da Frontend Developer ve Bankacı'nın kurucusu. React, React Native, Next.js ve Go ile web ve mobil uygulamalar geliştiriyor.",
  },
  // Third-person summary, reused in structured data and llms.txt.
  bio: {
    en: 'Burak Altıntaş is a frontend developer who builds web and mobile apps with React, React Native and Next.js. Since June 2022 he has worked across the hospitality products of Protel & Simpra, including Resort Manager, Portal UI, PMS and Loyalty, and built the AI booking assistant on CheckandPlace. He founded Bankacı, a loan calculator and loan marketplace app on iOS, Android and the web, and co-founded Coffee Dictionary, where he leads the entire technical side. Before moving into software he worked at Türkiye İş Bankası from 2011 to 2021.',
    tr: "Burak Altıntaş, React, React Native ve Next.js ile web ve mobil uygulamalar geliştiren bir frontend geliştirici. Haziran 2022'den beri Protel & Simpra'nın Resort Manager, Portal UI, PMS ve Loyalty gibi misafir ağırlama ürünlerinde çalışıyor; CheckandPlace'teki yapay zekâ rezervasyon asistanını o geliştirdi. iOS, Android ve web'de yayında olan Bankacı kredi hesaplama ve kredi pazaryeri uygulamasını kurdu, Coffee Dictionary'nin de kurucu ortağı ve tüm teknik tarafını yürütüyor. Yazılıma geçmeden önce 2011–2021 arasında Türkiye İş Bankası'nda çalıştı.",
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
