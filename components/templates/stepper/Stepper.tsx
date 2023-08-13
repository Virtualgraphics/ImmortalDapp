import Link from 'next/link'
import Image from 'next/image'

const Stepper = () => {
    return (
      <div className="justify-items-center mx-auto px-4 py-3 rounded-3xl bg-red-950/60 sm:max-w-xl md:max-w-full lg:w-7/12 md:px-8 lg:px-8 lg:py-10">



<ol className="mx-auto justify-items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
    <li className="flex items-center text-yellow-100 dark:text-yellow-a00 space-x-2.5">

        <span className="flex items-center justify-center w-12 h-12 border border-yellow-100 rounded-full shrink-0 dark:border-yellow-100">
            1
        </span>
        <span>
            <h3 className="font-2xl leading-tight font-Jost">Mint Founder NFT</h3>
            <p className="text-sm font-Jost">Mint a vampire NFT, one per wallet</p>
        </span>
    </li>
    <li className="flex items-center text-yellow-100 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-12 h-12 border border-yellow-100 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h3 className="font-2xl leading-tight font-Jost">Claim Tokens</h3>
            <p className="text-sm font-Jost">Claim IMRTL and BLOOD tokens on the token page</p>
        </span>
    </li>
    <li className="flex items-center text-yellow-100 dark:text-gray-400 space-x-2.5">
        <span className="flex items-center justify-center w-12 h-12 border border-yellow-100 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h3 className="font-2xl leading-tight font-Jost">Start Game with NFT</h3>
            <p className="text-base font-Jost">You need to own an NFT to play any game</p>
        </span>
    </li>
</ol>






      </div>
      );
    };
  
    export default Stepper;    