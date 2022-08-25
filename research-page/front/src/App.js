import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserForm from './pages/UserForm';
import WorkerForm from './pages/WorkerForm';
import GroupForm from './pages/GroupForm';
import Metrics from './pages/Metrics';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/worker" element={ <WorkerForm /> } />
        <Route path="/user" element={ <UserForm /> } />
        <Route path="/group" element={ <GroupForm /> } />
        <Route path="/metrics" element={ <Metrics /> } />
      </Routes>
    </div>
  );
}

export default App;
