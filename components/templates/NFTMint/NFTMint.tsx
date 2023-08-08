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


        <div className="justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
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
            IMMORTAL NFT COLLECTION
            </h2>
            <hr className="w-4/6 mx-auto  border-yellow-200" />
            <p className="text-base text-white lg:text-lg  md:text-lg sm:px-4 py-8 font-Jost">
           Claim your NFTs below and play the Immortal Coil Games and read the Webtoons. 
            </p>

<div className="flex justify-center ">




<div className="bg-red-900/30 rounded-2xl w-96 drop-shadow-lg ">


<Image
              className="p-10 rounded-2xl shadow-3xl"
              src="/assets/nft_test.jpg"
              alt="Stardust"
              width={750}
              height={750}
            />

<h1 className="text-yellow-100  text-xl font-Metamorphous">Memento Mori Collection</h1>


  
<div className="mt-5 mb-7 max-w-sm justify-items-center">

          
    </div>
   
   
    <div className='w-60 flex items-center justify-center m-auto pb-12'>
    <Web3Button 
        
         
          contractAddress="0x94B0E73c4328A53ccc2CdeDbEeB2aF625984Af90"
          action={(contract) => contract.erc20.claim(amountToClaim)}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
          Claim NFT
        
          </Web3Button></div>
         </div>
              </div>
</div>




<div className="pb-12  justify-items-center">

<div className=" pt-14 m-auto  justify-center">
<h1 className=" text-yellow-100 text-2xl text-center  font-Jost">
              Use your IMMORTAL COIL NFTs for the following cool things:
            </h1></div>

      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Earn rewards in the RPG</h6>
            <p className="text-sm text-white">
              Get rewards for missions and quests successfully accomplished in the Stargazer RPG and trade tokens for in-game NFTs.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2  leading-5 text-yellow-200 font-Jost">Power up your Stargate</h6>
            <p className="text-sm text-white">
              Use the Stardust tokens to claim cosmic energy sources for your Stargate and get more STAR as a reward.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-red-950/30 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 leading-5 text-yellow-200 font-Jost">Vote for your stories
              
            </h6>
            <p className="text-sm text-white">
              Use the tokens to participate in the anime and webtoons and get rewarded for a story path well-chosen.
            </p>
            
          </div>
        </div>
        </div>
<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-white font-Jost py-2">NFT contract address on Bscscan:</h1>
            <p className="text-sm text-center text-white font-Jost px-2">
              IMRTL: 0x94B0E73c4328A53ccc2CdeDbEeB2aF625984Af90
            </p>
            </div> 
      </div>
 </div>
 

      );
    };

 
  export default Token;