import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Loader2, Menu } from "lucide-react";
import { IconContext } from "react-icons";
import BurgerMenu from "../components/BugerMenu";
import NavBar from "../components/NavBar";


const Movies = () => {
    const def = "alpha"
    const [movies, setMovies] = useState([])
    const [searchTag, setSearchTag] = useState("")
    const [filter, setFilter] = useState()
    const [loading, setLoading] = useState(true)

    async function filterMovies(event) {
        setFilter(event.target.value)
        onSearch()
    } 

    function onSearch(){
        setLoading(true)
        getMovies(searchTag)
    }

    function onSearchKeyPress(key){
        key === "Enter" && onSearch()
    }

    async function getMovies(searchTag) {
        const {data: {
            Search
        }} = await axios.get(`https://www.omdbapi.com/?apikey=8df65106&s=${searchTag || def}`)

        //Remove last element of array
        Search?.length >= 10 && Search.pop()

        if(filter){
            if(filter === "OLD__TO__NEW"){
                Search.sort((a,b) => (a.Year - b.Year))
            }
            else if(filter === "NEW__TO__OLD"){
                Search.sort((a,b) => (b.Year - a.Year))
            }
            setLoading(false)
            return setMovies(Search)
        }
        setLoading(false)
        setMovies(Search)
    }
    useEffect(() => {
        getMovies(searchTag)
    },[movies])
    return ( 
        <>
            <section id="Browse">
                <div className="overlay"></div>

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
                        <NavBar />
                        <BurgerMenu/>

                    </ul>
                </nav>
                <div className="header__content">
                    <h1 className="title__browse movie__page--title">Browse our movies</h1>
                    <div className="input__wrapper">
                    <input
                        id="search__tag"
                        type="text"
                        placeholder="Search by Movie name, or Keyword"
                        className="header__input"
                        onChange={(event) => (
                            setSearchTag(event.target.value)
                        )}
                        onKeyDown={(event) => {
                            event.key === "Enter" && onSearchKeyPress(event.key)
                        }}
                    />
                    <button className="btn--search btn" onClick={() => onSearch()}>
                        <IconContext.Provider value={{ className: "react__icon"}}>
                            <FaMagnifyingGlass/>
                        </IconContext.Provider>
                    </button>
                    </div>
                </div>
            </section>

            <section id="results">
                <div className="container">
                    <div className="row">
                    <div className="search__container">
                        <h2 className="subtitle">Search Results:</h2>
                        
                        <div className="filter__container">
                        <h3 className="filter__title">Filter:</h3>
                        <select
                            id="filter"
                            className="filter__sort"
                            defaultValue={"DEFAULT"}
                            onChange={(event) => filterMovies(event)}
                        >
                            <option disabled value="DEFAULT">Sort</option>
                            <option value="OLD__TO__NEW">
                            Release Date, Classic to New
                            </option>
                            <option value="NEW__TO__OLD">
                            Release Date, New to Classic
                            </option>
                        </select>
                    </div>
                </div>
                {
                            loading ? (
                                <Loader2 size={64} className="loader"/>

                            ) : (
                                <div className="movies">
                                    {
                                        movies.map(movie => (
                                            <div className = "movie" key = {movie.imdbID}>
                                                <Link to = {`${movie.imdbID}`} >
                                                    <div className="movie__wrapper" >
                                                        <figure className="movie__img--wrapper">
                                                            <img src={movie.Poster}
                                                            className="movie__img click" alt="Poster"/>
                                                        </figure>
                                                        <div className="movie__title">
                                                            {movie.Title}({movie.Year})
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                </div>
            </div>
            </section>

        </>
     )
}

export default Movies;
 