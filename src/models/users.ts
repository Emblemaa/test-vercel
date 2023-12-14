import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import bcrypt from "bcrypt";

export enum UserRole {
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

class Users extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id: number;
  public username: string;
  public password: string;
  public role!: UserRole;
  public createdAt!: Date;
  public updatedAt!: Date;
  public deletedAt!: Date;
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
    hooks: {
      beforeCreate: (user, _) => {
        {
          user.password =
            user.password && user.password != ""
              ? bcrypt.hashSync(user.password, 10)
              : "";
        }
      },
    },
  }
);

export default Users;
