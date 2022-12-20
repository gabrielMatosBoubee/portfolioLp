import React from 'react';
import projects from '../services/data'
import link from '../icons/link.svg'
import github from '../icons/miniGithub.svg'
import styles from '../styles/Projects.module.css'

function Projects() {
    return (
        <section className={styles.projects}>
        <h2 className={styles.Title}>Projects</h2>
        <p className={styles.Text}>Things I've built so far</p>
        <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
                <div className={styles.project} key={project.title + index}>
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
                      <a 
                      href={project.site} 
                      className={styles.projectLink}
                      target="_blank" 
                      rel="noreferrer">
                          <img src={link} alt="link" /> Live Preview
                      </a>
                      <a 
                      href={project.site} 
                      className={styles.projectLink}
                      target="_blank" 
                      rel="noreferrer">
                          <img src={github} alt="link" /> View Code
                      </a>
                    </span>
                </div>
            ))}
        </div>
    </section>
    );
}

export default Projects;