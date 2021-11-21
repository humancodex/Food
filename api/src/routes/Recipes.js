const { Router } = require("express");
// Importar todos los controllers
const { getRecipes , getRecipeByName } = require("./controllers/_Recipes");

const server = Router();

// Configurar los routers, GET POST
// server.use('/get', getRecipes);//recipes/get

server.use('/',getRecipeByName);//recipes/?name=


 




module.exports = server;
