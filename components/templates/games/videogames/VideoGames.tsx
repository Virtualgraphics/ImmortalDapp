import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import {VAMPIRE_ADDRESS} from "../../../../const/addresses";

import { BigNumber, ethers } from "ethers";
import Spinner from "../../../layouts/Spinner";
import Link from 'next/link'
import Image from 'next/image'
import WebglGame from "../WebglGame";
import React from "react";




const VideoGames = () => {


    return (
      
      <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">

<div className="max-w-screen-md sm:text-center sm:mx-auto">
            
  
        
            <h2 className="m-auto mb-4 text-lg  text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-4 leading-loose">
          Immortal Coil - Video Games
            </h2>
            <hr className="w-full my-4  border-yellow-200" />
            <p className="text-base text-white pb-12 lg:text-xl md:text-lg sm:px-4 py-4 font-Jost">
            The immmortal Vampire Kai needs to get back to his crypt before sunrise, but hords of deadly gargoyles have invaded the cemetery. Help Kai to battle the monsters and replenish his blood supply by collecting enough blood goblets.
            </p>
           
          </div>


 <div className="w-full justify-center m-auto flex mb-4 ">
   <div className="m-auto py-2 ">
              <Image
              className="m-auto w-3/4 rounded-3xl"
              src="/assets/game_cover_crypt02.jpg"
              alt="Game Screen"
              width={1260}
              height={750}
            />
              </div>


</div>

<div className="w-full justify-center m-auto flex max-w-4xl">

<div className="grid grid-cols-3 gap-4">

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/coming_01.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
 </div>

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/coming_02.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
 </div>


<div>

<Image
          className="m-auto rounded-xl "
          src="/assets/coming_03.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
</div>
</div>
</div>

         
          <div className="w-full justify-center m-auto flex my-4">
<p className="text-white">To play the Web3 game you need to own a Founders NFT.</p></div>
<div className="w-full justify-center m-auto flex ">
          
            <button className="bg-red-950 hover:bg-black text-yellow-100  w-40 h-12 px-4 rounded-xl  text-xl text-Jost">
            Play now
</button></div>
            
<div className="w-full justify-center m-auto flex my-4 bg-red-950/20 max-w-2xl py-8 rounded-2xl">

           <div className="grid grid-cols-3 gap-4">

<div><p className="text-white text-lg align-middle text-left">Controllers</p></div>

<div>
<Image
          className="m-auto w-20"
          src="/assets/keyboard.png"
          alt="Keyboard"
          width={288}
          height={146}
        />

</div>

<div>
<Image
          className="m-auto w-20"
          src="/assets/xbox.png"
          alt="Xbox"
          width={288}
          height={146}
        />


</div>

           </div>
          
</div>


<div className="w-full justify-center m-auto flex my-4 bg-red-950/20 max-w-2xl p-8 rounded-2xl">

           <div className="grid grid-cols-5 gap-2 w-full">

<div className=""><p className="text-white text-lg align-middle text-center">Available on</p></div>

<div><Image
          className="m-auto w-20"
          src="/assets/logo_webgl.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>

<div>
  <div><Image
          className="m-auto w-20"
          src="/assets/logo_android.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>
        </div>

<div>
<div><Image
          className="m-auto w-20"
          src="/assets/logo_ios.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>

</div>
<div>
<div><Image
          className="m-auto w-20"
          src="/assets/logo_bnb.png"
          alt="Xbox"
          width={500}
          height={500}
        /></div>


</div>
           </div>
          
</div>


<div className="my-8"><p className="text-white text-lg align-middle text-center">Stay tuned for the Web 2.0 versions on many popular websites and mobile apps.</p></div>




            </div>
          
      
    );
  };

export default VideoGames;