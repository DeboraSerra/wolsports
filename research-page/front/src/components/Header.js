import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openModal }) => {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <Link to="/user">Usuário</Link>
        <Link to="/worker">Profissional</Link>
        <Link to="/group">Grupo</Link>
        <button type="button" onClick={ openModal }>Métricas</button>
      </nav>
    </header>
  )
}

export default Header;
