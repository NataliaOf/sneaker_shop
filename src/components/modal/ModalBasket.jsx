import React from "react";
import FormBasket from "../FormBasket";

export default function ModalBasket(){

   return(
     <div id="myModal3" className="modal">
      <div className="modal-content">
        <div className="modal-header">
           <span className="close">×</span>
            <h2>Your order</h2>
        </div>
        <div className="modal-body">
         <FormBasket/>
       </div>
    </div>

    </div> 
   )
}