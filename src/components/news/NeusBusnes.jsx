import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y,Autoplay,Manipulation } from 'swiper';

import stories1 from "../../assets/img/stories1.jpg";
import stories2 from "../../assets/img/stories2.jpg";
import stories3 from "../../assets/img/stories3.jpg"

export default function NewsBuisnes(){
   return(

      <section className="busines">
      <div className="container">
         <h2 className="busines__title">Reversing Climate Change Through Better Business</h2>
         <p className="busines__text">
            Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025.
         </p>
         <div className="busines__box">
            <a href="#" className="arrives__btn">Our Sustainable Practices</a>
            
         </div>
         <div className="collections ">
            <h2 className="collections__title">Stories</h2>

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
             <img src={ stories1} alt="stories" className="collection__foto"/>
             <h3 className="collection__title">Planet-Friendly Activewear</h3>
             <p className="collection__text">
               The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.
             </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
            <img src={ stories2 } alt="stories" className="collection__foto"/>
            <h3 className="collection__title">adidas and Allbirds</h3>
            <p className="collection__text">
               Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.
            </p>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
            <img src={ stories3} alt="stories" className="collection__foto"/>
            <h3 className="collection__title">How much did your outfit cost the planet?</h3>
            <p className="collection__text">
               Now any brand can use our Carbon Footprint tools to label their emissions.
            </p>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
             <img src={ stories1} alt="stories" className="collection__foto"/>
             <h3 className="collection__title">Planet-Friendly Activewear</h3>
             <p className="collection__text">
               The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.
             </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
            <img src={ stories2 } alt="stories" className="collection__foto"/>
            <h3 className="collection__title">adidas and Allbirds</h3>
            <p className="collection__text">
               Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.
            </p>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="collection__box">
            <img src={ stories3} alt="stories" className="collection__foto"/>
            <h3 className="collection__title">How much did your outfit cost the planet?</h3>
            <p className="collection__text">
               Now any brand can use our Carbon Footprint tools to label their emissions.
            </p>
         </div>
      </SwiperSlide>


      
    </Swiper>
            
     {/* <div className="swiper-button-prev"></div>
     <div className="swiper-button-next"></div>
           <div className="swiper">
   
     <div className="swiper-wrapper">
     
       <div className="swiper-slide">
          <div className="collection__box">
             <img src={ stories1} alt="stories" className="collection__foto"/>
             <h3 className="collection__title">Planet-Friendly Activewear</h3>
             <p className="collection__text">
               The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.
             </p>
          </div>
       </div>
       <div className="swiper-slide">
         <div className="collection__box">
            <img src={ stories2 } alt="stories" className="collection__foto"/>
            <h3 className="collection__title">adidas and Allbirds</h3>
            <p className="collection__text">
               Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.
            </p>
         </div>
      </div>
      <div className="swiper-slide">
         <div className="collection__box">
            <img src={ stories3} alt="stories" className="collection__foto"/>
            <h3 className="collection__title">How much did your outfit cost the planet?</h3>
            <p className="collection__text">
               Now any brand can use our Carbon Footprint tools to label their emissions.
            </p>
         </div>
      </div>
      <div className="swiper-slide">
         <div className="collection__box">
            <img src={ stories1} alt="stories" className="collection__foto"/>
            <h3 className="collection__title">Planet-Friendly Activewear</h3>
            <p className="collection__text">
              The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.
            </p>
         </div>
      </div>
      <div className="swiper-slide">
        <div className="collection__box">
           <img src={ stories2 } alt="stories" className="collection__foto"/>
           <h3 className="collection__title">adidas and Allbirds</h3>
           <p className="collection__text">
              Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.
           </p>
        </div>
     </div>
     <div className="swiper-slide">
        <div className="collection__box">
           <img src={ stories3} alt="stories" className="collection__foto"/>
           <h3 className="collection__title">How much did your outfit cost the planet?</h3>
           <p className="collection__text">
              Now any brand can use our Carbon Footprint tools to label their emissions.
           </p>
        </div>
     </div>
   
   </div>
   </div> */}
   
         </div>
      </div>
   </section>
   )
}