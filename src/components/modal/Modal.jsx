import React, { useState } from "react";
import FormLogin from "../FormLogin";
import FormRegister from "../FormRegister";
import MyButton from "../UI/MyButton";


export default function Modal ({children}) {

   const [loginForm, setLoginForm] = useState(true);

   function viewRegisterForm(){
      console.log("false");
      setLoginForm(false)
   }
   function viewLoginForm(){
      setLoginForm(true)
   }

   return (
<>
         <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close">×</span>
              <MyButton onClick={viewRegisterForm}>log in</MyButton>
              <MyButton onClick={viewLoginForm}>register</MyButton>
            </div>
            <div className="modal-body">
               {loginForm ?  <FormLogin/> :  <FormRegister/>}
            
            </div>
             </div>
       </div>
 
          </>
   )
}