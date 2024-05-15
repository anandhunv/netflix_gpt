import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSearchSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);

  // if (!movieName || movieResults?.length === 0) {
  //   return (
  //     <div className="text-center text-gray-500 mt-4">
  //       No search results found.
  //     </div>
  //   );
  // }

  return (
    <div className="overflow-y-scroll w-screen px-2 md:px-5 pt-5 h-[1900px] flex flex-col" style={{ scrollbarWidth: 'none' }}>
      <div className="p-1 text-gray-400 w-max md:w-full flex justify-center">
        {movieName && <div className="font-normal text-[13px] md:text-[20px]">Search Results: {movieName}</div>}
      </div>
      <div>
        {Array.isArray(movieName) ? (
          movieName.map((name, index) => (
            <MovieList key={name} title={name} movies={movieResults[index]} />
          ))
        ) : (
          <MovieList title={movieName} movies={movieResults} />
        )}
      </div>
    </div>
  );
};

export default GptSearchSuggestion;
