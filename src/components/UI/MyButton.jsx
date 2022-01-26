import React from "react";
import cl from "./myButton.module.css"

export default function MyButton({id, children}){

   return(
      <button className={cl.button} id={id}>
      {children}
      </button>
   )
}