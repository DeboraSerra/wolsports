import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import FilterButtons from '../components/FilterButtons';

export const url = 'http://localhost:3001/metrics';

Chart.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Metrics = () => {
  const [state, setState] = useState({
    arr: [],
    title: '',
    loading: true,
    admin: '',
  })
  const navigate = useNavigate();

  const { arr, title, loading, admin } = state;

  useEffect(() => {
    getInfo('activity');
    const admin = localStorage.getItem('admin');
    setState((prevSt) => ({ admin }));
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
      <h1>Olá, {admin}</h1>
      <BiExit onClick={ () => {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        navigate('/login');
      }} />
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
