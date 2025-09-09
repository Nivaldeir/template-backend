import { BaseEntity } from "../../../shared/domain/BaseEntity";
import { RoleUser } from "../../../shared/utils/enum/RoleUser";

export interface UserData {
  email: string;
  password: string;
  name: string;
  role: RoleUser;
  isActive?: boolean;
  avatar?: string;
  phone?: string;
  dateBirth?: Date;
}

export class UserEntity extends BaseEntity<UserData> {

  private constructor(
    data: UserData,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(data, id, createdAt, updatedAt);
  }

  static create(data: Omit<UserData, 'isActive'>): UserEntity {
    return new UserEntity({ ...data, isActive: true });
  }

  changePassword(password: string): void {
    this.set('password', password);
  }

  desactivate(): void {
    this.set('isActive', false);
  }
}