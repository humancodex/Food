const axios = require("axios");
const { Recipe, Diet } = require("../../db");
const { API_KEY } = process.env;

async function getRecipes(req, res, next) {
  //tryc y apretar enter
  try {
    let apiGet = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const apiInfo = apiGet.data.results;
  
    const apiRecipe = await apiInfo.map((r) => {
      var stepByStep = ""
      if (r.analyzedInstructions[0]) {
        const stepsInfo = r.analyzedInstructions[0].steps;
        stepsInfo.forEach(i =>{
          stepByStep += i.number + ". " + i.step;
        })
      }

      return {
        name: r.title,
        summary: r.summary,
        score: r.spoonacularScore,
        healthLevel: r.healthScore,
        readyInMinutes: r.readyInMinutes,
        image: r.image,
        steps: stepByStep,
      };
    });

    let listRecipes = await Recipe.findAll();

    res.json(listRecipes.concat(apiRecipe))


  
    //       .then((r.data.results) => {
    //         r.data.results.map(recipe=>{
    // return {
    //         id: recipe.id,
    //         name: recipe.name,
    //       };
    //         })
    //       });
  } catch (e) {
    next(e);
  }
}

async function getRecipeByName(req, res, next) {
  try {
    let { name } = req.query;
    if (name) {
      let db = await Recipe.findAll({ where: { name }, include: Diet });
      if (db.length > 0) {
        res.status(200).json(db);
      } else {
        let foundR = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?name=${name}&apiKey=${API_KEY}&addRecipeInformation=true`
        );

        if (foundR.data) {
        let recipeInfo = {
          name: foundR.data.name,
        };

        res.status(200).json(recipeInfo);
      }
      }
    } else {
      getRecipes(req, res, next);
    }
  } catch (error) {
    next(error);
  }
}

const postRecipe = async (req, res, next) => {
  const { recipe } = req.body;
  // intanciadeDieta.addRecipe(instanciadeReceta)
  // instancia --> receta = await Recipe.creatte{}
  
  receta = await Recipe.create(recipe)
  // dieta = Diet.findOne({ where: { name: e}})

  try {
  } catch (error) {
    next(error);
  }
};

// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas

// }
module.exports = {
  getRecipes,
  getRecipeByName,
  postRecipe
};

// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
// [ ] POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
