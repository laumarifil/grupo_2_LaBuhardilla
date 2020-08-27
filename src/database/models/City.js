module.exports = (sequelize, dataTypes) => {
    let alias = "City"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        id_province: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        zip_code: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "Cities",
        timestamps: false
        
    }
    
    const City = sequelize.define(alias, cols, config);

    return City;
}