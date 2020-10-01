import React from 'react'; 
import { NavLink } from "react-router-dom"; 
import DogDetails from "./DogDetails"; 


function Nav(props){
   
    return (
            <nav>
            <NavLink exact to= "/dogs">Home</NavLink>
        {props.dogs.map(dog => (    
          <div>
            <NavLink to={`/dogs/${dog.name}`}> {dog.name} </NavLink> 
          </div>
        ))}
                {/* {dogs.map(dog => (
                    <NavLink name={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
                    {dog.name}
                    </NavLink>))} */}
                {/* <nav className="NavBar"> */}
                    {/* <NavLink exact to="/">
                    Home
                    </NavLink> */}
                    {/* <NavLink exact to="/dogs">
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
                    </NavLink> */}
            </nav>
    )
}

export default Nav; 