import Link from 'next/link'
import Image from 'next/image'



const Hero = () => {
    return (

      <>
      <div className="bg-red-800/20 px-4 py-10 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 rounded-3xl mt-10" >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            
            <h1 className="mb-4 text-4xl  leading-none text-yellow-100 font-Metamorphous" >
              IMMORTAL COIL
              <br className="hidden md:block" /> </h1>

              <h5 className="mb-4 text-2xl  leading-none text-white font-Jost" >
              Vampire Survival Game
              
            </h5>
            <p className="mb-6 text-white font-Jost">
            Kai, a royal and very old vampire, must rescue his made Vampire consort Cirice from the clutches of Necrocorvo at Frosthaven Castle and get enough blood to sustain himself. The game is using
            cutting edge blockchain technology in combination with a story-driven, 
            multi-player RPG Metaverse, elements of DeFi and visual novels.
            </p>
            <hr className="mb-5 border-gray-300" />
          
<div className='grid gap-4 grid-cols-2 align-middle self-auto mt-10'>
         

<Link href="/nftmint">
<button className="bg-red-800 hover:bg-red-900 text-yellow-200  w-40 h-10  px-4 rounded mt-1">
            Get Started</button>
            </Link>


           </div>

           </div>


          <div >
            <Image
              className="object-cover w-full h-56 rounded-3xl  sm:h-96 "
              src="/assets/immortal_mainIMAGE.png"
              alt="Main Image"
              width={1260}
              height={750}
            />


          </div>
        </div>
      </div>

      </>
    );
  };

  export default Hero;