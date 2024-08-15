import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <section id="landing__page">
                <nav>
                    <a href="#" className="logo__link">
                        <img src="\FullLogo_Transparent__pink--no-border.png" id = "personal-logo" className="logo--img"/>
                        JMDb
                    </a>
                    

                    <ul className="nav__link--list">
                        <Link to="/" className="nav__link">
                            <span 
                                className="nav__link--anchor nav__link--home link__hover-effect link__hover-effect--purple"
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
                <header className="header">
                    <div className="header__content">
                        <h1 className="title">
                            The United States' most awarded movie subscription platform
                        </h1>
                        <h2 className = "subtitle"> 
                            FIND YOUR DREAM MOVIE WITH
                            <span className="text--color"> JMDb</span>
                        </h2>
                        <div className="input__wrapper">
                            <Link to="/movies" className="movie__page--btn">
                                <button className="btn--search btn home__page--btn">
                                    <div className="movie__page--btn-wrapper">
                                        <h2 className="movie__page--btn-text">Find your movie </h2>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <figure className = "header___img--wrapper">
                            <img src="/undraw_home_cinema_l7yl.svg" className = "header__img"/>
                        </figure>
                    </div>
                </header>
            </section>


        </>
        
     );
}
 
export default Home;