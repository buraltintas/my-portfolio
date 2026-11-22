import type { Locale } from '@/i18n/types'

// Pages the Zticky app and its store listings link to: support (the app's home here),
// privacy and terms. Privacy and terms stay reachable but out of search results.
function trail(label?: { en: string; tr: string }) {
  return (locale: Locale) =>
    label ? [{ name: 'Zticky', path: '/zticky' }, { name: label[locale] }] : [{ name: 'Zticky' }]
}

export const ztickyPages = {
  support: {
    path: '/zticky',
    title: { en: 'Zticky Support', tr: 'Zticky Destek' },
    description: {
      en: 'Help for Zticky, the app that turns your photos and videos into WhatsApp sticker packs: quick answers and how to reach support.',
      tr: "Fotoğraf ve videolarını WhatsApp çıkartma paketine çeviren Zticky için destek: kısa yanıtlar ve destekle iletişim.",
    },
    index: true,
    trail: trail(),
  },
  privacy: {
    path: '/zticky/privacy',
    title: { en: 'Zticky Privacy Policy', tr: 'Zticky Gizlilik Politikası' },
    description: {
      en: 'How Zticky handles your photos, sticker packs, AI styles, purchases and ads.',
      tr: 'Zticky fotoğraflarını, çıkartma paketlerini, yapay zekâ stillerini, satın almaları ve reklamları nasıl ele alır.',
    },
    index: false,
    trail: trail({ en: 'Privacy Policy', tr: 'Gizlilik Politikası' }),
  },
  terms: {
    path: '/zticky/terms',
    title: { en: 'Zticky Terms of Use', tr: 'Zticky Kullanım Koşulları' },
    description: {
      en: 'The terms that apply when you use Zticky and its weekly Pro subscription.',
      tr: "Zticky'yi ve haftalık Pro aboneliğini kullanırken geçerli olan koşullar.",
    },
    index: false,
    trail: trail({ en: 'Terms of Use', tr: 'Kullanım Koşulları' }),
  },
}

export type ZtickyPageKind = keyof typeof ztickyPages
