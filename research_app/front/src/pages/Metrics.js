import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BiExit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import FilterButtons from '../components/FilterButtons';
import Background from '../components/Background';
import style from '../styles/Charts.module.css';
import { url } from '../provider/Provider';

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
    getInfo('activity', 'atividade');
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
    const response = await fetch(`${url}/metrics/${cat}`, obj);
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
    <section className={ style.main }>
      <section className={ style.graph_sect }>
        <section className={ style.header }>
          <h1>Olá, {admin}</h1>
          <BiExit
            className={ style.log_out }
            onClick={ () => {
              localStorage.removeItem('token');
              localStorage.removeItem('admin');
              navigate('/');
            }}
          />
        </section>
        <FilterButtons handleClick={ getInfo } />
        {!loading && <Bar options={ {
            responsive: true,
            plugins: {
              title: { display: true, text: title, color: '#443069', font: {
                size: 20,
                family: 'Montserrat Alternates',
                weight: 600
              } },
              tooltip: {
                titleFont: {
                  size: '15px',
                  family: 'Montserrat Alternates',
                },
              },
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                ticks: {
                  color: '#443069',
                  font: {
                    size: 15,
                    family: 'Montserrat Alternates',
                    weight: 600,
                  }
                }
              },
              y: {
                ticks: {
                  color: '#443069',
                  font: {
                    size: 15,
                    family: 'Montserrat Alternates',
                    weight: 600,
                  }
                }
              }
            }
          } } data={ {
            labels: arr?.map(({ value }) => value),
            datasets: [{
              label: 'Pessoas',
              data: arr?.map(({ qnt }) => qnt),
              backgroundColor: ['#443069', '#7251ae', '#885fc9', '#9263cb', '#a178d6', '#b489e0', '#c0a0e9', '#d3b5f3', '#e3cdff', '#f1e1fe', '#fbf3fd'],
              borderRadius: 10,
              maxBarThickness: 50,
              borderWidth: 0.5,
              borderColor: '#443069'
            }],
        } } />}
      </section>
      <Background />
    </section>
  )
}

export default Metrics;
