import { MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useNFT } from "@thirdweb-dev/react";
import { STAKING_ADDRESS, MONSTERS_ADDRESS } from "../../../const/addresses";
import { ethers } from "ethers";


interface EquippedProps {
    tokenId: number;
};

export const Boosted = (props: EquippedProps) => {
    const address = useAddress();

    const { contract: toolContract } = useContract(MONSTERS_ADDRESS);
    const { data: nft } = useNFT(toolContract, props.tokenId);

    const { contract: stakingContract } = useContract(STAKING_ADDRESS);

    const { data: claimableRewards } = useContractRead(
        stakingContract,
        "getStakeInfoForToken",
        [props.tokenId, address]
    );

    return (
        <div  p-2>
            {nft && (
                <div className="p-5 mx-auto justify-center">
                    <div className='flex mx-auto justify-center'>
                        <div className="box-content">
                            <MediaRenderer
                                src={nft.metadata.image}
                                height="100%"
                                width="100%"
                            />
                        </div>
                        <div className="flex">
                            <p className='text-2xl text-bold text-white'>{nft.metadata.name}</p>
                            <p className=" text-base text-white">Boosted: {ethers.utils.formatUnits(claimableRewards[0], 0)}</p>
                            <Web3Button
                                contractAddress={STAKING_ADDRESS}
                                action={(contract) => contract.call("withdraw", [props.tokenId, 1])}
                            >Unboost</Web3Button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-xl text-white">Claimable $BLOOD:</p>
                        <p className="text-base text-white">{ethers.utils.formatUnits(claimableRewards[1], 18)}</p>
                        <Web3Button
                            contractAddress={STAKING_ADDRESS}
                            action={(contract) => contract.call("claimRewards", [props.tokenId])}
                        >Claim $BLOOD</Web3Button>
                    </div>
                </div>
            )}
        </div>
    )
};