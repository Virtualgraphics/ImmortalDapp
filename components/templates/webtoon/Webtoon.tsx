import Link from 'next/link'
import Image from 'next/image'
import WebtoonSlider from '../webtoonslider/WebtoonSlider';
import {
  MediaRenderer,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
  ConnectWallet,
  useOwnedNFTs,
  useNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";


import { BigNumber, ethers } from "ethers";
import Spinner from '../../layouts/Spinner';
const myNftDropContractAddress = "0x05746530dBc6b680b9cfD3933A4f827e0960688F";
import React from "react";
import { useState } from "react";


const Webtoon = () => {


 
  
    
 return (
        
  <div className="w-full justify-center mx-auto pt-8">
  

  <div className="flex justify-center m-auto ">
  
  <div className='grid grid-cols-2 gap-12'>
  
  <div className="bg-black rounded-3xl w-96 drop-shadow-3xl mt-8 p-8 ">
  
  
  <Image
            className=" pb-6  w-96 rounded-2xl " 
            src="/assets/webtoon_ep01.jpg"
            alt="Webtoon EP01"
            width={1500}
            height={1060}
          />
  
  <h1 className='text-white text-center font-Proza text-xl'>Immortal Coil Webtoon Cover</h1>

  <div className=" flex items-center justify-center py-4">
  <button className="bg-red-900 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded-lg mt-1">
   Mint Soon
  </button></div>
    </div>
  
          <div className="bg-black/30 rounded-3xl w-96 drop-shadow-3xl mt-8 pt-10 px-12 ">
  <h1 className='text-yellow-200 font-Metamorphous text-lg mb-8'>IMMORTAL COIL WEBTOON</h1>
  
  <p className='text-white font-base mb-8'>The town of Moorholm is being haunted by vampires fighting for supremacy of the dark realm of Therondia, none more powerful than the immortal vampire Kai. </p>
  <p className='text-white font-base mb-8'>Mint the cover of the first of the Webtoon with Blood tokens and get instant access to the first episode. </p>
  <p className='text-white font-base mb-8'>Collect, own or trade your copy. </p>
  <p className='text-white font-base mb-8'>After your mint has been confirmed, you will be automatically redirected to the Webtoon page or click the button below. </p>
  
  
 
  
  </div>
  </div>
        </div>
        
        <div className="justify-center m-auto flex max-w-3xl py-2">
          
          <h1 className=' text-white text-xl font-Jost pt-8 pb-4 text-center'>IMMORTAL COIL WEBTOON Episode 1 Preview... </h1>
        
        </div>

        <div className="justify-center m-auto flex max-w-3xl pb-4">

  

<div className="grid grid-cols-3 gap-4">

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/webtoon_preview01.jpg"
          alt="Preview 1"
          width={640}
          height={480}
        />
 </div>

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/webtoon_preview02.jpg"
          alt="Preview 2"
          width={640}
          height={480}
        />
 </div>


<div>

<Image
          className="m-auto rounded-xl "
          src="/assets/webtoon_preview03.jpg"
          alt="Preview 3"
          width={640}
          height={480}
        />
</div>
</div>
</div>
<div className="justify-center m-auto flex max-w-3xl py-2">
          
          <h1 className=' text-white text-lg font-Jost mb-12 text-center'>Stay tuned for upcoming episodes of the IMMORTAL COIL Webtoon... </h1>
        
        </div>










        </div>
  
  
      );
    };
  
    export default Webtoon;