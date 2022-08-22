import React from 'react';

const FilterButtons = ({ handleClick }) => {
  const endpoints = ['activity', 'activity/1', 'activity/2', 'activity/3', 'goal', 'goal/1', 'goal/2', 'goal/3', 'gender', 'district', 'type'];
  const texts = ['Atividade', 'Atividade/gênero feminino', 'Atividade/gênero masculino', 'Atividade/não informado', 'Objetivo', 'Objetivo/gênero feminino',
    'Objetivo/gênero masculino', 'Objetivo/não informado', 'Gênero', 'Reagião Administrativa', 'Categoria']
  return (
    <section>
      {endpoints.map((item, index) => (
        <button
          type="button"
          onClick={ () => handleClick(item, texts[index]) }
          key={ index }
        >
          {texts[index]}
        </button>
      ))}
    </section>
  )
}

export default FilterButtons;
