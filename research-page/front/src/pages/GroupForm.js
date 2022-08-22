import react, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../provider/Provider';

export const url = process.env.REACT_APP_URL || 'http://localhost:3001';

const GroupForm = () => {
  const [state, setState] = useState({
    email: '',
    name: '',
    phone: '',
    district: 1,
    address: '',
    activity: 1,
    time: 1,
    forFun: true,
    isOpen: 'sim',
    howItWorks: '',
    indication: '',
  });
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('');

  const { email, name, phone, district, address, activity, time, forFun, isOpen, howItWorks, indication } = state;
  const { districts, activities, times } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, checked, type } = target;
    let { value } = target;
    if (type === 'checkbox') value = checked;
    if (name === 'district' || name === 'activity' || name === 'time') value = +value;
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
  }, [email, name, phone, address, howItWorks, district, activity, time, forFun, isOpen, indication])

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
    const data = await fetch(`${url}/group`, obj);
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
        placeholder="Nome completo do responsável"
        aria-label="Nome completo do responsável"
      />
      <input
        type="email"
        name="email"
        value={ email }
        onChange={ handleChange }
        placeholder="E-mail do responsável"
        aria-label="E-mail do responsável"
      />
      <input
        type="text"
        name="phone"
        value={ phone }
        onChange={ handleChange }
        placeholder="(**) *****-****"
        aria-label="Telefone com DDD do responsável"
      />
      <label htmlFor="district">
        Onde vocês jogam?
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
        Qual modalidade vocês jogam?
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
        <legend>Qual horário os jogos costumam acontecer?</legend>
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
      <legend>Vocês jogam só por diversão?</legend>
      <label htmlFor="forFun">
        <input
          type="checkbox"
          name="forFun"
          id="forFun"
          onChange={ handleChange }
          checked={ forFun }
        />
        Sim
      </label>
      <section>
        <legend>O grupo é aberto para todos?</legend>
        <label htmlFor="sim">
          <input
            type="radio"
            name="isOpen"
            id="sim"
            value="sim"
            onChange={ handleChange }
            selected={ isOpen === 'sim' }
          />
          Sim
        </label>
        <label htmlFor="nao">
          <input
            type="radio"
            name="isOpen"
            id="nao"
            value="nao"
            onChange={ handleChange }
            selected={ isOpen === 'nao' }
          />
          Não, a gente treina para competir
        </label>
        <label htmlFor="talvez">
          <input
            type="radio"
            name="isOpen"
            id="talvez"
            value="talvez"
            onChange={ handleChange }
            selected={ isOpen === 'talvez' }
          />
          É aberto, mas já temos um ótimo nível e só quem sabe jogar consegue participar
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

export default GroupForm;
