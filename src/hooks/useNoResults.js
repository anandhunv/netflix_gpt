import { useState } from "react";


const   useNoResult=(movieName,movieResults)=>{

    const [noResult,setNoResult]=useState()

    if (!movieName && movieResults?.length === 0) {
      return (
       <div className="text-center text-gray-500 mt-4">
         {setNoResult(" No search results found.")}
        </div>
      );
    }
  }


  export default useNoResult