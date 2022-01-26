import React from "react";
import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";

export default function FormLogin(){

   return(

      <form action=""className="modal-register" >
        <MyInput  id="nickname" type="text" placeholder="nikname" text="введите никнейм"/>
        <MyInput   id="psOpen" type="password" placeholder="password" text="введите password"/>
        <MyButton id="ddd" >add</MyButton>
     </form>
   )
}