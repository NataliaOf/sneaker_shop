import React from "react";

import cl from "./myInput.module.css"


export default function MyTextarea({ id,  placeholder, text}){

   return(

      <>
      <label for={id}>{text}</label>
      <textarea id={id} className={cl.textarea} name="message" placeholder={ placeholder} ></textarea>
      </>
   )
}


