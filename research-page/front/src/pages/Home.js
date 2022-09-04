import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './Login';
import style from '../styles/Home.module.css';
import mStyle from '../styles/Home.mobile.module.css';
import { Context } from '../provider/Provider';
import sq_poster from '../images/volei_sq.png';
import poster from '../images/group-of-diverse-athletes-sitting-together.jpg';
import user from '../images/basquete_sol.png';
import worker from '../images/worker.png';
import group from '../images/group.png';

Modal.setAppElement('#root');

const Home = () => {
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState('user');
  const { isMobile, districts } = useContext(Context);

  const open = () => setModal(true);

  const close = () => setModal(false);

  const renderBrowser = () => (
    <>
      <Modal
        isOpen={ modal }
        onRequestClose={ close }
        style={{
          content: {
            width: '50%',
            height: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#e2dfe1',
            borderRadius: '12px',
          }
        }}
      >
        <Login />
      </Modal>
      <h1>WOL Sports</h1>
      <section className={ style.banner }>
        <img src={ poster } alt="Pessoas segurando materiais esportivos" />
        <p>
          <select name="district">
            {districts.map(({ id, name }) => (
              <option key={ id } value={ id }>{name}</option>
            ))}
          </select>
          é sua academia de esportes!
        </p>
        <p>Queremos conectar pessoas interessadas em esportes para que possam jogar</p>
      </section>
      <p>Estamos analisando o interesse das pessoas no projeto para entender a melhor forma de conectá-las!</p>
      <section className={ style.card_sect }>
        <section className={ style.card }>
          <img src={ user } alt="Pessoa jogando basquete no por do sol" />
          <h2>Praticantes</h2>
          <p>Quero achar um esporte diferente e mais interessante para praticar</p>
          <Link to="/user">Tenho interesse</Link>
        </section>
        <section className={ style.card }>
          <img src={ worker } alt="Profissional fazendo alongamento com outras pessoas ao ar livre" />
          <h2>Profissionais</h2>
          <p>Sou profissional do esporte e quero aumentar meu alcance.</p>
          <Link to="/worker">Tenho interesse</Link>
        </section>
        <section className={ style.card }>
          <img src={ group } alt="Grupo de pessoas se cumprimentando em uma partida de vôlei" />
          <h2>Grupo</h2>
          <p>Participo de um grupo de esportes</p>
          <Link to="/group">Tenho interesse</Link>
        </section>
      </section>
      <button className={ style.metrics } type="button" onClick={ open }>Métricas</button>
    </>
  )

  const renderUser = () => (
    <section className={ mStyle.card }>
      <img src={ user } alt="Pessoa jogando basquete no por do sol" />
      <h2>Praticantes</h2>
      <p>Quero achar um esporte diferente e mais interessante para praticar</p>
      <Link to="/user">Tenho interesse</Link>
    </section>
  )
  const renderWorker = () => (
    <section className={ mStyle.card }>
      <img src={ worker } alt="Profissional fazendo alongamento com outras pessoas ao ar livre" />
      <h2>Profissionais</h2>
      <p>Sou profissional do esporte e quero aumentar meu alcance.</p>
      <Link to="/worker">Tenho interesse</Link>
    </section>
  )
  const renderGroup = () => (
    <section className={ mStyle.card }>
      <img src={ group } alt="Grupo de pessoas se cumprimentando em uma partida de vôlei" />
      <h2>Grupo</h2>
      <p>Participo de um grupo de esportes</p>
      <Link to="/group">Tenho interesse</Link>
    </section>
  )

  const renderMobile = () => (
    <>
      <section className={ mStyle.banner_mobile }>
        <h1>WOL Sports</h1>
        <img src={ sq_poster } alt="Quatro pesoas com uma bola de volei e uma rede de volei" />
        <p>
          <select name="district">
            {districts.map(({ id, name }) => (
              <option key={ id } value={ id }>{name}</option>
            ))}
          </select>
          é sua academia de esportes!
        </p>
      </section>
      <p>Queremos conectar pessoas interessadas em esportes para que possam jogar</p>
      <section className={ mStyle.card_sect }>
        <section className={ style.cat_btn_sect }>
          <button
            className={ card === 'user' ? mStyle.btn_active : mStyle.cat_btn }
            onClick={ () => setCard('user') }
          >
            Praticante
          </button>
          <button
            className={ card === 'worker' ? mStyle.btn_active : mStyle.cat_btn }
            onClick={ () => setCard('worker') }
          >
            Profissional
          </button>
          <button
            className={ card === 'group' ? mStyle.btn_active : mStyle.cat_btn }
            onClick={ () => setCard('group') }
          >
            Grupo
          </button>
        </section>
        {card === 'user' && renderUser()}
        {card === 'worker' && renderWorker()}
        {card === 'group' && renderGroup()}
      </section>
      <p>Estamos analisando o interesse das pessoas no projeto para entender a melhor forma de conectá-las!</p>
    </>
  )

  return (
    <main className={ isMobile ? mStyle.main : style.main }>
      {isMobile ? renderMobile() : renderBrowser()}
    </main>
  )
}

export default Home;
