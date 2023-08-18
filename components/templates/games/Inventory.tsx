import { MediaRenderer, Web3Button, useAddress, useContract } from '@thirdweb-dev/react';
import { NFT } from '@thirdweb-dev/sdk';
import { STAKING_ADDRESS, MONSTERS_ADDRESS } from "../../../const/addresses"; 
import Link from 'next/link';


type Props = {
    nft: NFT[] | undefined;
};

export function Inventory({ nft }: Props) {
    const address = useAddress();
    const { contract: toolContract } = useContract(MONSTERS_ADDRESS);
    const { contract: stakingContract } = useContract(STAKING_ADDRESS);

    async function stakeNFT(id: string) {
        if (!address) {
            return;
        }

        const isApproved = await toolContract?.erc1155.isApproved(
            address,
            STAKING_ADDRESS,
        );

        if (!isApproved) {
            await toolContract?.erc1155.setApprovalForAll(
                STAKING_ADDRESS,
                true,
            );
        }
        await stakingContract?.call("stake", [id, 1]);
    };

    if(nft?.length === 0) {
        return (
            <div className='w-max'>
                <p className='text-white text-xl'>No tools.</p>
                <Link
                    href="/nftmint"
                >
                    <button className='rounded-2xl bg-black text-white p-4'>Shop Tool</button>
                </Link>
            </div>
        )
    }

    return (
        <div className='grid gap-4 grid-cols-3' >
            {nft?.map((nft) => (
                <div className='py-4 m-auto justify-center' key={nft.metadata.id} >
                    <div className='py-4'>
                    <MediaRenderer 
                        src={nft.metadata.image} 
                        height="100%"
                        width="100%"
                    />
                    <p className='text-white text-xl py-4'>{nft.metadata.name}</p>
                    <Web3Button
                        contractAddress={STAKING_ADDRESS}
                        action={() => stakeNFT(nft.metadata.id)}
                    >Boost</Web3Button>
                    </div>
                </div>
            ))}
        </div>
    );
};