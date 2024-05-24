import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'


const SavedMovies = () => {

    const [movies, setMovies] = useState([])

    const {user} = UserAuth()  
    
    const scrollLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 450
    }
    const scrollRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 450
    }
    
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies)
        })
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)

    const deleteMovie = async (id) => {
        try {
            const result = movies.filter(movie => movie.id !== id)
            await updateDoc(movieRef, {
                savedMovies: result
            })
        }
        catch(err) {
            console.error(err);
        }
    }

  return (
    <>
    <h2 className='text-white p-4 font-bold md:text-xl'>Saved</h2>
    {
        movies.length > 0 ?
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={scrollLeft} size={30} className='text-gray-600 bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block'/>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies?.map((movie) => (
                <div key={movie?.id} className='w-[160px] sm:w-[160px] md:w-[160px] lg:w-[160px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt={movie?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-blackflix/60 opacity-0 hover:opacity-100 text-whiteflix'>
                        <p className=' whitespace-pre-wrap text-xs md:text-sm flex justify-center items-center h-full text-center font bold w-full'>{movie?.title}</p>
                        <p className='absolute top-3 right-3 text-gray-300' onClick={() => deleteMovie(movie.id)}><AiOutlineClose/></p>
                    </div>
                </div>
            ))}
        </div>
        <MdChevronRight onClick={scrollRight} size={30} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block text-gray-600'/>
        </div> :
        <div className='text-white flex mt-6 items-center justify-center px-10 text-center'>
            <h1 className='text-2xl'>You have not save any favorite movie.</h1>
        </div>
    }
</>
  )
}

export default SavedMovies