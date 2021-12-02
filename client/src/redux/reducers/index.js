import {
  GET_RECIPES,
  GET_BY_ID,
  GET_DIETS,
  FILTER_BY_DIETS,
} from "../actions/index";

// 
const initialState ={
recipes : [],
detailId: {},
diets: [],
allRecipes:[],
}


export default function rootReducer(state = initialState,action) {


    switch (action.type) {
      case GET_RECIPES:
        return {
          ...state,
          recipes: action.payload,
          allRecipes:action.payload
        };
      case GET_BY_ID:
        return {
          ...state,
          detailId: action.payload,
        };
      case GET_DIETS:
        return {
          ...state,
          diets: action.payload,
        };
      case FILTER_BY_DIETS:

      const allRecipes = state.allRecipes
      const filteredDiets =
        action.payload === "all"
          ? allRecipes
          : allRecipes.filter(
              (r) => r.diet.includes(action.payload) 
            );


        return {
         ...state,
         recipes: filteredDiets,
        };

      default:
        return state;
    }
};

