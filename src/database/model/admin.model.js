const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const Admin = sequelize.define('Admin', {
        ADMIN_ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        EMAIL: {
            type: DataTypes.STRING,
        },
        FULLNAME: {
            type: DataTypes.STRING
        },
        ROLE: {
            type: DataTypes.STRING,
            defaultValue: "ADMIN"
        },
        NAME: {
            type: DataTypes.STRING
        },
        PASSWORD: {
            type: DataTypes.STRING
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
    }, { tableName: 'ADMIN' });
    return Admin;
};
