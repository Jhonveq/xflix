import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  
  return (
    <>
        <div className='w-full text-white font-sans'>
            <img className='w-full h-[400px] object-cover' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[400px]'></div>
            <div className='absolute top-[20%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-5xl font-bold' >My Movies</h1>
            </div>
            <div>
              <SavedMovies/>
            </div>
        </div>
    </>
  )
}

export default Account