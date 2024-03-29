import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { NFTCard } from "../nftcard";
import Spinner from "../../layouts/Spinner";



const Crypt: NextPage = () => {

  const nftDropContractAddress = "0xD671735b14ddb2DA84433bf291f00355de068992";
  const stakingContractAddress = "0xc5F2F431A16Dc7A98Fbea377AAecb54101b79CA8";
  const tokenContractAddress = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";
 


  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );

  

  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
 
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return <div className="h-screen mt-96 justify-center m-auto flex"><Spinner/></div>;
  }



  return (

    <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-8 pb-16">
<div className="max-w-screen-xl sm:text-center sm:mx-auto">
            
    
       <div className="m-auto w-96py-2">
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
   

    


     <div className="w-3/4 pt-8 justify-center m-auto flex">



<div className="border-yellow-100 border-2 rounded-3xl h-full bg-red-950/50 shadow-2xl">






  
<div className="grid grid-cols-2 gap-8 p-8">

<div >
<div className="m-auto ">
       <Image
       className="m-auto w-64 "
       src="/assets/coffin.png"
       alt="Coffin 1"
       width={391}
       height={754}
     /> </div></div>








    <div className="w-full ">
    
      

      {!address ? (
        <div className="pt-6 w-64">
<h1 className="text-white font-Jost pb-8">Please connect a wallet and claim a Vampire Founders NFT to use the Crypt.</h1>

<button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button>
        
        </div>
      ) : (
        <>
          <h2>Your Tokens</h2>
          <div className="grid grid-row-2 gap-4">

            <div className="w-full h-full p-4 border border-yellow-100 rounded-xl flex flex-col justify-items-center m-auto">
              <h3 className="my-0 font-Jost  text-yellow-100">Claimable Rewards</h3>
              <p className="text-base my-2 text-white font-Jost">
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>


            <div className="w-full h-full p-4 border border-yellow-100 rounded-xl flex flex-col justify-items-center m-auto">
              <h3 className="my-0 font-Jost  text-yellow-100">Current Balance</h3>
              <p className="text-base my-2  font-Jost">
                <b>{tokenBalance?.displayValue}
                </b> {" "}
                
                {tokenBalance?.symbol}
              </p>
            </div>
          </div>


          <div className="py-8">
          <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button>
          </div>

          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            
    
            <div className="m-auto py-2">
            <Image
            className="m-auto w-96 py-2"
            src="/assets/bat_divider.svg"
            alt="BAt Divider"
            width={1260}
            height={750}
          /> </div>
            </div>

            

         
          <div className="max-w-3xl">
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>

          
        
          <div className="justify-center m-auto flex w-full">
            {ownedNfts?.map((nft) => (
              <div className="justify-center px-4" key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className="w-full max-h-48 rounded-2xl"
                />
                <div className="w-11/12 text-white justify-center mx-auto">
                <h3>{nft.metadata.name}</h3>

                <div className="pt-4">
                <Web3Button
                  contractAddress={stakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                >
                  Stake
                </Web3Button></div> </div>
              </div>
            ))}
          </div>
        </>
      )}
      </div>
      </div>
      </div>



      

  


      





    </div>
    </div>
   </div>
   
  );
};

export default Crypt;