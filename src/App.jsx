import './App.scss';

import React, { Component } from 'react';


import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Swiper from './components/swiper/swiper';

import CreateUser from "./components/user-component/create-user";

function App() {
  return (
    <BrowserRouter>
      <div className='swiper-bg'>
            <h1 className='swiper-title'>Models</h1>
            <Header/>
            <Swiper/>
      </div>
      
              <CreateUser />
          
            
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
