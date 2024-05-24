import React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'


const Movie = ({movie}) => {

    const [saved, setSaved] = useState(false)
    const [like, setLike] = useState(false)  
    const {user} = UserAuth()
    
    const movieId = doc(db, 'users', `${user?.email}`)

    const saveMovie = async () => {
        if(user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path                    
                })
            })
        } else {
            alert("Please log in to save a movie")
        }
    }
    
  return (
    <div className='w-[160px] sm:w-[160px] md:w-[160px] lg:w-[160px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-blackflix/60 opacity-0 hover:opacity-100 text-whiteflix'>
            <p className='white-space-normal text-xs md:text-sm flex justify-center items-center h-full text-center font bold'>{movie?.title}</p>
            <p className='absolute top-3 left-3 text-gray-300' onClick={saveMovie}>{like ? <FaHeart /> : <FaRegHeart />}</p>
        </div>
    </div>
)}

export default Movie