import React from "react";
import { NFT } from "@thirdweb-dev/sdk";
import { 
    MARKETPLACE_ADDRESS, 
    NFT_COLLECTION_ADDRESS 
} from "../../const/addresses";
import { ThirdwebNftMedia, useContract, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";

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
    const { data: auctionListing, isLoading: loadingAuction} = 
        useValidEnglishAuctions(marketplace, {
            tokenContract: NFT_COLLECTION_ADDRESS,
            tokenId: nft.metadata.id,
        });

    return (
        <div className="flex flex-col bg-white items-center p.4 rounded-2xl border-gray-500 border" >
            <div className="box-content rounded-2xl overflow-hidden">
                <ThirdwebNftMedia metadata={nft.metadata} height={"100%"} width={"100%"} />
            </div>
            <p className="text-sm text-gray-800">Token ID #{nft.metadata.id}</p>
            <p className="font-semibold text-lg">{nft.metadata.name}</p>

            <div className="box-content">
                {loadingMarketplace || loadingDirectListing || loadingAuction ? (
                    <Spinner></Spinner>
                ) : directListing && directListing[0] ? (
                    <div className="box-content">
                        <div className="flex flec-col">
                            <p className="text-sm">Price</p>
                            <p className="text-sm">{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</p>
                        </div>
                    </div>
                ) : auctionListing && auctionListing[0] ? (
                    <div className="box-content">
                        <div className="flex flec-col">
                        <p className="text-sm">Minimum Bid</p>
                        <p className="text-sm">{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</p>
                        </div>
                    </div>
                ) : (
                    <div className="box-content">
                       <div className="flex flec-col">
                       <p className="text-sm">Price</p>
                       <p className="text-sm">Not Listed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};