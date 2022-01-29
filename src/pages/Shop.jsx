import React from "react";
import foto from '../assets/img/favorit1.jpg'
import Acide from "../components/Acide";
import MiniHeader from "../components/header/MiniHeader";

export default function Shop(){

   return(
         <>
     <MiniHeader/>
      <main className="main">
         

       
    
           <div class="search">
        <div class="crumbs">
           <a href="index.html" class="crumb">home/</a>
           <a href="shop.html" class="crumb active ">shop/</a>
           {/* <a href="catalog-men.html" class="crumb" > men/</a> */}
           {/* <a href="catalog-women.html" class="crumb" > women/ </a> */}
           {/* <a href="catalog-new.html" class="crumb" >new/ </a> */}

        </div>
        <div class="search__in">
           <input type="search" class="search__input" placeholder="search"/>
           <div class="search__list">
            <ul>
             <li class="search__item"></li> 
            </ul>
         </div>
        </div>
       
        
     </div>

     <div class="wrap">
        <Acide/>
     {/* acide */}

     <section class="catalog">
     <div class="card-product">
     <div class="card-product__box">
      <div class="card-product__slider">
         <img src={ foto} alt="foto"/>
      </div>
      <div class="card-product__info">
         <h2  class="card-product__title">Name <span  class="card-product__close">&#10060;</span></h2>
         <div class="card-product__articl">Article: <span>44444</span></div>
         <div class="card-product__price">60 $</div>
         <p class="card__appoint">for the city</p>
         <div class="card__stock">In stock</div>
         {/* <p class="card-product__description">
            Lorem ipsum dolor sit
         </p> */}

<div class="card__btns">
      <button class="card__buy" data-id="0001">купить</button>
      <a class="card__look">посмотреть</a>
   </div>

        
      </div>
   </div>

     </div>
     </section>


     </div>
    
    </main>
    </>
   )
}