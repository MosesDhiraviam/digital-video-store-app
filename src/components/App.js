import React from 'react'
import NavBar from "./Navbar"
import Banner from "./Banner"
import {useState,useEffect} from "react";
import FeaturedFlims from "./FeaturedFlims"
import FeaturedTvShows from "./FeaturedTvShows"
import Content from "./Content"
import Footer from "./Footer"
import LoginPage from "./Login"
import SignupPage from "./Signup"
import MoviesPage from "./MoviesPage"
import TvShowsPage from "./TvShowsPage"
import MovieDetailsPage from "./MovieDetailsPage"
import ShowsDetailsPage from "./ShowsDetailsPage"
import "../assets/css/App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{

      //Async operation //POST,PUT OR DELETE
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
    <>
    <div className="main-container">
    <Router>
      <Switch>
      <Route exact path="/">
      <NavBar/>
      <Banner/>
      <FeaturedFlims/>
      <FeaturedTvShows/>
      <Content/>
      <Footer/>
          </Route>
          <Route path="/loginPage">
            <NavBar/>
            <LoginPage/>
            <Footer />
          </Route>
          
          <Route path="/registerPage">
            <NavBar/>
            <SignupPage/>
            <Footer />
          </Route>
          <Route path="/moviesPage">
            <NavBar/>
            <MoviesPage/>
            <Footer />
          </Route>
          <Route path="/tvShowsPage">
            <NavBar/>
            <TvShowsPage/>
            <Footer />
          </Route>
          <Route exact path="/movies/:id">
              <NavBar/>
              <MovieDetailsPage/>
              <Footer/>
            </Route>
            <Route exact path="/shows/:id">
              <NavBar/>
              <ShowsDetailsPage/>
              <Footer/>
            </Route>
      </Switch>
      </Router>
    </div>
    </>
  )
}

export default App
