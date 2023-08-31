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
        <div className="bg-red-500 text-center rounded-2xl p-4 mt-4 max-w-md">
            <h1 className="text-white">Congratulations!</h1>
            <p className="text-white">You have answered correctly.</p>
            <Web3Button
                contractAddress={PRIZE_NFT_CONTRACT_ADDRESS}
                action={() => mintWithSignature()}
            >Claim NFT Prize</Web3Button>
        </div>
    );
};

export default NftClaim;