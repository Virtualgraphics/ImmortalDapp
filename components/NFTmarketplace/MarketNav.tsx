import Image from 'next/image'
import Link from 'next/link'

const MarketNav = () => {

    return (

      <div className='w-1/2 bg-black rounded-xl mt-20 mx-auto justify-center flex p-8'>
<div className='grid grid-cols-3 gap-8'>

<div>
<Link href="/buy"><button className='rounded-lg bg-red-800 hover:bg-red-950 text-yellow-100 p-2 w-24'>Buy NFT</button></Link>

</div>

<div>
<Link href="/sell"><button className='rounded-lg bg-red-800 hover:bg-red-950 text-yellow-100 p-2 w-24'>Sell NFT</button></Link>

</div>

<div className='grid grid-cols-2 gap-6'>

<div>
<h1 className='text-white text-lg py-2'>Your NFTs</h1>
</div>

<div>
<Link href="/profile">

<Image
              className="rounded-full"
              src="/assets/avatar.jpg"
              alt="Avatar"
              width={48}
              height={48}
            /></Link>
            </div>
</div>



</div>
</div>



      




        )
      };




export default MarketNav;