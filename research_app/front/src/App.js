import { useContext, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MForm from './pages/forms/mobile/UserForm';
import BForm from './pages/forms/browser/UserForm';
import Metrics from './pages/Metrics';
import BHome from './pages/home/browser/Home';
import MHome from './pages/home/mobile/Home'
import { Context } from './provider/Provider';

function App() {
  const { isMobile } = useContext(Context);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ isMobile ? <MHome /> : <BHome /> } />
        <Route path="/user" element={ isMobile ? <MForm /> : <BForm /> } />
        <Route path="/metrics" element={ <Metrics /> } />
      </Routes>
    </div>
  );
}

export default App;
