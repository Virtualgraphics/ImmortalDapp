import Link from 'next/link'
import Image from 'next/image'
import WebtoonSlider from '../webtoonslider/WebtoonSlider';

const Webtoon = () => {
    return (
      
      <div className="justify-center pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
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
         Claim your NFTs below and play the Immortal Coil Games and read the Webtoons. 
          </p>
          </div>
          

<div className='py-4'>
<WebtoonSlider />
</div>

<div className='w-full h-64 bg-red-950/60 rounded-3xl py-6 '>
<p className='text-white text-center text-4xl'>

QUIZ
</p>
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
          className="m-auto "
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
  Read now
</button></div>

</div>

 <div className='bg-red-950/50 rounded-2xl py-8 px-8'>

 <div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto "
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
  Read now
</button></div>

 </div>

<div className='bg-red-950/50 rounded-2xl py-8 px-8'>

<div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto "
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
  Read now
</button></div>

</div>
</div>

</div>
</div>

    );
  };

  export default Webtoon;