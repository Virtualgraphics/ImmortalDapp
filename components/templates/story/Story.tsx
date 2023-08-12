import Link from 'next/link'
import Image from 'next/image'

const Story = () => {
    return (
      
      <div className="justify-center  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
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
          The Legend of Therondia
          </h2>
          <hr className="w-3/5 mx-auto  border-yellow-200" />
          <p className="text-base text-yellow-100 max-w-screen-lg lg:text-2xl  md:text-lg sm:px-4 py-8 font-Jost">
        
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>

          <div className=" grid max-w-screen-lg row-gap-8 sm:text-center sm:mx-auto">

<div className='font-Jost text-left text-white'>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 


</p>


</div>


<div>
<Image
          className="m-auto py-12 "
          src="/assets/map_therondia.png"
          alt="Therondia Map"
          width={1200}
          height={900}
        />

</div>

</div>


<div className="w-full">
        

          <div >
          <Image
          className="m-auto w-96 py-2"
          src="/assets/bat_divider.svg"
          alt="Bat Divider"
          width={1260}
          height={750}
        />
          </div>

          </div>

<div className="grid grid-cols-2 gap-8 py-12">
 
    
  <div className="m-auto w-auto rounded-2xl ">
          <Image
          className="m-auto w-auto rounded-2xl shadow-xl"
          src="/assets/snow_castle.jpg"
          alt="Snow Castle"
          width={946}
          height={751}
        />
        
        </div>
  

  <div className='font-Jost text-left text-white'>

  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     </div>

  
</div>

<div className="container my-12 mx-auto md:px-6">
  
  <section className="mb-14">
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] rounded-3xl shadow-xl">

<Image
          className="m-auto w-auto shadow-xl"
          src="/assets/immortal_game.jpg"
          alt="Snow Castle"
          width={946}
          height={751}
        />


      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-yellow-100 md:px-12">
            <h2 className="mb-12 text-5xl  leading-tight tracking-wide font-Metamorphous">
              Are you ready <br /><span>for an adventure</span>
            </h2>
            <button type="button"
              className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

      

          </div>
    </div>
    );
  };

  export default Story;