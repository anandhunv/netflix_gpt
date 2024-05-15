import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  return (
    <div className="p-1 md:p-4">
  <h1 className="text-slate-50 text-sm md:text-xl font-medium pl:2 md:pl-8 pb-4 ">{title}</h1>

    <div className="   overflow-x-scroll px-1 md:px-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className=" flex w-max " >
        {movies?.map((movie) => (
       <MovieCard path={movie.poster_path} id={movie.id} key={movie.id}  />


         ))} 
      </div>
    </div>
    </div>
  );
};

export default MovieList;
