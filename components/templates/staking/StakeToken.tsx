
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";


export default function StakeToken() {

    const STAKE_TOKEN_ADDRESSES = "0x9798CDb5685622624165E7DF4E7613A46c4Cf1a0";
    const address = useAddress();
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(STAKE_TOKEN_ADDRESSES);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);
    
    return (
        <div className="p-5">
          <div className="grid grid-rows-2 gap-4">

          <h1 className="text-white">Stake Token</h1>
          isLoaded={!loadingStakeToken && !loadingTokenBalance}
                </div>


                <div>
                  isLoaded={!loadingStakeToken && !loadingTokenBalance}
                    <p className="text-white">{tokenBalance?.displayValue}</p>
                    
                   
            </div>
        </div>
    )
}