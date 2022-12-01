const db = require('../utils/database');

const {DataTypes} = require('sequelize');

const users = db.define('users', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name:{
        type: DataTypes.STRING,
       allowNull:false
       },

   last_name:{
    type: DataTypes.STRING,
    allowNull:false
   },
   email:{
    type: DataTypes.STRING,
    allowNull:false,
    unique: true,
    validate:{
        isEmail: true 
    }
   },
   password:{
type: DataTypes.STRING,
allowNull: false,

   },
   birthday:{
    type: DataTypes.STRING,

   }
})



module.exports = users;