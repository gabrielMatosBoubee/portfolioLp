import React from 'react';
import imgGabriel from '../Imagens/ImgGabriel.png'
import styles from '../styles/Home.module.css'

function Home() {
    return (
        <div className={styles.Home}>
            <p className={styles.desc}>Hi 👋, My name is 
                <strong className={ styles.Name }>Gabriel Boubee</strong> 
                I build things for web
            </p>
            <img src={ imgGabriel } alt='Um homem' className={ styles.img }/>
        </div>
    );
}

export default Home;