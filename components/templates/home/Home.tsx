import * as React from 'react'
import Image from 'next/image'
import { Intro } from '../intro';
import FrontSlider from '../frontslider/Frontslider';
import Link from 'next/link'

import Stepper from '../stepper/Stepper';



  
  const Home = () => {
    return ( 

        <div className="bg-no-repeat pb-12">  
<FrontSlider/>

<Intro />

<div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-10 bg-black rounded-3xl mb-12">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:w-full">
          <div className='grid grid-cols-2 gap-12 pt-4'>

<div> 
  
  <Image
              className="m-left w-96 py-2 justify-items-start rounded-2xl"
              src="/assets/kai.jpg"
              alt="NFT"
              width={1000}
              height={100}
            />
            </div>

<div>
<p className='text-red-400 text-sm pb-2'>Collect them and get access to the games</p>
<h1 className='text-yellow-200 text-xl pb-2'>IMMORTAL COIL FOUNDER COLLECTION</h1>
<p className='text-white text-md'> Claim your Vampire Founders Coillection NFTs to play the Immortal Coil Games and read the Webtoons. Limited edtion ERC-721A NFTs with unique traits.  </p>

   <div className=" flex items-center justify-center py-4">
            <Link href="/nftmint">
            <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Mint NFT
</button></Link></div>

</div>

          </div>

        </div>

 </div>



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
