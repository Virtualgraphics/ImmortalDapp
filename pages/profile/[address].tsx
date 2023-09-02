
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components/NFTGrid";

export default function ProfilePage() {
    const router = useRouter();
    const {contract: nftCollection} = useContract(NFT_COLLECTION_ADDRESS);

    const { contract: marketplace} = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");  

    const {data: ownedNfts, isLoading: loadingOwnedNfts} = useOwnedNFTs(
        nftCollection,
        router.query.address as string
    );
        console.log(ownedNfts);
    return (
        <div className="w-full p-4">
            <h1 className="text-white text-2xl font-Jost">{"Owned NFT(s)"}</h1>
            <p className="text-white text-lg font-Jost">Browse and manage your NFTs from this collection.</p>
            <NFTGrid 
                data={ownedNfts}
                isLoading={loadingOwnedNfts}
                emptyText={"You don't own any NFTs yet from this collection."}
            />
        </div>
    )
}