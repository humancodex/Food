const { Router } = require("express");
// Importar todos los controllers
const { postRecipe , getRecipeByName } = require("./controllers/_Recipes");

const server = Router();

// Configurar los routers, GET POST
// server.use('/get', getRecipes);//recipes/get

server.get('/',getRecipeByName);//recipes/?name=
server.post('/', postRecipe)

 




module.exports = server;
