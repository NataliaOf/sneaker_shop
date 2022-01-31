import React,{useRef} from "react";
import FormBasket from "../FormBasket";

import{ RiCloseFill} from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import {setBascketModal } from "../../redux/actions/modal";


export default function ModalBasket(){

   const dispatch = useDispatch();
   const state = useSelector(state => state.viewModal);

   const closeBasket = useRef();
   const closeBasketBody = useRef();

   function closeModalBasket(e){
      if(e.target !== closeBasket.current ){
         dispatch(setBascketModal(state.modalBasket= !state.modalBasket))
      }
   }
   function closeModalBasketBody(e){
      if(e.target === closeBasketBody.current ){
         dispatch(setBascketModal(state.modalBasket= !state.modalBasket))
      }
   }

   return(
     <div id="myModal3" className="modal" ref={closeBasketBody} onClick={closeModalBasketBody}>
      <div className="modal-content">
        <div className="modal-header">
           <span className="close">
              <RiCloseFill ref={closeBasket} onClick={closeModalBasket}/>
           </span>
            <h2>Your order</h2>
        </div>
        <div className="modal-body">
         <FormBasket/>
       </div>
    </div>

    </div> 
   )
}