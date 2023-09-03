import React from "react";
import { NFT } from "@thirdweb-dev/sdk";
import { 
    MARKETPLACE_ADDRESS, 
    NFT_COLLECTION_ADDRESS 
} from "../../const/addresses";
import { ThirdwebNftMedia, useContract, useValidDirectListings,  } from "@thirdweb-dev/react";

import Spinner from "../layouts/Spinner";

type Props = {
    nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
    const  {contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const { data: directListing, isLoading: loadingDirectListing } = 
        useValidDirectListings(marketplace, {
            tokenContract: NFT_COLLECTION_ADDRESS,
            tokenId: nft.metadata.id,
        });

    //Add for auciton section
  

    return (
        <div className="flex flex-col bg-red-900 items-center p-4 rounded-2xl border-yellow-100 border" >
            <div className="box-content rounded-2xl overflow-hidden pb-4">
                <ThirdwebNftMedia metadata={nft.metadata} height={"100%"} width={"100%"} />
            </div>
            <p className="text-sm text-white">Token ID #{nft.metadata.id}</p>
            <p className="font-semibold text-yellow-100 text-lg">{nft.metadata.name}</p>

            <div className="box-content">
                {loadingMarketplace || loadingDirectListing ? (
                    <Spinner></Spinner>
                ) : directListing && directListing[0] ? (
                    <div className="box-content">
                        <div className="flex flec-col">
                            <p className="text-sm py-4 text-white">Price</p>
                            <p className="text-sm">{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</p>
                        </div>
                    </div>
               
                ) : (
                    <div className="box-content">
                       <div className="flex flex-col">
                       <p className="text-sm text-white text-center py-2">Price</p>
                       <p className="text-sm text-white text-center">Not Listed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};