import React, { useEffect, useState } from "react";
import foto from '../assets/img/favorit1.jpg'
import Acide from "../components/Acide";
import MiniHeader from "../components/header/MiniHeader";

import Card from "../components/cards/Card";
import CardProduct from "../components/cards/CardProduct";
import { useSelector,useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { RiEyeCloseFill } from "react-icons/ri";
import { setFilter, setCard } from "../redux/actions/product";

export default function Shop(){
   const dispatch = useDispatch();
   const state = useSelector(state => state.product);
   const [value, setValue] = useState('')
 
   const producs = state.product;
  
   let  cards = [];
   if(state.active === null)  cards =  producs;
    
   if(state.active === 0)  cards  =  producs.filter(product=> product.gender==='male');
    
   if(state.active === 1)  cards  =  producs.filter(product=> product.gender==="female");
  
   if(state.active === 2)  cards  =  producs.filter(product=> product.collection==="new arrivals");
 
   const filterProduct =  producs.filter(productName => {
         return productName.name.toLowerCase().includes(value.toLowerCase())
      })

   const SeorchArt = producs.filter(art =>{
      return art.id.includes(value)
   })

const addProduct=(art)=>{
   dispatch(setFilter(state.filter =true));
   const card = producs.filter(card=>{
      return card.id.includes(art)
      })
    
      dispatch(setCard(state.card = card));
     setValue('')
  
}


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
           <input type="search" className="search__input"
            onChange={(e)=> setValue(e.target.value)} 
            value={value}
            placeholder="search"/>


           <div className="search__list">
            <ul>
             

            {value!=='' && filterProduct.map(product=> <li key={product.id}className="search__item" onClick={()=>addProduct(product.id)}> {product.name}</li>)}
          
            {value !== '' && SeorchArt.map(product=> <li key={product.id}className="search__item"  onClick={()=>addProduct(product.id)}> {product.id}: {product.name}</li>)}
         
         
             
            </ul>
         </div>
        </div>
       
        
     </div>

     <div className="wrap">
        <Acide/>


     <section className="catalog">

    
     <div className="cards">

             {state.filter
               ? state.card.map(product => <Card  key={product.id} id={product.id} src={product.img} name={product.name} cost={ product.cost} appointment={product.appointment} availability={product.availability}/>)
               :cards.map(product => <Card  key={product.id} id={product.id} src={product.img} name={product.name} cost={ product.cost} appointment={product.appointment} availability={product.availability}/>)
             }
      
    
     </div>

     {state.viewCadProduct && <CardProduct /> }
    
    
     </section>


     </div>
    
    </main>
    </>
   )
}