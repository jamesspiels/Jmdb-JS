import { Link } from "react-router-dom";

const NavBar = () => {

    return ( 
        <>
                <Link to="/" className="nav__link">
                    <span 
                        className="nav__link--anchor link__hover-effect link__hover-effect--black"
                    >
                        Home
                    </span>
                </Link>
                <Link to="/movies" className="nav__link">
                    <span 
                        className="nav__link--anchor nav__link--home link__hover-effect link__hover-effect--purple"
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
        </>
     );
}
 
export default NavBar;