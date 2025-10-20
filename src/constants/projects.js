import marketlist from '../constants/images/marketlist.png';
import recipebook from '../constants/images/recipebook.png';
import travelli from '../constants/images/travelli.png';
import kredihesaplama from '../constants/images/kredihesaplama.png';
import weather from '../constants/images/weather.png';
import mars from '../constants/images/mars.png';
import infolojik from '../constants/images/infolojik.png';
import marvel from '../constants/images/marvel.png';
import bootchat from '../constants/images/bootchat.png';
import math from '../constants/images/math.png';
import notes from '../constants/images/notes.png';
import racing from '../constants/images/racing.png';
import register from '../constants/images/register.png';
import marketmatik from '../constants/images/marketmatik.png';
import credit from '../constants/images/credit.jpeg';

const projectsData = [
  {
    nameEN: 'Banker: Credit Calculation',
    nameTR: 'Bankacı: Kredi Hesaplama',
    descEN:
      'Ad-free credit calculation and sharing app for bankers and finance professionals.',
    descTR:
      'Bankacılar ve finans profesyonelleri için reklamsız kredi hesaplama ve paylaşma uygulaması.',
    image: credit,
    link: 'https://apps.apple.com/tr/app/bankac%C4%B1-kredi-hesaplama/id6742378996?l=tr',
    github: 'https://github.com/buraltintas/bankaci-kredi-hesaplama-app',
  },
  {
    nameEN: 'MarketMatik',
    nameTR: 'MarketMatik',
    descEN:
      'A simple mobile app to create grocery list, set a target amount, avoid surprise in cashier.',
    descTR:
      'Alışveriş listesi oluşturmak, hedef tutarı belirlemek, kasadaki sürprizleri önlemek için basit bir mobil uygulama.',
    image: marketmatik,
    link: 'https://apps.apple.com/tr/app/marketmatik/id6476378508?l=tr',
    github: 'https://github.com/buraltintas/market-matik',
  },
  {
    nameEN: 'Voting App',
    nameTR: 'Oylama Uygulaması',
    descEN:
      'You can start a voting with up to 6 options and share vote link with voters. You can view votes live.',
    descTR:
      'Bir oylama başlatıp oy verecek kişilere link gönderebilir ve oylamayı canlı izleyebilirsiniz.',
    image: 'https://i.ibb.co/bJt0MWP/Screenshot-2023-03-28-at-13-18-42.png',
    link: 'https://vote-for-me.netlify.app/',
    github: 'https://github.com/buraltintas/voting-app',
  },
  {
    nameEN: 'Talk Tracker',
    nameTR: 'Konuşan Takibi',
    descEN:
      'You can create a participants list for meeting and click if the participant is talked or not.',
    descTR:
      'Toplantıya katılanlar listesi oluşturup konuşan kişileri işaretleyerek kimin konuştuğunu takip edebilirsiniz.',
    image: 'https://i.ibb.co/8KmCgX5/Ekran-Resmi-2023-07-20-16-20-01.png',
    link: 'https://talk-tracker.netlify.app/',
    github: 'https://github.com/buraltintas/talk-tracker',
  },
  {
    nameEN: '2nd Hand Project',
    nameTR: '2. El Projesi',
    descEN: 'A web application for selling second hand products.',
    descTR: 'İkinci el ürünleri satmak için bir web uygulaması.',
    image: 'https://i.ibb.co/TrrRRzT/Ekran-Resmi-2022-07-15-20-30-06.png',
    link: 'https://2nd-hand-project.netlify.app/',
    github: 'https://github.com/buraltintas/2nd-hand-project',
  },
  {
    nameEN: 'BootChat',
    nameTR: 'BootChat',
    image: bootchat,
    link: 'https://bootchat.vercel.app/',
    github: 'https://github.com/buraltintas/bootchat',
    descEN:
      'Simple instant messaging application that you can login with your Google account.',
    descTR:
      'Google hesabınızla giriş yaparak kullanıcılarla anında mesajlaşabilirsiniz.',
  },
  {
    nameEN: 'My Super Notes',
    nameTR: 'My Super Notes',
    image: notes,
    link: 'https://my-super-notes.netlify.app/',
    github: 'https://github.com/buraltintas/my-super-notes-app',
    descEN:
      'Simple and fast note taking application that you can login with your Google account.',
    descTR:
      'Google hesabınızla giriş yaparak kullanabileceğiniz not alma uygulaması.',
  },
  {
    nameEN: 'Grocery List',
    nameTR: 'Market Listesi',
    image: marketlist,
    link: 'https://marketlist-app.netlify.app/',
    github: 'https://github.com/buraltintas/marketlist',
    descEN:
      'A simple Grocery List application that you can enter estimated total value/budget, enter prices of items. You can see if your prediction is good or not.',
    descTR:
      'Bütçe girebileceğiniz bir alışveriş listesi uygulaması. Alışveriş listenizi oluşturduktan sonra markette ürünleri raftan alırken fiyatlarını girerek kasada sürprizle karşılaşmazsınız.',
  },
  {
    nameEN: 'Recipe Book',
    nameTR: 'Tarif Kitabı',
    image: recipebook,
    link: 'https://tarif-kitabim.netlify.app/',
    github: 'https://github.com/buraltintas/recipe-book',
    descEN:
      'You can add recipes or view recipes with a book layout or find with search bar.',
    descTR:
      'Yeni tarifler ekleyebileceğiniz ve mevcut tarifleri kitap şeklinde görebileceğiniz ya da aratarak bulabileceğiniz yemek tarifi uygulaması.',
  },
  {
    nameEN: 'Marvel Page',
    nameTR: 'Marvel Sayfası',
    image: marvel,
    link: 'https://marvel-by-burak.netlify.app/',
    github: 'https://github.com/buraltintas/marvel',
    descEN: 'You can find Marvel characters with pagination and search bar.',
    descTR:
      'Marvel karakterlerini sayfalama ve arama çubuğu ile bulup görüntüleyebilirsiniz.',
  },
  {
    nameEN: 'Racing Cars',
    nameTR: 'Yarışan Arabalar',
    image: racing,
    link: 'https://racing-cars.netlify.app/',
    github: 'https://github.com/buraltintas/racing-cars',
    descEN:
      'This is a simple racing game that you can select a Formula 1 car and race with 3 random cars.',
    descTR: 'Bir araba seçip rastgele 3 arabayla yarışabilirsiniz.',
  },
  {
    nameEN: 'Travel Guide',
    nameTR: 'Gezi Rehberi',
    image: travelli,
    link: 'https://travelli-world.netlify.app/',
    github: 'https://github.com/buraltintas/travelli',
    descEN:
      'Simple travel guide app that you can select place on map and see details of that place.',
    descTR:
      'Haritadan seçtğiniz yer hakkında bilgi edinebileceğiniz gezi rehberi uygulaması.',
  },
  {
    nameEN: 'Credit Payback Calculator',
    nameTR: 'Kredi Hesaplama',
    image: kredihesaplama,
    link: 'https://kredi-hesaplama.netlify.app/',
    github: 'https://github.com/buraltintas/kredi-hesaplama',
    descEN:
      'Calculates total payback and monthly installments with given informations about a credit.',
    descTR:
      'Bilgilerini girdiğiniz kredinin toplam ve aylık sabit geri ödeme tutarlarını hesaplayan uygulama.',
  },
  {
    nameEN: 'Weather App',
    nameTR: 'Hava Durumu Uygulaması',
    image: weather,
    link: 'https://weather-app-burak.netlify.app/',
    github: 'https://github.com/buraltintas/weather-app',
    descEN:
      'Simple weather application that you can see the weather forecast of city that entered.',
    descTR:
      'Şehir isimleri girerek hava durumu tahminlerini görüntüleyebileceğiniz hava durumu uygulaması.',
  },
  {
    nameEN: 'Math Multiplication Game',
    nameTR: 'Matematik Çarpma Oyunu',
    image: math,
    link: 'https://math-game-burak.netlify.app/',
    github: 'https://github.com/buraltintas/math-game',
    descEN:
      'Practice game for new learners of multiplication. For desktop use only, not responsive.',
    descTR:
      'Çarpma işlemini yeni öğrenenler için alıştırma oyunu. Geniş ekran ile kullanılmalıdır.',
  },
  {
    nameEN: 'Register Page',
    nameTR: 'Kayıt Ekranı',
    image: register,
    link: 'https://register-page-burak.netlify.app/',
    github: 'https://github.com/buraltintas/register-page',
    descEN:
      'Register page for new users. Form control is handled by Formik and validation is handled by Yup. For desktop use only, not responsive.',
    descTR:
      'Formik ve Yup kullanılarak oluşturulmuş kullanıcı kayıt ekranı. Geniş ekran ile kullanılmalıdır.',
  },
  {
    nameEN: 'Mars',
    nameTR: 'Mars',
    image: mars,
    link: 'https://mars-altintas.netlify.app/',
    github: 'https://github.com/buraltintas/mars',
    descEN: `My son Mars' very first web page. You can find remaining days to birth, family and playmates photos and you can send a message to Mars.`,
    descTR:
      "Oğlumuz Mars'ın ilk web sayfası. Bu sayfada; doğuma kalan süreyi, aile ve oyun arkadaşlarını görebilir ve Mars'a mektup gönderebilirsiniz.",
  },
  {
    nameEN: 'Infolojik',
    nameTR: 'Infolojik',
    image: infolojik,
    link: 'https://infolojik.netlify.app/',
    github: 'https://github.com/buraltintas/infolojik',
    descEN: 'Landing page that redesigned of infolojik.com.',
    descTR:
      'Infolojik.com web sayfasının React ile yeniden tasarlanarak yapılmış versiyonu.',
  },
];

export default projectsData;
