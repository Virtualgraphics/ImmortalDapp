
import Sell from '../components/NFTmarketplace/Sell';
import { Default } from '../components/layouts/Default';
import type { NextPage } from 'next';

const SELL: NextPage = () => {
  return (

    <Default pageName="Sell">
    <Sell />
  </Default>
  
  );
};

export default SELL;