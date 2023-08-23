import {
    Web3Button,
    useAddress,
    useContract,
    useContractRead,
    useTokenBalance,
  } from "@thirdweb-dev/react";

  import React, { useEffect, useState } from "react";
  import { ethers } from "ethers";
  
  export default function Stake() {

    const STAKE_TOKEN_ADDRESSES = "0x9798CDb5685622624165E7DF4E7613A46c4Cf1a0";
    const REWARD_TOKEN_ADDRESSES = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";
    const STAKE_CONTRACT_ADDRESSES = "0x848244257651F97ef78D1DcB29220c8cAD80906d";

    const address = useAddress();
  
    const { contract: stakeTokenContract } = useContract(
      STAKE_TOKEN_ADDRESSES,
      "token"
    );
    const { contract: rewardTokenContract } = useContract(
      REWARD_TOKEN_ADDRESSES,
      "token"
    );
    const { contract: stakeContract } = useContract(
      STAKE_CONTRACT_ADDRESSES,
      "custom"
    );
  
    const {
      data: stakeInfo,
      refetch: refetchStakeInfo,
      isLoading: loadingStakeInfo,
    } = useContractRead(stakeContract, "getStakeInfo", [address]);
  
    const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
      useTokenBalance(stakeTokenContract, address);
  
    const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
      useTokenBalance(rewardTokenContract, address);
  
    useEffect(() => {
      setInterval(() => {
        refetchStakeInfo();
      }, 10000);
    }, []);
  
    const [stakeAmount, setStakeAmount] = useState<string>("0");
    const [unstakeAmount, setUnstakeAmount] = useState<string>("0");
  
    function resetValue() {
      setStakeAmount("0");
      setUnstakeAmount("0");
    }
  
  
  
    return (
        <div className="p-5 mt-8">
        <h1 className="text-white text-lg">Earn Reward Token</h1>
        <div className="grid grid-cols-2 gap-4">

          
            <div className="text-center mb-4">
              <h1 className="text-lg font-semibold text-white">
                Stake Token:
              </h1>
              <div role="status" className="max-w-sm animate-pulse">   isLoaded={!loadingStakeInfo && !loadingStakeTokenBalance} 
                {stakeInfo && stakeInfo[0] ? (
                  <p className="text-white font-base">
                    {ethers.utils.formatEther(stakeInfo[0])}
                    {" $" + stakeTokenBalance?.symbol}
                  </p>
                ) : (
                  <h1 className="text-white">0</h1>
                )}
              </div>
            </div>

            
            <div className="grid gid-cols-2 gap-4">

                <div className="py-4">
             
                <input
                  type="number"
                  max={stakeTokenBalance?.displayValue}
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                <Web3Button
                  contractAddress={STAKE_CONTRACT_ADDRESSES}
                  action={async (contract) => {
                    await stakeTokenContract?.erc20.setAllowance(
                      STAKE_CONTRACT_ADDRESSES,
                      stakeAmount
                    );
  
                    await contract.call("stake", [
                      ethers.utils.parseEther(stakeAmount),
                    ]);
                    resetValue();
                  }}
                  onSuccess={() =>

                    <div className="toast">
  <div className="alert alert-info">
    <span>Stake successful</span>
    </div> </div>
                 
                  }
                >
                  Stake
                </Web3Button>
                </div>

              <div className="grid grid-rows-2 gap-4">


                <input
                  type="number"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                />
                <Web3Button
                  contractAddress={STAKE_CONTRACT_ADDRESSES}
                  action={async (contract) => {
                    await contract.call("withdraw", [
                      ethers.utils.parseEther(unstakeAmount),
                    ]);
                  }}
                  onSuccess={() =>
                    <div className="toast">
                    <div className="alert alert-info">
                      <span>Unstake successful</span>
                   </div>
                    </div>
                  }
                >
                  Unstake
                </Web3Button>
              </div>
            </div>
         
            <div className="p-5 mt-8">
            <div className="flex">
              h={"100%"}
              justifyContent={"space-between"}
              direction={"column"}
              textAlign={"center"}
            
              <h1 className="text-white text-lg font-semibold">
                Reward Token:
              </h1>
              <div role="status" className="max-w-sm animate-pulse h-4 w-50">  
                isLoaded={!loadingStakeInfo && !loadingRewardTokenBalance}
            
                {stakeInfo && stakeInfo[0] ? (
                  <div className="box-content">
                    <h1 className="text-white text-lg font-semibold">
                      {ethers.utils.formatEther(stakeInfo[1])}
                    </h1>
                    <p className="text-white">{" $" + rewardTokenBalance?.symbol}</p>
                  </div>
                ) : (
                  <p className="text-white">0</p>
                )}
              </div>
              <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESSES}
                action={async (contract) => {
                  await contract.call("claimRewards");
                  resetValue();
                }}
                onSuccess={() =>
                    <div className="toast">
                    <div className="alert alert-info">
                      <span>Rewards claimed!</span>
                   </div>
                    </div>
                }
              >
                Claim
              </Web3Button>
            </div>
          </div>
        </div>
      </div>
    );
  }