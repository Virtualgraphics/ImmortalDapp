import { FC, ReactNode } from 'react';


import { Footer } from '../../modules/footer';
import Head from 'next/head';



const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} `}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>


   


    <div className="w-full h-full p-0 m-0 ">
      {children}
    </div>

    <Footer/>
   
  </>
);

export default Default;