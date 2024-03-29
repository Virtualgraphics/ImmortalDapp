import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";
import { FC, useEffect } from 'react';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from 'next/image'
import React from 'react';


const Token = () => {
  const { contract: tokenDropContract} = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D");
  const [amountToClaim, setAmountToClaim] = useState("");

  
      return (


        <div className="justify-center  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-8">
        <div className=" grid max-w-screen-lg row-gap-5 sm:text-center sm:mx-auto">
          
  
            <div className="m-auto w-96 py-2">
            <Image
            className="m-auto w-96 py-2"
            src="/assets/bat_divider.svg"
            alt="Bat Divider"
            width={1260}
            height={750}
          />
            </div>

            <h2 className="m-auto mb-4 text-3xl tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-5">
            IMMORTAL COIL - TOKENS
            </h2>
            <hr className="w-4/6 mx-auto  border-yellow-200" />
            <p className="text-base text-white lg:text-lg  md:text-lg sm:px-4 py-8 font-Jost">
           Claim your $IMRTL and $BLOOD tokens below, buy NFTs and play the Immortal Coil Games. 
            </p>

<div className="grid max-w-screen-lg gap-8 row-gap-8 sm:mx-auto px-4 md:row-gap-8 lg:grid-cols-2">

<div className="bg-red-900/30  rounded-2xl w-72 drop-shadow-lg justify-center" >

<Image
              className="p-10 mask mask-hexagon shadow-3xl"
              src="/assets/immortal_token_gradient.jpg"
              alt="IMRTL"
              width={1260}
              height={750}
            />

          <h1 className="text-yellow-100  text-2xl font-Metamorphous ">Immortal Token</h1>
          <h2 className="text-white text-md py-2 font-Jost">Claim $IMRTL Tokens</h2>
          <p className="text-white text-xs py-2 font-Jost">Max. 250 $IMRTL Tokens per wallet</p>

          <div className="mt-5 mb-7 max-w-sm justify-items-center">

<input 
id="1"
type="text"  
placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
  

onChange={(e) => setAmountToClaim(e.target.value)}

/>
</div>


<div className='w-60 flex items-center justify-center m-auto'>
<button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button></div>
</div>

<div className="bg-red-900/30 rounded-2xl w-72 drop-shadow-lg ">


<Image
              className="p-10 mask mask-hexagon"
              src="/assets/blood_token_gradient.jpg"
              alt="Blood"
              width={1260}
              height={750}
            />

<h1 className="text-yellow-100  text-2xl font-Metamorphous">Blood Token</h1>
<h2 className="text-white text-md py-2 font-Jost">Claim $BLOOD Tokens</h2>
<p className="text-white text-xs py-2 font-Jost">Max. 500 $BLOOD Tokens per wallet</p>
  
<div className="mt-5 mb-7 max-w-sm justify-items-center">

          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   
    onChange={(e) => setAmountToClaim(e.target.value)}
    
    />
    </div>
   
   
    <div className='w-60 flex items-center justify-center m-auto pb-8'>
    <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button></div>
         </div>
              </div>
</div>




<div className="pb-12  justify-items-center">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-yellow-100 text-2xl text-center  font-Jost">
              Use your IMMORTAL COIL tokens for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Earn rewards in the RPG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Memento Mori RPG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2  leading-5 text-yellow-200 font-Jost">Boost your Vampire</h6>
            <p className="text-sm text-white">
              Use various monsters to boost the powers of your vampire and earn $BLOOD tokens in the BLoodhunt DeFi game.</p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Win reward NFTs
              
            </h6>
            <p className="text-sm text-white">
              Use the tokens to participate in the anime and webtoons and get rewarded for each correctly answered question.
            </p>
            
          </div>
        </div>
        </div>
<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-white font-Jost py-2">Contract Addresses on Bscscan:</h1>
            <p className="text-sm text-center text-white font-Jost px-2">
              IMRTL: Coming soon
            </p>
            <p className="text-sm text-center text-white font-Jost py-2">
              BLOOD: Coming soon
            </p></div> 
      </div>
 </div>
 

      );
    };

 
  export default Token;