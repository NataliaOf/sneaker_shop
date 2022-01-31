import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,Manipulation } from 'swiper';
import shop1  from "../../assets/img/shop1.jpg";
import shop2  from "../../assets/img/shop2.jpg";
import shop3  from "../../assets/img/shop3.jpg"

export default function SliderShop(){

   return(

         
   <section className="shob">
   <div className="container">
      <h2 className="shob__title">Seasons Change. Your Shoes Dont Have To.</h2>
      <p className="shob__text">
         Soft and cozy wool shoes to keep you comfortable all year round.
      </p>
      <div className="shob__box">
         <a href="#" className="shob__btn">Shop men</a>
         <a href="#" className="shob__btn">Shop women</a>
      </div>
      <div className="collections">
         <h2 className="collections__title">Shop The Collections</h2>

         <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,Manipulation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="collection__box">
          <img src={ shop1 }alt="shop" className="collection__foto"/>
          <h3 className="collection__title">New Arrivals</h3>
          <p className="collection__text">
            The latest styles and limited edition colors that you can only find here (while they last, that is).
          </p>
       </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
         <img src={ shop2} alt="shop" className="collection__foto"/>
         <h3 className="collection__title">New Arrivals</h3>
         <p className="collection__text">
           The latest styles and limited edition colors that you can only find here (while they last, that is).
         </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="collection__box">
         <img src={ shop3 } alt="shop" className="collection__foto"/>
         <h3 className="collection__title">New Arrivals</h3>
         <p className="collection__text">
           The latest styles and limited edition colors that you can only find here (while they last, that is).
         </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
          <img src={ shop1 }alt="shop" className="collection__foto"/>
          <h3 className="collection__title">New Arrivals</h3>
          <p className="collection__text">
            The latest styles and limited edition colors that you can only find here (while they last, that is).
          </p>
       </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
         <img src={ shop2} alt="shop" className="collection__foto"/>
         <h3 className="collection__title">New Arrivals</h3>
         <p className="collection__text">
           The latest styles and limited edition colors that you can only find here (while they last, that is).
         </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="collection__box">
         <img src={ shop3 } alt="shop" className="collection__foto"/>
         <h3 className="collection__title">New Arrivals</h3>
         <p className="collection__text">
           The latest styles and limited edition colors that you can only find here (while they last, that is).
         </p>
      </div>
      </SwiperSlide>
      
      
    </Swiper>
         
  
      </div>
   </div>
</section>
   )
}