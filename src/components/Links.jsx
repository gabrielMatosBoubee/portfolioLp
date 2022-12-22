import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

function Links() {
    return (
        <>
          <Link to='/' className={styles.link}>Home</Link>
          <Link to='/about' className={styles.link}>About</Link> 
          <Link to='/techStacks' className={styles.link}>Tech Stacks</Link> 
          <Link to='/projects' className={styles.link}>Projects</Link>
          <Link to='/contact' className={styles.link}>Contact</Link>   
        </>
    );
}

export default Links;