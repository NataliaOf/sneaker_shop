import React from "react";
import cl from "./myButton.module.css"

export default function  MyButtonWhite({id, children, onClick}){

   return(
      <button onClick={onClick} className={cl.buttonWhite} id={id}>
      {children}
      </button>
   )
}