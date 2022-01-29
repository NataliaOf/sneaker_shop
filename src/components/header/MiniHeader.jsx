import React from "react";
import Nav from "./Nav";
import baner from "../../assets/img/bg1.jpg"


export default function MiniHeader(){


   return(

      <header class="min-header">
   <div class="box__nav">
      <Nav/>
   </div>



   <div class="min-header__img">
      <img src={ baner} alt="shop"/>
   </div>
   <div class="min-header__info">
      <h1 class="min-header__title">Shop</h1>
      <p class="min-header__text">
         Welcome to shoe store
      </p>
   </div>

</header>
   )
}