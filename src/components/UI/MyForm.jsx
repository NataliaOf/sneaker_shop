import React from "react";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";

export default function MyForm({classN}){

   return(

      <form action=""className={classN} >
        <MyInput  id="nickname" type="text" placeholder="nikname" text="введите никнейм"/>
        <MyInput   id="psOpen" type="password" placeholder="password" text="введите password"/>
        <MyButton id="ddd" >add</MyButton>
     </form>
   )
}