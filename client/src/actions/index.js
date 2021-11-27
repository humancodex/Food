import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_BY_ID = "GET_BY_ID";
export const GET_BY_NAME = "GET_BY_NAME";
export const CREATE_RECIPES = "CREATE_RECIPE";

//shortcuts enf / edf / rfce
export const getRecipes = () => {
  return async function (dispatch) {
    let get = await axios.get("http://localhost:3000/recipes/");
    return dispatch({
      type: "GET_RECIPES",
      payload: get.data,
    });
  };
};
