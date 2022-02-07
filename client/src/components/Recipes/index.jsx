import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Recipes.module.css";

const Recipe = ({ id, name, image, diets }) => {
	return (
		<NavLink to={`/recipe/${id}`} className={styles.navlink}>
			<div className={styles.container}>
				<img src={image} alt="" className={styles.img} />
				<div className={styles.card}>
					<h2 className={styles.h2}>{name}</h2>
					<div className={styles.diets}>
						{diets.map((d, i) => (
							<span key={i}> {d.charAt(0).toUpperCase() + d.slice(1)}. </span>
						))}
					</div>
				</div>
			</div>
		</NavLink>
	);
};

export default Recipe;
