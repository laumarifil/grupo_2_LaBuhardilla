module.exports = (sequelize, dataTypes) => {
    let alias = "Category"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }
    let config = {
        tableName: "Category",
        timestamps: false
    }
    
const Category = sequelize.define(alias, cols, config);
return Category;
}