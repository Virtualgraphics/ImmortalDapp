import Link from 'next/link'
import { GameCard } from '../gamecard';
import Image from 'next/image'

const Games = () => {
 
    return (
        <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            
    
          
        
            <h2 className="m-auto mb-4 text-3xl  tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-3">
          Immortal Coil: Memento Mori
            </h2>
            <hr className="w-full my-4 border-yellow-200" />
            <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Jost">
            Get rewards for missions and quests successfully accomplished in the Memento Mori RPG and Use various monsters to boost the powers of your vampires in the BLoodhunt DeFI game.

            </p>
           
          </div>


<div className='flex items-center justify-center'>
<h1 className='text-yellow-100 text-3xl mt-10 font-Jost'>
The IMMORTAL COIL games come in two variations:
</h1>
</div>
<GameCard/>
<div className="flex justify-center">
<p className='text-white text-lg'>Technical details, white paper and tokenomics are coming soon and will be published on our website.</p>
</div>
 </div>

      );
    };

  
  
  export default Games;