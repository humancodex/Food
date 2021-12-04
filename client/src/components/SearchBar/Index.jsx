import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDiets,
  FilterRecipesByDiets,
  getByName,
} from "../../redux/actions/index";
import styles from './SearchBar.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => dispatch(getDiets()), [dispatch]);

  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleName = (e) => {
    
   e.preventDefault();  
   dispatch(getByName(name.toLowerCase()))
   setName('')
  
  };

  const HandleFilterByDiet = (e) => {
    dispatch(FilterRecipesByDiets(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.foodly}>FOODLY</h1>
      <form onSubmit={handleName}>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          placeholder="search..."
        ></input>
        <button>search</button>
      </form>
      <div className={styles.selectcontainer}>
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
        <select
          onChange={(e) => {
            HandleFilterByDiet(e);
          }}
        >
          <option value="all">all</option>
          {diets?.map((d) => (
            <option value={d.name}>{d.name}</option>
          ))}
        </select>
        <button onClick={() => dispatch(FilterRecipesByDiets("all"))}>
          reload
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
