
import { 
    
    MediaRenderer, 
    Web3Button, 
    useActiveClaimCondition, 
    useContract } from "@thirdweb-dev/react";

import { NFT } from "@thirdweb-dev/sdk";
import { MONSTERS_ADDRESS } from "../../../const/addresses";
import { ethers } from "ethers";

type Props = {
    nft: NFT;
};

function MonsterNFT({ nft }: Props) {
    const { contract } = useContract(MONSTERS_ADDRESS);
    const { data, isLoading } = useActiveClaimCondition(
        contract,
        nft.metadata.id, // Token ID required for ERC1155 contracts here.
      );

    return (

        <div key={nft.metadata.id} className='mx-auto justify-items-center py-12'>
            <div className="mask mask-hexagon ">
            <MediaRenderer 
                src={nft.metadata.image}
                height="100%"
                width="100%"
        
            /></div>
            <div className=" text-yellow-100 text-2xl text-bold  text-center  pt-4 ">{nft.metadata.name}</div>
            {!isLoading && data ? (
                <div className="text-white text-center py-2">Cost: {ethers.utils.formatEther(data?.price)}{" " + data?.currencyMetadata.symbol}</div>
            ) :(
                <div className='text-xl text-white'>Loading...</div>
            )}

<div className='py-4 flex items-center justify-center m-auto'>
            <Web3Button 
            
        
                contractAddress={MONSTERS_ADDRESS}
                action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
            >Buy</Web3Button>
</div>

        </div>
    )
};

export default MonsterNFT