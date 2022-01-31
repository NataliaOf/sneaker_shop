import React from "react";
import foto from '../../assets/img/favorit1.jpg';
import{ RiCloseFill} from "react-icons/ri";

export default function CardProduct(){

   return(

      <div className="card-product">
      <div className="card-product__box">
       <div className="card-product__slider">
          <img src={ foto} alt="foto"/>
       </div>
       <div className="card-product__info">
          <h2  className="card-product__title">Name <span  className="card-product__close"><RiCloseFill/></span></h2>
          <div className="card-product__articl">Article: <span>44444</span></div>
          <div className="card-product__price">60 $</div>
         
          <p className="card-product__description">
             Lorem ipsum dolor sit
          </p>
          <button className="card__buy" data-id="0001">купить</button>
 
 
         
       </div>
    </div>
 
      </div>
   )
}