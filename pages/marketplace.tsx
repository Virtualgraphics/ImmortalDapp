
import type { NextPage } from "next";
import { Default } from '../components/layouts/Default';
import MarketPlace from "../components/NFTmarketplace/MarketPlace";


const Marketplace: NextPage = () => {
  return (
    
    <Default pageName="MARKETPLACE">
    <MarketPlace/>
    
  </Default>


  );
};

export default Marketplace;