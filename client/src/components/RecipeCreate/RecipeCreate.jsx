import { useEffect } from "react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions/index";
import styles from "./Create.module.css"

function RecipeCreate() {
  const [recipe, setRecipe] = useState({
    name: "",
    summary: "",
    score: "", //hacer parce int en el create recipe
    healthLevel: "",
    instructions: "",
    readyInMinutes:"",
    diets: [],
  });

  let dispatch = useDispatch();
  let diets = useSelector((state) => state.diets);
  useEffect(() => dispatch(getDiets()), [dispatch]);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => dispatch(getDiets()), [dispatch]);

  const handleSelect = (e) => {
    setRecipe({
      ...recipe,
      diets: [...recipe.diets, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    //el valor del evento se va a guardar en el estado
    e.preventDefault();
    let Recipe = {
      recipe: {
        name: recipe.name,
        summary: recipe.summary,
        score: parseInt(recipe.score),
        healthLevel: parseInt(recipe.healthLevel),
        steps: recipe.instructions,
        image: `https://www.kindpng.com/picc/m/107-1074309_food-png-black-and-white-jpg-format-download.png`,
        readyInMinutes: parseInt(recipe.readyInMinutes),
      },
      diets: recipe.diets,
    };
    dispatch(postRecipe(Recipe))
    window.location.reload()//para que se recargue luego de enviar el recarga
     alert('RECETA CREADA CON ÉXITO!')
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Name</label>
        <input onChange={handleChange} value={recipe.name} name="name" />

        <label>Summary</label>
        <input onChange={handleChange} value={recipe.summary} name="summary" />

        <label>Score</label>
        <select onChange={handleChange} name="score">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <label>HealthLevel</label>
        <input
          onChange={handleChange}
          value={recipe.healthLevel}
          name="healthLevel"
        />

        <label>Instructions</label>
        <textarea
          onChange={handleChange}
          value={recipe.instructions}
          name="instructions"
        />

        <select onChange={handleSelect}>
          {diets?.map((d) => (
            <option value={d.name}>{d.name}</option>
          ))}
        </select>

        <label>Ready in</label>
        <input
          onChange={handleChange}
          value={recipe.readyInMinutes}
          name="readyInMinutes"
        />
        <label>minutes</label>

        <button>Create</button>
      </form>
    </div>
  );
}

export default RecipeCreate;


// [ ] Un formulario controlado con los siguientes campos
// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta