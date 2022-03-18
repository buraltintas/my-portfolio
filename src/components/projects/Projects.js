import styles from "./Projects.module.css";

import marketlist from "./marketlist.png";
import recipebook from "./recipebook.png";
import travelli from "./travelli.png";
import kredihesaplama from "./kredihesaplama.png";
import weather from "./weather.png";
import mars from "./mars.png";
import infolojik from "./infolojik.png";

const Projects = (props) => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>
        {props.engLang ? "Projects" : "Projeler"}
      </h1>

      <div className={styles.projectsContainer}>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {props.engLang ? "Grocery List" : "Alışveriş Listesi"}
            </h1>
            <p className={styles.text}>
              {props.engLang
                ? "A simple Grocery List application that you can enter estimated total value/budget, enter prices of items. You can see if your prediction is good or not."
                : "Bütçe girebileceğiniz bir alışveriş listesi uygulaması. Alışveriş listenizi oluşturduktan sonra markette ürünleri raftan alırken fiyatlarını girerek kasada sürprizle karşılaşmazsınız."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://marketlist-app.netlify.app/"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/marketlist"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={marketlist} alt="Marketlist web page view" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {props.engLang ? "Recipe Book" : "Tarif Kitabı"}
            </h1>
            <p className={styles.text}>
              {props.engLang
                ? "You can add recipes or view recipes with a book layout or find with search bar."
                : "Yeni tarifler ekleyebileceğiniz ve mevcut tarifleri kitap şeklinde görebileceğiniz ya da aratarak bulabileceğiniz yemek tarifi uygulaması."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://tarif-kitabim.netlify.app/"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/recipe-book"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={recipebook} alt="Recipe book web page view" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {props.engLang ? "Travel Guide" : "Gezi Rehberi"}
            </h1>
            <p className={styles.text}>
              {props.engLang
                ? "Simple travel guide app that you can select place on map and see details of that place."
                : "Haritadan seçtğiniz yer hakkında bilgi edinebileceğiniz gezi rehberi uygulaması."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://travelli-world.netlify.app/home"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/travelli"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={travelli} alt="Travel guide web page view" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {props.engLang ? "Credit Payback Calculator" : "Kredi Hesaplama"}
            </h1>
            <p className={styles.text}>
              {props.engLang
                ? "Calculates total payback and monthly installments with given informations about a credit."
                : "Bilgilerini girdiğiniz kredinin toplam ve aylık sabit geri ödeme tutarlarını hesaplayan uygulama."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://kredi-hesaplama.netlify.app/"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/kredi-hesaplama"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img
              src={kredihesaplama}
              alt="Credit Payback Calculation web page view"
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {props.engLang ? "Weather App" : "Hava Durumu Uygulaması"}
            </h1>
            <p className={styles.text}>
              {props.engLang
                ? "Simple weather application that you can see the weather forecast of city that entered."
                : "Şehir isimleri girerek hava durumu tahminlerini görüntüleyebileceğiniz hava durumu uygulaması."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://weather-app-burak.netlify.app/home"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/weather-app"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={weather} alt="Weather app web page view" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>Mars</h1>
            <p className={styles.text}>
              {props.engLang
                ? `My son Mars' very first web page. You can find remaining days to birth, family and playmates photos and you can send a message to Mars.`
                : "Oğlumuz Mars'ın ilk web sayfası. Bu sayfada; doğuma kalan süreyi, aile ve oyun arkadaşlarını görebilir ve Mars'a mektup gönderebilirsiniz."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://mars-altintas.netlify.app/"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/mars"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={mars} alt="Mars web page view" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>Infolojik</h1>
            <p className={styles.text}>
              {props.engLang
                ? "Landing page that redesigned of infolojik.com."
                : "Infolojik.com web sayfasının React ile yeniden tasarlanarak yapılmış versiyonu."}
            </p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://infolojik.netlify.app/"
              >
                {props.engLang ? "View app" : "Uygulamaya git"}
                <p className={styles.arrow}>&gt;</p>
              </a>
              <a
                className={styles.button}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/buraltintas/infolojik"
              >
                GitHub <p className={styles.arrow}>&gt;</p>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={infolojik} alt="Infolojik web page view" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
