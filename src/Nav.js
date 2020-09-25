import React from 'react'; 
import { NavLink } from "react-router-dom"; 

function Nav(){
    return (
        <nav className="NavBar">
            {/* <NavLink exact to="/">
            Home
            </NavLink> */}
            <NavLink exact to="/whiskey">
            Whiskey
            </NavLink>
            <NavLink exact to="/duke">
            Duke
            </NavLink>
            <NavLink exact to="/perry">
            Perry
            </NavLink>
            <NavLink exact to="/tubby">
            Tubby
            </NavLink>
        </nav>
    )
}

export default Nav; 