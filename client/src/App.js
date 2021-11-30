import "./App.css";

import {  Switch, Route } from "react-router-dom";

import LandingPage from "./pages/index";

import Home from './components/Home /index';
import Navbar from './components/Navbar/index'
import RecipeDetail from './components/RecipeDetail/index'


function App() {
  return (
   
    <div>

    {/* <Navbar/> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/home" component={Home} />
        <Route  path="/recipe/:id" component={RecipeDetail} />

      </Switch>
      </div>
    
    
  );
}

export default App;
