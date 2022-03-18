import styles from "./Header.module.css";
import logo from "./logo.png";

import tr from "./tr.png";
import eng from "./eng.png";

import Switch from "@mui/material/Switch";

const Header = (props) => {
  const check = (e) => {
    if (e.target.checked === false) props.engLangTrue();
    if (e.target.checked === true) props.engLangFalse();
  };

  // const CustomSwitch = withStyles({
  //   colorSecondary: {
  //     "&.Mui-checked + .MuiSwitch-track": {
  //       backgroundColor: "purple",
  //     },
  //   },
  //   track: {
  //     backgroundColor: "blue",
  //   },
  // })(Switch);

  const label = { inputProps: { "aria-label": "controlled" } };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" onClick={() => window.location.reload()} />
      </div>
      <div className={styles.buttons}>
        <button onClick={props.scrollTop} className={styles.button}>
          {props.engLang ? "Hi!" : "Merhaba!"}
        </button>
        <button onClick={props.scrollProjects} className={styles.button}>
          {props.engLang ? "Projects" : "Projeler"}
        </button>
        <button onClick={props.scrollContact} className={styles.button}>
          {props.engLang ? "Contact" : "İletişim"}
        </button>
      </div>
      <div className={styles.lang}>
        <img className={styles.flag} src={eng} alt="Great Britain flag" />
        <Switch
          checked={props.engLang === false}
          {...label}
          onChange={check}
          color="default"
          size="small"
        />
        <img className={styles.flag} src={tr} alt="Turkish flag" />
      </div>
    </header>
  );
};

export default Header;
