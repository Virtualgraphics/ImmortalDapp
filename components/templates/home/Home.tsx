import * as React from 'react'
import { Hero } from '../hero';
import { Intro } from '../intro';
import FrontSlider from '../frontslider/Frontslider';

import Stepper from '../stepper/Stepper';



  
  const Home = () => {
    return ( 

        <div className="bg-no-repeat pb-12">  
<FrontSlider/>
<Hero />
<Intro />

<div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
        <div className="max-w-xl sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="text-yellow-100 mb-1 text-2xl  tracking-wide uppercase md:mb-2 font-Metamorphous">
         Get started with IMMORTAL COIL
          </p>
          <p className="text-base  text-white md:text-lg">
       Follow the 3 easy steps below to mint NFTs, tokens and play the games.
          </p>
        </div></div>


<Stepper />
     
     </div>
     )




};

export default Home;
