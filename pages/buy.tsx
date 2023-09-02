import React from "react";

import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <div className="m-full p-4">
            <h1 className="text-yellow-100 text-3xl font-Jost">Buy NFTs</h1>
            <p className="text-white text-lg font-Jost">Browse and buy NFTs from this collection.</p>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />
        </div>
    )
};