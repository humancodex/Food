import { useEffect } from "react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions/index";
import { useHistory } from "react-router-dom";
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
      diets: [...new Set([...recipe.diets, e.target.value])],
    });
  };


  const history = useHistory();

  const handleSubmit = (e) => {
    //el valor del evento se va a guardar en el estado
    e.preventDefault();
    let Recipe = {//formateo 
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
    history.push('/home')
     alert('RECETA CREADA CON ÉXITO!')
  };






  return (
    //formulario controlado, los valores de cada uno de los inputs estan asociados al estado del componente
    //las regex me permiten forzar formatos en un input de

    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={recipe.name}
          type="text"
          id="name"
          name="name"
          required
        />
        <label htmlFor="summary">Summary</label>
        <input
          onChange={handleChange}
          value={recipe.summary}
          type="text"
          id="summary"
          name="summary"
          required
        />
        <label>Score</label>
        <select onChange={handleChange} name="score">
          <option value="">---</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <label htmlFor="healthLevel">HealthLevel</label>
        <input
          onChange={handleChange}
          value={recipe.healthLevel}
          name="healthLevel"
          type="number"
          id="healthLevel"
          required
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          onChange={handleChange}
          value={recipe.instructions}
          name="instructions"
          type="text"
          id="instructions"
          required
        />
        <label htmlFor="DIETS">DIETS</label>
        <select onChange={handleSelect}>
          {diets?.map((d, i) => (
            <option key={i} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
        <label htmlFor="ready_in">Ready in</label>
        <input
          onChange={handleChange}
          value={recipe.readyInMinutes}
          name="readyInMinutes"
          type="text"
          id="ready_in"
          required
        />
        <label>minutes</label>
        <button type="submit">Create</button>
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