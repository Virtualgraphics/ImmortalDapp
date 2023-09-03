import Link from 'next/link'

import Image from 'next/image'

const MarketPlace = () => {
 
    return (

        <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            
    
              <div className="m-auto w-96 py-2">

              <Image
              className="m-auto w-96 py-2"
              src="/assets/bat_divider.svg"
              alt="Bat Divider"
              width={1260}
              height={750}
            />
              </div>
        
            <h2 className="m-auto pb-8 text-3xl tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-3">
         MARKETPLACE
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Jost">
            List, sell and buy your Vampire NFTs and collectibles in the Immortal Coil marketplace
            </p>
           
          </div>

          <div className=" flex items-center justify-center py-4">
            <Link href="/buy">
            <button className="bg-red-950 hover:bg-black text-yellow-100  w-40 h-12 px-4 rounded  text-xl text-Jost">
 Shop NFTs
</button></Link></div>
</div>


  );
};

export default MarketPlace;