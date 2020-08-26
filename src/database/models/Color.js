module.exports = (sequelize, dataTypes) => {
    let alias = "Color"
    let cols = {
        ID: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        COLOR: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
    }
    let config = {
        tableName: "Color",
        //timestamps: true
        //underscored: true
    }
    
const Color = sequelize.define(alias, cols, config);
return Color;
}