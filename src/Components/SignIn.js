import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, PROFILE_DP } from "../utils/constants";
import { Link } from "react-router-dom";
import Me from "./Me";

// import SignUpForm from "./SignInForm";

 const SignIn =()=>{

        const [isSignInForm,setSignInForm]=useState(true)
        const [errorMessage,setErrorMessage]=useState(null)
        const dispatch=useDispatch()



        const toggleIsSignInForm=()=>{

    setSignInForm(!isSignInForm)
    setErrorMessage("")

    }

    const name=useRef(null)

    const email=useRef(null)
    const password=useRef(null)


    const handleReset=()=>{

    }
    const handleButtonclick=()=>{
    

            const message= checkValidData(email.current.value,password.current.value,name?.current?.value)
            setErrorMessage(message)
            if(message)return

            if(!isSignInForm){
                //signUp Logic

                createUserWithEmailAndPassword(auth,email.current.value,password.current.value,)

                .then((userCredential) => {

    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value,
       photoURL: PROFILE_DP
    }).then(() => {
      // Profile updated!
      // ...
      const {email,uid,displayName,photoURL} = auth.currentUser;
              
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL,
      }))

    }).catch((error) => {
      // An error occurred
      // ...
    });
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode+errorMessage)
    // ..
  });
                
            }
            else{
                //sign in Logic

                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const er="not match"
    // const errorMessage = error.message;
    setErrorMessage(er);
  });
            }

          


}

    return(
      <>
        <div className="bg-black">
             <Header/>
             <div className="absolute md:absolute  md:flex md:justify-center bg-neutral-900  ">

            <img src={BACKGROUND_IMG}       alt="bg" className=" object-cover  h-screen md:w-screen"/>

            </div>
            <div className=" bg-black   md:mx-96 md:my-32 md:mt-24 mt-40 md:p-0 p-3  md:ml-96 ml-8 absolute  bg-opacity-60 text-white text-opacity-100 w-auto h-auto md:h-auto md:w-[460px] rounded-lg">
        
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}
        className="    flex flex-col justify-center items-center md:py-[20px]   text-white "> 

                    <h1 className=" font-extrabold  text-sm md:text-2xl md:-ml-[266px] mb-7">{isSignInForm?"Log In":"Sign Up"}</h1>

       { !isSignInForm && <input type="text"  ref={name}
        placeholder="Full Name" className="bg-slate-600 border border-slate-400 bg-opacity-45 mb-4 outline-none p-2 rounded-md w-64  md:w-[350px] h-[50px] "/>}
     
        <input type="email" ref={email}
         placeholder="Email" className="bg-slate-600 border border-slate-400 bg-opacity-45 mb-4 outline-none p-2 rounded-md w-64  md:w-[350px] h-[50px] "   />

        <input type="password" ref={password}
         placeholder="Password" className="bg-slate-600 border border-slate-400 bg-opacity-45 mb-4 outline-none p-2 rounded-md w-64  md:w-[350px] h-[50px] "    // Add a unique name attribute
       />

        <p className="text-red-500 w-64 text-sm  text-center  mb-4">{errorMessage}</p>
        <button className="bg-red-600  w-64  md:w-[350px] p-2 text-white rounded-lg mb-5"
        
        onClick={handleButtonclick}

        >{ isSignInForm?"Log In":"Sign Up"}</button>


        { isSignInForm && <Link to={'/reset'}> <p className="mb-5" onClick={handleReset}>Forgot Password?</p></Link>}
        {/* { isSignInForm && <span className="text-white"><input type="checkbox" className="outline-none -ml-[170px] mb-5 "/>  Remember Me</span> } */}
        <p className="text-gray-400">{isSignInForm?"New to Netflix? ":"Already have an account? "}<span onClick={toggleIsSignInForm} className="underline text-white font-medium cursor-pointer">{isSignInForm?"Sign Up now":"Log In"}</span></p> 
     <Me/>
        </form>
      
           
        </div>
      
        </div>
      
        </>
    )
 }

 export default SignIn;