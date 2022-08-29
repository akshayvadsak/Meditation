const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const User = sequelize.define('User', {
        USER_ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        USER_NAME: {
            type: DataTypes.STRING,
        },
        SOCIAL_ID: {
            type: DataTypes.STRING,
        },
        PROFILE_PIC: {
            type: DataTypes.TEXT,
        },
        EMAIL: {
            type: DataTypes.STRING,
        },
        PASSWORD: {
            type: DataTypes.STRING
        },
        COMPANY_CODE: {
            type: DataTypes.STRING
        },
        TYPE: {
            type: DataTypes.ENUM('COMPANY', 'NORMAL')
        },
        ISSOCIAL: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
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
        /// Total Meditaioon
        MEDITATION_IDS: {
            type: DataTypes.STRING
        },
        MEDITATION_START_DATE: {
            type: DataTypes.DATE
        },
        /// CURRENT STRIKE
        STRIKE: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },
        /// Longest STRIKE
        LONGEST_STRIKE: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },
        /// TOTAL STRIKE
        TOTAL_STRIKE: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },
        /// STRIKE IS ON
        ISSTRIKE: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        SUBCRIPTION_DAYS: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        SUBCRIPTION_END_DATE: {
            type: DataTypes.DATE
        },
        ISSUBCRIBE: {
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
        },
        STEP: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0
        },
        STEP_HISTORY: {
            type: DataTypes.TEXT
        }
    }, { tableName: 'USER' });
    return User;
};
