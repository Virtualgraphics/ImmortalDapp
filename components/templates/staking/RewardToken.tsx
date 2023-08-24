import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

export default function RewardToken() {

    const REWARD_TOKEN_ADDRESSES = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(REWARD_TOKEN_ADDRESSES);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);
    
    return (
        <div className="p-5">
            <div className="grid grid-rows-2 gap-4">
                
                <h1 className="text-yellow-100 text-xl font-Jost">Reward Tokens</h1>
               isLoaded={!loadingStakeToken && !loadingTokenBalance}
              
                <div>
                    <h1 className="text-md text-white font-Jost ">${tokenBalance?.symbol}</h1>

                 isLoaded={!loadingStakeToken && !loadingTokenBalance}
                 
                    <p className="text-white text-base font-Jost">{tokenBalance?.displayValue}</p>
                    </div>
                    
                    </div>
            </div> 
       
    )
}