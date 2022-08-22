import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import FilterButtons from '../components/FilterButtons';

export const url = 'http://localhost:3001/metrics';

Chart.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Metrics = () => {
  const [state, setState] = useState({
    arr: [],
    title: '',
    loading: true,
    type: '',
  })
  const { arr, title, loading, type } = state;

  useEffect(() => {
    getInfo('activity');
  }, [])

  const getInfo = async (cat, text) => {
    setState((prevSt) => ({ ...prevSt, loading: true }));
    const obj = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      }
    }
    const response = await fetch(`${url}/${cat}`, obj);
    const { data } = await response.json();
    setState((prevSt) => ({
      ...prevSt,
      arr: data,
      type: cat,
      loading: false,
      title: `Quantidade de pessoas por ${text}`
    }))
  }

  return (
    <section style={{ width: '80%', margin: 'auto' }}>
      <FilterButtons handleClick={ getInfo } />
      {!loading && <Bar options={ {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: title },
          },
        } } data={ {
          labels: arr?.map(({ value }) => value),
          datasets: [{
            label: 'Pessoas',
            data: arr?.map(({ qnt }) => qnt),
            backgroundColor: 'purple',
          }]
      } } />}
    </section>
  )
}

export default Metrics;
