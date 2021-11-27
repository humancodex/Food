import React from "react";
import { useSelector , useDispatch } from "react-redux";

import {useEffect} from 'react'

import {getRecipes} from '../../actions/index'


const Recipe = () => {

  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();


  useEffect(() => dispatch(getRecipes()),)

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <div className="content">
              <div className="header">
    {/* {recipes.map((r)=>{


})} */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
