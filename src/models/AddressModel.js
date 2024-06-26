// {
//   freezeTableName: true,
//   timestamps: true,
//   createdAt: 'created_at',
//   updatedAt: 'updated_at',
// }

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import User from './UserModel';

const Address = sequelize.define(
  'adresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_forget: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
Address.belongsTo(User, {
  as: 'users',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user',
    name: 'idUser',
    allowNull: false,
  },
});

export default Address;
