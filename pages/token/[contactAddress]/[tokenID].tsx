import Image from 'next/image'
import { MediaRenderer, ThirdwebNftMedia, Web3Button, useContract, useMinimumNextBid, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import { 
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS 
} from "../../../const/addresses";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Spinner from '../../../components/layouts/Spinner';

type Props = {
    nft: NFT;
    contractMetadata: any;
};

export default function TokenPage({ nft, contractMetadata }: Props) {
    const { contract: marketplace, isLoading: loadingMarketplace } = 
        useContract(
            MARKETPLACE_ADDRESS, 
            "marketplace-v3"
        );

    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

    const { data: directListing, isLoading: loadingDirectListing } = 
        useValidDirectListings(marketplace, {
            tokenContract: NFT_COLLECTION_ADDRESS, 
            tokenId: nft.metadata.id,
        });

        async function buyListing() {
            let txResult;
   
    if (directListing?.[0]){
            txResult = await marketplace?.directListings.buyFromListing(
                directListing[0].id,
                1
            );
        } else {
            throw new Error("No listing found");
        }

        return txResult;
    }

    
    
    return (
        <div className="w-full p-5 -my-5">
            <div className="grid grid-cols-2 gap-6">
                <div className=" flex flex-rows py-6">
                    <div className="rounded-2xl overflow-hidden">
                       isLoaded={!loadingMarketplace && !loadingDirectListing}
                            <ThirdwebNftMedia
                                metadata={nft.metadata}
                                width="100%"
                                height="100%"
                            />
                        
                    </div>
                    <div className="box-content">
                    <p className="font-bold"> Description:</p>
                    <p className="font-bold">{nft.metadata.description}</p>
                    </div>
                    <div className="box-content">
                        <p className="text-white font-semibold font-Jost">Traits:</p>
                        <div className="grid grid-cols-2 gap-4">
                        {Object.entries(nft?.metadata?.attributes || {}).map(
                        ([key, value]) => (
                            <div key={key} className="flex flex-col items-center justify-items-center border rounded-2xl p-2">
                               
                                
                                </div>
                        )
                        )}
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className=" flex flex-rows py-6">
                    {contractMetadata && (
                        <div className="flex items-center">
                            <div className="box-content rounded-2xl overflow-hidden mr-4" >
                                <MediaRenderer
                                    src={contractMetadata.image}
                                    height="32px"
                                    width="32px"
                                />
                            </div>
                            <p className="text-white font-semibold">{contractMetadata.name}</p>
                        </div>
                    )}
                    <div className="box-content mx-2" >
                        <p className="text-3xl font-bold">{nft.metadata.name}</p>
                        <Link
                            href={`/profile/${nft.owner}`}
                        >
                            <div className="flex flex-row items-center">

                            <Image
              className="mr-4 w-6 h-6"
              src="/assets/avatar.jpg"
              alt="BAt Divider"
              width={48}
              height={48}
            />
            

                               



                                <p className="text-sm text-white" >{nft.owner.slice(0,6)}...{nft.owner.slice(-4)}</p>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="flex flex-row bg-white p-4 rounded-2xl">
                        <p className="text-gray-700 ">Price:</p>
                        isLoaded={!loadingMarketplace && !loadingDirectListing}
                            {directListing && directListing[0] ? (
                                <p className="text-2xl text-bold">
                                    {directListing[0]?.currencyValuePerToken.displayValue}
                                    {" " + directListing[0]?.currencyValuePerToken.symbol}
                                </p>
                            
                            ) : (
                                <p className="text-2xl text-bold">Not for sale</p>
                            )}
                       
                       
                        
                    </div>
                   isLoaded={!loadingMarketplace || !loadingDirectListing}
                   <div className=" flex flex-rows py-4">
                            <Web3Button
                                contractAddress={MARKETPLACE_ADDRESS}
                                action={async () => buyListing()}
                                isDisabled={(!directListing || !directListing[0])}
                            >Buy at asking price</Web3Button>
                            
                        </div>
                        </div>
                </div>
                
              
        
    )
};

export const getStaticProps: GetStaticProps = async (context) => {
    const tokenId = context.params?.tokenId as string;
  
    const sdk = new ThirdwebSDK("binance-testnet");
  
    const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);
  
    const nft = await contract.erc721.get(tokenId);
  
    let contractMetadata;
  
    try {
      contractMetadata = await contract.metadata.get();
    } catch (e) {}
  
    return {
      props: {
        nft,
        contractMetadata: contractMetadata || null,
      },
      revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    };
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const sdk = new ThirdwebSDK("binance-testnet");
  
    const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);
  
    const nfts = await contract.erc721.getAll();
  
    const paths = nfts.map((nft) => {
      return {
        params: {
          contractAddress: NFT_COLLECTION_ADDRESS,
          tokenId: nft.metadata.id,
        },
      };
    });
  
    return {
      paths,
      fallback: "blocking", // can also be true or 'blocking'
    };
  };