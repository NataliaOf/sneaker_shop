import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/svg/logo.svg';

import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setAvatarModal, setBascketModal, setQuestModal, toggleBurgerModal  } from "../../redux/actions/modal";
import { setActive, setFilter } from "../../redux/actions/product";

export default function Nav(){

   const dispatch = useDispatch();
 

   const state = useSelector(state => state.viewModal);
   const state1 = useSelector(state => state.product);
   console.log(state1.addProduct.length)
   const meyuLinck = ['Men',' Women',' New Arrivals' ]  // 'Sustainability', 'Stores'


   function viewAvatar(){
      dispatch(setAvatarModal(state.modalAvatar= !state.modalAvatar))
   }
   function viewBasket(){
      dispatch(setBascketModal(state.modalBasket= !state.modalBasket))
   }
   function viewQuestion(){
      dispatch(setQuestModal(state.modalQuestion= !state.modalQuestion))
   }
   function toggleBurger(){
      dispatch(toggleBurgerModal( state.modalBurger =!state.modalBurger))
  
   }
   

   function addClassActiveAll(){
   
      dispatch( setActive(state1.active = null))
      dispatch(setFilter(state1.filter =false));
   }
     
    function addClassActive(i){
      dispatch( setActive(state1.active = i))
      dispatch(setFilter(state1.filter =false));
    }
  
   
//добавить класс active
   return(
      <nav className="nav">
          <div className="logo">
        <Link to="/"><img src={logo} alt="logo"/></Link>
      </div>

      <ul className= {state.modalBurger? "menu active" : "menu"} >
      <li className="menu__list">
      <Link to="/shop"   className={(state1.active=== null) ?  "menu__link active" :  "menu__link"} onClick={addClassActiveAll}>  
           ALL
      </Link>
      </li>
       { meyuLinck.map((item, i) => (
          <li className="menu__list "  key={item}>
           <Link to="/shop"  className={(state1.active === i) ?  "menu__link active" :  "menu__link"}  onClick={()=>addClassActive(i)}>
             {item}
           </Link>
           </li>

       ))}

        

      </ul>
      
     
     <div className="box__user">
     <ul className="user">
     <li className="user__list">
              <a href="tel:999999" className="user__link">tel:999999999</a>
           </li>
     </ul>

       
        <div className="nav__btn">
       <FiUser className="nav__button" onClick={viewAvatar}/>
        <BsQuestionCircle className="nav__button" onClick={viewQuestion}/>
        <FiShoppingCart className="nav__button" onClick={viewBasket}/> 
    
        
         {state1.addProduct.length !== 0 && <span className="order__index">{state1.addProduct.length}</span>} 
          <div className="burger__btn" onClick={toggleBurger}>
           <span  className= {state.modalBurger? "burger active" : "burger"}></span>
          </div>
        
        </div>
     </div>
   </nav>
   )
}