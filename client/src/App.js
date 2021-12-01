import "./App.css";

import {  Switch, Route } from "react-router-dom";

import LandingPage from "./pages/index";

import Home from './components/Home /index';
import Navbar from './components/Navbar/index'
import RecipeDetail from './components/RecipeDetail/index'
import RecipeCreate from './components/RecipeCreate/RecipeCreate'



function App() {
  return (
   
    <div>

    {/* <Navbar/> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/home" component={Home} />
        <Route  path="/recipe/:id" component={RecipeDetail} />
        <Route  path="/create" component={RecipeCreate} />

      </Switch>
      </div>
    
    
  );
}

export default App;
