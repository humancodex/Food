import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/index";
import styles from "./RecipeDetail.module.css";

function RecipeDetail(props) {
  let dispatch = useDispatch();
  let detailId = useSelector((state) => state.detailId);
console.log(detailId);
  useEffect(() => {
    let id = props.match.params.id;

    dispatch(getById(id));
    // console.log(detailId);
  }, [dispatch]);

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
        DIETS: {detailId.diets?.map(d=><span>{d}</span>)}
      </div>
      <p>SUMMARY: {detailId.summary}</p>
      <p>STEPS : {detailId.steps}</p>
    </div>
  );
}

export default RecipeDetail;

// diets: (2) ['lacto ovo vegetarian', 'vegetarian']
// healthLevel: 39
// id: 716276
// image: "https://spoonacular.com/recipeImages/716276-556x370.jpg"
// name: "Doughnuts"
// readyInMinutes: 45
// score: 96
// steps: "1. In a bowl mix the water with the yeast and honey, whisk and allow to sit for 15 minutes or until the mixture is foamy.2. Mix the flour with the salt and powdered milk and pour the yeast mixture into the bowl.Knead the dough till its elastic and not sticky and cover and leave to double in size. This could take 1-2 hours.On a lightly floured surface, roll out your dough but not to thin so your doughnuts are not flat and cut the dough into circles. If You have a doughnut cutter use that, if not use a small round shaped cover or bowl to make your circles and a smaller container for the middle hole. You can improvise and use the mouth of a plastic bottle to make the hole in the middle.Leave to rise for another 45 minutes.3. Heat up your oil and fry the doughnuts till they are brown on both sides.Vanilla Glaze4. Mix 1 cup of powdered sugar with 30 ml of milk and 1 teaspoon of vanilla.5. Whisk till its properly mixed and drizzle the doughnuts with it.6. Add sprinkles for garnishing7. Chocolate GlazeI used a chocolate sauce and drizzled over the doughnuts with sprinkles to top it."
// summary: "Need a <b>vegetarian morn meal</b>? Doughnuts co
