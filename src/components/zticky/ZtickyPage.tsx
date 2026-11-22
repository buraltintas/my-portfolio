'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';
import type { ZtickyPageKind } from '@/data/ztickyPages';

type Section = { heading: string; body: string };
type Copy = { title: string; updated?: string; intro?: string; sections: Section[] };

const content: Record<ZtickyPageKind, { en: Copy; tr: Copy }> = {
  support: {
    en: {
      title: 'Zticky Support',
      intro: 'Zticky turns your photos and videos into WhatsApp sticker packs. If something is not working, the answers below cover most cases. Otherwise, email us.',
      sections: [
        { heading: 'The pack does not appear in WhatsApp', body: 'A pack needs at least 3 stickers. Make sure WhatsApp is installed and up to date, then tap "Add to WhatsApp" again. After you edit a pack, tap "Update in WhatsApp".' },
        { heading: 'The background was not removed well', body: 'Cut-out works best when the subject is clear and well lit. Use "Touch up" in the editor to erase or restore parts by hand. On Android the cut-out tool downloads once and needs internet the first time.' },
        { heading: 'Restore my Pro subscription', body: 'Open Settings and tap "Restore purchases". Use the same App Store or Google Play account you subscribed with.' },
        { heading: 'Cancel my subscription', body: 'Pro is managed by your store. On iPhone: Settings > your name > Subscriptions. On Android: Google Play > Payments & subscriptions > Subscriptions. Deleting the app does not cancel it.' },
        { heading: 'AI styles say I have no tries left', body: 'Free users can watch an ad for one try, up to 3 a day. Pro includes 30 a day. Limits reset every day.' },
      ],
    },
    tr: {
      title: 'Zticky Destek',
      intro: 'Zticky fotoğraf ve videolarını WhatsApp çıkartma paketine çevirir. Bir şey çalışmıyorsa aşağıdaki yanıtlar çoğu durumu karşılar. Olmazsa bize yaz.',
      sections: [
        { heading: "Paket WhatsApp'ta görünmüyor", body: "Bir pakette en az 3 çıkartma olmalı. WhatsApp'ın kurulu ve güncel olduğundan emin ol, sonra yeniden \"WhatsApp'a ekle\"ye dokun. Paketi düzenledikten sonra \"WhatsApp'ta güncelle\"ye dokun." },
        { heading: 'Arka plan iyi silinmedi', body: "Kesme, konu net ve iyi ışıklıysa en iyi sonucu verir. Düzenleyicideki \"Rötuş\" ile parçaları elle silebilir ya da geri getirebilirsin. Android'de kesme aracı ilk seferde bir kez iner ve internet ister." },
        { heading: 'Pro aboneliğimi geri yükle', body: 'Ayarlar\'ı aç ve "Satın alımları geri yükle"ye dokun. Abone olduğun App Store ya da Google Play hesabını kullan.' },
        { heading: 'Aboneliğimi iptal et', body: "Pro'yu mağazan yönetir. iPhone'da: Ayarlar > adın > Abonelikler. Android'de: Google Play > Ödemeler ve abonelikler > Abonelikler. Uygulamayı silmek aboneliği iptal etmez." },
        { heading: 'Yapay zekâ stillerinde hakkım kalmadı diyor', body: "Ücretsiz kullanıcılar bir reklam izleyip bir deneme kazanır, günde en fazla 3. Pro'da günde 30 hak var. Haklar her gün yenilenir." },
      ],
    },
  },
  privacy: {
    en: {
      title: 'Zticky Privacy Policy',
      updated: 'Last updated: November 22, 2026',
      intro: 'Zticky turns your photos and videos into WhatsApp stickers. We built it so your pictures stay on your phone. Zticky has no account and no login.',
      sections: [
        { heading: 'What stays on your phone', body: 'The photos and videos you pick. Background removal, cropping, outlines, text and video trimming all run on your device. Your sticker packs, presets and settings are stored only in the app on your phone.' },
        { heading: 'AI styles (optional)', body: 'When you apply an AI style, only the sticker you chose is sent to our server and to our AI image provider (Google Gemini) to create the new look. We do not keep the image after the result is returned and we do not use it to train models. Nothing is sent unless you tap an AI style.' },
        { heading: 'WhatsApp', body: 'When you tap "Add to WhatsApp", the pack is handed to the WhatsApp app on your phone. What WhatsApp does with it is covered by WhatsApp\'s own policy.' },
        { heading: 'Purchases', body: 'Subscriptions go through the App Store or Google Play. We use RevenueCat to check whether you have Pro. It receives an anonymous app user ID and your purchase receipts, not your photos.' },
        { heading: 'Ads (free version)', body: 'We show ads through Google AdMob. Depending on your choices (the consent form in the EEA, UK and some US states, and Apple\'s tracking prompt on iOS), AdMob may use your device\'s advertising ID to show and measure ads. You can change your ad choices any time in Settings. Pro users see no ads.' },
        { heading: 'Daily AI limits', body: 'To enforce daily limits, our server stores the anonymous app user ID with a count of styles used per day and the IDs of rewarded ads you watched.' },
        { heading: 'Permissions', body: 'Photos: to show your library and read the photos and videos you pick. You can give access to selected photos only. Tracking (iOS): optional, only for ads.' },
        { heading: 'Children', body: 'Zticky is not directed at children under 13.' },
      ],
    },
    tr: {
      title: 'Zticky Gizlilik Politikası',
      updated: 'Son güncelleme: 22 Kasım 2026',
      intro: 'Zticky fotoğraf ve videolarını WhatsApp çıkartmasına çevirir. Fotoğrafların telefonunda kalsın diye böyle yaptık. Zticky\'de hesap ve giriş yok.',
      sections: [
        { heading: 'Telefonunda kalanlar', body: 'Seçtiğin fotoğraf ve videolar. Arka plan silme, kırpma, kenarlık, yazı ve video kesme cihazında çalışır. Çıkartma paketlerin, hazır ayarların ve ayarların yalnızca telefonundaki uygulamada saklanır.' },
        { heading: 'Yapay zekâ stilleri (isteğe bağlı)', body: 'Bir yapay zekâ stili uyguladığında yalnızca seçtiğin çıkartma, yeni görünüm için sunucumuza ve görsel sağlayıcımıza (Google Gemini) gönderilir. Sonuç döndükten sonra görseli saklamayız ve model eğitmek için kullanmayız. Bir stile dokunmadıkça hiçbir şey gönderilmez.' },
        { heading: 'WhatsApp', body: '"WhatsApp\'a ekle"ye dokunduğunda paket telefonundaki WhatsApp uygulamasına verilir. WhatsApp\'ın onunla ne yaptığı WhatsApp\'ın kendi politikasına tabidir.' },
        { heading: 'Satın almalar', body: 'Abonelikler App Store ya da Google Play üzerinden yapılır. Pro olup olmadığını RevenueCat ile kontrol ederiz. RevenueCat anonim bir uygulama kimliği ve satın alma makbuzlarını alır, fotoğraflarını almaz.' },
        { heading: 'Reklamlar (ücretsiz sürüm)', body: 'Reklamları Google AdMob ile gösteririz. Tercihlerine göre (AB, Birleşik Krallık ve bazı ABD eyaletlerindeki onay formu, iOS\'ta Apple\'ın izleme sorusu) AdMob reklam göstermek ve ölçmek için cihazının reklam kimliğini kullanabilir. Reklam tercihlerini Ayarlar\'dan istediğin zaman değiştirebilirsin. Pro kullanıcılar reklam görmez.' },
        { heading: 'Günlük yapay zekâ sınırları', body: 'Günlük sınırları uygulamak için sunucumuz anonim uygulama kimliğini, gün içinde kullanılan stil sayısını ve izlediğin ödüllü reklamların kimliklerini saklar.' },
        { heading: 'İzinler', body: 'Fotoğraflar: galerini göstermek ve seçtiğin fotoğraf ve videoları okumak için. Yalnızca seçili fotoğraflara izin verebilirsin. İzleme (iOS): isteğe bağlı, yalnızca reklamlar için.' },
        { heading: 'Çocuklar', body: 'Zticky 13 yaşından küçük çocuklara yönelik değildir.' },
      ],
    },
  },
  terms: {
    en: {
      title: 'Zticky Terms of Use',
      updated: 'Last updated: November 22, 2026',
      intro: 'By using Zticky you agree to these terms.',
      sections: [
        { heading: 'Your content', body: 'You keep all rights to the photos, videos and stickers you make. Only use pictures you have the right to use, and do not make stickers that are illegal, hateful or that harass someone.' },
        { heading: 'Zticky Pro', body: 'Pro is a weekly auto-renewing subscription, with a free trial where offered. Payment is charged to your App Store or Google Play account when you confirm the purchase, or when the trial ends. It renews unless you turn it off at least 24 hours before the end of the current period. You can manage or cancel it in your store account settings. Any unused part of a free trial ends when you buy a subscription.' },
        { heading: 'AI styles', body: 'AI styles are limited per day. Results are generated automatically and may not always look right. The limits can change.' },
        { heading: 'WhatsApp', body: 'Zticky is not made by or affiliated with WhatsApp or Meta. Sticker packs must follow WhatsApp\'s rules.' },
        { heading: 'No warranty', body: 'Zticky is provided as is. To the extent the law allows, we are not liable for indirect losses or lost data. Keep your own copies of anything important.' },
        { heading: 'Changes', body: 'We may update these terms. If you keep using Zticky after an update, the new terms apply.' },
      ],
    },
    tr: {
      title: 'Zticky Kullanım Koşulları',
      updated: 'Son güncelleme: 22 Kasım 2026',
      intro: "Zticky'yi kullanarak bu koşulları kabul etmiş olursun.",
      sections: [
        { heading: 'İçeriğin', body: 'Yaptığın fotoğraf, video ve çıkartmaların tüm hakları sende kalır. Yalnızca kullanma hakkın olan görselleri kullan; yasa dışı, nefret içeren ya da birini taciz eden çıkartmalar yapma.' },
        { heading: 'Zticky Pro', body: "Pro, sunulduğu yerde ücretsiz denemeli, haftalık otomatik yenilenen bir aboneliktir. Ödeme, satın almayı onayladığında ya da deneme bittiğinde App Store veya Google Play hesabından alınır. Mevcut dönemin bitiminden en az 24 saat önce kapatmazsan yenilenir. Mağaza hesap ayarlarından yönetebilir ya da iptal edebilirsin. Abonelik satın aldığında ücretsiz denemenin kalan kısmı sona erer." },
        { heading: 'Yapay zekâ stilleri', body: 'Yapay zekâ stilleri günlük olarak sınırlıdır. Sonuçlar otomatik üretilir ve her zaman doğru görünmeyebilir. Sınırlar değişebilir.' },
        { heading: 'WhatsApp', body: "Zticky, WhatsApp ya da Meta tarafından yapılmamıştır ve onlarla bağlantılı değildir. Çıkartma paketleri WhatsApp'ın kurallarına uymalıdır." },
        { heading: 'Garanti yok', body: 'Zticky olduğu gibi sunulur. Yasanın izin verdiği ölçüde dolaylı kayıplardan ya da kaybolan verilerden sorumlu değiliz. Önemli olanların kopyasını kendin sakla.' },
        { heading: 'Değişiklikler', body: "Bu koşulları güncelleyebiliriz. Güncellemeden sonra Zticky'yi kullanmaya devam edersen yeni koşullar geçerli olur." },
      ],
    },
  },
};

