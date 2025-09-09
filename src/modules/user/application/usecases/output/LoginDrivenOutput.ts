import z from "zod";
import { UserEntity } from "../../../domain/User";

export class LoginDrivenOutput {
  static schema = z.object({
    token: z.string(),
    user: z.any(),
  });

  private constructor(
    public readonly token: string,
    public readonly user: UserEntity
  ) { }

  static create(token: string, user: UserEntity): LoginDrivenOutput {
    return new LoginDrivenOutput(token, user);
  }

  static from(data: { token: string; user: UserEntity }): LoginDrivenOutput {
    return new LoginDrivenOutput(data.token, data.user);
  }
}
