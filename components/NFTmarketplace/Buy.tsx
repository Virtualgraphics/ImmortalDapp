import React from "react";
import MarketNav from "./MarketNav";

import NFTGrid from "../../components/NFTmarketplace/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <div className="w-full p-4 justify-center mx-auto ">

            <MarketNav/>
            <h1 className="text-yellow-100 text-3xl font-Jost text-center py-4">Buy NFTs</h1>
            <p className="text-white text-lg font-Jost text-center">Browse and buy NFTs from the Immortal Coil Founders Collection.</p>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />
        </div>
    )
};