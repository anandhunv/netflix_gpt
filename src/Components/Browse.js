import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

 
const Browse = () => {
  const gptSearch=useSelector(store=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <div className='w-screen bg-gradient-to-r from-gray-950 to-black   ' >

      <Header/>
      {gptSearch?(<GptSearch/>):(
      <>
       <MainContainer/>
      <SecondaryContainer/></>)}
      
      
    </div>
  )
}

export default Browse