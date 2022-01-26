import React from "react";

import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";
import MyTextarea from "./UI/MyTextarea";
import '../scss/main.scss';

export default function FormQuestion(){

   return(
      <form action="" className="question form">
         <MyInput  id="question__name" type="text" placeholder="name" text="Your name"/>
      
     <MyTextarea  id="queat"  placeholder="Ask a Question" text="Question"/>
     <MyButton id="send" >send</MyButton>
     
   </form>
   )
}