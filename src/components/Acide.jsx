import React from "react";

export default function Acide(){

   return(
      <acide className="acide">
      <h3 className="prise__title">price <span className="prise__cost">50</span></h3>
      <input className="prise__input"type="range" min="30" max="100" value="50"/>
      
      <h3 className="size__title">size</h3>
      <div className="size__box">
      
      <label for="size">35
      <input type="checkbox" id="size"/></label>
      
      <label for="size1">36
      <input type="checkbox" id="size1"/></label>
      
      <label for="size2">37
      <input type="checkbox" id="size2"/></label>
      
      <label for="size3">38
      <input type="checkbox" id="size3"/></label>
      
      <label for="size4">39
      <input type="checkbox" id="size4"/></label>
      
      <label for="size5">40
      <input type="checkbox" id="size5"/></label>
      
      <label for="size6">41
      <input type="checkbox" id="size6"/></label>
      
      <label for="size7">42
      <input type="checkbox" id="size7"/></label>
      
      <label for="size8">43
      <input type="checkbox" id="size8"/></label>
      
      <label for="size9">44
      <input type="checkbox" id="size9"/></label>
    </div>
      
      <h3 className="gender__title">gender</h3>
      <div className="gender__box">
      
      <label className="gender__label" for="female">female
      <input className="gender__input" type="radio" name="gender" id="female"/></label>
      <label className="gender__label" for="male">male
      <input className="gender__input" type="radio" name="gender" id="male"/></label>
    </div>

       <h3 className="for__title">for in</h3>
       <div className="for__box">
       <label className="for__label" for="sport">sport
       <input className="for__input" type="checkbox" id="sport"/></label>
       
       <label  className="for__label" for="sity">sity
      <input className="for__input"  type="checkbox" id="sity"/></label>
      
      <label  className="for__label" for="travel">travel
      <input className="for__input"  type="checkbox" id="travel"/></label>
    </div>
      <button className="apply__btn">to apply</button>
   </acide>
   )
}