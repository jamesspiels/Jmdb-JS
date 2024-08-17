import { Link as LinkIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const OpenMenu = (onToggle) => {

    const [close, setClose] = useState(true)
    
    function closeMenu() {
        setClose(!close)
        onToggle.onToggle()
    }
    return ( 
        <>
            {
                close && (
                    <div className="modal">
                        <h1>
                            <X className="close__modal click" onClick={closeMenu}/>
                        </h1>
                        <div className="modal__links--container">
                            <Link to ="/" className="modal__links">
                                <div className=" modal__link">
                                    <LinkIcon size={16}/>
                                    Home
                                
                                </div>
                            </Link>
                            <Link to ="/movies" className="modal__links">
                                <div className=" modal__link">
                                    <LinkIcon size={16}/>
                                    Movies
                                </div>
                            </Link>
                            <Link to ="/" className="modal__links">
                                <div className=" modal__link">
                                    <LinkIcon size={16}/>    
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </div>

                )
            }
        </>

     );
}
 
export default OpenMenu;