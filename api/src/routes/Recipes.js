const { Router } = require("express");
// Importar todos los controllers
const { postRecipe , getRecipeByName ,getById } = require("./controllers/_Recipes");

const server = Router();

// Configurar los routers, GET POST

server.get('/',getRecipeByName);//recipes/?name=
server.post('/', postRecipe)
server.get('/:id',getById)

 




module.exports = server;
