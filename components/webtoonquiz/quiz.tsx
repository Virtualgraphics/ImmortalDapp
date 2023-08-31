import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/addresses";
import { useState } from "react";


export default function Quiz() {
    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: quiz,
        isLoading: isQuizLoading
    } = useContractRead(
        contract,
        "getQuiz"
    );

    const [answerIndex, setAnswerIndex] = useState<number>(0);


    return (
        <div className="bg-red-900 text-center rounded-2xl p-8 m-8 max-w-md">
            {!isQuizLoading ? (
            <div className="text-white">
                <h2>{quiz[0]}</h2>
                {quiz[1].map((answer: string, index: number) => (
                <div 
                    key={index}
                    className="m-6 py-4 rounded-2xl bg-black text-white border-yellow-100 border"
                    onClick={() => {
                    setAnswerIndex(index);
                    }}
                    style={{
                    borderColor: answerIndex === index ? "yellow" : "white"
                    }}
                >
                    <p>{answer}</p>
                </div>
                ))}
                <div className="py-4">
                <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.call(
                    "answerQuestion",
                    [answerIndex]
                )}
                >Submit Answer</Web3Button></div>
            </div>
            ) : (
            <p>Loading...</p>
            )}
        </div>
    );
};