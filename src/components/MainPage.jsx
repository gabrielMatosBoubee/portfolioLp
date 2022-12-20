import React from 'react';
import styles from '../styles/MainPage.module.css'
import Layout from './Layout';
import Projects from './Projects';
import Technologies from './Technologies';
import Home from './Home';

function MainPage() {
    return (
        <Layout>
          <main className={styles.Div}>
            <Home />
            <Technologies />
            <Projects />
          </main>
        </Layout>
    );
}

export default MainPage;