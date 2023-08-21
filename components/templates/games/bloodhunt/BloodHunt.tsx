import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { STAKING_ADDRESS, MONSTERS_ADDRESS, REWARDS_ADDRESS, VAMPIRE_ADDRESS} from "../../../../const/addresses";
import { Inventory } from "../Inventory";
import { Boosted } from "../Boosted";
import { BigNumber, ethers } from "ethers";
import Spinner from "../../../layouts/Spinner";
import Link from 'next/link'
import Image from 'next/image'

const BloodHunt = () => {

    const address = useAddress();
    const { contract: vampirecontract } = useContract(VAMPIRE_ADDRESS);
    const { contract: monstersContract } = useContract(MONSTERS_ADDRESS);
    const { contract: stakingContract } = useContract(STAKING_ADDRESS);
    const { contract: rewardContract } = useContract(REWARDS_ADDRESS);
  
    const { data: ownedVampires, isLoading: loadingOwnedVampires } = useOwnedNFTs(vampirecontract, address);
    const { data: ownedMonsters, isLoading: loadingOwnedMonsters } = useOwnedNFTs(monstersContract, address);
  
    const { data: boostedMonsters } = useContractRead(
      stakingContract, 
      "getStakeInfo",
      [address]
    );
  
    const { data: rewardBalance } = useContractRead(rewardContract, "balanceOf", [address]);
    
    if (!address) {

      return (
        <div className="container-lg py-24 ">
          <div className="flex-col h-full mx-auto my-auto justify-center">
            <h1 className='text-3xl text-yellow-100 pt-16 text-center font-Metamorphous'>WELCOME TO THE BLOODHUNT</h1>
            <p className='text-xl text-white pt-4 text-center font-Jost'>To participate in the BLOODHUNT, connect your wallet and claim a Founders NFT.</p>
            <div className="m-auto w-96 py-8">
              <Image
              className="m-auto py-12 mask mask-hexagon"
              src="/assets/monster_collection.jpg"
              alt="Monster Collection"
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
        <div className="container-lg ">

<div className=" flex items-center justify-center py-4">
            <Link href="/nftmint">
            <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1 shadow-3xl">
  Get a Vampire Founders NFT
</button></Link></div>
          
        </div>
      );
    }
  //Main Container with Vampire on the laft and BLOOD reward on the right
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
        
            <h2 className="m-auto mb-4 text-3xl font-bold tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-3">
          Immortal Coil - Bloodhunt
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white pb-12 lg:text-xl md:text-lg sm:px-4 py-5 font-Jost">
            Supercharge your Vampires powers by boosting him with a powerful monster. Each monster will earn you a different rate of $BLOOD tokens which you can use to buy more tokens or in the other games.
            </p>
           
          </div>


          <div className="grid grid-cols-2 gap-14">
            <div className="p-10  bg-red-950 border-2 border-yellow-100 rounded-3xl shadow-3xl">
              <h1 className="text-2xl text-yellow-100 font-Metamorphous">Vampire</h1>
              <div className='grid grid-cols-2 gap-4'>
                <div className='content-box'>
                  {ownedVampires?.map((nft) => (
                    <div className="py-8 " key={nft.metadata.id}>
                      <MediaRenderer 
                        src={nft.metadata.image} 
                        height="100%"
                        width="100%"
                    
                     
                     />
                    </div>
                  ))}
                </div>
                <div className='content-box pl-4'>
                  <p className="text-base text-bold text-white  pt-8 font-Jost">$BLOOD Balance:</p>
                    {rewardBalance && (
                        <p>{ethers.utils.formatUnits(rewardBalance, 18)}</p>
                      )}
                  </div>
              </div>
            </div>
            <div className="p-10 bg-red-950 border-2 border-yellow-100 rounded-3xl">
              <h1 className="text-2xl text-yellow-100 font-Metamorphous">Monster Inventory</h1>


 
           
                <Inventory
                  nft={ownedMonsters}
                />     
            
        

            </div>
          </div>
          <div className='p-10  bg-red-950 border-2 border-yellow-100 rounded-3xl my-14 shadow-3xl'>
            <h1 className="mb-8 text-yellow-100 text-2xl font-Metamorphous">Boosted Monsters</h1>
            <div className='grid grid-cols-3 gap-4'>
                {boostedMonsters &&
                  boostedMonsters[0].map((nft: BigNumber) => (
                    <Boosted
                      key={nft.toNumber()}
                      tokenId={nft.toNumber()}
                    />
                  ))}
            </div>

            <p className="text-yellow-200 font-Jost pt-8 ">NOTE: Claim your $BLOOD before unboosting any monsters</p>
          </div>

          

        </div>
      );
    };





    export default BloodHunt;