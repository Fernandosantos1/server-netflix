import { User } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";

export interface IUsersRepository{
  create(createUserDto:CreateUserDto):Promise<User>
}