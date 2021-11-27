import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/index";

import Home from './components/Home /index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/home" component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
