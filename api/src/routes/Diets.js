const { Router } = require("express");
// Importar todos los controllers
const { getDiets } = require("./controllers/_Diets");

const server = Router();

// Configurar los routers, GET POST
server.use("/get", getDiets);

module.exports = server;
