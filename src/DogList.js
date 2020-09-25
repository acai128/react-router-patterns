import React from 'react';
import { NavLink } from "react-router-dom";
import DogDetails from "./DogDetails"

function DogList(props){
    console.log('props', props)
    return (
      <div>
        {props.dogs.map( dog => (
          <DogDetails
            name={dog.name}
            src={dog.src}
            age={dog.age}
            facts={dog.facts} 
        />
        ))}
      </div>
    )
  }

export default DogList; 


  