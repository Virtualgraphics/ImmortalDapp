import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
 
  


  interface NFTCardProps {
    tokenId: number;
  }
  
  const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {

    const nftDropContractAddress = "0xD671735b14ddb2DA84433bf291f00355de068992";
    const stakingContractAddress = "0xc5F2F431A16Dc7A98Fbea377AAecb54101b79CA8";
    const  tokenContractAddress = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";

    const { contract } = useContract(nftDropContractAddress, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div className=" text-white font-semibold justify-center m-auto  ">
            {nft.metadata && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className="w-full max-h-48 justify-center m-auto"
              />
            )}
            <h3 className="py-2">{nft.metadata.name}</h3>
            <div className="pb-6">
            <Web3Button
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress}
            >
              Unstake
            </Web3Button></div>
          </div>
        )}
      </>
    );
  };
  export default NFTCard;