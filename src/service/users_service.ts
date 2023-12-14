import UserDto from "../dto/user_dto";
import { UserInput } from "../models/users";
import * as mapper from "../mapper/users_mapper";
import * as repository from "../repository/users_repository";

export const create = async (payload: UserInput): Promise<UserDto> => {
  const user = await repository.create(payload);
  return mapper.toDto(user);
};
