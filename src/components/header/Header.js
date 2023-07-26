import styles from './Header.module.css';
import tr from './tr.png';
import eng from './eng.png';

import Switch from '@mui/material/Switch';

const Header = (props) => {
  const check = (e) => {
    if (e.target.checked === false) props.engLangTrue();
    if (e.target.checked === true) props.engLangFalse();
  };

  const label = { inputProps: { 'aria-label': 'controlled' } };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg
          className={styles.logoImg}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#c3c6c7'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
          />
        </svg>
        <h1>burak altintas</h1>
      </div>
      <div className={styles.buttons}>
        <button onClick={props.scrollTop} className={styles.button}>
          {props.engLang ? 'Hi!' : 'Merhaba!'}
        </button>
        <button onClick={props.scrollProjects} className={styles.button}>
          {props.engLang ? 'Projects' : 'Projeler'}
        </button>
        <button onClick={props.scrollContact} className={styles.button}>
          {props.engLang ? 'Contact' : 'İletişim'}
        </button>
      </div>
      <div className={styles.lang}>
        <img className={styles.flag} src={eng} alt='Great Britain flag' />
        <Switch
          checked={props.engLang === false}
          {...label}
          onChange={check}
          color='default'
          size='small'
        />
        <img className={styles.flag} src={tr} alt='Turkish flag' />
      </div>
    </header>
  );
};

export default Header;
