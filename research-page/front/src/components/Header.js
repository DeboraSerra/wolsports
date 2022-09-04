import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openModal }) => {
  return (
    <header>
      <nav>
        <Link to="/user">Usuário</Link>
        <Link to="/worker">Profissional</Link>
        <Link to="/group">Grupo</Link>
        
      </nav>
    </header>
  )
}

export default Header;
