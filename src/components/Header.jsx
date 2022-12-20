import React from 'react';
import styles from '../styles/Header.module.css'
import Links from './Links';
import LinksOutside from './LinksOutside';

function Header() {
    return (
        <header className={styles.Header} >
          <h3>Boubee</h3>
          <aside className={styles.links}>
          <Links />
          <LinksOutside />
          </aside>
        </header>
    );
}

export default Header;