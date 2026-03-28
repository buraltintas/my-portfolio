'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';

const content = {
  en: {
    title: 'Pose Buddy Support',
    intro:
      'Need help with Pose Buddy? This page is the official support URL for app users.',
    contactTitle: 'Contact',
    contactText:
      'For support requests, bug reports, or account-related questions, contact:',
    faqTitle: 'Quick Help',
    faq: [
      {
        q: 'The game is not opening correctly. What should I do?',
        a: 'Force close the app, reopen it, and make sure your device has enough free storage and the latest app version installed.',
      },
      {
        q: 'My progress seems lost after reinstalling the app.',
        a: 'Gameplay progress is currently stored locally on your device. Reinstalling the app or clearing app data can remove saved progress.',
      },
      {
        q: 'How can I report a gameplay bug?',
        a: 'Send a short description, device model, and iOS version to the support email so issues can be reproduced quickly.',
      },
    ],
    linksTitle: 'Useful Links',
    marketing: 'Marketing Page',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
  tr: {
    title: 'Pose Buddy Destek',
    intro:
      'Pose Buddy için yardıma mı ihtiyacınız var? Bu sayfa uygulama kullanıcıları için resmi destek URL adresidir.',
    contactTitle: 'İletişim',
    contactText:
      'Destek talepleri, hata bildirimleri veya hesapla ilgili sorular için:',
    faqTitle: 'Hızlı Yardım',
    faq: [
      {
        q: 'Oyun düzgün açılmıyor. Ne yapmalıyım?',
        a: 'Uygulamayı tamamen kapatıp yeniden açın ve cihazınızda yeterli boş alan ile güncel uygulama sürümünün bulunduğunu kontrol edin.',
      },
      {
        q: 'Uygulamayı sildikten sonra ilerlemem kayboldu.',
        a: 'Oyun ilerlemesi şu anda cihazınızda yerel olarak saklanır. Uygulamayı yeniden yüklemek veya uygulama verilerini silmek kayıtlı ilerlemeyi kaldırabilir.',
      },
      {
        q: 'Oynanışla ilgili bir hatayı nasıl bildirebilirim?',
        a: 'Destek e-postasına kısa bir açıklama, cihaz modeli ve iOS sürümünü ileterek hızlıca yeniden üretmemize yardımcı olabilirsiniz.',
      },
    ],
    linksTitle: 'Yararlı Bağlantılar',
    marketing: 'Pazarlama Sayfası',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
  },
} as const;

export default function PoseBuddySupportPage() {
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

      <h1 className='mb-4 text-3xl font-bold text-white sm:text-4xl'>
        {copy.title}
      </h1>
      <p className='mb-8 text-base text-slate-300 sm:text-lg'>{copy.intro}</p>

      <section className='mb-10 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6'>
        <h2 className='mb-3 text-xl font-semibold text-white'>
          {copy.contactTitle}
        </h2>
        <p className='mb-3 text-slate-300'>{copy.contactText}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className='text-blue-400 transition-colors hover:text-blue-300'
        >
          {siteConfig.email}
        </a>
      </section>

      <section className='mb-10'>
        <h2 className='mb-4 text-xl font-semibold text-white'>
          {copy.faqTitle}
        </h2>
        <div className='space-y-4'>
          {copy.faq.map((item) => (
            <div
              key={item.q}
              className='rounded-xl border border-slate-800 bg-slate-900/40 p-5'
            >
              <h3 className='mb-2 text-base font-semibold text-white'>
                {item.q}
              </h3>
              <p className='text-sm text-slate-300'>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
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
            href='/projects/pose-buddy/privacy'
            className='text-blue-400 transition-colors hover:text-blue-300'
          >
            {copy.privacy}
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
