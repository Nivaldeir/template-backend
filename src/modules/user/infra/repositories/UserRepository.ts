
import { IUserRepository } from "../../application/driven/ports/IUserRepository";
import { UserEntity } from "../../domain/User";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Finding user by email: ${email}`);
    return null;
  }

  async findById(id: string): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Finding user by id: ${id}`);
    return null;
  }

  async create(user: UserEntity): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Creating user:`, user);
    return user;
  }

  async update(user: UserEntity): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Updating user:`, user);
    return user;
  }

  async delete(id: string): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Deleting user with id: ${id}`);
    return null;
  }
}
