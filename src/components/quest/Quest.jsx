import React from "react";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";

export default function Quest(){

   return(

      <section className="quest">
      <div className="quest__wrapper">
         <div className="quest__title">Want First Dibs?</div>
         <p className="quest__text">
          Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
         </p>
    
         <form action="" className="quest__form">
            <MyInput id="quest__input" type="email" placeholder="Enter Your Email Address" text="Your Email" />
         
            <MyButton>Sign Up</MyButton>
            <p className="quest__massege">
             Note: You can opt-out at any time. See our Privacy Policy and Terms.
            </p>
         </form>
      </div>
    </section>
   )
}