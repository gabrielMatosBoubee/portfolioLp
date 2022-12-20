import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Technologies from './components/Technologies';
 
function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path='/' component={ MainPage } />
      <Route path='/home'render={ () => (<Layout><Home /> </Layout>) } /> 
      <Route path='/techStacks' render={ () => (<Layout><Technologies /></Layout>) } />
      </div>
    </BrowserRouter>
  );
}

export default App;
