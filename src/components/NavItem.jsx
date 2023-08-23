import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavItem (){
   const {theme, handleTheme} = useContext(ThemeContext)
   return(
        <>
            <button className="btn btn-primary" onClick={handleTheme}>{ theme } temayı degistir</button>
        </>
   )
}

export default NavItem;