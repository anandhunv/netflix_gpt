import React from 'react'
import { Link } from 'react-router-dom'

const Me = () => {
  return (
    <div className='w-full p-3 text-lg text-slate-300   flex justify-center '>
    <h1>
      created by <Link to={"https://github.com/anandhunv"}><span className=''>anandhu_nv </span></Link>
    </h1>

  </div>  )
}

export default Me