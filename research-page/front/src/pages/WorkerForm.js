import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context, url } from '../provider/Provider';

const WorkerForm = () => {
  const [state, setState] = useState({
    email: '',
    name: '',
    phone: '',
    district: 1,
    activity: 1,
    time: 1,
    needCref: false,
    howItWorks: '',
    indication: '',
  });
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('');

  const { email, name, phone, district, activity, time, needCref, address, howItWorks, indication } = state;
  const { districts, activities, times } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, checked, type } = target;
    let { value } = target;
    if (type === 'checkbox') value = checked;
    if (name === 'activity' || name === 'district' || name === 'time') value = +value;
    setState((prevSt) => ({
      ...prevSt,
      [name]: value,
    }));
  }

  useEffect(() => {
    const validEmail = !!email && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g.test(email);
    const validName = !!name;
    const validPhone = !!phone;
    const validHow = !!howItWorks;
    const validAddress = !!address;
    const isValid = validEmail && validName && validPhone && validHow && validAddress;
    setValid(isValid);
  }, [email, name, phone, district, activity, time, needCref, howItWorks, indication, address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    const obj = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state),
    };
    const data = await fetch(`${url}/worker`, obj);
    const error = await data.json();
    console.log(error);
    if (error.message) {
      setError(error.message)
      return;
    }
    navigate('/')
  }

  return (
    <form onSubmit={ handleSubmit }>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        value={ name }
        onChange={ handleChange }
        placeholder="Nome completo"
        aria-label="Nome completo"
      />
      <input
        type="email"
        name="email"
        value={ email }
        onChange={ handleChange }
        placeholder="E-mail"
        aria-label="E-mail"
      />
      <input
        type="text"
        name="phone"
        value={ phone }
        onChange={ handleChange }
        placeholder="(**) *****-****"
        aria-label="Telefone com DDD"
      />
      <label htmlFor="district">
        Onde acontece sua atividade?
        <select
          value={ district }
          name="district"
          id="district"
          aria-label="Região administrativa"
          onChange={ handleChange }
        >
          {districts.map(({ id, name }) => (
            <option value={ id } key={ id }>{ name }</option>
          ))}
        </select>
      </label>
      <input
        type="text"
        name="address"
        value={ address }
        onChange={ handleChange }
        placeholder="Qual a quadra?"
        aria-label="Qual a quadra?"
      />
      <label htmlFor="activity">
        Que atividade você dá aula?
        <select
          value={ activity }
          name="activity"
          id="activity"
          aria-label="Atividade"
          onChange={ handleChange }
        >
          {activities.map(({ id, name }) => (
            <option value={ id } key={ id }>{ name }</option>
          ))}
        </select>
      </label>
      <section>
        <legend>Em qual horário você costuma dar a sua atividade?</legend>
        {times.map(({ id, name }) => (
          <label htmlFor={ name } key={ id }>
            <input
              type="radio"
              name="time"
              id={ name }
              value={ id }
              onChange={ handleChange }
              selected={ time === id }
            />
            {name}
          </label>
        ))}
      </section>
      <section>
        <legend>Sua atividade precisa de registro profissional para atua?</legend>
        <label htmlFor="needs">
          <input
            type="checkbox"
            name="needCref"
            id="needs"
            onChange={ handleChange }
            checked={ needCref }
          />
          sim
        </label>
      </section>
      <label htmlFor="how">
        Conta um pouco como acontece?
        <textarea
          name="howItWorks"
          id="how"
          value={ howItWorks }
          onChange={ handleChange }
        />
      </label>
      <section>
        <legend>Conhece algum grupo ou outro profissional para nos indicar?</legend>
        <textarea
          name="indication"
          onChange={ handleChange }
          value={ indication }
        />
      </section>
      <button
        type="submit"
        onSubmit={ handleSubmit }
        disabled={ !valid }
      >
        Enviar
      </button>
    </form>
  )
}

export default WorkerForm;
