import React, { useEffect, useState } from 'react'
import requests from '../Request'

const Hero = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(requests.requestPopular)
                const data = await response.json()
                setMovies(data.results)
            }
            catch(error) {
                console.error(error);
            }
        } 
        fetchData()
    }, [])

    const truncateString = (str, num) => {
        return (str?.length) > num ? str.slice(0, num) + '...' : str
    }

  return (
    <div className='w-full h-[480px] text-whiteflix'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[480px] bg-gradient-to-t from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl'>{movie?.title}</h1>
                <div className='flex gap-2 my-4'>
                    <button className='border bg-whiteflix text-blackflix border-grayflix py-2 px-5'>Play</button>
                    <button className='border text-whriteflix border-grayflix py-2 px-5'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Release: {movie?.release_date.slice(0,4)}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-sm'>{truncateString(movie?.overview, 120)}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero