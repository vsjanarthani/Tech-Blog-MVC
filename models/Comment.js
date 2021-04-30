const { Model, DataTypes, Deferrable } = require('sequelize');
const uuid = require('uuid/v4');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuid(),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blog_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                isUUID: true
            },
            references: {
                model: Blog,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                isUUID: true
            },
            references: {
                model: User,
                key: 'id',
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);