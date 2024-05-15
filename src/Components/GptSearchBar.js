import React, { useRef, useState } from 'react'
import openai from '../utils/openai'
import languages from '../utils/LanguageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, SEARCH_MOVIE_API } from '../utils/constants'
import {  addGptMoviesResults } from '../utils/gptSlice'
import { toggleShowResult } from '../utils/noResultSlice'

const GptSearchBar = ({gpt}) => {
  const {movieName,movieResults}=useSelector(store=>store.gpt)

  const [openaiError,setOpenAiError]=useState("")
  const [resultsError,setresultError]=useState("")

    const langKey=useSelector(store=>store.config.lang)

    const searchText=useRef(null)
    const dispatch=useDispatch()

    const searchMovieTmbd=async(movies)=>{
      const data=await fetch(SEARCH_MOVIE_API+movies,API_OPTIONS)
      const json=await data.json();
        return json.results
        
    }

    const handleGptSearchClick=async()=>{
      dispatch(toggleShowResult())

      if (!searchText.current.value) {
        setOpenAiError("Please enter a search query.");
        setresultError(null)
        dispatch(addGptMoviesResults({movieName:null,movieResults:null}))


        return;

      }else{
        setOpenAiError("");

      }

    




      
try{
      if(gpt){

        const gptQuery="Act as a movie recommend system and suggest Some Movie for the query "+ searchText.current.value +" only give me name of five movies,coma separated like the examples given ahead.Results:Don,Aavesham,Jailer,GodFather";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo', 
          });


          const gptMovies=gptResults.choices?.[0]?.messages?.content.split(",")
          // const gptMovies=["Inception","Interstellar","Memento","The Prestige","The Dark Knight"];

          const promiseArray=gptMovies.map((movies)=>searchMovieTmbd(movies))
            
          const tmdbResults=await Promise.all(promiseArray)
 
          dispatch(addGptMoviesResults({movieName:gptMovies,movieResults:tmdbResults}))

 
         }
         

      
          else{
          const gptMovies=searchText.current.value


        //  const promiseArray=gptMovies.map((movies=>searchMovieTmbd(movies)))
     const tmdbResults=  await searchMovieTmbd(gptMovies)
        //  const tmdbResults=await Promise.all(promiseArray)
        if (tmdbResults?.length === 0 ) {
          
          
          setresultError("no results") 
          dispatch(addGptMoviesResults({movieName:null,movieResults:null}))

        }else{
         dispatch(addGptMoviesResults({movieName:gptMovies,movieResults:tmdbResults}))
         setresultError("") 

          }
        }
        }
        catch (error) {
          console.error('OpenAI API Error:', error);
          setresultError(null)
          dispatch(addGptMoviesResults({movieName:null,movieResults:null}))


          setOpenAiError("Oops! It looks like we've exceeded our current quota for the OpenAI API. We apologize for the inconvenience. Please try again later.");
         
        }

      }

       
        
    
        const removeError=()=>{
          setOpenAiError(!openaiError)

          
        }
        const removeError1=()=>{
          setresultError(!resultsError)

          
        }
    
  return (
    < div className=' md:flex   ' >
        <form onSubmit={(e)=>e.preventDefault()} className='flex-col   '>
    <input ref={searchText} className="w-max h-10   mb-2 md:mb-0  md:w-[500px]  md:h-12 outline-none bg-gray-950 border border-gray-800 rounded-lg px-3 " placeholder={gpt?languages[langKey].gptPlaceholder:languages[langKey].normalPlaceholder}></input>
    <button className='ml-24 md:ml-3 bg-white hover:bg-yellow-400 text-gray-950 p-1 md:p-2 rounded-md mb-3 'onClick={handleGptSearchClick}>{languages[langKey].search}</button>
    <div className='md:flex md:justify-normal flex justify-center'>
   {openaiError && <div className=' text-gray-950  text-center md:w-[500px] w-[300px]   absolute h-auto  justify-center md:h-auto bg-red-600 flex md:justify-center text-sm'>{openaiError} 
   <button className='w-5 flex h-7 font-extrabold ml-4  justify-center' onClick={removeError}>X</button>
   </div>}
   {resultsError && <div className='text-gray-950   md:w-[500px]   absolute h-auto  justify-center md:h-auto bg-red-600 flex md:justify-center md:absolute'>
      <h1 className='text-base text-center'>{resultsError}</h1>
      <button className='w-5 flex h-7 font-extrabold ml-4  justify-center' onClick={removeError1}>X</button>

    
     </div>}
     </div>
    </form>

  </div>
  )
}

export default GptSearchBar