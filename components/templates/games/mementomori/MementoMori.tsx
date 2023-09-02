import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import {VAMPIRE_ADDRESS} from "../../../../const/addresses";

import { BigNumber, ethers } from "ethers";
import Spinner from "../../../layouts/Spinner";
import Link from 'next/link'
import Image from 'next/image'

const MementoMori = () => {

    const address = useAddress();
    const { contract: vampirecontract } = useContract(VAMPIRE_ADDRESS);
  
  
    const { data: ownedVampires, isLoading: loadingOwnedVampires } = useOwnedNFTs(vampirecontract, address);
   
  
    
    
    if (!address) {

      return (
        <div className="container-lg py-24 ">
          <div className="flex-col h-full mx-auto my-auto justify-center">
            <h1 className='text-3xl text-yellow-100 pt-16 text-center font-Metamorphous'>WELCOME TO THE MEMENTO MORI RPG</h1>
            <p className='text-xl text-white pt-4 text-center font-Jost'>To play the MEMEMTO MORI RPG, connect your wallet and claim a Founders NFT.</p>
            <div className="m-auto w-96 py-8">
              <Image
              className="m-auto py-12 mask mask-hexagon"
              src="/assets/rpg_collection.jpg"
              alt="RPG Collection"
              width={1500}
              height={1500}
            />
              </div>
        
            <div className='w-60 flex items-center justify-center m-auto pb-12'>
            <ConnectWallet /></div>
          </div>
        </div>
      );
    }
  
    if (loadingOwnedVampires) {
      return(
        <div className="container-lg">
          <div className="flex h-full justify-items-center items-center ">
            <Spinner />
          </div>
        </div>
      );
    }
  
    if (ownedVampires?.length === 0) {
      
      return (
        
<div className="w-full justify-center mx-auto pt-48">
  <h1 className="text-yellow-100 text-2xl font-Jost text-center">To play the MEMENTO MORI RPG you need to own a Founders Edition Vampire!</h1>
  <p className="text-white text-md font-Jost text-center py-4">You currently do not own a Vampire. Head to the NFT page or click the button below to claim your Vampire and play the game.</p>
<div className=" items-center justify-center m-auto py-4">

<div className="justify-center m-auto w-96 py-8 h-full">
              <Image
              className="mask mask-hexagon"
              src="/assets/rpg_collection.jpg"
              alt="RPG Collection"
              width={1500}
              height={1500}
            />
              

              <div className="flex items-center justify-center p-8">
            <Link href="/nftmint">
           <button className="bg-red-950 hover:bg-black text-yellow-200  p-4 rounded-2xl">
  Get a Vampire NFT
</button>
</Link>
</div>
</div>
</div>
          
</div>
      );
    }
  //Main Container with the WEBGL game
    return (
      
      <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">

<div className="max-w-screen-sm sm:text-center sm:mx-auto">
            
    
              <div className="m-auto w-96 py-2">
              <Image
              className="m-auto w-96 py-2"
              src="/assets/bat_divider.svg"
              alt="BAt Divider"
              width={1260}
              height={750}
            />
              </div>
        
            <h2 className="m-auto mb-4 text-lg  text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-4 leading-loose">
          Immortal Coil - Memento Mori
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white pb-12 lg:text-xl md:text-lg sm:px-4 py-4 font-Jost">
            Play as the immortal Vampire Kai in the world of Therondia and battle monsters, solve quests and save your immortal beloved Cirice from the clutches of the evil Necrocorvo in in the icey fortress Frosthaven.
            </p>
           
          </div>

          <div className="w-full  bg-white h-96 rounded-3xl">



          </div>


          
          

          

        </div>
      );
    };





    export default MementoMori;