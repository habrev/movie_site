import React, {useEffect, useState } from 'react';
import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
    const [movie, setMovie]= useState({});

    useEffect(()=>{
        (async () => {
            try {
                const request= await axios.get(requests.fetchNetflixOriginals);
                console.log('API Response',request)
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            
            }
            catch(error){
                console.log("error", error);
            }
        })();
    }, []);
  return (
    <div 
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat"
        }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}

            </h1>
            <div className='banner_buttons'>
                <button className='banner_button play'>play</button>
                <button className='banner_button'>my list</button>

            </div>
            {/* <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1> */}
        </div>
        <div className='banner_fadebottom'>

        </div>

    </div>
  )
}

export default Banner
