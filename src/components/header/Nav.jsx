import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/svg/logo.svg';

import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setAvatarModal, setBascketModal, setQuestModal  } from "../../redux/actions/modal";

export default function Nav(){

   const dispatch = useDispatch();
 

   const state = useSelector(state => state.viewModal);
   const meyuLinck = ['Men',' Women',' New Arrivals', 'Sustainability', 'Stores' ]
console.log(meyuLinck);

   function viewAvatar(){
      dispatch(setAvatarModal(state.modalAvatar= !state.modalAvatar))
   }
   function viewBasket(){
      dispatch(setBascketModal(state.modalBasket= !state.modalBasket))
   }
   function viewQuestion(){
      dispatch(setQuestModal(state.modalQuestion= !state.modalQuestion))
   }

//добавить класс active
   return(
      <nav className="nav">
          <div className="logo">
        <Link to="/"><img src={logo} alt="logo"/></Link>
      </div>

      <ul className="menu">
      <li className="menu__list">
      <Link to="/shop"  className="menu__link">  
           ALL
      </Link>
      </li>
       { meyuLinck.map(item => (
          <li className="menu__list"  key={item}>
           <Link to="/shop"  className="menu__link">
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
       <FiUser onClick={viewAvatar}/>
        <BsQuestionCircle onClick={viewQuestion}/>
        <FiShoppingCart onClick={viewBasket}/> 
    
        
          <span className="order__index"></span>
          <div className="burger__btn">
           <span className="burger"></span>
          </div>
        
        </div>
     </div>
   </nav>
   )
}