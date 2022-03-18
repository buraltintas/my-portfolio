import styles from "./Header.module.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Hi!</button>
        <button className={styles.button}>Projects</button>
        <button className={styles.button}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
