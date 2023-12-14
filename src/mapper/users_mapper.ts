import UserDto from "../dto/user_dto";
import UserOutput from "../models/users";

function toDto(user: UserOutput): UserDto {
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    createdAt: user.createdAt,
    deletedAt: user.deletedAt,
    updatedAt: user.updatedAt,
  };
}

export { toDto };
