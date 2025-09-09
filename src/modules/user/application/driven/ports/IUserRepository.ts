import { UserEntity } from "../../../domain/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity | null>;
  findById(id: string): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<UserEntity | null>;
  update(user: UserEntity): Promise<UserEntity | null>;
  delete(id: string): Promise<UserEntity | null>;
}
