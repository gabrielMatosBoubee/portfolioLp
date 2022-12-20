import './App.css';
import MainPage from './components/MainPage';
import {BrowserRouter, Route} from 'react-browser-router'
 
function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={ MainPage } />
    </BrowserRouter>
  );
}

export default App;
