import React from "react";
import Nav from "./Nav";
import baner from "../../assets/img/bg1.jpg"


export default function MiniHeader(){


   return(

      <header className="min-header">
   <div className="box__nav">
      <Nav/>
   </div>



   <div className="min-header__img">
      <img src={ baner} alt="shop"/>
   </div>
   <div className="min-header__info">
      <h1 className="min-header__title">Shop</h1>
      <p className="min-header__text">
         Welcome to shoe store
      </p>
   </div>

</header>
   )
}