import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_ALL_MOVIES, API_OPTIONS, IMAGE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { addSingleMovies } from '../utils/movieSlice';
import Video from './Video';
import Review from './Review';
import Credit from './Credit';
import convertMinutesToHours from '../utils/runTime';
import Crew from './Crew';
import About from './About';
import Other from './Other';
import MainCrew from './MainCrew';
import Header from './Header';

const MovieDetails = () => {
  const { id } = useParams();
  const the_Movie = useSelector(store => store.movies.singleMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllMovies();

    return () => {
      // Dispatch an action to reset videos when unmounting or navigating away
      dispatch(addSingleMovies(null));
    };
  }, [id]);

  const getAllMovies = async () => {
    const data = await fetch(API_ALL_MOVIES + id, API_OPTIONS);
    const results = await data.json();
    dispatch(addSingleMovies(results));
  };

  if (!the_Movie) {
    // Render loading state or return null
    return null;
  }

  const { runtime } = the_Movie;
  const { genres } = the_Movie;
  const runtimeInMinutes = runtime;
  const runtimeInHours = convertMinutesToHours(runtimeInMinutes);

  return (
    <>
      <div className='first w-full h-max  bg-neutral-950 rounded-lg  p-5 flex flex-col md:flex md:flex-row '>
        <img src={IMAGE_URL + the_Movie?.backdrop_path} alt='' className='h-52 md:h-60 rounded-xl' />
        <div className='bg-neutral-950  h-max  md:pl-5 pl-0 flex flex-col  rounded-lg overflow-hidden '>
          <h1 className='text-yellow-500 font-medium text-2xl md:text-4xl '>{the_Movie?.title}</h1>
          <div className='flex h-auto flex-wrap w-5/5  '><p className='text-gray-300 md:mt-4 mt-0 md:text-base text-[12px] '>{the_Movie?.overview}</p></div>
          <div className='text-slate-600 flex md:mt-4 mt-0'>
            <p className='mr-5 md:text-base text-[12px]'>{the_Movie?.release_date}</p>
            {genres?.map((genres) => <span key={genres.name} className='md:text-base text-[12px]'>{genres.name + ","}</span>)}
            <span className='ml-5 md:text-base text-[12px]'>{runtimeInHours}</span>
          </div>
          <div className='crew  flex bg-neutral-950 text-slate-50 w-5/5 overflow-x-scroll md:text-base text-[12px]' style={{scrollbarWidth:'none'}}>
            <MainCrew/>
          </div>
        </div>
      </div>

      <div className='text-white w-full bg-black aspect-video p-5 flex flex-col md:flex-row md:flex'>
        <Credit id={id} />
        <div className='videoPlay md:w-8/12 w-full  md:ml-5 '>
          <Video id={id} />
        </div>
      </div>

      <div className='text-white w-full bg-black h-auto p-5 flex'>
        <div className='w-full bg-neutral-950  flex flex-col h-max  rounded-lg  p-2 overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
          <div>
            <h1 className='text-lg bg-neutral-900 rounded-md md:w-max px-5'>Crew</h1>
          </div>
          <div className='flex whitespace-nowrap'>
            <Crew />
          </div>
        </div>
      </div>

      <div className='md:flex md:flex-row flex flex-col-reverse  '>
        <div className='p-5 bg-black md:w-6/12 w-full md:aspect-video  r '>
          <h1 className='text-white font-medium text-lg md:text-base text-[14px]'>Review:</h1>
          <div className=' bg-black  md:aspect-video  md:h-auto h-auto   overflow-y-scroll  md:text-base text-[14px]' style={{ scrollbarWidth: 'none' }}>
            <Review id={id} />
          </div>
        </div>
        <Other />
      </div>
      <div className="bg-gray-900 p-6 ">
        <About />
      </div>
    </>
  );
}

export default MovieDetails;
