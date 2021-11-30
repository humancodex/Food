import React from "react";
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



  return (
  
    <div>
<h1>FOODLY</h1>
      <SearchBar/>
      <Pages recipsPerPage={recipesPerPage} recips={recips.length}  paginado={paginado}/>
      {currentRecipes?.map((r) => (
        
          <Recipes id={r.id} name={r.name} image={r.image} diet={r.diet} />
       
      ))}

    
    </div>


  );
};

export default Home;
