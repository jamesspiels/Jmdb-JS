import { useState,useEffect, useContext } from "react";
import { Menu } from "lucide-react";
import OpenMenu from "./Burger/OpenMenu";



 const BurgerMenu = () => {
    const [toggleBurger, setToggleBurger] = useState(false)

    
    function onToggle(){
        setToggleBurger(!toggleBurger)
    }


    return ( 
        <>
            <Menu width={32} height={32} className="burger__menu" onClick={onToggle}/>
            {toggleBurger && <OpenMenu onToggle ={onToggle}/>}
        </>
     );
}
 
export default BurgerMenu;