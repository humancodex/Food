import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/index";
import styles from "./RecipeDetail.module.css";

function RecipeDetail(props) {
  let dispatch = useDispatch();
  let detailId = useSelector((state) => state.detailId);

  useEffect(() => { 
    let id = props.match.params.id;

    dispatch(getById(id));
  }, [dispatch, props.match.params.id]);

  return (
    <div className={styles.container}>
      <h1>{detailId.name}</h1>
      <img src={detailId.image} alt="" />
      <div>
        <ul>
          <li>READY IN : {detailId.readyInMinutes}</li>
          <li>SCORE: {detailId.score}</li>
          <li>HEALTH LEVEL: {detailId.healthLevel}</li>
        </ul>
      </div>
      <div>
        DIETS:{" "}
        {detailId.diets?.map((d) => (
          <span>{d}</span>
        ))}
      </div>
      <p>SUMMARY: {detailId.summary}</p>
      <p>STEPS : {detailId.steps}</p>
    </div>
  );
}

export default RecipeDetail;
