const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    score: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    healthLevel: {
      type: DataTypes.INTEGER,
      
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    image: {
      type: DataTypes.STRING,
    },
    readyInMinutes: {
      type: DataTypes.INTEGER,
     
    },
  });
};



// [ ] Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Tipo de dieta con las siguientes propiedades:
// ID
// Nombre