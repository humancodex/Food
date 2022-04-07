const axios = require("axios");
// const { Sequelize } = require("sequelize");
const { Recipe, Diet } = require("../../db");
const { API_KEY, NEXT_KEY } = process.env;

const API = NEXT_KEY;

async function getRecipes(req, res, next) {
  //tryc y apretar enter
  try {
    let apiGet = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API}&addRecipeInformation=true`
    );

    const apiInfo = apiGet.data.results;

    const apiRecipe = await apiInfo.map((r) => {
      var stepByStep = "";
      if (r.analyzedInstructions[0]) {
        const stepsInfo = r.analyzedInstructions[0].steps;
        stepsInfo.forEach((i) => {
          stepByStep += i.number + ". " + i.step;
        });
      }

      if (r.vegetarian) r.diets.push("vegetarian");

      return {
        id: r.id,
        name: r.title,
        summary: r.summary,
        score: r.spoonacularScore,
        healthLevel: r.healthScore,
        readyInMinutes: r.readyInMinutes,
        image: r.image,
        steps: stepByStep,
        diets: r.diets,
      };
    });
//DB
    let listRecipes = await Recipe.findAll({ include: Diet });

    formateo = listRecipes.map((recipe) => {
      return {
        id: recipe.id,
        image: recipe.image,
        name: recipe.name,
        diets: recipe.diets.map((d) => d.name),
      };
    });
    
    res.status(200).json(formateo.concat(apiRecipe));
  } catch (e) {
    next(e);
  }
} //done

async function sortRecipes(req, res, next) {
  //tryc y apretar enter
  let { by, sort } = req.params;
  try {
    let apiGet = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API}&addRecipeInformation=true`
    );

    const apiInfo = apiGet.data.results;

    const apiRecipe = await apiInfo.map((r) => {
      var stepByStep = "";
      if (r.analyzedInstructions[0]) {
        const stepsInfo = r.analyzedInstructions[0].steps;
        stepsInfo.forEach((i) => {
          stepByStep += i.number + ". " + i.step;
        });
      }

      if (r.vegetarian) r.diets.push("vegetarian");

      return {
        id: r.id,
        name: r.title,
        summary: r.summary,
        score: r.spoonacularScore,
        healthLevel: r.healthScore,
        readyInMinutes: r.readyInMinutes,
        image: r.image,
        steps: stepByStep,
        diets: r.diets,
      };
    });

    let listRecipes = await Recipe.findAll({ include: Diet });

    formateo = listRecipes.map((recipe) => {
      return {
        id: recipe.id,
        image: recipe.image,
        name: recipe.name,
        score: recipe.score,
        diets: recipe.diets.map((d) => d.name),
      };
    });
    let allData = formateo.concat(apiRecipe);

    if (by === "name") {
      //alfabetico

      if (sort === "asc") {
        allData.sort((a, b) => {
          if (a.name > b.name) return 1;//numeros de indice en el array 
          if (a.name < b.name) return -1;
          return 0 ;
        });

       res.json(allData)

      } else {


         allData.sort((a, b) => {
           if (a.name > b.name) return -1;
           if (a.name < b.name) return 1;
           return 0;
         });

         res.json(allData);
      }
    } else {
      //score    
if (sort === "asc") {
  allData.sort((a, b) => {
    if (a.score > b.score) return 1; //numeros de indice en el array
    if (a.score < b.score) return -1;
    return 0;
  });

  res.json(allData);
  
} else {
  allData.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });

  res.json(allData);
}
      
    }
    
  } catch (e) {
    next(e);
  }
} //done

async function getRecipeByName(req, res, next) {
  try {
    let name = req.query.name;
    // name = "%" + name+ "%"; //reemplaza el includes
    if (name) {
      name = name.toLowerCase();
      let getRp = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API}&addRecipeInformation=true`
      );

      let apiRecipes = getRp.data.results.filter((r) =>
        r.title.toLowerCase().includes(name)
      );

      const recipeInfo = apiRecipes.map((r) => {
        if (r.vegetarian) r.diets.push("vegetarian");

        return {
          name: r.title,
          image: r.image,
          diets: r.diets,
        };
      });

      // name = "%" + name + "%";

      let recipes = await Recipe.findAll({
        where: {
          name: name,
        },
        include: Diet,
      });

      let result = recipes.concat(recipeInfo);
      if (result.length > 0) res.json(result);
      else res.send(["No se encontró la receta solicitada"]);
    } else {
      getRecipes(req, res, next);
    }
  } catch (error) {
    next(error);
  }
} //done

const postRecipe = async (req, res, next) => {
  try {
    const { recipe, diets } = req.body;
    let receta = await Recipe.create(recipe);

    diets.forEach(async (d) => {
      let dieta = await Diet.findOne({ where: { name: d } });
      await dieta.addRecipe(receta);
    });

    let response = await Recipe.findAll({
      where: { name: recipe.name },
      include: Diet,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
}; //done

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}`
      )
      .then(
        (r) => {
          let getR = r.data;

          var pasos = "";
          if (getR.analyzedInstructions[0]) {
            let stepsInfo = getR.analyzedInstructions[0].steps;
            stepsInfo.forEach((i) => {
              pasos += i.number + ". " + i.step;
            });
          }
          if (getR.vegetarian) getR.diets.push("vegetarian");

          let recipe = {
            id: getR.id,
            name: getR.title,
            summary: getR.summary,
            score: getR.spoonacularScore,
            healthLevel: getR.healthScore,
            readyInMinutes: getR.readyInMinutes,
            diets: getR.diets,
            image: getR.image,
            steps: pasos,
          };

          res.status(200).json(recipe);
        },
        async () => {
          let db = await Recipe.findOne({ where: { id }, include: Diet });

          if (db) {
            var formateo = {
              id: db.id,
              name: db.name,
              summary: db.summary,
              score: db.score,
              healthLevel: db.healthLevel,
              readyInMinutes: db.readyInMinutes,
              diets: db.diets.map((d) => d.name),
              image: db.image,
              steps: db.steps,
            };

            res.status(200).json(formateo);
          }
        }
      );
  } catch (error) {
    res.status(400).send(error);
  }
}; //done


module.exports = {
  getRecipes,
  getRecipeByName,
  postRecipe,
  getById,
  sortRecipes,
};


//  Recipe.findAll({
//    where: {
//      name: name,
//    },
//    include: Diet,
//  }).then((recipe)=>{
//     let result = recipe.concat(recipeInfo);
//     if (result.length > 0) res.json(result);
//     else res.send(["No se encontró la receta solicitada"]);
//  })

