import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCardProduct, viewCardProduct, addProductBascet } from "../../redux/actions/product";

export default function Card({id, img, name, cost, appointment,availability}){
   const dispatch = useDispatch();
   const state = useSelector(state => state.product);
   function viewCardProducts(id){
      const CardProduct = state.product.filter(card=>{
         return card.id.includes(id)
      })
      dispatch(setCardProduct(CardProduct[0]))
      dispatch(viewCardProduct(true))

   }

   function addProductBasket(id){
   
      const CardProduct = state.product.filter(card=>{
         return card.id.includes(id)
      })
   
      dispatch(addProductBascet(CardProduct[0]))
   }
 
   return(
      <div className="card">
      <div className="card__foto">
         <img src={img}/>
      </div>
      <div className="card__info">
       <h3 className="card__title">{name} <span className="card__artic"> ART {id}</span></h3>
       <div className="card__prise" >{cost} $</div>
       <p className="card__appoint">{appointment}</p>
       <div className="card__stock">{availability}</div>
      </div>
      <div className="card__btns">
         <button className="card__buy"onClick={()=> addProductBasket(id)} >купить</button>
         <a className="card__look" onClick={()=> viewCardProducts(id)}>посмотреть</a>
      </div>
   </div>
   )
}

