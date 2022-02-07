import "./App.css";

import {  Switch, Route } from "react-router-dom";

import LandingPage from "./pages/index";

import Home from './components/Home /index';
import Navbar from './components/Navbar/index'
import RecipeDetail from './components/RecipeDetail/index'
import RecipeCreate from './components/RecipeCreate/RecipeCreate'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			
			main: "#673ab7",
		},
		secondary: {
		
			main: "#606dbb",
		},
	},
});


function App() {
  return (
		<>
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
		</>
	);
}

export default App;
