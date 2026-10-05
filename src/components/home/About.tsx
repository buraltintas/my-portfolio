'use client'

import Link from 'next/link'
import { useLocale } from '@/i18n/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'

// Who he is in plain sentences: the facts people and answer engines quote,
// in the same two-column layout as the experience timeline. Project names
// link to their case studies.
type Part = string | { text: string; slug: string }

const copy: Record<'en' | 'tr', Part[][]> = {
  en: [
    [
      "I'm Burak Altıntaş (Burak Altintas without the Turkish letters), a frontend developer who builds web and mobile apps with React, React Native and Next.js, often from the backend all the way to the App Store.",
    ],
    [
      'Since June 2022 I have worked across the hospitality products of Protel & Simpra: today mainly Resort Manager and Portal UI, and I have delivered PMS, Loyalty, Simphony Ordering Hub and Simphony Manager App. I maintain the shared UiKit and Widget libraries used across products, and on CheckandPlace, a reservation system serving guests from 156+ countries, I built the AI assistant that makes online booking faster and easier.',
    ],
    [
      'Alongside that I build products end to end. I founded ',
      { text: 'Bankacı', slug: 'banker' },
      ', a loan calculator and loan marketplace on iOS, Android and the web, and run it myself: product, design, the mobile app, the Go backend and the Google Cloud infrastructure. I also lead the entire technical side of ',
      { text: 'Coffee Dictionary', slug: 'coffee-dictionary' },
      ', a coffee glossary on iOS and the web.',
    ],
    [
      'My other projects include ',
      { text: 'Boşa Gezme!', slug: 'bosa-gezme' },
      ', a discovery platform for home and living stores, the ',
      { text: 'Yalınlı', slug: 'yalinli-platform' },
      ' civic platform, ',
      { text: 'MarketMatik', slug: 'marketmatik' },
      ', the ',
      { text: 'Pose Buddy', slug: 'pose-buddy' },
      ' puzzle game and the ',
      { text: 'DomainDock', slug: 'domain-dock' },
      ' Chrome extension.',
    ],
    ['Before moving into software I worked at Türkiye İş Bankası from 2011 to 2021.'],
  ],
  tr: [
    [
      "Ben Burak Altıntaş; React, React Native ve Next.js ile web ve mobil uygulamalar geliştiren, çoğu zaman backend'den App Store'a kadar tüm süreci üstlenen bir frontend geliştiriciyim.",
    ],
    [
      "Haziran 2022'den beri Protel & Simpra'nın misafir ağırlama ürünlerinde çalışıyorum: bugün başta Resort Manager ve Portal UI'da görev alıyorum; PMS, Loyalty, Simphony Ordering Hub ve Simphony Manager App projelerini teslim ettim. Ürünler arasında ortak kullanılan UiKit ve Widget kütüphanelerini geliştiriyorum, 156'dan fazla ülkeden misafire hizmet veren CheckandPlace rezervasyon sisteminde de online rezervasyonu hızlandıran yapay zekâ asistanını geliştirdim.",
    ],
    [
      "Bunun yanında ürünleri uçtan uca geliştiriyorum. iOS, Android ve web'de yayında olan kredi hesaplama ve kredi pazaryeri ",
      { text: 'Bankacı', slug: 'banker' },
      "'yı kurdum; ürünü, tasarımı, mobil uygulamayı, Go backend'i ve Google Cloud altyapısını kendim yürütüyorum. iOS ve web'deki kahve sözlüğü ",
      { text: 'Coffee Dictionary', slug: 'coffee-dictionary' },
      "'nin de tüm teknik tarafını yürütüyorum.",
    ],
    [
      'Diğer projelerim arasında ev ve yaşam mağazalarını keşfetme platformu ',
      { text: 'Boşa Gezme!', slug: 'bosa-gezme' },
      ', ',
      { text: 'Yalınlı', slug: 'yalinli-platform' },
      ' sivil platformu, ',
      { text: 'MarketMatik', slug: 'marketmatik' },
      ', ',
      { text: 'Pose Buddy', slug: 'pose-buddy' },
      ' bulmaca oyunu ve ',
      { text: 'DomainDock', slug: 'domain-dock' },
      ' Chrome eklentisi var.',
    ],
    ["Yazılıma geçmeden önce 2011–2021 arasında Türkiye İş Bankası'nda çalıştım."],
  ],
}

export function About() {
  const { locale, t, path } = useLocale()

  return (
    <section
      className="shell grid gap-x-12 gap-y-6 pt-[clamp(72px,10vw,120px)] lg:grid-cols-[240px_minmax(0,1fr)]"
      aria-labelledby="about"
    >
      <SectionHeading title={t('about.title')} id="about" />
      <div className="flex max-w-[720px] flex-col gap-4 text-[17px] leading-[1.7] text-slate-300">
        {copy[locale].map((parts, i) => (
          <p key={i}>
            {parts.map((part, j) =>
              typeof part === 'string' ? (
                part
              ) : (
                <Link
                  key={j}
                  href={path(`/projects/${part.slug}`)}
                  className="text-slate-50 underline decoration-slate-600 underline-offset-4 hover:text-blue-300"
                >
                  {part.text}
                </Link>
              )
            )}
          </p>
        ))}
      </div>
    </section>
  )
}
