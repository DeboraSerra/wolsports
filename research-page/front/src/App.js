import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import UserForm from './pages/UserForm';
import WorkerForm from './pages/WorkerForm';
import GroupForm from './pages/GroupForm';
import Login from './pages/Login';
import Metrics from './pages/Metrics';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/worker" element={ <WorkerForm /> } />
        <Route path="/user" element={ <UserForm /> } />
        <Route path="/group" element={ <GroupForm /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/metrics" element={ <Metrics /> } />
      </Routes>
    </div>
  );
}

export default App;
