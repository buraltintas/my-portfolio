export interface Article {
  title: string
  url: string
  /** Publication date, YYYY-MM-DD. */
  date: string
  summary: { en: string; tr: string }
  topics: string[]
}

// Articles published on Simpra Tech (blog.simprasuite.com), newest first.
// The list comes from https://medium.com/feed/@baltintas.
export const articles: Article[] = [
  {
    title: 'Being a Product-Minded Frontend Developer',
    url: 'https://blog.simprasuite.com/being-a-product-minded-frontend-developer-b4e719eef791',
    date: '2026-06-16',
    summary: {
      en: 'AI can help us build faster, but it cannot decide what is worth building. Product-minded frontend work in four practical parts, and why API paths, payloads and error messages are part of the product too.',
      tr: "Yapay zekâ daha hızlı geliştirmemize yardım eder ama neyin yapılmaya değer olduğuna karar veremez. Ürün odaklı frontend geliştirmenin dört pratik parçası ve API yollarının, payload'ların ve hata mesajlarının neden ürünün parçası olduğu.",
    },
    topics: ['Frontend', 'Product', 'AI', 'UX'],
  },
  {
    title: 'Your Frontend Works Fine — Until Real Data Hits Production',
    url: 'https://blog.simprasuite.com/%EF%B8%8F-your-frontend-works-fine-until-real-data-hits-production-1951437b67cc',
    date: '2026-04-20',
    summary: {
      en: 'Why list virtualization stops being optional once data, interactions and rendering costs compound, and how TanStack Virtual keeps data-heavy React interfaces usable.',
      tr: 'Veri, etkileşim ve render maliyeti büyüdükçe liste sanallaştırmanın neden seçenek olmaktan çıktığı ve TanStack Virtual ile veri yoğun React arayüzlerinin nasıl kullanılabilir kaldığı.',
    },
    topics: ['React', 'Performance', 'TanStack Virtual'],
  },
  {
    title: 'Timezone Terror | The Case for a JS Date Library',
    url: 'https://blog.simprasuite.com/timezone-terror-the-case-for-a-js-date-library-759cc7e92b2c',
    date: '2025-12-24',
    summary: {
      en: 'What browsers actually do with JavaScript dates, why timezones are behind so many booking and location bugs, and why a library like Luxon is often the cleanest way out.',
      tr: "Tarayıcıların JavaScript tarihleriyle aslında ne yaptığı, rezervasyon ve konum hatalarının çoğunun arkasında neden saat dilimlerinin olduğu ve Luxon gibi bir kütüphanenin neden çoğu zaman en temiz çözüm olduğu.",
    },
    topics: ['JavaScript', 'Dates', 'Luxon'],
  },
  {
    title: 'Is Redux-Saga Still on the Stage in 2025? Comparing It With TanStack Query',
    url: 'https://blog.simprasuite.com/is-redux-saga-still-on-the-stage-in-2025-comparing-it-with-tanstack-query-4dceddc97643',
    date: '2025-10-01',
    summary: {
      en: "Redux-Saga's generator-based control over async flows next to TanStack Query's declarative fetching and caching, and whether Saga still makes sense in 2025.",
      tr: "Redux-Saga'nın generator tabanlı asenkron akış kontrolü ile TanStack Query'nin bildirimsel veri çekme ve önbellekleme yaklaşımının karşılaştırması; Saga 2025'te hâlâ mantıklı mı?",
    },
    topics: ['React', 'Redux-Saga', 'TanStack Query'],
  },
  {
    title: 'Instant AI Magic: Supercharge Your React App in Minutes',
    url: 'https://blog.simprasuite.com/instant-ai-magic-supercharge-your-react-app-in-minutes-d7970014ef32',
    date: '2025-09-18',
    summary: {
      en: 'Two ways to use generative AI in a React project, as a coding assistant or through an AI API inside the app, with a small chatbot built in React.',
      tr: "Bir React projesinde üretken yapay zekâyı kullanmanın iki yolu, kod asistanı olarak ya da uygulamanın içinde bir AI API'siyle, ve React ile kurulan küçük bir sohbet botu.",
    },
    topics: ['React', 'AI', 'Chatbot'],
  },
]
