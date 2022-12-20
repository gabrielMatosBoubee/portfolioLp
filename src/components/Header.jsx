import React from 'react';
import styles from '../styles/Header.module.css'
import Links from './Links';
import LinksOutside from './LinksOutside';

function Header() {
    return (
        <header className={styles.Header} >
          <input id='menu' type='checkbox' className={styles.menu} />
              <label htmlFor="menu">
            <div className={styles.hamburgerLines}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
          </label>
          <h3 className={styles.t}>Boubee</h3>
          <aside className={styles.links}>
            <div className={styles.linksInside}>
          <Links />
            </div>
          <LinksOutside />
          </aside>
        </header>
    );
}

export default Header;