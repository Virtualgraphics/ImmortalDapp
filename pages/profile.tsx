
import Profilepage from '../components/NFTmarketplace/ProfilePage';
import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';

const ProfilePage: NextPage = () => {
  return (
    <Default pageName="PROFILE PAGE">

      <Profilepage/>

    </Default>
  );
};

export default Profilepage