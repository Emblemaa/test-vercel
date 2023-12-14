import { UserRole } from "../models/users";

export default interface UserDto {
  id: number;
  username: string;
  role?: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
