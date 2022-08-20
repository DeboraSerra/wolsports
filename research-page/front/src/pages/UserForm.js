import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../provider/Provider';

const UserForm = () => {
  const [state, setState] = useState({
    email: '',
    fullName: '',
    birthday: '',
    gender: '',
    district: '',
    address: '',
    activity: [],
    practice: false,
    which: '',
    goal: [],
    personality: [],
    indications: '',
  });

  const [valid, setValid] = useState(false);
  const { genders, activities, goals, personalities, districts } = useContext(Context);
  const { email, fullName, birthday, gender, district, address, activity, practice,
    which, goal, personality, indications } = state;

  useEffect(() => {
    setState((prevSt) => ({
      ...prevSt,
      gender: genders[0],
      district: districts[0],
    }))
  }, [])

  const handleChange = ({ target }) => {
    const { name, checked } = target;
    let { value } = target;
    if (name.includes('activity')) {
      value = checked ? [...activity, value] : activity.filter((a) => a !== value);
    }
    if (name.includes('personality')) {
      value = checked ? [...personality, value] : personality.filter((a) => a !== value);
    }
    if (name.includes('goal')) {
      value = checked ? [...goal, value] : goal.filter((a) => a !== value);
    }
    if (name === practice) value = checked;
    setState((prevSt) => ({
      ...prevSt,
      [name]: value,
    }));
  }

  useEffect(() => {
    const validEmail = !!email && /^[\w+\W+]@[\w+]\.[\w{2,3}]$/.test(email);
    const validName = !!fullName;
    const validBirthday = !!birthday;
    const validAddress = !!address;
    const validActivity = activity.length > 0;
    const validWhich = practice && !!which;
    const validGoal = goal.length > 0;
    const validPersonality = personality.length > 0;
    setValid(validEmail && validName && validBirthday && validAddress
      && validActivity && validWhich && validGoal && validPersonality);
  }, [state])

  const handleSubmit = () => {
    // navigate('/')
  }
  return (
    <form action="http://localhost:3001/user" method="POST" onSubmit={ handleSubmit }>
      <input
        type="text"
        name="name"
        value={ fullName }
        onChange={ handleChange }
        placeholder="Nome completo"
        aria-label="Nome completo"
      />
      <input
        type="email"
        name="email"
        onChange={ handleChange }
        value={ email }
        placeholder="E-mail"
        aria-label="E-mail"
      />
      <input
        type="date"
        name="birthday"
        onChange={ handleChange }
        value={ birthday }
        placeholder="Data de aniversário"
        aria-label="Data de aniversário"
      />
      <section>
        <legend>Como você se identifica? (Gênero)</legend>
        {genders.map(({ id, name }) => (
          <label htmlFor={ name } key={ id }>
            <input
              type="radio"
              name="gender"
              id={ name }
              value={ id }
              onChange={ handleChange }
              checked={ gender === id }
            />
            {name}
          </label>
        ))}
      </section>
      <select
        value={ district }
        onChange={ handleChange }
        aria-label="Região administrativa"
      >
        {districts.map(({ id, name }) => (
          <option value={ id } key={ id }>{ name }</option>
        ))}
      </select>
      <input
        type="text"
        name="address"
        value={ address }
        onChange={ handleChange }
        placeholder="Qual a quadra?"
        aria-label="Qual a quadra?"
      />
      <section>
        <legend>Quais atividades físicas são do seu interesse?</legend>
        <p>Pode ser aquela atividade que você sempre gostou, mas nunca mais fez, ou aquela que você já fez a muito tempo e nunca mais praticou e nem sabe onde tem!</p>
        {activities.map(({ id, name }) => (
          <label htmlFor={ name } key={ id }>
            <input
              type="checkbox"
              name={ `activity-${name}` }
              id={ name }
              value={ id }
              onChange={ handleChange }
              checked={ activity.includes(id) }
            />
            {name}
          </label>
        ))}
      </section>
      <label>
        Você pratica alguma das atividades marcadas acima?
        <input
          type="checkbox"
          name="practice"
          onChange={ handleChange }
          checked={ practice }
        />
      </label>
      <input
        type="text"
        name="which"
        onChange={ handleChange }
        value={ which }
        placeholder="Quais?"
        aria-label="Quais?"
      />
      <section>
        <legend>Hoje, qual seu objetivo quando você procura fazer uma atividade física?</legend>
        {goals.map(({ id, name }) => (
          <label htmlFor={ name } key={ id }>
            <input
              type="checkbox"
              name={ `goal-${name}` }
              id={ name }
              value={ id }
              onChange={ handleChange }
              checked={ goal.includes(id) }
            />
            {name}
          </label>
        ))}
      </section>
      <section>
        <legend>Conhece algum grupo para nos indicar?</legend>
        <input
          type="text"
          name="indications"
          onChange={ handleChange }
          value={ indications }
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

export default UserForm;
