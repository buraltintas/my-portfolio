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
      "I'm Burak Altıntaş (Burak Altintas without the Turkish letters), a frontend developer. I build web and mobile apps with React, React Native and Next.js, and I often take them from the backend all the way to the App Store.",
    ],
    [
      'Since June 2022 I have worked on the hospitality products of Protel & Simpra. Today that is mainly Resort Manager and Portal UI, and I have delivered PMS, Loyalty, Simphony Ordering Hub and Simphony Manager App. I maintain the UiKit and Widget libraries shared across products. On CheckandPlace, a reservation system serving guests from 156+ countries, I built the AI assistant that makes online booking faster and easier.',
    ],
    [
      'I also build my own products end to end. I founded ',
      { text: 'Bankacı', slug: 'banker' },
      ', an app for loans, credit cards, deposits and investments with a loan marketplace, on iOS, Android and the web. I run it myself: product, design, the mobile app, the Go backend and the Google Cloud infrastructure. I co-founded ',
      { text: 'Coffee Dictionary', slug: 'coffee-dictionary' },
      ', a coffee glossary on iOS, Android and the web, and I run its whole technical side.',
    ],
    [
      { text: 'Casamiyo', slug: 'casamiyo' },
      ', a building and apartment management app I built with a business partner, is live on the web and the App Store, and its Android app is coming soon. I am now building ',
      { text: 'Notanica', slug: 'notanica' },
      ', a sheet-music app for iPhone, iPad and Android that reads a printed page and plays it.',
    ],
    [
      'My other projects include ',
      { text: 'Boşa Gezme!', slug: 'bosa-gezme' },
      ', a review site for home and living stores, the ',
      { text: 'Yalınlı', slug: 'yalinli-platform' },
      ' civic platform, ',
      { text: 'MarketMatik', slug: 'marketmatik' },
      ', the ',
      { text: 'Pose Buddy', slug: 'pose-buddy' },
      ' puzzle game, the ',
      { text: 'DomainDock', slug: 'domain-dock' },
      ' Chrome extension and ',
      { text: 'day-zero-kit', slug: 'day-zero-kit' },
      ', an open-source setup guide with skills for AI agents.',
    ],
    ['Before moving into software I worked at Türkiye İş Bankası from 2011 to 2021.'],
  ],
  tr: [
    [
      "Ben Burak Altıntaş, frontend geliştiriciyim. React, React Native ve Next.js ile web ve mobil uygulamalar geliştiriyorum; çoğu zaman backend'den App Store'a kadar işin tamamını üstleniyorum.",
    ],
    [
      "Haziran 2022'den beri Protel & Simpra'nın misafir ağırlama ürünlerinde çalışıyorum. Bugün başta Resort Manager ve Portal UI'dayım; PMS, Loyalty, Simphony Ordering Hub ve Simphony Manager App projelerini teslim ettim. Ürünler arasında ortak kullanılan UiKit ve Widget kütüphanelerinin bakımını yapıyorum. 156'dan fazla ülkeden misafire hizmet veren CheckandPlace rezervasyon sisteminde online rezervasyonu hızlandıran yapay zekâ asistanını geliştirdim.",
    ],
    [
      "Bunun yanında kendi ürünlerimi uçtan uca geliştiriyorum. Kredi, kredi kartı, mevduat ve yatırım için iOS, Android ve web'de yayında olan, kredi pazaryeri de içeren ",
      { text: 'Bankacı', slug: 'banker' },
      "'yı kurdum; ürünü, tasarımı, mobil uygulamayı, Go backend'i ve Google Cloud altyapısını kendim yürütüyorum. iOS, Android ve web'deki kahve sözlüğü ",
      { text: 'Coffee Dictionary', slug: 'coffee-dictionary' },
      "'nin kurucu ortağıyım ve tüm teknik tarafını yürütüyorum.",
    ],
    [
      'Bir iş ortağıyla birlikte geliştirdiğim site ve apartman yönetimi uygulaması ',
      { text: 'Casamiyo', slug: 'casamiyo' },
      " web'de ve App Store'da yayında, Android uygulaması da yakında geliyor. Şu sıralar basılı notayı okuyup çalan, iPhone, iPad ve Android için bir nota uygulaması olan ",
      { text: 'Notanica', slug: 'notanica' },
      "'yı geliştiriyorum.",
    ],
    [
      'Diğer projelerim arasında ev ve yaşam mağazaları için değerlendirme sitesi ',
      { text: 'Boşa Gezme!', slug: 'bosa-gezme' },
      ', ',
      { text: 'Yalınlı', slug: 'yalinli-platform' },
      ' sivil platformu, ',
      { text: 'MarketMatik', slug: 'marketmatik' },
      ', ',
      { text: 'Pose Buddy', slug: 'pose-buddy' },
      ' bulmaca oyunu, ',
      { text: 'DomainDock', slug: 'domain-dock' },
      " Chrome eklentisi ve yapay zekâ ajanları için skill'leriyle açık kaynak kurulum rehberi ",
      { text: 'day-zero-kit', slug: 'day-zero-kit' },
      ' var.',
    ],
    ["Yazılıma geçmeden önce 2011'den 2021'e kadar Türkiye İş Bankası'nda çalıştım."],
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
