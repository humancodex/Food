//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Diet } = require("./src/db");
const diets_List = require("./src/routes/controllers/Diets_list");

// Syncing all the models at once.
conn.sync({ force:false}).then(async () => {
  //antes de sincronizar el server cargas las dietas
 try { let dataBase = await Diet.findAll();

  if (dataBase.length < 1) {
    let formatted = diets_List.map((d) => {
      return {
        name: d.toLowerCase(),
      };
    });
    let Dts = await Diet.bulkCreate(formatted);
    server.listen(3001, () => {
      console.log("%s listening at 3001 :)"); // eslint-disable-line no-console
    });
  }else{

  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
}} catch (err) {console.error(err)}
});
