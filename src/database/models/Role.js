module.exports = (sequelize, dataTypes) => {
    let alias = "Role"
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
        tableName: "Role",
        timestamps: false
    }
    
const Role = sequelize.define(alias, cols, config);
return Role;
}