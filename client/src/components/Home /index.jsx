import React from 'react'


import Navbar from '../Navbar/index'
import { HomeContainer} from "./HomeElements";
import Recipes from '../Recipes/index'
// import Navbar from "../Navbar/index";


// //aqui me hago el paginado 
//RECIBE RECIPES / SEARCHBAR  

const Home = () => {

// const dispatch = useDispatch();
// const recipes = useSelector((state)=> state.recipes);

// // useEffect(() => dispatch(getRecipes()),)


    return (
      <HomeContainer>
        {/* <Navbar /> */}
        <h1>HOLA SOY HOME</h1>
        <Recipes />
      </HomeContainer>
    );
}

export default Home

