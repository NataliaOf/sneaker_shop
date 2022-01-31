import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/svg/logo.svg';

import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setAvatarModal, setBascketModal, setQuestModal, toggleBurgerModal  } from "../../redux/actions/modal";

export default function Nav(){

   const dispatch = useDispatch();
 

   const state = useSelector(state => state.viewModal);
   const meyuLinck = ['Men',' Women',' New Arrivals', 'Sustainability', 'Stores' ]
// console.log( state);

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
   const [addActive, setAddActive] = useState(null);

   function addClassActiveAll(){
      setAddActive(null);
     
   }
  
    function addClassActive(i){
      setAddActive(i);
    }
  
   
//добавить класс active
   return(
      <nav className="nav">
          <div className="logo">
        <Link to="/"><img src={logo} alt="logo"/></Link>
      </div>

      <ul className= {state.modalBurger? "menu active" : "menu"} >
      <li className="menu__list">
      <Link to="/shop"   className={(addActive=== null) ?  "menu__link active" :  "menu__link"} onClick={addClassActiveAll}>  
           ALL
      </Link>
      </li>
       { meyuLinck.map((item, i) => (
          <li className="menu__list "  key={item}>
           <Link to="/shop"  className={(addActive=== i) ?  "menu__link active" :  "menu__link"}  onClick={()=>addClassActive(i)}>
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
    
        
          <span className="order__index"></span>
          <div className="burger__btn" onClick={toggleBurger}>
           <span  className= {state.modalBurger? "burger active" : "burger"}></span>
          </div>
        
        </div>
     </div>
   </nav>
   )
}