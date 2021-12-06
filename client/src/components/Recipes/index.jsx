import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Recipes.module.css";

const Recipe = ({ id, name, image, diets }) => {

  return (
    <NavLink to={`/recipe/${id}`} className={styles.navlink}>
      <div className={styles.container}>
        <h2 className={styles.h2}>{name}</h2>
        <img src={image} alt="" className={styles.img} />

        <div>
          {diets.map(d=>  <span> {d.charAt(0).toUpperCase() + d.slice(1)}. </span>)}
        </div>
      </div>
    </NavLink>
  );
};

export default Recipe;
