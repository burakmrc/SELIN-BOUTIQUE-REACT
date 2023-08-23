import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";


function Nav (){
   return(
        <>
            <h1>
                Nav
            </h1>
            <ul>
                <li>
                    <NavLink to="/">Summer</NavLink>
                </li>
                <li>
                    <NavLink to="autumn">Autumn</NavLink>
                </li>
                <li>
                    <NavLink to="spring">Spring</NavLink>
                </li>
                <li>
                    <NavLink to="winter">Winter</NavLink>
                </li>
            </ul>
            <NavItem />
        </>
   )
}

export default Nav;