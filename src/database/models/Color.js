module.exports = (sequelize, dataTypes) => {
    let alias = "Color"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        name: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
    }
    let config = {
        tableName: "Color",
        timestamps: false
    }
    
const Color = sequelize.define(alias, cols, config);
return Color;
}