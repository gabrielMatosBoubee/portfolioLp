import React from 'react';
import data from '../services/educationData';
import organization from '../icons/organization.svg';
import calendar from '../icons/calendar.svg';
import styles from '../styles/About.module.css';

function About() {
    return (
        <div>
            <section className={styles.AboutMe}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.AboutText}>
               I am a kind of person who wants to be challenged, 
               the one who will undestand the client's needs and bring 
               up the solucion on codes! But now I'll tell you my story. 
               I start to learn development because I am keen on technology 
               and I enjoy learning it every day.
            </p>
            <p className={styles.AboutText}>
            Furthermore, I have experience with various front-end technologies: React | React Router | Redux | Vercel | Figma | HTML5 | CSS3.
            </p>
            <p className={styles.AboutText}>
            On the back-end, I am familiar with: Node.js | SQL | Express | Sequelize | MongoDb | JWT.
            </p>
            <p className={styles.AboutText}>
            I also possess skills in testing with: Jest | RTL | Mocha | Chai.
            </p>
            </section>
            <section>
              <h2 className={styles.title}>Education</h2>
              {data.map((element, index) => (
                <div className={styles.infoEduContainer} key={index}>
                    <section className={styles.infoEdu}>
                    <span>
                      <h3 className={styles.titleEdu}>{element.title}</h3>
                      <p className={styles.organization}>
                        <img 
                        src={organization} 
                        alt="Organization icon" 
                        /> {element.organization}
                      </p>
                    </span>
                    <span className={styles.times}>
                      <p className={styles.time}>{element.time}</p>
                      <p className={styles.period}>
                        <img 
                        src={calendar} 
                        alt='calendar icon'
                        /> {element.period}</p>
                    </span>
                    </section>
                </div>
              ))}
            </section>
        </div>
    );
}

export default About;