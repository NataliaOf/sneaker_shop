import React from "react";
import logo from '../../assets/img/svg/logo.svg';
import avatar from '../../assets/img/svg/avatar.svg';
import question from '../../assets/img/svg/question.svg';
import basket from '../../assets/img/svg/basket.svg'       
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
export default function Header(){

   return (

      <header className="header">
   <div className="box__nav">
   <nav className="nav">
      <ul className="menu">
         <li className="menu__list">
            <a href="catalog-men.html" className="menu__link men">Men</a>
         </li>
         <li className="menu__list">
           <a href="catalog-women.html" className="menu__link women">Women</a>
        </li>
        <li classNameName="menu__list">
           <a href="catalog-new.html" className="menu__link new">New Arrivals</a>
        </li>
        <li classNameName="menu__list">
         <a href="shop.html" className="menu__link new">All</a>
      </li>
        <li className="menu__list_mb">
           <a href="#" className="menu__link">Sustainability</a>
        </li>
        <li className="menu__list_mb">
           <a href="#" className="menu__link">Stores</a>
        </li>

      </ul>
      <div className="logo">
         <a href="index.html">
            <img src={logo} alt="logo"/>
          
         </a>
        
      </div>
     <div className="box__user">
        <ul className="user">
           <li className="user__list">
              <a href="#" className="user__link">Sustainability</a>
           </li>
           <li className="user__list">
             <a href="" className="user__link">Stores</a>
          </li>
        </ul>
        <div className="nav__btn">
        <FiUser/>
        <BsQuestionCircle/>
        <FiShoppingCart/>
   
        
          <span className="order__index"></span>
          <div className="burger__btn">
           <span className="burger"></span>
          </div>
        
        </div>
     </div>
   </nav>
        </div>
 
      <div className="header__info">
   <h1 className="header__title">
      The Trail Runner SWT Is Here.
    </h1>
    <p className="header__text">
      Durable. Comfortable. Ready to get dirty.
    </p>
    <div className="header__btnbox">
      <a href="#" className="header__btn">Shop men</a>
      <a href="#" className="header__btn">Shop women</a>
    </div>
      </div>
 
 
</header>
   )
}