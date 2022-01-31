import React from "react";

export default function Card({id, src, name, cost, appointment,availability}){

 
   return(
      <div className="card">
      <div className="card__foto">
         <img src={src}/>
      </div>
      <div className="card__info">
       <h3 className="card__title">{name} <span className="card__artic"> ART {id}</span></h3>
       <div className="card__prise" >{cost} $</div>
       <p className="card__appoint">{appointment}</p>
       <div className="card__stock">{availability}</div>
      </div>
      <div className="card__btns">
         <button className="card__buy" >купить</button>
         <a className="card__look">посмотреть</a>
      </div>
   </div>
   )
}

