import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import X from "../assets/x.png"

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    }
    catch(error) {
      console.error(error);
    }
  } 

  console.log()
  return (
    <div className='px-10 py-5 flex items-center justify-between absolute w-full z-[100]'>
      <Link to='/'>
        <div className='flex justify-center relative'>
          <img className='w-14 absolute left-1 top-0' src={X} alt="X" />
          <h1 className='text-redflix text-4xl cursor-pointer tracking-wider pl-12 pt-4'>FLIX</h1>
        </div>
      </Link>
        <div>
            <div className='flex gap-4'>
                {
                  user?.email ?
                  <>
                    <Link to='/account'>
                      <button className='text-xl text-whiteflix bg-transparent/50 border border-white rounded-md px-4 py-1' name="language" id="language">
                        Account
                      </button>
                    </Link>
                    <Link to="/">
                      <button onClick={handleLogout} className='bg-redflix text-whiteflix text-xl px-4 py-1 rounded-md'>Logout</button>
                    </Link>
                  </> :
                  <>
                    <Link to={useLocation().pathname === '/login' ? '/signup' : '/login' }>
                      <button className={` bg-redflix text-whiteflix text-xl px-4 py-1 rounded-md font-sans`}>{useLocation().pathname === '/login' ? 'Sign Up' : 'Sign In'}</button>
                    </Link>
                  </>

                }
            </div>
        </div>
    </div>
  )
}

export default Navbar