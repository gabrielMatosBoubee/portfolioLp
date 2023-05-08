import React from 'react';
import Links from './Links';
import LinksOutside from './LinksOutside';
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={styles.upperFooter}>
                <span className={styles.information}>
                  <h3>Boubee</h3>
                  <span className={styles.personalInformation}>
                    <p className={styles.personalItens}>+55 24 988646887</p>
                    <p className={styles.personalItens}>gm.boubee@gmail.com</p>
                    <LinksOutside />
                  </span>
                </span>
            </div>
            <div className={styles.downFooter}>
                <span className={styles.links}>
                <Links />
                </span>
                <p>I love coffe</p>
                </div>
        </footer>
    );
}

export default Footer;