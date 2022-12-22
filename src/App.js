import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
 
function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path='/' component={ MainPage } />
      <Route path='/about' render={ () => (<Layout><About /></Layout>) } />
      <Route path='/techStacks' render={ () => (<Layout><Technologies /></Layout>) } />
      <Route path='/projects' render={() => (<Layout><Projects /></Layout>)} />
      <Route path='/contact' render={() => (<Layout><Contact /></Layout>)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
