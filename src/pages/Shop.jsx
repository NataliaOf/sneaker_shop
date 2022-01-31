import React from "react";
import foto from '../assets/img/favorit1.jpg'
import Acide from "../components/Acide";
import MiniHeader from "../components/header/MiniHeader";

import Card from "../components/cards/Card";
import CardProduct from "../components/cards/CardProduct";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Shop(){
   const state = useSelector(state => state.product);
   // console.log(state.product);
   const producs = state.product;


   return(
         <>
     <MiniHeader/>
      <main className="main">
         

       
    
           <div className="search">
        <div className="crumbs">
           <Link to={"/"} className="crumb">Home/</Link>
           <Link to={"/shop"} className="crumb active ">shop/</Link>
         

        </div>
        <div className="search__in">
           <input type="search" className="search__input" placeholder="search"/>
           <div className="search__list">
            <ul>
             <li className="search__item"></li> 
            </ul>
         </div>
        </div>
       
        
     </div>

     <div className="wrap">
        <Acide/>


     <section className="catalog">

    
     <div className="cards">
     { producs.map(product => <Card  key={product.id} id={product.id} src={product.img} name={product.name} cost={ product.cost} appointment={product.appointment} availability={product.availability}/>)}
     </div>
    
    <CardProduct/>
     </section>


     </div>
    
    </main>
    </>
   )
}