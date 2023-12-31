
import { Default } from '../components/layouts/Default';
import { Crypt } from '../components/templates/crypt';
import type { NextPage } from 'next';

const CRYPT: NextPage = () => {
  return (

    <Default pageName="CRYPT">
    <Crypt />
  </Default>
  
  );
};

export default CRYPT;