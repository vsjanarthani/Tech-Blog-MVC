const { Model, DataTypes } = require('sequelize');
const uuid = require('uuid/v4');

const sequelize = require('../config/connection.js');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    contents: {
        type: DataTypes.STRING,
        allowNull: false
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;