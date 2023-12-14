import { Users } from "../models";
import { UserInput } from "../models/users";

export const create = async (payload: UserInput): Promise<Users> => {
  const user = await Users.create(payload);
  return user;
};

export const getById = async (id: number): Promise<Users> => {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new Error("not found");
  }
  return user;
};

export const getByUsername = async (username: string): Promise<Users> => {
  const user = await Users.findOne({ where: { username: username } });
  if (!user) {
    throw new Error("not found");
  }
  return user;
};
