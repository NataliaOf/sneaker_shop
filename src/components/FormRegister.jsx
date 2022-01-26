import React from "react";
import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";

export default function FormRegister(){

   return(

      <form action=""className="modal-registe2">
       <MyInput  id="name" type="text" placeholder="name" text="введите name"/>
              <MyInput  id="email" type="email" placeholder="email" text="введите email"/>
              <MyInput  id="niknameAdd" type="text" placeholder="nikname" text="введите nikname"/>
              <MyInput  id="passwordAdd" type="password" placeholder="password" text="введите password"/>
              <MyInput  id="passwordRepeat" type="password" placeholder="Repeat password" text="repeat password"/>
              <MyButton id="sss" >send</MyButton>
     </form>
   )
}