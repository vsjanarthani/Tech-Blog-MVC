const { Model, DataTypes, Deferrable } = require('sequelize');
const uuid = require('uuid/v4');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuid(),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);