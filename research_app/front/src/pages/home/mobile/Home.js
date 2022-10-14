import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { renderCardOne, renderCardTwo, renderCardThree} from '../index';
import style from './Home.module.scss';
import { Context } from '../../../provider/Provider';
import { successMsg } from '../SuccessMessage';

Modal.setAppElement('#root');

const Home = () => {
  const { success, successMessage } = useContext(Context);

  const renderMobile = () => (
    <>
      <Modal
        isOpen={ success }
        onRequestClose={ successMessage }
        style={{
          content: {
            width: '80%',
            height: '250px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffcb09',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden'
          }
        }}
      >
        {successMsg(style, successMessage)}
      </Modal>
      <section className={ style.banner }>
        <h1 className={ style.logo }>WOL SPORTS</h1>
        <h1 className={ style.entry_text }>
          Brasília é seu clube esportivo!
        </h1>
        <p>Encontre pessoas, locais e equipamentos e participe de centenas de atividades ao ar livre</p>
      </section>
      <section className={ style.sect2 }>
        <h3>Estamos analisando o interesse das pessoas no projeto e entender a melhor forma de conectá-las</h3>
        <Link to="/user" className={ `button ${style.link}` }>Quero participar</Link>
      </section>
      <section className={ style.card_sect }>
        <h2>Viva o esporte como nunca antes</h2>
        <section className={ style.cards }>
          {renderCardOne(style)}
          {renderCardTwo(style)}
          {renderCardThree(style)}
        </section>
      </section>
      <section className={ style.footer }>
        <h2>Pratique quando e onde quiser</h2>
        <h2>Aqui o mais importante é se divertir!</h2>
      </section>
    </>
  )

  return (
    <main className={ style.main }>
      {renderMobile()}
    </main>
  )
}

export default Home;
