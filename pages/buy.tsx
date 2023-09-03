import Buy from '../components/NFTmarketplace/Buy';
import { Default } from '../components/layouts/Default';
import type { NextPage } from 'next';

const BUY: NextPage = () => {
  return (

    <Default pageName="Buy">
    <Buy />
  </Default>
  
  );
};

export default BUY;