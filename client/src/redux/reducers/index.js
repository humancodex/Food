import {
  GET_RECIPES,
  GET_BY_ID,
  GET_DIETS,
  FILTER_BY_DIETS,
  GET_BY_NAME,
  NAME_ORDER,
  SCORE_ORDER
} from "../actions/index";

// 
const initialState ={
recipes : [],
detailId: {},
diets: [],
allRecipes:[],
loading: false,
setLoading: true
}


export default function rootReducer(state = initialState,action) {//reducer actualiza el estado 


    switch (action.type) {
      case GET_RECIPES:
        return {
          ...state,
          recipes: action.payload,
          allRecipes: action.payload,
        };
      case GET_BY_ID:
        return {
          ...state,
          detailId: action.payload,
        };
      case GET_BY_NAME:
        return {
          ...state,
          recipes: action.payload,
        };
      case GET_DIETS:
        return {
          ...state,
          diets: action.payload,
        };
      case NAME_ORDER:
        return {
          ...state,
          recipes: action.payload,
          allRecipes: action.payload,
        };
      case SCORE_ORDER:
        return {
          ...state,
          recipes: action.payload,
          allRecipes: action.payload,
        };
      case FILTER_BY_DIETS:
        const allRecipes = state.allRecipes;
        const filteredDiets =
          action.payload === "all"
            ? allRecipes
            : allRecipes.filter((r) => r.diets.includes(action.payload));
        return {
          ...state,
          recipes: filteredDiets,
        };

      default:
        return state;
    }
};

