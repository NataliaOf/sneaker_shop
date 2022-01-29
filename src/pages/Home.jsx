import React from "react";
import Favorite from "../components/favorits/Favorits";
import Header from "../components/header/Header";
import Quest from "../components/quest/Quest";
import SliderShop from "../components/slaiderShop/SliderShop";
import Arives from "../components/arives/Arives";
import NewsBuisnes from "../components/news/NeusBusnes";


export default function Home(){

   return(
      <>
      <Header/>
      <main className="main">
 <Favorite/>

      <div className="bg__step"></div>
   <SliderShop/>
   
   <div className="bg__tree"></div>
   <Arives/>
   
      <div className="bg__fon"></div>
   
   
   <NewsBuisnes/>
   
   
   
    <Quest/>
        
   </main>
   </>
   )
}