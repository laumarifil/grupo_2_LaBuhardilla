module.exports = (sequelize, dataTypes) => {
    let alias = "User"
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
        },
        surname: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        id_role: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(20),
            allowNull: true
        },
        address: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        id_city: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    
const User = sequelize.define(alias, cols, config);
return User;
}