const { Router } = require('express');
// Importar todos los routers;
const RecipesRouter = require('./Recipes');
const DietsRouter = require('./Diets')


const router = Router();

// Configurar los routers
router.use('/recipes', RecipesRouter);
router.use('/diets', DietsRouter);


module.exports = router;
