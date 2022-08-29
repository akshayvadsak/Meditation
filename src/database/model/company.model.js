const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const Company = sequelize.define('Company', {
        COMPANY_ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        COMPANY_NAME: {
            type: DataTypes.STRING,
            allowNull: false
        },
        COMPANY_CODE: {
            type: DataTypes.STRING,
            allowNull: false
        },
        COMPANY_ADDRESS: {
            type: DataTypes.TEXT
        },
        ISACTIVE: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
        ISDELETE: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        CREATE_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        UPDATE_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, { tableName: 'COMPANY' });
    return Company;
};

