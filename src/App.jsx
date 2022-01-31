import './App.scss';

import React, { Component, useState } from 'react';


import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Swiper from './components/swiper/swiper';

import Modal from './components/Modal/Modal';
import useModal from './components/Modal/useModal';

import CreateUser from "./components/user-component/create-user";

const App = () => {
  const {isShowing, toggle} = useModal();
  return (
    <BrowserRouter>
      <div className='swiper-bg'>
            <h1 className='swiper-title'>Models</h1>
            <Header/>
            <Swiper/>
      </div>
      
      <CreateUser />
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
