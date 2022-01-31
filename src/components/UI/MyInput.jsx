import React from "react";

import cl from "./myInput.module.css"


export default function MyInput({ id, type, placeholder, text}){

   return(

      <>
      <label htmlFor={id}>{text}</label>
      <input className={cl.input}  id={id} type={type} placeholder={placeholder}/>
      </>
   )
}