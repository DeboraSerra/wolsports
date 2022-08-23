import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <Link to="/user">Usuário</Link>
        <Link to="/worker">Profissional</Link>
        <Link to="/group">Grupo</Link>
        <Link to="/login">Métricas</Link>
      </nav>
    </header>
  )
}

export default Header;
