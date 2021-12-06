import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDiets,
  FilterRecipesByDiets,
  getByName,
  sortRecipesByName,
  sortRecipesByScore,
} from "../../redux/actions/index";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => dispatch(getDiets()), [dispatch]);

  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleName = (e) => {
    e.preventDefault();
    dispatch(getByName(name.toLowerCase()));
    setName("");
  };

  const HandleFilterByDiet = (e) => {
    dispatch(FilterRecipesByDiets(e.target.value));
  };

  const handleSortByName = (e) => {
    dispatch(sortRecipesByName(e.target.value));
  };
  const handleSortByScore = (e) => {
    dispatch(sortRecipesByScore(e.target.value));
  };

  return (
    <div className={styles.container}>
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
        ORDER BY NAME :{" "}
        <select
          onChange={(e) => {
            handleSortByName(e);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        ORDER BY SCORE :
        <select
          onChange={(e) => {
            handleSortByScore(e);
          }}
        >
          <option value="asc">High Score</option>
          <option value="desc">Low Score</option>
        </select>
        DIET TYPES :
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
