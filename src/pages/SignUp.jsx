import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password)
            navigate('/')
        }
        catch (error){
            console.error(error);
        }
    }

  return (
    <>
        <div className='w-full h-auto'>
            <img className='block absolute w-full h-full object-cover' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt="/" />
            <div className='bg-blackflix/60 fixed top-0 left-0 w-full h-full mx-auto flex items-center justify-center'></div>
                <div className='fixed w-full px-1 py-24 z-50'>
                    <div className='max-w-[450px] max-h-[600px] mx-auto'>
                        <div className='flex flex-col items-center justify-center h-full py-16 px-4 text-whiteflix font-sans text-center'>
                            <h1 className='text-4xl md:text-5xl font-bold mb-2'>Unlimited movies, TV Shows, and more</h1>
                            <p className='text-xl mb-5'>Watch anywhere. Cancel anytime.</p>
                            <p className='text-xl mb-2'>Ready to watch? Enter your email to create or restart.</p>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center items-center'>
                                <input onChange={(e) => setEmail(e.target.value)} className='bg-black/50 border border-gray-800 p-2 items-center w-full   focus:border-white rounded-md text-xl' placeholder='Email address' type="email" autoComplete='email' />
                                <input onChange={(e) => setPassword(e.target.value)} className='bg-black/50 border border-gray-800 p-2 items-center w-full  focus:border-white rounded-md text-xl' placeholder='Add a password' type="password" autoComplete='current-password' />
                                <button className='flex items-center justify-center w-full  py-2 bg-redflix rounded-md gap-1 text-2xl hover:bg-red-700 duration-200'>Get Started <IoIosArrowForward className='font-bold'/></button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
    </>
  )
}

export default SignUp