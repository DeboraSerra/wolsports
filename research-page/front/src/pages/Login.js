import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const url = 'http://localhost:3001';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { email, password } = state;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verify(token);
    }
  }, [])

  const verify = async (token) => {
    const obj = {
      method: 'GET',
      headers: {
        authorization: token,
      },
    }
    const response = await fetch(`${url}/login/verification`, obj);
    const { admin } = await response.json();
    if (admin) {
      localStorage.setItem('admin', admin);
      navigate('/metrics');
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setState((prevSt) => ({
      ...prevSt,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state),
    };
    const data = await fetch(`${url}/login`, obj);
    const info = await data.json();
    if (info.token) {
      localStorage.setItem('token', info.token);
      const res = await fetch(`${url}/login/verification`, { method: 'GET', headers: { authorization: info.token } });
      const { admin } = await res.json();
      localStorage.setItem('admin', admin);
      navigate('/metrics');
      return;
    }
    setError(info.message || 'Usuário ou senha invalidos');
  }

  return (
    <form onSubmit={ handleSubmit }>
      {error && <p>{ error }</p>}
      <input
        type="email"
        name="email"
        value={ email }
        onChange={ handleChange }
        placeholder="E-mail"
        aria-label="E-mail"
      />
      <input
        type="password"
        name="password"
        value={ password }
        onChange={ handleChange }
        placeholder="Senha"
        aria-label="Senha"
      />
      <button onSubmit={ handleSubmit } type="submit">
        Entrar
      </button>
    </form>
  )
}

export default Login;
