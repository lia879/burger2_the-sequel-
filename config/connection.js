// Dependencies 
var Sequelize = require("sequelize");

// // create a connection to sequelize burgers_db
var sequelize = new Sequelize("burgers_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// // exports the connection for other files to use
module.exports = sequelize;
