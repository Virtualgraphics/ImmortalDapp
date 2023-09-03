import React from "react";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Web3Button, useContract, useCreateDirectListing } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";


type Props = {
    nft: NFTType;
};

type DirectFormData = {
    nftContractAddress: string;
    tokenId: string;
    price: string;
    startDate: Date;
    endDate: Date;
};




export default function SaleInfo({ nft }: Props) {

    const router = useRouter();

    const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

    const { mutateAsync: createDirectListing } = useCreateDirectListing(marketplace);

    async function checkAndProvideApproval() {
        
        const hasApproval = await nftCollection?.call(
            "isApprovedForAll",
            [nft.owner,
            MARKETPLACE_ADDRESS]
        );

        if (!hasApproval) {
            const txResult = await nftCollection?.call(
                "setApprovalForAll",
                [MARKETPLACE_ADDRESS,
                true]
            );

            if (txResult) {
                console.log("Approval provided");
            }
        }

        return true;
    }

    const { register: registerDirect, handleSubmit: handleSubmitDirect } = useForm<DirectFormData>({
        defaultValues: {
            nftContractAddress: NFT_COLLECTION_ADDRESS,
            tokenId: nft.metadata.id,
            price: "0",
            startDate: new Date(),
            endDate: new Date(),
        },
    });

    async function handleSubmissionDirect(data: DirectFormData) {
        await checkAndProvideApproval();
        const txResult = await createDirectListing({
            assetContractAddress: data.nftContractAddress,
            tokenId: data.tokenId,
            pricePerToken: data.price,
            startTimestamp: new Date(data.startDate),
            endTimestamp: new Date(data.endDate),
        });

        return txResult;
    }

    
    return (
     
                    <div className=" py-8">
                        <div className="box-content">
                            <p className="py-2 text-white font-Jost">Listing starts on:</p>

                            <input className="p-2 rounded-lg"
                                placeholder="Select Date and Time"
                             
                                type="datetime-local"
                                {...registerDirect("startDate")}
                            />

                            <p className="py-2 text-white font-Jost">Listing ends on:</p>
                            <input className="p-2 rounded-lg"
                                placeholder="Select Date and Time"
                               
                                type="datetime-local"
                                {...registerDirect("endDate")}
                            />
                        </div>
                        <div className="box-content">
                            <p className="text-lg font-Jost py-2">Price:</p>
                            <input className="p-2 rounded-lg"
                                placeholder="0"
                               
                                type="number"
                                {...registerDirect("price")}
                            />
                        </div>

                        <div className="pt-8">
                        <Web3Button
                            contractAddress={MARKETPLACE_ADDRESS}
                            action={async () => {
                                await handleSubmitDirect(handleSubmissionDirect)();
                            }}
                            onSuccess={(txResult) => {
                                router.push(`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`);
                            }}
                        >Create Direct Listing</Web3Button></div>
                    </div>
                 
                
                    
                
    )
}