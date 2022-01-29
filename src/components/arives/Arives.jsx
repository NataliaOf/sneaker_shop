import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y,Autoplay,Manipulation } from 'swiper';

import new1  from "../../assets/img/new1.png";
import new2  from "../../assets/img/new2.png";
import new3  from "../../assets/img/new3.png";


export default function Arives(){

   return (
      
   
   <section className="arrives">
   <div className="container">
      <h2 className="arrives__title">Made From Nature, For Nature</h2>
      <p className="arrives__text">
         We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our best chance for a sustainable future.
      </p>
      <div className="arrives__box">
         <a href="#" className="arrives__btn">See how</a>
        
      </div>
      <div className="collections">
         <h2 className="collections__title">New Arrivals</h2>
         


  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="collection__box">
          <img src={new1} alt="shop" className="collection__foto"/>
          <h3 className="collection__title">Men's Trail Runner SWT</h3>
          <p className="collection__text">
            classNameic Color, Natural Black
          </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
         <img src={new2} alt="shop" className="collection__foto"/>
         <h3 className="collection__title">Women's Trail Runner SWT</h3>
         <p className="collection__text">
            classNameic Color, Natural White
         </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
         <img src={new3} alt="shop" className="collection__foto"/>
         <h3 className="collection__title">Men's Trail Runner SWT</h3>
         <p className="collection__text">
            Limited Edition Color, Diablo
         </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
          <img src={new1} alt="shop" className="collection__foto"/>
          <h3 className="collection__title">Men's Trail Runner SWT</h3>
          <p className="collection__text">
            classNameic Color, Natural Black
          </p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
         <img src={new2} alt="shop" className="collection__foto"/>
         <h3 className="collection__title">Women's Trail Runner SWT</h3>
         <p className="collection__text">
            classNameic Color, Natural White
         </p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
         <img src={new3} alt="shop" className="collection__foto"/>
         <h3 className="collection__title">Men's Trail Runner SWT</h3>
         <p className="collection__text">
            Limited Edition Color, Diablo
         </p>
      </div>
      </SwiperSlide>
      
      
    </Swiper>



      </div>
   </div>
</section>
   )
}