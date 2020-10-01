import React from 'react';
import { NavLink } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails"; 

function DogList(props){
    // console.log('props', props)
    return (
      <div>
        
        {/* {dogs.map(dog => (
            <div>
                name={dog.name}
                <img src={dog.src} />
                age={dog.age}
                facts={dog.facts} 
                <NavLink name={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
              {dog.name}
            </NavLink>
                
            </div>
        ))} */}
      </div>
    )
  }

export default DogList; 





  