const ui = {
  en: { contact: 'Contact', links: 'Related pages', support: 'Support', privacy: 'Privacy Policy', terms: 'Terms of Use' },
  tr: { contact: 'İletişim', links: 'İlgili sayfalar', support: 'Destek', privacy: 'Gizlilik Politikası', terms: 'Kullanım Koşulları' },
} as const;

const hrefs: Record<ZtickyPageKind, string> = {
  support: '/zticky',
  privacy: '/zticky/privacy',
  terms: '/zticky/terms',
};

export function ZtickyPage({ kind }: { kind: ZtickyPageKind }) {
  const { locale, path } = useLocale();
  const copy = content[kind][locale];
  const labels = ui[locale];
  const others = (Object.keys(hrefs) as ZtickyPageKind[]).filter((k) => k !== kind);

  return (
    <div className='mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20'>
      <h1 className='mb-3 text-3xl font-bold text-white sm:text-4xl'>{copy.title}</h1>
      {copy.updated && <p className='mb-4 text-sm text-slate-400'>{copy.updated}</p>}
      {copy.intro && <p className='mb-8 text-base leading-7 text-slate-300'>{copy.intro}</p>}

      <div className='space-y-5'>
        {copy.sections.map((section) => (
          <section
            key={section.heading}
            className='rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6'
          >
            <h2 className='mb-2 text-lg font-semibold text-white'>{section.heading}</h2>
            <p className='text-sm leading-7 text-slate-300'>{section.body}</p>
          </section>
        ))}
      </div>

      <section className='mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6'>
        <h2 className='mb-2 text-lg font-semibold text-white'>{labels.contact}</h2>
        <a
          href={`mailto:${siteConfig.email}`}
          className='text-blue-400 transition-colors hover:text-blue-300'
        >
          {siteConfig.email}
        </a>
      </section>

      <section className='mt-10'>
        <h2 className='mb-3 text-xl font-semibold text-white'>{labels.links}</h2>
        <div className='flex flex-wrap gap-4 text-sm'>
          {others.map((k) => (
            <Link
              key={k}
              href={path(hrefs[k])}
              className='text-blue-400 transition-colors hover:text-blue-300'
            >
              {labels[k]}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
