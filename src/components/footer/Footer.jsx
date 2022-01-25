import React from "react";

export default function Footer (){

   return(

      <footer className="footer">
   <div className="footer__box">
      <div className="footer__help">
         <h3 className="help__title collapsible">Help</h3>
         <ul className="help content">
            <li className="help__list">
               <a href="tel:18889638944" className="help__link">1-888-963-8944</a>
            </li>
            <li className="help__list">
               <a href="tel:18142519966" className="help__link">1-814-251-9966 (Text)</a>
            </li>
            <li className="help__list">
               <a href="mailto:ask@help@allbirds.com" className="help__link">help@allbirds.com</a>
            </li>
            <li className="help__list">
               <a href="#" className="help__link">Returns/Exchanges</a>
            </li>
            <li className="help__list">
               <a href="#" className="help__link">FAQ/Contact Us</a>
            </li>
            <li className="help__list">
               <a href="#" className="help__link">Afterpay</a>
            </li>
         </ul>
      </div>
      <div className="footer__shop">
         <h3 className="shop__title collapsible">Shop</h3>
         <ul className="shop content">
            <li className="shop__list">
               <a href="#" className="shop__link">Men's Shoes</a>
            </li>
            <li className="shop__list">
               <a href="#" className="shop__link">Women's Shoes</a>
            </li>
            <li className="shop__list">
               <a href="#" className="shop__link">Men's Apparel</a>
            </li>
            <li className="shop__list">
               <a href="#" className="shop__link">Women's Apparel</a>
            </li>
            <li className="shop__list">
               <a href="#" className="shop__link">Socks</a>
            </li>
            <li className="shop__list">
               <a href="#" className="shop__link">Gift Cards</a>
            </li>
            <li className="shop__list">
               <a href="#" className="shop__link">Download the Allbirds App</a>
            </li>
         </ul>
      </div>
      <div className="footer__company">
         <h3 className="company__title collapsible">Company</h3>
         <ul className="company content">
            <li className="company__list">
               <a href="#" className="company__link">Our Stores</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Our Story</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Our Materials</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Sustainability</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Partnerships</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Product Testing</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Affiliates</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Bulk Orders</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Careers</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">Press</a>
            </li>
            <li className="company__list">
               <a href="#" className="company__link">California Transparency Act</a>
            </li>
         </ul>
      </div>
   </div>
  
   <div className="copy">
      © 2021 Allbirds, Inc. All Rights Reserved.Terms Privacy & Accessibility
   </div>
</footer>
   )
}