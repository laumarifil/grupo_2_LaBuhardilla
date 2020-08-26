module.exports = (sequelize, dataTypes) => {
    let alias = "Role"
    let cols = {
        ID: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        ROLE: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
    }
    let config = {
        tableName: "Role",
        //timestamps: true
        //underscored: true
    }
    
const Role = sequelize.define(alias, cols, config);
return Role;
}