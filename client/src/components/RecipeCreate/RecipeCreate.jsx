import { useEffect } from "react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from "../../redux/actions/index";





function RecipeCreate() {
  const [recipe, setRecipe] = useState({
    name: "",
    summary: "",
    score: "", //hacer parce int en el create recipe
    healthLevel: "",
    instructions: "",
    diets:[],
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
     diets: [...recipe.diets, e.target.value]
   });
  };


  // const handleSubmit = (e) => {


  // }

  return (
    <div>
      <form>
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
