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

    const nftDropContractAddress = "0x32E33F2f65eA383CFB6A92d3920e4C656A0159D4";
    const stakingContractAddress = "0xc17EEC5b5b5Fb2672C8Da6FaC6d15e550Cfd858d";
    const  tokenContractAddress = "0x64D60B48B5E9Ae1D0889b6c397A73C0d3c540c1A";

    const { contract } = useContract(nftDropContractAddress, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div className="mt-4 w-11/12">
            {nft.metadata && (
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className="w-full max-h-80 rounded-2xl"
              />
            )}
            <h3>{nft.metadata.name}</h3>
            <Web3Button
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress}
            >
              Withdraw
            </Web3Button>
          </div>
        )}
      </>
    );
  };
  export default NFTCard;