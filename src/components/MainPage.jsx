import React from 'react';
import styles from '../styles/MainPage.module.css'
import imgGabriel from '../Imagens/ImgGabriel.jpg'

function MainPage() {
    return (
        <div>
            <p className={styles.desc}>Hi 👋,My name is 
                <strong className={ styles.Name }>Gabriel Boubee</strong> 
                I build things for web
            </p>
            <img src={ imgGabriel } alt='Um homem' className={ styles.img }/>
        </div>
    );
}

export default MainPage;