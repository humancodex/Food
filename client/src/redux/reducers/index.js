import {GET_RECIPES,GET_BY_ID,GET_DIETS } from "../actions/index"

// 
const initialState ={
recipes : [],
detailId: [],
diets: [],
}


export default function rootReducer(state = initialState,action) {
    switch (action.type) {
      case GET_RECIPES:
        return {
          ...state,
          recipes: action.payload,
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

      default:
        return state;
    }
};

