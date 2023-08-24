import {
    Web3Button,
    useAddress,
    useContract,
    useContractRead,
    useTokenBalance,
  } from "@thirdweb-dev/react";

  import React, { useEffect, useState } from "react";
  import { ethers } from "ethers";
  import Spinner from "../../layouts/Spinner";
  
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
        <div className="w-full justify-center mx-auto">
        <h1 className="text-yellow-100 text-xl py-4">Earn Reward Tokens</h1>
        <div className="">

          
            <div className="w-full justify-center mx-auto text-center mb-4">
              <h1 className=" text-yellow-100 text-xl">
                Stake Token:
              </h1>
              isLoaded={!loadingStakeInfo && !loadingStakeTokenBalance} 
                {stakeInfo && stakeInfo[0] ? (
                  <p className="text-white font-base">
                    {ethers.utils.formatEther(stakeInfo[0])}
                    {" $" + stakeTokenBalance?.symbol}
                  </p>
                ) : (
                  <h1 className="text-white">0</h1>
                )}
              
            </div>

            
            <div className="w-full justify-center mx-auto">

                <div className="py-4">
             
                <input
                  type="number"
                  max={stakeTokenBalance?.displayValue}
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                <div className="py-6">
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
                </Web3Button></div>
                </div>

              <div className="w-full justify-center m-auto">


                <input
                  type="number"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                />
                <div className="py-6">
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
                </Web3Button></div>
              </div>
            </div>
         
            <div className="p-4 mt-4">
            <div className="flex flex-col h-full justify-center text-center">
             
            
              <h1 className="text-yellow-100 font-Jost text-xl ">
                Reward Token:
              </h1>
               
              isLoaded={!loadingStakeInfo && !loadingRewardTokenBalance}
            
                {stakeInfo && stakeInfo[0] ? (
                  <div className="box-content">
                    <h1 className="text-white text-base font-Jost">
                      {ethers.utils.formatEther(stakeInfo[1])}
                    </h1>
                    <p className="text-white font-Jost text-base">{" $" + rewardTokenBalance?.symbol}</p>
                  </div>
                ) : (
                  <p className="text-white font-Jost text-base">0</p>
                )}
              <div className="py-6">
              <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESSES}
                action={async (contract) => {
                  await contract.call("claimRewards");
                  resetValue();
                }}
                
              >
                Claim
              </Web3Button></div>
            </div>
          </div>
        </div>
      </div>
    );
  }