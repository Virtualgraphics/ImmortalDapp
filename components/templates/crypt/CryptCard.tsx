import { FC } from 'react';
import { ThirdwebNftMedia, useContract, useNFT, Web3Button } from '@thirdweb-dev/react';

interface CryptCardProps {

    tokenId: number;
}


const CryptCard: FC<CryptCardProps> = ({ tokenId }) => {
    const founderAddress = "0x32E33F2f65eA383CFB6A92d3920e4C656A0159D4";
    const stakingAddressFounder = "0xc17EEC5b5b5Fb2672C8Da6FaC6d15e550Cfd858d";

const { contract: founderContract } = useContract ( founderAddress, );
const { contract: stakingContractFounder} = useContract (stakingAddressFounder);
const { data: nft } = useNFT (founderContract, tokenId);

async function withdraw(nftId: string) {
    await stakingContractFounder?.call("withdraw", [nftId]);
}

return (

<>

{ nft && (

<div>
<h3> {nft.metadata.name}</h3>
{nft.metadata && (
 
 <ThirdwebNftMedia
 metadata={nft.metadata}
  />

)}

<Web3Button

contractAddress='stakingAddressFounder'
action= {() => withdraw (nft.metadata.id) }
>Awaken Vampire</Web3Button>

</div>

)}

</>

)

}

export default CryptCard;