import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Details = () => {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState([])
    const [movieRatings, setMovieRatings] = useState([])
    const [loading, setLoading] = useState(true)

    
    // function ratingColor(rating){
    //     const redLimit = 50;
    //     const yellowLimit = 75;
    //     const newRating = splitFrac(rating.Value)
    //     const red = "text--red"
    //     const yellow = "text--yellow"
    //     const green = "text--green"
    //     console.log("This is the rating" + newRating)

    //     if(newRating <= redLimit){
    //         console.log("This should be red")
    //          return setColorValue(red)
    //     }
    //     else if(newRating > redLimit && newRating <= yellowLimit){
    //         console.log("this should be yellow")
    //         return setColorValue(yellow)
    //     }
    //     else if(newRating > yellowLimit){
    //         console.log("this should be green")
    //         return setColorValue(green)
    //     }
    // }

    // function splitFrac(fraction){
    //     if(fraction.includes("/")){
    //         const ratio = fraction.split("/")
    //         return parseFloat(ratio[0]) / parseFloat(ratio[1]) * 100
    //     }
    //     else if(fraction.includes("%")){
    //         fraction = fraction.substring(0, fraction.length-1)
    //         return fraction
    //     }
    //     return parseFloat(fraction)
    // }
    
    
    async function getMovieDetails(id){
        const {data} = await axios.get(`https://www.omdbapi.com/?apikey=8df65106&i=${id}`)

        setMovieDetails(data)
    }

    async function getMovieRatings(id){
        const {data: {Ratings}} = await axios.get(`https://www.omdbapi.com/?apikey=8df65106&i=${id}`)

        setMovieRatings(Ratings)
        setLoading(false)
    }

    useEffect(() => {
        getMovieDetails(id)
        getMovieRatings(id)
        
    }, [])
    return ( 
        <>
            <section id="details">
            <nav>
                    <Link to = "/" className="logo__link">
                        <img
                            src="/FullLogo_Transparent__pink--no-border.png"
                            id="personal-logo"
                            className="logo--img"
                        />
                        JMDb
                    </Link>
                    

                    <ul className="nav__link--list">
                        <Link to="/" className="nav__link">
                            <span 
                                className="nav__link--anchor link__hover-effect link__hover-effect--black"
                            >
                                Home
                            </span>
                        </Link>
                        <Link to="/movies" className="nav__link">
                            <span 
                                className="nav__link--anchor link__hover-effect link__hover-effect--black"
                            >
                                Find your movie
                            </span>
                        </Link>
                        <Link to="/" className="nav__link">
                            <span 
                                className="nav__link--btn btn"
                            >
                                Contact
                            </span>
                        </Link>
                    </ul>
                </nav>

                <div className="header__content">
                    <h1 className="title__browse">Movie Details</h1>
                </div>
                {
                    loading ? (
                        <Loader2 size={64} className="loader"/>
                    ) : (
                        <div className="detail__block">
                            <div className="ratings__resizer">
                            <div className="detail__container">
                                <div className="detail">
                                    <figure className ="detail__img--wrapper">
                                        <img src={movieDetails.Poster} className = "detail__img" />
                                    </figure>
                                    <div className="detail__title">
                                        <span className = "text--color">{movieDetails.Title} ({movieDetails.Rated}) - {movieDetails.Runtime}</span>
                                    </div>
                                    <div className = "detail__body--wrapper">
                                        <p className="detail__body">
                                            <span className = "text--color detail__subtitle">Released:</span> {movieDetails.Released}
                                        <br />
                                            <span className = "text--color detail__subtitle">Genre:</span> {movieDetails.Genre}
                                        <br />
                                            <span className = "text--color detail__subtitle">Director:</span> {movieDetails.Director}
                                        <br />
                                            <span className = "text--color detail__subtitle">Actors:</span> {movieDetails.Actors}
                                        </p>
                                        <p className="detail__body plot__para">
                                            <span className = "text--color detail__subtitle">Plot:</span> {movieDetails.Plot}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="ratings__wrapper">
                                <h3 className="ratings__title">
                                <span className="text--color">Ratings:</span>
                                </h3>
                                    {
                                        movieRatings.map((rating, index) => (
                                            <div key = {index}>
                                                <p>
                                                    {rating.Source}: 
                                                    <span>
                                                        {rating.Value} 
                                                    </span>    
                                                </p>  
                                            </div>

                                        ))
                                    }
                            </div>
                            </div>
                        </div>

                    )
                }
            </section>
        </>
     );
}
 
export default Details;