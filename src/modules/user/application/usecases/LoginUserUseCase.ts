import { inject } from "tsyringe";
import { UserNotActived } from "../../domain/errors/UserNotActived";
import { UserNotFound } from "../../domain/errors/UserNotFound";
import { IUserRepository } from "../driven/ports/IUserRepository";
import { LoginDriverInput } from "./input/LoginDriverInput";
import { LoginDrivenOutput } from "./output/LoginDrivenOutput";

export class LoginUserUseCase {
  constructor(
    @inject("IUserRepository")
    private readonly userRepository: IUserRepository) { }

  async execute(input: LoginDriverInput): Promise<LoginDrivenOutput> {
    const user = await this.userRepository.findByEmail(input.email);
    if (!user) {
      throw new UserNotFound('Usuário não encontrado');
    }
    if (!user.get('isActive')) {
      throw new UserNotActived('Usuário não ativo');
    }
    return LoginDrivenOutput.create('token', user);
  }
}