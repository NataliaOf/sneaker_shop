import React from "react";
import{ RiCloseFill} from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { setCardProduct,viewCardProduct} from "../../redux/actions/product";

export default function CardProduct(){
   const state = useSelector(state => state.product);
   const dispatch = useDispatch();
   function closeCardProduct(){

      dispatch(setCardProduct({}))
      dispatch(viewCardProduct(false))
   }
   return(

      <div className="card-product">
      <div className="card-product__box">
       <div className="card-product__slider">
          <img src={state.cardProduct.img} alt="foto"/>
       </div>
       <div className="card-product__info">
          <h2  className="card-product__title">{state.cardProduct.name} <span  className="card-product__close"><RiCloseFill onClick={closeCardProduct} /></span></h2>
          <div className="card-product__articl">Article: <span>{state.cardProduct.id}</span></div>
          <div className="card-product__price">{state.cardProduct.cost} $</div>
          <div className="card-product__size">Size: {state.cardProduct.size.map(size=><span>{size}, </span>)}</div>
         
          <p className="card-product__description">
          {state.cardProduct.description}
          </p>
          <button className="card__buy" data-id="0001">купить</button>
 
 
         
       </div>
    </div>
 
      </div>
   )
}
