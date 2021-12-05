import React from "react";
import styles from "./Home.module.css"
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import { useEffect , useState} from "react";
import Pages from '../Paginado/Paginas'
import Recipes from "../Recipes/index";
import SearchBar from "../SearchBar/Index";

// //aqui me hago el paginado
//RECIBE envioa recipes / SEARCHBAR

const Home = () => {
  const dispatch = useDispatch();
  const recips = useSelector((state) => state.recipes);

  useEffect(() => dispatch(getRecipes()), [dispatch]);


//PAGINADO
  const [currentPage , setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(9)
  const indexOfLastRp = currentPage * recipesPerPage
  const indexOfFirstRp = indexOfLastRp - recipesPerPage
  const currentRecipes = recips.slice(indexOfFirstRp, indexOfLastRp)
const paginado = (pageNumber)=> setCurrentPage(pageNumber)



if (
  currentRecipes.length > 0 &&
  currentRecipes[0] !=  "No se encontró la receta solicitada"
) {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Pages
        recipsPerPage={recipesPerPage}
        recips={recips.length}
        paginado={paginado}
      />

      <div className={styles.recipes}>
        {" "}
        {currentRecipes?.map((r) => (
          <Recipes id={r.id} name={r.name} image={r.image} diets={r.diets} />
        ))}
      </div>
    </div>
  );
} else {
  return (
    <div className={styles.container2}>
      <SearchBar />
      <div className={styles.notFound}>
        <h2>No se encontró la receta solicitada</h2>
      </div>
    </div>
  );
}

  
  ;
};

export default Home;
