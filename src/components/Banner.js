import React from 'react'
import BannerImage from "../assets/images/lucifer.jpeg"
import BossBabyimg from "../assets/images/bossBaby.jpeg"
import  '../assets/css/Banner.css';
import {useState,useEffect} from "react";

const Banner = () => {

    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(1);
    const [newmovie, setnewMovie] = useState([]);

    

      

  useEffect(()=>{

    const interval = setInterval(() => {
        setIndex(index => index + 1);
      }, 4000);

    //   if(index>movies.length){
    //     return () => clearInterval(interval);
    //   }

      fetch(`http://localhost:5000/movies`)
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
        setMovies(json);
       
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })

   const val = movies.filter((movie)=>{
    return movie.id===index;
})
setnewMovie(val);
},[])
      


       
      

  
  
  
    return (
        <>
        
        <header className = "banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${newmovie.image})`,
                backgroundPosition: "center center"
            }}
        ><div className = "banner__contents">
                <h1 className = "banner__title">
                    {newmovie.title}
                    {index}
                    
                </h1>               
                    <h1 className = "banner__description">{movies.description}</h1>
            </div>
            
            <div className = "banner__fadeBottom" ></div>
        </header>
       
        </>
    )
}

export default Banner
