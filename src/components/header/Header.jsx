import React from "react";
import MyButtonWhite from "../UI/MyButtonWhite";


import Nav from "./Nav";

export default function Header(){
  
   return (

      <header className="header">
   <div className="box__nav">
     <Nav/>
   </div>
 
      <div className="header__info">
   <h1 className="header__title">
      The Trail Runner SWT Is Here.
    </h1>
    <p className="header__text">
      Durable. Comfortable. Ready to get dirty.
    </p>
    <div className="header__btnbox">
    <MyButtonWhite children="Shop men"/>
    <MyButtonWhite children="Shop women"/>
     
    </div>
      </div>
 
 
</header>
   )
}