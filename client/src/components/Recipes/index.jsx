import React from "react";
import {NavLink} from "react-router-dom"
import styles from "./Recipes.module.css";


const Recipe = ({ id, name, image, diet }) => {
  return (
    
    <NavLink to={`/recipe/${id}`} className={styles.navlink}>
      <div className={styles.container}>
        <h2 className={styles.h2}>{name}</h2>
        <img src={image} alt="" className={styles.img} />
        <h3>{diet}</h3>
      </div>
       </NavLink>
  );
};

export default Recipe;
