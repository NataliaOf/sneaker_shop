import React from "react";

import favorit1  from "../../assets/img/favorit1.jpg";
import favorit2  from "../../assets/img/favorit2.jpg"
import favorit3  from "../../assets/img/favorit3.jpg"
import runner1  from "../../assets/img/runner1.png"
import runner2  from "../../assets/img/runner2.png"
import runner3  from "../../assets/img/runner3.png"


export default function Favorite () {

   return (

      <section className="favorits">
      <div className="container">
         <h2 className="favorits__title">Our Favorites</h2>
         <div className="favorits__tab">
            <div className="tab">
               <button className="tablinks" onclick="openCity(event, 'Everyday')">Everyday</button>
               <button className="tablinks" onclick="openCity(event, 'Running')">Running</button>
               <button className="tablinks" onclick="openCity(event, 'Travel')">Travel</button>
             </div>
             <hr/>
             <div id="Everyday" className="tabcontent view">
              <div className="favorit__box">
                 <div className="favorit__item">
                    <div className="favorit__foto">
                       <img src={favorit1} alt="favorit"/>
                    </div>
                    <div className="favorit__btn">
                     <a href="#" className="header__btn">Shop men</a>
                     <a href="#" className="header__btn">Shop women</a>
                    </div>
                 </div>
                 <div className="favorit__item">
                  <div className="favorit__foto">
                     <img src={favorit1} alt="favorit"/>
                  </div>
                  <div className="favorit__btn">
                   <a href="#" className="header__btn">Shop men</a>
                   <a href="#" className="header__btn">Shop women</a>
                  </div>
               </div>
               <div className="favorit__item">
                  <div className="favorit__foto">
                     <img src={favorit1} alt="favorit"/>
                  </div>
                  <div className="favorit__btn">
                   <a href="#" className="header__btn">Shop men</a>
                   <a href="#" className="header__btn">Shop women</a>
                  </div>
               </div>
              </div>
             </div>
             
             <div id="Running" className="tabcontent">
               <div className="favorit__box">
                  <div className="favorit__item">
                     <div className="favorit__foto">
                        <img src={favorit2} alt="favorit"/>
                     </div>
                     <div className="favorit__btn">
                      <a href="#" className="header__btn">Shop men</a>
                      <a href="#" className="header__btn">Shop women</a>
                     </div>
                  </div>
                  <div className="favorit__item">
                   <div className="favorit__foto">
                      <img src={favorit2} alt="favorit"/>
                   </div>
                   <div className="favorit__btn">
                    <a href="#" className="header__btn">Shop men</a>
                    <a href="#" className="header__btn">Shop women</a>
                   </div>
                </div>
                <div className="favorit__item">
                   <div className="favorit__foto">
                      <img src={favorit2} alt="favorit"/>
                   </div>
                   <div className="favorit__btn">
                    <a href="#" className="header__btn">Shop men</a>
                    <a href="#" className="header__btn">Shop women</a>
                   </div>
                </div>
               
               </div>
             </div>
             
             <div id="Travel" className="tabcontent">
               <div className="favorit__box">
                  <div className="favorit__item">
                     <div className="favorit__foto">
                        <img src={favorit3} alt="favorit"/>
                     </div>
                     <div className="favorit__btn">
                      <a href="#" className="header__btn">Shop men</a>
                      <a href="#" className="header__btn">Shop women</a>
                     </div>
                  </div>
                  <div className="favorit__item">
                   <div className="favorit__foto">
                      <img src={favorit3} alt="favorit"/>
                   </div>
                   <div className="favorit__btn">
                    <a href="#" className="header__btn">Shop men</a>
                    <a href="#" className="header__btn">Shop women</a>
                   </div>
                </div>
                <div className="favorit__item">
                   <div className="favorit__foto">
                      <img src={favorit3} alt="favorit"/>
                   </div>
                   <div className="favorit__btn">
                    <a href="#" className="header__btn">Shop men</a>
                    <a href="#" className="header__btn">Shop women</a>
                   </div>
                </div>
               </div>
             </div>
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