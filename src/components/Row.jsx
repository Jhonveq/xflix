import React, { useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({title, fetchURL, rowId}) => {

    const [movies, setMovies] = useState([])   

    useState(() => {
        async function fetchData() {
            const response = await fetch(fetchURL)
            const data = await response.json()
            setMovies(data.results)
        }
        fetchData()

    }, [fetchURL])

    const scrollLeft = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 450
    }
    const scrollRight = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 450
    }

  return (
    <>
        <h2 className='text-white p-4 font-bold md:text-xl'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={scrollLeft} size={30} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block'/>
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((movie, id) => (
                    <Movie key={id} movie={movie}/> 
                ))}
            </div>
            <MdChevronRight onClick={scrollRight} size={30} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block'/>
        </div>
    </>
  )
}

export default Row