import React from 'react';
import icons from '../icons/data'
import styles from '../styles/Technologies.module.css'


function Technologies() {
    return (
        <section className={styles.technologies}>
                <h1 className={styles.Title}>My Tech Stack</h1>
                <p className={styles.Text}>
                    Technologies I've been working with recently
                </p>
                <div className={styles.stacks}>
                {icons.map(({icon, name}, index) => (
                    <div key={index} className={styles.sta}>
                    <img 
                        src={ icon } 
                        className={styles.stack} 
                        alt="icon" 
                        id={`stack${index}`}
                    />
                    <p className={styles.name}>{name}</p>
                    </div>
                )
                )}
                </div>
            </section>
    );
}

export default Technologies;