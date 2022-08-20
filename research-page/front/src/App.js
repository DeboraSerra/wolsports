import logo from './logo.svg';
import './App.css';
import UserForm from './pages/UserForm';
import WorkerForm from './pages/WorkerForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <WorkerForm /> } />
        <Route path="/user" element={ <UserForm /> } />
      </Routes>
    </div>
  );
}

export default App;
