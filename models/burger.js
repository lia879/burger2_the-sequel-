module.exports = function (sequelize, DataTypes) {
    var burgers = sequelize.define("burgers", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    }, {
        timestamps: false
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    return burgers;
};
