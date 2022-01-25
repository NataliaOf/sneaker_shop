import React from "react";

export default function Modal () {

   return (
<>
         <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close">×</span>
              <h2 className="open-log">log in</h2>
            </div>
            <div className="modal-body">
              <form action="" className="modal-register">
                 <span className="error__nik"></span>
                 <input className="modal-register__nickname" type="text" placeholder="nikname"/>
                 <span className="error__pass"></span>
                 <input className="modal-register__password" type="password" placeholder="password"/>
                 <button className="modal-register__btn">send</button>
              </form>
            </div>
            <div className="modal-footer">
              <h2 className="open-reg">or register</h2>
             
        </div>
          <form action="" className="modal-registe2">
           <span className="error__name"></span>
           <input className="modal-register__name" type="text" placeholder="name"/>
           <span className="error__email"></span>
           <input className="modal-register__email" type="email" placeholder="email"/>
           <span className="error__nik"></span>
           <input className="modal-register__nickname" type="text" placeholder="nikname"/>
           <span className="error__pass"></span>
           <input className="modal-register__password" type="password" placeholder="password"/>
           <span className="error__pass2"></span>
           <input className="modal-register__passrepeed" type="password" placeholder="password"/>
           <button className="modal-register__btn2">send</button>
         </form>
       </div>
 
           </div>
 
       <div id="myModal2" className="modal">

         <div className="modal-content">
            <div className="modal-header">
             <span className="close">×</span>
             <h2>Ask a Question</h2>
           </div>
            <div className="modal-body">
               <form action="" className="question">
                  <span className="error__nik2"></span>
                  <input className="question__name" type="text" placeholder="Your name"/>
                  <span className="error__message"></span>
                 <textarea className="question__text" name="message" placeholder="Your question" ></textarea>
                  <button className="question__btn">send</button>
               </form>
           </div>
        </div>
 
       </div>
 
          <div id="myModal3" className="modal">
            <div className="modal-content">
              <div className="modal-header">
                 <span className="close">×</span>
                  <h2>Your order</h2>
              </div>
              <div className="modal-body">
                <form  className="order">
                  <input type="text" className="order__name-us" placeholder="Your name"/>
                    <input type="tel" className="order__phone" placeholder="Your phone"/>
                 <div className="order__box">
        
                 </div>
                  <div className="order__box-btn">
                    <input type="text" className="order__sum"/>
                     <button className="order__btn" type='submit'>sent</button>
                  </div>
       
                </form>
             </div>
          </div>
 
          </div>
 
          </>
   )
}