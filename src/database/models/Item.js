module.exports = (sequelize, dataTypes) => {
    let alias = "Item"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        id_cart: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        id_product: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "Items_cart",
        timestamps: false
        
    }
    
    const Item = sequelize.define(alias, cols, config);

    return Item;
}