
import { Default } from '../components/layouts/Default';
import { BloodHunt } from '../components/templates/games/bloodhunt';
import type { NextPage } from 'next';

const Bloodhunt: NextPage = () => {
  return (

    <Default pageName="BLOODHUNT">
    <BloodHunt />
  </Default>
  
  );
};

export default Bloodhunt;