import React from 'react';
import { NavLink } from "react-router-dom";

function DogDetails({name, src, age, facts}){
    return (
        <div >
          <p>
            Name : {name}
            src : {src}
            age : {age}
            facts : {facts}
          </p>
        </div>
    )
  } 


export default DogDetails; 