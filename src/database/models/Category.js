module.exports = (sequelize, dataTypes) => {
    let alias = "Category"
    let cols = {
        ID: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        CATEGORY: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    }
    let config = {
        tableName: "Category",
        //timestamps: true
        //underscored: true
    }
    
const Category = sequelize.define(alias, cols, config);
return Category;
}