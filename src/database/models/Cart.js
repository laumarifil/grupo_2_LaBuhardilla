module.exports = (sequelize, dataTypes) => {
    let alias = "Cart"
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allownull: false
        },
        purchase_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        id_user: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        id_payment: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
       total: {
            type: dataTypes.DOUBLE,
            allowNull: false
        }
    }
    let config = {
        tableName: "Cart",
        timestamps: false
        
    }
    
    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}