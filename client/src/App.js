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
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/create" component={RecipeCreate} />
        <Route
          path="/about"
          component={() => {
            window.location.href =
              "https://www.linkedin.com/in/juan-sebasti%C3%A1n-carvajal-b%C3%A1ez-3622ba107/";
            return null;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
