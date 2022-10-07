import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../../login/Login';
import style from './Home.module.scss';
import { Context } from '../../../provider/Provider';

Modal.setAppElement('#root');

const Home = () => {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);

  const close = () => setModal(false);

  const renderCardOne = () => (
    <section className={ style.card }>
      <h4>Pratique diferentes tipos de esportes</h4>
      <p>Nada é mais entediante do que entrar em uma academia e fazer o mesmo treino dia sim dia não. No Wol Sports você encontra locais para a prática de mais de 20 modalidades diferentes com a melhor vista da cidade: o céu de Brasília.</p>
    </section>
  )
  const renderCardTwo = () => (
    <section className={ style.card }>
      <h4>Descubra novos lugares</h4>
      <p>Você gosta de jogar tênis mas não faz ideia de onde encontrar uma quadra adequada para a prática do esporte? A nossa plataforma reúne mais de 100 espaços catalogados com localização precisa, indicações de modalidades que podem ser praticadas no local e avaliação das condições da quadra com fotos e comentários de usuários. Tudo isso para que você descubra a quadra esportiva mais próxima, de forma rápida e assertiva</p>
    </section>
  )
  const renderCardThree = () => (
    <section className={ style.card }>
      <h4>Conheça novas pessoas</h4>
      <p>Se marcar um bar com os amigos já envolve uma tarefa árdua para conciliar agendas, imagine praticar esportes. Se a vida adulta não permite mais reunir aqueles amigos para jogar uma pelada, conheça novas pessoas! A nossa plataforma agrupa pessoas com interesses em comum para formar novos times e também te auxilia a encontrar grupos já estabelecidos que você possa vir a fazer parte.</p>
    </section>
  )

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
            backgroundColor: '#ffcb09',
            borderRadius: '12px',
          }
        }}
      >
        <Login />
      </Modal>
      <section className={ style.banner }>
        <h1 className={ style.logo } onClick={ open }>WOL SPORTS</h1>
        <h1 className={ style.entry_text }>
          Brasília é seu clube esportivo!
        </h1>
        <p>Encontre pessoas, locais e equipamentos e participe de centenas de atividades ao ar livre</p>
      </section>
      <section className={ style.sect2 }>
        <h3>Estamos analisando o interese das pessoas no projeto e entender a melhor forma de conectá-las</h3>
        <Link to="/user" className={ `button ${style.link}`}>Quero participar</Link>
      </section>
      <section className={ style.card_sect }>
        <h2>Viva o esporte como nunca antes</h2>
        <section className={ style.cards }>
          {renderCardOne()}
          {renderCardTwo()}
          {renderCardThree()}
        </section>
      </section>
      <section className={ style.footer }>
        <h2>Pratique quando e onde quiser</h2>
        <h2>Aqui, o mais importante é se divertir</h2>
      </section>
    </>
  )

  return (
    <main className={ style.main }>
      {renderBrowser()}
    </main>
  )
}

export default Home;
