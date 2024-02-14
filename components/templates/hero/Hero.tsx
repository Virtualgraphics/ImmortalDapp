import Link from 'next/link'
import Image from 'next/image'



const Hero = () => {
    return (

      <>
      <div className="bg-red-800/20 px-4 pt-10 pb-4 mx-auto sm:max-w-xl md:max-w-full  lg:w-3/4 md:px-24 lg:px-8 lg:py-10 rounded-3xl mt-10 h-full" >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            
            <h1 className="mb-4 text-4xl  leading-none text-yellow-100 font-Metamorphous" >
              IMMORTAL COIL VAMPIRES
              <br className="hidden md:block" /> </h1>

              <h5 className="mb-4 text-2xl  leading-none text-white font-Jost" >
              Very first Vampire NFT Mint on the Binance Smart Chain
              <hr className="my-8 border-gray-300" />
            </h5>
            <p className="mb-6 text-white text-xl font-Jost">
            Immortal Coil is Gothic Vampire Soulslike RPG and manga webtoon. Kai is a royal, immortal vampire who is being targeted by the soul-eating demon Necrocorvo. The evil beast is holding Kai's consort Cirice captive in the castle Frosthaven. Kai has to go on a quest through Therondia to confrom the powerful demon and be reunited with his beloved without running out of blood. Use this early asset in gaining more assets in the Immortaldapp.
            </p>
           
            <p className="mb-6 text-white text-xl font-Jost">

Only 30 ERC-721 NFTs exclusively available on BNB!
            </p>
          
<div className='grid gap-4 grid-cols-2 align-middle self-auto mt-10'>
         

<Link href="/nftmint">
<button className="bg-red-800 hover:bg-red-900 text-yellow-200  w-64 h-11  px-4 rounded mt-1">
            GO TO MINT PAGE</button>
            </Link>


           </div>

           </div>


          <div >
            <Image
              className="object-cover  "
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