import { Default } from '../components/layouts/Default';

import type { NextPage } from 'next';
import { VideoGames } from '../components/templates/games/videogames';


const VIDEOGAMES: NextPage = () => {
  return (

    <Default pageName="Video Games">
    <VideoGames/>
  </Default>
  
  );
};

export default VIDEOGAMES;