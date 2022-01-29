import React from "react";
import cl from "./myButton.module.css"

export default function MyButton({id, children,  onClick}){

   return(
      <button onClick={onClick} className={cl.button} id={id}>
      {children}
      </button>
   )
}