import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import { useEffect } from "react";

import Recipes from "../Recipes/index";


// //aqui me hago el paginado
//RECIBE envioa recipes / SEARCHBAR

const Home = () => {
  const dispatch = useDispatch();
  const recips = useSelector((state) => state.recipes);

  useEffect(() => dispatch(getRecipes()), [dispatch]);


//PAGINADO
  const [currentPage , setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(9)
  const indexOfLastRp = currentPage * recipsPerPage
  const indexOfFirstRp = indexOfLastRp - recipsPerPage
  const currentRecipes = recips.slice(indexOfFirstRp, indexOfLastRp)




  return (
  
    <div>
    
      {currentRecipes?.map((r) => (
        
          <Recipes id={r.id} name={r.name} image={r.image} diet={r.diet} />
       
      ))}
    </div>


  );
};

export default Home;
