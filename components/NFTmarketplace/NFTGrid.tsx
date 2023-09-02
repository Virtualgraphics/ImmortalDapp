import type {NFT as NFTType } from "@thirdweb-dev/sdk";
import React from "react";
import NFT from "./NFT";
import Link from "next/link";
import { NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import Spinner from "../layouts/Spinner";

type Props = {
    isLoading: boolean;
    data: NFTType[] | undefined;
    overrideOnclickBehavior?: (nft: NFTType) => void;
    emptyText?: string;
};

export default function NFTGrid({
    isLoading,
    data,
    overrideOnclickBehavior,
    emptyText = "No NFTs found",
}: Props) {
    return (
        <div className="grid grid-cols-4 gap-4 w-full p-2 my-4">
            {isLoading ? (
                [...Array(20)].map((_, index) => (
                    <Spinner key={index}  />
                ))
            ) : data && data.length > 0 ? (
                data.map((nft) => 
                    !overrideOnclickBehavior ? (
                        <Link
                            href={`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`}
                            key={nft.metadata.id}
                        >
                        <NFT nft={nft} />
                        </Link>
                    ) : (
                        <div
                            key={nft.metadata.id}
                            onClick={() => overrideOnclickBehavior(nft)}
                        >
                            <NFT nft={nft} />
                        </div>
                    ))
            ) : (
                <p>{emptyText}</p>
            )}
        </div>
        
    )
};