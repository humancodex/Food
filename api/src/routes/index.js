const { Router } = require('express');
const{sortRecipes} = require('../routes/controllers/_Recipes')
// Importar todos los routers;
const RecipesRouter = require('./Recipes');
const DietsRouter = require('./Diets')


const router = Router();

// Configurar los routers
router.use('/recipes', RecipesRouter);
router.use('/diets', DietsRouter);
router.use('/:by/:sort',sortRecipes); //by = score o name / sort = ascendente o descendente 
/* [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por puntuación */

module.exports = router;
