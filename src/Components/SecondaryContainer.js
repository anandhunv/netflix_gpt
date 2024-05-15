import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies=useSelector(store=>store.movies)
  return (
    <div className="bg-gradient-to-r from-gray-950 to-black   ">

     <div className="-mt-36 md:-mt-56 relative ">
      <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>

      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies}/>

      </div>
      </div>
  )
}

export default SecondaryContainer 