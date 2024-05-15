import { useState } from "react";
import { BACKGROUND_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";
import { addGptMoviesResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearch = () => {
  const [gpt, setGpt] = useState(true);
  const dispatch=useDispatch()


  const handleSearchPage = () => {
    setGpt(!gpt);
    dispatch(addGptMoviesResults({movieName:null,movieResults:null}))

  };

  return (
    <div className="bg-gradient-to-t from-gray-900 to-black text-white w-screen h-screen flex flex-col justify-center items-center">
      <img src={BACKGROUND_IMG} alt="" className="object-cover h-screen bg-center w-[100vw] md:w-screen md:h-screen" />
      <div className="w-full h-full bg-gray-950 rounded-lg flex flex-col items-center bg-opacity-80 absolute p-20">
        <div className="mb-2 flex flex-col"> 
          <h1 className="text-base md:text-3xl font-semibold text-stone-100 mt-16 md:mt-2">
            {gpt ? "Movie Gpt Search" : "Normal Movie search"}
          </h1>
        </div>

        <GptSearchBar gpt={gpt} />
        <GptSearchSuggestion gpt={gpt} />
        <button onClick={handleSearchPage} className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 mt-2 rounded">
          {gpt ? "Click For Movie Search" : "Click For Gpt Movie Search"}
        </button>
      </div>
    </div>
  );
}

export default GptSearch;