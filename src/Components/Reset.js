import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'

const Reset = () => {
  const history = useNavigate()
  const [error, setError] = useState(null)
  const [emailNotFound, setEmailNotFound] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailValue = e.target.email.value

    try {
      await sendPasswordResetEmail(auth, emailValue)
      alert("Reset link has been sent to your email.")
      // history("/")
    } catch (err) {
      console.log(err)
      if (err.code === "auth/user-not-found") {
        setEmailNotFound(true)
        setError("Email not registered.")
      } else {
        setError("An error occurred. Please try again later.")
      }
    }
  }

  return (
    <div className='md:w-full w-screen bg-gray-900 text-slate-200 h-screen md:flex flex flex-col md:flex-col items-center gap-11'>
      <h1>Reset Password</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='md:flex md:flex-row'>
        <input type='email' name='email' placeholder='Enter Email' className='outline-none text-black md:w-[400px] h-10 px-6' />
        <button className='bg-green-700 p-2 rounded-lg ml-3'>Reset</button>
      </form>
      {emailNotFound && <p className="text-red-500">This email is not registered.</p>}
      {error && !emailNotFound && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default Reset
