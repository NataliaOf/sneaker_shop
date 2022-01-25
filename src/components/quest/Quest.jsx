import React from "react";

export default function Quest(){

   return(

      <section className="quest">
      <div className="quest__wrapper">
         <div className="quest__title">Want First Dibs?</div>
         <p className="quest__text">
          Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
         </p>
    
         <form action="" className="quest__form">
            <input type="email" className="quest__input" placeholder="Enter Your Email Address"/>
            <button className="quest__btn">Sign Up</button>
            <p className="quest__massege">
             Note: You can opt-out at any time. See our Privacy Policy and Terms.
            </p>
         </form>
      </div>
    </section>
   )
}