import React from 'react'
import {useState,useEffect} from "react";
import Card from './Card';
import "../assets/css/MoviesSection.css"
import { Link } from 'react-router-dom';

const TvShowsPage = () => {
    const [shows, setshows] = useState([]);

    useEffect(()=>{
  
        fetch("http://localhost:5000/shows")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
         
              setshows(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
       
       
  
    },[])
    return (
        <section id="movie-list">

        <div className= "container">

            <h1>Tv Shows </h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

            {shows.map((show)=>( <Link to={`shows/${show.id}`}>
                                        <Card key={show.id} id={show.id}  name={show.title} imgs={show.image}  />
                                    </Link>))}

            </div>

        </div>
    </section>
    )
}

export default TvShowsPage
