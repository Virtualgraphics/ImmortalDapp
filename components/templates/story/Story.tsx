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
          The Legend of Ravarya
          </h2>
          <hr className="w-4/6 mx-auto  border-yellow-200" />
          <p className="text-base text-yellow-100 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Jost">
        
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </p>


          <div className="grid grid-cols-2 gap-8 py-8">
  <div className='font-Jost text-left text-white'>
    
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>


  <div>

  <Image
              className="w-auto h-56 sm:h-96 "
              src="/assets/map_test.png"
              alt="Map"
              width={1200}
              height={900}
            />

  </div>
</div>

<div className="w-full">
        

          <div className="m-auto w-96 py-2">
          <Image
          className="m-auto w-96 py-2"
          src="/assets/bat_divider.svg"
          alt="Bat Divider"
          width={1260}
          height={750}
        />
          </div>

          </div>

          <div className="grid grid-cols-2 gap-8 py-8">
  <div>
    
  <div className="m-auto w-auto rounded-2xl ">
          <Image
          className="m-auto w-auto rounded-2xl shadow-xl"
          src="/assets/snow_castle.jpg"
          alt="Snow Castle"
          width={946}
          height={751}
        /></div>
  
     
     </div>


  <div className='font-Jost text-left text-white'>

  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
     Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     

  </div>
</div>


      

          </div>
    </div>
    );
  };

  export default Story;