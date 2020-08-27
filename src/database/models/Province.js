module.exports = (sequelize, dataTypes) => {
    let alias = "Province"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        name: {
            type: dataTypes.STRING(25),
            allowNull: false
        }
    }
    let config = {
        tableName: "Provinces",
        timestamps: false
    }
    
const Province = sequelize.define(alias, cols, config);
return Province;
}