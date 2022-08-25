import React, { useState } from 'react';
import Modal from 'react-modal';
import Background from '../components/Background';
import Header from '../components/Header';
import Login from './Login';
import style from '../styles/Home.module.css';

Modal.setAppElement('#root');

const Home = () => {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);

  const close = () => setModal(false);

  return (
    <main className={ style.main }>
      <Header openModal={ open } />
      <h1>WOL Sports</h1>
      <Modal
        isOpen={ modal }
        onRequestClose={ close }
        style={{
          content: {
            width: '500px',
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
      <Background />
    </main>
  )
}

export default Home;
