
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import NFTGrid from "../../components/NFTmarketplace/NFTGrid";
import SaleInfo from "../../components/NFTmarketplace/SaleInfo";
import MarketNav from "./MarketNav";

export default function Sell() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();

    return (
        <div className="w-full p-4">
            <MarketNav/>
     
<h1 className="text-yellow-100 text-3xl font-Jost text-center py-4">Sell NFTs</h1>
<p className="text-white text-lg font-Jost text-center">Sell NFTs from the Immortal Coil Founders Collection.</p>
            {!selectedNFT ? (
                <NFTGrid
                    data={data}
                    isLoading={isLoading}
                    overrideOnclickBehavior={(nft) => {
                        setSelectedNFT(nft);
                    }}
                    emptyText={"You don't own any NFTs yet from this collection."}
                />
            ) : (
                <div className="flex justify-items-center my-4">
                    <div  className="w-3/4" >
                        <div className="grid grid-col-2 gap-6 p-5" >
                            <ThirdwebNftMedia
                                metadata={selectedNFT.metadata}
                                width="100%"
                                height="100%"
                            />
                            <div className="flex flex-row py-4">
                                <div className="justify-end" >
                                    <button
                                        onClick={() => {
                                            setSelectedNFT(undefined);
                                        }}
                                    >X</button>
                                </div>
                                <h1>{selectedNFT.metadata.name}</h1>
                                <SaleInfo
                                    nft={selectedNFT}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}