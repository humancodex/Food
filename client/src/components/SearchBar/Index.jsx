import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {  getDiets,FilterRecipesByDiets} from "../../redux/actions/index";

function SearchBar() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => dispatch(getDiets()), [dispatch]);




const HandleFilterByDiet = (e)  =>{  
  dispatch(FilterRecipesByDiets(e.target.value));
}





  return (
    <div>

    
      <form>
        <input type="text"></input>
        <button>search</button>
      </form>



      ORDER BY TITLE :{" "}
      <select>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>




      ORDER BY SCORE :
      <select>
        <option value="high">High Score</option>
        <option value="low">Low Score</option>
      </select>



      DIET TYPES :{" "}
      <select   onChange={(e)=>{HandleFilterByDiet(e)}}> 
      <option value= 'all' >all</option>
        {diets?.map((d) => (
          <option value={d.name}>{d.name}</option>
        ))}
       
      </select>
    </div>
  );
}

export default SearchBar;
