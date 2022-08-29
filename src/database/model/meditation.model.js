const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
    const Meditation = sequelize.define('Meditation', {
        MEDITATION_ID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        IMAGE : {
            type: DataTypes.STRING,
        },
        MUSIC: {
            type: DataTypes.TEXT,
        }, 
        TITLE: {
            type: DataTypes.STRING,
        },
        SUBTITLE: {
            type: DataTypes.STRING
        },
        TEXT: {
            type: DataTypes.TEXT
        },
        CREATE_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        UPDATE_DATE: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        MEDITATION_TYPE: {
            type: DataTypes.ENUM('TRIAL', 'REGULAR'),
            defaultValue: 'REGULAR'
        }
    }, { tableName: 'MEDITATION' });
    return Meditation;
};
