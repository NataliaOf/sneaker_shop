import React from 'react';
import Header from './components/header/Header';
import Favorite from './components/favorits/Favorits';


import './scss/main.scss';
import Footer from './components/footer/Footer';
import SliderShop from './components/slaiderShop/SloiderShop';
import Arives from './components/arives/Arives';
import NewsBuisnes from './components/news/NeusBusnes';
import Quest from './components/quest/Quest';
// import './App.css';

function App() {
  return (
    <>
       <div className="wrapper">
  <Header/>
 <Favorite/>
  <main className="main">


   <div className="bg__step"></div>
{/* <SliderShop/> */}

<div className="bg__tree"></div>
{/* <Arives/> */}

   <div className="bg__fon"></div>


{/* <NewsBuisnes/> */}



 <Quest/>
     
</main>
 <Footer/>

   </div>
     
    </>
  );
}

export default App;
