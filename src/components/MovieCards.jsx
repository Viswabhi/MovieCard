import React from "react";
import '../App.css'

const MovieCards = ({ movie }) => {
  console.log(movie);
  return (
    <>
   
    <div className=" flex justify-center bg-gradient-to-br from-teal-300 via-purple-400 to-indigo-500">
        <div className="flex justify-between w-[800px] h-[400px] text-white bg-zinc-800 m-8 ">
            <div className=" w-[400px] flex flex-col justify-around">
                <div className="flex justify-around">
                    <div>
                        <img className="w-[100px] h-[100px" src={movie.Poster} alt="" />
                    </div>
                    <div>
                        <h1 className=" font-semibold text-2xl">{movie.Title}</h1>
                        <div className="flex gap-3">
                        <p>{movie.Released}</p>
                        <p>{movie.Director}</p>
                        </div>
                        
                        

                        <div className="flex"> 
                            <p>{movie.Runtime}</p>
                            <p>{movie.Genre}</p>
                        </div>
                    </div>
                </div>

                <p className="m-5">{movie.Plot}</p>

            </div>


            <div className="w-[400px] h-[400px]">
                <img src={movie.Images[3]} alt="" className="h-full" />
            </div>

        </div>
     </div>
  
     
    </>
  );
};

export default MovieCards;
