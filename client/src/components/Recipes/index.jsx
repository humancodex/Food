import React from "react";
import {NavLink} from "react-router-dom"


const Recipe = ({ id, name, image, diet }) => {
  return (
    
    <NavLink to={`/recipe/${id}`}>
      <div>
        <h2>{name}</h2>
        <img src={image} alt="" />
        <h3>{diet}</h3>
      </div>
       </NavLink>
  );
};

export default Recipe;
