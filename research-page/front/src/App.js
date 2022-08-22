import logo from './logo.svg';
import './App.css';
import UserForm from './pages/UserForm';
import WorkerForm from './pages/WorkerForm';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/user">Usuário</Link>
        <Link to="/worker">Profissional</Link>
        <Link to="/group">Grupo</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={ <WorkerForm /> } />
        <Route path="/user" element={ <UserForm /> } />
      </Routes>
    </div>
  );
}

export default App;
