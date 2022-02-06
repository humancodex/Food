import React from "react";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import Pages from "../Paginado/Paginas";
import Recipes from "../Recipes/index";
import SearchBar from "../SearchBar/Index";
import CircleLoader from "react-spinners/CircleLoader";



const Home = () => {
	const dispatch = useDispatch();
	const recips = useSelector((state) => state.recipes);
	const [Loading, setLoading] = useState(false);


	useEffect(() => {
		setLoading(true);
		dispatch(
			getRecipes()
		);
		setLoading(false);
	}, [dispatch]);

	//PAGINADO
	const [currentPage, setCurrentPage] = useState(1);
	const [recipesPerPage, setRecipesPerPage] = useState(9);
	const indexOfLastRp = currentPage * recipesPerPage;
	const indexOfFirstRp = indexOfLastRp - recipesPerPage;
	const currentRecipes = recips.slice(indexOfFirstRp, indexOfLastRp);
	const paginado = (pageNumber) => setCurrentPage(pageNumber);

	// if (
	// 	currentRecipes.length > 0 &&
	// 	currentRecipes[0] !== "No se encontró la receta solicitada"
	// ) {

	if (Loading) {
		<div className={styles.sweetLoading}>
			{" "}
			<CircleLoader color={"#4336D7"} loading={Loading} size={30} />
		</div>;
	} else
		return (
			<div className={styles.container}>
				<SearchBar />
				<div className={styles.recipes}>
					{" "}
					{currentRecipes?.map((r, i) => (
						<Recipes
							key={i}
							id={r.id}
							name={r.name}
							image={r.image}
							diets={r.diets}
						/>
					))}
				</div>
				<Pages
					recipsPerPage={recipesPerPage}
					recips={recips.length}
					paginado={paginado}
				/>
			</div>
		);
};

export default Home;

{
	/* // <div className={styles.container2}>
// 	<SearchBar />
// 	<div className={styles.notFound}>
// 		<h2>No se encontró </h2>
// 	</div>
// </div> */
}
