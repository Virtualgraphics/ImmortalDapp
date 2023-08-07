import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="text-yellow-100 mb-1 text-2xl  tracking-wide uppercase md:mb-2 font-Metamorphous">
         Immortal RPG Game and NFT Collection
          </p>
          <p className="text-base  text-white md:text-lg">
       Collect NFTs and tokens to use in our games, animes and webtoons. Create a community ecosystem that entertains and rewards.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div >
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/immortal_game.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <p className=" flex items-center justify-center m-auto text-yellow-100 mb-2 text-lg  leading-none sm:text-2xl font-Metamorphous">
              IMMORTAL COIL RPG
            </p>
            <p className="text-white text-center justify-center ">
            Play the fun and immersive Immortal RPG game on your PC, the web or on your mobile device.
            </p>

            <div className=" flex items-center justify-center py-4">
            <Link href="/games">
            <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-10  px-4 rounded mt-1">
  Find out more
</button></Link></div>



          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/immortal_defiNEW.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="flex items-center justify-center m-auto text-yellow-100 mb-2 text-lg  leading-none sm:text-2xl font-Metamorphous">
             IMMORTAL COIL DEFI
            </h5>
            <p className="text-white text-center ">
            Hunt down innocent victims and level up your blood level by drinking their blood. 
            </p>
            <div className=" flex items-center justify-center py-4">
            <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-10  px-4 rounded mt-1">
 Coming soon
</button> </div>
          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-2xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/immortal_webtoon.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="flex items-center justify-center m-auto text-yellow-100 mb-2 text-lg  leading-none sm:text-2xl font-Metamorphous">
              IMMORTAL COIL WEBTOON
            </h5>
            <p className="text-white text-center">
            Read the exciting story of Kai's battle as an immortal Vampire and earn tokens by participating.
            </p>
            <div className=" flex items-center justify-center py-4">
            
            <button className="bg-red-950 hover:bg-black text-yellow-200  w-40 h-10  px-4 rounded mt-1">
  Coming soon
</button> </div>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;