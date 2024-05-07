import React, { useEffect, useState } from 'react'
import MovieData from '../assets/MovieData.json'
import MovieCards from './MovieCards'


const MovieRendering = () => {

    const [movieDataPopulated, setmovieDataPopulated] = useState([])

   useEffect(() => {
    setmovieDataPopulated(MovieData)
   }, [])
   


  return (
    <>
     {
       movieDataPopulated.map((movieEl,idx)=>(
        <MovieCards movie = {movieEl} key={idx}/>
       ))
    }
    </>
   
  )
}

export default MovieRendering