import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';
import { MementoMori } from '../components/templates/games/mementomori';

const Mementomori: NextPage = () => {
  return (

    <Default pageName="MEMENTO MORI">
    <MementoMori />
  </Default>
  
  );
};

export default Mementomori;