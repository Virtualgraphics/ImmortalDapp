import type { NextPage } from "next";
import Image from 'next/image'
import { 
  MediaRenderer, 
  Web3Button, 
  useActiveClaimConditionForWallet, 
  useAddress, 
  useClaimIneligibilityReasons, 
  useContract, 
  useContractMetadata, 
  useTotalCirculatingSupply, 
  useTotalCount 
} from "@thirdweb-dev/react";

import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '/styles/Home.module.css'

const VampireMint: NextPage = () => {
  

  return (


    <div className="max-w-4xl justify-center flex p-8 m-auto my-2 bg-black rounded-3xl">
      
    
          <div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-14">



            <div className="w-full">

            <Image
              className="flex items-center justify-center mx-auto w-80 rounded-3xl"
              src="/assets/kai.jpg"
              alt="Collection"
              width={1000}
              height={1000}
            />
              
              
              <p className="text-white font-thin font-Acme text-md text-left px-12 pt-4">Price: TBA</p>
              <p className="text-white font-thin font-Acme text-md text-left px-12">Max. cLaimable per wallet: 3 NFTs</p>
            </div>



            <div className="w-full">
              <h1 className="text-red-700 text-2xl font-Metamorphous pb-2">IMMORTAL COIL Frounders Collection</h1>
              <p className="text-yellow-100  font-Proza text-lg pr-8">Immortal soulmates Kai fights and Cirice are fighting for their souls against the demon Necrocorvo. Collection to access the games and webtoons in the Immortal Coil App.</p>
             
            
              <div className="mt-4 ">
           
            <button className="bg-red-900 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg mt-5">
  Mint Coming Soon
</button> </div>
          
             
             
            </div>
          </div>
       
     
    </div>
  );
};

export default VampireMint;