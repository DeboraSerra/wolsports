import { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserForm from './pages/UserForm';
import WorkerForm from './pages/WorkerForm';
import GroupForm from './pages/GroupForm';
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
        <Route path="/worker" element={ <WorkerForm /> } />
        <Route path="/user" element={ <UserForm /> } />
        <Route path="/group" element={ <GroupForm /> } />
        <Route path="/metrics" element={ <Metrics /> } />
      </Routes>
    </div>
  );
}

export default App;
