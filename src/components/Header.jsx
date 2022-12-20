import React from 'react';
import { Link } from 'react-browser-router'
import linkedinIcon from '../icons/linkedin.svg'
import githubIcon from '../icons/miniGithubGrey.svg'
import styles from '../styles/Header.module.css'
import Links from './Links';

function Header() {
    return (
        <header className={styles.Header} >
          <h3>Boubee</h3>
          <aside className={styles.links}>
          <Links />
          <a href="https://www.linkedin.com/in/gabriel-matos-boubee/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin link" /></a>
          <a href="https://github.com/gabrielMatosBoubee" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github link" /></a>  
          </aside>
        </header>
    );
}

export default Header;