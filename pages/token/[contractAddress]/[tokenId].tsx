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
import MarketNav from '../../../components/NFTmarketplace/MarketNav';

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

        <div>
        <MarketNav/>
        <div className="w-4/5 mt-8 justify-center m-auto flex bg-yellow-400 ">

          

            <div className="grid grid-cols-2 gap-4">


                <div className="justify-center mx-auto bg-black w-full">


                    <div className="rounded-2xl  justify-center m-auto ">
                       isLoaded={!loadingMarketplace && !loadingDirectListing}
                            <ThirdwebNftMedia
                                metadata={nft.metadata}
                                width="80%"
                                height="80%"
                            /></div>
                          </div>

                          <div>

                    
                


                <div className=" w-96  bg-blue-500">
                    {contractMetadata && (
                        <div className="flex items-center bg-blue-600">
                            
                          
                            <p className="text-white font-semibold font-Jost pb-2">{contractMetadata.name}</p>
                        </div>
                    )}
                    <div className="box-content " >
                        <p className="text-2xl font-bold font-Jost pb-2">{nft.metadata.name}</p>
                        <Link
                            href={`/profile/${nft.owner}`}
                        >
                            <div className="flex flex-row items-center pb-4">

                            <Image
              className="mr-4 w-6 h-6 rounded-full"
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
                        <p className="text-white ">Price:</p>
                        isLoaded={!loadingMarketplace && !loadingDirectListing}
                            {directListing && directListing[0] ? (
                                <p className="text-2xl text-bold text-white">
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
                            >Buy now</Web3Button>
                         
                        </div>
                       
                       
                        </div>
                </div>

               
                
                <div className="box-content bg-green-500 py-2">
                <p className="font-bold text-white"> Description:</p>
                <p className="font-bold text-white">{nft.metadata.description}</p>
                </div>






                
                            
               

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