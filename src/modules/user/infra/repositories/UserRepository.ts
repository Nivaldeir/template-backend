
import { IUserRepository } from "../../application/driven/ports/IUserRepository";
import { UserEntity } from "../../domain/User";

const users: UserEntity[] = [];
export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Finding user by email: ${email}`);
    console.log(users);
    return users.find(user => user.get('email') === email) || null;
  }

  async findById(id: string): Promise<UserEntity | null> {
    return users.find(user => user.id === id) || null;
  }

  async create(user: UserEntity): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Creating user:`, user);
    users.push(user);
    return user;
  }

  async update(user: UserEntity): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Updating user:`, user);
    throw new Error('Not implemented');
  }

  async delete(id: string): Promise<UserEntity | null> {
    // Mock implementation
    console.log(`Mock: Deleting user with id: ${id}`);
    return users.find(user => user.id === id) || null;
  }
}
