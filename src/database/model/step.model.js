const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const Step = sequelize.define('Step', {
        STEP_ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        DATE: {
            type: DataTypes.STRING,
        },
        STEP: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        FLAG: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { tableName: 'STEP' });
    return Step;
};