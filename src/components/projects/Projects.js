import styles from './Projects.module.css';

import marketlist from './marketlist.png';
import recipebook from './recipebook.png';
import travelli from './travelli.png';
import kredihesaplama from './kredihesaplama.png';
import weather from './weather.png';
import mars from './mars.png';
import infolojik from './infolojik.png';
import marvel from './marvel.png';

const Projects = (props) => {
  const projectsData = [
    {
      nameEN: '2nd Hand Project',
      nameTR: '2. El Projesi',
      descEN: 'A web application for selling second hand products.',
      descTR: 'İkinci el ürünleri satmak için bir web uygulaması.',
      image:
        'https://camo.githubusercontent.com/ed4b59f304845003adcf34f687a4873ae08e1952cbd69e91681cf12be4649b5d/68747470733a2f2f692e6962622e636f2f427273474438442f53637265656e2d53686f742d323032322d30342d32392d61742d31342d30392d33392e706e67',
      link: 'https://2nd-hand-project.netlify.app/',
      github: 'https://github.com/buraltintas/2nd-hand-project',
    },
    {
      nameEN: 'BootChat',
      nameTR: 'BootChat',
      image:
        'https://camo.githubusercontent.com/d9d78a385806b02bce1404d60b7ee0d71d61d407bcfc173fade94388826f2d36/68747470733a2f2f692e6962622e636f2f356b536e4c744b2f322e706e673f7261773d74727565',
      link: 'https://bootchat.vercel.app/',
      github: 'https://github.com/buraltintas/bootchat',
      descEN:
        'Simple instant messaging application that you can login with your Google account.',
      descTR:
        'Google hesabınızla giriş yaparak kullanıcılarla anında mesajlaşabilirsiniz.',
    },
    {
      nameEN: 'Grocery List',
      nameTR: 'Market Listesi',
      image: marketlist,
      link: 'https://marketlist.netlify.app/',
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
      link: 'https://recipebook.netlify.app/',
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
      nameEN: 'Travel Guide',
      nameTR: 'Gezi Rehberi',
      image: travelli,
      link: 'https://travelli.netlify.app/',
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
      link: 'https://kredihesaplama.netlify.app/',
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
      image:
        'https://camo.githubusercontent.com/0fee227794a6367609eb6d175dfff23f654bdd3cb7844314e8299cdad9bdb98d/68747470733a2f2f692e6962622e636f2f59324d4a4c73672f456b72616e2d5265736d692d323032322d30342d30342d30392d32372d31392e706e673f7261773d74727565',
      link: 'https://math-game-burak.netlify.app/',
      github: 'https://github.com/buraltintas/math-game',
      descEN:
        'Practice game for new learners of multiplication. For desktop use only, not responsive.',
      descTR:
        'Çarpma işlemini yeni öğrenenler için alıştırma oyunu. Geniş ekran ile kullanılmalır.',
    },
    {
      nameEN: 'Register Page',
      nameTR: 'Kayıt Ekranı',
      image:
        'https://camo.githubusercontent.com/a5852b05d632f475e36e2616be50a2a4d04bbcdf0aea0270a506c1363e02e6f4/68747470733a2f2f692e6962622e636f2f383250434b644b2f456b72616e2d5265736d692d323032322d30342d31332d31322d30322d30322e706e673f7261773d74727565',
      link: 'https://register-page-burak.netlify.app/',
      github: 'https://github.com/buraltintas/register-page',
      descEN:
        'Register page for new users. Form control is handled by Formik and validation is handled by Yup. For desktop use only, not responsive.',
      descTR:
        'Formik ve Yup kullanılarak oluşturulmuş kullanıcı kayıt ekranı. Geniş ekran ile kullanılmalır.',
    },
    {
      nameEN: 'Mars',
      nameTR: 'Mars',
      image: mars,
      link: 'https://mars-burak.netlify.app/',
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

  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>
        {props.engLang ? 'Projects' : 'Projeler'}
      </h1>

      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <div className={styles.card}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                {props.engLang ? project.nameEN : project.nameTR}
              </h1>
              <p className={styles.text}>
                {props.engLang ? project.descEN : project.descTR}
              </p>
              <div className={styles.buttons}>
                <a
                  className={styles.button}
                  target='_blank'
                  rel='noreferrer'
                  href={project.link}
                >
                  {props.engLang ? 'Live demo' : 'Uygulamaya git'}
                  <p className={styles.arrow}>&gt;</p>
                </a>
                <a
                  className={styles.button}
                  target='_blank'
                  rel='noreferrer'
                  href={project.github}
                >
                  GitHub <p className={styles.arrow}>&gt;</p>
                </a>
              </div>
            </div>
            <div className={styles.img}>
              <img src={project.image} alt={project.nameEN} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
