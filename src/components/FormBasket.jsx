import React, { useState } from "react";
import { useSelector } from "react-redux";

import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";
import{ FiTrash2} from "react-icons/fi";
import  '../scss/main.scss'
import { useDispatch } from "react-redux";
import { removeProductBasket } from "../redux/actions/product";


export default function FormBasket(){
  const dispatch =useDispatch();
   const state = useSelector(state=>state.product.addProduct);
   console.log(state)
   const [counts, setCounts] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
   // console.log(counts)
   function removeCost(index){
   
      setCounts(counts.map((number,i)=>{
         // if(number<0){ return};
         if(index===i && number>1){
            // console.log(number)
           
           return number - 1
         }
         return number
        
      }))
   }
   function addCost(index){
      setCounts(counts.map((number,i)=>{
         if(index===i){
            // console.log(number)
           return number + 1
         }
         return number
      }))
   }
   function removeProduct(id){
      const producs = state.filter((product=> product.id !==id))
      console.log(producs)
      dispatch(removeProductBasket(producs))
   }

   return(

      <form  className="order">
          <div className="order__string">
           <MyInput  id="order__name-us" type="text" placeholder="Your name" text=""/>
           <MyInput  id="order__phone" type="tel" placeholder="Your phone" text=""/>
    </div>
     <div className="order__box">

        { state!== [] 
        ?  state.map((product, index)=> (
           <div className="order__string" key={product.id}>
            <div className="order__name" id="order__name" >{`${product.name} - ART: ${product.id}`}</div>
            <div className="cost" id="order__pr">{`${product.cost * counts[index]} $`}</div>
           <div className="order__dk" onClick={()=>removeCost(index)}>-</div>
           <div  className="order__am">{counts[index]}</div>
           <div className="order__ik" onClick={()=>addCost(index)}>+</div>
           <span className="order__remove">
              <FiTrash2 onClick={()=>removeProduct(product.id)}/>
           </span>
          </div> ))
   
         :<div className="order__string"> Корзина пуста </div>
      }
    

     </div>
      <div className="order__box-btn">
         <div  className="order__sum" id="order__sum">Order price: 00</div>
     
      
        <MyButton id="order__btn" >купить</MyButton>
        
      </div>

    </form>
   )
}


