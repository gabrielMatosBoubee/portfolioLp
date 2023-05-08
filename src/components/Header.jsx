import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css'
import Links from './Links';
import LinksOutside from './LinksOutside';
import sun from  '../icons/sun.svg' 
import moon from '../icons/moon.svg'

function Header() {

  const [theme, setTheme] = useState('white')
  
  const componenteDidMount = () => {
    if(localStorage.getItem('theme') === 'dark') {
      changeThemeToDark()
    }
  }

  useEffect(() => {
    componenteDidMount()
  }, [])

   const changeThemeToDark = () => {
    const root = document.documentElement.style
    root.setProperty('--titleColor', 'white')
    root.setProperty('--bodyColor', 'rgba(25, 25, 25, 1)')
    root.setProperty('--linksColor', 'rgba(167, 167, 167, 1)')
    root.setProperty('--cardColor', 'rgba(54, 54, 54, 1)')
    root.setProperty('--cardTitleColor', 'white')
    root.setProperty('--boxShadowMenu', 'rgb(32, 32, 32)')
    root.setProperty('--linksMenuColor', 'black')
    root.setProperty('--linesHamburgue', 'white')
    root.setProperty('--projectTextColor', 'rgba(204, 204, 204, 1)')
    root.setProperty('--projectStacksColor', 'rgba(204, 204, 204, 1)')
    root.setProperty('--projectLinkColor', 'white')
    root.setProperty('--linkSvgColor', 'invert(100%) sepia(0%) saturate(0%) hue-rotate(315deg) brightness(112%) contrast(98%)')
    root.setProperty('--informationColor', '#A7A7A7')
    root.setProperty('--logoColor', 'white')
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
   }

   const changeThemeToWhite = () => {
    const root = document.documentElement.style
    root.setProperty('--titleColor', '#42446E')
    root.setProperty('--bodyColor', '#F5F5F5')
    root.setProperty('--linksColor', 'black')
    root.setProperty('--cardColor', 'rgba(255, 255, 255, 1)')
    root.setProperty('--cardTitleColor', 'rgba(0, 0, 0, 1)')
    root.setProperty('--boxShadowMenu', '5px 0px 10px 0px #aaa')
    root.setProperty('--linksMenuColor', '#fff')
    root.setProperty('--linesHamburgue', '#333')
    root.setProperty('--projectTextColor', '#666666')
    root.setProperty('--projectStacksColor', 'white')
    root.setProperty('--projectLinkColor', 'black')
    root.setProperty('--linkSvgColor', 'white')
    root.setProperty('--informationColor', 'black')
    root.setProperty('--logoColor', 'black')
    localStorage.setItem('theme', 'white')
    setTheme('white')
   }

   const changeTheme = () => {
    return theme === 'white' ? changeThemeToDark() : changeThemeToWhite();
   }

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
          <h3 className={styles.logo}>Boubee</h3>
          {theme === 'white' ? 
          <input type='image' src={sun} alt="" onClick={changeTheme} /> 
          : <input type='image' src={moon} alt="" onClick={changeTheme} />}
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