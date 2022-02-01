import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const SCORE_ORDER = "SCORE_ORDER";
export const NAME_ORDER = "NAME_ORDER";
export const GET_DIETS = "GET_DIETS";
export const GET_BY_ID = "GET_BY_ID";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_RECIPES = "CREATE_RECIPE";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";


//modularizar constants 

// crear archivo de urls , donde tenga un objeto que se llame links y tenga la prpiedad recipes 




//shortcuts enf / edf / rfce
export const getRecipes = () => {
  return  function (dispatch) {
axios.get("http://localhost:3001/recipes/").then((response) => {
 return dispatch({
   type: "GET_RECIPES",
   payload: response.data,
 });
    })

   
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/recipes?name=" + name);
    return dispatch({
      type: "GET_BY_NAME",
      payload: get.data,
    });
  };
};
export const getById = (id) => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/recipes/" + id);
    return dispatch({
      type: "GET_BY_ID",
      payload: get.data,
    });
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/diets");

    return dispatch({
      type: "GET_DIETS",
      payload: get.data,
    });
  };
};

export const FilterRecipesByDiets = (payload) => {
  return {
    type: "FILTER_BY_DIETS",
    payload,
  };
};

export const postRecipe = (object) => {
  return async function () {
    await axios.post("http://localhost:3001/recipes/", object);
  };
};

export const sortRecipesByName = (order) => {
  //e.target.value del boton asc o desc
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/name/" + order);

    return dispatch({
      type: "NAME_ORDER",
      payload: get.data,
    });
  };
};

export const sortRecipesByScore = (order) => {
  //e.target.value del boton asc o desc
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3001/score/" + order);

    return dispatch({
      type: "SCORE_ORDER",
      payload: get.data,
    });
  };
};
