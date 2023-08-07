import * as React from 'react'
import { Hero } from '../hero';
import { Intro } from '../intro';
import FrontSlider from '../frontslider/Frontslider';





  
  const Home = () => {
    return ( 

        <div className="bg-no-repeat">  
<FrontSlider/>
<Hero />
<Intro />
     
     </div>
     )




};

export default Home;
