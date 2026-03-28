'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';

const content = {
  en: {
    title: 'Pose Buddy Privacy Policy',
    updated: 'Last updated: March 28, 2026',
    sections: [
      {
        heading: '1. Overview',
        body: 'This Privacy Policy explains how Pose Buddy handles information when you use the app and related support pages.',
      },
      {
        heading: '2. Gameplay Data Stored on Device',
        body: 'Pose Buddy stores gameplay-related progress data locally on your device to provide a better game experience. This local data may be removed if you uninstall the app or clear app data.',
      },
      {
        heading: '3. Local Notifications',
        body: 'If enabled, Pose Buddy may send local reminder notifications on your device. Notification settings can be changed anytime from your device settings.',
      },
      {
        heading: '4. Advertising',
        body: 'Pose Buddy is designed to support AdMob-based ads. If ads are enabled in a future release, advertising providers may process limited device or ad-related identifiers according to their own privacy terms.',
      },
      {
        heading: '5. Analytics',
        body: 'Pose Buddy does not currently use a dedicated in-app analytics SDK for gameplay tracking.',
      },
      {
        heading: '6. Third-Party Services',
        body: 'If future versions integrate additional third-party services, this policy will be updated to reflect what is used and why.',
      },
      {
        heading: '7. Contact and Privacy Requests',
        body: 'For privacy-related questions or requests, contact the developer by email.',
      },
    ],
    linksTitle: 'Related Pages',
    marketing: 'Marketing Page',
    support: 'Support',
    terms: 'Terms of Use',
  },
  tr: {
    title: 'Pose Buddy Gizlilik Politikası',
    updated: 'Son güncelleme: 28 Mart 2026',
    sections: [
      {
        heading: '1. Genel Bakış',
        body: 'Bu Gizlilik Politikası, Pose Buddy uygulamasını ve ilgili destek sayfalarını kullanırken bilgilerin nasıl işlendiğini açıklar.',
      },
      {
        heading: '2. Cihazda Saklanan Oyun Verileri',
        body: 'Pose Buddy, daha iyi bir oyun deneyimi sağlamak için oyun ilerlemesine ilişkin verileri cihazınızda yerel olarak saklar. Uygulamayı kaldırmanız veya uygulama verilerini temizlemeniz durumunda bu yerel veriler silinebilir.',
      },
      {
        heading: '3. Yerel Bildirimler',
        body: 'Etkinleştirildiğinde Pose Buddy cihazınızda yerel hatırlatma bildirimleri gönderebilir. Bildirim ayarlarını cihaz ayarlarından istediğiniz zaman değiştirebilirsiniz.',
      },
      {
        heading: '4. Reklamcılık',
        body: 'Pose Buddy, AdMob tabanlı reklamları destekleyecek şekilde tasarlanmıştır. Gelecek bir sürümde reklamlar etkinleştirilirse, reklam sağlayıcıları kendi gizlilik şartlarına göre sınırlı cihaz veya reklam tanımlayıcılarını işleyebilir.',
      },
      {
        heading: '5. Analitik',
        body: 'Pose Buddy şu anda oyun takibi için özel bir uygulama içi analitik SDK kullanmamaktadır.',
      },
      {
        heading: '6. Üçüncü Taraf Hizmetler',
        body: 'Gelecekteki sürümlere ek üçüncü taraf hizmetler dahil edilirse, bu politika neyin neden kullanıldığını yansıtacak şekilde güncellenecektir.',
      },
      {
        heading: '7. İletişim ve Gizlilik Talepleri',
        body: 'Gizlilikle ilgili soru veya talepleriniz için geliştiriciye e-posta ile ulaşabilirsiniz.',
      },
    ],
    linksTitle: 'İlgili Sayfalar',
    marketing: 'Pazarlama Sayfası',
    support: 'Destek',
    terms: 'Kullanım Koşulları',
  },
} as const;

export default function PoseBuddyPrivacyPage() {
  const { locale } = useLocale();
  const copy = content[locale];

  return (
    <div className='mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20'>
      <div className='mb-8'>
        <Link
          href='/projects/pose-buddy'
          className='inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white'
        >
          &larr; Pose Buddy
        </Link>
      </div>

      <h1 className='mb-3 text-3xl font-bold text-white sm:text-4xl'>
        {copy.title}
      </h1>
      <p className='mb-8 text-sm text-slate-400'>{copy.updated}</p>

      <div className='space-y-5'>
        {copy.sections.map((section) => (
          <section
            key={section.heading}
            className='rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6'
          >
            <h2 className='mb-2 text-lg font-semibold text-white'>
              {section.heading}
            </h2>
            <p className='text-sm leading-7 text-slate-300'>{section.body}</p>
          </section>
        ))}
      </div>

      <section className='mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6'>
        <h2 className='mb-2 text-lg font-semibold text-white'>
          {copy.sections[6].heading}
        </h2>
        <a
          href={`mailto:${siteConfig.email}`}
          className='text-blue-400 transition-colors hover:text-blue-300'
        >
          {siteConfig.email}
        </a>
      </section>

      <section className='mt-10'>
        <h2 className='mb-3 text-xl font-semibold text-white'>
          {copy.linksTitle}
        </h2>
        <div className='flex flex-wrap gap-4 text-sm'>
          <Link
            href='/projects/pose-buddy'
            className='text-blue-400 transition-colors hover:text-blue-300'
          >
            {copy.marketing}
          </Link>
          <Link
            href='/projects/pose-buddy/support'
            className='text-blue-400 transition-colors hover:text-blue-300'
          >
            {copy.support}
          </Link>
          <Link
            href='/projects/pose-buddy/terms'
            className='text-blue-400 transition-colors hover:text-blue-300'
          >
            {copy.terms}
          </Link>
        </div>
      </section>
    </div>
  );
}
