import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

import Spinner from "../../layouts/Spinner";

export default function StakeToken() {

    const REWARD_TOKEN_ADDRESSES = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(REWARD_TOKEN_ADDRESSES);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);
    
    return (
        <div className="p-5">
            <div className="grid grid-rows-2 gap-4">
                <div>
                <h1>Reward Token</h1>
                <div role="status" className="max-w-sm animate-pulse h-4 w-50">  isLoaded={!loadingStakeToken && !loadingTokenBalance}</div>
                </div>
                <div>
                    <h1 className="text-lg text-white font-bold">${tokenBalance?.symbol}</h1>
                
                    <div role="status" className="max-w-sm animate-pulse h-4 w-50">  isLoaded={!loadingStakeToken && !loadingTokenBalance}</div>
                    <p className="text-white">{tokenBalance?.displayValue}</p>
                    </div></div>
            </div> 
       
    )
}