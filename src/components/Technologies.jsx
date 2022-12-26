import React from 'react';
import icons from '../icons/data'
import styles from '../styles/Technologies.module.css'


function Technologies() {
    return (
        <section className={styles.technologies}>
                <h2 className={styles.Title}>My Tech Stack</h2>
                <p className={styles.Text}>
                    Technologies I've been working with recently
                </p>
                <div className={styles.stacks}>
                {icons.map((icon, index) => <img src={ icon } className={styles.stack} alt="icon" id={`stack${index}`}key={index} />)}
                </div>
            </section>
    );
}

export default Technologies;