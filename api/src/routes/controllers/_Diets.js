const { Diet } = require("../../db");
const diets_List = require("./Diets_list");


module.exports = {
 getDiets: async (req, res, next)=>{
  try {

   let formatted = diets_List.map((d)=>{
       return {
           name: d
       }
   })
    let Dts = await Diet.bulkCreate(formatted);

    res.status(200).json(Dts);
  } catch (error) {
    next(error);
  }
}
}