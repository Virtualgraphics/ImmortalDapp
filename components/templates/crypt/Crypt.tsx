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


const Stake: NextPage = () => {

  const nftDropContractAddress = "0x32E33F2f65eA383CFB6A92d3920e4C656A0159D4";
  const stakingContractAddress = "0xc17EEC5b5b5Fb2672C8Da6FaC6d15e550Cfd858d";
  const  tokenContractAddress = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";

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
    return <div>Loading</div>;
  }

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
      <hr className="mt-4 w-1/2 border-yellow-100" />

      {!address ? (
        <ConnectWallet />
      ) : (
        <>
          <h2>Your Tokens</h2>
          <div className="w-full flex flex-row justify-items-center m-auto mt-6 flex-wrap">
            <div className="w-1/3 h-32 border rounded-xl flex flex-col justify-items-center m-auto">
              <h3 className="my-0 font-Jost font-bold text-yellow-100">Claimable Rewards</h3>
              <p className="text-lg my-0 font-bold text-white">
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>
            <div className="w-1/3 h-32 border rounded-xl flex flex-col justify-items-center m-auto">
              <h3 className="my-0 font-Jost font-bold text-yellow-100">Current Balance</h3>
              <p className="text-lg my-2 font-semibold font-Jost">
                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
              </p>
            </div>
          </div>

          <Web3Button
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingContractAddress}
          >
            Claim Rewards
          </Web3Button>

          <hr className="mt-4 w-1/2 border-yellow-100" />
          <h2>Your Staked NFTs</h2>
          <div className="max-w-3xl">
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>

          <hr className="mt-4 w-1/2 border-yellow-100" />
          <h2>Your Unstaked NFTs</h2>
          <div className="justify-center mt-4 w-1/2">
            {ownedNfts?.map((nft) => (
              <div className="justify-center mt-4 w-1/2" key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className="w-full max-h-80 rounded-2xl"
                />
                <h3>{nft.metadata.name}</h3>
                <Web3Button
                  contractAddress={stakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                >
                  Stake
                </Web3Button>
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

export default Stake;