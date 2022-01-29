import React from 'react';



import './scss/main.scss';
import Footer from './components/footer/Footer';

import Modal from './components/modal/Modal';
import ModalQuestion from './components/modal/ModalQuestion';
import ModalBasket from './components/modal/ModalBasket';
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

const state = useSelector(state => state.viewModal);

  return (
    <>
   {state.modalAvatar && <Modal/>}
   {state.modalQuestion && <ModalQuestion/>}
   {state.modalBasket && <ModalBasket/>}

 

       <div className="wrapper">
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
        <Footer/>

   </div>
     
    </>
  );
}

export default App;
