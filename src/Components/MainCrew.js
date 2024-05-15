import React from 'react';
import { useSelector } from 'react-redux';

const MainCrew = () => {
    const credits = useSelector(store => store.movies.credits);

    if (!credits || !credits.crew) {
        // Render loading state or return null
        return null;
    }
    
    const { crew } = credits;

    // Filter the crew to get directors
    const directors = crew.filter((member) => member.job === "Director");
    const writer=crew.filter((member) => member.job === "Writer");
    const music=crew.filter((member) => member.job === "Original Music Composer");
    const producer=crew.filter((member) => member.job === "Producer");




    return (
        <div className='flex w-screen text-nowrap text-center bg-neutral-950'>
            {/* Render director names */}
            {directors.map((director) => (
                <div key={director.id} className='m-4  '>
                    <p className='font-semibold'>{director.name}</p>
                    <h1 className='text-neutral-600'>Director</h1>
                </div>
            ))}


             {/* Render writer names */}
             {writer.map((writer) => (
                <div key={writer.id} className='m-4'>
                    <p className='font-semibold'>{writer.name}</p>
                    <h1 className='text-neutral-600'>Writer</h1>
                </div>
            ))}

        
            <div className='m-4 '>
  {/* Render music names */}
  <p>
    {music.map((music, index) => (
      <span key={music.id} className='font-semibold'>
        {music.name+","}
        {index < music.length - 1 && ', '}
      </span>
    ))}
  </p>
  <h1 className='text-center text-neutral-600'>music</h1>
</div>

<div className='m-4 '>
  {/* Render producer names */}
  <p>
    {producer.map((producer, index) => (
      <span key={producer.id} className='font-semibold'>
        {producer.name+","}
        {index < producer.length - 1 && ', '}
      </span>
    ))}
  </p>
  <h1 className='text-center text-neutral-600'>Producer</h1>
</div>

        </div>
    );
}

export default MainCrew;
