import '@fortawesome/fontawesome-free/css/all.css';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGAUGE } from '../utils/constants';
import { toggleShowGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => { 

  const dispatch=useDispatch()

  const navigate=useNavigate()
  const user=useSelector(store=>store.user)

  const [showProfile, setShowProfile] = useState(false);
  const gptSearch=useSelector(store=>store.gpt.showGptSearch)




  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in,
          const {email,uid,displayName,photoURL} = user;
          
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          }))
          navigate("/browse")
        } else {
          // User is signed out
        dispatch(removeUser());
        navigate("/")

        }
      });

      return ()=>unsubscribe()
      
},[])


const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.


    // navigate("/")
  }).catch((error) => {
    // An error happened.
    navigate("/error")

  });
}


const handleShowProfile=()=>{
  setShowProfile(!showProfile)

}


const handleGptSearch=()=>{

  dispatch(toggleShowGptSearch())
}

const handleChangeLanguage=(e)=>{

  dispatch(changeLanguage(e.target.value))
}
  return (
     <div className='absolute  bg-gradient-to-b  from-black w-full h-[100px] z-20  flex  justify-between md:flex   md:justify-between items-start '>

           <img src={ NETFLIX_LOGO} alt="logo" className=" h-10  md:mx-28 md:h-20 "/>  

           {  user &&      <div className='mt-2  md:mt-5  md:-mr-[650px] flex  '>
    {   gptSearch &&    <select className="bg-black outline-none bg-opacity-0 text-gray-300  text-sm md:text-base md:m-0"  onChange={handleChangeLanguage}>
      {SUPPORTED_LANGAUGE.map((language,key)=>      <option key={key} value={language.identifier} className="bg-black   md:p-3 text-slate-200 outline-none text-[10px] md:text-base  ">{language.name}</option>
)}

     </select>}

     <button className='border border-stone-50 rounded-md px-1  md:px-5  py-1 text-gray-100 ml-10 md:mx-0  text-sm md:text-base md:mr-10' onClick={handleGptSearch}> {gptSearch?"Home":"Gpt Search"}</button>

                      
                    </div>
}

     {  user && ( <div className='  md:mt-5 md:mr-14  mt-2'>
                   
                 <img src={user?.photoURL}  alt='' className=' h-8 -ml-12 md:ml-0   md:h-10   cursor-pointer border border-white  absolute  ' onClick={handleShowProfile}  />
            { showProfile &&   <div className=' bg-neutral-800  rounded-lg  mt-12 -ml-20 md:-ml-16 absolute  '>
      <h1 className='  text-slate-100 border-b border-b-black mb-0 md:mb-[2px] px-1 md:px-3 py-1 md:py-2 cursor-pointer text-[10px] md:text-base' title='back' onClick={handleShowProfile}>{user.displayName}</h1>
 

    
      <i className="fa-solid fa-right-from-bracket text-white mb-0 md:mb-[2px]  px-1 md:px-3 py-1 md:py-2 -mt-2 cursor-pointer text-[10px] md:text-base" title='Logout' onClick={handleSignOut}> E x i t</i>   

      </div>
     
}
    
    
    </div>
)}
    </div>

  )
}

export default Header