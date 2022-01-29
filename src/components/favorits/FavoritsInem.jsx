import React from "react";


import MyButtonWhite from "../UI/MyButtonWhite";


export default function FavoritItem({src}){

   return(

      <div id="Everyday" className="tabcontent view ">
      <div className="favorit__box">
         <div className="favorit__item">
            <div className="favorit__foto">
               <img src={src} alt="favorit"/>
            </div>
            <div className="favorit__btn">
            <MyButtonWhite children="Shop men"/>
            <MyButtonWhite children="Shop women"/>
            </div>
         </div>
         <div className="favorit__item">
          <div className="favorit__foto">
             <img src={src} alt="favorit"/>
          </div>
          <div className="favorit__btn">
          <MyButtonWhite children="Shop men"/>
            <MyButtonWhite children="Shop women"/>
          </div>
       </div>
       <div className="favorit__item">
          <div className="favorit__foto">
             <img src={src} alt="favorit"/>
          </div>
          <div className="favorit__btn">
          <MyButtonWhite children="Shop men"/>
            <MyButtonWhite children="Shop women"/>
          </div>
       </div>
      </div>
     </div>
   )
}