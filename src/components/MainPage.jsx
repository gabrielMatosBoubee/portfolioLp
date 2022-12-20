import React from 'react';
import styles from '../styles/MainPage.module.css'
import imgGabriel from '../Imagens/ImgGabriel.jpg'
import icons from '../icons/data'
import projects from '../services/data'
import link from '../icons/link.svg'
import github from '../icons/miniGithub.svg'
import Layout from './Layout';

function MainPage() {
    return (
        <Layout>
          <main className={styles.Div}>
            <div>
            <p className={styles.desc}>Hi 👋,My name is 
                <strong className={ styles.Name }>Gabriel Boubee</strong> 
                I build things for web
            </p>
            <img src={ imgGabriel } alt='Um homem' className={ styles.img }/>
            </div>
            <section className={styles.technologies}>
                <h2 className={styles.technologiesTitle}>My Tech Stack</h2>
                <p className={styles.technologiesText}>
                    Technologies I've been working with recently
                </p>
                <div>
                {icons.map((icon) => <img src={ icon } alt="icon" />)}
                </div>
            </section>
            <section className={styles.projects}>
                <h2 className={styles.technologiesTitle}>Projects</h2>
                <p className={styles.technologiesText}>Things I've built so far</p>
                <div className={styles.projectsContainer}>
                    {projects.map((project) => (
                        <div className={styles.project}>
                            <img 
                             className={styles.projectImg} 
                             src={project.image} 
                             alt={project.title} 
                            />
                            <h3 style={{'fontSize': '28px'}}>{project.title}</h3>
                            <p className={styles.projectText}>{project.text}</p>
                            <p className={styles.projectStacks}>
                                {`Tech stacks: ${project.stacks}`}
                            </p>
                            <span className={styles.projectLinks}>
                              <a href={project.site} className={styles.projectLink}>
                                  <img src={link} alt="link" /> Live Preview
                              </a>
                              <a href={project.site} className={styles.projectLink}>
                                  <img src={github} alt="link" /> View Code
                              </a>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
          </main>
        </Layout>
    );
}

export default MainPage;