import React, { useState, useRef } from "react";

import FormQuestion from "../FormQuestion";
import{ RiCloseFill} from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import {setQuestModal } from "../../redux/actions/modal";



export default function ModalQuestion () {

   const dispatch = useDispatch();
   const state = useSelector(state => state.viewModal);
   const closeQuest = useRef();
   const bodyQuest = useRef();

   function closeQuestion(e){
      if(e.target !==closeQuest.current){
         dispatch(setQuestModal(state.modalQuestion= !state.modalQuestion))
      }
      
   }

   function closeQuestionBody(e){
      if(e.target ===bodyQuest.current){
         dispatch(setQuestModal(state.modalQuestion= !state.modalQuestion))
      }
      
   }

   return (
<>
         <div id="myModal2" className="modal" ref={bodyQuest} onClick={closeQuestionBody}>
          <div className="modal-content">
            <div className="modal-header">
              <span className="close">
                 <RiCloseFill onClick={closeQuestion} ref={closeQuest}/>
              </span>
              <h2>Ask a Question</h2>
            </div>
            <div className="modal-body">
           <FormQuestion/>
            
            </div>
             </div>
       </div>
 
          </>
   )
}

