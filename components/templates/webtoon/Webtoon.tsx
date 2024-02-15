import Link from 'next/link'
import Image from 'next/image'
import WebtoonSlider from '../webtoonslider/WebtoonSlider';
import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Quiz from '../../webtoonquiz/quiz';
import NftClaim from '../../webtoonquiz/nft-claim';

const Webtoon = () => {

  const CONTRACT_ADDRESS= "0x5fF6c223928A3c0c1d742917EC1F26467c36Da62";

    const address = useAddress();
  
    const {
      contract
    } = useContract(CONTRACT_ADDRESS);
  
    const {
      data: hasAnswered,
      isLoading: isHasAnsweredLoading
    } = useContractRead(
      contract,
      "hasAnswered",
      [address]
    );
  
    const {
      data: isCorrect,
      isLoading: isIsCorrectLoading
    } = useContractRead(
      contract,
      "isCorrect",
      [address]
    );
    

    return (
      
      <div className="justify-center pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-8">
      <div className=" grid max-w-screen-lg row-gap-5 sm:text-center sm:mx-auto">
        

          <div className="m-auto w-96 py-2">
          <Image
          className="m-auto w-96 py-2"
          src="/assets/bat_divider.svg"
          alt="Bat Divider"
          width={1260}
          height={750}
        />
          </div>

          <h2 className="m-auto mb-4 text-3xl tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-5">
          IMMORTAL COIL WEBTOONS
          </h2>
          <hr className="w-4/6 mx-auto  border-yellow-200" />
          <p className="text-base text-white lg:text-lg  md:text-lg sm:px-4 py-2 font-Jost">
         Claim your Bonus Signature NFT below by answering the question correctly and come back to read the weekly webtoons. 
          </p>
          </div>
          

<div className='my-8 rounded-3xl border border-yellow-100'>

<Image
          className="m-auto rounded-3xl"
          src="/assets/webtoon_cover.jpg"
          alt="Webtoon Cover"
          width={1260}
          height={750}
        />

</div>

<div className='w-full  bg-black rounded-3xl p-8 '>


<div className='m-auto justify-center pb-4'>
<h1 className="text-yellow-100 text-center text-xl ">Answer the quiz question below correctly to claim your special Signature Vampire NFT.</h1>
            <p className="text-center py-4">You only have one shot. If you choose the wrong answer, you will not get another try.</p>
            </div> 



<div className='grid grid-cols-2 gap-8'>


<div className="w-full flex flex-col justify-center ">
 
      {!isHasAnsweredLoading ? (
        !hasAnswered ? (
          <>
            
            
            <Quiz />
          </>
        ) : (
          !isIsCorrectLoading &&
            isCorrect ? (
              <NftClaim />
            ) : (
              <div className="bg-red-800 text-center rounded-2xl p-4 mt-4 max-w-md ">
                <h1 className="text-white">Sorry!</h1>
                <p className="text-white">You have answered incorrectly.</p>
              </div>
            )
        )
      ) : (
        <p className='text-center'>Checking quiz status...</p>
      )}
    </div> 

    <div className="w-full bg-red-900 p-8 rounded-2xl ">

    <div className="m-auto w-80 ">
          <Image
          className="border border-yellow-100 rounded-2xl"
          src="/assets/immortal_coil_bonus01.jpg"
          alt="Signature NFT"
          width={577}
          height={750}
        />
          </div>

<p className='text-white text-center pt-4'>Collect all 6 vampire signature bonus NFTs and redeem them for an exclusive Founders NFT!</p>

    </div>



</div>

</div>











<div className='w-full py-8'>
<p className="text-center text-base text-yellow-100 lg:text-xl  md:text-lg sm:px-4 py-2 font-Jost">Check out upcoming episodes of the IMMORTAL COIL webtoon. 
          </p>
</div>

<div className='m-auto justify-center'>
<div className="grid grid-cols-3 gap-8 ">

  <div className='bg-red-950/50 rounded-2xl py-8 px-8'>

  <div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto border border-black rounded-2xl"
          src="/assets/thumb_ep02.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
    </div>
    <h1 className='text-yellow-100 font-Jost text-lg text-left pb-4'>EPISODE 2: Baptised by Blood</h1>
    <p className='text-white text-left font-Jost '> Kai gets initiated into the coven at Frosthaven and becomes the most powerfull vampire in Therondia. </p>
 

    <div className=" flex items-center justify-center pt-4">
            
            <button className="bg-black hover:bg-red-700 text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button></div>

</div>

 <div className='bg-red-950/50 rounded-2xl py-8 px-8'>

 <div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto border border-black rounded-2xl"
          src="/assets/thumb_ep03.jpg"
          alt="Episode 3"
          width={640}
          height={480}
        />
    </div>
    <h1 className='text-yellow-100 font-Jost text-lg text-left pb-4 tracking-tighter'>EPISODE 3: Sword of Skjallgrim</h1>
    <p className='text-white text-left font-Jost '> Kai gets initiated into the coven at Frosthaven and becomes the most powerfull vampire in Therondia. </p>
 

    <div className=" flex items-center justify-center pt-4">
            
            <button className="bg-black hover:bg-red-700 text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button></div>

 </div>

<div className='bg-red-950/50 rounded-2xl py-8 px-8'>

<div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto border border-black rounded-2xl "
          src="/assets/thumb_ep04.jpg"
          alt="Episode 4"
          width={640}
          height={480}
        />
    </div>
    <h1 className='text-yellow-100 font-Jost text-lg text-left pb-4'>EPISODE 4: Raising Hell</h1>
    <p className='text-white text-left font-Jost '> Kai gets initiated into the coven at Frosthaven and becomes the most powerfull vampire in Therondia. </p>
 

    <div className=" flex items-center justify-center pt-4">
            
            <button className="bg-black hover:bg-red-700 text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button></div>

</div>
</div>

</div>


<div className="py-12 w-full justify-items-center mx-auto">

  <h1 className="text-lg text-center text-white font-Jost py-2">Contract Addresses on Bscscan:</h1>
            <p className="text-sm text-center text-white font-Jost px-2">
             Signature Bonus NFTs: Coming soon
            </p>
            </div> 
      </div>









    );
  };

  export default Webtoon;