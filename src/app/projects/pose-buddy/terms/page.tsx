'use client';

import Link from 'next/link';
import { useLocale } from '@/i18n/useLocale';

const content = {
  en: {
    title: 'Pose Buddy Terms of Use',
    updated: 'Last updated: March 28, 2026',
    sections: [
      {
        heading: '1. Acceptance',
        body: 'By downloading or using Pose Buddy, you agree to these Terms of Use. If you do not agree, please do not use the app.',
      },
      {
        heading: '2. Allowed Use',
        body: 'Pose Buddy is provided for personal, non-commercial entertainment. You agree not to misuse, reverse engineer, interfere with service operation, or attempt unauthorized access to related systems.',
      },
      {
        heading: '3. Fair and Safe Behavior',
        body: 'You must not use the app in unlawful, abusive, or harmful ways. Any attempt to exploit bugs, automate abuse, or disrupt normal gameplay may result in restricted access to future services.',
      },
      {
        heading: '4. Intellectual Property',
        body: 'All game content, visuals, and branding related to Pose Buddy remain the property of the developer unless explicitly stated otherwise.',
      },
      {
        heading: '5. Disclaimers and Limitation of Liability',
        body: 'The app is provided on an "as is" and "as available" basis without warranties of any kind. To the maximum extent permitted by law, the developer is not liable for indirect, incidental, or consequential damages arising from use of the app.',
      },
      {
        heading: '6. Changes to These Terms',
        body: 'These terms may be updated from time to time. Continued use after updates means you accept the revised terms.',
      },
      {
        heading: '7. Contact',
        body: 'For questions about these terms, please use the support channel on the Pose Buddy support page.',
      },
    ],
    linksTitle: 'Related Pages',
    marketing: 'Marketing Page',
    support: 'Support',
    privacy: 'Privacy Policy',
  },
  tr: {
    title: 'Pose Buddy Kullanım Koşulları',
    updated: 'Son güncelleme: 28 Mart 2026',
    sections: [
      {
        heading: '1. Kabul',
        body: 'Pose Buddy uygulamasını indirerek veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayın.',
      },
      {
        heading: '2. İzin Verilen Kullanım',
        body: 'Pose Buddy kişisel ve ticari olmayan eğlence amaçlı sunulur. Uygulamayı kötüye kullanmamayı, tersine mühendislik yapmamayı, hizmetin çalışmasına müdahale etmemeyi ve ilgili sistemlere yetkisiz erişim denememeyi kabul edersiniz.',
      },
      {
        heading: '3. Adil ve Güvenli Davranış',
        body: 'Uygulamayı hukuka aykırı, taciz edici veya zararlı şekilde kullanmamalısınız. Hataları suistimal etmeye, otomasyonla kötüye kullanıma veya normal oynanışı bozmaya yönelik girişimler gelecekteki hizmetlere erişimin kısıtlanmasına yol açabilir.',
      },
      {
        heading: '4. Fikri Mülkiyet',
        body: 'Pose Buddy ile ilgili tüm oyun içeriği, görseller ve marka unsurları aksi açıkça belirtilmedikçe geliştiriciye aittir.',
      },
      {
        heading: '5. Sorumluluk Reddi ve Sorumluluğun Sınırlandırılması',
        body: 'Uygulama herhangi bir garanti olmaksızın "olduğu gibi" ve "mevcut olduğu şekilde" sunulur. Yasanın izin verdiği azami ölçüde, geliştirici uygulamanın kullanımından doğan dolaylı, arızi veya sonuç niteliğindeki zararlardan sorumlu değildir.',
      },
      {
        heading: '6. Koşulların Güncellenmesi',
        body: 'Bu koşullar zaman zaman güncellenebilir. Güncellemelerden sonra uygulamayı kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.',
      },
      {
        heading: '7. İletişim',
        body: 'Bu koşullarla ilgili sorularınız için Pose Buddy destek sayfasındaki iletişim kanalını kullanabilirsiniz.',
      },
    ],
    linksTitle: 'İlgili Sayfalar',
    marketing: 'Pazarlama Sayfası',
    support: 'Destek',
    privacy: 'Gizlilik Politikası',
  },
} as const;

export default function PoseBuddyTermsPage() {
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
            href='/projects/pose-buddy/privacy'
            className='text-blue-400 transition-colors hover:text-blue-300'
          >
            {copy.privacy}
          </Link>
        </div>
      </section>
    </div>
  );
}
