import {createBrowserRouter} from "react-router-dom";
import Browse from './Browse'
import {RouterProvider} from "react-router-dom";
import SignIn from "./SignIn";
import MovieDetails from "./MovieDetails";
import Reset from "./Reset";


const Body = () => {
   
    

    const appRouter=createBrowserRouter([

        {
            path:"/",
            element:<SignIn/>
        },
        {
            path:"/reset",
            element:<Reset/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/watch/:id",
            element:<MovieDetails/>
        }
    ])

  
  return (
    <div className="font-outfit bg-black "  >
<RouterProvider router={appRouter}/>
       
    </div>
  )
}

export default Body