import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try{
            await logIn(email, password)
            navigate('/')
        }
        catch (error){
            console.error(error);
            setError(true)
        }
    }


  return (
    <div className='w-full h-auto font-sans'>
            <img className='block absolute w-full h-full object-cover' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt="/" />
            <div className='bg-blackflix/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] max-h-[600px] mx-auto bg-black/60 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl md:text-5xl font-bold mb-4'>Sign In</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                                {error ? 
                                    <p className='w-full p-2  bg-yellow-600 rounded-sm text-sm text-black'>
                                        <span className=' font-bold '>Incorrect email or password.</span><br />
                                        You can try again.
                                    </p> :
                                    null}
                                <input onChange={e => setEmail(e.target.value)} className='bg-black/50 border border-gray-800 p-2 items-center  focus:border-white rounded-md text-xl' placeholder='Email address' type="email" autoComplete='email' />
                                <input onChange={e => setPassword(e.target.value)}  className='bg-black/50 border border-gray-800 p-2 items-center  focus:border-white rounded-md text-xl' placeholder='Add a password' type="password" autoComplete='current-password' />
                                <button className='flex items-center justify-center py-2 bg-redflix rounded-md gap-1 text-2xl hover:bg-red-700 duration-200'>Sign In</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-600'>New to Netflix?</span>{' '}
                                    <Link to='/signup'>Sign up now.</Link>
                                </p>
                            </form>    
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Login