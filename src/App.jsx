import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Swiper from './components/swiper/swiper';


function App() {
  return (
    <BrowserRouter>
      <div className='swiper-bg'>
            <h1 className='swiper-title'>Models</h1>
            <Header/>
            <Swiper/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
