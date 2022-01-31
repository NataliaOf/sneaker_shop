import React, { useEffect } from 'react';



import './scss/main.scss';
import Footer from './components/footer/Footer';

import Modal from './components/modal/Modal';
import ModalQuestion from './components/modal/ModalQuestion';
import ModalBasket from './components/modal/ModalBasket';
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './redux/actions/product';

import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

const state = useSelector(state => state.viewModal);

const dispatch = useDispatch();

useEffect(()=>{
   fetch('http://localhost:3000/dp.json')
   .then(response=>response.json())
   // .then(json => console.log(json))
   .then(json=> dispatch(setProduct(json.product)))
   
   // .then(dispatch(setProduct(json)))
   

}, [])

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
