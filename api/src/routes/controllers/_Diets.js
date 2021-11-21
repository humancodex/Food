const { Diet } = require("../../db");


module.exports = {
 getDiets: async (req, res, next)=>{
  try {
   Diet.findAll().then(r => res.json(r))
  } catch (error) {
    next(error);
  }
}
}