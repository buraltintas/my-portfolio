import type { Locale } from '@/i18n/types'

// Titles and descriptions of the Pose Buddy pages the App Store links to.
// Privacy and terms stay reachable but out of search results.
const projectsLabel = { en: 'Projects', tr: 'Projeler' }

function trail(label: { en: string; tr: string }) {
  return (locale: Locale) => [
    { name: projectsLabel[locale], path: '/projects' },
    { name: 'Pose Buddy', path: '/projects/pose-buddy' },
    { name: label[locale] },
  ]
}

export const poseBuddyPages = {
  privacy: {
    path: '/projects/pose-buddy/privacy',
    title: { en: 'Pose Buddy Privacy Policy', tr: 'Pose Buddy Gizlilik Politikası' },
    description: {
      en: 'How the Pose Buddy iOS puzzle game handles gameplay data stored on your device, local notifications, ads and privacy requests.',
      tr: 'Pose Buddy iOS bulmaca oyununun cihazda saklanan oyun verilerini, yerel bildirimleri, reklamları ve gizlilik taleplerini nasıl ele aldığı.',
    },
    index: false,
    trail: trail({ en: 'Privacy Policy', tr: 'Gizlilik Politikası' }),
  },
  support: {
    path: '/projects/pose-buddy/support',
    title: { en: 'Pose Buddy Support', tr: 'Pose Buddy Destek' },
    description: {
      en: 'Help for Pose Buddy, the iOS pose-matching puzzle game by Burak Altıntaş: quick answers to common problems and how to reach support by email.',
      tr: "Burak Altıntaş'ın iOS poz eşleştirme bulmaca oyunu Pose Buddy için destek: sık karşılaşılan sorunlara hızlı yanıtlar ve e-posta ile destek.",
    },
    index: true,
    trail: trail({ en: 'Support', tr: 'Destek' }),
  },
  terms: {
    path: '/projects/pose-buddy/terms',
    title: { en: 'Pose Buddy Terms of Use', tr: 'Pose Buddy Kullanım Koşulları' },
    description: {
      en: 'The terms that apply when you download and play Pose Buddy, the iOS pose-matching puzzle game by Burak Altıntaş.',
      tr: "Burak Altıntaş'ın iOS poz eşleştirme bulmaca oyunu Pose Buddy'yi indirip oynarken geçerli olan kullanım koşulları.",
    },
    index: false,
    trail: trail({ en: 'Terms of Use', tr: 'Kullanım Koşulları' }),
  },
}
