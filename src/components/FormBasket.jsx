import React from "react";

import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";
import MyTextarea from "./UI/MyTextarea";
// import '../scss/main.scss';


export default function FormBasket(){

   return(

      <form  className="order">
           <MyInput  id="order__name-us" type="text" placeholder="Your name" text="Your name"/>
           <MyInput  id="order__phone" type="tel" placeholder="Your phone" text="Your phone"/>
    
     <div className="order__box">

     </div>
      <div className="order__box-btn">
      <MyInput  id="order__sum" type="text" placeholder="00" text="Order sum"/>
      
        <MyButton id="order__btn" >купить</MyButton>
        
      </div>

    </form>
   )
}