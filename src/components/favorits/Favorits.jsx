import React from "react";

import favorit1  from "../../assets/img/favorit1.jpg";
import favorit2  from "../../assets/img/favorit2.jpg"
import favorit3  from "../../assets/img/favorit3.jpg"
import runner1  from "../../assets/img/runner1.png"
import runner2  from "../../assets/img/runner2.png"
import runner3  from "../../assets/img/runner3.png"
import FavoritItem from "./FavoritsInem";
import { useDispatch, useSelector } from 'react-redux';
import { setEveryday, setRunning, setTravel } from "../../redux/actions/favorit";

export default function Favorite () {
   const dispatch = useDispatch();

   const state = useSelector(state => state.favorit);

  

   function viewEveryday(){
      dispatch(setEveryday("everyday"))
   };

   function viewRunning(){
      dispatch(setRunning('running'))
   };

   function viewTravel(){
      dispatch(setTravel('travel'))
   }

   return (

      <section className="favorits">
      <div className="container">
         <h2 className="favorits__title">Our Favorites</h2>
         <div className="favorits__tab">
            <div className="tab">
               <button onClick={viewEveryday} className="tablinks" onclick="openCity(event, 'Everyday')">Everyday</button>
               <button onClick={viewRunning} className="tablinks" onclick="openCity(event, 'Running')">Running</button>
               <button onClick={viewTravel} className="tablinks" onclick="openCity(event, 'Travel')">Travel</button>
          </div>
             <hr/>

              {state.view=="everyday"? <FavoritItem src={favorit1}/>: ''}
              {state.view=="running"? <FavoritItem src={favorit2}/>: ''}
              {state.view=="travel"?  <FavoritItem src={favorit3}/>: ''}





         </div>
         <div className="runner">
            <div className="runner__box">
               <h3 className="runner__title">Wool Runner</h3>
            <hr/>
            <div className="runner__info">
               <img   className="ranner__img" src={runner1} alt="runner"/>
               
                <p className="runner__text">
                 Cozy Sneaker
                </p>
            </div>
            </div>
            <div className="runner__box">
               <h3 className="runner__title">Tree Runner</h3>
            <hr/>
            <div className="runner__info">
               <img   className="ranner__img" src={runner2} alt="runner"/>
                <p className="runner__text">
                  Light and Breezy Sneaker
                </p>
            </div>
            </div>
            <div className="runner__box">
               <h3 className="runner__title">Wool Runner Mizzle</h3>
            <hr/>
           <div className="runner__info">
            <img   className="ranner__img" src={runner3} alt="runner"/>
           
                
                <p className="runner__text">
                  Rain-Ready Sneaker
                </p>
            </div>
            </div>
         </div>
      </div>
   </section>

   )
}