import React from 'react'
import {useState,useEffect} from "react";
import Card from './Card';
import "../assets/css/MoviesSection.css"
import { Link } from 'react-router-dom';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

  useEffect(()=>{

      fetch("http://localhost:5000/movies")
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
       
            setMovies(json);
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })
     
     

  },[])
    return (
        <section id="movie-list">

        <div className= "container">

            <h1>Movies </h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

            {movies.map((movie)=>( <Link to={`movies/${movie.id}`}>
                                        <Card key={movie.id} id={movie.id}  name={movie.title} imgs={movie.image}  />
                                    </Link>))}

            </div>

        </div>
    </section>
    )
}

export default MoviesPage
