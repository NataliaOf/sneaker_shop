import React, { useState, useRef } from "react";
import FormLogin from "../FormLogin";
import FormRegister from "../FormRegister";
import MyButton from "../UI/MyButton";
import{ RiCloseFill} from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { setAvatarModal } from "../../redux/actions/modal";


export default function Modal ({children}) {
   const dispatch = useDispatch();
   const state = useSelector(state => state.viewModal);

   const [loginForm, setLoginForm] = useState(true);

   const modal = useRef();
   const close =useRef();

   function viewRegisterForm(){
   
      setLoginForm(false)
   }
   function viewLoginForm(){
      setLoginForm(true)
   }

   function clouseAvatar(e){
      if(e.target !== close.current){
         dispatch(setAvatarModal(state.modalAvatar= !state.modalAvatar))
      }
     
   }

   function clouseAvatarBody(e){
      if(e.target === modal.current) {
         dispatch(setAvatarModal(state.modalAvatar= !state.modalAvatar))
      }
     
   }

   return ( 
<>
         <div id="myModal" className="modal"ref={modal} onClick={clouseAvatarBody} >
          <div className="modal-content" >
            <div className="modal-header">
              <span className="close">
                 <RiCloseFill onClick= {clouseAvatar}/>
              </span>
              <MyButton onClick={viewRegisterForm}>log in</MyButton>
              <MyButton onClick={viewLoginForm}>register</MyButton>
            </div>
            <div className="modal-body">
               {loginForm ?  <FormRegister/> :  <FormLogin/>}
            
            </div>
             </div>
       </div>
 
          </>
   )
}