module.exports = (sequelize, dataTypes) => {
    let alias = "Payment"
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
        tableName: "Payments",
        timestamps: false
    }
    
const Payment = sequelize.define(alias, cols, config);
return Payment;
}