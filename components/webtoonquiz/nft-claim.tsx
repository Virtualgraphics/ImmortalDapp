import { Web3Button, useAddress, useContract } from "@thirdweb-dev/react";
import {PRIZE_NFT_CONTRACT_ADDRESS} from "../../const/addresses";


function NftClaim() {
    const address = useAddress();

    const {
        contract: prizeContract
    } = useContract(PRIZE_NFT_CONTRACT_ADDRESS);
    
    const mintWithSignature = async () => {
        try {
            const signedPayloadReq = await fetch(`/api/server`, {
                method: "POST",
                body: JSON.stringify({
                    claimerAddress: address
                })
            });

            const json = await signedPayloadReq.json();

            if (!signedPayloadReq.ok) {
                alert(json.error);
            }

            const signedPayload = json.signedPayload;

            const prize = await prizeContract?.erc721.signature.mint(signedPayload);

            alert("NFT prize claimed!");
            return prize;
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="bg-red-900 text-center rounded-2xl p-8 m-8 max-w-md">
            <h1 className="text-yellow-100 text-3xl pb-4">Congratulations!</h1>
            <p className="text-white">You have answered correctly.</p>
            <div className="my-8">
            <Web3Button
                contractAddress={PRIZE_NFT_CONTRACT_ADDRESS}
                action={() => mintWithSignature()}
            >Claim Episode 1 NFT</Web3Button></div>
        </div>
    );
};

export default NftClaim;