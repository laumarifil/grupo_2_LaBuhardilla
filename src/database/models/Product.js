let dbColor = require('./Color')
let dbCategory = require('./Category')

module.exports = (sequelize, dataTypes) => {
    let alias = "Product"
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
        price: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        id_category: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        id_color: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "Products",
        timestamps: false
       
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: 'categoriaDelProducto',
            foreignKey: 'id_category'
        })
        Product.belongsTo(models.Color, {
            as: 'colorDelProducto',
            foreignKey: 'id_color'
        })
    }
return Product;
}