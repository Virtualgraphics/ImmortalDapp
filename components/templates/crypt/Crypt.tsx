import { Web3Button,ThirdwebNftMedia, useContractWrite,ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import { BigNumber, ethers } from "ethers";
import CryptCard from "./CryptCard";


const Crypt = () => {

const address = useAddress();

const founderAddress = "0x32E33F2f65eA383CFB6A92d3920e4C656A0159D4";
const stakingAddressFounder = "0xc17EEC5b5b5Fb2672C8Da6FaC6d15e550Cfd858d";


const { contract: founderContract } = useContract (founderAddress, "nft-drop");
const { contract: stakingContractFounder } = useContract (stakingAddressFounder);


const { data: myfounderNFTs} = useOwnedNFTs(founderContract, address);
// @ts-ignore
const { data: stakedNFT} = useContractRead (stakingContractFounder,"getStakeInfo", address);



async function stakeNFT(nftId: string) {
if (!address) return;

const isApproved = await founderContract?.isApproved (
  address,
  stakingAddressFounder
);

if(!isApproved) {
  await founderContract?.setApprovalForAll(stakingAddressFounder, true);
}

await stakingContractFounder?.call ("stake", [nftId])

}

const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

useEffect(() => {
  if (!founderContract || !address) return;

  async function loadClaimableRewards() {
    const stakeInfo = await stakingContractFounder?.call("getStakeInfo", [address]);
    setClaimableRewards(stakeInfo[1]);
  }

  loadClaimableRewards();
}, [address, stakingContractFounder]);


const { mutateAsync: claimRewards } = useContractWrite(
  stakingContractFounder,
  "claimRewards"
);


return (

<div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-screen-xl sm:text-center sm:mx-auto">
            
    
       <div className="m-auto w-96 py-2">
       <Image
       className="m-auto w-96 py-2"
       src="/assets/bat_divider.svg"
       alt="BAt Divider"
       width={1260}
       height={750}
     />
       </div>
 
     <h2 className="max-w-screen- justify-center  m-auto mb-4 text-3xl font-bold tracking-wide text-center text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-3">
   Immortal Coil Crypt
     </h2>
     <hr className="max-w-screen-sm justify-center  m-auto border-yellow-200" />
     <p className="max-w-screen-sm  justify-center  m-auto text-base text-center text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Jost pb-8">
     Dawn is slowly creeping up and your Vampire needs to hide in his coffin. Put your Vampire to sleep and earn valuable IMRTL tokens.</p>
   
 

     <div className="grid grid-cols-2 gap-14 h-full ">

<div className="border-yellow-100 border-2 rounded-3xl h-full bg-red-950/50 shadow-2xl">

  
<div className="grid grid-cols-2 gap-8 p-8">

<div >
<div className="m-auto ">
       <Image
       className="m-auto"
       src="/assets/coffin.png"
       alt="Coffin 1"
       width={391}
       height={754}
     />
       </div>
</div>


<div className=" h-full ">

<h1 className="text-2xl text-yellow-100 font-Metamorphous ">My Vampires</h1>
<div>
  {myfounderNFTs?.map ((nft) => (

<div>

<p className="text-white text-Jost p-4"> {nft.metadata.name} </p>

<ThirdwebNftMedia
metadata={nft.metadata}
height ="100%"
width ="100%"


/>
<div className="p-4">
<Web3Button 

contractAddress={stakingAddressFounder}
action={() => stakeNFT(nft.metadata.id)}

> Bury in Crypt</Web3Button></div>

</div>

  ))}

</div>

<h1 className="text-white p-4 font-Jost"> Vampire in Crypt</h1>

<div>

  {stakedNFT && stakedNFT [0].map((stakedNFt: BigNumber) => (

<div key={stakedNFT.toString()}>

<CryptCard tokenId={stakedNFT.toNumber ()}/>

</div>

  ))}
</div>
<h1 className="text-white text-md font-Jost"> Claimable IMRTL</h1>
<p>
  {!claimableRewards
    ? "Loading..."
    : ethers.utils.formatUnits(claimableRewards, 18)}
</p>

<div className="p-4">
<Web3Button

  action={(stakingContractFounder) => stakingContractFounder.call("claimRewards")}
  contractAddress={stakingAddressFounder}
>
  Claim Rewards
</Web3Button></div>

</div>
</div>
</div>






<div className="border-yellow-100 border-2 rounded-3xl ">

  
<div className="grid grid-cols-2 gap-8 p-8">

<div >
<div className="m-auto ">
       <Image
       className="m-auto"
       src="/assets/coffin.png"
       alt="Coffin 1"
       width={391}
       height={754}
     />
       </div>
</div>


<div className="bg-yellow-500 h-64 p-4"></div>

</div>
</div>
    
    
     </div> 
    
   </div>
   
    </div>


    );
};





export default Crypt;