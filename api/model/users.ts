import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

enum UserRole {
  ADMIN,
  USER,
}

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  role?: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface UserInput
  extends Optional<UserAttributes, "id" | "username"> {}
export interface IngredientOuput extends Required<UserAttributes> {}

class Users extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id: number;
  public username: string;
  public password: string;
  public role?: UserRole | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public deletedAt?: Date | undefined;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

export default Users;
